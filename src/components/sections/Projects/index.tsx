import React from 'react';

import { SectionHeader } from '@/components/shared';
import { PROJECTS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

import FeaturedProjectCard from './FeaturedProjectCard';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="mx-auto max-w-[1200px] px-6 md:px-8 py-24">
      <SectionHeader
        eyebrow="Projects"
        title={
          <>
            Personal <span className="text-[#3b9eff]">Builds.</span>
          </>
        }
      />

      <div className="flex flex-col gap-3">
        {featured && <FeaturedProjectCard project={featured} />}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {rest.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
