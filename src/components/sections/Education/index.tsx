import React from 'react';

import { SectionHeader } from '@/components/shared';
import { EDUCATION } from '@/data/education';

import EducationEntryCard from './EducationEntry';

const Education: React.FC = () => (
  <section id="education" className="mx-auto max-w-[1200px] px-6 md:px-8 py-24">
    <SectionHeader
      title={
        <>
          My <span className="text-[#3b9eff]">Education.</span>
        </>
      }
    />
    <div className="flex flex-col">
      {EDUCATION.map((entry, i) => (
        <EducationEntryCard key={entry.school} entry={entry} isLast={i === EDUCATION.length - 1} />
      ))}
    </div>
  </section>
);

export default Education;
