import React, { ReactNode } from 'react';

interface SectionHeaderProps {
  title: ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className = '' }) => (
  <div className={`mb-14 ${className}`}>
    <h2 className="text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold text-[var(--color-text-primary)] tracking-[-0.03em] leading-[1.1]">
      {title}
    </h2>
  </div>
);

export default SectionHeader;
