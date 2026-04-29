import React, { MouseEvent } from 'react';

import type { NavItem } from '@/types';

interface NavLinkProps extends NavItem {
  onClick: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ label, href, onClick }) => (
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

export default NavLink;
