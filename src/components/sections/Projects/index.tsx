import React from 'react';

import SectionHeader from '@/components/shared/SectionHeader';
import { PROJECTS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const spanClasses: Record<number, string> = {
  0: 'md:col-span-3',
  1: 'md:col-span-3',
  2: 'md:col-span-2',
  3: 'md:col-span-2',
  4: 'md:col-span-2',
  5: 'md:col-span-4',
  6: 'md:col-span-2',
};

const Projects: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="mx-auto max-w-[1100px] px-6 py-24">
      <SectionHeader eyebrow="Projects" title="Selected Works" />

      <div className="flex flex-col gap-3">
        {/* Featured hero */}
        {featured && (
          <div
            className="group bg-[var(--color-surface)] border border-white/10 rounded-[1.25rem] overflow-hidden cursor-pointer transition-all duration-200 hover:border-[rgba(59,158,255,0.4)] hover:shadow-[0_0_0_1px_rgba(59,158,255,0.15),0_20px_60px_rgba(0,0,0,0.5)]"
            onClick={() => {
              if (featured.demoUrl) window.open(featured.demoUrl, '_blank');
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] min-h-[320px]">
              {/* Screenshot */}
              <div className="relative min-h-[200px] overflow-hidden bg-[var(--color-surface-low)]">
                <img
                  src="/chord-shift-preview.png"
                  alt="Chord-Shift screenshot"
                  className="h-full w-full object-cover object-top opacity-90 transition-all duration-[400ms] group-hover:scale-[1.02] group-hover:opacity-100"
                />
                {/* fade overlay */}
                <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-transparent from-[60%] to-[var(--color-surface)]" />
                <div className="absolute inset-0 md:hidden bg-gradient-to-b from-transparent from-[60%] to-[var(--color-surface)]" />
                <span className="pill pill-accent absolute top-4 left-4 text-[0.625rem] tracking-[0.08em] uppercase font-semibold">
                  Featured
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col justify-center gap-4 p-8">
                <h3 className="font-[var(--font-display)] text-[1.75rem] font-bold text-[#f0f0f5] tracking-[-0.03em]">
                  {featured.title}
                </h3>
                <p className="text-[0.9375rem] leading-[1.7] text-[#8a8a96] tracking-[-0.005em]">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {featured.tags.map((t) => (
                    <span key={t} className="pill text-[0.6875rem]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {featured.demoUrl && (
                    <a
                      href={featured.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center px-[1.125rem] py-2 rounded-full bg-[#3b9eff] text-white text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors duration-150 hover:bg-[#1a7fe8]"
                    >
                      View Live →
                    </a>
                  )}
                  {featured.sourceUrl && (
                    <a
                      href={featured.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center px-[1.125rem] py-2 rounded-full border border-white/[0.12] text-[#8a8a96] text-[0.8125rem] font-medium tracking-[-0.01em] transition-all duration-150 hover:text-[#f0f0f5] hover:border-white/25"
                    >
                      Source ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rest of projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          {rest.map((project, i) => (
            <div
              key={project.title}
              className={cn(
                'group flex flex-col bg-[var(--color-surface)] border border-white/10 rounded-[1.25rem] overflow-hidden',
                'transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(41,151,255,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]',
                spanClasses[i] ?? 'md:col-span-3'
              )}
            >
              {/* Top accent */}
              <div className="h-0.5 bg-gradient-to-r from-[rgba(41,151,255,0.5)] to-[rgba(129,140,248,0.2)]" />

              <div className="flex flex-col flex-1 gap-3 p-6">
                <h3 className="font-[var(--font-display)] text-[1.0625rem] font-semibold text-[#f0f0f5] tracking-[-0.025em]">
                  {project.title}
                </h3>
                <p className="flex-1 text-sm leading-[1.7] text-[#8a8a96] tracking-[-0.005em]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="pill text-[0.6875rem]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-3.5 border-t border-white/[0.06] mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.8125rem] text-[#3b9eff] tracking-[-0.01em] transition-opacity duration-150 hover:opacity-70"
                    >
                      Demo →
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.8125rem] text-[#52525e] tracking-[-0.01em] transition-colors duration-150 hover:text-[#8a8a96]"
                    >
                      Source ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
