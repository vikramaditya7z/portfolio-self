/**
 * Shared Motion Constants & Easings for SIGNAL / NOISE
 * Source of truth: docs/MOTION_SPEC.md & docs/VISUAL_SYSTEM.md
 */

export const EASINGS = {
  // Editorial Snap: Rapid initial movement with clean, confident deceleration
  editorial: [0.16, 1.0, 0.3, 1.0] as const,

  // Technical Precision: Linear start with sharp stop, mimicking instrumentation
  technical: [0.25, 1.0, 0.5, 1.0] as const,

  // Heavy Cinematic Mass: For large tectonic typographic and section shifts
  cinematic: [0.76, 0.0, 0.24, 1.0] as const,

  // Standard UI Micro-interactions
  ui: [0.2, 0.0, 0.0, 1.0] as const,
} as const;

export const DURATIONS = {
  instant: 0,
  micro: 0.18,
  fast: 0.3,
  normal: 0.55,
  slow: 0.85,
  cinematic: 1.2,
} as const;
