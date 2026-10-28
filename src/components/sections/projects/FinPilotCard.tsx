import React, { useState } from 'react';
import { PROJECTS } from '@/content/projects';

const PIPELINE_STAGES = [
  {
    step: '01',
    name: 'WEBHOOK',
    status: 'HMAC SIGNED',
    detail: 'Signed Razorpay TEST webhook payload arrives via POST /api/v1/webhooks. Signature verified with SHA256 HMAC.',
  },
  {
    step: '02',
    name: 'DETECTION',
    status: 'DEGRADATION FLAGGED',
    detail: 'Dimensional slicing flags 34% drop on Axis NetBanking gateway compared to historical 99.2% success baseline.',
  },
  {
    step: '03',
    name: 'REASONING',
    status: 'INTENT PROPOSED',
    detail: 'Gemini synthesizes failure logs and suggests candidate remediation: temporary secondary routing and merchant alert.',
  },
  {
    step: '04',
    name: 'POLICY GATE',
    status: 'INVARIANTS: PASS',
    detail: 'Deterministic code validates boolean invariants: transaction amount <= capture cap, assert no duplicate idempotency key.',
  },
  {
    step: '05',
    name: 'SIMULATION',
    status: 'IDEMPOTENT WRITE',
    detail: 'Remediation executed against Razorpay Test sandbox API; persistent audit record logged to SQLite.',
  },
];

export const FinPilotCard: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'finpilot')!;
  const [activeStage, setActiveStage] = useState(2); // Default to Gemini stage

  return (
    <article
      id="finpilot"
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

        <div className="font-mono text-xs text-[#FF4D24] uppercase tracking-mono-spaced font-bold">
          SIMULATED SANDBOX EXECUTION
        </div>
      </div>

      {/* Narrative & Interactive Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 items-start">
        {/* Left: Concise Narrative */}
        <div className="lg:col-span-5 space-y-4">
          <p className="font-body text-sm sm:text-base text-[#D8D5CC] leading-relaxed">
            High-throughput merchants face transient failures across bank gateways. Manual debugging takes 30+ minutes while customers drop off, but naive automation risks uncontrolled financial mutations.
          </p>
          <p className="font-body text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            FinPilot separates probabilistic reasoning from execution: Gemini hypothesizes failure causes and proposes remediation plans, while deterministic boolean gates independently verify invariants before simulated sandbox writes.
          </p>
        </div>

        {/* Right: Interactive Pipeline Stepper */}
        <div className="lg:col-span-7 bg-[#161616] border border-[#262626] p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#787670] border-b border-[#262626] pb-3">
            <span className="text-white font-bold">INCIDENT PIPELINE</span>
            <span>CLICK STEP TO INSPECT</span>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-5 gap-1.5">
            {PIPELINE_STAGES.map((s, idx) => (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`text-left p-2 border font-mono text-[10px] transition-all ${
                  activeStage === idx
                    ? 'border-[#FF4D24] bg-[#FF4D24]/10 text-white font-bold'
                    : 'border-[#262626] bg-[#111111] text-[#787670] hover:border-[#404040]'
                }`}
              >
                <div>[{s.step}]</div>
                <div className="truncate mt-1">{s.name}</div>
              </button>
            ))}
          </div>

          {/* Active Stage Inspector Box */}
          <div className="border border-[#262626] bg-[#111111] p-4 font-mono text-xs space-y-2">
            <div className="flex items-center justify-between text-[#FF4D24]">
              <span className="font-bold">STAGE {PIPELINE_STAGES[activeStage].step}: {PIPELINE_STAGES[activeStage].name}</span>
              <span className="text-[10px] bg-[#FF4D24]/20 px-2 py-0.5 border border-[#FF4D24]/40 font-bold">
                {PIPELINE_STAGES[activeStage].status}
              </span>
            </div>
            <p className="text-[#D8D5CC] font-body text-xs sm:text-sm leading-relaxed">
              {PIPELINE_STAGES[activeStage].detail}
            </p>
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex items-center justify-between pt-6 border-t border-[#262626] font-mono text-xs">
        <span className="text-[#787670]">FastAPI &bull; Gemini &bull; SQLite &bull; Razorpay Sandbox</span>

        <div className="flex items-center gap-5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#FF4D24] transition-colors flex items-center gap-1 font-bold"
          >
            <span>GITHUB</span>
            <span className="text-[#FF4D24]">&rarr;</span>
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF4D24] hover:underline transition-colors flex items-center gap-1 font-bold"
            >
              <span>DEMO</span>
              <span>&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
