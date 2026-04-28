import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

/**
 * Pill — shared badge/label component.
 *
 * Variants mirror the CSS classes in globals.css but are expressed as
 * a typed prop so every callsite is consistent and refactorable.
 *
 * Apple design notes:
 * - Backgrounds are very low opacity (8–16%) so the pill reads as a
 *   tinted label, not a filled button — restraint is the default state.
 * - Borders are slightly more visible than the background tint.
 * - Font is small-caps weight 500, letter-spaced for legibility.
 * - `pulse` dot is opt-in for "live/active" status indicators.
 */

export type PillVariant = 'default' | 'accent' | 'green' | 'purple';

interface PillProps {
  variant?: PillVariant;
  pulse?: boolean; // show animated dot (green variant only)
  dot?: boolean; // show static dot
  className?: string;
  children: ReactNode;
  /** Pass group-hover overrides when pill lives inside a hoverable card */
  hoverClassName?: string;
}

const variantClasses: Record<PillVariant, string> = {
  default:
    'bg-[var(--color-surface-high)] text-[var(--color-text-secondary)] border-[var(--color-border)]',
  accent: 'bg-[rgba(77,166,255,0.10)] text-[var(--color-accent)] border-[rgba(77,166,255,0.22)]',
  green: 'bg-[rgba(48,209,88,0.10)] text-[var(--color-green)] border-[rgba(48,209,88,0.22)]',
  purple: 'bg-[rgba(139,92,246,0.10)] text-[#a78bfa] border-[rgba(139,92,246,0.24)]',
};

const dotColors: Record<PillVariant, string> = {
  default: 'bg-[var(--color-text-tertiary)]',
  accent: 'bg-[var(--color-accent)]',
  green: 'bg-[var(--color-green)]',
  purple: 'bg-[#a78bfa]',
};

export const Pill: React.FC<PillProps> = ({
  variant = 'default',
  pulse = false,
  dot = false,
  className,
  hoverClassName,
  children,
}) => (
  <span
    className={cn(
      // base structure — w-fit ensures pill never stretches to fill its container
      'inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-[0.2rem]',
      // typography — Apple uses restrained small-caps style
      'text-[0.6875rem] font-medium tracking-[0.01em]',
      // transition for cards that flip colour on hover
      'transition-all duration-200',
      variantClasses[variant],
      hoverClassName,
      className
    )}
  >
    {(dot || pulse) && (
      <span
        className={cn(
          'inline-block h-[6px] w-[6px] rounded-full shrink-0',
          dotColors[variant],
          pulse && 'animate-pulse'
        )}
      />
    )}
    {children}
  </span>
);
