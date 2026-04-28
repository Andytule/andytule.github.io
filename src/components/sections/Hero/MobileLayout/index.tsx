import React from 'react';

import { FeaturedCard } from '../FeaturedCard';
import { IdentityCard } from '../IdentityCard';
import { JobCard } from '../JobCard';
import { ResumeCard } from '../ResumeCard';
import { SocialTile, socialTiles } from '../SocialTile';

export const MobileLayout: React.FC = () => (
  <div className="flex flex-col gap-3 md:hidden">
    <IdentityCard mobile />
    <JobCard />
    <FeaturedCard style={{ minHeight: '140px' }} />
    <ResumeCard mobile />
    {/* Social tiles — 2×2 grid */}
    <div className="grid grid-cols-2 gap-3">
      {socialTiles.map((t) => (
        <SocialTile key={t.area} {...t} mobile aspectRatio />
      ))}
    </div>
  </div>
);
