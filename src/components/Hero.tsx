import React, { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ArrowDown, Shield, Terminal, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse tilt tracking for subtle cinematic parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  // Interactive floor glowing pedestal rings inspired directly by the reference video
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for ambient spatial energy
    const particles: { x: number; y: number; size: number; speedY: number; opacity: number }[] = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.5,
        speedY: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mousePos.x * 25;
      const centerY = height * 0.72 + mousePos.y * 15;

      // 1. Perspective Ellipse Light Pedestal (directly inspired by reference video floor ring)
      const ringCount = 3;
      for (let i = 1; i <= ringCount; i++) {
        const radiusX = (width * 0.28 * i) / ringCount;
        const radiusY = (height * 0.08 * i) / ringCount;

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
        ctx.strokeStyle = i === ringCount 
          ? `rgba(193, 18, 31, ${0.35 + Math.sin(time) * 0.1})` 
          : `rgba(139, 0, 0, ${0.2 + Math.sin(time + i) * 0.05})`;
        ctx.lineWidth = i === ringCount ? 2 : 1;
        ctx.shadowColor = '#C1121F';
        ctx.shadowBlur = i === ringCount ? 25 : 10;
        ctx.stroke();
        ctx.restore();
      }

      // 2. Center stage ground beam
      const beamGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        width * 0.35
      );
      beamGrad.addColorStop(0, 'rgba(193, 18, 31, 0.2)');
      beamGrad.addColorStop(0.4, 'rgba(139, 0, 0, 0.07)');
      beamGrad.addColorStop(1, 'rgba(5, 5, 5, 0)');

      ctx.save();
      ctx.fillStyle = beamGrad;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, width * 0.38, height * 0.16, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 3. Floating ambient embers/particles
      particles.forEach((p) => {
        p.y -= p.speedY;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [mousePos]);

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#050505] pt-24 pb-8 select-none"
    >
      {/* Background Interactive Floor Rings Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      />

      {/* Subtle radial light leak from behind */}
      <div 
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] rounded-full radial-glow-crimson opacity-60 blur-3xl transition-transform duration-700"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 30}px), calc(-50% + ${mousePos.y * 30}px))`
        }}
      />

      {/* Top Banner Badges (Director aesthetic inspired by video) */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 pt-6 flex items-center justify-between text-xs tracking-widest uppercase text-[#A0A0A0]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C1121F] animate-pulse" />
          <span className="font-mono text-[11px] text-white/70">PORTFOLIO VOL. 01</span>
        </div>

        <div className="hidden sm:flex items-center gap-6 font-mono text-[11px]">
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Shield size={12} className="text-[#C1121F]" />
            DEVELOPMENT • EDITING 2026
          </span>
          <span className="text-white/20">•</span>
          <span className="text-zinc-400">{PORTFOLIO_DATA.personal.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded border border-white/10 px-2 py-0.5 font-mono text-[10px] text-[#C1121F] bg-[#C1121F]/10">
            ONLINE
          </span>
        </div>
      </div>

      {/* Monumental Hero Headline */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center px-4 text-center">
        {/* Supporting Top Label */}
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#0B0B0C]/70 px-5 py-1.5 mb-6 backdrop-blur-md">
          <Sparkles size={13} className="text-[#C1121F]" />
          <span className="font-mono text-xs tracking-[0.25em] text-white/90 uppercase">
            {PORTFOLIO_DATA.personal.specialties}
          </span>
        </div>

        {/* MONUMENTAL NAME TYPOGRAPHY: JYOTHIR GOSH */}
        <div 
          className="flex flex-col items-center justify-center tracking-tighter transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y * -3}deg) rotateY(${mousePos.x * 3}deg)`
          }}
        >
          <h1 className="font-display font-black text-white text-[clamp(4.5rem,15vw,17rem)] leading-[0.88] tracking-[-0.04em] drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
            JYOTHIR
          </h1>
          <h1 className="font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F5F5F5] to-zinc-400 text-[clamp(4.5rem,15vw,17rem)] leading-[0.88] tracking-[-0.04em]">
            GOSH
          </h1>
        </div>

        {/* Subtitle / Role Tag */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 text-sm sm:text-base font-medium tracking-[0.3em] text-[#A0A0A0] uppercase">
          <span className="text-white font-semibold">{PORTFOLIO_DATA.personal.role}</span>
          <span className="hidden sm:inline text-[#C1121F]">•</span>
          <span className="text-zinc-400">DIGITAL ARCHITECT</span>
          <span className="hidden sm:inline text-[#C1121F]">•</span>
          <span className="text-zinc-400">KERALA, INDIA</span>
        </div>
      </div>

      {/* Bottom Hero Anchor & Scroll Cue */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-4 text-xs text-[#A0A0A0]">
        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
          <Terminal size={12} className="text-[#C1121F]" />
          <span>ZERO_TRUST_ENGINEERING // V3.2</span>
        </div>

        {/* Interactive Scroll Down Button */}
        <button
          onClick={onExploreClick}
          className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:border-[#C1121F] hover:bg-[#C1121F]/10"
          data-cursor="EXPLORE"
        >
          <span>EXPLORE UNIVERSE</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform text-[#C1121F]" />
        </button>

        <div className="font-mono text-[11px] text-zinc-500">
          <span>LAT: 10.85° N // LON: 76.27° E</span>
        </div>
      </div>
    </section>
  );
};
