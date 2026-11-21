import React, { useState } from 'react';
import { PROJECTS } from '@/content/projects';

export const ArbineCard: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'arbine')!;
  const [activeTab, setActiveTab] = useState<'arbitrage' | 'execution'>('arbitrage');

  return (
    <article
      id="arbine"
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
          UNDER DEVELOPMENT &bull; SIMULATION &amp; PAPER TRADING
        </div>
      </div>

      {/* Narrative & Visual Model */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 items-start">
        {/* Left: Narrative */}
        <div className="lg:col-span-5 space-y-4">
          <p className="font-body text-sm sm:text-base text-[#151515] leading-relaxed">
            Cross-exchange prediction market arbitrage platform integrating Kalshi and Polymarket APIs to identify and evaluate potential opportunities across equivalent event contracts.
          </p>
          <p className="font-body text-sm sm:text-base text-[#525252] leading-relaxed">
            Engineered deterministic market matching and settlement-equivalence verification with explicit outcome mapping and fail-closed validation to reject invalid contract pairings. Implements binary complement, binary parity, and multi-outcome arbitrage strategies using Level 2 order-book analysis, VWAP execution modeling, and paper-trading simulations.
          </p>
        </div>

        {/* Right: Cross-Exchange Model & Execution Harness */}
        <div className="lg:col-span-7 bg-white border border-[#151515] p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#D8D5CC] pb-3 text-xs font-mono">
            <span className="text-[#FF4D24] font-bold">CROSS-EXCHANGE ARBITRAGE</span>
            <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab('arbitrage')}
                className={`px-2 py-1 border text-[10px] sm:text-[11px] text-center transition-colors font-mono ${
                  activeTab === 'arbitrage'
                    ? 'border-[#151515] text-white bg-[#151515] font-bold'
                    : 'border-[#D8D5CC] text-[#525252] hover:border-[#151515]'
                }`}
              >
                COMPLEMENT ARBITRAGE
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('execution')}
                className={`px-2 py-1 border text-[10px] sm:text-[11px] text-center transition-colors font-mono ${
                  activeTab === 'execution'
                    ? 'border-[#151515] text-white bg-[#151515] font-bold'
                    : 'border-[#D8D5CC] text-[#525252] hover:border-[#151515]'
                }`}
              >
                EXECUTION &amp; RISK
              </button>
            </div>
          </div>

          {activeTab === 'arbitrage' ? (
            /* Complement Arbitrage Model */
            <div className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border border-[#D8D5CC] p-3 bg-[#FAF8F5]">
                  <div className="flex items-center justify-between text-[10px] text-[#787670] uppercase">
                    <span>KALSHI (CFTC)</span>
                    <span className="text-[#FF4D24] font-bold">YES ASK</span>
                  </div>
                  <div className="text-base font-bold text-[#151515] mt-1">48&cent; ($0.48)</div>
                  <div className="text-[10px] text-[#525252] mt-0.5">Settles $1.00 on occurrence</div>
                </div>

                <div className="border border-[#D8D5CC] p-3 bg-[#FAF8F5]">
                  <div className="flex items-center justify-between text-[10px] text-[#787670] uppercase">
                    <span>POLYMARKET (UMA)</span>
                    <span className="text-[#FF4D24] font-bold">NO ASK</span>
                  </div>
                  <div className="text-base font-bold text-[#151515] mt-1">49&cent; ($0.49)</div>
                  <div className="text-[10px] text-[#525252] mt-0.5">Settles $1.00 on non-occurrence</div>
                </div>
              </div>

              {/* Spread & Invariant Accounting */}
              <div className="border border-[#262626] bg-[#111111] text-[#F3F0E8] p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-[#A3A3A3]">SETTLEMENT INVARIANT</span>
                  <span className="text-[#FF4D24] font-bold">FAIL-CLOSED VALIDATION: PASS</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center border-t border-[#262626] pt-2">
                  <div>
                    <div className="text-[10px] text-[#787670]">TOTAL OUTLAY</div>
                    <div className="text-white font-bold text-sm">97.0&cent;</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#787670]">PAYOUT (INVARIANT)</div>
                    <div className="text-white font-bold text-sm">$1.00</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#FF4D24]">NET SPREAD</div>
                    <div className="text-[#FF4D24] font-bold text-sm">+3.0&cent; (3.09%)</div>
                  </div>
                </div>
                <div className="text-[10px] text-[#A3A3A3] pt-1">
                  &bull; Verified: Identical resolution criteria (e.g. BLS CPI release timestamp &amp; threshold).
                </div>
              </div>
            </div>
          ) : (
            /* Execution & Paper-Trading Engine */
            <div className="space-y-3 font-mono text-xs">
              <div className="border border-[#262626] bg-[#111111] text-[#F3F0E8] p-3.5 space-y-2">
                <div className="text-[#FF4D24] text-[10px] font-bold uppercase">PAPER-TRADING &amp; RISK ENGINE:</div>
                <div className="text-[11px] text-[#D8D5CC] space-y-1.5">
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF4D24] font-bold">&bull;</span>
                    <div>
                      <strong className="text-white">Level 2 VWAP Execution:</strong> Calculates depth-weighted pricing across order book tiers to prevent false top-of-book edge signals.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF4D24] font-bold">&bull;</span>
                    <div>
                      <strong className="text-white">Fee &amp; Gas Deductions:</strong> Accounts for Kalshi transaction fees and Polymarket taker/gas fees dynamically before triggering simulated fills.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF4D24] font-bold">&bull;</span>
                    <div>
                      <strong className="text-white">Slippage &amp; Partial Fills:</strong> Simulates realistic market impact, partial fills, and persistent risk audit logs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex items-center justify-between pt-6 border-t border-[#151515] font-mono text-xs">
        <span className="text-[#525252]">Python &bull; Multi-Exchange APIs &bull; Level 2 Order Books &bull; VWAP Modeling</span>

        <span className="font-mono text-xs text-[#FF4D24] font-bold">
          UNDER DEVELOPMENT &bull; ACTIVE RESEARCH
        </span>
      </div>
    </article>
  );
};
