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
      className={cn(
        'text-[0.8125rem] font-normal tracking-[-0.01em] transition-colors duration-150',
        'inline-flex flex-col items-center gap-0 px-2 py-1 bg-transparent no-underline',
        hovered ? 'text-white' : 'text-[rgba(240,240,245,0.55)]'
      )}
    >
      <span
        className="block pb-px transition-colors duration-150"
        style={{
          borderBottom: hovered ? '1px solid #3b9eff' : '1px solid transparent',
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
    <header className="sticky top-0 z-50 h-[52px] border-b border-white/[0.07] bg-[rgba(22,22,27,0.82)] backdrop-saturate-[180%] backdrop-blur-[20px]">
      <div className="mx-auto max-w-[1100px] h-full flex items-center justify-between px-6">
        <span className="font-[var(--font-display)] text-[1.0625rem] font-bold tracking-[-0.02em] text-[var(--color-text-primary)]">
          Andy<span className="text-[var(--color-accent)]"> Le</span>
        </span>
        <nav className="hidden md:flex gap-1 items-center" aria-label="Primary navigation">
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
        />
      </div>
    </header>
  );
};

export default Navbar;
