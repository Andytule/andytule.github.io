import type { TimelineEntry } from '@/types';

export const TIMELINE: TimelineEntry[] = [
  {
    period: 'Oct 2024 – Present',
    role: 'Software Engineer',
    company: 'Dotmatics · Boston, MA',
    logo: '/dotmatics-logo.png',
    description:
      "Engineered full-stack features for Luma's Registration module, supporting single-compound and batch registration workflows for scientists. Built record submission and tracking systems using React, TypeScript, and Node.js; developed RESTful APIs backed by PostgreSQL achieving a 25% reduction in query times; contributed to event-driven backend services using Kafka, Scala, and Databricks for high-volume scientific data pipelines.",
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
      'Developed Benefits services features enabling employees to manage their benefits, generating $1M in revenue. Refactored React frontend using TypeScript and Redux for the Benefits Enrollment MFE with Jest integration testing; revamped backend microservices using C# and .NET for efficient SQL querying, achieving a 10% increase in microservice throughput.',
    tags: ['React', 'TypeScript', 'Redux', 'CSharp', 'DotNet', 'MySQL', 'Jest', 'xUnit', 'ESLint'],
  },
  {
    period: 'Jan 2022 – Dec 2022',
    role: 'Software Engineer Intern',
    company: 'Tesla · Fremont, CA',
    logo: '/tesla-logo.png',
    description:
      'Developed a gamification system for Tesla service centers to automate vehicle repair and maintenance workflows, resulting in a 13% increase in overall productivity. Designed and deployed a full-stack dashboard using React, TypeScript, and Node.js containerized with Docker; streamlined the Service Center Application using Angular and .NET microservices backed by PostgreSQL.',
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
      'Optimized workflow efficiency of security application users by 15% through personalized dashboard interfaces with real-time data streams via WebSocket. Engineered backend microservices with Node.js, Express.js, and Knex; implemented automated PostgreSQL scripts to purge 3.5TB of obsolete data.',
    tags: ['Angular', 'RxJS', 'NodeJS', 'Express', 'Knex', 'PostgreSQL', 'Docker', 'Nginx'],
  },
  {
    period: 'May 2021 – Aug 2021',
    role: 'Web Developer Intern',
    company: 'Evenica · Burlington, ON',
    logo: '/evenica-logo.png',
    description:
      "Revamped the e-commerce UI, enhancing accessibility and reducing the frontend codebase by 35% through a reusable web component library. Implemented a secure payment terminal integrating Adyen's payment API to establish a resilient payment pipeline.",
    tags: ['JavaScript', 'React', 'DotNet', 'Dynamics365', 'Adyen'],
  },
];
