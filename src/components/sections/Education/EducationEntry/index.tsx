import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import type { EducationEntry } from '@/types';

interface EducationEntryProps {
  entry: EducationEntry;
  isLast: boolean;
}

const EducationEntryCard: React.FC<EducationEntryProps> = ({ entry, isLast }) => {
  const [logoFailed, setLogoFailed] = useState(false);
  const initials = entry.school
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const logoEl = (
    <div
      className={cn(
        'h-12 w-12 md:h-[3.25rem] md:w-[3.25rem] shrink-0',
        'rounded-[0.875rem] overflow-hidden',
        'bg-white',
        'shadow-[0_0_0_1px_rgba(255,255,255,0.09)]',
        'flex items-center justify-center',
        'transition-opacity duration-200 hover:opacity-75'
      )}
    >
      {entry.logo && !logoFailed ? (
        <img
          src={entry.logo}
          alt={entry.school}
          width={52}
          height={52}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain p-1.5"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <span className="text-[0.8125rem] font-bold text-[var(--color-text-tertiary)] tracking-tight select-none">
          {initials}
        </span>
      )}
    </div>
  );

  return (
    <article className={cn(!isLast && 'mb-3')}>
      <div
        className={cn(
          'glass-card',
          'flex gap-4 md:gap-6 rounded-[1.375rem] p-5 md:p-6',
          'hover:-translate-y-0.5'
        )}
      >
        <div className="shrink-0 mt-[2px]">
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${entry.school} website`}
          >
            {logoEl}
          </a>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3 mb-1">
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <h3 className="text-[1rem] md:text-[1.0625rem] font-semibold text-[var(--color-text-primary)] tracking-[-0.03em] leading-tight">
                {entry.field}
              </h3>
            </div>
            <p className="font-mono text-[0.625rem] tracking-[0.08em] uppercase text-[var(--color-text-tertiary)] shrink-0 mt-[3px]">
              {entry.period}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-1.5">
            <span className="text-[0.8125rem] font-medium text-[#4da6ff] transition-colors duration-150">
              {entry.school}
            </span>
            <span className="text-white/20 text-[0.625rem] leading-none">·</span>
            <span className="text-[0.75rem] text-[var(--color-text-tertiary)]">{entry.degree}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EducationEntryCard;
