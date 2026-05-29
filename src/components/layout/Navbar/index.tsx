import React, { MouseEvent } from 'react';

import type { NavItem } from '@/types';

import NavLink from './NavLink';

const NAV_ITEMS: NavItem[] = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#timeline' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '#resume' },
];

const Navbar: React.FC = () => {
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 h-[60px]">
      {/* Frosted bar matching dark surface */}
      <div
        className="absolute inset-0 border-b border-white/[0.06]"
        style={{ background: 'rgba(18,21,30,0.85)', backdropFilter: 'blur(16px)' }}
      />
      <div className="relative mx-auto flex h-full max-w-[1200px] items-center justify-between px-8">
        <span className="font-[var(--font-display)] text-[1.1875rem] font-bold tracking-[-0.02em] text-[var(--color-text-primary)]">
          Andy<span className="text-[var(--color-accent)]"> Le</span>
        </span>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
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
          className="h-12 w-12 object-contain opacity-90"
          loading="eager"
          fetchPriority="high"
          width={48}
          height={48}
        />
      </div>
    </header>
  );
};

export default Navbar;
