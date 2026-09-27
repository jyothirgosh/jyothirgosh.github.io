import React, { useState } from 'react';
import { PORTFOLIO_DATA, type Skill } from '../data/portfolio';
import { soundManager } from '../utils/audio';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';


export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [activeSkill, setActiveSkill] = useState<Skill>(skills[0]);

  const handleSkillHover = (skill: Skill) => {
    soundManager.playTick();
    setActiveSkill(skill);
  };


  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-[#050505] py-28 px-6 sm:px-8 border-t border-white/5"
    >
      {/* Dynamic ambient spotlight focused on active skill */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#8B0000]/15 blur-[150px] transition-all duration-700" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-[#C1121F] font-bold">02 //</span>
              <span className="font-mono text-xs tracking-[0.25em] text-[#A0A0A0] uppercase">
                THE CREATIVE UNIVERSE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight">
              WHAT I DO
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
            <Sparkles size={14} className="text-[#C1121F]" />
            <span>HOVER TO INSPECT CAPABILITIES</span>
          </div>
        </div>

        {/* Cinematic Split Stage: Massive Interactive List on Left + Real-time HUD on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Monumental Skill Typography List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
            {skills.map((skill, idx) => {
              const isSelected = activeSkill.id === skill.id;

              return (
                <div
                  key={skill.id}
                  onMouseEnter={() => handleSkillHover(skill)}
                  className={`group relative py-6 sm:py-7 flex items-center justify-between cursor-pointer transition-all duration-300 ${
                    isSelected ? 'pl-4 sm:pl-6' : 'hover:pl-4'
                  }`}
                  data-cursor="INSPECT"
                >
                  {/* Active Indicator Line */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-[#C1121F] transition-all duration-300 ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                  />

                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span
                      className={`font-mono text-xs sm:text-sm font-semibold transition-colors ${
                        isSelected ? 'text-[#C1121F]' : 'text-zinc-600 group-hover:text-zinc-400'
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    <span
                      className={`font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight transition-all duration-300 ${
                        isSelected
                          ? 'text-white translate-x-1'
                          : 'text-zinc-400 group-hover:text-zinc-100 group-hover:translate-x-1'
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`hidden sm:inline font-mono text-xs px-2.5 py-1 rounded-full border transition-all ${
                        isSelected
                          ? 'border-[#C1121F]/40 bg-[#C1121F]/10 text-[#C1121F]'
                          : 'border-white/5 text-zinc-600 group-hover:border-white/20 group-hover:text-zinc-400'
                      }`}
                    >
                      {skill.category}
                    </span>

                    <ArrowUpRight
                      size={20}
                      className={`transition-all duration-300 ${
                        isSelected
                          ? 'text-[#C1121F] translate-x-1 -translate-y-1'
                          : 'text-zinc-600 group-hover:text-white'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Interactive Futuristic HUD Inspector for Active Skill */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="relative rounded-2xl border border-white/10 bg-[#0B0B0C]/90 p-8 backdrop-blur-2xl shadow-2xl overflow-hidden">
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-[#C1121F]/20 rounded-full blur-2xl pointer-events-none" />

              {/* HUD Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="font-mono text-xs tracking-widest text-[#C1121F] uppercase">
                  CAPABILITY READOUT
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  {activeSkill.category}
                </span>
              </div>

              {/* Title & Proficiency */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                  {activeSkill.name}
                </h3>
                <div className="text-right">
                  <div className="font-mono text-sm font-bold text-[#C1121F] tracking-wider">
                    {activeSkill.level}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    EXPERIENCE STAGE
                  </div>
                </div>
              </div>

              {/* Highlight Narrative */}
              <p className="text-sm leading-relaxed text-zinc-300 mb-6">
                {activeSkill.highlight}
              </p>

              {/* Core Skill Tags */}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                  DEPLOYMENT DOMAINS
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSkill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200"
                    >
                      <CheckCircle2 size={12} className="text-[#C1121F]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Stamp */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>PROFILE // JG</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVE BENCHMARK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
