import React from 'react';

import { Pill } from '@/components/shared';
import { SKILL_CATALOG } from '@/data/skillCatalog';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  colSpanClass: string;
}

/**
 * ProjectCard — grid card for non-featured projects.
 * Shows a screenshot strip at the top when project.image is present.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, colSpanClass }) => (
  <div
    className={cn(
      'group flex flex-col bg-[var(--color-surface)] border border-white/10 rounded-[1.25rem] overflow-hidden',
      'transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(41,151,255,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]',
      colSpanClass
    )}
  >
    {/* Image strip — shown when screenshot is available */}
    {project.image ? (
      <div className="relative h-36 overflow-hidden bg-[var(--color-surface-low)] shrink-0">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover object-top opacity-80 transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
        />
        {/* Fade into card body */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[50%] to-[var(--color-surface)]" />
      </div>
    ) : (
      <div className="h-0.5 bg-gradient-to-r from-[rgba(41,151,255,0.5)] to-[rgba(129,140,248,0.2)]" />
    )}

    <div className="flex flex-col flex-1 gap-3 p-6">
      <h3 className="font-[var(--font-display)] text-[1.0625rem] font-semibold text-[#f0f0f5] tracking-[-0.025em]">
        {project.title}
      </h3>
      <p className="flex-1 text-sm leading-[1.7] text-[#8a8a96] tracking-[-0.005em]">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <Pill key={t} variant="default" className="text-[0.6875rem]">
            {SKILL_CATALOG[t].name}
          </Pill>
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
);

export default ProjectCard;
