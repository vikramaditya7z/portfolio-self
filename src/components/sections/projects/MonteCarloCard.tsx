import React, { useState } from 'react';
import { PROJECTS } from '@/content/projects';

// Representative Geometric Brownian Motion paths (S0=100, K=100, r=0.05, sigma=0.2, T=1.0)
const GBM_PATHS = [
  'M 20 120 Q 80 100, 140 110 T 200 95 T 260 85 T 320 70 T 380 65 T 440 50',
  'M 20 120 Q 80 130, 140 125 T 200 140 T 260 150 T 320 160 T 380 145 T 440 135',
  'M 20 120 Q 80 115, 140 95 T 200 105 T 260 90 T 320 110 T 380 100 T 440 92',
  'M 20 120 Q 80 110, 140 135 T 200 130 T 260 115 T 320 105 T 380 85 T 440 78',
  'M 20 120 Q 80 140, 140 150 T 200 160 T 260 170 T 320 155 T 380 175 T 440 165',
  'M 20 120 Q 80 105, 140 115 T 200 120 T 260 130 T 320 125 T 380 115 T 440 110',
  'M 20 120 Q 80 90, 140 85 T 200 75 T 260 65 T 320 55 T 380 45 T 440 38',
];

const MEAN_PATH = 'M 20 120 Q 80 115, 140 112 T 200 110 T 260 106 T 320 102 T 380 98 T 440 95';

export const MonteCarloCard: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'monte-carlo')!;
  const [viewMode, setViewMode] = useState<'paths' | 'convergence'>('paths');

  return (
    <article
      id="monte-carlo"
      className="relative bg-[#111111] text-[#F3F0E8] border-2 border-[#3A3834] p-6 sm:p-10 lg:p-12 shadow-[5px_5px_0px_0px_#D8D5CC,10px_10px_0px_0px_#111111] md:hover:-translate-x-1 md:hover:-translate-y-1 md:hover:shadow-[6px_6px_0px_0px_#D8D5CC,14px_14px_0px_0px_#111111] transition-all duration-300 ease-out"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#262626] pb-6 mb-8 gap-4">
        <div>
          <h3 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[#F3F0E8]">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-[#A3A3A3] mt-1">{project.subtitle}</p>
        </div>

        <div className="font-mono text-xs text-[#787670] uppercase tracking-mono-spaced font-bold">
          NUMERICAL CONVERGENCE VALIDATION
        </div>
      </div>

      {/* Narrative & Interactive Simulation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 items-start">
        {/* Left: Narrative */}
        <div className="lg:col-span-5 space-y-4">
          <p className="font-body text-sm sm:text-base text-[#D8D5CC] leading-relaxed">
            Quantitative finance simulator modeling stock price paths using Geometric Brownian Motion, implementing risk-neutral pricing and discounting for European call option payoffs.
          </p>
          <p className="font-body text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            Conducted convergence analysis to evaluate and compare simulated estimates against the analytical Black-Scholes model. Vectorized NumPy path operations achieve convergence ($6.0199 vs $6.0200) within a delta of 0.0001 at N=100,000 iterations.
          </p>
        </div>

        {/* Right: Simulation Graphic */}
        <div className="lg:col-span-7 bg-[#161616] border border-[#262626] p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-[#262626] pb-3 text-xs font-mono">
            <span className="text-[#FF4D24] font-bold">SIMULATION MODEL</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode('paths')}
                className={`px-2.5 py-1 border text-[11px] transition-colors font-mono ${
                  viewMode === 'paths' ? 'border-[#FF4D24] text-white bg-[#FF4D24]/20 font-bold' : 'border-[#262626] text-[#787670]'
                }`}
              >
                PRICE PATHS
              </button>
              <button
                type="button"
                onClick={() => setViewMode('convergence')}
                className={`px-2.5 py-1 border text-[11px] transition-colors font-mono ${
                  viewMode === 'convergence' ? 'border-[#FF4D24] text-white bg-[#FF4D24]/20 font-bold' : 'border-[#262626] text-[#787670]'
                }`}
              >
                CONVERGENCE
              </button>
            </div>
          </div>

          {/* SVG Canvas */}
          <div className="relative border border-[#262626] bg-[#111111] p-3 h-52 flex items-center justify-center overflow-hidden">
            {viewMode === 'paths' ? (
              <svg viewBox="0 0 460 200" className="w-full h-full" fill="none">
                <line x1="20" y1="120" x2="440" y2="120" stroke="#333333" strokeDasharray="3 3" strokeWidth="1" />
                <text x="25" y="114" fill="#888888" fontSize="9" fontFamily="monospace">
                  STRIKE K = $100
                </text>
                {GBM_PATHS.map((d, i) => (
                  <path key={i} d={d} stroke="#555555" strokeWidth="1" opacity="0.7" />
                ))}
                <path d={MEAN_PATH} stroke="#FF4D24" strokeWidth="2.5" />
                <text x="345" y="88" fill="#FF4D24" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  MEAN PATH
                </text>
              </svg>
            ) : (
              <svg viewBox="0 0 460 200" className="w-full h-full" fill="none">
                <line x1="20" y1="100" x2="440" y2="100" stroke="#FF4D24" strokeWidth="1.5" />
                <text x="25" y="92" fill="#FF4D24" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  BLACK-SCHOLES THEORETICAL BENCHMARK: $6.0200
                </text>
                <path
                  d="M 20 160 Q 60 40, 120 140 T 200 80 T 280 115 T 360 98 T 440 100.2"
                  stroke="#F3F0E8"
                  strokeWidth="2"
                />
                <text x="180" y="175" fill="#A3A3A3" fontSize="9" fontFamily="monospace">
                  ITERATIONS N: 100 &rarr; 10,000 &rarr; 100,000
                </text>
              </svg>
            )}
          </div>

          {/* Reconciled Numerical Table */}
          <div className="grid grid-cols-3 gap-2 border border-[#262626] bg-[#111111] p-3 text-center font-mono text-xs">
            <div>
              <div className="text-[10px] text-[#787670]">MONTE CARLO (N=100K)</div>
              <div className="text-white font-bold text-sm">$6.0199</div>
            </div>
            <div>
              <div className="text-[10px] text-[#787670]">BLACK-SCHOLES</div>
              <div className="text-white font-bold text-sm">$6.0200</div>
            </div>
            <div>
              <div className="text-[10px] text-[#FF4D24]">DELTA</div>
              <div className="text-[#FF4D24] font-bold text-sm">0.0001</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex items-center justify-between pt-6 border-t border-[#262626] font-mono text-xs">
        <span className="text-[#787670]">Python &bull; NumPy Vectorized Paths &bull; Black-Scholes Formulation</span>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F3F0E8] hover:text-[#FF4D24] transition-colors flex items-center gap-1 font-bold"
        >
          <span>GITHUB</span>
          <span className="text-[#FF4D24]">&rarr;</span>
        </a>
      </div>
    </article>
  );
};
