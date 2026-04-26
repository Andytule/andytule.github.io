import React from 'react';

import SectionHeader from '@/components/shared/SectionHeader';
import { SKILLS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

const Skills: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      style={{ margin: '0 auto', maxWidth: '1100px', padding: '6rem 1.5rem' }}
    >
      <SectionHeader eyebrow="Technical Arsenal" title="What I work with" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {SKILLS.map((skill, i) => (
          <div
            key={skill.category}
            style={{
              background: i % 2 === 0 ? '#16161a' : '#1c1c21',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              transition: 'background 0.15s ease',
            }}
            className="hover:bg-[#161616]"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.375rem', lineHeight: 1 }} aria-hidden="true">
                {skill.icon}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#f0f0f5',
                  letterSpacing: '-0.02em',
                }}
              >
                {skill.category}
              </h3>
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                lineHeight: 1.7,
                color: '#8a8a96',
                letterSpacing: '-0.005em',
              }}
            >
              {skill.items.join(' · ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
