/**
 * Skills/SkillCategoryCard/index.tsx
 *
 * One category card containing a header chip, divider, and icon grid.
 *
 * Icon grid layout:
 *   - `justify-start` so all rows — including the last wrapping row —
 *     are left-aligned within the card.
 *   - The card itself is `items-center` via the section grid, so the
 *     full block remains visually centered in its column.
 */
import React from 'react';

import SkillIcon from '../SkillIcon';

export interface SkillCategoryCardProps {
  icon: string;
  category: string;
  items: string[];
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ icon, category, items }) => (
  <div
    className={[
      'group relative flex flex-col gap-5',
      'rounded-[var(--radius-2xl)] border border-[var(--color-border)]',
      'bg-[var(--color-surface)] p-6',
      'transition-all duration-200 ease-[var(--ease-apple)]',
      'hover:-translate-y-0.5',
      'hover:border-[var(--color-border-strong)]',
      'hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.05)]',
    ].join(' ')}
  >
    {/* ── Category header ───────────────────────────────────────────── */}
    <div className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={[
          'flex h-8 w-8 shrink-0 items-center justify-center',
          'rounded-[0.5rem] bg-white/[0.06] text-[1rem] leading-none',
          'transition-colors duration-200 group-hover:bg-white/[0.10]',
        ].join(' ')}
      >
        {icon}
      </span>

      <h3 className="font-[var(--font-display)] text-[0.9375rem] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
        {category}
      </h3>
    </div>

    {/* ── Divider ───────────────────────────────────────────────────── */}
    <div className="h-px bg-white/[0.06]" />

    {/* ── Icon grid ─────────────────────────────────────────────────── */}
    {/*
     * Fixed max-width (6 icons × 32px + 5 gaps × 12px = 252px) centers
     * the icon block consistently in every card regardless of row count.
     * flex-wrap + justify-start means all rows — including the last orphan
     * row — align left within that fixed block.
     */}
    <div className="mx-auto" style={{ maxWidth: '252px' }}>
      <div className="flex flex-wrap justify-start gap-3">
        {items.map((item) => (
          <SkillIcon key={item} name={item} />
        ))}
      </div>
    </div>
  </div>
);

export default SkillCategoryCard;
