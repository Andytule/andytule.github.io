/**
 * Skills/SkillIcon/index.tsx
 *
 * Renders a single skill as a clickable icon tile. Resolves the SkillKey
 * into its full SkillDef from SKILL_CATALOG — no props other than the key.
 *
 *   - Full opacity at rest; glows + lifts on hover
 *   - Pure-CSS tooltip (zero JS state) above the icon on hover
 *   - Opens the skill's official website in a new tab on click
 *   - Falls back to a two-letter abbreviation if the CDN image fails
 */
import React, { useCallback, useState } from 'react';

import { SKILL_CATALOG, type SkillKey } from '@/data/skillCatalog';
import { cn } from '@/lib/utils';

interface SkillIconProps {
  skillKey: SkillKey;
  className?: string;
}

function resolveIconSrc(skillKey: SkillKey): string | null {
  const { icon } = SKILL_CATALOG[skillKey];
  if (icon.cdn === 'inline') return null;
  if (icon.cdn === 'devicon') {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon.slug}/${icon.slug}-${icon.variant}.svg`;
  }
  // simpleicons
  return `https://cdn.simpleicons.org/${icon.slug}/${icon.color}`;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skillKey, className }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const handleError = useCallback(() => setImgFailed(true), []);

  const skill = SKILL_CATALOG[skillKey];
  const iconSrc = resolveIconSrc(skillKey);
  const inlineSvg = skill.icon.cdn === 'inline' ? skill.icon.svg : null;

  return (
    <a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${skill.name} — opens official website`}
      className={cn('group/icon relative flex flex-col items-center', className)}
    >
      {/* ── Tooltip ──────────────────────────────────────────────────── */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2',
          'whitespace-nowrap rounded-[0.5rem]',
          'border border-white/[0.10] bg-[var(--color-surface-container)]',
          'px-2.5 py-1',
          'text-[0.6875rem] font-medium tracking-[-0.01em] text-[var(--color-text-primary)]',
          'shadow-[0_4px_16px_rgba(0,0,0,0.4)]',
          'opacity-0 translate-y-1 transition-all duration-150 ease-out',
          'group-hover/icon:opacity-100 group-hover/icon:translate-y-0'
        )}
      >
        {skill.name}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[var(--color-surface-container)]"
        />
      </span>

      {/* ── Icon ─────────────────────────────────────────────────────── */}
      {inlineSvg ? (
        <span
          className={cn(
            'block w-8 h-8 transition-all duration-200 ease-[var(--ease-apple)]',
            'group-hover/icon:-translate-y-0.5',
            'group-hover/icon:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
          )}
          dangerouslySetInnerHTML={{ __html: inlineSvg }}
        />
      ) : imgFailed ? (
        <span className="text-[0.625rem] font-bold text-white/70 tracking-tight select-none w-8 text-center">
          {skill.name.slice(0, 2).toUpperCase()}
        </span>
      ) : (
        <img
          src={iconSrc!}
          alt=""
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
          onError={handleError}
          className={cn(
            'opacity-100 transition-all duration-200 ease-[var(--ease-apple)]',
            'group-hover/icon:-translate-y-0.5',
            'group-hover/icon:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]',
            'group-hover/icon:brightness-110'
          )}
        />
      )}
    </a>
  );
};

export default SkillIcon;
