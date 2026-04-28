import React, { CSSProperties } from 'react';

import { Pill } from '@/components/shared';

import { cardBaseClass } from '../HoverCard';

/**
 * IdentityCard — hero name + status card.
 *
 * Avatar sizing (Apple approach):
 * - Absolutely positioned, fills the right portion of the card.
 * - `object-contain object-bottom` keeps the full figure visible at all sizes.
 * - Left offset uses CSS clamp so the figure gracefully retreats as the card
 *   narrows, never clipping text on the left.
 * - `pointer-events-none` and `aria-hidden` keep it purely decorative.
 */
export const IdentityCard: React.FC<{
  style?: CSSProperties;
  mobile?: boolean;
}> = ({ style, mobile }) => (
  <div
    className={`${cardBaseClass} flex flex-col ${mobile ? 'min-h-[300px]' : ''}`}
    style={{ background: '#222228', border: '1px solid rgba(255,255,255,0.1)', ...style }}
  >
    <div className={`relative z-10 flex flex-col ${mobile ? 'p-7 gap-3.5' : 'p-8 gap-4'}`}>
      <Pill variant="accent">Software Engineer</Pill>

      <h1
        className="font-bold text-[#f0f0f5] tracking-[-0.04em] leading-none"
        style={{ fontSize: mobile ? 'clamp(3rem, 8vw, 4.5rem)' : 'clamp(3rem, 4.5vw, 4.5rem)' }}
      >
        Andy <span className="text-[#3b9eff]">Le</span>
      </h1>

      <p className="text-[0.9375rem] text-[#8a8a96]">Hamilton, ON</p>

      <Pill variant="green" pulse>
        Open to opportunities
      </Pill>
    </div>

    {/* Avatar — Apple-style: fills card right half, contained, never crops */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-0 top-0"
      style={{ left: mobile ? 'clamp(48%, 30%, 55%)' : 'clamp(42%, 28%, 52%)' }}
    >
      <img
        src="/andy-avatar.png"
        alt=""
        className="h-full w-full object-contain object-bottom opacity-[0.95]"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  </div>
);
