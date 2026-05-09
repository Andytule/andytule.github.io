import React from 'react';

const FOOTER_LINKS: {
  label: string;
  href: string;
}[] = [
  { label: 'GitHub', href: 'https://github.com/andytule' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/andy-tu-le' },
];

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/[0.10] backdrop-blur-md backdrop-saturate-[180%] backdrop-brightness-[0.85]"
      style={{ background: 'rgba(255, 255, 255, 0.05)' }}
    >
      <div className="mx-auto max-w-[1100px] px-6 py-10 flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="font-[var(--font-display)] text-[0.9375rem] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
            Andy<span className="text-[var(--color-accent)]"> Le</span>
          </span>

          <p className="text-xs text-[var(--color-text-tertiary)] tracking-[0.01em]">
            © {year} · Built with care.
          </p>

          <nav className="flex gap-6" aria-label="Footer navigation">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[0.8125rem] text-[var(--color-text-tertiary)] transition-colors duration-150 hover:text-[#f0f0f5]"
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
