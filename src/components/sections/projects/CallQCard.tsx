import React, { useState } from 'react';
import { PROJECTS } from '@/content/projects';

export const CallQCard: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'callq')!;
  const [highlightClaim, setHighlightClaim] = useState<boolean>(true);

  return (
    <article
      id="callq"
      className="relative bg-[#ECE8DD] text-[#151515] border-2 border-[#111111] p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_#111111] md:hover:-translate-x-1 md:hover:-translate-y-1 md:hover:shadow-[12px_12px_0px_0px_#111111] transition-all duration-300 ease-out"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#151515] pb-6 mb-8 gap-4">
        <div>
          <h3 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[#151515]">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-[#525252] mt-1">{project.subtitle}</p>
        </div>

        <div className="font-mono text-xs text-[#151515] uppercase tracking-mono-spaced font-bold">
          EVIDENCE-GROUNDED EXTRACTION
        </div>
      </div>

      {/* Narrative & Visual Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 items-start">
        {/* Left: Narrative */}
        <div className="lg:col-span-5 space-y-4">
          <p className="font-body text-sm sm:text-base text-[#151515] leading-relaxed">
            Evidence-grounded financial intelligence platform to perform structured extraction of facts from earnings calls, validating all claims against source transcript evidence.
          </p>
          <p className="font-body text-sm sm:text-base text-[#525252] leading-relaxed">
            Constructed a deterministic financial calculation engine to compute metric changes, margins, guidance, and historical comparisons. Enforces strict comparability checks and a grounded LLM reasoning pipeline supported by 73 passing backend tests.
          </p>
        </div>

        {/* Right: Visual Fact Tethering Demonstration */}
        <div className="lg:col-span-7 bg-white border border-[#151515] p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-[#D8D5CC] pb-3 text-xs font-mono">
            <span className="text-[#FF4D24] font-bold">EVIDENCE TETHERING</span>
            <button
              type="button"
              onClick={() => setHighlightClaim(!highlightClaim)}
              className="text-[#151515] text-[11px] font-bold underline hover:text-[#FF4D24] transition-colors"
            >
              {highlightClaim ? 'SHOW UNMARKED TEXT' : 'HIGHLIGHT EVIDENCE SPAN'}
            </button>
          </div>

          {/* Transcript Passage */}
          <div className="border border-[#D8D5CC] bg-[#FAF8F5] p-4 text-xs font-mono leading-relaxed space-y-1.5">
            <div className="text-[10px] text-[#787670] uppercase">
              RAW TRANSCRIPT // CEO REMARKS (PARAGRAPH 14)
            </div>
            <p className="font-body text-xs text-[#262626]">
              &ldquo;...across our enterprise contracts we delivered strong operational leverage, and{' '}
              <span
                className={`transition-all duration-200 ${
                  highlightClaim
                    ? 'bg-[#FF4D24]/20 border-b-2 border-[#FF4D24] text-[#151515] font-semibold px-0.5'
                    : 'text-[#525252]'
                }`}
              >
                gross margins expanded 240 basis points year-over-year to 42.1%
              </span>
              , exceeding our initial quarterly target of 41.5%...&rdquo;
            </p>
          </div>

          {/* Pydantic Model Output */}
          <div className="border border-[#262626] bg-[#111111] text-[#F3F0E8] p-4 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-[#FF4D24] border-b border-[#262626] pb-2 font-bold">
              <span>VALIDATED SCHEMA OUTPUT</span>
              <span className="text-[10px] text-[#FF4D24]">DETERMINISTIC DIFF: PASS</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div>
                <span className="text-[#787670] block text-[10px]">METRIC</span>
                <span className="text-white font-bold">Gross Margin</span>
              </div>
              <div>
                <span className="text-[#787670] block text-[10px]">REPORTED</span>
                <span className="text-white font-bold">42.1%</span>
              </div>
              <div>
                <span className="text-[#787670] block text-[10px]">PRIOR PERIOD</span>
                <span className="text-white font-bold">39.7%</span>
              </div>
              <div>
                <span className="text-[#787670] block text-[10px]">CODE-COMPUTED DELTA</span>
                <span className="text-[#FF4D24] font-bold">+2.40% (+240 bps)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex items-center justify-between pt-6 border-t border-[#151515] font-mono text-xs">
        <span className="text-[#525252]">Pydantic v2 &bull; FastAPI &bull; Deterministic Metric Engine &bull; 73 Backend Tests</span>

        <div className="flex items-center gap-5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#151515] hover:text-[#FF4D24] transition-colors flex items-center gap-1 font-bold"
          >
            <span>GITHUB</span>
            <span className="text-[#FF4D24]">&rarr;</span>
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#151515] hover:text-[#FF4D24] transition-colors flex items-center gap-1 font-bold"
            >
              <span>DEMO</span>
              <span className="text-[#FF4D24]">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
