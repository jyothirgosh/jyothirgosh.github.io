import React, { useState, useRef } from 'react';
import { PORTFOLIO_DATA, type MediaItem } from '../data/portfolio';
import { Play, Pause, Film } from 'lucide-react';
import { soundManager } from '../utils/audio';


export const Visuals: React.FC = () => {
  const { mediaReel } = PORTFOLIO_DATA;
  const [activeMedia, setActiveMedia] = useState<MediaItem>(mediaReel[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleSelectMedia = (item: MediaItem) => {
    soundManager.playTick();
    setActiveMedia(item);
    setIsPlaying(true);
  };

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="visuals"
      className="relative w-full overflow-hidden bg-[#050505] py-28 px-6 sm:px-8 border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#8B0000]/10 blur-[170px]" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-[#C1121F] font-bold">05 //</span>
              <span className="font-mono text-xs tracking-[0.25em] text-[#A0A0A0] uppercase">
                MOTION & MEDIA
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight">
              VISUALS
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <Film size={14} className="text-[#C1121F]" />
            <span>CINEMATIC REEL & DIGITAL ARTWORK</span>
          </div>
        </div>

        {/* Hero Media Theater (Large Widescreen Stage) */}
        <div className="relative aspect-[21/9] sm:aspect-[16/9] max-h-[700px] w-full rounded-2xl border border-white/15 bg-black overflow-hidden shadow-2xl group">
          {activeMedia.type === 'video' ? (
            <div className="relative h-full w-full">
              <video
                ref={videoRef}
                src={activeMedia.src}
                poster={activeMedia.poster}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />

              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 sm:p-8">
                <div className="flex justify-between items-center">
                  <span className="rounded-full bg-black/60 px-3 py-1 font-mono text-xs text-white backdrop-blur-md">
                    2.39:1 CINEMATIC RATIO
                  </span>
                  <button
                    onClick={toggleVideoPlayback}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C1121F] text-white shadow-lg shadow-[#C1121F]/40 hover:scale-110 transition-transform"
                    data-cursor={isPlaying ? 'PAUSE' : 'PLAY'}
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
                  </button>
                </div>

                <div>
                  <div className="font-mono text-xs text-[#C1121F] uppercase font-bold tracking-widest">
                    {activeMedia.category}
                  </div>
                  <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                    {activeMedia.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-300 max-w-xl">
                    {activeMedia.description}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative h-full w-full">
              <img
                src={activeMedia.src}
                alt={activeMedia.title}
                className="h-full w-full object-contain sm:object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div className="font-mono text-xs text-[#C1121F] uppercase font-bold tracking-widest">
                  {activeMedia.category}
                </div>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                  {activeMedia.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-300 max-w-xl">
                  {activeMedia.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnail Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {mediaReel.map((media) => {
            const isSelected = activeMedia.id === media.id;
            return (
              <button
                key={media.id}
                onClick={() => handleSelectMedia(media)}
                className={`group relative aspect-video rounded-xl overflow-hidden border text-left transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? 'border-[#C1121F] shadow-[0_0_20px_rgba(193,18,31,0.5)] scale-[1.02]'
                    : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
                }`}
                data-cursor="SELECT"
              >
                <img
                  src={media.poster || media.src}
                  alt={media.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 flex flex-col justify-end">
                  <span className="font-mono text-[10px] text-[#C1121F] uppercase font-bold">
                    {media.type === 'video' ? '▶ VIDEO' : '◆ STILL'}
                  </span>
                  <span className="font-display text-xs sm:text-sm font-bold text-white truncate">
                    {media.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
