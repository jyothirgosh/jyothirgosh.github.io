import type { Project } from '../data/portfolio';
import { X, ExternalLink, Code2, Cpu, Calendar } from 'lucide-react';


interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-white/15 bg-[#0B0B0C] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top glowing crimson border */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C1121F] to-transparent" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-[#C1121F] font-bold">
              CASE STUDY // {project.number}
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-xs text-zinc-400 uppercase">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all"
            data-cursor="CLOSE"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-8 max-h-[75vh] overflow-y-auto">
          {/* Main Visual or Video Showcase */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-black">
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                poster={project.image}
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6">
              <span className="font-mono text-xs text-[#C1121F] uppercase font-bold tracking-widest">
                VERIFIED DEPLOYMENT
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                ARCHITECTURAL OVERVIEW
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                {project.longDescription || project.description}
              </p>

              {/* Performance / Benchmark Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">{m.label}</div>
                      <div className="font-display text-base sm:text-lg font-bold text-white mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar Meta info */}
            <div className="flex flex-col gap-6 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Calendar size={14} className="text-[#C1121F]" />
                <span className="font-mono">YEAR: {project.year}</span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Cpu size={14} className="text-[#C1121F]" />
                  <span className="font-mono uppercase">TECHNOLOGIES</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#C1121F] py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-[#8B0000] transition-colors shadow-lg shadow-[#C1121F]/30"
                  >
                    <span>VISIT LIVE PLATFORM</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-white/10 transition-colors"
                  >
                    <span>VIEW REPOSITORY</span>
                    <Code2 size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
