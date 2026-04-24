import React from 'react';

const FOOTER_LINKS = [
  { label: 'Source', href: 'https://github.com/andytule' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/andytule' },
  { label: 'Journal', href: '#' },
  { label: 'Archive', href: '#' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__brand">
          SAKURA<span>_CORE</span>
        </span>

        <span className="footer__copy">
          © {year} Technical Elegance. Crafted with zen precision.
        </span>

        <nav className="footer__links" aria-label="Footer navigation">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer__link"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
