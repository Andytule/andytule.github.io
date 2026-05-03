import React from 'react';

import SkillIcon from '@/components/sections/Skills/SkillIcon';
import { Pill } from '@/components/shared';
import type { Project } from '@/types';

const FeaturedProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div
    className="group bg-[#222228] border border-white/10 rounded-[1.5rem] overflow-hidden cursor-pointer transition-all duration-200 hover:border-transparent hover:shadow-[0_0_0_1px_rgba(59,158,255,0.15),0_20px_60px_rgba(0,0,0,0.5)]"
    onClick={() => {
      if (project.demoUrl) window.open(project.demoUrl, '_blank');
    }}
  >
    <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] min-h-[300px]">
      <div className="relative min-h-[200px] overflow-hidden bg-[#1a1a20]">
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover object-top opacity-85 transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
          />
        )}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-transparent from-[60%] to-[#222228]" />
        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-transparent from-[60%] to-[#222228]" />
      </div>

      <div className="flex flex-col justify-center gap-4 p-8">
        <div className="flex flex-col gap-2">
          <Pill variant="accent" className="w-fit uppercase tracking-[0.06em] text-[0.625rem]">
            Featured Project
          </Pill>
          <h3 className="font-[var(--font-display)] text-[1.75rem] font-bold text-[#f0f0f5] tracking-[-0.03em] leading-tight">
            {project.title}
          </h3>
        </div>

        <p className="text-[0.875rem] leading-[1.7] text-[#8a8a96] tracking-[-0.005em]">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {project.tags.map((t) => (
            <SkillIcon key={t} skillKey={t} size="sm" />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
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
                hoverClassName="hover:bg-[rgba(109,40,217,0.6)] hover:border-[rgba(196,181,253,0.9)] hover:text-[#ede9fe]"
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
                hoverClassName="hover:bg-[rgba(22,163,74,0.55)] hover:border-[rgba(74,222,128,0.9)] hover:text-[#dcfce7]"
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

export default FeaturedProjectCard;
