import React from 'react';

import { SectionHeader } from '@/components/shared';
import { TIMELINE } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

import WorkExperienceEntry from './WorkExperienceEntry';

/**
 * WorkExperience — Apple-inspired professional timeline section.
 *
 * Replaces the old `Timeline` section. Keeps the same data source
 * (TIMELINE from @/data) and the same section anchor (`id="timeline"`)
 * so nav links don't break.
 */
const WorkExperience: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="timeline" ref={ref} className="mx-auto max-w-[1200px] px-6 md:px-8 py-24">
      <SectionHeader
        eyebrow="Experience"
        title={
          <>
            The Professional <span className="text-[#3b9eff]">Journey.</span>
          </>
        }
      />

      {/* Card stack — no vertical connector line at the section level,
          each entry draws its own internal connector segment */}
      <div className="flex flex-col gap-4">
        {TIMELINE.map((entry) => (
          <WorkExperienceEntry key={entry.role + entry.company} entry={entry} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
