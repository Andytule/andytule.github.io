import React from 'react';

import { Separator } from '@/components/ui/separator';

const FOOTER_LINKS = [
  { label: 'Source', href: 'https://github.com/andytule' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/andy-tu-le' },
  { label: 'Journal', href: '#' },
  { label: 'Archive', href: '#' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/7 bg-[#080809]">
      <div className="mx-auto max-w-[1200px] px-6 py-8">
        <Separator className="mb-6" />
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <span className="font-display text-sm font-extrabold tracking-[0.06em] text-[#f0f0f2]">
            ANDY<span className="text-[#60a5fa]">_LE</span>
          </span>

          <p className="text-[0.6rem] font-semibold uppercase tracking-widest text-[#4a4a55]">
            © {year} Technical Elegance. Crafted with zen precision.
          </p>

          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[0.6rem] font-semibold uppercase tracking-widest text-[#4a4a55] transition-colors hover:text-[#f0f0f2]"
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
