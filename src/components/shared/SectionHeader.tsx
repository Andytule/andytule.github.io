import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  className?: string;
}

/**
 * SectionHeader — eyebrow + section heading.
 * `.section-eyebrow` CSS class replaced with equivalent Tailwind utilities.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, className = '' }) => (
  <div className={`mb-14 ${className}`}>
    <p className="mb-3 text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-accent)]">
      {eyebrow}
    </p>
    <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-[var(--color-text-primary)] tracking-[-0.03em] leading-[1.1]">
      {title}
    </h2>
  </div>
);

export default SectionHeader;
