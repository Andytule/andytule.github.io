import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import React, { useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Hero: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleViewPdf = () => {
    pdfRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bento">
        {/* ── 1. Main identity card (4×2) ── */}
        <div className="hero__card hero__card--main">
          <div className="hero__main-top">
            <p className="hero__eyebrow">Software Engineer</p>
            <h1 className="hero__headline">
              Andy <span className="hero__headline-accent">Le</span>
            </h1>
            <p className="hero__sub">Hamilton, ON</p>
            <div className="hero__main-status">
              <span className="hero__status-dot" aria-hidden="true" />
              Open to opportunities
            </div>
          </div>
          <div className="hero__main-illustration" aria-hidden="true">
            <img src="/andy-avatar.png" alt="" className="hero__main-img" />
          </div>
        </div>

        {/* ── 2. Currently At (2×1) ── */}
        <div className="hero__card hero__card--job">
          <p className="hero__card-label">Currently At</p>
          <div className="hero__job-header">
            <img
              src="/dotmatics-logo.png"
              alt="Dotmatics"
              className="hero__job-logo"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div>
              <p className="hero__job-role">Software Engineer</p>
              <p className="hero__job-company">Dotmatics</p>
            </div>
          </div>
          <p className="hero__job-location">📍 Boston, MA · Oct 2024–Present</p>
        </div>

        {/* ── 3. Resume (2×1) ── */}
        <div className="hero__card hero__card--resume">
          <div className="hero__resume-heading">
            <svg
              className="hero__resume-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <p className="hero__resume-title">Resume</p>
          </div>
          <div className="hero__resume-actions">
            <button onClick={handleViewPdf} className="hero__resume-btn">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View
            </button>
            <a
              href="/andy_le_resume.pdf"
              download="Andy_Le_Resume.pdf"
              className="hero__resume-btn"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download
            </a>
          </div>
        </div>

        {/* ── Row 3: social tiles first (left), project last (right) ── */}

        {/* ── 4. Calendly ── */}
        <a
          href="https://calendly.com/andytule321"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__card hero__card--social hero__card--calendly"
        >
          <svg
            className="hero__social-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="hero__social-label">Calendly</span>
        </a>

        {/* ── 5. Email ── */}
        <a
          href="mailto:Andytule321@gmail.com"
          className="hero__card hero__card--social hero__card--email"
        >
          <svg
            className="hero__social-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="hero__social-label">Email</span>
        </a>

        {/* ── 6. GitHub ── */}
        <a
          href="https://github.com/Andytule"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__card hero__card--social hero__card--github"
        >
          <svg className="hero__social-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="hero__social-label">GitHub</span>
        </a>

        {/* ── 7. LinkedIn ── */}
        <a
          href="https://linkedin.com/in/andy-tu-le"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__card hero__card--social hero__card--linkedin"
        >
          <svg className="hero__social-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span className="hero__social-label">LinkedIn</span>
        </a>

        {/* ── 8. Featured Project (2×1) — rightmost ── */}
        <div className="hero__card hero__card--project">
          <div className="hero__project-img">
            <img
              src="/chord-shift-preview.png"
              alt="Chord-Shift app"
              className="hero__project-screenshot"
            />
            <div className="hero__project-overlay" />
          </div>
          <div className="hero__project-meta">
            <span className="hero__project-badge">Featured Project</span>
            <p className="hero__project-name">Chord-Shift</p>
            <p className="hero__project-desc">Full-stack chord transposition tool</p>
            <div className="hero__project-links">
              <a
                href="https://github.com/Andytule/chord-shift"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__project-link"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://andytule.github.io/chord-shift/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__project-link hero__project-link--live"
              >
                Live ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── PDF Viewer ── */}
      <div ref={pdfRef} className="hero__pdf-viewer">
        <div className="hero__pdf-header">
          <p className="hero__pdf-title">Resume</p>
          <a href="/andy_le_resume.pdf" download="Andy_Le_Resume.pdf" className="hero__resume-btn">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>
        <div className="hero__pdf-pages">
          <Document
            file="/andy_le_resume.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<div className="hero__pdf-loading">Loading resume…</div>}
            error={<div className="hero__pdf-loading">Could not load PDF.</div>}
          >
            {Array.from({ length: numPages }, (_, i) => (
              <Page
                key={i + 1}
                pageNumber={i + 1}
                width={Math.min(860, window.innerWidth - 64)}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            ))}
          </Document>
        </div>
      </div>
    </section>
  );
};

export default Hero;
