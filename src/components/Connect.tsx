import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ArrowUpRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Connect: React.FC = () => {
  const { socials } = PORTFOLIO_DATA;

  return (
    <section
      id="connect"
      className="relative w-full overflow-hidden bg-[#050505] py-24 px-6 sm:px-8 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C1121F] font-bold">06 //</span>
            <span className="font-mono text-xs tracking-[0.25em] text-[#A0A0A0] uppercase">
              NETWORK & CHANNELS
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-500">GLOBAL DIRECTORY</span>
        </div>

        <div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-8">
            LET'S CONNECT
          </h2>
        </div>

        {/* Cinematic High-Contrast Social Link Rows */}
        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {socials.map((social, idx) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playTick()}
              className="group relative flex items-center justify-between py-6 sm:py-8 transition-all duration-300 hover:px-4"
              data-cursor="LINK"
            >
              {/* Left Side: Number & Name */}
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="font-mono text-xs sm:text-sm text-zinc-600 group-hover:text-[#C1121F] transition-colors">
                  0{idx + 1}
                </span>
                <span className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white group-hover:text-[#C1121F] group-hover:translate-x-2 transition-all duration-300">
                  {social.name}
                </span>
              </div>

              {/* Right Side: Handle & Kinetic Arrow */}
              <div className="flex items-center gap-4 sm:gap-8">
                <span className="font-mono text-xs sm:text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors hidden sm:block">
                  {social.handle}
                </span>
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 group-hover:border-[#C1121F] group-hover:bg-[#C1121F] group-hover:scale-110 shadow-lg group-hover:shadow-[#C1121F]/40">
                  <ArrowUpRight
                    size={20}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
