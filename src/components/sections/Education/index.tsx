import React, { RefObject } from 'react';

import { SectionHeader } from '@/components/shared';
import { EDUCATION } from '@/data/education';
import useScrollReveal from '@/hooks/useScrollReveal';

import EducationEntryCard from './EducationEntry';

const Education: React.FC = () => {
  const ref: RefObject<HTMLElement | null> = useScrollReveal<HTMLElement>();

  return (
    <section id="education" ref={ref} className="mx-auto max-w-[1200px] px-6 md:px-8 py-24">
      <SectionHeader
        title={
          <>
            My <span className="text-[#3b9eff]">Education.</span>
          </>
        }
      />

      <div className="flex flex-col">
        {EDUCATION.map((entry, i) => (
          <EducationEntryCard
            key={entry.school}
            entry={entry}
            isLast={i === EDUCATION.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
