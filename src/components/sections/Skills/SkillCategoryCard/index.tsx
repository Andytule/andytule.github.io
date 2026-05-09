import React from 'react';

import { type SkillKey } from '@/data/skillCatalog';

import SkillIcon from '../SkillIcon';

interface SkillCategoryCardProps {
  category: string;
  items: SkillKey[];
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, items }) => (
  <div
    className={[
      'glass-card',
      'group relative flex flex-col gap-5',
      'p-6',
      'hover:-translate-y-0.5',
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
