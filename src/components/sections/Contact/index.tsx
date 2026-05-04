import React from 'react';

import { CONTACT_ITEMS } from '@/data/contact';
import useScrollReveal from '@/hooks/useScrollReveal';

import ContactTile from './ContactTile';

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
          loading="lazy"
          decoding="async"
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
