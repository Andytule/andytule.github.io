import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, className = '' }) => (
  <div className={`mb-14 ${className}`}>
    <p className="section-eyebrow mb-3">{eyebrow}</p>
    <h2
      style={{
        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
        fontWeight: 700,
        color: 'var(--color-text-primary)',
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
      }}
    >
      {title}
    </h2>
  </div>
);

export default SectionHeader;
