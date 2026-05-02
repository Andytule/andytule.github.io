import type { TimelineEntry } from '@/types';

export const TIMELINE: TimelineEntry[] = [
  {
    period: 'Oct 2024 – Present',
    role: 'Software Engineer',
    company: 'Dotmatics · Boston, MA',
    logo: '/dotmatics-logo.png',
    url: 'https://www.dotmatics.com',
    description:
      "Engineered full-stack features for Luma's compound registration module — an AI-native R&D platform used by 2M+ scientists — spanning React/Node.js frontends, GraphQL APIs, and event-driven Kafka pipelines, achieving a 25% reduction in query times.",
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
    url: 'https://www.dayforce.com',
    description:
      'Developed and refactored Benefits Enrollment features for a Gartner-ranked global HCM platform, rebuilding the TypeScript/Redux micro-frontend and revamping C#/.NET microservices. The work generated $1M in revenue and achieved a 10% increase in microservice throughput.',
    tags: ['React', 'TypeScript', 'Redux', 'CSharp', 'DotNet', 'MySQL', 'Jest', 'xUnit', 'ESLint'],
  },
  {
    period: 'Jan 2022 – Dec 2022',
    role: 'Software Engineer Intern',
    company: 'Tesla · Fremont, CA',
    logo: '/tesla-logo.png',
    url: 'https://www.tesla.com',
    description:
      "Designed and built a full-stack gamification dashboard for Tesla's Fremont service centers, tracking technician performance and automating vehicle repair workflows in Docker. The system drove a 13% increase in overall service center productivity.",
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
    company: 'Caliber Communications (ECAM) · Stoney Creek, ON',
    logo: '/ecam-logo.png',
    url: 'https://ecam.com/en-ca',
    description:
      'Built real-time WebSocket dashboards and Angular/RxJS interfaces for a Canadian AI-powered video surveillance platform, improving security monitoring efficiency by 15%. Also engineered Node.js/Express microservices and automated PostgreSQL scripts that purged 3.5 TB of obsolete data.',
    tags: ['Angular', 'RxJS', 'NodeJS', 'Express', 'Knex', 'PostgreSQL', 'Docker', 'Nginx'],
  },
  {
    period: 'May 2021 – Aug 2021',
    role: 'Web Developer Intern',
    company: 'Evenica · Burlington, ON',
    logo: '/evenica-logo.png',
    url: 'https://www.evenica.com',
    description:
      'Revamped the e-commerce frontend for a Microsoft Dynamics 365 Commerce specialist, building a reusable React component library that reduced the codebase by 35%. Also delivered a secure Adyen payment pipeline integrated with a dedicated .NET payment microservice.',
    tags: ['JavaScript', 'React', 'DotNet', 'Dynamics365', 'Adyen'],
  },
];
