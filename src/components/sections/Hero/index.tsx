import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { Calendar, Download, Eye, Mail } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Shared hover treatment for every bento cell
const cell =
  'relative overflow-hidden rounded-xl border border-white/7 bg-[#1c1c1f] transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:border-[#60a5fa]/30 hover:shadow-[0_0_20px_rgba(33,150,243,0.12),0_0_40px_rgba(96,180,255,0.06)]';

const Hero: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const pdfRef = useRef<HTMLDivElement>(null);
  const handleViewPdf = () =>
    pdfRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="hero" className="hero">
      {/*
       * 6-col bento, 3 rows of square units on desktop.
       * Grid areas:
       *   "main  main  main  main  job    job  "  row 1
       *   "main  main  main  main  resume resume"  row 2
       *   "cal   email gh    li    proj   proj  "  row 3
       */}
      <div
        className={cn(
          'grid gap-3',
          'grid-cols-2 [grid-template-areas:"main_main""job_job""resume_resume""proj_proj""cal_email""gh_li"]',
          'md:grid-cols-[repeat(6,1fr)] md:[grid-template-rows:repeat(3,calc((min(100vw,1200px)-2*max(1.5rem,4vw)-5*12px)/6))] md:[grid-template-areas:"main_main_main_main_job_job""main_main_main_main_resume_resume""cal_email_gh_li_proj_proj"]'
        )}
      >
        {/* ── 1. Identity (4×2) ──────────────────────────────────────────── */}
        <Card
          className={cn(
            cell,
            'flex flex-col bg-[#141416] [grid-area:main] min-h-[320px] md:min-h-0',
            'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-[#3b82f6] before:to-transparent'
          )}
        >
          <div className="relative z-10 flex flex-col gap-3 p-5 pt-6">
            <Badge variant="default" className="w-fit">
              Software Engineer
            </Badge>
            <h1 className="font-[Manrope,Helvetica_Neue,sans-serif] text-[clamp(2.5rem,4.5vw,4rem)] font-extrabold leading-none tracking-[-0.03em] text-[#f0f0f2]">
              Andy <span className="text-[#60a5fa]">Le</span>
            </h1>
            <p className="text-sm text-[#9a9aaa]">Hamilton, ON</p>
            <Badge variant="green" className="w-fit gap-1.5">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#4ade80]" />
              Open to opportunities
            </Badge>
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-[18%] bottom-0">
            <img
              src="/andy-avatar.png"
              alt=""
              className="h-full w-full object-contain object-bottom mix-blend-screen opacity-95"
            />
          </div>
        </Card>

        {/* ── 2. Currently At (2×1) ──────────────────────────────────────── */}
        <Card
          className={cn(
            cell,
            'flex flex-col justify-center gap-2 p-5 [grid-area:job]',
            'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-[#3b82f6] before:to-transparent',
            'group hover:bg-[#006bff] hover:border-transparent hover:shadow-none'
          )}
        >
          <p className="text-[0.6rem] font-semibold uppercase tracking-widest text-[#60a5fa] transition-colors group-hover:text-white/70">
            Currently At
          </p>
          <div className="flex items-center gap-3">
            <img
              src="/dotmatics-logo.png"
              alt="Dotmatics"
              className="h-10 w-10 flex-shrink-0 rounded-[10px] bg-[#242428] object-cover transition-all group-hover:outline group-hover:outline-1 group-hover:outline-white/20"
              onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
            />
            <div>
              <p className="font-[Manrope,Helvetica_Neue,sans-serif] text-[1.1rem] font-bold leading-tight text-[#f0f0f2] transition-colors group-hover:text-white">
                Software Engineer
              </p>
              <p className="text-sm font-semibold text-[#60a5fa] transition-colors group-hover:text-white/80">
                Dotmatics
              </p>
            </div>
          </div>
          <p className="text-xs text-[#4a4a55] transition-colors group-hover:text-white/60">
            📍 Boston, MA · Oct 2024–Present
          </p>
        </Card>

        {/* ── 3. Resume (2×1) ────────────────────────────────────────────── */}
        <Card
          className={cn(
            cell,
            'flex flex-col justify-between p-5 [grid-area:resume]',
            'group hover:bg-[#006bff] hover:border-transparent hover:shadow-none'
          )}
        >
          <div className="flex flex-1 items-center gap-3">
            <svg
              className="h-9 w-9 flex-shrink-0 text-[#60a5fa] transition-colors group-hover:text-white"
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
            </svg>
            <p className="font-[Manrope,Helvetica_Neue,sans-serif] text-[2.25rem] font-extrabold leading-none text-[#f0f0f2] transition-colors group-hover:text-white">
              Resume
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleViewPdf}
              className="transition-colors group-hover:border-white/40 group-hover:text-white group-hover:hover:bg-white/15"
            >
              <Eye size={12} /> View
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="transition-colors group-hover:border-white/40 group-hover:text-white group-hover:hover:bg-white/15"
            >
              <a href="/andy_le_resume.pdf" download="Andy_Le_Resume.pdf">
                <Download size={12} /> Download
              </a>
            </Button>
          </div>
        </Card>

        {/* ── 4–7. Social squares (1×1) ──────────────────────────────────── */}
        {(
          [
            {
              area: 'cal',
              href: 'https://calendly.com/andytule321',
              label: 'Calendly',
              hoverBg: 'hover:bg-[#006bff]',
              icon: (
                <Calendar
                  size={28}
                  className="text-[#60a5fa] group-hover:text-white transition-colors"
                />
              ),
            },
            {
              area: 'email',
              href: 'mailto:Andytule321@gmail.com',
              label: 'Email',
              hoverBg: 'hover:bg-[#006bff]',
              icon: (
                <Mail
                  size={28}
                  className="text-[#60a5fa] group-hover:text-white transition-colors"
                />
              ),
            },
            {
              area: 'gh',
              href: 'https://github.com/Andytule',
              label: 'GitHub',
              hoverBg: 'hover:bg-[#006bff]',
              icon: (
                <svg
                  className="h-7 w-7 text-[#f0f0f2] group-hover:text-white transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              ),
            },
            {
              area: 'li',
              href: 'https://linkedin.com/in/andy-tu-le',
              label: 'LinkedIn',
              hoverBg: 'hover:bg-[#0a66c2]',
              icon: (
                <svg
                  className="h-7 w-7 text-[#0a66c2] group-hover:text-white transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
          ] as const
        ).map(({ area, href, label, hoverBg, icon }) => (
          <a
            key={area}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            style={{ gridArea: area }}
            className={cn(
              cell,
              'group flex aspect-square flex-col items-center justify-center gap-3 p-4 no-underline md:aspect-auto',
              hoverBg,
              'hover:border-transparent hover:shadow-none'
            )}
          >
            <span className="transition-transform duration-200 group-hover:scale-110">{icon}</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-[#4a4a55] transition-colors group-hover:text-white/65">
              {label}
            </span>
          </a>
        ))}

        {/* ── 8. Featured Project (2×1) ──────────────────────────────────── */}
        <Card className={cn(cell, 'group flex flex-row overflow-hidden [grid-area:proj]')}>
          <div className="relative min-w-0 flex-1 overflow-hidden">
            <img
              src="/chord-shift-preview.png"
              alt="Chord-Shift"
              className="h-full w-full object-cover object-top transition-transform duration-[400ms] group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1c1c1f]/95" />
          </div>
          <div className="flex w-[155px] flex-shrink-0 flex-col justify-center gap-1.5 bg-[#1c1c1f] p-4">
            <Badge variant="default" className="w-fit text-[0.55rem]">
              Featured
            </Badge>
            <p className="font-[Manrope,Helvetica_Neue,sans-serif] text-base font-bold leading-tight text-[#f0f0f2]">
              Chord-Shift
            </p>
            <p className="text-[0.7rem] leading-snug text-[#9a9aaa]">
              Full-stack chord transposition tool
            </p>
            <div className="mt-1.5 flex flex-wrap gap-3">
              <a
                href="https://github.com/Andytule/chord-shift"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[0.6rem] font-semibold uppercase tracking-widest text-[#4a4a55] transition-colors hover:text-[#60a5fa]"
              >
                <svg className="h-[11px] w-[11px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>{' '}
                GitHub
              </a>
              <a
                href="https://chord-shift.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.6rem] font-semibold uppercase tracking-widest text-[#60a5fa] transition-opacity hover:opacity-75"
              >
                Live ↗
              </a>
            </div>
          </div>
        </Card>
      </div>

      {/* ── PDF Viewer ───────────────────────────────────────────────────────── */}
      <div ref={pdfRef} className="hero__pdf-viewer">
        <div className="hero__pdf-header">
          <p className="hero__pdf-title">Resume</p>
          <Button variant="outline" size="sm" asChild>
            <a href="/andy_le_resume.pdf" download="Andy_Le_Resume.pdf">
              <Download size={12} /> Download PDF
            </a>
          </Button>
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
                renderTextLayer
                renderAnnotationLayer
              />
            ))}
          </Document>
        </div>
      </div>
    </section>
  );
};

export default Hero;
