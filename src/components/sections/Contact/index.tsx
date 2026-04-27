import { Calendar, Mail, Phone } from 'lucide-react';
import React from 'react';

import useScrollReveal from '@/hooks/useScrollReveal';

const contactCards = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'Andytule321@gmail.com',
    cta: 'Send message →',
    href: 'mailto:Andytule321@gmail.com',
    iconColor: '#3b9eff',
    iconBg: 'rgba(41,151,255,0.1)',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '(905) 923–1997',
    cta: 'Call me →',
    href: 'tel:+19059231997',
    iconColor: '#30d158',
    iconBg: 'rgba(48,209,88,0.1)',
  },
  {
    icon: <Calendar size={20} />,
    label: 'Schedule',
    value: '30-min intro call',
    cta: 'Book on Calendly →',
    href: 'https://calendly.com/andytule321',
    iconColor: '#3b9eff',
    iconBg: 'rgba(41,151,255,0.1)',
    external: true,
  },
];

const Contact: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="mx-auto max-w-[1100px] px-6 py-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[var(--color-surface-lowest)]">
        {/* Top line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(77,166,255,0.7)] to-transparent" />

        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div
            className="h-80 w-[560px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(77,166,255,0.07) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
        </div>

        <div className="relative z-10 px-8 py-[clamp(3rem,6vw,5rem)] text-center">
          <p className="section-eyebrow mb-4">Get in Touch</p>

          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4.5vw,3rem)] font-bold text-[#f0f0f5] tracking-[-0.04em] leading-[1.05] mb-5">
            Let's build something <span className="text-[#3b9eff]">great together.</span>
          </h2>

          <p className="max-w-[460px] mx-auto text-[1.0625rem] leading-[1.6] text-[#8a8a96] tracking-[-0.01em]">
            Open to new roles, collaborations, and interesting problems. Drop me a message or book
            time directly.
          </p>

          <div
            className="max-w-[720px] mx-auto mt-12 grid gap-3 text-left"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
          >
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="group flex flex-col gap-2 rounded-[1.25rem] border border-white/[0.07] bg-[var(--color-surface)] p-6 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(41,151,255,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-[0.75rem] mb-1"
                  style={{ background: card.iconBg, color: card.iconColor }}
                >
                  {card.icon}
                </div>
                <p className="text-[0.625rem] font-semibold tracking-[0.1em] uppercase text-[#52525e]">
                  {card.label}
                </p>
                <p className="font-[var(--font-display)] text-[0.9375rem] font-semibold text-[#f0f0f5] tracking-[-0.02em]">
                  {card.value}
                </p>
                <span className="mt-auto pt-2 text-[0.8125rem] text-[#3b9eff] transition-opacity duration-150 group-hover:opacity-70">
                  {card.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
