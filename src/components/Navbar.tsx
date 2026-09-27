import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = soundManager.toggleMute();
    setIsAudioActive(active);
  };

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'work', label: 'WORK' },
    { id: 'timeline', label: 'TIMELINE' },
    { id: 'visuals', label: 'VISUALS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    soundManager.playTick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/80'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand / Name Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="group flex items-center gap-3 text-left focus:outline-none"
            data-cursor="TOP"
          >
            <span className="h-2 w-2 rounded-full bg-[#C1121F] shadow-[0_0_8px_#C1121F] group-hover:scale-125 transition-transform" />
            <div className="flex flex-col">
              <span className="font-display text-sm sm:text-base font-black tracking-wider text-white group-hover:text-[#C1121F] transition-colors">
                JYOTHIR GOSH
              </span>
              <span className="text-[10px] tracking-widest text-[#A0A0A0] uppercase hidden sm:block">
                DEVELOPER • EDITOR
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-[#0B0B0C]/60 px-4 py-1.5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative px-4 py-1 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
                  }`}
                  data-cursor="GOTO"
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4 bg-[#C1121F] shadow-[0_0_8px_#C1121F] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools: Audio + Contact Button */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className={`flex items-center justify-center h-9 w-9 rounded-full border transition-all duration-300 ${
                isAudioActive
                  ? 'border-[#C1121F] bg-[#C1121F]/15 text-[#C1121F] shadow-[0_0_12px_rgba(193,18,31,0.4)]'
                  : 'border-white/10 bg-white/5 text-[#A0A0A0] hover:text-white hover:border-white/20'
              }`}
              title={isAudioActive ? 'Mute Atmosphere Audio' : 'Unmute Ambient Soundscape'}
              data-cursor="AUDIO"
            >
              {isAudioActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Quick CTA */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:border-[#C1121F] hover:bg-[#C1121F] hover:shadow-[0_0_20px_rgba(193,18,31,0.5)]"
              data-cursor="TALK"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-30 flex flex-col justify-between bg-[#050505]/98 backdrop-blur-2xl p-8 pt-28 transition-all duration-500 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-6'
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="text-xs font-mono tracking-widest text-[#C1121F] uppercase">
            // NAVIGATION DIRECTORY
          </div>
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className="group flex items-center justify-between text-left border-b border-white/10 pb-4 focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#A0A0A0] group-hover:text-[#C1121F]">
                  0{idx + 1}
                </span>
                <span className="font-display text-3xl font-bold tracking-tight text-white group-hover:text-[#C1121F] transition-colors">
                  {item.label}
                </span>
              </div>
              <ArrowUpRight size={20} className="text-white/40 group-hover:text-[#C1121F]" />
            </button>
          ))}
        </div>

        {/* Mobile Drawer Footer */}
        <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
          <div className="text-xs text-[#A0A0A0] uppercase tracking-wider">
            STATUS: <span className="text-emerald-400">AVAILABLE FOR WORK</span>
          </div>
          <button
            onClick={() => handleLinkClick('contact')}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#C1121F] py-3.5 text-sm font-bold text-white uppercase tracking-wider shadow-lg shadow-[#C1121F]/40"
          >
            START A PROJECT
          </button>
        </div>
      </div>
    </>
  );
};
