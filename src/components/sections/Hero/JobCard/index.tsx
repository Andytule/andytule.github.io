import React, { CSSProperties } from 'react';

import { Pill } from '@/components/shared';

export const JobCard: React.FC<{
  style?: CSSProperties;
}> = ({ style }) => (
  <a
    href="https://www.dotmatics.com/"
    target="_blank"
    rel="noopener noreferrer"
    style={style}
    className="group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#222228] p-6 no-underline transition-all duration-200 hover:border-transparent hover:bg-[#1a7fe8]"
  >
    {/* Employer identity */}
    <div className="flex items-center gap-3">
      <img
        src="/dotmatics-logo.png"
        alt="Dotmatics"
        className="h-11 w-11 shrink-0 rounded-[0.75rem] object-cover"
        onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
      />
      <div className="flex flex-col gap-0.5">
        <p className="font-[var(--font-display)] text-[1.125rem] font-semibold leading-[1.2] text-[#f0f0f5] transition-colors duration-200 group-hover:text-white">
          Software Engineer
        </p>
        <p className="text-sm text-[var(--color-accent)] transition-colors duration-200 group-hover:text-white/70">
          Dotmatics
        </p>
      </div>
    </div>

    {/* Tenure */}
    <p className="mt-3 text-xs text-[var(--color-text-tertiary)] transition-colors duration-200 group-hover:text-white/50">
      Boston, MA · Oct 2024–Present
    </p>

    {/* Status pill */}
    <div className="mt-4">
      <Pill
        variant="green"
        pulse
        hoverClassName="group-hover:bg-[rgba(22,163,74,0.55)] group-hover:border-[rgba(74,222,128,0.9)] group-hover:text-[#dcfce7]"
      >
        Currently At
      </Pill>
    </div>
  </a>
);
