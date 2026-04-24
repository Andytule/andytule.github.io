import React from 'react';

import { TIMELINE } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

const Timeline: React.FC = () => {
  const ref: React.RefObject<HTMLElement | null> = useScrollReveal<HTMLElement>();

  return (
    <section id="timeline" className="section" ref={ref}>
      <div className="section__header">
        <p className="section__label">Experience</p>
        <h2 className="section__title">
          The Professional <span className="section__title--accent">Journey.</span>
        </h2>
        <div className="divider" />
      </div>

      <div className="timeline__track">
        {TIMELINE.map((entry) => (
          <article
            key={entry.role}
            className={`timeline__entry${entry.isCurrent ? ' timeline__entry--current' : ''}`}
          >
            <p className="timeline__period">{entry.period}</p>
            <h3 className="timeline__role">{entry.role}</h3>
            <p className="timeline__company">{entry.company}</p>
            <p className="timeline__desc">{entry.description}</p>
            <ul className="timeline__tags" aria-label="Technologies used">
              {entry.tags.map((tag) => (
                <li key={tag} className="timeline__tag">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
