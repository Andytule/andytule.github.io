import React, { RefObject } from 'react';

import { FeaturedCard } from '../FeaturedCard';
import { IdentityCard } from '../IdentityCard';
import { JobCard } from '../JobCard';
import { ResumeCard } from '../ResumeCard';
import { SocialTile, socialTiles } from '../SocialTile';

export const HeroGrid: React.FC<{
  gridRef: RefObject<HTMLDivElement | null>;
  rowHeight: number | null;
}> = ({ gridRef, rowHeight }) => (
  <div
    ref={gridRef}
    className="hidden md:grid gap-3.5"
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
    <JobCard style={{ gridArea: 'job' }} />
    <ResumeCard style={{ gridArea: 'resume' }} />
    <FeaturedCard style={{ gridArea: 'proj' }} />
    {socialTiles.map((t) => (
      <SocialTile key={t.area} {...t} gridArea={t.area} />
    ))}
  </div>
);
