import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports fine hover (desktop/mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsTouchDevice(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(!e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Inspect target element or ancestors for data-cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      const customCursorEl = target.closest('[data-cursor]') as HTMLElement | null;

      if (customCursorEl) {
        const text = customCursorEl.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else if (interactive) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Smooth lerp for trailing ring
  useEffect(() => {
    if (isTouchDevice) return;

    let animId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.18),
        y: lerp(prev.y, position.y, 0.18),
      }));
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Small precise center dot */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered && cursorText ? '0px' : '4px',
          height: isHovered && cursorText ? '0px' : '4px',
          opacity: isHovered && cursorText ? 0 : 0.9,
        }}
      />

      {/* Outer fluid trailing ring with dynamic text */}
      <div
        className={`fixed flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-200 ease-out ${
          cursorText
            ? 'border border-[#C1121F] bg-[#8B0000]/85 px-3 py-1 shadow-[0_0_20px_rgba(193,18,31,0.5)] backdrop-blur-md'
            : isHovered
            ? 'h-11 w-11 border border-[#C1121F]/80 bg-[#C1121F]/15 shadow-[0_0_15px_rgba(193,18,31,0.35)]'
            : 'h-8 w-8 border border-white/30 bg-transparent'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        {cursorText && (
          <span className="font-display text-[10px] font-bold tracking-widest text-white uppercase select-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
