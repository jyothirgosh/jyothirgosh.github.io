import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ShieldCheck, Code2, Compass, GraduationCap, MapPin, Activity } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#050505] py-28 px-6 sm:px-8 border-t border-white/5"
    >
      {/* Background ambient crimson radial leak */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#8B0000]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-96 w-96 rounded-full bg-[#C1121F]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Section Index & Subtitle */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C1121F] font-bold">01 //</span>
            <span className="font-mono text-xs tracking-[0.25em] text-[#A0A0A0] uppercase">
              ABOUT ME
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-500">DOSSIER // IDENTITY</span>
        </div>

        {/* Cinematic Manifesto Grid: Big Statement + Editorial Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Huge Typography Statement: BUILD. SECURE. CREATE. */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-col font-display font-black text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.92] tracking-tighter text-white uppercase">
              <span className="group inline-block transition-transform duration-500 hover:translate-x-3 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-zinc-400">
                {personal.mantra[0]}
              </span>
              <span className="group inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] to-[#FF2A3D] transition-transform duration-500 hover:translate-x-3">
                {personal.mantra[1]}
              </span>
              <span className="group inline-block transition-transform duration-500 hover:translate-x-3 hover:text-white">
                {personal.mantra[2]}
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#C1121F]" />
              <span className="font-mono text-xs tracking-widest text-[#A0A0A0] uppercase">
                THE PHILOSOPHY
              </span>
            </div>
          </div>

          {/* Right: Editorial Narrative Paragraph */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-zinc-200 tracking-tight">
              &ldquo;{personal.shortBio}&rdquo;
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#A0A0A0]">
              I enjoy combining practical development skills with visual creativity. I focus on building clean, responsive web experiences and creating engaging digital content while continuing to learn cybersecurity and modern technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#C1121F]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white">DEVELOPMENT</div>
                  <div className="text-xs text-zinc-500">Learning & Building</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white">DIGITAL CREATION</div>
                  <div className="text-xs text-zinc-500">Design & Editing</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROFILE / PERSONAL DETAILS (Cinematic Cyberpunk Dossier HUD) */}
        <div className="relative rounded-2xl border border-white/10 bg-[#0B0B0C]/80 p-8 sm:p-12 backdrop-blur-xl overflow-hidden shadow-2xl">
          {/* Top glowing bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C1121F] to-transparent" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <div className="font-mono text-xs tracking-widest text-[#C1121F] uppercase mb-1">
                // SYSTEM DOSSIER SPECIFICATION
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                PERSONAL IDENTITY MATRIX
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
              <Activity size={13} className="animate-pulse" />
              <span>{personal.systemStatus}</span>
            </div>
          </div>

          {/* Grid of Dossier Information Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Field 1: Name */}
            <div className="flex flex-col gap-1 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 transition-all">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                Full Legal Identity
              </span>
              <span className="font-display text-lg sm:text-xl font-bold text-white">
                {personal.name}
              </span>
              
            </div>

            {/* Field 2: Focus */}
            <div className="flex flex-col gap-1 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#C1121F]/30 transition-all">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                Primary Focus Area
              </span>
              <span className="font-display text-lg sm:text-xl font-bold text-zinc-100">
                {personal.focus}
              </span>
              <span className="text-xs text-zinc-400">Full Stack & Security Architecture</span>
            </div>

            {/* Field 3: Location */}
            <div className="flex flex-col gap-1 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 transition-all">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin size={13} className="text-[#C1121F]" />
                Geographic Base
              </span>
              <span className="font-display text-lg sm:text-xl font-bold text-white">
                {personal.location}
              </span>
              <span className="text-xs font-mono text-zinc-500"></span>
            </div>

            {/* Field 4: Education */}
            <div className="flex flex-col gap-1 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 transition-all">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap size={13} className="text-[#C1121F]" />
                Academic Background
              </span>
              <span className="font-display text-lg sm:text-xl font-bold text-white">
                {personal.education}
              </span>
              <span className="text-xs text-zinc-400">Specialized Cybersecurity Degree</span>
            </div>

            {/* Field 5: Interests */}
            <div className="flex flex-col gap-1 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#C1121F]/30 transition-all md:col-span-2">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                <Compass size={13} className="text-[#C1121F]" />
                Core Interests & Explorations
              </span>
              <span className="font-display text-lg sm:text-xl font-bold text-white">
                {personal.interests}
              </span>
              <span className="text-xs text-zinc-400">
                Continuous curiosity at the intersection of security, interactive design, and product ventures.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
