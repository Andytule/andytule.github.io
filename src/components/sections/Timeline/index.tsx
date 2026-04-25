import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { TIMELINE } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const Timeline: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="timeline" className="mx-auto max-w-[1200px] px-6 py-16" ref={ref}>
      {/* Section header */}
      <div className="mb-10">
        <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-[#60a5fa]">
          Experience
        </p>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2rem)] font-semibold tracking-tight text-[#f0f0f2]">
          The Professional <span className="text-[#60a5fa]">Journey.</span>
        </h2>
        <div className="mt-2 h-0.5 w-10 rounded-full bg-[#3b82f6]" />
      </div>

      {/* Timeline track */}
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#3b82f6] to-transparent" />

        <div className="flex flex-col gap-8">
          {TIMELINE.map((entry) => (
            <article key={entry.role + entry.company} className="relative">
              {/* Timeline dot */}
              <div
                className={cn(
                  'absolute -left-8 top-2 flex h-[11px] w-[11px] -translate-x-[5px] items-center justify-center rounded-full border-2 border-[#0e0e10]',
                  entry.isCurrent
                    ? 'bg-[#60a5fa] shadow-[0_0_0_4px_rgba(96,165,250,0.2)]'
                    : 'bg-[#3b82f6]'
                )}
              />

              <Card className="border-white/7 bg-[#1c1c1f] transition-all duration-200 hover:border-[#60a5fa]/20">
                <CardContent className="p-5">
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="mb-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-[#60a5fa]">
                        {entry.period}
                      </p>
                      <h3 className="font-display text-lg font-semibold text-[#f0f0f2]">
                        {entry.role}
                      </h3>
                      <p className="text-sm text-[#4a4a55]">{entry.company}</p>
                    </div>
                    {entry.isCurrent && (
                      <Badge variant="green" className="gap-1.5 shrink-0">
                        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#4ade80]" />
                        Current
                      </Badge>
                    )}
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-[#9a9aaa]">{entry.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <Badge key={tag} variant="muted" className="text-[0.55rem]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
