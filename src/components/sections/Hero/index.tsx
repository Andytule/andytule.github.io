import { Calendar, FileText, Mail } from 'lucide-react';
import React, { useState } from 'react';

/* ── Card base style ───────────────────────────────────────────────────── */
const cardBase: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '1.5rem',
  border: '1px solid rgba(255,255,255,0.1)',
  background: '#1c1c21',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
};

/* ── Hover card (stateful, works reliably with inline styles) ───────────── */
const HoverCard: React.FC<{
  as?: 'div' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ as = 'div', href, target, rel, onClick, style, hoverStyle, children }) => {
  const [hovered, setHovered] = useState(false);
  const combined: React.CSSProperties = {
    ...cardBase,
    ...style,
    ...(hovered ? hoverStyle : {}),
  };
  if (as === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        style={{ ...combined, textDecoration: 'none', display: 'flex' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </a>
    );
  }
  return (
    <div
      style={{ ...combined, cursor: 'pointer' }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
};

/* ── Social tile (always square, stateful hover) ────────────────────────── */
type IconFC = React.FC<{ size?: number; color?: string }>;

const CalIcon: IconFC = ({ size = 28, color = '#3b9eff' }) => (
  <Calendar size={size} color={color} />
);
const MailIcon: IconFC = ({ size = 28, color = '#3b9eff' }) => <Mail size={size} color={color} />;
const GHIcon: IconFC = ({ size = 28, color = '#3b9eff' }) => (
  <svg
    style={{ width: size, height: size, color, display: 'block' }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LIIcon: IconFC = ({ size = 28, color = '#3b9eff' }) => (
  <svg
    style={{ width: size, height: size, color, display: 'block' }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialTiles = [
  { area: 'cal', href: 'https://calendly.com/andytule321', label: 'Schedule', Icon: CalIcon },
  { area: 'email', href: 'mailto:Andytule321@gmail.com', label: 'Email', Icon: MailIcon },
  { area: 'gh', href: 'https://github.com/Andytule', label: 'GitHub', Icon: GHIcon },
  { area: 'li', href: 'https://linkedin.com/in/andy-tu-le', label: 'LinkedIn', Icon: LIIcon },
] as const;

const SocialTile: React.FC<{
  href: string;
  label: string;
  Icon: IconFC;
  gridArea?: string;
  mobile?: boolean;
  aspectRatio?: boolean;
}> = ({ href, label, Icon, gridArea, mobile, aspectRatio }) => {
  const [hovered, setHovered] = useState(false);
  const iconSize = mobile ? 36 : 28;

  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={{
        ...cardBase,
        gridArea: gridArea ?? undefined,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: mobile ? '0.875rem' : '0.625rem',
        textDecoration: 'none',
        width: '100%',
        ...(aspectRatio ? { aspectRatio: '1 / 1' } : {}),
        background: hovered ? '#1a7fe8' : '#1c1c21',
        borderColor: hovered ? 'transparent' : 'rgba(255,255,255,0.1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          display: 'flex',
          transition: 'transform 0.2s ease',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <Icon size={iconSize} color={hovered ? 'white' : '#3b9eff'} />
      </span>
      <span
        style={{
          fontSize: mobile ? '0.6875rem' : '0.5625rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: hovered ? 'rgba(255,255,255,0.5)' : '#52525e',
          transition: 'color 0.2s ease',
        }}
      >
        {label}
      </span>
    </a>
  );
};

/* ── Blue hover style shared by Dotmatics, Resume cards ─────────────────── */
const blueHover: React.CSSProperties = {
  background: '#1a7fe8',
  borderColor: 'transparent',
};

const Hero: React.FC = () => {
  const gridRef = React.useRef<HTMLDivElement>(null);
  const [rowHeight, setRowHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const measure = () => {
      // Each social tile is 1fr of 6 columns with gap-3 (12px gaps)
      const totalGap = 5 * 12; // 5 gaps between 6 columns
      const colWidth = (el.offsetWidth - totalGap) / 6;
      setRowHeight(Math.round(colWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      id="hero"
      style={{ margin: '0 auto', maxWidth: '1100px', padding: '4rem 1.5rem 2rem' }}
    >
      {/* ══ Mobile layout ══════════════════════════════════════════════════════ */}
      <div className="flex flex-col gap-3 md:hidden">
        {/* Identity */}
        <div style={{ ...cardBase, minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
            }}
          >
            <span className="pill pill-accent" style={{ width: 'fit-content' }}>
              Software Engineer
            </span>
            <h1
              style={{
                fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                fontWeight: 700,
                color: '#f0f0f5',
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              Andy <span style={{ color: '#3b9eff' }}>Le</span>
            </h1>
            <p style={{ fontSize: '0.9375rem', color: '#8a8a96' }}>Hamilton, ON</p>
            <span className="pill pill-green" style={{ width: 'fit-content', gap: '0.4rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  height: '7px',
                  width: '7px',
                  borderRadius: '50%',
                  background: '#30d158',
                  animation: 'pulse 2s infinite',
                }}
              />
              Open to opportunities
            </span>
          </div>
          <div className="pointer-events-none absolute left-[30%] right-0 top-[15%] bottom-0">
            <img
              src="/andy-avatar.png"
              alt=""
              aria-hidden="true"
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'contain',
                objectPosition: 'bottom',
                mixBlendMode: 'screen',
                opacity: 0.95,
              }}
            />
          </div>
        </div>

        {/* Dotmatics */}
        <HoverCard
          as="a"
          href="https://www.dotmatics.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '0.625rem',
            padding: '1.5rem',
          }}
          hoverStyle={blueHover}
        >
          <DotmaticsContent hovered={false} />
        </HoverCard>

        {/* Chord-Shift — full card clicks to projects */}
        <HoverCard
          as="a"
          href="#portfolio"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{ minHeight: '140px' }}
          hoverStyle={{
            background: '#1a7fe8',
            borderColor: 'transparent',
          }}
        >
          <ChordShiftContent />
        </HoverCard>

        {/* Resume — mobile */}
        <HoverCard
          as="a"
          href="#resume"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{ alignItems: 'center', gap: '0.875rem', padding: '1.25rem 1.5rem' }}
          hoverStyle={blueHover}
        >
          <ResumeContent hovered={false} />
        </HoverCard>

        {/* Social tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {socialTiles.map((t) => (
            <SocialTile key={t.area} {...t} mobile aspectRatio />
          ))}
        </div>
      </div>

      {/* ══ Desktop grid ═══════════════════════════════════════════════════════ */}
      <div
        ref={gridRef}
        className="hidden md:grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateRows: rowHeight ? `repeat(3, ${rowHeight}px)` : undefined,
          gridTemplateAreas: [
            '"main main main main job    job   "',
            '"main main main main resume resume"',
            '"proj proj  cal  email gh     li   "',
          ].join(' '),
        }}
      >
        {/* Identity */}
        <div style={{ ...cardBase, gridArea: 'main', display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <span className="pill pill-accent" style={{ width: 'fit-content' }}>
              Software Engineer
            </span>
            <h1
              style={{
                fontSize: 'clamp(3rem, 4.5vw, 4.5rem)',
                fontWeight: 700,
                color: '#f0f0f5',
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              Andy <span style={{ color: '#3b9eff' }}>Le</span>
            </h1>
            <p style={{ fontSize: '0.9375rem', color: '#8a8a96' }}>Hamilton, ON</p>
            <span className="pill pill-green" style={{ width: 'fit-content', gap: '0.4rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  height: '7px',
                  width: '7px',
                  borderRadius: '50%',
                  background: '#30d158',
                }}
              />
              Open to opportunities
            </span>
          </div>
          <div
            className="pointer-events-none absolute"
            style={{ left: '28%', right: 0, top: '12%', bottom: 0 }}
          >
            <img
              src="/andy-avatar.png"
              alt=""
              aria-hidden="true"
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'contain',
                objectPosition: 'bottom',
                mixBlendMode: 'screen',
                opacity: 0.95,
              }}
            />
          </div>
        </div>

        {/* Dotmatics */}
        <StatefulBlueCard
          as="a"
          href="https://www.dotmatics.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            gridArea: 'job',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '0.625rem',
            padding: '1.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.625rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'inherit',
            }}
          >
            Currently At
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img
              src="/dotmatics-logo.png"
              alt="Dotmatics"
              style={{
                height: '2.75rem',
                width: '2.75rem',
                borderRadius: '0.75rem',
                objectFit: 'cover',
                flexShrink: 0,
              }}
              onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
            />
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                Software Engineer
              </p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.125rem', opacity: 0.85 }}>
                Dotmatics
              </p>
            </div>
          </div>
          <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>Boston, MA · Oct 2024–Present</p>
        </StatefulBlueCard>

        {/* Resume */}
        <ResumeCard />

        {/* Chord-Shift — full card clicks to Projects */}
        <ChordShiftCard />

        {/* Social tiles — square via aspectRatio within the grid cell */}
        {socialTiles.map((t) => (
          <SocialTile key={t.area} {...t} gridArea={t.area} />
        ))}
      </div>
    </section>
  );
};

/* ── Shared sub-components ──────────────────────────────────────────────── */

/** Blue-on-hover card that keeps children text white when hovered */
const StatefulBlueCard: React.FC<{
  as?: 'a' | 'div';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ as = 'a', href, target, rel, onClick, style, children }) => {
  const [hovered, setHovered] = useState(false);

  const base: React.CSSProperties = {
    ...cardBase,
    display: 'flex',
    textDecoration: 'none',
    color: hovered ? '#ffffff' : '#f0f0f5',
    background: hovered ? '#1a7fe8' : '#1c1c21',
    borderColor: hovered ? 'transparent' : 'rgba(255,255,255,0.1)',
    ...style,
  };

  const events = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  if (as === 'a') {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} style={base} {...events}>
        {children}
      </a>
    );
  }
  return (
    <div style={{ ...base, cursor: 'pointer' }} onClick={onClick} {...events}>
      {children}
    </div>
  );
};

const DotmaticsContent: React.FC<{ hovered: boolean }> = () => (
  <>
    <p
      style={{
        fontSize: '0.625rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#3b9eff',
      }}
    >
      Currently At
    </p>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <img
        src="/dotmatics-logo.png"
        alt="Dotmatics"
        style={{
          height: '2.5rem',
          width: '2.5rem',
          borderRadius: '0.625rem',
          objectFit: 'cover',
          flexShrink: 0,
        }}
        onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
      />
      <div>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.0625rem',
            fontWeight: 600,
            color: '#f0f0f5',
            lineHeight: 1.2,
          }}
        >
          Software Engineer
        </p>
        <p style={{ fontSize: '0.875rem', color: '#3b9eff', marginTop: '0.125rem' }}>Dotmatics</p>
      </div>
    </div>
    <p style={{ fontSize: '0.75rem', color: '#52525e' }}>Boston, MA · Oct 2024–Present</p>
  </>
);

const ResumeContent: React.FC<{ hovered: boolean }> = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
    <FileText size={28} style={{ color: '#3b9eff', flexShrink: 0 }} />
    <p
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.125rem',
        fontWeight: 700,
        color: '#f0f0f5',
        letterSpacing: '-0.03em',
      }}
    >
      Resume
    </p>
  </div>
);

const ChordShiftContent: React.FC = () => (
  <>
    <div
      style={{
        position: 'absolute',
        left: '1rem',
        top: '1rem',
        bottom: '1rem',
        width: '44%',
        overflow: 'hidden',
        borderRadius: '0.75rem',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.06)',
      }}
    >
      <img
        src="/chord-shift-preview.png"
        alt="Chord-Shift"
        style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'top' }}
      />
    </div>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        left: '46%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '0.5rem',
        background: 'transparent',
        padding: '1.25rem',
      }}
    >
      <span className="pill pill-accent" style={{ width: 'fit-content', fontSize: '0.5625rem' }}>
        Featured
      </span>
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.9375rem',
          fontWeight: 600,
          color: '#f0f0f5',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
        }}
      >
        Chord-Shift
      </p>
      <p style={{ fontSize: '0.6875rem', color: '#8a8a96', lineHeight: 1.4 }}>
        Full-stack chord transposition
      </p>
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginTop: '0.25rem',
          flexWrap: 'wrap',
          pointerEvents: 'auto',
        }}
      >
        <a
          href="https://github.com/Andytule/chord-shift"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="pill hover:border-[#3b9eff]/40 hover:text-[#3b9eff]"
          style={{
            fontSize: '0.5625rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          GitHub
        </a>
        <a
          href="https://chord-shift.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="pill pill-green"
          style={{
            fontSize: '0.5625rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Live ↗
        </a>
      </div>
    </div>
  </>
);

const ResumeCard: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#resume"
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
      }}
      style={{
        ...cardBase,
        gridArea: 'resume',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '0.625rem',
        padding: '1.5rem',
        textDecoration: 'none',
        color: hovered ? '#ffffff' : '#f0f0f5',
        background: hovered ? '#1a7fe8' : '#1c1c21',
        borderColor: hovered ? 'transparent' : 'rgba(255,255,255,0.1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <FileText
          size={40}
          style={{
            flexShrink: 0,
            color: hovered ? '#ffffff' : '#3b9eff',
            transition: 'color 0.2s ease',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}
        >
          Resume
        </p>
      </div>
    </a>
  );
};

const ChordShiftCard: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...cardBase,
        gridArea: 'proj',
        background: hovered ? '#1a7fe8' : '#1c1c21',
        borderColor: hovered ? 'transparent' : 'rgba(255,255,255,0.1)',
        boxShadow: hovered
          ? '0 0 0 1px rgba(59,158,255,0.15), 0 20px 60px rgba(0,0,0,0.5)'
          : 'none',
        cursor: 'pointer',
        transition: 'background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
      }}
      onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: 'absolute',
          left: '1rem',
          top: '1rem',
          bottom: '1rem',
          width: '42%',
          overflow: 'hidden',
          borderRadius: '0.75rem',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.06)',
          transition: 'transform 0.3s ease',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
        }}
      >
        <img
          src="/chord-shift-preview.png"
          alt="Chord-Shift"
          style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: '44%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '0.5rem',
          background: 'transparent',
          padding: '1.25rem',
        }}
      >
        <span className="pill pill-accent" style={{ width: 'fit-content', fontSize: '0.5625rem' }}>
          Featured
        </span>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            fontWeight: 600,
            color: hovered ? '#ffffff' : '#f0f0f5',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            transition: 'color 0.2s ease',
          }}
        >
          Chord-Shift
        </p>
        <p
          style={{
            fontSize: '0.6875rem',
            color: hovered ? 'rgba(255,255,255,0.7)' : '#8a8a96',
            lineHeight: 1.4,
            transition: 'color 0.2s ease',
          }}
        >
          Full-stack chord transposition
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/Andytule/chord-shift"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="pill hover:border-[#3b9eff]/40 hover:text-[#3b9eff]"
            style={{
              fontSize: '0.5625rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            GitHub
          </a>
          <a
            href="https://chord-shift.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="pill pill-green"
            style={{
              fontSize: '0.5625rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Live ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
