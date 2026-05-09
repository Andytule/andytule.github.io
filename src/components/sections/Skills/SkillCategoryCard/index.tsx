import React from 'react';

import { type SkillKey } from '@/data/skillCatalog';
import { cn } from '@/lib/utils';

import SkillIcon from '../SkillIcon';

interface SkillCategoryCardProps {
  category: string;
  items: SkillKey[];
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, items }) => (
  <div className={cn('glass-card group relative flex flex-col gap-5 p-6 hover:-translate-y-0.5')}>
    <h3 className="text-center text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-secondary)]">
      {category}
    </h3>

    <div className="mx-auto flex flex-wrap justify-start gap-3 max-w-[252px]">
      {items.map((item) => (
        <SkillIcon key={item} skillKey={item} />
      ))}
    </div>
  </div>
);

export default SkillCategoryCard;
