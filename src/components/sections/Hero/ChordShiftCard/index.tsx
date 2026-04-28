import React from 'react';

import { Pill } from '@/components/shared';

/**
 * ChordShiftCard — "Featured Project" bento card.
 *
 * All hover states via CSS `group` — zero useState.
 * Pill variants: accent (Featured Project), purple (GitHub), green (Live).
 */
export const ChordShiftCard: React.FC<{
  style?: React.CSSProperties;
}> = ({ style }) => (
  <div
    style={style}
    className="group relative cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#222228] transition-all duration-200 hover:border-transparent hover:bg-[#1a7fe8] hover:shadow-[0_0_0_1px_rgba(59,158,255,0.15),0_20px_60px_rgba(0,0,0,0.5)]"
    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
  >
    {/* Screenshot panel */}
    <div className="absolute bottom-4 left-4 top-4 w-[42%] overflow-hidden rounded-[0.75rem] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)]">
      <img
        src="/chord-shift-preview.png"
        alt="Chord-Shift preview"
        className="h-full w-full object-cover object-top"
      />
    </div>

    {/* Content panel */}
    <div
      className="absolute bottom-0 right-0 top-0 flex flex-col justify-center gap-2 p-5"
      style={{ left: '44%' }}
    >
      {/* Featured badge */}
      <Pill
        variant="accent"
        className="uppercase tracking-[0.06em] text-[0.5625rem]"
        hoverClassName="group-hover:bg-white/[0.18] group-hover:border-white/55 group-hover:text-white"
      >
        Featured Project
      </Pill>

      {/* Title */}
      <p className="font-[var(--font-display)] text-base font-semibold leading-[1.2] tracking-[-0.02em] text-[#f0f0f5] transition-colors duration-200 group-hover:text-white">
        Chord-Shift
      </p>

      {/* Subtitle */}
      <p className="text-[0.6875rem] leading-[1.4] text-[#8a8a96] transition-colors duration-200 group-hover:text-white/75">
        Full-stack chord transposition
      </p>

      {/* Action pills */}
      <div className="mt-1 flex flex-wrap gap-2">
        <a
          href="https://github.com/Andytule/chord-shift"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="no-underline"
        >
          <Pill
            variant="purple"
            className="uppercase tracking-[0.06em] text-[0.5625rem] cursor-pointer"
            hoverClassName="group-hover:bg-[rgba(109,40,217,0.6)] group-hover:border-[rgba(196,181,253,0.9)] group-hover:text-[#ede9fe]"
          >
            GitHub
          </Pill>
        </a>
        <a
          href="https://andytule.github.io/chord-shift/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="no-underline"
        >
          <Pill
            variant="green"
            className="uppercase tracking-[0.06em] text-[0.5625rem] cursor-pointer"
            hoverClassName="group-hover:bg-[rgba(22,163,74,0.55)] group-hover:border-[rgba(74,222,128,0.9)] group-hover:text-[#dcfce7]"
          >
            Live ↗
          </Pill>
        </a>
      </div>
    </div>
  </div>
);
