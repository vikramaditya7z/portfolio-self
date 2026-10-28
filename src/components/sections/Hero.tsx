import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';
import { PROFILE } from '@/content/profile';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1.0, 0.3, 1.0];
const TECHNICAL_EASE: [number, number, number, number] = [0.25, 1.0, 0.5, 1.0];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll tracking within the hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const headlineParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const signalBarScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);
  const line1X = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const line2X = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [0, -28]);

  // Masked kinetic reveal variants
  const lineVariants: Variants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.75,
        ease: EDITORIAL_EASE,
      },
    },
  };

  const signalBeamVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.55,
        delay: prefersReducedMotion ? 0 : 0.5,
        ease: TECHNICAL_EASE,
      },
    },
  };

  const contentFadeVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : 0.75,
        ease: EDITORIAL_EASE,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[100svh] w-full bg-[#F3F0E8] flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto select-none"
    >
      {/* 1. Coordinated Main Composition */}
      <div className="my-auto py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column (7-8 Cols): The Dominant Headline */}
          <motion.div
            style={{
              y: prefersReducedMotion ? '0%' : headlineParallaxY,
              opacity: prefersReducedMotion ? 1 : headlineOpacity,
            }}
            className="lg:col-span-7 xl:col-span-8"
          >
            <h1 className="font-display font-bold text-[#151515] uppercase tracking-tightest-editorial select-text">
              {/* Line 1: MAKE IT */}
              <div className="overflow-hidden leading-none py-0.5">
                <motion.div
                  initial={prefersReducedMotion ? false : 'hidden'}
                  animate="visible"
                  variants={lineVariants}
                  style={prefersReducedMotion ? undefined : { x: line1X }}
                  className="fluid-display-hero block"
                >
                  MAKE IT
                </motion.div>
              </div>

              {/* Line 2: MAKE SENSE. */}
              <div className="overflow-hidden leading-none py-0.5 flex items-baseline flex-wrap">
                <motion.div
                  initial={prefersReducedMotion ? false : 'hidden'}
                  animate="visible"
                  variants={lineVariants}
                  style={prefersReducedMotion ? undefined : { x: line2X }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.75,
                    delay: prefersReducedMotion ? 0 : 0.12,
                    ease: EDITORIAL_EASE,
                  }}
                  className="fluid-display-hero inline-block"
                >
                  MAKE SENSE
                </motion.div>
                <motion.span
                  initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={prefersReducedMotion ? undefined : { x: line2X }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.3,
                    delay: prefersReducedMotion ? 0 : 0.65,
                    ease: EDITORIAL_EASE,
                  }}
                  className="fluid-display-hero text-[#FF4D24] inline-block ml-1"
                >
                  .
                </motion.span>
              </div>
            </h1>

            {/* Kinetic Signal Orange Line */}
            <div className="mt-4 sm:mt-6 w-full max-w-xl overflow-hidden">
              <motion.div
                initial={prefersReducedMotion ? false : 'hidden'}
                animate="visible"
                variants={signalBeamVariants}
                style={{
                  transformOrigin: 'left',
                  scaleX: prefersReducedMotion ? 1 : signalBarScale,
                }}
                className="h-[3px] bg-[#FF4D24]"
              />
            </div>
          </motion.div>

          {/* Right Column (4-5 Cols): Grounded Introduction & Direct Action */}
          <motion.div
            initial={prefersReducedMotion ? false : 'hidden'}
            animate="visible"
            variants={contentFadeVariants}
            style={prefersReducedMotion ? undefined : { y: rightColY }}
            className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center space-y-5 lg:pl-8 lg:border-l lg:border-[#D8D5CC]"
          >
            {/* Identity */}
            <div className="space-y-1">
              <div className="font-display font-bold text-2xl sm:text-3xl text-[#151515] tracking-tight">
                {PROFILE.name}
              </div>
              <p className="font-mono text-xs text-[#787670]">
                Computer Science @ BITS Pilani &bull; Class of 2028
              </p>
            </div>

            {/* Concise Introduction */}
            <p className="font-body text-sm sm:text-base text-[#525252] leading-relaxed max-w-md">
              Building software around financial data, system failures, and problems where the answer needs to be verified.
            </p>

            {/* Direct Action */}
            <div className="pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[#111111] text-[#F3F0E8] border-2 border-[#111111] shadow-[4px_4px_0px_0px_#FF4D24] px-5 py-3 hover:bg-[#FF4D24] hover:border-[#FF4D24] hover:text-white hover:shadow-[6px_6px_0px_0px_#111111] transition-all font-mono text-xs tracking-mono-spaced font-bold focus-visible:outline-2 focus-visible:outline-[#FF4D24]"
              >
                <span>EXPLORE WORK</span>
                <span className="text-white text-xs">&darr;</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. Bottom Datum & Scroll Cue */}
      <motion.div
        initial={prefersReducedMotion ? false : 'hidden'}
        animate="visible"
        variants={contentFadeVariants}
        className="w-full pt-4 border-t border-[#D8D5CC] flex items-center justify-between text-xs font-mono text-[#787670] shrink-0"
      >
        <span>BENGALURU, INDIA</span>
        <a
          href="#projects"
          className="hover:text-[#FF4D24] transition-colors flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#FF4D24]"
        >
          <span>SCROLL</span>
          <span className="text-[#FF4D24] inline-block">&darr;</span>
        </a>
      </motion.div>
    </section>
  );
};
