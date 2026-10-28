/**
 * Centralized Design Tokens for SIGNAL / NOISE
 * Source of truth: docs/VISUAL_SYSTEM.md
 */

export const TOKENS = {
  colors: {
    paper: '#F3F0E8',
    paperSubtle: '#ECE8DD',
    ink: '#111111',
    inkSubtle: '#191919',
    signal: '#FF4D24',
    concrete: '#D8D5CC',
    concreteSubtle: '#E5E2DA',
    wire: '#262626',
    wireSubtle: '#1F1F1F',
    textPaperPrimary: '#151515',
    textPaperSecondary: '#525252',
    textPaperMuted: '#787670',
    textInkPrimary: '#F3F0E8',
    textInkSecondary: '#A3A3A3',
    textInkMuted: '#666666',
  },
  easings: {
    editorial: [0.16, 1.0, 0.3, 1.0] as const,
    technical: [0.25, 1.0, 0.5, 1.0] as const,
    ui: [0.2, 0.0, 0.0, 1.0] as const,
  },
  durations: {
    fast: 0.18,
    normal: 0.32,
    slow: 0.55,
    kinetic: 0.9,
    heroTotal: 1.5,
  },
} as const;
