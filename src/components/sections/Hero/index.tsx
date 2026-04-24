import React from 'react';

const Hero: React.FC = () => (
  <section id="hero" className="hero">
    <div className="hero__grid">
      <div className="hero__main">
        <div>
          <p className="hero__eyebrow">Full-Stack Software Engineer</p>
          <h1 className="hero__headline">
            Hey, I&apos;m Andy — <span className="hero__headline-accent">I build things</span> that
            scale.
          </h1>
          <p className="hero__sub">
            Software engineer based in Boston, MA with a love for clean architecture and shipping
            products that matter. From scientific data pipelines at Dotmatics to gamification
            systems at Tesla, I turn complex problems into elegant, reliable code.
          </p>
          <div className="hero__tags">
            {['React', 'TypeScript', 'Node.js', 'Kafka', 'PostgreSQL', 'Docker'].map((tag) => (
              <span key={tag} className="hero__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__sidebar">
        <div className="hero__focus-card">
          <p className="hero__focus-label">Currently At</p>
          <div className="hero__focus-header">
            <img
              src="/dotmatics-logo.png"
              alt="Dotmatics logo"
              className="hero__focus-logo"
              width="36"
              height="36"
            />
            <div>
              <p className="hero__focus-role">Software Engineer</p>
              <p className="hero__focus-company">Dotmatics</p>
            </div>
          </div>
          <p className="hero__focus-location">📍 Boston, MA</p>
          <blockquote className="hero__focus-quote">
            Building full-stack features for scientific data registration — React, Kafka, Scala
            &amp; Databricks.
          </blockquote>
          <span className="hero__focus-badge">Oct 2024 – Present</span>
        </div>
      </div>
    </div>

    <div className="hero__bottom-row">
      <div className="hero__photo-card">
        <div className="hero__photo-card-inner">
          <div>
            <p className="hero__photo-card-badge">Featured Project</p>
            <p className="hero__photo-card-name">Chord-Shift</p>
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
          download="Andy_Le_Resume.pdf"
          className="hero__cv-download"
          aria-label="Download resume as PDF"
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
          href="https://calendly.com/andytule321"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__booking-btn"
        >
          📅 Book a Call
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
