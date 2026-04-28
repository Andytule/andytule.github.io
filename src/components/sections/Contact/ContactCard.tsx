import React, { ReactNode } from 'react';

interface ContactCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  cta: string;
  href: string;
  iconColor: string;
  iconBg: string;
  external?: boolean;
}

/**
 * ContactCard — individual contact method card (Email / Phone / Schedule).
 */
const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  label,
  value,
  cta,
  href,
  iconColor,
  iconBg,
  external,
}) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className="group flex flex-col gap-2 rounded-[1.25rem] border border-white/[0.07] bg-[var(--color-surface)] p-6 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(41,151,255,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
  >
    <div
      className="flex h-10 w-10 items-center justify-center rounded-[0.75rem] mb-1"
      style={{ background: iconBg, color: iconColor }}
    >
      {icon}
    </div>
    <p className="text-[0.625rem] font-semibold tracking-[0.1em] uppercase text-[#52525e]">
      {label}
    </p>
    <p className="font-[var(--font-display)] text-[0.9375rem] font-semibold text-[#f0f0f5] tracking-[-0.02em]">
      {value}
    </p>
    <span className="mt-auto pt-2 text-[0.8125rem] text-[#3b9eff] transition-opacity duration-150 group-hover:opacity-70">
      {cta}
    </span>
  </a>
);

export default ContactCard;
