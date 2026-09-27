import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Statement: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#050505] py-32 px-6 sm:px-8 border-t border-white/5 select-none">
      {/* Central crimson ambient flare */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[650px] w-[650px] rounded-full radial-spotlight blur-3xl opacity-75" />

      {/* Cyber line grid watermark */}
      <div className="pointer-events-none absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Subtitle tag */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C1121F]" />
          <span className="font-mono text-xs tracking-[0.35em] text-[#A0A0A0] uppercase">
            THE CREATIVE CREED
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#C1121F]" />
        </div>

        {/* Monumental Impact Typography */}
        <h2 className="font-display font-black text-white text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.98] tracking-tight uppercase max-w-5xl">
          BUILDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] to-[#FF2A3D]">DIGITAL EXPERIENCES</span> WITH PURPOSE.
        </h2>

        {/* Supporting cinematic director line */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 text-xs font-mono tracking-widest text-zinc-500 uppercase">
          <span>{personal.name}</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>2026 // DEVELOPMENT & CREATIVE WORK</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>KERALA, INDIA</span>
        </div>
      </div>
    </section>
  );
};
