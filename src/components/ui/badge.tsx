import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-widest transition-colors',
  {
    variants: {
      variant: {
        default: 'border-[#3b9eff]/30 bg-[rgba(41,151,255,0.1)] text-[#3b9eff]',
        secondary: 'border-white/10 bg-[var(--color-surface-low)] text-[#8a8a96]',
        outline: 'border-white/10 text-[#8a8a96]',
        green: 'border-[#30d158]/20 bg-[rgba(48,209,88,0.1)] text-[#30d158]',
        muted: 'border-[rgba(255,255,255,0.07)] bg-[var(--color-surface-low)] text-[#52525e]',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
