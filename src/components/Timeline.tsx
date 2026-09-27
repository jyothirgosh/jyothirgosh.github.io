import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { soundManager } from '../utils/audio';
import { Award, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';


export const Timeline: React.FC = () => {
  const { timeline } = PORTFOLIO_DATA;
  const [activeIndex, setActiveIndex] = useState(timeline.length - 1); // Default to the latest timeline milestone
  const activeMilestone = timeline[activeIndex];

  const handleSelectYear = (index: number) => {
    soundManager.playTick();
    setActiveIndex(index);
  };

  const handlePrev = () => {
    if (activeIndex > 0) handleSelectYear(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < timeline.length - 1) handleSelectYear(activeIndex + 1);
  };

  return (
    <section
      id="timeline"
      className="relative w-full overflow-hidden bg-[#050505] py-28 px-6 sm:px-8 border-t border-white/5"
    >
      {/* Background radial spotlight */}
      <div className="pointer-events-none absolute bottom-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#8B0000]/15 blur-[160px]" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-[#C1121F] font-bold">04 //</span>
              <span className="font-mono text-xs tracking-[0.25em] text-[#A0A0A0] uppercase">
                CHRONOLOGY
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight">
              THROUGH TIME
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              aria-label="Previous milestone"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === timeline.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              aria-label="Next milestone"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* High-Tech Circular Timeline Navigation Dial (Inspired by Video Stage) */}
        <div className="relative flex flex-col items-center justify-center py-6">
          {/* Glowing trajectory track */}
          <div className="relative w-full max-w-4xl flex items-center justify-between px-4 sm:px-12">
            {/* Connecting baseline glow line */}
            <div className="absolute left-4 sm:left-12 right-4 sm:right-12 h-[2px] bg-white/10 -z-0">
              <div
                className="h-full bg-gradient-to-r from-[#8B0000] via-[#C1121F] to-white transition-all duration-500"
                style={{
                  width: `${(activeIndex / (timeline.length - 1)) * 100}%`,
                }}
              />
            </div>

            {timeline.map((item, idx) => {
              const isSelected = activeIndex === idx;
              const isPassed = activeIndex >= idx;

              return (
                <button
                  key={item.year}
                  onClick={() => handleSelectYear(idx)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                  data-cursor={item.year}
                >
                  {/* Year Node Pin */}
                  <div
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full transition-all duration-300 ${
                      isSelected
                        ? 'border-2 border-[#C1121F] bg-[#8B0000] shadow-[0_0_25px_rgba(193,18,31,0.6)] scale-110'
                        : isPassed
                        ? 'border border-[#C1121F]/50 bg-[#0B0B0C] text-zinc-300'
                        : 'border border-white/10 bg-[#050505] text-zinc-600 hover:border-white/30'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold tracking-wider ${
                        isSelected ? 'text-white' : ''
                      }`}
                    >
                      {item.year.slice(2)}
                    </span>
                  </div>

                  {/* Year Full Label Below */}
                  <span
                    className={`mt-3 font-mono text-xs tracking-widest transition-colors duration-300 ${
                      isSelected
                        ? 'text-[#C1121F] font-bold'
                        : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  >
                    {item.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Milestone Detail Theater Display */}
        <div className="relative rounded-2xl border border-white/10 bg-[#0B0B0C]/90 p-8 sm:p-12 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Top glowing laser line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C1121F] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl sm:text-5xl font-black text-[#C1121F]">
                  {activeMilestone.year}
                </span>
                <span className="text-white/20 text-2xl font-light">/</span>
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                  {activeMilestone.category}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {activeMilestone.title}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                {activeMilestone.description}
              </p>

              <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <Award size={20} className="text-[#C1121F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    KEY MILESTONE DELIVERABLE
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {activeMilestone.achievement}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side telemetry stamp */}
            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="flex flex-col items-center lg:items-end text-center lg:text-right gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 size={14} />
                  <span>PHASE ARCHIVED // VERIFIED</span>
                </div>
                <div className="font-mono text-[11px] text-zinc-500">
                  NODE REF: JG_TL_{activeMilestone.year}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#C1121F]/30 bg-[#C1121F]/10 px-4 py-1 text-xs font-mono text-[#C1121F]">
                  <span>{activeIndex + 1} OF {timeline.length} TIMELINE PHASES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
