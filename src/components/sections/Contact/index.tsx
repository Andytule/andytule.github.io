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
    <section
      id="contact"
      ref={ref}
      style={{ margin: '0 auto', maxWidth: '1100px', padding: '6rem 1.5rem' }}
    >
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '2rem',
          border: '1px solid rgba(255,255,255,0.07)',
          background: '#111114',
        }}
      >
        {/* Top line */}
        <div
          style={{
            position: 'absolute',
            insetInline: 0,
            top: 0,
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(41,151,255,0.6), transparent)',
          }}
        />

        {/* Ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              height: '320px',
              width: '560px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(41,151,255,0.05) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            padding: 'clamp(3rem, 6vw, 5rem) 2rem',
            textAlign: 'center',
          }}
        >
          <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>
            Get in Touch
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              fontWeight: 700,
              color: '#f0f0f5',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '1.25rem',
            }}
          >
            Let's build something <span style={{ color: '#3b9eff' }}>great together.</span>
          </h2>

          <p
            style={{
              maxWidth: '460px',
              margin: '0 auto',
              fontSize: '1.0625rem',
              lineHeight: 1.6,
              color: '#8a8a96',
              letterSpacing: '-0.01em',
            }}
          >
            Open to new roles, collaborations, and interesting problems. Drop me a message or book
            time directly.
          </p>

          <div
            style={{
              maxWidth: '720px',
              margin: '3rem auto 0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '0.75rem',
              textAlign: 'left',
            }}
          >
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  borderRadius: '1.25rem',
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: '#1c1c21',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
                }}
                className="group hover:-translate-y-0.5 hover:border-[rgba(41,151,255,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
              >
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.75rem',
                    background: card.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: card.iconColor,
                    marginBottom: '0.25rem',
                  }}
                >
                  {card.icon}
                </div>
                <p
                  style={{
                    fontSize: '0.625rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#52525e',
                  }}
                >
                  {card.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: '#f0f0f5',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {card.value}
                </p>
                <span
                  style={{
                    marginTop: 'auto',
                    paddingTop: '0.5rem',
                    fontSize: '0.8125rem',
                    color: '#3b9eff',
                    transition: 'opacity 0.15s ease',
                  }}
                  className="group-hover:opacity-70"
                >
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
