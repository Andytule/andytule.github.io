import type { TimelineEntry } from '@/types';

export const TIMELINE: TimelineEntry[] = [
  {
    period: 'Oct 2024 – Present',
    role: 'Software Engineer',
    company: 'Dotmatics · Boston, MA',
    logo: '/dotmatics-logo.png',
    description:
      'Engineering full-stack features on Dotmatics Luma — an AI-native R&D platform trusted by 2M+ scientists — spanning compound registration workflows, GraphQL APIs, and event-driven data pipelines on Kafka, Scala, and Databricks.',
    tags: [
      'React',
      'TypeScript',
      'NodeJS',
      'Express',
      'GraphQL',
      'PostgreSQL',
      'Kafka',
      'Scala',
      'Databricks',
      'Docker',
      'Kubernetes',
      'Jest',
    ],
    isCurrent: true,
  },
  {
    period: 'Sept 2023 – Apr 2024',
    role: 'Software Engineer Intern',
    company: 'Dayforce · Toronto, ON',
    logo: '/dayforce-logo.png',
    description:
      'Delivered Benefits Enrollment features on Dayforce — a Gartner-ranked global HCM platform — generating $1M in revenue; built a TypeScript/Redux micro-frontend and C#/.NET microservices with a 10% throughput gain.',
    tags: ['React', 'TypeScript', 'Redux', 'CSharp', 'DotNet', 'MySQL', 'Jest', 'xUnit', 'ESLint'],
  },
  {
    period: 'Jan 2022 – Dec 2022',
    role: 'Software Engineer Intern',
    company: 'Tesla · Fremont, CA',
    logo: '/tesla-logo.png',
    description:
      "Built a gamification dashboard for Tesla's Fremont service centers that automated repair workflows and drove a 13% productivity lift — React/Node.js frontend, Angular/.NET microservices, shipped in Docker.",
    tags: [
      'React',
      'TypeScript',
      'Angular',
      'NodeJS',
      'Express',
      'DotNet',
      'PostgreSQL',
      'Docker',
      'MaterialUI',
    ],
  },
  {
    period: 'Sept 2021 – Dec 2021',
    role: 'Full Stack Developer Intern',
    company: 'Caliber Communications · Stoney Creek, ON',
    logo: '/ecam-logo.png',
    description:
      'Boosted security application efficiency by 15% with real-time WebSocket dashboards; engineered Node.js/Knex microservices and automated PostgreSQL scripts that purged 3.5 TB of obsolete data.',
    tags: ['Angular', 'RxJS', 'NodeJS', 'Express', 'Knex', 'PostgreSQL', 'Docker', 'Nginx'],
  },
  {
    period: 'May 2021 – Aug 2021',
    role: 'Web Developer Intern',
    company: 'Evenica · Burlington, ON',
    logo: '/evenica-logo.png',
    description:
      'Rebuilt the e-commerce UI for a 2022 Microsoft Partner of the Year finalist — Dynamics 365 Commerce specialist — cutting the frontend codebase by 35% with a reusable component library and integrating Adyen payments.',
    tags: ['JavaScript', 'React', 'DotNet', 'Dynamics365', 'Adyen'],
  },
];
