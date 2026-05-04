import React from 'react';

import { SectionHeader } from '@/components/shared';
import { EXPERIENCE } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

import WorkExperienceEntry from './WorkExperienceEntry';

const WorkExperience: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="timeline" ref={ref} className="mx-auto max-w-[1200px] px-6 md:px-8 py-24">
      <SectionHeader
        title={
          <>
            Work <span className="text-[#3b9eff]">Experience.</span>
          </>
        }
      />

      <div className="flex flex-col gap-4">
        {EXPERIENCE.map((entry) => (
          <WorkExperienceEntry key={entry.role + entry.company} entry={entry} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
