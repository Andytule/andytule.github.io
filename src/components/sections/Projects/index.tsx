import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PROJECTS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const spanClasses: Record<number, string> = {
  0: 'md:col-span-3',
  1: 'md:col-span-3',
  2: 'md:col-span-2',
  3: 'md:col-span-2',
  4: 'md:col-span-2',
  5: 'md:col-span-4',
  6: 'md:col-span-2',
};

const Projects: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="mx-auto max-w-[1200px] px-6 py-16" ref={ref}>
      {/* Section header */}
      <div className="mb-10">
        <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-[#60a5fa]">
          Work
        </p>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2rem)] font-semibold tracking-tight text-[#f0f0f2]">
          Selected Works
        </h2>
        <div className="mt-2 h-0.5 w-10 rounded-full bg-[#3b82f6]" />
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
        {/* Featured hero cell */}
        {featured && (
          <Card className="group col-span-1 overflow-hidden border-white/7 bg-[#1c1c1f] transition-all duration-200 hover:border-[#60a5fa]/30 hover:shadow-[0_0_20px_rgba(33,150,243,0.1)] md:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] md:min-h-[340px]">
              {/* Screenshot */}
              <div className="relative min-h-[200px] overflow-hidden bg-[#242428]">
                <img
                  src="/chord-shift-preview.png"
                  alt="Chord-Shift app screenshot"
                  className="h-full w-full object-cover object-top opacity-90 transition-all duration-[400ms] group-hover:scale-[1.02] group-hover:opacity-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1c1c1f] md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#1c1c1f]" />
                <span className="absolute left-4 top-4 rounded-md border border-[#60a5fa]/35 bg-[#080809]/90 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-[#60a5fa] backdrop-blur-sm">
                  Featured
                </span>
              </div>

              {/* Body */}
              <CardContent className="flex flex-col justify-center gap-4 p-6">
                <div>
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-[#f0f0f2]">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9a9aaa]">
                    {featured.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {featured.tags.map((t) => (
                    <Badge key={t} variant="muted" className="text-[0.55rem]">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {featured.demoUrl && (
                    <Button variant="default" size="sm" asChild>
                      <a href={featured.demoUrl} target="_blank" rel="noopener noreferrer">
                        View Live →
                      </a>
                    </Button>
                  )}
                  {featured.sourceUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={featured.sourceUrl} target="_blank" rel="noopener noreferrer">
                        Source ↗
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Non-featured cards */}
        {rest.map((project, i) => (
          <Card
            key={project.title}
            className={cn(
              'group col-span-1 flex flex-col overflow-hidden border-white/7 bg-[#1c1c1f] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#60a5fa]/30 hover:shadow-[0_0_20px_rgba(33,150,243,0.1)]',
              spanClasses[i] ?? 'md:col-span-3'
            )}
          >
            {/* Accent bar */}
            <div className="h-[3px] bg-gradient-to-r from-[#60a5fa]/60 to-[#818cf8]/30" />
            <CardContent className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="font-display text-[1.05rem] font-bold tracking-tight text-[#f0f0f2]">
                {project.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-[#9a9aaa]">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <Badge key={t} variant="muted" className="text-[0.55rem]">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 border-t border-white/7 pt-3 mt-auto">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.65rem] font-semibold uppercase tracking-widest text-[#60a5fa] transition-opacity hover:opacity-75"
                  >
                    Demo →
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.65rem] font-semibold uppercase tracking-widest text-[#4a4a55] transition-colors hover:text-[#60a5fa]"
                  >
                    Source ↗
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
