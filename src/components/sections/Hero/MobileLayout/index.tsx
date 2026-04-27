import React from 'react';

import { ChordShiftCard } from '../ChordShiftCard';
import { DotmaticsCard } from '../DotmaticsCard';
import { IdentityCard } from '../IdentityCard';
import { ResumeCard } from '../ResumeCard';
import { SocialTile, socialTiles } from '../SocialTile';

export const MobileLayout: React.FC = () => (
  <div className="flex flex-col gap-3 md:hidden">
    <IdentityCard mobile />

    <DotmaticsCard />

    <ChordShiftCard style={{ minHeight: '140px' }} />

    <ResumeCard mobile />

    {/* Social tiles — 2×2 grid */}
    <div className="grid grid-cols-2 gap-3">
      {socialTiles.map((t) => (
        <SocialTile key={t.area} {...t} mobile aspectRatio />
      ))}
    </div>
  </div>
);
