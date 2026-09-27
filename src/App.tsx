import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Visuals } from './components/Visuals';
import { Statement } from './components/Statement';
import { Connect } from './components/Connect';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Lenis from 'lenis';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Initialize Lenis smooth scroll for cinematic momentum feel
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [loading]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: id === 'hero' ? 0 : offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-[#F5F5F5] selection:bg-[#8B0000] selection:text-white">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* 35mm Subtle Film Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-40 bg-grain opacity-60" />

      {/* Cinematic Top and Bottom Framing Lines */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-transparent via-[#C1121F]/30 to-transparent" />
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-transparent via-[#C1121F]/30 to-transparent" />

      {/* Preloader Experience */}
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : null}

      {/* Floating Glass Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Cinematic Portfolio Flow */}
      <main className="relative flex flex-col w-full">
        <Hero onExploreClick={() => scrollToSection('about')} />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Visuals />
        <Statement />
        <Connect />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer onBackToTop={() => scrollToSection('hero')} />
    </div>
  );
};

export default App;
