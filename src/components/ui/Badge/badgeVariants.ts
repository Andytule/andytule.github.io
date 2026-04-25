import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-widest transition-colors',
  {
    variants: {
      variant: {
        default: 'border-[#60a5fa]/30 bg-transparent text-[#60a5fa]',
        secondary: 'border-white/10 bg-[#242428] text-[#9a9aaa]',
        outline: 'border-white/10 text-[#9a9aaa]',
        green: 'border-[#4ade80]/20 bg-[#4ade80]/8 text-[#4ade80]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
