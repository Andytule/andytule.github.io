import React, { CSSProperties } from 'react';

import { Pill } from '@/components/shared';

import { cardBaseClass } from '../HoverCard';

export const IdentityCard: React.FC<{ style?: CSSProperties; mobile?: boolean }> = ({
  style,
  mobile,
}) => (
  <div
    className={`${cardBaseClass} flex flex-col hover:-translate-y-0.5 ${mobile ? 'min-h-[300px]' : ''}`}
    style={style}
  >
    <div className={`relative z-10 flex flex-col ${mobile ? 'p-8 gap-4' : 'p-10 gap-5'}`}>
      <Pill variant="accent">Software Engineer</Pill>
      <h1
        className="font-bold text-[var(--color-cream)] tracking-[-0.04em] leading-none"
        style={{ fontSize: mobile ? 'clamp(3rem, 8vw, 4.5rem)' : 'clamp(3.5rem, 5vw, 5.5rem)' }}
      >
        Andy <span className="text-[#6f89fc]">Le</span>
      </h1>
      <p className="text-[1.0625rem] text-[var(--color-text-secondary)]">Hamilton, ON</p>
      <Pill variant="green" pulse>
        Open to opportunities
      </Pill>
    </div>
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
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
    </div>
  </div>
);
