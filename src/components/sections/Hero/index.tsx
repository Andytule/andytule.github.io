import React from 'react';

import { CURRENT_FOCUS } from '@/data';

const Hero: React.FC = () => (
  <section id="hero" className="hero">
    <div className="hero__grid">
      <div className="hero__main">
        <div>
          <p className="hero__eyebrow">Software Architect &amp; Creative</p>
          <h1 className="hero__headline">
            I build digital <span className="hero__headline-accent">experiences</span> that bloom
            with precision.
          </h1>
          <p className="hero__sub">
            Crafting high-fidelity technical solutions where aesthetic harmony meets robust
            engineering. Specialising in cloud-native architectures and immersive UI.
          </p>
        </div>
      </div>

      <div className="hero__sidebar">
        <div className="hero__focus-card">
          <p className="hero__focus-label">Current Focus</p>
          <p className="hero__focus-role">{CURRENT_FOCUS.role}</p>
          <p className="hero__focus-company">{CURRENT_FOCUS.company}</p>
          <blockquote className="hero__focus-quote">{CURRENT_FOCUS.quote}</blockquote>
        </div>
      </div>
    </div>

    <div className="hero__bottom-row">
      <div className="hero__photo-card">
        <div className="hero__photo-card-inner">
          <div>
            <p className="hero__photo-card-badge">Featured Project</p>
            <p className="hero__photo-card-name">Project Sakura v2</p>
          </div>
        </div>
      </div>

      <div className="hero__cv-card">
        <div>
          <p className="hero__cv-label">Résumé</p>
          <p className="hero__cv-title">Curriculum Vitae</p>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__cv-download"
        >
          ↓ Download PDF
        </a>
      </div>

      <div className="hero__booking-card">
        <div className="hero__booking-status">
          <span className="hero__booking-dot" aria-hidden="true" />
          Available for chat
        </div>
        <a
          href="https://cal.com/andytule"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__booking-btn"
        >
          📅 Book Calendly
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
