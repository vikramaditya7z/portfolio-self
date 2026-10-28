import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { MUSIC_DATA } from '@/content/music';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const GOOGLE_DRIVE_PREVIEW_URL =
  'https://drive.google.com/file/d/1_kpU150IPyOhxHMrCvVo85d6CU7iZrJl/preview';

export const MusicSection: React.FC = () => {
  const [isVideoActive, setIsVideoActive] = useState<boolean>(false);
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.92', 'end 0.15'],
  });

  // Scroll-linked header & image reveal
  const headerY = useTransform(scrollYProgress, [0, 0.28], ['32%', '0%']);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.22], [0.35, 1]);

  const photoY = useTransform(scrollYProgress, [0.05, 0.45, 0.9], [36, 0, -16]);
  const photoScale = useTransform(scrollYProgress, [0.05, 0.45], [0.96, 1]);
  const imageInnerScale = useTransform(scrollYProgress, [0, 0.6, 1], [1.06, 1, 1.03]);

  const copyY = useTransform(scrollYProgress, [0.1, 0.48], [28, 0]);
  const copyOpacity = useTransform(scrollYProgress, [0.08, 0.38], [0.4, 1]);

  return (
    <section
      ref={sectionRef}
      id="music"
      data-theme="dark"
      aria-label="Music: Loud / In Progress"
      className="w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto bg-[#111111] text-[#F3F0E8] relative"
    >
      {/* 1. Header */}
      <div className="border-b border-[#262626] pb-6 sm:pb-8 mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="overflow-hidden py-1">
          <motion.h2
            style={
              prefersReducedMotion
                ? undefined
                : {
                    y: headerY,
                    opacity: headerOpacity,
                  }
            }
            className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tightest-editorial text-[#F3F0E8] leading-[0.88]"
          >
            LOUD / <span className="text-[#FF4D24]">IN PROGRESS</span>.
          </motion.h2>
        </div>
        <motion.p
          style={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: headerOpacity,
                }
          }
          className="font-mono text-xs text-[#A3A3A3] max-w-sm"
        >
          Acoustic &amp; electric guitar performance &bull; FL Studio production
        </motion.p>
      </div>

      {/* 2. Main Composition: Stage Photograph with Live Video Toggle & Grounded Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left: Prominent Stage Photograph with Segmented Live Video Switcher & Tactile Frame */}
        <motion.div
          style={
            prefersReducedMotion
              ? undefined
              : {
                  y: photoY,
                  scale: photoScale,
                }
          }
          className="lg:col-span-7 space-y-3 sm:space-y-3.5"
        >
          {/* Segmented Control Bar (Positioned Completely Outside & Above Photo Frame, Right-Aligned) */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] sm:text-xs text-[#787670] uppercase tracking-mono-spaced hidden xs:inline">
              ARCHIVE // STAGE PERFORMANCE
            </span>

            <div
              role="tablist"
              aria-label="Music performance media format"
              className="inline-flex p-1 bg-[#111111] border border-[#2E2E2E] shadow-[2px_2px_0px_0px_#000000] ml-auto"
            >
              <button
                type="button"
                role="tab"
                aria-selected={!isVideoActive}
                onClick={() => setIsVideoActive(false)}
                className={`font-mono text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF4D24] cursor-pointer ${
                  !isVideoActive
                    ? 'bg-[#F3F0E8] text-[#111111] font-bold shadow-[2px_2px_0px_0px_#FF4D24]'
                    : 'text-[#A3A3A3] hover:text-[#F3F0E8] hover:bg-[#1A1A1A]'
                }`}
              >
                <span>PHOTO</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={isVideoActive}
                onClick={() => setIsVideoActive(true)}
                className={`font-mono text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF4D24] cursor-pointer ${
                  isVideoActive
                    ? 'bg-[#F3F0E8] text-[#111111] font-bold shadow-[2px_2px_0px_0px_#FF4D24]'
                    : 'text-[#A3A3A3] hover:text-[#F3F0E8] hover:bg-[#1A1A1A]'
                }`}
              >
                <span>LIVE SET</span>
              </button>
            </div>
          </div>

          {/* Photo/Video Frame: Size, Border, and Offset Shadow Intact */}
          <div className="relative border-2 border-[#3A3834] bg-[#161616] p-2.5 sm:p-3.5 shadow-[5px_5px_0px_0px_#D8D5CC,10px_10px_0px_0px_#000000] overflow-hidden group">
            {/* Visual Container: Preserves Exact Frame Dimensions & Aspect Ratio */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                {isVideoActive ? (
                  <motion.div
                    key="live-video"
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="w-full h-full bg-black"
                  >
                    <iframe
                      src={GOOGLE_DRIVE_PREVIEW_URL}
                      title="Live Band Performance at College Festival - Four Songs. One Live Set."
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full border-0 bg-black"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="stage-photo"
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="w-full h-full"
                  >
                    <motion.img
                      src={MUSIC_DATA.stagePhoto.src}
                      alt={MUSIC_DATA.stagePhoto.alt}
                      style={
                        prefersReducedMotion
                          ? undefined
                          : {
                              scale: imageInnerScale,
                            }
                      }
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="pt-4 flex items-center justify-between font-mono text-xs text-[#A3A3A3]">
            <span>{MUSIC_DATA.stagePhoto.caption}</span>
            <span className="text-[#FF4D24] font-bold">
              {isVideoActive ? 'LIVE VIDEO &bull; 1080P STREAM' : 'LIVE SET &bull; STAGE CAPTURE'}
            </span>
          </div>
        </motion.div>

        {/* Right: Concise, Human Narrative */}
        <motion.div
          style={
            prefersReducedMotion
              ? undefined
              : {
                  y: copyY,
                  opacity: copyOpacity,
                }
          }
          className="lg:col-span-5 space-y-6"
        >
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            {MUSIC_DATA.headline}
          </h3>

          <p className="font-body text-base sm:text-lg text-[#D8D5CC] leading-relaxed">
            {MUSIC_DATA.summary}
          </p>

          <div className="pt-5 border-t border-[#262626] space-y-3.5 font-mono text-xs text-[#D8D5CC]">
            <div className="flex items-start gap-3">
              <span className="text-[#FF4D24] text-sm font-bold">&bull;</span>
              <span>{MUSIC_DATA.details.guitar}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF4D24] text-sm font-bold">&bull;</span>
              <span>{MUSIC_DATA.details.stage}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF4D24] text-sm font-bold">&bull;</span>
              <span>{MUSIC_DATA.details.production}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Poetic Architectural Boundary to Photography */}
      <div className="pt-16 sm:pt-20 flex items-center justify-between border-t border-[#262626] mt-16 font-mono text-xs text-[#787670]">
        <span>AMPLIFIED STAGE &bull; ELECTRIC RIFFS</span>
        <span className="text-[#FF4D24] font-bold">TURNING TO STILLNESS &darr;</span>
      </div>
    </section>
  );
};
