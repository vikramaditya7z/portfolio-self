import React, { useState } from 'react';
import { PROJECTS } from '@/content/projects';

export const KeepSakeCard: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'keepsake')!;
  const [activeTab, setActiveTab] = useState<'constraint' | 'benchmarks'>('constraint');

  return (
    <article
      id="keepsake"
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
          LOCAL PROCESSING &bull; ZERO CLOUD EXPOSURE
        </div>
      </div>

      {/* Narrative & Interactive Architecture Demo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 items-start">
        {/* Left: Narrative */}
        <div className="lg:col-span-5 space-y-4">
          <p className="font-body text-sm sm:text-base text-[#151515] leading-relaxed">
            Native macOS photo organization application emphasizing private on-device processing, independent engineering ownership, and optimal memory management.
          </p>
          <p className="font-body text-sm sm:text-base text-[#525252] leading-relaxed">
            Integrates Apple Vision for face detection and Core ML (InsightFace) generating 512-dimensional Float32 embeddings for cosine similarity comparisons. Features constrained hierarchical clustering with hard cannot-link constraints to prevent distinct co-occurring faces from being grouped together.
          </p>
        </div>

        {/* Right: Interactive Inspection Panel */}
        <div className="lg:col-span-7 bg-white border border-[#151515] p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#D8D5CC] pb-3 text-xs font-mono">
            <span className="text-[#FF4D24] font-bold">ENGINEERING VERIFICATION</span>
            <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab('constraint')}
                className={`px-2 py-1 border text-[10px] sm:text-[11px] text-center transition-colors font-mono ${
                  activeTab === 'constraint'
                    ? 'border-[#151515] text-white bg-[#151515] font-bold'
                    : 'border-[#D8D5CC] text-[#525252] hover:border-[#151515]'
                }`}
              >
                CANNOT-LINK INVARIANT
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('benchmarks')}
                className={`px-2 py-1 border text-[10px] sm:text-[11px] text-center transition-colors font-mono ${
                  activeTab === 'benchmarks'
                    ? 'border-[#151515] text-white bg-[#151515] font-bold'
                    : 'border-[#D8D5CC] text-[#525252] hover:border-[#151515]'
                }`}
              >
                SYSTEM BENCHMARKS
              </button>
            </div>
          </div>

          {activeTab === 'constraint' ? (
            /* Cannot-Link Constraint Demonstration */
            <div className="space-y-3 font-mono text-xs">
              <div className="border border-[#D8D5CC] bg-[#FAF8F5] p-3.5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] text-[#787670] uppercase">
                  <span>PHOTO REFERENCE: IMG_0785.HEIC</span>
                  <span className="text-[#FF4D24] font-bold">CO-OCCURRENCE INVARIANT</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-[11px] text-[#151515]">
                  <div className="p-2 border border-[#E5E0D5] bg-white">
                    <span className="text-[10px] text-[#787670] block">FACE DETECTED A</span>
                    <span className="font-bold">512-D Float32 Embedding</span>
                  </div>
                  <div className="p-2 border border-[#E5E0D5] bg-white">
                    <span className="text-[10px] text-[#787670] block">FACE DETECTED B</span>
                    <span className="font-bold">512-D Float32 Embedding</span>
                  </div>
                </div>
                <div className="text-[11px] text-[#525252] pt-1">
                  Cosine Similarity: <span className="font-bold text-[#151515]">0.72</span> (Cluster Merge Threshold: <span className="font-bold text-[#151515]">0.65</span>)
                </div>
              </div>

              {/* Invariant Resolution Box */}
              <div className="border border-[#262626] bg-[#111111] text-[#F3F0E8] p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-[#A3A3A3]">HIERARCHICAL CLUSTERING GATE</span>
                  <span className="text-[#FF4D24] font-bold">CANNOT-LINK ENFORCED</span>
                </div>
                <p className="font-body text-xs text-[#D8D5CC] leading-relaxed">
                  Even though cosine similarity (0.72) exceeds standard grouping threshold (0.65), both faces originate from the same photograph. The average-linkage tree enforces an immutable cannot-link penalty:
                </p>
                <div className="font-mono text-[11px] text-[#FF4D24] font-bold border-t border-[#262626] pt-1.5 flex flex-wrap items-center gap-2">
                  <span>✓ INVARIANT PRESERVED:</span>
                  <span className="text-white">Assigned to disjoint identity clusters</span>
                </div>
              </div>
            </div>
          ) : (
            /* System Benchmarks & Architecture */
            <div className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="border border-[#D8D5CC] bg-[#FAF8F5] p-3 text-center">
                  <div className="text-[10px] text-[#787670] uppercase">PEAK MEMORY</div>
                  <div className="text-sm font-bold text-[#151515] mt-1">&lt; 1 GB RAM</div>
                  <div className="text-[9px] text-[#525252] mt-0.5">Across 785 photos</div>
                </div>

                <div className="border border-[#D8D5CC] bg-[#FAF8F5] p-3 text-center">
                  <div className="text-[10px] text-[#787670] uppercase">TEST COVERAGE</div>
                  <div className="text-sm font-bold text-[#151515] mt-1">282 TESTS</div>
                  <div className="text-[9px] text-[#525252] mt-0.5">280 Pass &bull; 0 Fail</div>
                </div>

                <div className="border border-[#D8D5CC] bg-[#FAF8F5] p-3 text-center">
                  <div className="text-[10px] text-[#787670] uppercase">MODEL ENGINE</div>
                  <div className="text-sm font-bold text-[#FF4D24] mt-1">CORE ML</div>
                  <div className="text-[9px] text-[#525252] mt-0.5">InsightFace ONNX</div>
                </div>
              </div>

              <div className="border border-[#262626] bg-[#111111] text-[#F3F0E8] p-3.5 space-y-1.5 text-xs">
                <div className="text-[10px] text-[#FF4D24] font-bold uppercase">PERSISTENCE ARCHITECTURE:</div>
                <div className="text-[11px] text-[#D8D5CC] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF4D24] font-bold">&bull;</span> Atomic JSON persistence prevents write corruption during background indexing.
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF4D24] font-bold">&bull;</span> Disk-backed caching of facial bounding boxes and embedding vectors.
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF4D24] font-bold">&bull;</span> Packaged ONNX-to-Core ML model conversion workflow with no external runtime dependencies.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex items-center justify-between pt-6 border-t border-[#151515] font-mono text-xs">
        <span className="text-[#525252]">Swift &bull; SwiftUI &bull; Core ML &bull; Apple Vision &bull; Python &bull; ONNX</span>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#151515] hover:text-[#FF4D24] transition-colors flex items-center gap-1 font-bold"
          >
            <span>GITHUB</span>
            <span className="text-[#FF4D24]">&rarr;</span>
          </a>
        )}
      </div>
    </article>
  );
};
