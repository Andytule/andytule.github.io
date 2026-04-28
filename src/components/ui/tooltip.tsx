import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React, {
  ComponentPropsWithoutRef,
  ComponentRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

import { cn } from '@/lib/utils';

const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps> = TooltipPrimitive.Provider;
const Tooltip: React.FC<TooltipPrimitive.TooltipProps> = TooltipPrimitive.Root;
const TooltipTrigger: ForwardRefExoticComponent<
  TooltipPrimitive.TooltipTriggerProps & RefAttributes<HTMLButtonElement>
> = TooltipPrimitive.Trigger;

const TooltipContent = forwardRef<
  ComponentRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[var(--color-surface-low)] px-3 py-1.5 text-xs text-[#f0f0f5] shadow-md animate-in fade-in-0 zoom-in-95',
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
