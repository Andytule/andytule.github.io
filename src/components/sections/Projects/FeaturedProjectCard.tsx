import React from 'react';

import { Pill } from '@/components/shared';
import { SKILL_CATALOG } from '@/data/skillCatalog';
import type { Project } from '@/types';

/**
 * FeaturedProjectCard — full-width hero card for the featured project.
 */
const FeaturedProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div
    className="group bg-[var(--color-surface)] border border-white/10 rounded-[1.25rem] overflow-hidden cursor-pointer transition-all duration-200 hover:border-[rgba(59,158,255,0.4)] hover:shadow-[0_0_0_1px_rgba(59,158,255,0.15),0_20px_60px_rgba(0,0,0,0.5)]"
    onClick={() => {
      if (project.demoUrl) window.open(project.demoUrl, '_blank');
    }}
  >
    <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] min-h-[320px]">
      {/* Screenshot */}
      <div className="relative min-h-[200px] overflow-hidden bg-[var(--color-surface-low)]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover object-top opacity-90 transition-all duration-[400ms] group-hover:scale-[1.02] group-hover:opacity-100"
          />
        ) : (
          <div className="h-full w-full bg-[var(--color-surface-low)]" />
        )}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-transparent from-[60%] to-[var(--color-surface)]" />
        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-transparent from-[60%] to-[var(--color-surface)]" />
        <Pill
          variant="accent"
          className="absolute top-4 left-4 uppercase tracking-[0.08em] text-[0.625rem] font-semibold"
        >
          Featured
        </Pill>
      </div>

      {/* Body */}
      <div className="flex flex-col justify-center gap-4 p-8">
        <h3 className="font-[var(--font-display)] text-[1.75rem] font-bold text-[#f0f0f5] tracking-[-0.03em]">
          {project.title}
        </h3>
        <p className="text-[0.9375rem] leading-[1.7] text-[#8a8a96] tracking-[-0.005em]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Pill key={t} variant="default" className="text-[0.6875rem]">
              {SKILL_CATALOG[t].name}
            </Pill>
          ))}
        </div>
        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center px-[1.125rem] py-2 rounded-full bg-[#3b9eff] text-white text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors duration-150 hover:bg-[#1a7fe8]"
            >
              View Live →
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
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
);

export default FeaturedProjectCard;
