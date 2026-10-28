import React from 'react';
import { PROJECTS } from '@/content/projects';

export const KalshiCard: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'kalshi')!;

  return (
    <article
      id="kalshi"
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

        <div className="font-mono text-xs text-[#FF4D24] uppercase tracking-mono-spaced font-bold">
          ACTIVE RESEARCH &bull; SIMULATION ONLY
        </div>
      </div>

      {/* Narrative & Visual Model */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 items-start">
        {/* Left: Narrative */}
        <div className="lg:col-span-5 space-y-4">
          <p className="font-body text-sm sm:text-base text-[#151515] leading-relaxed">
            Binary prediction markets trade complementary contracts where YES and NO must theoretically sum to $1.00 (100&cent;). Transient order book mispricings create potential structural discrepancies that require disciplined fee and risk modeling.
          </p>
          <p className="font-body text-sm sm:text-base text-[#525252] leading-relaxed">
            This active research project models contract payoff invariants, streams and validates market data via Kalshi REST APIs with strict Pydantic schemas, and profiles order book depth hurdles.
          </p>
        </div>

        {/* Right: Complementary Payoff Model & Roadmap */}
        <div className="lg:col-span-7 bg-white border border-[#151515] p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-[#D8D5CC] pb-3 text-xs font-mono">
            <span className="text-[#FF4D24] font-bold">COMPLEMENTARY ASSET INVARIANT</span>
            <span className="text-[#151515] font-bold">P(YES) + P(NO) = $1.00</span>
          </div>

          {/* Payoff Price Box */}
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-[#D8D5CC] p-3 bg-[#FAF8F5]">
              <div className="text-[10px] text-[#787670] uppercase font-mono">YES CONTRACT ASK</div>
              <div className="text-base font-bold text-[#151515] font-mono mt-0.5">62&cent; ($0.62)</div>
              <div className="text-[10px] text-[#525252] font-mono mt-1">Settles to $1.00 on event</div>
            </div>
            <div className="border border-[#D8D5CC] p-3 bg-[#FAF8F5]">
              <div className="text-[10px] text-[#787670] uppercase font-mono">NO CONTRACT ASK</div>
              <div className="text-base font-bold text-[#151515] font-mono mt-0.5">36&cent; ($0.36)</div>
              <div className="text-[10px] text-[#525252] font-mono mt-1">Settles to $1.00 on non-event</div>
            </div>
          </div>

          <p className="text-[11px] font-mono text-[#525252] border-t border-[#D8D5CC] pt-2">
            Sum of Asks = 98&cent; &rarr; 2&cent; gross margin before taker exchange fees (hurdle &ge; 1.5&cent;).
          </p>

          {/* Roadmap Status */}
          <div className="border border-[#262626] bg-[#111111] text-[#F3F0E8] p-3.5 font-mono text-xs space-y-1.5">
            <div className="text-[#FF4D24] text-[10px] font-bold uppercase">ROADMAP STATUS:</div>
            <div className="text-[11px] space-y-1">
              <div className="flex items-center gap-2 text-white">
                <span className="text-[#FF4D24] font-bold">✓</span> Binary contract payoff &amp; portfolio data schemas
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-[#FF4D24] font-bold">✓</span> Kalshi REST market-data ingestion client
              </div>
              <div className="flex items-center gap-2 text-[#A3A3A3]">
                <span className="text-[#FF4D24]">&bull;</span> Order book depth reconstruction &amp; latency profiling (In Progress)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex items-center justify-between pt-6 border-t border-[#151515] font-mono text-xs">
        <span className="text-[#525252]">Python &bull; Kalshi REST Client &bull; Pydantic Models</span>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#151515] hover:text-[#FF4D24] transition-colors flex items-center gap-1 font-bold"
        >
          <span>GITHUB</span>
          <span className="text-[#FF4D24]">&rarr;</span>
        </a>
      </div>
    </article>
  );
};
