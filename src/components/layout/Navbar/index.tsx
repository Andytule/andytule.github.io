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
      className={cn(
        'sticky top-0 z-50 h-16',
        'border-b border-white/7',
        'bg-[#080809]/85 backdrop-blur-xl'
      )}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        {/* Brand */}
        <span className="font-display text-lg font-extrabold tracking-[0.06em] text-[#f0f0f2]">
          ANDY<span className="text-[#60a5fa]">_LE</span>
        </span>

        {/* Nav links */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = active === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  'relative text-[0.72rem] font-semibold uppercase tracking-widest transition-colors duration-200',
                  'after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-[#60a5fa] after:transition-all after:duration-300',
                  isActive
                    ? 'text-[#f0f0f2] after:w-full'
                    : 'text-[#4a4a55] after:w-0 hover:text-[#f0f0f2] hover:after:w-full'
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Cat icon — scrolls to Resume section, mix-blend-screen to drop the black bg */}
        <button
          onClick={() => {
            document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="View Resume"
          className="group flex items-center justify-center transition-opacity duration-200 hover:opacity-75"
        >
          <img
            src="/sleeping-cat.png"
            alt="Resume"
            className="h-9 w-9 object-contain mix-blend-screen transition-transform duration-300 group-hover:scale-110"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
