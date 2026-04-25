import { Calendar, FileText, Mail } from 'lucide-react';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const cell =
  'relative overflow-hidden rounded-xl border border-white/7 bg-[#1c1c1f] transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:border-[#60a5fa]/30 hover:shadow-[0_0_20px_rgba(33,150,243,0.12),0_0_40px_rgba(96,180,255,0.06)]';

const socialTiles = [
  {
    area: 'cal',
    href: 'https://calendly.com/andytule321',
    label: 'Schedule',
    hoverBg: 'hover:bg-[#006bff]',
    icon: (
      <Calendar size={28} className="text-[#60a5fa] transition-colors group-hover:text-white" />
    ),
  },
  {
    area: 'email',
    href: 'mailto:Andytule321@gmail.com',
    label: 'Email',
    hoverBg: 'hover:bg-[#006bff]',
    icon: <Mail size={28} className="text-[#60a5fa] transition-colors group-hover:text-white" />,
  },
  {
    area: 'gh',
    href: 'https://github.com/Andytule',
    label: 'GitHub',
    hoverBg: 'hover:bg-[#006bff]',
    icon: (
      <svg
        className="h-7 w-7 text-[#60a5fa] transition-colors group-hover:text-white"
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
        className="h-7 w-7 text-[#0a66c2] transition-colors group-hover:text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
] as const;

const Hero: React.FC = () => (
  <section id="hero" className="mx-auto max-w-[1200px] px-6 py-16">
    {/* ── Mobile layout ── */}
    <div className="flex flex-col gap-3 md:hidden">
      <Card
        className={cn(
          cell,
          'flex flex-col bg-[#1c1c1f] min-h-[320px]',
          'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-[#3b82f6] before:to-transparent'
        )}
      >
        <div className="relative z-10 flex flex-col gap-3 p-5 pt-6">
          <Badge variant="default" className="w-fit">
            Software Engineer
          </Badge>
          <h1 className="font-display text-[clamp(2.5rem,4.5vw,4rem)] font-extrabold leading-none tracking-[-0.03em] text-[#f0f0f2]">
            Andy <span className="text-[#60a5fa]">Le</span>
          </h1>
          <p className="text-sm text-[#9a9aaa]">Hamilton, ON</p>
          <Badge variant="green" className="w-fit gap-1.5">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#4ade80]" />
            Open to opportunities
          </Badge>
        </div>
        <div className="pointer-events-none absolute left-[25%] right-0 top-[18%] bottom-0">
          <img
            src="/andy-avatar.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain object-bottom mix-blend-screen opacity-95"
          />
        </div>
      </Card>

      {/* Currently At — links to Dotmatics */}
      <a
        href="https://www.dotmatics.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          cell,
          'flex flex-col justify-center gap-2 p-5 no-underline',
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
            className="h-10 w-10 flex-shrink-0 rounded-[10px] object-cover"
            onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
          />
          <div>
            <p className="font-display text-[1.1rem] font-bold leading-tight text-[#f0f0f2] transition-colors group-hover:text-white">
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
      </a>

      {/* Chord-Shift — scrolls to Work/Projects section */}
      <Card
        className={cn(cell, 'group relative overflow-hidden cursor-pointer')}
        onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {/* Screenshot mockup — floated left, slightly inset, feels placed not pasted */}
        <div className="absolute left-4 top-4 bottom-4 w-[44%] overflow-hidden rounded-lg shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-[400ms] group-hover:scale-[1.03]">
          <img
            src="/chord-shift-preview.png"
            alt="Chord-Shift app"
            className="h-full w-full object-cover object-top"
          />
        </div>
        {/* Content — solid bg flush right */}
        <div
          className="absolute inset-y-0 right-0 flex w-[54%] flex-col justify-center gap-1.5 bg-[#1c1c1f] p-5"
          onClick={(e) => e.stopPropagation()}
        >
          <Badge variant="default" className="w-fit text-[0.55rem]">
            Featured
          </Badge>
          <p className="font-display text-base font-bold leading-tight text-[#f0f0f2]">
            Chord-Shift
          </p>
          <p className="text-[0.7rem] leading-snug text-[#9a9aaa]">
            Full-stack chord transposition
          </p>
          <div className="mt-1.5 flex flex-row items-center gap-2">
            <a
              href="https://github.com/Andytule/chord-shift"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-[#9a9aaa] transition-all hover:border-[#60a5fa]/40 hover:bg-[#60a5fa]/10 hover:text-[#60a5fa]"
            >
              <svg className="h-3 w-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://andytule.github.io/chord-shift/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-[#60a5fa]/30 bg-[#60a5fa]/10 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-[#60a5fa] transition-all hover:bg-[#60a5fa]/20 hover:border-[#60a5fa]/60"
            >
              <svg
                className="h-3 w-3 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live
            </a>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        {socialTiles.map(({ area, href, label, hoverBg, icon }) => (
          <a
            key={area}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className={cn(
              cell,
              'group flex aspect-square flex-col items-center justify-center gap-3 p-4 no-underline',
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
      </div>
    </div>

    {/* ── Desktop layout — all grid-area set via inline style to guarantee cross-browser rendering ── */}
    <div
      className="hidden md:grid gap-3"
      style={{
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: '180px 180px 180px',
        gridTemplateAreas:
          '"main main main main job    job   " ' +
          '"main main main main resume resume" ' +
          '"proj proj  cal  email gh     li   "',
      }}
    >
      {/* Identity */}
      <Card
        style={{ gridArea: 'main' }}
        className={cn(
          cell,
          'flex flex-col bg-[#1c1c1f] h-full',
          'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-[#3b82f6] before:to-transparent'
        )}
      >
        <div className="relative z-10 flex flex-col gap-3 p-5 pt-6">
          <Badge variant="default" className="w-fit">
            Software Engineer
          </Badge>
          <h1 className="font-display text-[clamp(2.5rem,4.5vw,4rem)] font-extrabold leading-none tracking-[-0.03em] text-[#f0f0f2]">
            Andy <span className="text-[#60a5fa]">Le</span>
          </h1>
          <p className="text-sm text-[#9a9aaa]">Hamilton, ON</p>
          <Badge variant="green" className="w-fit gap-1.5">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#4ade80]" />
            Open to opportunities
          </Badge>
        </div>
        <div className="pointer-events-none absolute left-[25%] right-0 top-[18%] bottom-0">
          <img
            src="/andy-avatar.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain object-bottom mix-blend-screen opacity-95"
          />
        </div>
      </Card>

      {/* Currently At — links to Dotmatics */}
      <a
        href="https://www.dotmatics.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ gridArea: 'job' }}
        className={cn(
          cell,
          'flex flex-col justify-center gap-2 p-5 h-full no-underline',
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
            className="h-10 w-10 flex-shrink-0 rounded-[10px] object-cover"
            onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
          />
          <div>
            <p className="font-display text-[1.1rem] font-bold leading-tight text-[#f0f0f2] transition-colors group-hover:text-white">
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
      </a>

      {/* Resume card — large FileText icon + bold label */}
      <a
        href="#resume"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
        }}
        style={{ gridArea: 'resume' }}
        className={cn(
          cell,
          'flex flex-col items-start justify-center gap-2 p-5 h-full no-underline',
          'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-[#3b82f6] before:to-transparent',
          'group hover:bg-[#006bff] hover:border-transparent hover:shadow-none'
        )}
      >
        <div className="flex items-center gap-3">
          <FileText
            size={48}
            className="text-[#60a5fa] transition-colors group-hover:text-white flex-shrink-0"
          />
          <p className="font-display text-2xl font-bold leading-tight text-[#f0f0f2] transition-colors group-hover:text-white">
            Resume
          </p>
        </div>
      </a>

      {/* Featured Project — Chord-Shift — scrolls to Work section */}
      <Card
        style={{ gridArea: 'proj' }}
        className={cn(cell, 'group relative overflow-hidden h-full cursor-pointer')}
        onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {/* Screenshot mockup — floated left, slightly inset, feels placed not pasted */}
        <div className="absolute left-4 top-4 bottom-4 w-[44%] overflow-hidden rounded-lg shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-[400ms] group-hover:scale-[1.03]">
          <img
            src="/chord-shift-preview.png"
            alt="Chord-Shift app"
            className="h-full w-full object-cover object-top"
          />
        </div>
        {/* Content — solid bg flush right */}
        <div
          className="absolute inset-y-0 right-0 flex w-[54%] flex-col justify-center gap-1.5 bg-[#1c1c1f] p-5"
          onClick={(e) => e.stopPropagation()}
        >
          <Badge variant="default" className="w-fit text-[0.55rem]">
            Featured
          </Badge>
          <p className="font-display text-base font-bold leading-tight text-[#f0f0f2]">
            Chord-Shift
          </p>
          <p className="text-[0.7rem] leading-snug text-[#9a9aaa]">
            Full-stack chord transposition
          </p>
          <div className="mt-1.5 flex flex-row items-center gap-2">
            <a
              href="https://github.com/Andytule/chord-shift"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-[#9a9aaa] transition-all hover:border-[#60a5fa]/40 hover:bg-[#60a5fa]/10 hover:text-[#60a5fa]"
            >
              <svg className="h-3 w-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://andytule.github.io/chord-shift/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-[#60a5fa]/30 bg-[#60a5fa]/10 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-[#60a5fa] transition-all hover:bg-[#60a5fa]/20 hover:border-[#60a5fa]/60"
            >
              <svg
                className="h-3 w-3 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live
            </a>
          </div>
        </div>
      </Card>

      {/* Social tiles */}
      {socialTiles.map(({ area, href, label, hoverBg, icon }) => (
        <a
          key={area}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          style={{ gridArea: area }}
          className={cn(
            cell,
            'group flex flex-col items-center justify-center gap-3 p-4 no-underline h-full',
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
    </div>
  </section>
);

export default Hero;
