import React from 'react';

import useHover from '@/hooks/useHover';

/**
 * Shared Tailwind class string for every bento card surface.
 * Replaces the old `cardBase` CSSProperties object — all values are
 * identical but expressed as Tailwind utility classes so hover overrides
 * in child components compose correctly.
 */
export const cardBaseClass =
  'relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#222228] transition-all duration-200';

export const HoverCard: React.FC<{
  as?: 'div' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  hoverClassName?: string;
  children: React.ReactNode;
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

/**
 * Blue-on-hover card — flips background to #1a7fe8 and text to white.
 * Uses useHover so the icon color prop can be driven by JS state.
 */
export const StatefulBlueCard: React.FC<{
  as?: 'a' | 'div';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  children: React.ReactNode;
}> = ({ as = 'a', href, target, rel, onClick, className, children }) => {
  const [hovered, handlers] = useHover();

  const base = [
    cardBaseClass,
    'flex no-underline',
    hovered ? 'bg-[#1a7fe8] border-transparent text-white' : 'text-[#f0f0f5]',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (as === 'a') {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className={base} {...handlers}>
        {children}
      </a>
    );
  }

  return (
    <div className={`cursor-pointer ${base}`} onClick={onClick} {...handlers}>
      {children}
    </div>
  );
};
