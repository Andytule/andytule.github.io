import React from 'react';

import { SectionHeader } from '@/components/shared';
import { PROJECTS } from '@/data/projects';

import FeaturedProjectCard from './FeaturedProjectCard';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-[1200px] px-6 md:px-8 py-24">
      <SectionHeader
        title={
          <>
            My <span className="text-[#3b9eff]">Projects.</span>
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
