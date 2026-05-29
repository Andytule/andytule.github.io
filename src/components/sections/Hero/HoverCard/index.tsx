import React, { CSSProperties, MouseEvent, ReactNode } from 'react';

import useHover from '@/hooks/useHover';

export const cardBaseClass: string = 'glass-card relative overflow-hidden rounded-[1rem]';

/** @deprecated Use the `glass-card` CSS class directly instead */
export const cardSurfaceStyle: CSSProperties = {};

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
  const classes = [cardBaseClass, className, hovered ? hoverClassName : '']
    .filter(Boolean)
    .join(' ');

  if (as === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={`flex no-underline ${classes}`}
        {...handlers}
      >
        {children}
      </a>
    );
  }
  return (
    <div className={`cursor-pointer ${classes}`} onClick={onClick} {...handlers}>
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

  const classes = [
    cardBaseClass,
    'flex no-underline',
    hovered ? 'text-white' : 'text-[var(--color-text-primary)]',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const hoverStyle: CSSProperties = hovered
    ? { background: '#2b3580', border: '1px solid rgba(111,137,252,0.5)' }
    : {};

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
