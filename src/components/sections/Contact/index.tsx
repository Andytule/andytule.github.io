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
          Whether it&apos;s a technical challenge or a creative project, my door is always open
          for innovators and visionaries.
        </p>

        <div className="contact__info-grid">
          <a href="mailto:Andytule321@gmail.com" className="contact__info-card">
            <span className="contact__info-icon">✉</span>
            <div>
              <p className="contact__info-label">Email</p>
              <p className="contact__info-value">Andytule321@gmail.com</p>
            </div>
          </a>

          <a href="tel:+19059231997" className="contact__info-card">
            <span className="contact__info-icon">📞</span>
            <div>
              <p className="contact__info-label">Phone</p>
              <p className="contact__info-value">(905) 923–1997</p>
            </div>
          </a>

          <a
            href="https://calendly.com/andytule321"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__info-card contact__info-card--calendly"
          >
            <span className="contact__info-icon">📅</span>
            <div>
              <p className="contact__info-label">Book a Meeting</p>
              <p className="contact__info-value">calendly.com/andytule321</p>
            </div>
          </a>
        </div>

        {/* Calendly inline embed */}
        <div className="contact__calendly">
          <iframe
            src="https://calendly.com/andytule321?embed_domain=andytule.github.io&embed_type=Inline&hide_gdpr_banner=1&background_color=132135&text_color=dce8f7&primary_color=2196f3"
            title="Schedule a meeting with Andy Le"
            className="contact__calendly-frame"
            loading="lazy"
          />
        </div>

        <div className="contact__actions">
          <a href="mailto:Andytule321@gmail.com" className="contact__btn-primary">
            ✉ Send an Email
          </a>
          <a
            href="https://linkedin.com/in/andy-tu-le"
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
