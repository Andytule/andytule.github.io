import React from 'react';

import { SectionHeader } from '@/components/shared';
import { PROJECTS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

import FeaturedProjectCard from './FeaturedProjectCard';
import ProjectCard from './ProjectCard';

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
    <section id="projects" ref={ref} className="mx-auto max-w-[1200px] px-8 py-24">
      <SectionHeader eyebrow="Projects" title="Selected Works" />

      <div className="flex flex-col gap-3">
        {featured && <FeaturedProjectCard project={featured} />}

        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              colSpanClass={spanClasses[i] ?? 'md:col-span-3'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
