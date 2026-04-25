import React from 'react';

import { PROJECTS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

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

      <div className="bento">
        {/* ── Featured hero cell ── */}
        {featured && (
          <article className="bento__cell bento__cell--hero">
            <div className="bento__hero-img">
              <img
                src={CHORD_SHIFT_IMG}
                alt="Chord-Shift app screenshot"
                className="bento__screenshot"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="bento__hero-gradient" />
              <span className="bento__badge">Featured</span>
            </div>

            <div className="bento__hero-body">
              <h3 className="bento__hero-title">{featured.title}</h3>
              <p className="bento__hero-desc">{featured.description}</p>
              <ul className="bento__tags" aria-label="Technologies">
                {featured.tags.map((t) => (
                  <li key={t} className="bento__tag">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="bento__links">
                {featured.demoUrl && (
                  <a
                    href={featured.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento__link bento__link--primary"
                  >
                    View Live →
                  </a>
                )}
                {featured.sourceUrl && (
                  <a
                    href={featured.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento__link"
                  >
                    Source ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        )}

        {/* ── Non-featured project cards ── */}
        {rest.map((project, i) => (
          <article
            key={project.title}
            className={`bento__cell bento__cell--card bento__cell--card-${i}`}
          >
            <div className="bento__card-accent" />
            <div className="bento__card-body">
              <h3 className="bento__card-title">{project.title}</h3>
              <p className="bento__card-desc">{project.description}</p>
              <ul className="bento__tags" aria-label="Technologies">
                {project.tags.map((t) => (
                  <li key={t} className="bento__tag">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="bento__links">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento__link bento__link--primary"
                  >
                    Demo →
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento__link"
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
