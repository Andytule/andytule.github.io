import React, { CSSProperties } from 'react';

import { Pill } from '@/components/shared';
import { PROJECTS } from '@/data/projects';
import { Project } from '@/types';

export const FeaturedCard: React.FC<{ style?: CSSProperties }> = ({ style }) => {
  const project: Project = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];

  return (
    <div
      className="glass-card group relative cursor-pointer overflow-hidden rounded-[1rem] hover:-translate-y-0.5 hover:border-[rgba(111,137,252,0.5)] hover:bg-[#1e2440] hover:shadow-[0_0_0_1px_rgba(111,137,252,0.15),0_20px_60px_rgba(0,0,0,0.55)]"
      style={style}
      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
    >
      {/* Desktop */}
      {project.image && (
        <div className="hidden md:block absolute bottom-4 left-4 top-4 w-[42%] overflow-hidden rounded-[0.625rem] shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)]">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover object-top"
            loading="eager"
            decoding="async"
          />
        </div>
      )}
      <div
        className="hidden md:flex absolute bottom-0 right-0 top-0 flex-col justify-center gap-2.5 p-6"
        style={{ left: project.image ? '44%' : '0' }}
      >
        <Pill variant="accent" className="uppercase tracking-[0.06em] text-[0.625rem]">
          Featured Project
        </Pill>
        <p className="font-[var(--font-display)] text-[1.0625rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--color-cream)] transition-colors duration-200 group-hover:text-white">
          {project.title}
        </p>
        <p className="text-[0.8125rem] leading-[1.4] text-[var(--color-text-secondary)] transition-colors duration-200 group-hover:text-white/75">
          {project.shortDescription ?? project.description.split('.')[0]}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-2">
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="no-underline"
            >
              <Pill
                variant="purple"
                className="uppercase tracking-[0.06em] text-[0.625rem] cursor-pointer"
                hoverClassName="hover:bg-[rgba(161,99,247,0.4)] hover:border-[rgba(161,99,247,0.9)] hover:text-white"
              >
                GitHub
              </Pill>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="no-underline"
            >
              <Pill
                variant="green"
                className="uppercase tracking-[0.06em] text-[0.625rem] cursor-pointer"
                hoverClassName="hover:bg-[rgba(71,227,255,0.2)] hover:border-[rgba(71,227,255,0.9)] hover:text-white"
              >
                Live ↗
              </Pill>
            </a>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col h-full">
        {project.image && (
          <div className="w-full overflow-hidden rounded-t-[1rem] h-[48%] shrink-0">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover object-top"
              loading="eager"
              decoding="async"
            />
          </div>
        )}
        <div className="flex flex-col justify-center gap-3 px-6 py-5 flex-1">
          <Pill variant="accent" className="uppercase tracking-[0.06em] text-[0.625rem]">
            Featured Project
          </Pill>
          <p className="font-[var(--font-display)] text-[1.0625rem] font-semibold text-[var(--color-cream)]">
            {project.title}
          </p>
          <p className="text-[0.8125rem] text-[var(--color-text-secondary)]">
            {project.shortDescription ?? project.description.split('.')[0]}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="no-underline"
              >
                <Pill
                  variant="purple"
                  className="uppercase tracking-[0.06em] text-[0.625rem] cursor-pointer"
                >
                  GitHub
                </Pill>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="no-underline"
              >
                <Pill
                  variant="green"
                  className="uppercase tracking-[0.06em] text-[0.625rem] cursor-pointer"
                >
                  Live ↗
                </Pill>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
