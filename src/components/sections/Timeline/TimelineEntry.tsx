import React from 'react';

import { Pill } from '@/components/shared';
import type { TimelineEntry as TimelineEntryType } from '@/types';

/**
 * TimelineEntry — single experience entry card with dot indicator.
 */
const TimelineEntry: React.FC<{ entry: TimelineEntryType }> = ({ entry }) => (
  <article className="relative">
    {/* Timeline dot */}
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
          <Pill variant="green" pulse className="shrink-0">
            Current
          </Pill>
        )}
      </div>

      <p className="text-[0.9375rem] leading-[1.7] text-[#8a8a96] mb-5 tracking-[-0.005em]">
        {entry.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {entry.tags.map((tag) => (
          <Pill key={tag} variant="default" className="text-[0.6875rem]">
            {tag}
          </Pill>
        ))}
      </div>
    </div>
  </article>
);

export default TimelineEntry;
