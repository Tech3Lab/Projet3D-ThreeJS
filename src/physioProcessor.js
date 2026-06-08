// ── Mode & paramètres physio (modifier ici) ──────────────────────────────
export const PROCESS_PHYSIO_LOCALLY = true;

export const PHYSIO_WINDOW_MS = 20000;
export const PHYSIO_SAMPLING_RATE = 100;
export const PHYSIO_BASELINE_MS = 20000;
export const PHYSIO_SCALING_VALUE = 8;
export const PHYSIO_Z_CLIP_MIN = -2;
export const PHYSIO_Z_CLIP_MAX = 2;
export const PHYSIO_MORPH_INTERVAL_MS = 1000;

// Couplage signal → param morph (null = valeur par défaut)
export const PHYSIO_COUPLINGS = {
    sphere: 'eda',
    torsion: 'ecg',
    width: null,
    height: null,
    depth: null,
    tess: null
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
    constructor(channel, { onMorphUpdate, onBaselineChange }) {
        this.channel = channel;
        this.onMorphUpdate = onMorphUpdate;
        this.onBaselineChange = onBaselineChange;
        this.signalNames = ['duration'];
        this.bucket = [];
        this.baselineBucket = [];
        this.baselineMeans = null;
        this.baselineStds = null;
        this.baselineReady = false;
        this.inBaseline = false;
        this.baselineStartedAt = null;
        this.lastMorphEmit = 0;
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

        this.baselineMeans = columnMeans(this.baselineBucket);
        this.baselineStds = columnStds(this.baselineBucket, this.baselineMeans);

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

        const means = columnMeans(this.bucket);
        const scaled = means.map((value, i) => {
            if (i === 0) return value;
            const std = this.baselineStds[i];
            if (!std || std === 0) return 0;
            let z = (value - this.baselineMeans[i]) / std;
            z = Math.max(PHYSIO_Z_CLIP_MIN, Math.min(PHYSIO_Z_CLIP_MAX, z));
            return Math.round(scale(z, -PHYSIO_SCALING_VALUE, PHYSIO_SCALING_VALUE, 0, 1023));
        });

        return buildMorphParams(scaled, this.signalNames);
    }
}
