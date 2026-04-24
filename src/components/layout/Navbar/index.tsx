import React from 'react';

import { NAV_ITEMS } from '@/data';
import useActiveSection from '@/hooks/useActiveSection';

const Navbar: React.FC = () => {
  const active = useActiveSection();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id: string = href.replace('#', '');
    const el: HTMLElement | null = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <span className="navbar__brand">
          SAKURA<span>_CORE</span>
        </span>

        <nav className="navbar__nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive =
              active === sectionId || (active === 'hero' && sectionId === 'portfolio');
            return (
              <a
                key={item.label}
                href={item.href}
                className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="navbar__actions">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__resume"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
