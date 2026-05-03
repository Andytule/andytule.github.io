import React, { RefObject } from 'react';

import SectionHeader from '@/components/shared/SectionHeader';
import { SKILL_GROUPS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';
import type { Skill } from '@/types';

import SkillCategoryCard from './SkillCategoryCard';

const Skills: React.FC = () => {
  const ref: RefObject<HTMLElement | null> = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="mx-auto max-w-[1200px] px-8 py-20">
      <SectionHeader eyebrow="Technical Skills" title="What I work with" />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((skillGroup: Skill) => (
          <SkillCategoryCard
            key={skillGroup.category}
            category={skillGroup.category}
            items={skillGroup.items}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
