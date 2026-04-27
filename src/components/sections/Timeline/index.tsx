import React from 'react';

import SectionHeader from '@/components/shared/SectionHeader';
import { TIMELINE } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

const Timeline: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="timeline" ref={ref} className="mx-auto max-w-[1100px] px-6 py-24">
      <SectionHeader
        eyebrow="Experience"
        title={
          <>
            The Professional <span className="text-[#3b9eff]">Journey.</span>
          </>
        }
      />

      {/* Timeline track */}
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#3b9eff] to-transparent" />

        <div className="flex flex-col gap-8">
          {TIMELINE.map((entry) => (
            <article key={entry.role + entry.company} className="relative">
              {/* Dot */}
              <div
                className="absolute top-[1.375rem] -translate-x-1 rounded-full"
                style={{
                  left: '-2rem',
                  width: '10px',
                  height: '10px',
                  background: entry.isCurrent ? '#3b9eff' : '#2a2a2a',
                  border: `2px solid ${entry.isCurrent ? '#3b9eff' : '#3a3a3a'}`,
                  boxShadow: entry.isCurrent ? '0 0 0 4px rgba(41,151,255,0.15)' : 'none',
                }}
              />

              <div className="bg-[var(--color-surface-low)] border border-white/[0.07] rounded-[1.25rem] p-7 transition-colors duration-200 hover:border-[rgba(41,151,255,0.2)]">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <p className="text-[0.6875rem] font-semibold tracking-[0.08em] uppercase text-[#3b9eff] mb-1">
                      {entry.period}
                    </p>
                    <h3 className="font-[var(--font-display)] text-[1.125rem] font-semibold text-[#f0f0f5] tracking-[-0.025em] mb-0.5">
                      {entry.role}
                    </h3>
                    <p className="text-sm text-[#8a8a96]">{entry.company}</p>
                  </div>

                  {entry.isCurrent && (
                    <span className="pill pill-green flex-shrink-0" style={{ gap: '0.375rem' }}>
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full bg-[#30d158]"
                        style={{ animation: 'pulse 2s infinite' }}
                      />
                      Current
                    </span>
                  )}
                </div>

                <p className="text-[0.9375rem] leading-[1.7] text-[#8a8a96] mb-5 tracking-[-0.005em]">
                  {entry.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="pill text-[0.6875rem]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
