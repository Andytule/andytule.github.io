import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-[0.65rem] font-semibold uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0e10] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-[#60a5fa] text-[#0a1628] hover:bg-[#3b82f6]',
        outline:
          'border border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#60a5fa]',
        ghost:
          'text-[#9a9aaa] hover:text-[#60a5fa] hover:bg-white/5',
        destructive:
          'bg-red-500 text-white hover:bg-red-600',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm:      'h-7 px-2.5 py-1',
        lg:      'h-11 px-6',
        icon:    'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
