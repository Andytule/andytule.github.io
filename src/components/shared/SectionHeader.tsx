import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, className = '' }) => (
  <div className={`mb-14 ${className}`}>
    <p className="section-eyebrow mb-3">{eyebrow}</p>
    <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-[var(--color-text-primary)] tracking-[-0.03em] leading-[1.1]">
      {title}
    </h2>
  </div>
);

export default SectionHeader;
