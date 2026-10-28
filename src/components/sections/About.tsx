import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PROFILE } from '@/content/profile';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const About: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.92', 'start 0.28'],
  });

  // Staggered scroll-linked masked typography & narrative transforms
  const introLineY = useTransform(scrollYProgress, [0, 0.75], ['36%', '0%']);
  const mainLineY = useTransform(scrollYProgress, [0.08, 0.88], ['42%', '0%']);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.55], [0.35, 1]);

  const dividerScaleX = useTransform(scrollYProgress, [0.1, 0.9], [0.2, 1]);
  const narrativeY = useTransform(scrollYProgress, [0.15, 1], [28, 0]);
  const narrativeOpacity = useTransform(scrollYProgress, [0.1, 0.75], [0.4, 1]);

  return (
    <section
      ref={sectionRef}
      id="about"
      data-theme="light"
      aria-label="About Vikramaditya"
      className="w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-t border-[#D8D5CC] bg-[#F3F0E8] text-[#151515]"
    >
      <div>
        {/* 1. Architectural Headline Composition */}
        <div className="space-y-1.5 sm:space-y-2">
          {/* Quieter Introductory Line */}
          <div className="overflow-hidden py-0.5">
            <motion.div
              style={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: introLineY,
                      opacity: headlineOpacity,
                    }
              }
              className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-[#787670] uppercase tracking-tightest-editorial leading-none"
            >
              ENGINEERING FOR THE
            </motion.div>
          </div>

          {/* Dominant Typographic Anchor */}
          <div className="overflow-hidden py-1">
            <motion.h2
              style={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: mainLineY,
                      opacity: headlineOpacity,
                    }
              }
              className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl xl:text-[6.75rem] uppercase tracking-tightest-editorial text-[#151515] leading-[0.88]"
            >
              BREAKING <span className="text-[#FF4D24]">POINTS.</span>
            </motion.h2>
          </div>
        </div>

        {/* Connected Structural Divider between Headline and Narrative */}
        <div className="mt-8 sm:mt-10 mb-8 sm:mb-12 h-[2px] w-full bg-[#D8D5CC] overflow-hidden">
          <motion.div
            style={
              prefersReducedMotion
                ? undefined
                : {
                    scaleX: dividerScaleX,
                    transformOrigin: 'left',
                  }
            }
            className="h-full w-full bg-[#111111]"
          />
        </div>

        {/* 2. Visually Connected Editorial Grid: Lead Statement & Supporting Narrative */}
        <motion.div
          style={
            prefersReducedMotion
              ? undefined
              : {
                  y: narrativeY,
                  opacity: narrativeOpacity,
                }
          }
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Left Column (7 Cols): Compelling Lead Statement & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6 lg:pr-6">
            <p className="font-display text-xl sm:text-2xl lg:text-[1.85rem] text-[#151515] leading-[1.28] tracking-tight font-medium">
              I am a Computer Science undergraduate at{' '}
              <strong className="font-bold text-[#111111]">{PROFILE.institution}</strong>, graduating in{' '}
              <strong className="font-bold text-[#111111]">{PROFILE.graduationYear}</strong>, based in{' '}
              {PROFILE.location}&mdash;focused on backend engineering, intelligent systems, and quantitative finance.
            </p>

            <blockquote className="border-l-2 border-[#FF4D24] pl-5 py-1 font-body text-base sm:text-lg text-[#151515] font-medium leading-relaxed">
              Edge cases matter, invariants must be verified deterministically in code, and every result should hold up under close scrutiny.
            </blockquote>
          </div>

          {/* Right Column (5 Cols): Concise Supporting Copy on Correctness Problems */}
          <div className="lg:col-span-5 lg:border-l lg:border-[#D8D5CC] lg:pl-10 space-y-5 font-body text-base sm:text-lg text-[#525252] leading-relaxed">
            <p>
              I am drawn to difficult correctness problems where answers cannot simply be assumed: handling unexpected failures across payment webhooks, anchoring language model outputs to verifiable source citations, and validating stochastic market simulations against mathematical benchmarks.
            </p>
            <p className="text-[#151515]">
              Whether enforcing strict boolean gates before simulated financial operations or reconciling Monte Carlo trajectories against analytical formulas, I build software designed to stay predictable when real-world conditions break.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
