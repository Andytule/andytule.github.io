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
        'flex justify-center no-underline hover:-translate-y-0.5',
        mobile ? 'gap-[0.875rem] p-5' : 'gap-[0.625rem] p-6',
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      {...handlers}
    >
      <div className="flex items-center gap-3">
        <FileText
          size={mobile ? 28 : 48}
          className="shrink-0 transition-colors duration-200"
          style={{ color: hovered ? 'white' : '#3b9eff' }}
        />
        <p
          className="font-[var(--font-display)] font-bold tracking-[-0.03em] transition-colors duration-200"
          style={{
            fontSize: mobile ? '1.125rem' : '1.75rem',
            color: hovered ? 'white' : '#f0f0f5',
          }}
        >
          Resume
        </p>
      </div>
    </a>
  );
};
