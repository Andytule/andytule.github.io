import React, { useState } from 'react';

export const cardBase: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '1.5rem',
  border: '1px solid rgba(255,255,255,0.1)',
  background: '#222228',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
};

export const blueHoverStyle: React.CSSProperties = {
  background: '#1a7fe8',
  borderColor: 'transparent',
};

export const HoverCard: React.FC<{
  as?: 'div' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ as = 'div', href, target, rel, onClick, style, hoverStyle, children }) => {
  const [hovered, setHovered] = useState(false);
  const combined: React.CSSProperties = {
    ...cardBase,
    ...style,
    ...(hovered ? hoverStyle : {}),
  };
  if (as === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        style={{ ...combined, textDecoration: 'none', display: 'flex' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </a>
    );
  }
  return (
    <div
      style={{ ...combined, cursor: 'pointer' }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
};

/** Blue-on-hover card that flips text color to white when hovered */
export const StatefulBlueCard: React.FC<{
  as?: 'a' | 'div';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ as = 'a', href, target, rel, onClick, style, children }) => {
  const [hovered, setHovered] = useState(false);

  const base: React.CSSProperties = {
    ...cardBase,
    display: 'flex',
    textDecoration: 'none',
    color: hovered ? '#ffffff' : '#f0f0f5',
    background: hovered ? '#1a7fe8' : '#222228',
    borderColor: hovered ? 'transparent' : 'rgba(255,255,255,0.1)',
    ...style,
  };

  const events = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  if (as === 'a') {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} style={base} {...events}>
        {children}
      </a>
    );
  }
  return (
    <div style={{ ...base, cursor: 'pointer' }} onClick={onClick} {...events}>
      {children}
    </div>
  );
};
