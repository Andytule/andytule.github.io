import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 rounded-md text-[0.65rem] font-semibold uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#60a5fa] text-[#0a1628] hover:bg-[#3b82f6]',
        outline:
          'border border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/8 hover:border-[#60a5fa]',
        ghost: 'text-[#9a9aaa] hover:text-[#60a5fa]',
      },
      size: {
        default: 'px-3.5 py-1.5',
        sm: 'px-2.5 py-1',
        icon: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'default',
    },
  }
);
