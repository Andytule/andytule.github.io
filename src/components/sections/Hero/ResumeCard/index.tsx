import { FileText } from 'lucide-react';
import React, { CSSProperties, MouseEvent } from 'react';

import useHover from '@/hooks/useHover';

import { cardBaseClass } from '../HoverCard';

export const ResumeCard: React.FC<{
  style?: CSSProperties;
  mobile?: boolean;
}> = ({ style, mobile }) => {
  const [hovered, handlers] = useHover();

  const scrollToResume = (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      href="#resume"
      onClick={scrollToResume}
      className={[
        cardBaseClass,
        mobile ? 'flex-row items-center' : 'flex-col items-start',
        'flex justify-center no-underline',
        mobile ? 'gap-[0.875rem] p-5' : 'gap-[0.625rem] p-6',
        hovered ? 'text-white' : 'text-[#f0f0f5]',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        ...(hovered
          ? {
              background: '#1a7fe8',
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none',
              border: '1px solid transparent',
            }
          : {}),
        ...style,
      }}
      {...handlers}
    >
      <div className="flex items-center gap-3">
        <FileText
          size={mobile ? 28 : 48}
          className="shrink-0 transition-colors duration-200"
          style={{ color: hovered ? '#ffffff' : '#3b9eff' }}
        />
        <p
          className="font-[var(--font-display)] font-bold tracking-[-0.03em]"
          style={{ fontSize: mobile ? '1.125rem' : '1.75rem' }}
        >
          Resume
        </p>
      </div>
    </a>
  );
};
