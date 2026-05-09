import { Phone } from 'lucide-react';
import React from 'react';

import { CalIcon, LIIcon, MailIcon } from '@/components/sections/Hero/SocialTile/icons';
import useHover from '@/hooks/useHover';
import type { ContactItem } from '@/types';

type IconName = ContactItem['iconName'];

const ICONS: Record<IconName, React.FC<{ size?: number; color?: string }>> = {
  mail: MailIcon,
  linkedin: LIIcon,
  phone: ({ size = 18, color }) => <Phone size={size} color={color} />,
  calendar: CalIcon,
};

const ContactTile: React.FC<ContactItem> = ({ iconName, value, cta, href, external }) => {
  const [hovered, handlers] = useHover();
  const Icon = ICONS[iconName];

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="glass-card flex flex-col items-center justify-center text-center gap-2.5 no-underline rounded-[1.25rem] py-6 px-4 transition-all duration-200"
      style={hovered ? { background: '#1a7fe8', border: '1px solid transparent' } : undefined}
      {...handlers}
    >
      <span
        className="transition-transform duration-200"
        style={{ transform: hovered ? 'scale(1.1)' : 'scale(1)', display: 'block' }}
      >
        <Icon size={22} color={hovered ? '#fff' : '#3b9eff'} />
      </span>

      <p
        className="text-[0.8125rem] font-semibold tracking-[-0.02em] leading-snug transition-colors duration-200"
        style={{ color: hovered ? '#fff' : '#ebebf5' }}
      >
        {value}
      </p>

      <span
        className="text-[0.6875rem] font-medium tracking-[-0.01em] transition-colors duration-200"
        style={{ color: hovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.3)' }}
      >
        {cta} →
      </span>
    </a>
  );
};

export default ContactTile;
