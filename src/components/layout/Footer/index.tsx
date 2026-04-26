import React from 'react';

const FOOTER_LINKS = [
  { label: 'GitHub', href: 'https://github.com/andytule' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/andy-tu-le' },
  { label: 'Journal', href: '#' },
  { label: 'Archive', href: '#' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'var(--color-surface-lowest)',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: '1100px',
          padding: '2.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9375rem',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
            }}
          >
            Andy<span style={{ color: 'var(--color-accent)' }}> Le</span>
          </span>

          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-tertiary)',
              letterSpacing: '0.01em',
            }}
          >
            © {year} · Built with care.
          </p>

          <nav style={{ display: 'flex', gap: '1.5rem' }} aria-label="Footer navigation">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-tertiary)',
                  transition: 'color 0.15s ease',
                }}
                className="hover:text-[#f0f0f5]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
