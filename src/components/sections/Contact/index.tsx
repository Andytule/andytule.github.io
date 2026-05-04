import { Phone } from 'lucide-react';
import React from 'react';

import { CalIcon, LIIcon, MailIcon } from '@/components/sections/Hero/SocialTile/icons';
import { CONTACT_ITEMS, type ContactItem } from '@/data/contact';
import useHover from '@/hooks/useHover';
import useScrollReveal from '@/hooks/useScrollReveal';

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
      className="flex flex-col items-center justify-center text-center gap-2.5 no-underline rounded-[1.25rem] py-6 px-4 transition-all duration-200"
      style={{
        background: hovered ? '#1a7fe8' : '#222228',
        border: `1px solid ${hovered ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
      }}
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

const Contact: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="mx-auto max-w-[1200px] px-6 md:px-8 py-24">
      <div className="mb-14">
        <h2 className="text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold text-[var(--color-text-primary)] tracking-[-0.03em] leading-[1.1]">
          Let's build something <span className="text-[#3b9eff]">great together.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left — illustration */}
        <img
          src="/coffee-chat-cat.png"
          alt="Coffee chat illustration"
          className="select-none pointer-events-none w-full max-w-[400px]"
          style={{ objectFit: 'contain' }}
          draggable={false}
        />

        {/* Right — 2×2 compact tiles */}
        <div className="grid grid-cols-2 gap-3">
          {CONTACT_ITEMS.map((item) => (
            <ContactTile key={item.value} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
