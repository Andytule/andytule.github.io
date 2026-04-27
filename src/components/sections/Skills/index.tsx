import React from 'react';

import SectionHeader from '@/components/shared/SectionHeader';
import { SKILLS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

const Skills: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="mx-auto max-w-[1100px] px-6 py-24">
      <SectionHeader eyebrow="Technical Arsenal" title="What I work with" />

      <div
        className="grid gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.06]"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
      >
        {SKILLS.map((skill, i) => (
          <div
            key={skill.category}
            className={`flex flex-col gap-3 p-8 transition-colors duration-150 ${
              i % 2 === 0 ? 'bg-[var(--color-surface-low)]' : 'bg-[var(--color-surface)]'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-[1.375rem] leading-none" aria-hidden="true">
                {skill.icon}
              </span>
              <h3 className="font-[var(--font-display)] text-base font-semibold text-[#f0f0f5] tracking-[-0.02em]">
                {skill.category}
              </h3>
            </div>
            <p className="text-sm leading-[1.7] text-[#8a8a96] tracking-[-0.005em]">
              {skill.items.join(' · ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
