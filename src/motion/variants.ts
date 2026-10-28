import type { Variants } from 'motion/react';
import { EASINGS, DURATIONS } from './constants';

const EDITORIAL_EASE: [number, number, number, number] = [EASINGS.editorial[0], EASINGS.editorial[1], EASINGS.editorial[2], EASINGS.editorial[3]];
const TECHNICAL_EASE: [number, number, number, number] = [EASINGS.technical[0], EASINGS.technical[1], EASINGS.technical[2], EASINGS.technical[3]];

/**
 * Masked Typography Reveal: Vertical translation from behind an overflow-hidden wrapper
 */
export function getMaskedLineVariants(prefersReducedMotion: boolean, delay = 0): Variants {
  if (prefersReducedMotion) {
    return {
      hidden: { y: '0%', opacity: 1 },
      visible: { y: '0%', opacity: 1, transition: { duration: 0 } },
    };
  }

  return {
    hidden: { y: '115%', scale: 1.03 },
    visible: {
      y: '0%',
      scale: 1.0,
      transition: {
        duration: DURATIONS.slow,
        delay,
        ease: EDITORIAL_EASE,
      },
    },
  };
}

/**
 * Editorial Fade & Slide Up: For metadata, captions, and paragraphs
 */
export function getFadeUpVariants(prefersReducedMotion: boolean, delay = 0, yOffset = 24): Variants {
  if (prefersReducedMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0, transition: { duration: 0 } },
    };
  }

  return {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: DURATIONS.normal,
        delay,
        ease: EDITORIAL_EASE,
      },
    },
  };
}

/**
 * Signal Orange Vector Beam: Expanding horizontally along the baseline
 */
export function getSignalBeamVariants(prefersReducedMotion: boolean, delay = 0): Variants {
  if (prefersReducedMotion) {
    return {
      hidden: { scaleX: 1, opacity: 1 },
      visible: { scaleX: 1, opacity: 1, transition: { duration: 0 } },
    };
  }

  return {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: DURATIONS.normal,
        delay,
        ease: TECHNICAL_EASE,
      },
    },
  };
}

/**
 * Stagger Container: Orchestrates children without manual delay cascading
 */
export function getStaggerContainerVariants(staggerChildren = 0.12, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}
