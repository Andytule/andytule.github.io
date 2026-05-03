import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export type PillVariant = 'default' | 'accent' | 'green' | 'purple';

interface PillProps {
  variant?: PillVariant;
  pulse?: boolean;
  dot?: boolean;
  className?: string;
  children: ReactNode;
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
      'inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-[0.2rem]',
      'text-[0.75rem] font-medium tracking-[0.01em]',
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
