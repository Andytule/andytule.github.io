import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-widest transition-colors',
  {
    variants: {
      variant: {
        default:   'border-[#60a5fa]/30 bg-transparent text-[#60a5fa]',
        secondary: 'border-white/10 bg-[#242428] text-[#9a9aaa]',
        outline:   'border-white/10 text-[#9a9aaa]',
        green:     'border-[#4ade80]/20 bg-[#4ade80]/10 text-[#4ade80]',
        muted:     'border-[#28282e] bg-[#242428] text-[#4a4a55]',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
