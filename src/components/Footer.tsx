import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ArrowUp, Shield } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  const { socials } = PORTFOLIO_DATA;
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setIstTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBackToTop = () => {
    soundManager.playWhoosh();
    onBackToTop();
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#030303] py-16 px-6 sm:px-8 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Footer Row: Monogram + Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-white/10 pb-12">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white">
              JYOTHIR <span className="text-[#C1121F]">GOSH</span>
            </h2>
            <p className="mt-2 font-mono text-xs tracking-[0.25em] text-[#A0A0A0] uppercase">
              DEVELOPER • EDITOR • DIGITAL CREATOR
            </p>
          </div>

          <button
            onClick={handleBackToTop}
            className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-mono font-bold tracking-widest text-white uppercase hover:border-[#C1121F] hover:bg-[#C1121F] transition-all duration-300"
            data-cursor="TOP"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Middle Footer Row: Social Links + Telemetry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
          {/* Col 1: Social Directory */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-zinc-500 uppercase tracking-widest">CHANNELS</span>
            <div className="flex flex-wrap gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-[#C1121F] transition-colors font-medium"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: System Status & Time */}
          <div className="flex flex-col gap-1 font-mono">
            <span className="text-zinc-500 uppercase tracking-widest">KERALA LOCAL TIME (IST)</span>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{istTime || '19:30:00'} IST</span>
            </div>
          </div>

          {/* Col 3: Security & Build Spec */}
          <div className="flex flex-col gap-1 font-mono md:text-right">
            <span className="text-zinc-500 uppercase tracking-widest">ENVIRONMENT</span>
            <div className="text-zinc-300 flex md:justify-end items-center gap-1.5">
              <Shield size={12} className="text-[#C1121F]" />
              <span>PERSONAL PORTFOLIO BUILD</span>
            </div>
            <span className="text-[11px] text-zinc-500">ENGINEERED WITH REACT & TS</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-[11px] font-mono text-zinc-600">
          <div>© 2026 Jyothir Gosh. All Rights Reserved.</div>
          <div>DESIGNED & DEVELOPED WITH CINEMATIC PURPOSE.</div>
        </div>
      </div>
    </footer>
  );
};
