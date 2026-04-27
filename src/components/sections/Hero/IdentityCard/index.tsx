import React from 'react';

import { cardBase } from '../HoverCard';

export const IdentityCard: React.FC<{
  style?: React.CSSProperties;
  mobile?: boolean;
}> = ({ style, mobile }) => (
  <div
    style={{
      ...cardBase,
      display: 'flex',
      flexDirection: 'column',
      ...(mobile ? { minHeight: '300px' } : {}),
      ...style,
    }}
  >
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        padding: mobile ? '1.75rem' : '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: mobile ? '0.875rem' : '1rem',
      }}
    >
      <span className="pill pill-accent" style={{ width: 'fit-content' }}>
        Software Engineer
      </span>
      <h1
        style={{
          fontSize: mobile ? 'clamp(3rem, 8vw, 4.5rem)' : 'clamp(3rem, 4.5vw, 4.5rem)',
          fontWeight: 700,
          color: '#f0f0f5',
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
      >
        Andy <span style={{ color: '#3b9eff' }}>Le</span>
      </h1>
      <p style={{ fontSize: '0.9375rem', color: '#8a8a96' }}>Hamilton, ON</p>
      <span className="pill pill-green" style={{ width: 'fit-content', gap: '0.4rem' }}>
        <span
          style={{
            display: 'inline-block',
            height: '7px',
            width: '7px',
            borderRadius: '50%',
            background: '#30d158',
            ...(mobile ? { animation: 'pulse 2s infinite' } : {}),
          }}
        />
        Open to opportunities
      </span>
    </div>
    <div
      className="pointer-events-none absolute"
      style={
        mobile
          ? { left: '30%', right: 0, top: '15%', bottom: 0 }
          : { left: '28%', right: 0, top: '12%', bottom: 0 }
      }
    >
      <img
        src="/andy-avatar.png"
        alt=""
        aria-hidden="true"
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'contain',
          objectPosition: 'bottom',
          mixBlendMode: 'screen',
          opacity: 0.95,
        }}
      />
    </div>
  </div>
);
