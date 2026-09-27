import React, { useEffect, useState } from 'react';
import { soundManager } from '../utils/audio';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Fast high-end numeric counter from 0 to 100
    const duration = 1200; // 1.2s
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Non-linear easing for cinematic acceleration
      const easeVal = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const currentCount = Math.floor(easeVal * 100);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        soundManager.playTick();
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(onComplete, 600);
        }, 200);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] transition-all duration-700 ease-in-out ${
        isFadingOut ? 'pointer-events-none opacity-0 scale-105 filter blur-sm' : 'opacity-100'
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(193,18,31,0.12)_0%,transparent_70%)]" />

      {/* Cyber grid lines */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Monogram / Name */}
        <div className="overflow-hidden mb-4">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-white">
            JYOTHIR <span className="text-[#C1121F]">GOSH</span>
          </h1>
        </div>

        {/* Subtitle / System tag */}
        <div className="flex items-center gap-3 text-xs tracking-[0.35em] text-[#A0A0A0] uppercase mb-8">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C1121F] animate-ping" />
          <span>INITIALIZING DIGITAL ARCHITECTURE</span>
          <span className="text-white/20">|</span>
          <span className="text-[#C1121F] font-mono">SYS_2026</span>
        </div>

        {/* Numeric Telemetry Counter */}
        <div className="font-mono text-5xl sm:text-7xl font-bold tracking-widest text-[#F5F5F5] tabular-nums">
          {count < 10 ? `0${count}` : count}
          <span className="text-sm font-normal text-[#C1121F] ml-1">%</span>
        </div>

        {/* Scanning progress line */}
        <div className="mt-6 h-[2px] w-48 sm:w-64 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-[#8B0000] via-[#C1121F] to-white transition-all duration-75"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>

      {/* Director stamp at bottom */}
      <div className="absolute bottom-10 flex items-center justify-between w-full max-w-5xl px-8 text-[11px] tracking-widest text-zinc-500 uppercase">
        <span>CORE // PORTFOLIO</span>
        <span>KERALA, IN</span>
      </div>
    </div>
  );
};
