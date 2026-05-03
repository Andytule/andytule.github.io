import React from 'react';

import { type SkillKey } from '@/data/skillCatalog';

import SkillIcon from '../SkillIcon';

export interface SkillCategoryCardProps {
  category: string;
  items: SkillKey[];
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, items }) => (
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
    <h3 className="text-center text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-secondary)]">
      {category}
    </h3>

    <div className="mx-auto flex flex-wrap justify-start gap-3" style={{ maxWidth: '252px' }}>
      {items.map((item) => (
        <SkillIcon key={item} skillKey={item} />
      ))}
    </div>
  </div>
);

export default SkillCategoryCard;
