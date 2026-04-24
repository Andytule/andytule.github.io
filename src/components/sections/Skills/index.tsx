import React from 'react';

import { SKILLS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

const Skills: React.FC = () => {
  const ref: React.RefObject<HTMLElement | null> = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="section__header">
        <p className="section__label">Technical Arsenal</p>
        <h2 className="section__title">What I work with</h2>
        <div className="divider" />
      </div>

      <div className="skills__grid">
        {SKILLS.map((skill) => (
          <div key={skill.category} className="skills__card">
            <div className="skills__icon" aria-hidden="true">
              {skill.icon}
            </div>
            <h3 className="skills__category">{skill.category}</h3>
            <p className="skills__items">{skill.items.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
