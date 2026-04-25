import { Calendar, Mail, Phone } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import useScrollReveal from '@/hooks/useScrollReveal';

const contactCards = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'Andytule321@gmail.com',
    cta: 'Send message →',
    href: 'mailto:Andytule321@gmail.com',
    iconBg: 'bg-[#60a5fa]/10 text-[#60a5fa]',
  },
  {
    icon: <Phone size={22} />,
    label: 'Phone',
    value: '(905) 923–1997',
    cta: 'Call me →',
    href: 'tel:+19059231997',
    iconBg: 'bg-[#4ade80]/10 text-[#4ade80]',
  },
  {
    icon: <Calendar size={22} />,
    label: 'Schedule',
    value: '30-min intro call',
    cta: 'Book on Calendly →',
    href: 'https://calendly.com/andytule321',
    iconBg: 'bg-[#006bff]/15 text-[#4d9fff]',
    external: true,
  },
];

const Contact: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-6 py-16" ref={ref}>
      <Card className="relative overflow-hidden border-white/7 bg-[#141416]">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent" />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] w-[500px] rounded-full bg-[#60a5fa]/5 blur-[80px]" />
        </div>

        <CardContent className="relative z-10 px-8 py-14 text-center">
          <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-widest text-[#60a5fa]">
            Get in Touch
          </p>
          <h2 className="font-display text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold tracking-tight text-[#f0f0f2]">
            Let&apos;s build something <span className="text-[#60a5fa]">great together.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[460px] text-[0.9375rem] leading-relaxed text-[#9a9aaa]">
            Open to new roles, collaborations, and interesting problems. Drop me a message or book
            time directly.
          </p>

          <div className="mx-auto mt-10 grid max-w-[720px] grid-cols-1 gap-3 text-left md:grid-cols-3">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="group flex flex-col gap-1.5 rounded-xl border border-white/7 bg-[#1c1c1f] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#60a5fa]/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
              >
                <div
                  className={`mb-1 flex h-10 w-10 items-center justify-center rounded-xl ${card.iconBg}`}
                >
                  {card.icon}
                </div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-widest text-[#4a4a55]">
                  {card.label}
                </p>
                <p className="font-display text-[0.9375rem] font-semibold text-[#f0f0f2]">
                  {card.value}
                </p>
                <span className="mt-auto pt-2 text-xs text-[#60a5fa] transition-all group-hover:underline">
                  {card.cta}
                </span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
