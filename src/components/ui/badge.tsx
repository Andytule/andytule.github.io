import { cva, type VariantProps } from 'class-variance-authority';
import React, { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-widest transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-[var(--color-accent)]/30 bg-[rgba(41,151,255,0.1)] text-[var(--color-accent)]',
        secondary:
          'border-white/10 bg-[var(--color-surface-low)] text-[var(--color-text-secondary)]',
        outline: 'border-white/10 text-[var(--color-text-secondary)]',
        green:
          'border-[var(--color-green)]/20 bg-[rgba(69,227,255,0.10)] text-[var(--color-green)]',
        muted: 'border-[rgba(255,255,255,0.07)] bg-[var(--color-surface-low)] text-[#52525e]',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
