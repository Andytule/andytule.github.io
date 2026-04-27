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
        className="text-[0.625rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-200"
        style={{ color: hovered ? 'rgba(255,255,255,0.6)' : '#3b9eff' }}
      >
        Currently At
      </p>
      <div className="flex items-center gap-3">
        <img
          src="/dotmatics-logo.png"
          alt="Dotmatics"
          className="h-11 w-11 rounded-[0.75rem] object-cover shrink-0"
          onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
        />
        <div>
          <p className="font-[var(--font-display)] text-[1.125rem] font-semibold leading-[1.2]">
            Software Engineer
          </p>
          <p
            className="text-sm mt-0.5 transition-colors duration-200"
            style={{ color: hovered ? 'rgba(255,255,255,0.7)' : '#3b9eff' }}
          >
            Dotmatics
          </p>
        </div>
      </div>
      <p
        className="text-xs transition-colors duration-200"
        style={{ color: hovered ? 'rgba(255,255,255,0.5)' : '#52525e' }}
      >
        Boston, MA · Oct 2024–Present
      </p>
    </a>
  );
};
