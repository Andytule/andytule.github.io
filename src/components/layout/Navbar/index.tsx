import React from 'react';

import { NAV_ITEMS } from '@/data';
import useActiveSection from '@/hooks/useActiveSection';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const active = useActiveSection();

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
            const sectionId = item.href.replace('#', '');
            const isActive = active === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                  transition: 'color 0.15s ease',
                  position: 'relative',
                }}
                className={cn('transition-colors', !isActive && 'hover:text-[#f0f0f5]')}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '1.5px',
                      background: 'var(--color-accent)',
                      borderRadius: '999px',
                    }}
                  />
                )}
              </a>
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
