import React from 'react';

import { PROJECTS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

const Projects: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="portfolio" className="section" ref={ref}>
      <div className="section__header">
        <p className="section__label">Work</p>
        <h2 className="section__title">Selected Works</h2>
        <div className="divider" />
      </div>

      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <article key={project.title} className="projects__card">
            <div className="projects__image">
              <div className="projects__image-inner">
                {project.featured && <span className="projects__image-label">Safe for work</span>}
              </div>
            </div>

            <div className="projects__body">
              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__desc">{project.description}</p>

              <ul className="projects__tags" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className="projects__tag">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="projects__links">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link projects__link--demo"
                  >
                    View Demo →
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    Source ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
