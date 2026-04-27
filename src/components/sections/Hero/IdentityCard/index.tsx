import React from 'react';

import { cardBase } from '../HoverCard';

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
      <span className="pill pill-accent w-fit">Software Engineer</span>
      <h1
        className="font-bold text-[#f0f0f5] tracking-[-0.04em] leading-none"
        style={{ fontSize: mobile ? 'clamp(3rem, 8vw, 4.5rem)' : 'clamp(3rem, 4.5vw, 4.5rem)' }}
      >
        Andy <span className="text-[#3b9eff]">Le</span>
      </h1>
      <p className="text-[0.9375rem] text-[#8a8a96]">Hamilton, ON</p>
      <span className="pill pill-green w-fit" style={{ gap: '0.4rem' }}>
        <span
          className="inline-block h-[7px] w-[7px] rounded-full bg-[#30d158]"
          style={mobile ? { animation: 'pulse 2s infinite' } : {}}
        />
        Open to opportunities
      </span>
    </div>
    <div
      className="pointer-events-none absolute"
      style={
        mobile
          ? { left: '30%', right: 0, top: '15%', bottom: 0 }
          : { left: '28%', right: 0, top: '12%', bottom: 0 }
      }
    >
      <img
        src="/andy-avatar.png"
        alt=""
        aria-hidden="true"
        className="h-full w-full object-contain object-bottom opacity-[0.95]"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  </div>
);
