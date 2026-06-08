// ── Paramètres physio → effets 3D (modifier ici) ─────────────────────────
//
// Chaîne de calcul (après calibration 20 s) :
//   1. Moyenne live du signal (fenêtre PHYSIO_WINDOW_MS)
//   2. z-score vs baseline : (valeur − μ) / σ
//   3. Clip du z entre PHYSIO_Z_CLIP_MIN et PHYSIO_Z_CLIP_MAX
//   4. Map du z vers 0…1023 (512 = neutre) via PHYSIO_SCALING_VALUE
//   5. Map 0…1023 vers la plage de l'effet via PHYSIO_PARAM_RANGES
//
// Effets 3D disponibles (voir script.js / GUI « Effet ») :
//   sphere   — morph 0 : arrondit le cube vers une sphère (influence morphTarget 0)
//   torsion  — morph 1 : vrille les sommets autour de l'axe X/Y/Z (morphTarget 1)
//   tess     — nombre de subdivisions de la géométrie (plus haut = mesh plus fin)
//   width    — largeur du box (redimensionne, pas un morph)
//   height   — hauteur du box
//   depth    — profondeur du box
//
// Réglages courants :
//   • Plus d'effet visuel  → baisser PHYSIO_SCALING_VALUE (ex. 8 → 4)
//   • Moins d'effet        → augmenter PHYSIO_SCALING_VALUE (ex. 8 → 12)
//   • Changer quel signal pilote quoi → PHYSIO_COUPLINGS ('eda', 'ecg', 'rsp', 'hr', ou null)
//   • Changer les bornes min/max d'un effet → PHYSIO_PARAM_RANGES
//   • Valeur quand capteur absent → PHYSIO_PARAM_DEFAULTS
//
export const PROCESS_PHYSIO_LOCALLY = true;

// Fenêtre glissante pour les moyennes live (ms)
export const PHYSIO_WINDOW_MS = 5000;
// Fréquence d'échantillonnage supposée pour la détection HR (Hz)
export const PHYSIO_SAMPLING_RATE = 100;
// Durée de la phase calibration / baseline (ms)
export const PHYSIO_BASELINE_MS = 20000;
// |z| = cette valeur → map vers 0 ou 1023 ; plus petit = réaction plus forte
export const PHYSIO_SCALING_VALUE = 8;
// Bornes du z-score avant mapping (évite les pics extrêmes)
export const PHYSIO_Z_CLIP_MIN = -2;
export const PHYSIO_Z_CLIP_MAX = 2;
// Fréquence de mise à jour morph + barre métriques (ms)
export const PHYSIO_MORPH_INTERVAL_MS = 1000;
// Signal considéré périmé s'il n'arrive plus depuis (ms)
export const PHYSIO_STALE_MS = 2000;
// true : un paquet entièrement à 0 = capteur débranché
export const PHYSIO_ZERO_MEANS_DISCONNECTED = true;

const NEUTRAL_SCALED = 512; // 512 sur l'échelle 0…1023 = signal au niveau baseline

// ── HR dérivée de l'ECG (démo visuelle, pas analyse clinique) ────────────
export const USE_SIMPLE_HR = true;
export const HR_MIN_PEAK_DISTANCE_SEC = 0.35;
export const HR_BPM_MIN = 40;
export const HR_BPM_MAX = 180;
export const HR_EMA_ALPHA = 0.3;
export const HR_FALLBACK_BPM = 70;
export const HR_BASELINE_STD_MIN = 5;
export const HR_BASELINE_CHUNK_SEC = 5;

// Quel signal physiologique pilote chaque effet.
// null = effet fixé à PHYSIO_PARAM_DEFAULTS (pas de couplage live).
// Signaux possibles : noms du flux WebSocket en minuscules ('eda', 'ecg', 'rsp'…)
// 'hr' est dérivé de 'ecg' si USE_SIMPLE_HR est actif.
export const PHYSIO_COUPLINGS = {
    sphere: 'eda',
    torsion: null,
    width: 'rsp',
    height: null,
    depth: null,
    tess: 'hr'
};

// Valeurs par défaut quand le signal est absent, déconnecté, ou non couplé (null).
export const PHYSIO_PARAM_DEFAULTS = {
    sphere: 0,
    torsion: 0,
    width: 1,
    height: 1,
    depth: 1,
    tess: 20
};

// [min, max] de chaque effet : 0→min, 512→milieu, 1023→max sur l'échelle normalisée.
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

function rowValueCols(row) {
    return row.length - 1;
}

function rowReceivedAt(row) {
    return row[row.length - 1];
}

function columnMeans(rows, maxAgeMs = Infinity) {
    if (rows.length === 0) return [];
    const cols = rowValueCols(rows[0]);
    const sums = new Array(cols).fill(0);
    const counts = new Array(cols).fill(0);
    const cutoff = maxAgeMs === Infinity ? 0 : Date.now() - maxAgeMs;

    for (const row of rows) {
        if (maxAgeMs !== Infinity && rowReceivedAt(row) < cutoff) continue;

        for (let i = 0; i < cols; i++) {
            const value = row[i];
            if (value === null || value === undefined || Number.isNaN(value)) continue;
            sums[i] += value;
            counts[i]++;
        }
    }

    return sums.map((sum, i) => (counts[i] > 0 ? sum / counts[i] : null));
}

function columnStds(rows, means, maxAgeMs = Infinity) {
    if (rows.length === 0) return [];
    const cols = rowValueCols(rows[0]);
    const vars = new Array(cols).fill(0);
    const counts = new Array(cols).fill(0);
    const cutoff = maxAgeMs === Infinity ? 0 : Date.now() - maxAgeMs;

    for (const row of rows) {
        if (maxAgeMs !== Infinity && rowReceivedAt(row) < cutoff) continue;

        for (let i = 0; i < cols; i++) {
            const value = row[i];
            if (value === null || value === undefined || Number.isNaN(value) || means[i] === null) continue;
            const d = value - means[i];
            vars[i] += d * d;
            counts[i]++;
        }
    }

    return vars.map((v, i) => (counts[i] > 0 ? Math.sqrt(v / counts[i]) : 0));
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

// Convertit les valeurs 0…1023 (une par signal) en paramètres morph via COUPLINGS + RANGES.
function buildMorphParams(scaledMeans, signalNames, isSignalStale = null) {
    const result = {};
    for (const [param, signalName] of Object.entries(PHYSIO_COUPLINGS)) {
        if (!signalName) {
            result[param] = PHYSIO_PARAM_DEFAULTS[param];
            continue;
        }
        const key = signalName.toLowerCase();
        const idx = signalNames.indexOf(key);
        if (idx < 0 || (isSignalStale && isSignalStale(key))) {
            result[param] = PHYSIO_PARAM_DEFAULTS[param];
            continue;
        }
        const [min, max] = PHYSIO_PARAM_RANGES[param];
        result[param] = scale(scaledMeans[idx], 0, 1023, min, max);
    }
    return result;
}

const DERIVED_SIGNALS = new Set(['hr']);

// ── Processeur ───────────────────────────────────────────────────────────

export class PhysioProcessor {
    constructor(channel, { onMorphUpdate, onBaselineChange, onLiveMetrics }) {
        this.channel = channel;
        this.onMorphUpdate = onMorphUpdate;
        this.onBaselineChange = onBaselineChange;
        this.onLiveMetrics = onLiveMetrics;
        this.signalNames = ['duration'];
        this.signalBuffers = {};
        this.baselineBucket = [];
        this.baselineMeans = null;
        this.baselineStds = null;
        this.baselineReady = false;
        this.inBaseline = false;
        this.baselineStartedAt = null;
        this.baselineClock = null;
        this.lastMorphEmit = 0;
        this.lastMetricsEmit = 0;
        this.lastHrBpm = HR_FALLBACK_BPM;
        this.lastInstantBpm = null;
        this.lastSignalAt = {};
        this.latestPacketMean = {};
        this.signalConnected = {};
        this.liveTick = setInterval(() => this.pruneAndEmitLive(), PHYSIO_MORPH_INTERVAL_MS);
    }

    rawSignalNames() {
        return this.signalNames.filter((name) => name !== 'duration' && !DERIVED_SIGNALS.has(name));
    }

    toSignalNumber(value) {
        const num = Number(value);
        return Number.isFinite(num) ? num : null;
    }

    isDisconnectedValue(value) {
        return PHYSIO_ZERO_MEANS_DISCONNECTED && this.toSignalNumber(value) === 0;
    }

    isSignalDisconnected(name) {
        if (name === 'hr') return this.isSignalDisconnected('ecg');
        if (!(name in this.lastSignalAt)) return true;
        if (Date.now() - this.lastSignalAt[name] > PHYSIO_STALE_MS) return true;
        if (name in this.latestPacketMean && this.latestPacketMean[name] === null) return true;
        return false;
    }

    clearSignalBuffer(name) {
        this.signalBuffers[name] = [];
        this.latestPacketMean[name] = null;
        delete this.lastSignalAt[name];
        this.signalConnected[name] = false;
    }

    appendSignalSamples(name, samples, receivedAt) {
        if (!this.signalBuffers[name]) this.signalBuffers[name] = [];

        for (const sample of samples) {
            const value = this.toSignalNumber(sample[1]);
            if (value === null) continue;
            if (this.isDisconnectedValue(value)) continue;
            this.signalBuffers[name].push({ v: value, t: receivedAt });
        }

        this.trimSignalBuffer(name);
    }

    trimSignalBuffer(name) {
        const buffer = this.signalBuffers[name];
        if (!buffer || buffer.length === 0) return;

        const cutoff = Date.now() - PHYSIO_WINDOW_MS;
        const trimmed = buffer.filter((sample) => sample.t >= cutoff);
        const maxPts = maxBucketPoints(PHYSIO_WINDOW_MS, PHYSIO_SAMPLING_RATE);

        this.signalBuffers[name] = trimmed.length > maxPts
            ? trimmed.slice(trimmed.length - maxPts)
            : trimmed;
    }

    trimAllSignalBuffers() {
        for (const name of this.rawSignalNames()) {
            this.trimSignalBuffer(name);
        }
    }

    signalBufferValues(name) {
        const buffer = this.signalBuffers[name];
        if (!buffer || buffer.length === 0) return [];
        const cutoff = Date.now() - PHYSIO_WINDOW_MS;
        return buffer.filter((sample) => sample.t >= cutoff).map((sample) => sample.v);
    }

    getLiveSignalMean(name) {
        if (this.isSignalDisconnected(name)) return null;
        if (name in this.latestPacketMean && this.latestPacketMean[name] !== undefined) {
            return this.latestPacketMean[name];
        }
        const values = this.signalBufferValues(name);
        return values.length > 0 ? arrayMean(values) : null;
    }

    handlePacketSignals(signals, receivedAt) {
        for (const name of this.rawSignalNames()) {
            if (!(name in signals)) {
                this.clearSignalBuffer(name);
                continue;
            }

            const values = signals[name]
                .map((sample) => this.toSignalNumber(sample[1]))
                .filter((value) => value !== null);
            const disconnected = values.length === 0
                || (PHYSIO_ZERO_MEANS_DISCONNECTED && values.every((value) => value === 0));

            if (disconnected) {
                const wasConnected = this.signalConnected[name] !== false;
                this.clearSignalBuffer(name);
                if (wasConnected && (name === 'eda' || name === 'rsp')) {
                    console.log(
                        `[canal ${this.channel}] ${name.toUpperCase()} déconnecté` +
                        ` (paquet: [${values.slice(0, 5).join(', ')}${values.length > 5 ? ', …' : ''}])`
                    );
                }
                continue;
            }

            this.signalConnected[name] = true;
            this.latestPacketMean[name] = arrayMean(values);
            this.lastSignalAt[name] = receivedAt;

            if (!this.inBaseline) {
                this.appendSignalSamples(name, signals[name], receivedAt);
            }
        }
    }

    buildBaselineRow(signals, sampleIndex, receivedAt) {
        const anchor = this.signalNames[1];
        const row = [signals[anchor][sampleIndex][0]];

        for (let j = 1; j < this.signalNames.length; j++) {
            const key = this.signalNames[j];
            if (DERIVED_SIGNALS.has(key)) continue;

            const raw = signals[key]?.[sampleIndex]?.[1];
            if (raw === undefined) {
                row.push(null);
            } else if (this.isDisconnectedValue(raw)) {
                row.push(null);
            } else {
                row.push(this.toSignalNumber(raw));
            }
        }

        row.push(receivedAt);
        return row;
    }

    pruneAndEmitLive() {
        if (this.inBaseline) {
            this.maybeEmitLiveMetrics(true);
            return;
        }
        if (!this.baselineReady) return;

        this.trimAllSignalBuffers();

        const morph = this.computeMorphParams();
        if (morph) {
            this.lastMorphEmit = Date.now();
            this.onMorphUpdate(morph);
        }
    }

    startBaselineClock() {
        this.clearBaselineClock();
        this.baselineClock = setTimeout(() => {
            if (this.inBaseline) {
                console.log(`[canal ${this.channel}] Baseline durée atteinte (${PHYSIO_BASELINE_MS} ms)`);
                this.finishBaseline();
            }
        }, PHYSIO_BASELINE_MS);
    }

    clearBaselineClock() {
        if (this.baselineClock) {
            clearTimeout(this.baselineClock);
            this.baselineClock = null;
        }
    }

    getBaselineSecondsLeft() {
        if (!this.inBaseline || !this.baselineStartedAt) return null;
        const remainingMs = PHYSIO_BASELINE_MS - (Date.now() - this.baselineStartedAt);
        return Math.max(0, Math.ceil(remainingMs / 1000));
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

    updateHeartRate() {
        if (!USE_SIMPLE_HR) return;

        const ecgIdx = this.signalNames.indexOf('ecg');
        if (ecgIdx < 0) return;

        this.ensureHrSignal();

        if (this.isSignalDisconnected('ecg')) {
            this.lastInstantBpm = null;
            return;
        }

        const ecgSamples = this.inBaseline
            ? this.baselineBucket
                .map((row) => row[ecgIdx])
                .filter((value) => value !== null && value !== undefined && !Number.isNaN(value))
            : this.signalBufferValues('ecg');

        const bpm = estimateHeartRate(ecgSamples);
        this.lastInstantBpm = bpm;

        if (bpm !== null) {
            this.lastHrBpm = HR_EMA_ALPHA * bpm + (1 - HR_EMA_ALPHA) * this.lastHrBpm;
        }
    }

    buildMeansVector() {
        const means = new Array(this.signalNames.length).fill(null);

        for (let i = 0; i < this.signalNames.length; i++) {
            const name = this.signalNames[i];
            if (name === 'duration') continue;
            if (DERIVED_SIGNALS.has(name)) continue;
            means[i] = this.getLiveSignalMean(name);
        }

        this.updateHeartRate();

        const hrIdx = this.signalNames.indexOf('hr');
        if (hrIdx >= 0) {
            means[hrIdx] = this.isSignalDisconnected('ecg') ? null : this.lastHrBpm;
        }

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

        const receivedAt = Date.now();

        if (this.signalNames.length === 1) {
            const discovered = Object.keys(signals).sort();
            this.signalNames.push(...discovered);
            console.log(`[canal ${this.channel}] Signaux détectés: ${discovered.join(', ')}`);
        }

        if (!this.baselineStartedAt) {
            this.baselineStartedAt = receivedAt;
            this.inBaseline = true;
            this.onBaselineChange?.(true);
            this.startBaselineClock();
        }

        this.handlePacketSignals(signals, receivedAt);

        const anchor = this.signalNames[1];
        const packetSize = signals[anchor]?.length ?? 0;

        if (this.inBaseline) {
            for (let i = 0; i < packetSize; i++) {
                this.baselineBucket.push(this.buildBaselineRow(signals, i, receivedAt));
            }

            if (receivedAt - this.baselineStartedAt >= PHYSIO_BASELINE_MS) {
                this.finishBaseline();
            }

            this.maybeEmitLiveMetrics();
            return;
        }

        this.trimAllSignalBuffers();

        const now = Date.now();
        if (now - this.lastMorphEmit < PHYSIO_MORPH_INTERVAL_MS) return;
        this.lastMorphEmit = now;

        const morph = this.computeMorphParams();
        if (morph) this.onMorphUpdate(morph);
    }

    maybeEmitLiveMetrics(force = false) {
        const now = Date.now();
        if (!force && now - this.lastMetricsEmit < PHYSIO_MORPH_INTERVAL_MS) return;
        this.lastMetricsEmit = now;

        if (!this.inBaseline) {
            this.trimAllSignalBuffers();
        }

        this.updateHeartRate();

        const edaMean = this.getLiveSignalMean('eda');
        const rspMean = this.getLiveSignalMean('rsp');
        const hrSmooth = this.isSignalDisconnected('ecg') ? null : this.lastHrBpm;
        const hrInstant = this.isSignalDisconnected('ecg') ? null : this.lastInstantBpm;

        const baselineSecondsLeft = this.getBaselineSecondsLeft();

        this.onLiveMetrics?.({
            hrSmooth,
            hrInstant,
            edaMean,
            rspMean,
            morph: null,
            inBaseline: this.inBaseline,
            baselineSecondsLeft
        });

        if (this.inBaseline) {
            const instantLabel = hrInstant !== null ? hrInstant.toFixed(0) : '—';
            const hrLabel = hrSmooth !== null ? hrSmooth.toFixed(0) : '—';
            const countdownLabel = baselineSecondsLeft !== null ? `${baselineSecondsLeft} s` : '…';
            console.log(
                `[canal ${this.channel}] HR live: ${hrLabel} BPM (instant ${instantLabel})` +
                ` | EDA μ=${edaMean !== null ? edaMean.toFixed(0) : '—'}` +
                ` | RSP μ=${rspMean !== null ? rspMean.toFixed(0) : '—'} | calibration ${countdownLabel}`
            );
        }
    }

    finishBaseline() {
        if (!this.inBaseline) return;
        this.clearBaselineClock();

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
                const ecgSamples = this.baselineBucket
                    .map((row) => row[ecgIdx])
                    .filter((value) => value !== null && value !== undefined && !Number.isNaN(value));
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

        const baselineCount = this.baselineBucket.length;
        this.baselineReady = true;
        this.inBaseline = false;
        this.baselineBucket = [];
        this.signalBuffers = {};
        this.latestPacketMean = {};
        this.onBaselineChange?.(false);
        console.log(`[canal ${this.channel}] Baseline terminée (${baselineCount} points)`);
    }

    // Signal live → z-score (baseline) → 0…1023 → effets sphere/torsion/tess/…
    computeMorphParams() {
        if (!this.baselineReady) return null;

        this.trimAllSignalBuffers();

        const means = this.buildMeansVector();
        const hasAnySignal = this.rawSignalNames().some((name) => means[this.signalNames.indexOf(name)] !== null);

        if (!hasAnySignal) {
            const morph = { ...PHYSIO_PARAM_DEFAULTS };
            this.emitLiveMorphMetrics(means, morph);
            return morph;
        }

        const scaled = means.map((value, i) => {
            const signalName = this.signalNames[i];
            if (signalName === 'duration') return 0;

            if (DERIVED_SIGNALS.has(signalName)) {
                if (value === null || value === undefined) return NEUTRAL_SCALED;
                const std = this.baselineStds[i];
                if (!std || std === 0) return NEUTRAL_SCALED;
                let z = (value - this.baselineMeans[i]) / std;
                z = Math.max(PHYSIO_Z_CLIP_MIN, Math.min(PHYSIO_Z_CLIP_MAX, z));
                return Math.round(scale(z, -PHYSIO_SCALING_VALUE, PHYSIO_SCALING_VALUE, 0, 1023));
            }

            if (this.isSignalDisconnected(signalName) || value === null || value === undefined) {
                return NEUTRAL_SCALED;
            }

            const std = this.baselineStds[i];
            if (!std || std === 0) return NEUTRAL_SCALED;
            let z = (value - this.baselineMeans[i]) / std;
            z = Math.max(PHYSIO_Z_CLIP_MIN, Math.min(PHYSIO_Z_CLIP_MAX, z));
            return Math.round(scale(z, -PHYSIO_SCALING_VALUE, PHYSIO_SCALING_VALUE, 0, 1023));
        });

        const morph = buildMorphParams(
            scaled,
            this.signalNames,
            (name) => this.isSignalDisconnected(name)
        );

        this.emitLiveMorphMetrics(means, morph);
        return morph;
    }

    emitLiveMorphMetrics(means, morph) {
        const edaIdx = this.signalNames.indexOf('eda');
        const rspIdx = this.signalNames.indexOf('rsp');
        const edaMean = edaIdx >= 0 ? this.getLiveSignalMean('eda') : null;
        const rspMean = rspIdx >= 0 ? this.getLiveSignalMean('rsp') : null;
        const hrSmooth = this.isSignalDisconnected('ecg') ? null : this.lastHrBpm;
        const hrInstant = this.isSignalDisconnected('ecg') ? null : this.lastInstantBpm;

        this.lastMetricsEmit = Date.now();
        this.onLiveMetrics?.({
            hrSmooth,
            hrInstant,
            edaMean,
            rspMean,
            morph,
            inBaseline: false
        });

        const instantLabel = hrInstant !== null ? hrInstant.toFixed(0) : '—';
        const hrLabel = hrSmooth !== null ? hrSmooth.toFixed(0) : '—';
        console.log(
            `[canal ${this.channel}] HR live: ${hrLabel} BPM (instant ${instantLabel})` +
            ` | EDA μ=${edaMean !== null ? edaMean.toFixed(0) : '—'}` +
            ` | RSP μ=${rspMean !== null ? rspMean.toFixed(0) : '—'}` +
            ` | sphere=${morph.sphere.toFixed(1)} tess=${morph.tess.toFixed(1)} torsion=${morph.torsion.toFixed(1)}`
        );
    }
}
