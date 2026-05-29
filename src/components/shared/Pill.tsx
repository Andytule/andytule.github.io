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
  accent: 'bg-[rgba(111,137,252,0.12)] text-[#6f89fc] border-[rgba(111,137,252,0.28)]',
  green: 'bg-[rgba(71,227,255,0.10)]  text-[#47e3ff] border-[rgba(71,227,255,0.28)]',
  purple: 'bg-[rgba(161,99,247,0.12)]  text-[#a163f7] border-[rgba(161,99,247,0.28)]',
};

const dotColors: Record<PillVariant, string> = {
  default: 'bg-[var(--color-text-tertiary)]',
  accent: 'bg-[#6f89fc]',
  green: 'bg-[#47e3ff]',
  purple: 'bg-[#a163f7]',
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
