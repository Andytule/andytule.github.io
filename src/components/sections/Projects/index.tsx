import React from 'react';

import SectionHeader from '@/components/shared/SectionHeader';
import { PROJECTS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const spanClasses: Record<number, string> = {
  0: 'md:col-span-3',
  1: 'md:col-span-3',
  2: 'md:col-span-2',
  3: 'md:col-span-2',
  4: 'md:col-span-2',
  5: 'md:col-span-4',
  6: 'md:col-span-2',
};

const cardStyle: React.CSSProperties = {
  background: 'var(--color-surface)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '1.25rem',
  overflow: 'hidden',
  transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
};

const Projects: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      style={{ margin: '0 auto', maxWidth: '1100px', padding: '6rem 1.5rem' }}
    >
      <SectionHeader eyebrow="Projects" title="Selected Works" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* Featured hero */}
        {featured && (
          <div
            style={{ ...cardStyle, cursor: 'pointer' }}
            className="group hover:border-[rgba(59,158,255,0.4)] hover:shadow-[0_0_0_1px_rgba(59,158,255,0.15),0_20px_60px_rgba(0,0,0,0.5)]"
            onClick={() => {
              if (featured.demoUrl) window.open(featured.demoUrl, '_blank');
            }}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr]"
              style={{ minHeight: '320px' }}
            >
              {/* Screenshot */}
              <div
                style={{
                  position: 'relative',
                  minHeight: '200px',
                  overflow: 'hidden',
                  background: 'var(--color-surface-low)',
                }}
              >
                <img
                  src="/chord-shift-preview.png"
                  alt="Chord-Shift screenshot"
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    opacity: 0.9,
                    transition: 'transform 0.4s ease, opacity 0.2s ease',
                  }}
                  className="group-hover:scale-[1.02] group-hover:opacity-100"
                />
                {/* fade overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, transparent 60%, var(--color-surface))',
                  }}
                  className="hidden md:block"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 60%, var(--color-surface))',
                  }}
                  className="md:hidden"
                />
                <span
                  className="pill pill-accent"
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    fontSize: '0.625rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  Featured
                </span>
              </div>

              {/* Body */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '1rem',
                  padding: '2rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#f0f0f5',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {featured.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                    color: '#8a8a96',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {featured.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {featured.tags.map((t) => (
                    <span key={t} className="pill" style={{ fontSize: '0.6875rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {featured.demoUrl && (
                    <a
                      href={featured.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.5rem 1.125rem',
                        borderRadius: '9999px',
                        background: '#3b9eff',
                        color: '#fff',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        letterSpacing: '-0.01em',
                        transition: 'background 0.15s ease',
                      }}
                      className="hover:bg-[#1a7fe8]"
                    >
                      View Live →
                    </a>
                  )}
                  {featured.sourceUrl && (
                    <a
                      href={featured.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.5rem 1.125rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: '#8a8a96',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        letterSpacing: '-0.01em',
                        transition: 'color 0.15s ease, border-color 0.15s ease',
                      }}
                      className="hover:text-[#f0f0f5] hover:border-[rgba(255,255,255,0.25)]"
                    >
                      Source ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rest of projects grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '0.75rem' }}
          className="md:grid-cols-6"
        >
          {rest.map((project, i) => (
            <div
              key={project.title}
              style={{ ...cardStyle, display: 'flex', flexDirection: 'column' }}
              className={cn(
                'group hover:-translate-y-0.5 hover:border-[rgba(41,151,255,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]',
                spanClasses[i] ?? 'md:col-span-3'
              )}
            >
              {/* Top accent */}
              <div
                style={{
                  height: '2px',
                  background:
                    'linear-gradient(to right, rgba(41,151,255,0.5), rgba(129,140,248,0.2))',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  gap: '0.75rem',
                  padding: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: '#f0f0f5',
                    letterSpacing: '-0.025em',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    flex: 1,
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: '#8a8a96',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {project.tags.map((t) => (
                    <span key={t} className="pill" style={{ fontSize: '0.6875rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    paddingTop: '0.875rem',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    marginTop: 'auto',
                  }}
                >
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.8125rem',
                        color: '#3b9eff',
                        letterSpacing: '-0.01em',
                        transition: 'opacity 0.15s ease',
                      }}
                      className="hover:opacity-70"
                    >
                      Demo →
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.8125rem',
                        color: '#52525e',
                        letterSpacing: '-0.01em',
                        transition: 'color 0.15s ease',
                      }}
                      className="hover:text-[#8a8a96]"
                    >
                      Source ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
