export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
  image?: string;
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
