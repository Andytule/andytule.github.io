import React, { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, className = '' }) => (
  <div className={`mb-14 ${className}`}>
    <p className="mb-3 text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-accent)]">
      {eyebrow}
    </p>
    <h2 className="text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold text-[var(--color-text-primary)] tracking-[-0.03em] leading-[1.1]">
      {title}
    </h2>
  </div>
);

export default SectionHeader;
