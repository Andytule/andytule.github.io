import type { SkillKey } from '@/data/skillCatalog';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  category: string;
  /** Ordered list of SkillKey references into SKILL_CATALOG */
  items: SkillKey[];
}

export interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  logo?: string;
  url?: string;
  description: string;
  /** SkillKey references — resolved to SkillDef at render time */
  tags: SkillKey[];
  isCurrent?: boolean;
}

export interface Project {
  title: string;
  description: string;
  /** SkillKey references — resolved to SkillDef at render time */
  tags: SkillKey[];
  demoUrl?: string;
  sourceUrl?: string;
  image?: string;
  logo?: string;
  featured?: boolean;
}

export interface Education {
  school: string;
  schoolLink: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
