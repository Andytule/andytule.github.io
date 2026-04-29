/**
 * Skills/index.tsx
 *
 * Displays technical skills grouped by category.
 * Each category renders as a card containing an icon grid. Hovering an
 * icon shows a tooltip with the skill name; clicking opens the official
 * website in a new tab.
 *
 * Design (Apple-calibrated):
 *   - Category cards share the glass-card surface treatment defined in
 *     globals.css — same resting bg/border/transition as every other section.
 *   - Category emoji icon sits in a tight chip above the heading, matching
 *     the restrained icon treatment used across the bento grid.
 *   - Icon grid uses flex-wrap so rows fill naturally without orphan gaps.
 *   - Section uses useScrollReveal for the scroll-in animation consistent
 *     with every other section.
 */
import React, { RefObject } from 'react';

import SectionHeader from '@/components/shared/SectionHeader';
import { SKILLS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

import SkillIcon from './SkillIcon';

const Skills: React.FC = () => {
  const ref: RefObject<HTMLElement | null> = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="mx-auto max-w-[1100px] px-6 py-24">
      <SectionHeader eyebrow="Technical Skills" title="What I work with" />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill) => (
          <SkillCategoryCard
            key={skill.category}
            icon={skill.icon}
            category={skill.category}
            items={skill.items}
          />
        ))}
      </div>
    </section>
  );
};

// ─── SkillCategoryCard ────────────────────────────────────────────────────────

interface SkillCategoryCardProps {
  icon: string;
  category: string;
  items: string[];
}

/**
 * One category card. Extracted as a named component (not an inline
 * anonymous function) so React's reconciler can diff it correctly and
 * ESLint's react/display-name rule stays satisfied.
 */
const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ icon, category, items }) => (
  <div
    className={[
      // Base surface — matches glass-card token but with explicit values
      // so hover override specificity is unambiguous
      'group relative flex flex-col gap-5',
      'rounded-[var(--radius-2xl)] border border-[var(--color-border)]',
      'bg-[var(--color-surface)] p-6',
      // Hover lift — mirrors ProjectCard
      'transition-all duration-200 ease-[var(--ease-apple)]',
      'hover:-translate-y-0.5',
      'hover:border-[var(--color-border-strong)]',
      'hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.05)]',
    ].join(' ')}
  >
    {/* ── Category header ─────────────────────────────────────────── */}
    <div className="flex items-center gap-2.5">
      {/* Emoji icon chip */}
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

    {/* ── Divider ─────────────────────────────────────────────────── */}
    <div className="h-px bg-white/[0.06]" />

    {/* ── Icon grid ───────────────────────────────────────────────── */}
    {/*
     * flex-wrap + fixed-size tiles gives a natural fill without needing
     * CSS grid track constraints. gap-2.5 keeps tiles dense but not cramped
     * — each tile is 44×44px so ~6 fit comfortably per row.
     */}
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item) => (
        <SkillIcon key={item} name={item} />
      ))}
    </div>
  </div>
);

export default Skills;
