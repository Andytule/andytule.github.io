import type { NavItem, Project, Skill, SocialLink, TimelineEntry } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'Node.js', 'Spring Boot', 'Vue.js'],
    icon: '◈',
  },
  {
    category: 'Languages',
    items: ['TypeScript', 'Go', 'Rust', 'Java', 'Python'],
    icon: '</>',
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'],
    icon: '⬡',
  },
  {
    category: 'Cloud / DevOps',
    items: ['AWS', 'Kubernetes', 'Docker', 'CI/CD', 'Terraform'],
    icon: '⬢',
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    period: '2022 — Present',
    role: 'Senior Software Architect',
    company: 'NeoTokyo Systems',
    description:
      'Leading the architectural redesign of core cloud infrastructure. Implementing event-driven patterns and optimizing high-throughput data streams.',
    tags: ['Go', 'K8s', 'gRPC'],
    isCurrent: true,
  },
  {
    period: '2019 — 2022',
    role: 'Full Stack Developer',
    company: 'Cyberdyne Corp',
    description:
      'Developed responsive web applications using React and Node.js. Integrated machine learning models into real-time dashboards.',
    tags: ['Next.js', 'AWS'],
  },
  {
    period: '2016 — 2019',
    role: 'Junior Engineer',
    company: 'Arcane Softworks',
    description:
      'Migration of legacy Java systems to microservices. Contributed to core internal tooling and CLI utilities.',
    tags: ['Java', 'Docker'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'ZenOps Dashboard',
    description:
      'A minimalist cloud monitoring suite featuring glassmorphic design and real-time telemetry visualisers.',
    tags: ['React', 'TypeScript', 'WebSocket', 'D3'],
    demoUrl: '#',
    sourceUrl: '#',
    featured: true,
  },
  {
    title: 'NeuralCore API',
    description:
      'High-performance Rust-based API middleware designed for high-concurrency neural network inference tasks.',
    tags: ['Rust', 'gRPC', 'Kubernetes'],
    demoUrl: '#',
    sourceUrl: '#',
    featured: true,
  },
  {
    title: 'Sakura CLI',
    description:
      'A developer productivity toolkit written in Go — beautiful terminal output, zero overhead.',
    tags: ['Go', 'CLI', 'Open Source'],
    sourceUrl: '#',
  },
  {
    title: 'Prism UI',
    description:
      'Component library built on Radix primitives with a hand-crafted dark design system.',
    tags: ['React', 'TypeScript', 'CSS'],
    demoUrl: '#',
    sourceUrl: '#',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/andytule', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/andytule', icon: 'LI' },
];

export const CURRENT_FOCUS = {
  role: 'Senior Backend Engineer',
  company: '@ NeoTokyo Systems',
  quote: '"Scaling microservices like falling cherry blossoms—effortless and synchronized."',
};
