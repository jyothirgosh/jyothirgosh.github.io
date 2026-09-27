import React, { useState } from 'react';
import { PORTFOLIO_DATA, type Project } from '../data/portfolio';

import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Play, Eye } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (proj: Project) => {
    soundManager.playWhoosh();
    setSelectedProject(proj);
  };

  return (
    <section
      id="work"
      className="relative w-full overflow-hidden bg-[#050505] py-28 px-6 sm:px-8 border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[#8B0000]/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-[#C1121F] font-bold">03 //</span>
              <span className="font-mono text-xs tracking-[0.25em] text-[#A0A0A0] uppercase">
                SHOWCASE ARCHIVE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight">
              SELECTED WORK
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#A0A0A0] leading-relaxed">
            Curated architectural and creative engineering case studies. Each project exemplifies
            hardened security fundamentals merged with cinematic digital aesthetics.
          </p>
        </div>

        {/* Large Cinematic Projects Stack */}
        <div className="flex flex-col gap-20 sm:gap-28">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center`}
              >
                {/* Visual Media Showcase Container */}
                <div
                  onClick={() => handleOpenProject(project)}
                  className={`lg:col-span-7 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0C] relative aspect-[16/10] shadow-2xl transition-all duration-500 group-hover:border-[#C1121F]/50 group-hover:shadow-[0_0_35px_rgba(193,18,31,0.25)] ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  data-cursor="VIEW"
                >
                  {/* Subtle corner badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 backdrop-blur-md">
                    <span className="font-mono text-xs font-bold text-[#C1121F]">
                      {project.number}
                    </span>
                    <span className="text-[11px] font-mono text-white/80 uppercase">
                      {project.year}
                    </span>
                  </div>

                  {project.video && (
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-1 rounded-full border border-[#C1121F]/40 bg-[#C1121F]/20 px-2.5 py-1 backdrop-blur-md text-[10px] font-mono text-white">
                      <Play size={10} className="fill-white" />
                      <span>CINEMATIC REEL</span>
                    </div>
                  )}

                  {/* Image / Video render with scale effect on hover */}
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="flex items-center gap-2 rounded-full bg-[#C1121F] px-5 py-2 text-xs font-bold text-white uppercase tracking-wider shadow-lg shadow-[#C1121F]/50">
                      <Eye size={14} />
                      <span>INSPECT CASE STUDY</span>
                    </span>
                  </div>
                </div>

                {/* Project Editorial Content */}
                <div
                  className={`lg:col-span-5 flex flex-col gap-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#C1121F] font-bold">
                      // {project.number}
                    </span>
                    <span className="font-mono text-xs tracking-widest text-[#A0A0A0] uppercase">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3
                      onClick={() => handleOpenProject(project)}
                      className="font-display text-3xl sm:text-5xl font-black text-white hover:text-[#C1121F] transition-colors cursor-pointer tracking-tight"
                      data-cursor="VIEW"
                    >
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-zinc-400 uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleOpenProject(project)}
                      className="group/btn inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 hover:border-[#C1121F] hover:bg-[#C1121F] hover:shadow-[0_0_20px_rgba(193,18,31,0.4)]"
                      data-cursor="OPEN"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight
                        size={14}
                        className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
