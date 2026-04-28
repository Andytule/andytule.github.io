import React from 'react';

import { Pill } from '@/components/shared';

import { cardBase } from '../HoverCard';

/**
 * IdentityCard — hero name + status card.
 *
 * Avatar sizing (Apple approach):
 * - The avatar is absolutely positioned and fills the right portion of the card.
 * - `object-contain object-bottom` keeps the full figure visible at all sizes.
 * - Left offset uses a CSS clamp so the figure gracefully retreats as the card
 *   narrows, never clipping the text content on the left.
 * - `pointer-events-none` and `aria-hidden` keep it purely decorative.
 */
export const IdentityCard: React.FC<{
  style?: React.CSSProperties;
  mobile?: boolean;
}> = ({ style, mobile }) => (
  <div
    style={{
      ...cardBase,
      display: 'flex',
      flexDirection: 'column',
      ...(mobile ? { minHeight: '300px' } : {}),
      ...style,
    }}
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
      style={{
        // clamp retreats the left edge as card shrinks, protecting text
        left: mobile ? 'clamp(48%, 30%, 55%)' : 'clamp(42%, 28%, 52%)',
      }}
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
