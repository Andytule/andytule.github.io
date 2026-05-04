import type { SkillKey } from '@/data/skillCatalog';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  category: string;
  items: SkillKey[];
}

export interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  logo?: string;
  url?: string;
  description: string;
  tags: SkillKey[];
  isCurrent?: boolean;
}

export interface Project {
  title: string;
  shortDescription?: string;
  description: string;
  tags: SkillKey[];
  demoUrl?: string;
  sourceUrl?: string;
  image?: string;
  logo?: string;
  featured?: boolean;
}

export interface EducationEntry {
  period: string;
  degree: string;
  field: string;
  school: string;
  logo: string;
  url: string;
  honourRoll?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ContactItem {
  iconName: 'mail' | 'linkedin' | 'phone' | 'calendar';
  value: string;
  cta: string;
  href: string;
  external?: boolean;
}

export type SkillIconSource =
  | { cdn: 'devicon'; slug: string; variant: string }
  | { cdn: 'simpleicons'; slug: string; color: string }
  | { cdn: 'inline'; svg: string };

export interface SkillDef {
  name: string;
  url: string;
  icon: SkillIconSource;
}
