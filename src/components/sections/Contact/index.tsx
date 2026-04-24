import React from 'react';

import useScrollReveal from '@/hooks/useScrollReveal';

const Contact: React.FC = () => {
  const ref: React.RefObject<HTMLElement | null> = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="contact__inner">
        <div className="contact__bloom" aria-hidden="true" />

        <p className="contact__label">Get in Touch</p>
        <h2 className="contact__headline">
          Let&apos;s build something{' '}
          <span className="contact__headline-accent">great together.</span>
        </h2>
        <p className="contact__sub">
          Open to new roles, collaborations, and interesting problems. Drop me a message or
          book time directly.
        </p>

        <div className="contact__trio">
          {/* Email */}
          <a href="mailto:Andytule321@gmail.com" className="contact__trio-card">
            <div className="contact__trio-icon-wrap contact__trio-icon-wrap--email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="22" height="22">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <p className="contact__trio-label">Email</p>
            <p className="contact__trio-value">Andytule321@gmail.com</p>
            <span className="contact__trio-cta">Send message →</span>
          </a>

          {/* Phone */}
          <a href="tel:+19059231997" className="contact__trio-card">
            <div className="contact__trio-icon-wrap contact__trio-icon-wrap--phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="22" height="22">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.36-.36a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <p className="contact__trio-label">Phone</p>
            <p className="contact__trio-value">(905) 923–1997</p>
            <span className="contact__trio-cta">Call me →</span>
          </a>

          {/* Calendly — popup text trigger */}
          <a
            href="https://calendly.com/andytule321"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__trio-card contact__trio-card--calendly"
          >
            <div className="contact__trio-icon-wrap contact__trio-icon-wrap--calendly">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="22" height="22">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
              </svg>
            </div>
            <p className="contact__trio-label">Schedule</p>
            <p className="contact__trio-value">30-min intro call</p>
            <span className="contact__trio-cta">Book on Calendly →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
