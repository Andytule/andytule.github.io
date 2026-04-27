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
        color: hovered ? '#ffffff' : 'rgba(240,240,245,0.55)',
        transition: 'color 0.15s ease',
        padding: '0.3rem 0.5rem',
        background: 'transparent',
        textDecoration: 'none',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0,
      }}
      className={cn('transition-all')}
    >
      <span
        style={{
          display: 'block',
          paddingBottom: '1px',
          borderBottom: hovered ? '1px solid #3b9eff' : '1px solid transparent',
          transition: 'border-color 0.15s ease',
        }}
      >
        {label}
      </span>
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
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(22,22,27,0.82)',
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
        <nav
          className="hidden md:flex"
          style={{ gap: '0.25rem', alignItems: 'center' }}
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              onClick={handleNavClick}
            />
          ))}
        </nav>
        <img
          src="/sleeping-cat.png"
          alt=""
          aria-hidden="true"
          style={{
            height: '3rem',
            width: '3rem',
            objectFit: 'contain',
            opacity: 0.9,
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
