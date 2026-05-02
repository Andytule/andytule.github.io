import React, { useState } from 'react';

import SkillIcon from '@/components/sections/Skills/SkillIcon';
import { Pill } from '@/components/shared';
import type { TimelineEntry } from '@/types';

interface WorkExperienceEntryProps {
  entry: TimelineEntry;
}

/**
 * WorkExperienceEntry
 *
 * Apple design language:
 * - Clean two-column layout: logo tile | content
 * - Logo in a rounded square — clickable link to company website
 * - Role as the typographic anchor at the top — display weight, tight tracking
 * - Company in accent blue, location as a tertiary label
 * - Two-sentence description — what the company does + what you built
 * - Tech stack: raw SkillIcon row — icons at rest dim, brighten on hover
 * - "Current" green pill with pulse dot (preserved)
 * - Period moved to bottom-right of card for cleaner hierarchy
 * - Hover: 1px blue border bloom + layered depth shadow
 */
const WorkExperienceEntry: React.FC<WorkExperienceEntryProps> = ({ entry }) => {
  const [logoFailed, setLogoFailed] = useState(false);
  const [companyName, location] = entry.company.split(' · ');
  const initials = companyName.slice(0, 2).toUpperCase();

  const logoEl = (
    <div
      className={[
        'h-12 w-12 md:h-[3.25rem] md:w-[3.25rem]',
        'rounded-[0.875rem] overflow-hidden',
        'bg-[var(--color-surface)]',
        'shadow-[0_0_0_1px_rgba(255,255,255,0.09)]',
        'flex items-center justify-center',
        entry.url ? 'transition-opacity duration-200 hover:opacity-75' : '',
      ].join(' ')}
    >
      {entry.logo && !logoFailed ? (
        <img
          src={entry.logo}
          alt={companyName}
          className="h-full w-full object-cover"
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
    <article className="group/entry">
      <div
        className={[
          'flex gap-4 md:gap-6 rounded-[1.375rem] border p-5 md:p-6',
          'bg-[var(--color-surface-low)] border-white/[0.06]',
          'transition-all duration-300 ease-[var(--ease-apple)]',
          'hover:border-[rgba(77,166,255,0.20)]',
          'hover:shadow-[0_2px_24px_rgba(0,0,0,0.32),0_0_0_1px_rgba(77,166,255,0.07)]',
          'hover:-translate-y-[1px]',
        ].join(' ')}
      >
        {/* ── Logo tile ───────────────────────────────────────────────── */}
        <div className="shrink-0 mt-[2px]">
          {entry.url ? (
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${companyName} website`}
            >
              {logoEl}
            </a>
          ) : (
            logoEl
          )}
        </div>

        {/* ── Content ─────────────────────────────────────────────────── */}
        <div className="min-w-0 flex-1 space-y-3">
          {/* Row 1: role + current pill */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[1rem] md:text-[1.0625rem] font-semibold text-[var(--color-text-primary)] tracking-[-0.03em] leading-tight">
              {entry.role}
            </h3>
            {entry.isCurrent && (
              <Pill variant="green" pulse className="text-[0.625rem] shrink-0">
                Current
              </Pill>
            )}
          </div>

          {/* Row 2: Company · Location */}
          <div className="flex flex-wrap items-center gap-x-1.5 -mt-1">
            <span className="text-[0.8125rem] font-medium text-[var(--color-accent)]">
              {companyName}
            </span>
            {location && (
              <>
                <span className="text-white/20 text-[0.625rem] leading-none">·</span>
                <span className="text-[0.75rem] text-[var(--color-text-tertiary)]">{location}</span>
              </>
            )}
          </div>

          {/* Row 3: description */}
          <p className="text-[0.8125rem] md:text-[0.875rem] leading-[1.6] text-[var(--color-text-secondary)] tracking-[-0.005em]">
            {entry.description}
          </p>

          {/* Row 4: tech icon strip + period on the same line */}
          {entry.tags.length > 0 && (
            <div className="flex items-center justify-between gap-3 pt-3">
              <div className="flex flex-wrap items-center gap-3">
                {entry.tags.map((tag) => (
                  <SkillIcon key={tag} skillKey={tag} />
                ))}
              </div>
              <p className="font-mono text-[0.625rem] tracking-[0.08em] uppercase text-[var(--color-text-tertiary)] shrink-0">
                {entry.period}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default WorkExperienceEntry;
