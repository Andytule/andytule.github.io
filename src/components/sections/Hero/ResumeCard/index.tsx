import { FileText } from 'lucide-react';
import React, { useState } from 'react';

import { cardBase } from '../HoverCard';

export const ResumeCard: React.FC<{
  style?: React.CSSProperties;
  mobile?: boolean;
}> = ({ style, mobile }) => {
  const [hovered, setHovered] = useState(false);

  const scrollToResume = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      href="#resume"
      onClick={scrollToResume}
      style={{
        ...cardBase,
        display: 'flex',
        flexDirection: mobile ? 'row' : 'column',
        alignItems: mobile ? 'center' : 'flex-start',
        justifyContent: 'center',
        gap: mobile ? '0.875rem' : '0.625rem',
        padding: mobile ? '1.25rem 1.5rem' : '1.5rem',
        textDecoration: 'none',
        color: hovered ? '#ffffff' : '#f0f0f5',
        background: hovered ? '#1a7fe8' : '#222228',
        borderColor: hovered ? 'transparent' : 'rgba(255,255,255,0.1)',
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <FileText
          size={mobile ? 28 : 40}
          style={{
            flexShrink: 0,
            color: hovered ? '#ffffff' : '#3b9eff',
            transition: 'color 0.2s ease',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: mobile ? '1.125rem' : '1.5rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}
        >
          Resume
        </p>
      </div>
    </a>
  );
};
