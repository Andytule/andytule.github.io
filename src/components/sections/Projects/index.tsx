import React from 'react';

import { PROJECTS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

// Chord-Shift screenshot — base64 imported via Vite asset handling
const CHORD_SHIFT_IMG = '/chord-shift-preview.png';

const Projects: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="section" ref={ref}>
      <div className="section__header">
        <p className="section__label">Work</p>
        <h2 className="section__title">Selected Works</h2>
        <div className="divider" />
      </div>

      {/* Featured project — Chord-Shift with large screenshot */}
      {featured && (
        <article className="projects__featured">
          <div className="projects__featured-image">
            <img
              src={CHORD_SHIFT_IMG}
              alt="Chord-Shift app screenshot — chord transposition tool"
              className="projects__featured-screenshot"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="projects__featured-overlay" />
            <span className="projects__featured-badge">Featured Project</span>
          </div>

          <div className="projects__featured-body">
            <h3 className="projects__featured-title">{featured.title}</h3>
            <p className="projects__featured-desc">{featured.description}</p>

            <ul className="projects__tags" aria-label="Technologies">
              {featured.tags.map((tag) => (
                <li key={tag} className="projects__tag">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="projects__links">
              {featured.demoUrl && (
                <a
                  href={featured.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link projects__link--demo"
                >
                  View Live →
                </a>
              )}
              {featured.sourceUrl && (
                <a
                  href={featured.sourceUrl}
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
      )}

      <div className="projects__grid">
        {rest.map((project) => (
          <article key={project.title} className="projects__card">
            <div className="projects__image">
              <div className="projects__image-inner" />
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
