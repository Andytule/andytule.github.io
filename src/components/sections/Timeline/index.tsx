import React from 'react';

import { SectionHeader } from '@/components/shared';
import { TIMELINE } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

import TimelineEntry from './TimelineEntry';

const Timeline: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="timeline" ref={ref} className="mx-auto max-w-[1200px] px-8 py-24">
      <SectionHeader
        eyebrow="Experience"
        title={
          <>
            The Professional <span className="text-[#3b9eff]">Journey.</span>
          </>
        }
      />

      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#3b9eff] to-transparent" />

        <div className="flex flex-col gap-8">
          {TIMELINE.map((entry) => (
            <TimelineEntry key={entry.role + entry.company} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
