import React, { MouseEvent } from 'react';

import { NAV_ITEMS } from '@/data';

const NavLink: React.FC<{
  label: string;
  href: string;
  onClick: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
}> = ({ label, href, onClick }) => (
  <a
    href={href}
    onClick={(e) => onClick(e, href)}
    className="group relative inline-flex flex-col items-center px-2 py-1 no-underline transition-colors duration-200"
    style={{ color: 'rgba(235,235,245,0.28)' }}
    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(235,235,245,0.92)')}
    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(235,235,245,0.28)')}
  >
    <span className="relative block pb-px text-[0.8125rem] font-normal tracking-[-0.01em]">
      {label}
      <span className="absolute bottom-0 left-0 right-0 h-px origin-center scale-x-0 rounded-full bg-[var(--color-accent)] transition-transform duration-200 group-hover:scale-x-100" />
    </span>
  </a>
);

const Navbar: React.FC = () => {
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 h-[52px] border-b border-white/[0.07] bg-[rgba(22,22,27,0.85)] backdrop-blur-xl backdrop-saturate-[180%]">
      <div className="mx-auto flex h-full max-w-[1100px] items-center justify-between px-6">
        <span className="font-[var(--font-display)] text-[1.0625rem] font-bold tracking-[-0.02em] text-[var(--color-text-primary)]">
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
        />
      </div>
    </header>
  );
};

export default Navbar;
