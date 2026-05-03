import React, { CSSProperties, MouseEvent, ReactNode } from 'react';

import useHover from '@/hooks/useHover';

export const cardBaseClass: string =
  'relative overflow-hidden rounded-[1.5rem] transition-all duration-200';

export const cardSurfaceStyle: CSSProperties = {
  background: '#222228',
  border: '1px solid rgba(255,255,255,0.1)',
};

export const HoverCard: React.FC<{
  as?: 'div' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: MouseEvent) => void;
  className?: string;
  hoverClassName?: string;
  children: ReactNode;
}> = ({ as = 'div', href, target, rel, onClick, className, hoverClassName, children }) => {
  const [hovered, handlers] = useHover();

  const classes: string = [cardBaseClass, className, hovered ? hoverClassName : '']
    .filter(Boolean)
    .join(' ');

  const surfaceStyle: CSSProperties = {
    background: '#222228',
    border: '1px solid rgba(255,255,255,0.1)',
  };

  if (as === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={`flex no-underline ${classes}`}
        style={surfaceStyle}
        {...handlers}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      className={`cursor-pointer ${classes}`}
      style={surfaceStyle}
      onClick={onClick}
      {...handlers}
    >
      {children}
    </div>
  );
};

export const StatefulBlueCard: React.FC<{
  as?: 'a' | 'div';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: MouseEvent) => void;
  className?: string;
  children: ReactNode;
}> = ({ as = 'a', href, target, rel, onClick, className, children }) => {
  const [hovered, handlers] = useHover();

  const classes: string = [
    cardBaseClass,
    'flex no-underline',
    hovered ? 'text-white' : 'text-[#f0f0f5]',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const hoverStyle: CSSProperties = {
    background: hovered ? '#1a7fe8' : '#222228',
    border: hovered ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
  };

  if (as === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={classes}
        style={hoverStyle}
        {...handlers}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={`cursor-pointer ${classes}`} style={hoverStyle} onClick={onClick} {...handlers}>
      {children}
    </div>
  );
};
