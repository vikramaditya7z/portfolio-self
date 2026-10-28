import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PROFILE } from '@/content/profile';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1.0, 0.3, 1.0];

export const Contact: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const footerRef = useRef<HTMLElement>(null);

  // Observe the outer unclipped footer element so child transforms never block intersection
  const isInView = useInView(footerRef, { once: true, amount: 0.08 });
  const shouldShow = prefersReducedMotion || isInView;

  return (
    <footer
      ref={footerRef}
      id="contact"
      data-theme="dark"
      aria-label="Contact and Colophon"
      className="bg-[#111111] text-[#F3F0E8] w-full border-t-2 border-[#262626] relative select-none pt-16 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-[1720px] mx-auto w-full space-y-10 sm:space-y-12">
        {/* 1. Dominant Visual Finale Headline: LET'S TALK. */}
        <div className="overflow-hidden py-1">
          <motion.h2
            initial={prefersReducedMotion ? false : { y: '35%', opacity: 0.25 }}
            animate={shouldShow ? { y: '0%', opacity: 1 } : { y: '35%', opacity: 0.25 }}
            transition={{ duration: 0.75, ease: EDITORIAL_EASE }}
            className="font-display font-bold text-[clamp(3.5rem,10vw,10.5rem)] leading-[0.86] uppercase tracking-tightest-editorial text-[#F3F0E8]"
          >
            LET&apos;S TALK<span className="text-[#FF4D24]">.</span>
          </motion.h2>
        </div>

        {/* 2. Coherent Full-Width Finale Panel: Email, Narrative & Social Links */}
        <motion.div
          initial={prefersReducedMotion ? false : { y: 24, opacity: 0.3 }}
          animate={shouldShow ? { y: 0, opacity: 1 } : { y: 24, opacity: 0.3 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EDITORIAL_EASE }}
          className="border-2 border-[#3A3834] bg-[#161616] p-6 sm:p-10 lg:p-12 shadow-[5px_5px_0px_0px_#D8D5CC,10px_10px_0px_0px_#000000] space-y-8"
        >
          {/* Primary Email Lockup with Attached Arrow */}
          <div className="w-full min-w-0">
            <div className="font-mono text-xs text-[#FF4D24] uppercase tracking-mono-spaced font-bold mb-2">
              DIRECT TRANSMISSION
            </div>
            <a
              href={`mailto:${PROFILE.email}`}
              className="group inline-flex items-center gap-2.5 sm:gap-5 max-w-full min-w-0 text-[clamp(1.02rem,3.1vw,3.1rem)] font-display font-bold text-[#F3F0E8] hover:text-[#FF4D24] transition-colors select-text focus-visible:outline-2 focus-visible:outline-[#FF4D24]"
            >
              <span className="tracking-tight min-w-0 break-all sm:break-normal sm:whitespace-nowrap">
                {PROFILE.email}
              </span>
              <span
                aria-hidden="true"
                className="text-[#FF4D24] text-[clamp(1.2rem,3.1vw,3.1rem)] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-0.5 inline-block shrink-0"
              >
                &rarr;
              </span>
            </a>
          </div>

          {/* Supporting Narrative & Social Destinations */}
          <div className="pt-6 sm:pt-8 border-t border-[#2A2A28] flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <p className="font-body text-base sm:text-lg text-[#D8D5CC] max-w-2xl leading-relaxed">
              Open to conversations on backend engineering, systems verification, quantitative finance, and software internships.
            </p>

            <div className="flex flex-wrap items-center gap-4 shrink-0 font-mono text-xs sm:text-sm">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-3 border-2 border-[#3A3834] bg-[#111111] text-[#F3F0E8] hover:border-[#FF4D24] hover:bg-[#FF4D24] hover:text-white transition-all font-bold flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#FF4D24]"
              >
                <span>GITHUB</span>
                <span className="text-[#FF4D24] group-hover:text-white transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-3 border-2 border-[#3A3834] bg-[#111111] text-[#F3F0E8] hover:border-[#FF4D24] hover:bg-[#FF4D24] hover:text-white transition-all font-bold flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#FF4D24]"
              >
                <span>LINKEDIN</span>
                <span className="text-[#FF4D24] group-hover:text-white transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3. Quiet Secondary Colophon */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#787670] gap-4">
          <div>
            &copy; 2026 {PROFILE.name.toUpperCase()} &middot; {PROFILE.institution.toUpperCase()} &middot; BENGALURU
          </div>
          <a
            href="#hero"
            className="text-[#A3A3A3] hover:text-[#FF4D24] transition-colors font-bold focus-visible:outline-2 focus-visible:outline-[#FF4D24]"
          >
            BACK TO TOP &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
};
