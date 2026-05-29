import React, { CSSProperties } from 'react';

import { Pill } from '@/components/shared';

export const JobCard: React.FC<{ style?: CSSProperties }> = ({ style }) => (
  <a
    href="https://www.dotmatics.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="glass-card relative flex flex-col justify-between overflow-hidden rounded-[1rem] p-7 no-underline hover:-translate-y-0.5"
    style={style}
  >
    <div className="flex items-center gap-3">
      <img
        src="/dotmatics-logo.png"
        alt="Dotmatics"
        className="h-13 w-13 shrink-0 rounded-[0.75rem] object-cover"
        loading="lazy"
        decoding="async"
        width={52}
        height={52}
        onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
      />
      <div className="flex flex-col gap-0.5">
        <p className="font-[var(--font-display)] text-[1.25rem] font-semibold leading-[1.2] text-[var(--color-cream)]">
          Software Engineer
        </p>
        <p className="text-sm text-[#6f89fc]">Dotmatics</p>
      </div>
    </div>
    <p className="mt-3 text-xs text-[var(--color-text-tertiary)]">Boston, MA · Oct 2024–Present</p>
    <div className="mt-4">
      <Pill variant="green" pulse>
        Currently At
      </Pill>
    </div>
  </a>
);
