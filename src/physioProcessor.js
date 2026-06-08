// ── Mode & paramètres physio (modifier ici) ──────────────────────────────
export const PROCESS_PHYSIO_LOCALLY = true;

export const PHYSIO_WINDOW_MS = 20000;
export const PHYSIO_SAMPLING_RATE = 100;
export const PHYSIO_BASELINE_MS = 20000;
export const PHYSIO_SCALING_VALUE = 8;
export const PHYSIO_Z_CLIP_MIN = -2;
export const PHYSIO_Z_CLIP_MAX = 2;
export const PHYSIO_MORPH_INTERVAL_MS = 1000;

// Dérivation ECG → HR (démo visuelle, pas analyse scientifique)
export const USE_SIMPLE_HR = true;
export const HR_MIN_PEAK_DISTANCE_SEC = 0.35;
export const HR_BPM_MIN = 40;
export const HR_BPM_MAX = 180;
export const HR_EMA_ALPHA = 0.3;
export const HR_FALLBACK_BPM = 70;
export const HR_BASELINE_STD_MIN = 5;
export const HR_BASELINE_CHUNK_SEC = 5;

// Couplage signal → param morph (null = valeur par défaut)
export const PHYSIO_COUPLINGS = {
    sphere: 'eda',
    torsion: null,
    width: null,
    height: null,
    depth: null,
    tess: 'hr'
};

export const PHYSIO_PARAM_DEFAULTS = {
    sphere: 0,
    torsion: 0,
    width: 1,
    height: 1,
    depth: 1,
    tess: 20
};

export const PHYSIO_PARAM_RANGES = {
    sphere: [-100, 200],
    torsion: [-100, 100],
    width: [0, 2],
    height: [0, 2],
    depth: [0, 2],
    tess: [1, 64]
};

// ── Utilitaires ───────────────────────────────────────────────────────────

function scale(x, oldMin, oldMax, newMin, newMax) {
    if (oldMax === oldMin) return newMin;
    const scaled = ((x - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
    return Number.isNaN(scaled) ? newMin : scaled;
}

function columnMeans(rows) {
    if (rows.length === 0) return [];
    const cols = rows[0].length;
    const means = new Array(cols).fill(0);
    for (const row of rows) {
        for (let i = 0; i < cols; i++) {
            means[i] += row[i];
        }
    }
    return means.map((v) => v / rows.length);
}

function columnStds(rows, means) {
    if (rows.length === 0) return [];
    const cols = rows[0].length;
    const vars = new Array(cols).fill(0);
    for (const row of rows) {
        for (let i = 0; i < cols; i++) {
            const d = row[i] - means[i];
            vars[i] += d * d;
        }
    }
    return vars.map((v) => Math.sqrt(v / rows.length));
}

function maxBucketPoints(windowMs, samplingRate) {
    return Math.ceil(windowMs / (1000 / samplingRate));
}

function arrayMean(values) {
    if (values.length === 0) return 0;
    return values.reduce((sum, v) => sum + v, 0) / values.length;
}

function arrayStd(values, mu = arrayMean(values)) {
    if (values.length === 0) return 0;
    const variance = values.reduce((sum, v) => sum + (v - mu) ** 2, 0) / values.length;
    return Math.sqrt(variance);
}

/**
 * Estimation BPM simplifiée pour démo : pics locaux sur ECG @ 100 Hz.
 * Retourne null si pas assez de pics détectés.
 */
export function estimateHeartRate(ecgSamples, samplingRate = PHYSIO_SAMPLING_RATE) {
    if (!ecgSamples || ecgSamples.length < samplingRate) return null;

    const mu = arrayMean(ecgSamples);
    const sigma = arrayStd(ecgSamples, mu);
    const threshold = mu + 0.35 * sigma;
    const minDistance = Math.max(1, Math.floor(samplingRate * HR_MIN_PEAK_DISTANCE_SEC));

    const peaks = [];
    for (let i = 1; i < ecgSamples.length - 1; i++) {
        const value = ecgSamples[i];
        if (value < threshold) continue;
        if (value <= ecgSamples[i - 1] || value <= ecgSamples[i + 1]) continue;

        if (peaks.length > 0 && i - peaks[peaks.length - 1] < minDistance) {
            const lastPeak = peaks[peaks.length - 1];
            if (value > ecgSamples[lastPeak]) peaks[peaks.length - 1] = i;
            continue;
        }
        peaks.push(i);
    }

    if (peaks.length < 2) return null;

    const intervals = [];
    for (let i = 1; i < peaks.length; i++) {
        intervals.push((peaks[i] - peaks[i - 1]) / samplingRate);
    }

    const meanRR = arrayMean(intervals);
    if (meanRR <= 0) return null;

    const bpm = 60 / meanRR;
    if (bpm < HR_BPM_MIN || bpm > HR_BPM_MAX) return null;
    return bpm;
}

function buildMorphParams(scaledMeans, signalNames) {
    const result = {};
    for (const [param, signalName] of Object.entries(PHYSIO_COUPLINGS)) {
        if (!signalName) {
            result[param] = PHYSIO_PARAM_DEFAULTS[param];
            continue;
        }
        const idx = signalNames.indexOf(signalName.toLowerCase());
        if (idx < 0) {
            result[param] = PHYSIO_PARAM_DEFAULTS[param];
            continue;
        }
        const [min, max] = PHYSIO_PARAM_RANGES[param];
        result[param] = scale(scaledMeans[idx], 0, 1023, min, max);
    }
    return result;
}

// ── Processeur ───────────────────────────────────────────────────────────

export class PhysioProcessor {
    constructor(channel, { onMorphUpdate, onBaselineChange, onLiveMetrics }) {
        this.channel = channel;
        this.onMorphUpdate = onMorphUpdate;
        this.onBaselineChange = onBaselineChange;
        this.onLiveMetrics = onLiveMetrics;
        this.signalNames = ['duration'];
        this.bucket = [];
        this.baselineBucket = [];
        this.baselineMeans = null;
        this.baselineStds = null;
        this.baselineReady = false;
        this.inBaseline = false;
        this.baselineStartedAt = null;
        this.lastMorphEmit = 0;
        this.lastHrBpm = HR_FALLBACK_BPM;
        this.lastInstantBpm = null;
    }

    ensureHrSignal() {
        if (!USE_SIMPLE_HR) return;
        if (this.signalNames.includes('ecg') && !this.signalNames.includes('hr')) {
            this.signalNames.push('hr');
            console.log(`[canal ${this.channel}] Dérivation HR activée (ECG → BPM)`);
        }
    }

    estimateHrStd(bucket, ecgIdx) {
        const chunkSize = Math.floor(PHYSIO_SAMPLING_RATE * HR_BASELINE_CHUNK_SEC);
        const bpms = [];

        for (let start = 0; start + chunkSize <= bucket.length; start += chunkSize) {
            const chunk = bucket.slice(start, start + chunkSize).map((row) => row[ecgIdx]);
            const bpm = estimateHeartRate(chunk);
            if (bpm !== null) bpms.push(bpm);
        }

        if (bpms.length < 2) return HR_BASELINE_STD_MIN;
        return Math.max(arrayStd(bpms), HR_BASELINE_STD_MIN);
    }

    computeEnrichedMeans(rows) {
        const means = columnMeans(rows);
        while (means.length < this.signalNames.length) {
            means.push(0);
        }

        if (!USE_SIMPLE_HR) return means;

        const ecgIdx = this.signalNames.indexOf('ecg');
        if (ecgIdx < 0) return means;

        this.ensureHrSignal();
        const hrIdx = this.signalNames.indexOf('hr');
        const ecgSamples = rows.map((row) => row[ecgIdx]);
        const bpm = estimateHeartRate(ecgSamples);
        this.lastInstantBpm = bpm;

        if (bpm !== null) {
            this.lastHrBpm = HR_EMA_ALPHA * bpm + (1 - HR_EMA_ALPHA) * this.lastHrBpm;
        }

        means[hrIdx] = this.lastHrBpm;
        return means;
    }

    ingest(rawMessage) {
        let obj;
        try {
            obj = typeof rawMessage === 'string' ? JSON.parse(rawMessage) : rawMessage;
        } catch {
            console.warn(`[canal ${this.channel}] Message physio JSON invalide`);
            return;
        }

        if (!obj.data || !Array.isArray(obj.data)) {
            console.warn(`[canal ${this.channel}] Message physio sans champ data[]`);
            return;
        }

        const signals = {};
        for (const point of obj.data) {
            if (!point.name) continue;
            const name = point.name.toLowerCase();
            if (!signals[name]) signals[name] = [];
            signals[name].push([point.timestamp, point.value]);
        }

        if (Object.keys(signals).length === 0) {
            console.warn(`[canal ${this.channel}] Paquet physio vide`);
            return;
        }

        if (this.signalNames.length === 1) {
            const discovered = Object.keys(signals).sort();
            this.signalNames.push(...discovered);
            console.log(`[canal ${this.channel}] Signaux détectés: ${discovered.join(', ')}`);
        }

        const anchor = this.signalNames[1];
        const packetSize = signals[anchor]?.length ?? 0;

        for (let i = 0; i < packetSize; i++) {
            const dataPoint = [signals[anchor][i][0]];
            for (let j = 1; j < this.signalNames.length; j++) {
                const key = this.signalNames[j];
                dataPoint.push(signals[key][i][1]);
            }
            this.addDataPoint(dataPoint);
        }
    }

    addDataPoint(dataPoint) {
        if (!this.baselineStartedAt) {
            this.baselineStartedAt = Date.now();
            this.inBaseline = true;
            this.onBaselineChange?.(true);
        }

        if (this.inBaseline) {
            this.baselineBucket.push(dataPoint);
            if (Date.now() - this.baselineStartedAt >= PHYSIO_BASELINE_MS) {
                this.finishBaseline();
            }
            return;
        }

        this.bucket.push(dataPoint);
        this.trimBucket();

        const now = Date.now();
        if (now - this.lastMorphEmit < PHYSIO_MORPH_INTERVAL_MS) return;
        this.lastMorphEmit = now;

        const morph = this.computeMorphParams();
        if (morph) this.onMorphUpdate(morph);
    }

    finishBaseline() {
        if (this.baselineBucket.length === 0) {
            console.warn(`[canal ${this.channel}] Baseline vide, nouvel essai au prochain paquet`);
            this.baselineStartedAt = null;
            this.inBaseline = false;
            this.onBaselineChange?.(false);
            return;
        }

        this.ensureHrSignal();

        const rawMeans = columnMeans(this.baselineBucket);
        const rawStds = columnStds(this.baselineBucket, rawMeans);
        this.baselineMeans = [...rawMeans];
        this.baselineStds = [...rawStds];

        while (this.baselineMeans.length < this.signalNames.length) {
            this.baselineMeans.push(0);
            this.baselineStds.push(HR_BASELINE_STD_MIN);
        }

        if (USE_SIMPLE_HR) {
            const ecgIdx = this.signalNames.indexOf('ecg');
            const hrIdx = this.signalNames.indexOf('hr');
            if (ecgIdx >= 0 && hrIdx >= 0) {
                const ecgSamples = this.baselineBucket.map((row) => row[ecgIdx]);
                const baselineBpm = estimateHeartRate(ecgSamples) ?? HR_FALLBACK_BPM;
                this.baselineMeans[hrIdx] = baselineBpm;
                this.baselineStds[hrIdx] = this.estimateHrStd(this.baselineBucket, ecgIdx);
                this.lastHrBpm = baselineBpm;
                console.log(`[canal ${this.channel}] Baseline HR ≈ ${baselineBpm.toFixed(0)} BPM`);
            }
        }

        for (let i = 0; i < this.baselineStds.length; i++) {
            if (this.baselineStds[i] === 0) {
                console.warn(`[canal ${this.channel}] std=0 pour colonne ${i} (${this.signalNames[i] ?? i}), signal ignoré`);
            }
        }

        this.baselineReady = true;
        this.inBaseline = false;
        this.bucket = [];
        this.onBaselineChange?.(false);
        console.log(`[canal ${this.channel}] Baseline terminée (${this.baselineBucket.length} points)`);
    }

    trimBucket() {
        const maxPts = maxBucketPoints(PHYSIO_WINDOW_MS, PHYSIO_SAMPLING_RATE);
        const overflow = this.bucket.length - maxPts;
        if (overflow > 0) {
            this.bucket.splice(0, overflow);
        }
    }

    computeMorphParams() {
        if (!this.baselineReady || this.bucket.length === 0) return null;

        const means = this.computeEnrichedMeans(this.bucket);
        const scaled = means.map((value, i) => {
            if (i === 0) return value;
            const std = this.baselineStds[i];
            if (!std || std === 0) return 0;
            let z = (value - this.baselineMeans[i]) / std;
            z = Math.max(PHYSIO_Z_CLIP_MIN, Math.min(PHYSIO_Z_CLIP_MAX, z));
            return Math.round(scale(z, -PHYSIO_SCALING_VALUE, PHYSIO_SCALING_VALUE, 0, 1023));
        });

        const morph = buildMorphParams(scaled, this.signalNames);
        const edaIdx = this.signalNames.indexOf('eda');
        const metrics = {
            hrSmooth: this.lastHrBpm,
            hrInstant: this.lastInstantBpm,
            edaMean: edaIdx >= 0 ? means[edaIdx] : null,
            morph
        };

        this.onLiveMetrics?.(metrics);

        const instantLabel = this.lastInstantBpm !== null ? this.lastInstantBpm.toFixed(0) : '—';
        console.log(
            `[canal ${this.channel}] HR live: ${this.lastHrBpm.toFixed(0)} BPM (instant ${instantLabel})` +
            ` | EDA μ=${edaIdx >= 0 ? means[edaIdx].toFixed(0) : '—'}` +
            ` | sphere=${morph.sphere.toFixed(1)} tess=${morph.tess.toFixed(1)}`
        );

        return morph;
    }
}
