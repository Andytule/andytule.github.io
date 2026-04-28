import { FileText } from 'lucide-react';
import React from 'react';

import useHover from '@/hooks/useHover';

import { cardBaseClass } from '../HoverCard';

export const ResumeCard: React.FC<{
  style?: React.CSSProperties;
  mobile?: boolean;
}> = ({ style, mobile }) => {
  const [hovered, handlers] = useHover();

  const scrollToResume = (e: React.MouseEvent) => {
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
        hovered ? 'bg-[#1a7fe8] border-transparent text-white' : 'text-[#f0f0f5]',
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      {...handlers}
    >
      <div className="flex items-center gap-3">
        <FileText
          size={mobile ? 28 : 40}
          className="shrink-0 transition-colors duration-200"
          style={{ color: hovered ? '#ffffff' : '#3b9eff' }}
        />
        <p
          className="font-[var(--font-display)] font-bold tracking-[-0.03em]"
          style={{ fontSize: mobile ? '1.125rem' : '1.5rem' }}
        >
          Resume
        </p>
      </div>
    </a>
  );
};
