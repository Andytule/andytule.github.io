/**
 * Skills/SkillIcon/index.tsx
 *
 * Renders a single technology as a bare icon that:
 *   - Shows the icon at full opacity by default
 *   - Glows + lifts slightly on hover
 *   - Displays the skill name in a tooltip above on hover
 *   - Opens the technology's official website on click (new tab)
 *
 * Design notes:
 *   - No background box — icon floats freely, creating a lighter feel.
 *   - Uses `group/icon` (named Tailwind group) scoped to the <a> tag so
 *     only the hovered icon shows its tooltip, not the whole card.
 *   - Falls back to a two-letter abbreviation if the CDN icon fails.
 */
import React, { useCallback, useState } from 'react';

import { SKILL_ICON_META } from '@/data/skillIconMeta';
import { cn } from '@/lib/utils';

interface SkillIconProps {
  name: string;
  className?: string;
}

function getIconSrc(meta: NonNullable<(typeof SKILL_ICON_META)[string]>): string | null {
  if (meta.cdn === 'inline') return null;
  if (meta.cdn === 'devicon') {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${meta.slug}/${meta.slug}-${meta.variant}.svg`;
  }
  return `https://cdn.simpleicons.org/${meta.slug}/${meta.color}`;
}

const SkillIcon: React.FC<SkillIconProps> = ({ name, className }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const handleError = useCallback(() => setImgFailed(true), []);
  const meta = SKILL_ICON_META[name];

  if (!meta) {
    return (
      <span
        title={name}
        className={cn(
          'rounded-full border border-white/[0.08] bg-white/[0.04]',
          'px-2.5 py-1 text-[0.75rem] font-medium tracking-[-0.01em] text-[var(--color-text-secondary)]',
          className
        )}
      >
        {name}
      </span>
    );
  }

  const iconSrc = meta.cdn !== 'inline' ? getIconSrc(meta) : null;
  const inlineSvg = meta.cdn === 'inline' ? meta.svg : null;

  return (
    <a
      href={meta.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} — opens official website`}
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
        {name}
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
          {name.slice(0, 2).toUpperCase()}
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
