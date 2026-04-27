import React from 'react';

import SectionHeader from '@/components/shared/SectionHeader';
import { TIMELINE } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

const Timeline: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="timeline"
      ref={ref}
      style={{ margin: '0 auto', maxWidth: '1100px', padding: '6rem 1.5rem' }}
    >
      <SectionHeader
        eyebrow="Experience"
        title={
          <>
            The Professional <span style={{ color: '#3b9eff' }}>Journey.</span>
          </>
        }
      />

      {/* Timeline track */}
      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '0.5rem',
            height: 'calc(100% - 1rem)',
            width: '1px',
            background: 'linear-gradient(to bottom, #3b9eff, transparent)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {TIMELINE.map((entry) => (
            <article key={entry.role + entry.company} style={{ position: 'relative' }}>
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '1.375rem',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  transform: 'translateX(-4px)',
                  background: entry.isCurrent ? '#3b9eff' : '#2a2a2a',
                  border: `2px solid ${entry.isCurrent ? '#3b9eff' : '#3a3a3a'}`,
                  boxShadow: entry.isCurrent ? '0 0 0 4px rgba(41,151,255,0.15)' : 'none',
                }}
              />

              <div
                style={{
                  background: 'var(--color-surface-low)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '1.25rem',
                  padding: '1.75rem',
                  transition: 'border-color 0.2s ease',
                }}
                className="hover:border-[rgba(41,151,255,0.2)]"
              >
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#3b9eff',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {entry.period}
                    </p>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        color: '#f0f0f5',
                        letterSpacing: '-0.025em',
                        marginBottom: '0.125rem',
                      }}
                    >
                      {entry.role}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#8a8a96' }}>{entry.company}</p>
                  </div>

                  {entry.isCurrent && (
                    <span className="pill pill-green" style={{ gap: '0.375rem', flexShrink: 0 }}>
                      <span
                        style={{
                          display: 'inline-block',
                          height: '6px',
                          width: '6px',
                          borderRadius: '50%',
                          background: '#30d158',
                          animation: 'pulse 2s infinite',
                        }}
                      />
                      Current
                    </span>
                  )}
                </div>

                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                    color: '#8a8a96',
                    marginBottom: '1.25rem',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {entry.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {entry.tags.map((tag) => (
                    <span key={tag} className="pill" style={{ fontSize: '0.6875rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
