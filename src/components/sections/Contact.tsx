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
          Ready to start a new <span className="contact__headline-accent">Collaboration?</span>
        </h2>
        <p className="contact__sub">
          Whether it&apos;s a technical challenge or a creative project, my door is always open for
          innovators and visionaries.
        </p>

        <div className="contact__actions">
          <a href="mailto:hello@andytule.dev" className="contact__btn-primary">
            ✉ Send an Email
          </a>
          <a
            href="https://linkedin.com/in/andytule"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__btn-ghost"
          >
            View LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
