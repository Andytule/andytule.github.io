import React from 'react';

import { ChordShiftCard } from '../ChordShiftCard';
import { DotmaticsCard } from '../DotmaticsCard';
import { IdentityCard } from '../IdentityCard';
import { ResumeCard } from '../ResumeCard';
import { SocialTile, socialTiles } from '../SocialTile';

export const HeroGrid: React.FC<{
  gridRef: React.RefObject<HTMLDivElement>;
  rowHeight: number | null;
}> = ({ gridRef, rowHeight }) => (
  <div
    ref={gridRef}
    className="hidden md:grid gap-3"
    style={{
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridTemplateRows: rowHeight ? `repeat(3, ${rowHeight}px)` : undefined,
      gridTemplateAreas: [
        '"main main main main job    job   "',
        '"main main main main resume resume"',
        '"proj proj  cal  email gh     li   "',
      ].join(' '),
    }}
  >
    <IdentityCard style={{ gridArea: 'main' }} />

    <DotmaticsCard style={{ gridArea: 'job' }} />

    <ResumeCard style={{ gridArea: 'resume' }} />

    <ChordShiftCard style={{ gridArea: 'proj' }} />

    {socialTiles.map((t) => (
      <SocialTile key={t.area} {...t} gridArea={t.area} />
    ))}
  </div>
);
