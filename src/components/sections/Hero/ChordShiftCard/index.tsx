import React, { useState } from 'react';

import { cardBase } from '../HoverCard';

const getPillStyle = (
  hovered: boolean,
  variant: 'featured' | 'github' | 'live'
): React.CSSProperties => {
  if (variant === 'featured') {
    return hovered
      ? {
          background: 'rgba(255,255,255,0.18)',
          color: '#ffffff',
          borderColor: 'rgba(255,255,255,0.55)',
        }
      : {
          background: 'rgba(59,158,255,0.14)',
          color: '#3b9eff',
          borderColor: 'rgba(59,158,255,0.3)',
        };
  }
  if (variant === 'github') {
    return hovered
      ? {
          background: 'rgba(109,40,217,0.6)',
          color: '#ede9fe',
          borderColor: 'rgba(196,181,253,0.9)',
        }
      : {
          background: 'rgba(139,92,246,0.14)',
          color: '#a78bfa',
          borderColor: 'rgba(139,92,246,0.3)',
        };
  }
  return hovered
    ? { background: 'rgba(22,163,74,0.55)', color: '#dcfce7', borderColor: 'rgba(74,222,128,0.9)' }
    : { background: 'rgba(48,209,88,0.12)', color: '#30d158', borderColor: 'rgba(48,209,88,0.25)' };
};

export const ChordShiftCard: React.FC<{
  style?: React.CSSProperties;
}> = ({ style }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...cardBase,
        background: hovered ? '#1a7fe8' : '#222228',
        borderColor: hovered ? 'transparent' : 'rgba(255,255,255,0.1)',
        boxShadow: hovered
          ? '0 0 0 1px rgba(59,158,255,0.15), 0 20px 60px rgba(0,0,0,0.5)'
          : 'none',
        cursor: 'pointer',
        transition: 'background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        ...style,
      }}
      onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* App preview thumbnail */}
      <div
        style={{
          position: 'absolute',
          left: '1rem',
          top: '1rem',
          bottom: '1rem',
          width: '42%',
          overflow: 'hidden',
          borderRadius: '0.75rem',
          boxShadow: hovered
            ? '0 0 0 1px rgba(255,255,255,0.2)'
            : '0 0 0 1px rgba(255,255,255,0.06)',
          transition: 'transform 0.3s ease, box-shadow 0.2s ease',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
        }}
      >
        <img
          src="/chord-shift-preview.png"
          alt="Chord-Shift"
          style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>

      {/* Content panel */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: '44%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '1.25rem',
        }}
      >
        {/* "Featured" badge — flips to frosted white on hover */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            width: 'fit-content',
            padding: '0.2rem 0.625rem',
            borderRadius: '9999px',
            fontSize: '0.5625rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            border: '1px solid',
            transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
            ...getPillStyle(hovered, 'featured'),
          }}
        >
          Featured
        </span>

        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            fontWeight: 600,
            color: hovered ? '#ffffff' : '#f0f0f5',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            transition: 'color 0.2s ease',
          }}
        >
          Chord-Shift
        </p>

        <p
          style={{
            fontSize: '0.6875rem',
            color: hovered ? 'rgba(255,255,255,0.75)' : '#8a8a96',
            lineHeight: 1.4,
            transition: 'color 0.2s ease',
          }}
        >
          Full-stack chord transposition
        </p>

        {/* Action pills */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/Andytule/chord-shift"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.2rem 0.625rem',
              borderRadius: '9999px',
              fontSize: '0.5625rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid',
              transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
              ...getPillStyle(hovered, 'github'),
            }}
          >
            GitHub
          </a>
          <a
            href="https://andytule.github.io/chord-shift/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.2rem 0.625rem',
              borderRadius: '9999px',
              fontSize: '0.5625rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid',
              transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
              ...getPillStyle(hovered, 'live'),
            }}
          >
            Live ↗
          </a>
        </div>
      </div>
    </div>
  );
};
