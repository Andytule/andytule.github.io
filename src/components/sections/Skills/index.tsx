import React, { RefObject } from 'react';

import SectionHeader from '@/components/shared/SectionHeader';
import { SKILLS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

const Skills: React.FC = () => {
  const ref: RefObject<HTMLElement | null> = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="mx-auto max-w-[1100px] px-6 py-24">
      <SectionHeader eyebrow="Technical Arsenal" title="What I work with" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SKILLS.map((skill) => (
          <div
            key={skill.category}
            className="group relative flex flex-col gap-4 rounded-[1.25rem] border border-white/[0.07] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-[var(--color-surface-low)]"
          >
            {/* Category header */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.5rem] bg-white/[0.06] text-[1rem] leading-none transition-colors duration-300 group-hover:bg-white/[0.1]">
                {skill.icon}
              </div>
              <h3 className="font-[var(--font-display)] text-[0.9375rem] font-semibold tracking-[-0.02em] text-[#f0f0f5]">
                {skill.category}
              </h3>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.06]" />

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[0.75rem] font-medium tracking-[-0.01em] text-[#8a8a96] transition-colors duration-200 group-hover:border-white/[0.12] group-hover:text-[#a0a0aa]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
