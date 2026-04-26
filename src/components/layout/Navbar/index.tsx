import React, { useState } from 'react';

import { NAV_ITEMS } from '@/data';
import { cn } from '@/lib/utils';

const NavLink: React.FC<{
  label: string;
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}> = ({ label, href, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={(e) => onClick(e, href)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: '0.8125rem',
        fontWeight: 400,
        letterSpacing: '-0.01em',
        color: hovered ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
        transition: 'color 0.15s ease, background 0.15s ease',
        padding: '0.3rem 0.65rem',
        borderRadius: '999px',
        background: hovered ? 'rgba(255,255,255,0.07)' : 'transparent',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
      }}
      className={cn('transition-all')}
    >
      {label}
    </a>
  );
};

const Navbar: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: '52px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(0,0,0,0.72)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: '1100px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.5rem',
        }}
      >
        {/* Brand */}
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.0625rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--color-text-primary)',
          }}
        >
          Andy<span style={{ color: 'var(--color-accent)' }}> Le</span>
        </span>

        {/* Nav links — hidden on mobile */}
        <nav
          className="hidden md:flex"
          style={{ gap: '2rem', alignItems: 'center' }}
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item) => {
            return (
              <NavLink
                key={item.label}
                label={item.label}
                href={item.href}
                onClick={handleNavClick}
              />
            );
          })}
        </nav>

        {/* Cat icon → Resume */}
        <button
          onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="View Resume"
          style={{ display: 'flex', alignItems: 'center', opacity: 0.9 }}
          className="transition-opacity hover:opacity-100"
        >
          <img
            src="/sleeping-cat.png"
            alt="Resume"
            style={{
              height: '3rem',
              width: '3rem',
              objectFit: 'contain',
              mixBlendMode: 'screen',
            }}
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
