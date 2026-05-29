import React from 'react';

import SkillIcon from '@/components/sections/Skills/SkillIcon';
import { Pill } from '@/components/shared';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div
    className={cn('glass-card group flex flex-col overflow-hidden', 'hover:-translate-y-0.5')}
    style={{}}
  >
    {project.image && (
      <div className="relative h-44 overflow-hidden shrink-0">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover object-top opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
    )}

    <div className="flex flex-col flex-1 gap-3 p-6">
      <h3 className="font-[var(--font-display)] text-[1.0625rem] font-semibold text-[var(--color-cream)] tracking-[-0.025em] leading-tight">
        {project.title}
      </h3>

      <p className="flex-1 text-[0.8125rem] leading-[1.65] text-[var(--color-text-secondary)] tracking-[-0.005em]">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-3 py-1">
        {project.tags.map((t) => (
          <SkillIcon key={t} skillKey={t} size="sm" />
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.06]">
        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
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
  </div>
);

export default ProjectCard;
