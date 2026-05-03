import React, { CSSProperties } from 'react';

import { Pill } from '@/components/shared';
import { PROJECTS } from '@/data';
import { Project } from '@/types';

export const FeaturedCard: React.FC<{
  style?: CSSProperties;
}> = ({ style }) => {
  const project: Project = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];

  return (
    <div
      style={style}
      className="group relative cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#222228] transition-all duration-200 hover:border-transparent hover:bg-[#1a7fe8] hover:shadow-[0_0_0_1px_rgba(59,158,255,0.15),0_20px_60px_rgba(0,0,0,0.5)]"
      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
    >
      {/* Desktop layout */}
      {project.image && (
        <div className="hidden md:block absolute bottom-4 left-4 top-4 w-[42%] overflow-hidden rounded-[0.75rem] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)]">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover object-top"
          />
        </div>
      )}

      <div
        className="hidden md:flex absolute bottom-0 right-0 top-0 flex-col justify-center gap-2.5 p-6"
        style={{ left: project.image ? '44%' : '0' }}
      >
        <Pill
          variant="accent"
          className="uppercase tracking-[0.06em] text-[0.625rem]"
          hoverClassName="group-hover:bg-white/[0.18] group-hover:border-white/55 group-hover:text-white"
        >
          Featured Project
        </Pill>
        <p className="font-[var(--font-display)] text-[1.0625rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[#f0f0f5] transition-colors duration-200 group-hover:text-white">
          {project.title}
        </p>
        <p className="text-[0.8125rem] leading-[1.4] text-[#8a8a96] transition-colors duration-200 group-hover:text-white/75">
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
                hoverClassName="group-hover:bg-[rgba(109,40,217,0.6)] group-hover:border-[rgba(196,181,253,0.9)] group-hover:text-[#ede9fe]"
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
                hoverClassName="group-hover:bg-[rgba(22,163,74,0.55)] group-hover:border-[rgba(74,222,128,0.9)] group-hover:text-[#dcfce7]"
              >
                Live ↗
              </Pill>
            </a>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden flex-col h-full">
        {project.image && (
          <div className="w-full overflow-hidden rounded-t-[1.5rem] h-[48%] shrink-0 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover object-top"
            />
          </div>
        )}
        <div className="flex flex-col justify-center gap-3 px-6 py-5 flex-1">
          <Pill
            variant="accent"
            className="uppercase tracking-[0.06em] text-[0.625rem]"
            hoverClassName="group-hover:bg-white/[0.18] group-hover:border-white/55 group-hover:text-white"
          >
            Featured Project
          </Pill>
          <p className="font-[var(--font-display)] text-[1.0625rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[#f0f0f5] transition-colors duration-200 group-hover:text-white">
            {project.title}
          </p>
          <p className="text-[0.8125rem] leading-[1.4] text-[#8a8a96] transition-colors duration-200 group-hover:text-white/75">
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
                  hoverClassName="group-hover:bg-[rgba(109,40,217,0.6)] group-hover:border-[rgba(196,181,253,0.9)] group-hover:text-[#ede9fe]"
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
                  hoverClassName="group-hover:bg-[rgba(22,163,74,0.55)] group-hover:border-[rgba(74,222,128,0.9)] group-hover:text-[#dcfce7]"
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
