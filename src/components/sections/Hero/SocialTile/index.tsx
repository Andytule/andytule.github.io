import React from 'react';

import useHover from '@/hooks/useHover';

import { cardBaseClass } from '../HoverCard';
import { CalIcon, GHIcon, IconFC, LIIcon, MailIcon } from './icons';

export { CalIcon, GHIcon, LIIcon, MailIcon };
export type { IconFC };

const ICON_SIZE_DESKTOP: number = 34;
const ICON_SIZE_MOBILE: number = 36;

export const socialTiles = [
  { area: 'cal', href: 'https://calendly.com/andytule321', label: 'Schedule', Icon: CalIcon },
  { area: 'email', href: 'mailto:Andytule321@gmail.com', label: 'Email', Icon: MailIcon },
  { area: 'gh', href: 'https://github.com/Andytule', label: 'GitHub', Icon: GHIcon },
  { area: 'li', href: 'https://linkedin.com/in/andy-tu-le', label: 'LinkedIn', Icon: LIIcon },
] as const;

export const SocialTile: React.FC<{
  href: string;
  label: string;
  Icon: IconFC;
  gridArea?: string;
  mobile?: boolean;
  aspectRatio?: boolean;
}> = ({ href, label, Icon, gridArea, mobile, aspectRatio }) => {
  const [hovered, handlers] = useHover();
  const iconSize: number = mobile ? ICON_SIZE_MOBILE : ICON_SIZE_DESKTOP;

  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className={[
        cardBaseClass,
        'flex flex-col items-center justify-center no-underline w-full',
        mobile ? 'gap-[0.875rem]' : 'gap-[0.625rem]',
        !mobile ? 'aspect-square' : aspectRatio ? 'aspect-square' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        gridArea: gridArea ?? undefined,
        background: hovered ? '#1a7fe8' : 'rgba(255,255,255,0.06)',
        backdropFilter: hovered ? 'none' : 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: hovered ? 'none' : 'blur(20px) saturate(180%)',
        border: hovered ? '1px solid transparent' : '1px solid rgba(255,255,255,0.12)',
      }}
      {...handlers}
    >
      <span
        className="flex transition-transform duration-200"
        style={{ transform: hovered ? 'scale(1.1)' : 'scale(1)' }}
      >
        <Icon size={iconSize} color={hovered ? 'white' : '#3b9eff'} />
      </span>
      <span
        className="font-semibold tracking-[0.1em] uppercase transition-colors duration-200"
        style={{
          fontSize: mobile ? '0.6875rem' : '0.625rem',
          color: hovered ? 'rgba(255,255,255,0.5)' : '#52525e',
        }}
      >
        {label}
      </span>
    </a>
  );
};
