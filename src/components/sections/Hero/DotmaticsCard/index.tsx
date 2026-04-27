import React, { useState } from 'react';

import { cardBase } from '../HoverCard';

export const DotmaticsCard: React.FC<{
  style?: React.CSSProperties;
}> = ({ style }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://www.dotmatics.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...cardBase,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '0.625rem',
        padding: '1.5rem',
        textDecoration: 'none',
        color: hovered ? '#ffffff' : '#f0f0f5',
        background: hovered ? '#1a7fe8' : '#222228',
        borderColor: hovered ? 'transparent' : 'rgba(255,255,255,0.1)',
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p
        style={{
          fontSize: '0.625rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: hovered ? 'rgba(255,255,255,0.6)' : '#3b9eff',
          transition: 'color 0.2s ease',
        }}
      >
        Currently At
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img
          src="/dotmatics-logo.png"
          alt="Dotmatics"
          style={{
            height: '2.75rem',
            width: '2.75rem',
            borderRadius: '0.75rem',
            objectFit: 'cover',
            flexShrink: 0,
          }}
          onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
        />
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.125rem',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Software Engineer
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              marginTop: '0.125rem',
              color: hovered ? 'rgba(255,255,255,0.7)' : '#3b9eff',
              transition: 'color 0.2s ease',
            }}
          >
            Dotmatics
          </p>
        </div>
      </div>
      <p
        style={{
          fontSize: '0.75rem',
          color: hovered ? 'rgba(255,255,255,0.5)' : '#52525e',
          transition: 'color 0.2s ease',
        }}
      >
        Boston, MA · Oct 2024–Present
      </p>
    </a>
  );
};
