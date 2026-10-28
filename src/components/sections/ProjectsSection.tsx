import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FinPilotCard } from './projects/FinPilotCard';
import { CallQCard } from './projects/CallQCard';
import { MonteCarloCard } from './projects/MonteCarloCard';
import { KalshiCard } from './projects/KalshiCard';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ProjectExhibitionStageProps {
  theme: 'dark' | 'light';
  leadLabel: string;
  domainTag: string;
  prefersReducedMotion: boolean;
  children: React.ReactNode;
}

const ProjectExhibitionStage: React.FC<ProjectExhibitionStageProps> = ({
  theme,
  leadLabel,
  domainTag,
  prefersReducedMotion,
  children,
}) => {
  const stageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start 0.95', 'end 0.08'],
  });

  // 1. Lead visual cue enters first as user scrolls toward the panel
  const cueX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-20, 0, 0, 12]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.16, 0.84, 1], [0.3, 1, 1, 0.35]);
  const ruleScaleX = useTransform(scrollYProgress, [0, 0.25], [0.08, 1]);

  // 2. Main 3D tactile panel follows with depth & perspective, then recedes as next panel arrives
  const panelY = useTransform(scrollYProgress, [0, 0.24, 0.78, 1], [52, 0, 0, -24]);
  const panelScale = useTransform(scrollYProgress, [0, 0.24, 0.78, 1], [0.945, 1, 1, 0.968]);
  const panelRotateX = useTransform(scrollYProgress, [0, 0.24, 0.78, 1], [4, 0, 0, -2]);
  const panelOpacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.4, 1, 1, 0.5]);

  return (
    <div
      ref={stageRef}
      data-theme={theme}
      className="space-y-3 sm:space-y-4"
      style={{ perspective: prefersReducedMotion ? undefined : '1400px' }}
    >
      {/* Leading Exhibition Marker & Scroll-Linked Horizon Line */}
      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : {
                x: cueX,
                opacity: cueOpacity,
              }
        }
        className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-mono-spaced text-[#525252]"
      >
        <span className="font-bold text-[#151515] shrink-0">{leadLabel}</span>
        <div className="flex-1 h-[1px] bg-[#D8D5CC] overflow-hidden">
          <motion.div
            style={
              prefersReducedMotion
                ? undefined
                : {
                    scaleX: ruleScaleX,
                    transformOrigin: 'left',
                  }
            }
            className="w-full h-full bg-[#FF4D24]"
          />
        </div>
        <span className="text-[#787670] hidden sm:inline shrink-0">{domainTag}</span>
      </motion.div>

      {/* 3D Tactile Project Panel */}
      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : {
                y: panelY,
                scale: panelScale,
                rotateX: panelRotateX,
                opacity: panelOpacity,
                transformOrigin: 'center top',
              }
        }
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headerScroll } = useScroll({
    target: headerRef,
    offset: ['start 0.95', 'start 0.45'],
  });

  const headerY = useTransform(headerScroll, [0, 1], ['28%', '0%']);
  const headerOpacity = useTransform(headerScroll, [0, 0.6], [0.35, 1]);
  const subtitleY = useTransform(headerScroll, [0, 1], [18, 0]);

  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto space-y-16 sm:space-y-24"
    >
      {/* Editorial Section Anchor Header with Scroll-Linked Kinetic Typography */}
      <div
        ref={headerRef}
        className="border-b-2 border-[#111111] pb-6 sm:pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
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
            className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tightest-editorial text-[#151515] leading-none"
          >
            SELECTED <span className="text-[#FF4D24]">WORK</span>.
          </motion.h2>
        </div>

        <motion.p
          style={
            prefersReducedMotion
              ? undefined
              : {
                  y: subtitleY,
                  opacity: headerOpacity,
                }
          }
          className="font-mono text-xs text-[#525252] max-w-md leading-relaxed"
        >
          Four software systems built around edge cases, empirical verification, and deterministic constraints.
        </motion.p>
      </div>

      {/* Connected 3D Project Exhibition Sequence */}
      <div className="space-y-20 sm:space-y-28">
        <ProjectExhibitionStage
          theme="dark"
          leadLabel="MERCHANT FINPILOT"
          domainTag="PAYMENT INCIDENT VERIFICATION"
          prefersReducedMotion={prefersReducedMotion}
        >
          <FinPilotCard />
        </ProjectExhibitionStage>

        <ProjectExhibitionStage
          theme="light"
          leadLabel="CALLQ"
          domainTag="EVIDENCE-GROUNDED EXTRACTION"
          prefersReducedMotion={prefersReducedMotion}
        >
          <CallQCard />
        </ProjectExhibitionStage>

        <ProjectExhibitionStage
          theme="dark"
          leadLabel="MONTE CARLO SIMULATOR"
          domainTag="STOCHASTIC BENCHMARK CONVERGENCE"
          prefersReducedMotion={prefersReducedMotion}
        >
          <MonteCarloCard />
        </ProjectExhibitionStage>

        <ProjectExhibitionStage
          theme="light"
          leadLabel="KALSHI ARBITRAGE ENGINE"
          domainTag="BINARY CONTRACT PAYOFF MODELING"
          prefersReducedMotion={prefersReducedMotion}
        >
          <KalshiCard />
        </ProjectExhibitionStage>
      </div>
    </section>
  );
};
