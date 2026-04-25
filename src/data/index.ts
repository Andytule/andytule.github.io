import type { NavItem, Project, Skill, SocialLink, TimelineEntry } from '@/types';

// ─── Navigation ────────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#timeline' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '#resume' },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILLS: Skill[] = [
  {
    category: 'Languages',
    icon: '⌨',
    items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Scala', 'Java', 'SQL', 'C++'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['React', 'Next.js', 'Angular', 'Redux', 'RxJS', 'Tailwind CSS', 'SCSS'],
  },
  {
    category: 'Backend',
    icon: '⚙',
    items: ['Node.js', 'Express', '.NET / ASP.NET', 'Django', 'GraphQL', 'REST'],
  },
  {
    category: 'Data & Messaging',
    icon: '🗄',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Kafka', 'Databricks', 'Supabase'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁',
    items: ['Docker', 'Kubernetes', 'AWS', 'Nginx', 'GitHub Actions'],
  },
  {
    category: 'Testing & Tooling',
    icon: '🧪',
    items: ['Jest', 'ESLint', 'Prettier', 'Vite', 'Webpack'],
  },
];

// ─── Timeline (Work Experience) ───────────────────────────────────────────────

export const TIMELINE: TimelineEntry[] = [
  {
    period: 'Oct 2024 – Present',
    role: 'Software Engineer',
    company: 'Dotmatics · Boston, MA',
    description:
      "Engineered full-stack features for Luma's Registration module, supporting single-compound and batch registration workflows for scientists. Built record submission and tracking systems using React, TypeScript, and Node.js; developed RESTful APIs backed by PostgreSQL achieving a 25% reduction in query times; contributed to event-driven backend services using Kafka, Scala, and Databricks for high-volume scientific data pipelines.",
    tags: [
      'React',
      'TypeScript',
      'Node.js',
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
    description:
      'Developed Benefits services features enabling employees to manage their benefits, generating $1M in revenue. Refactored React frontend using TypeScript and Redux for the Benefits Enrollment MFE with Jest integration testing; revamped backend microservices using C# and .NET for efficient SQL querying, achieving a 10% increase in microservice throughput.',
    tags: ['React', 'TypeScript', 'Redux', 'Jest', 'ESLint', '.NET', 'C#', 'MySQL'],
  },
  {
    period: 'Jan 2022 – Dec 2022',
    role: 'Software Engineer Intern',
    company: 'Tesla · Fremont, CA',
    description:
      'Developed a gamification system for Tesla service centers to automate vehicle repair and maintenance workflows, resulting in a 13% increase in overall productivity. Designed and deployed a full-stack dashboard using React, TypeScript, and Node.js containerized with Docker; streamlined the Service Center Application using Angular and .NET microservices backed by PostgreSQL.',
    tags: [
      '.NET',
      'React',
      'TypeScript',
      'Node.js',
      'Docker',
      'Angular',
      'Material-UI',
      'PostgreSQL',
    ],
  },
  {
    period: 'Sept 2021 – Dec 2021',
    role: 'Full Stack Developer Intern',
    company: 'Caliber Communications · Stoney Creek, ON',
    description:
      'Optimized workflow efficiency of security application users by 15% through personalized dashboard interfaces with real-time data streams via WebSocket. Engineered backend microservices with Node.js, Express.js, and Knex; implemented automated PostgreSQL scripts to purge 3.5TB of obsolete data.',
    tags: ['Angular', 'RxJS', 'Express', 'Knex', 'PostgreSQL', 'Docker', 'Nginx'],
  },
  {
    period: 'May 2021 – Aug 2021',
    role: 'Web Developer Intern',
    company: 'Evenica · Burlington, ON',
    description:
      "Revamped the e-commerce UI, enhancing accessibility and reducing the frontend codebase by 35% through a reusable web component library. Implemented a secure payment terminal integrating Adyen's payment API to establish a resilient payment pipeline.",
    tags: ['Dynamics 365', 'React', '.NET', 'Adyen'],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    title: 'Chord-Shift',
    description:
      'A full-stack chord transposition tool built with a modular transformation engine using Strategy, Factory, and Composite design patterns. Supports cloud storage via Supabase and integrates with the Google Docs API.',
    tags: ['TypeScript', 'React', 'Node.js', 'Supabase'],
    sourceUrl: 'https://github.com/Andytule/chord-shift',
    demoUrl: 'https://chord-shift.vercel.app',
    featured: true,
  },
  {
    title: 'Rate My Course',
    description:
      'A collaborative platform for students to share feedback and insights on courses. Users can engage in discussions, discover tips, and make more informed decisions about their academic experience.',
    tags: ['TypeScript', 'React', 'Material-UI', 'Node.js', 'MySQL', 'PHP'],
    demoUrl: 'https://andytule.github.io/rate-my-course/',
    sourceUrl: 'https://github.com/Andytule/rate-my-course',
  },
  {
    title: 'Truck Load Visualizer',
    description:
      'A 3D visualization tool for optimally configuring and loading cargo onto truck beds, helping technicians plan loads that are faster, safer, and more space-efficient.',
    tags: ['C++', 'JavaScript', 'Unity'],
    sourceUrl: 'https://github.com/Andytule/truck-load-visualizer',
  },
  {
    title: 'Chess',
    description:
      'An online multiplayer chess app where you can play with friends in real-time. Features a clean interface with reactive state management for a smooth, lag-free experience.',
    tags: ['JavaScript', 'React', 'RxJS', 'Node.js'],
    demoUrl: 'https://andytule.github.io/chess/',
    sourceUrl: 'https://github.com/Andytule/chess',
  },
  {
    title: 'Covid Tracker',
    description:
      "A real-time Covid-19 dashboard displaying live case data through interactive charts and visualizations, giving users a clear and up-to-date view of the pandemic's global impact.",
    tags: ['JavaScript', 'React', 'Material-UI', 'Chart.js', 'Node.js'],
    demoUrl: 'https://andytule.github.io/covid-app/',
    sourceUrl: 'https://github.com/Andytule/covid-app',
  },
  {
    title: 'Blokus',
    description:
      'A 3D online adaptation of the classic Blokus board game. Play with friends, plan your moves, and compete for board territory in a fully interactive browser environment.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Three.js', 'jQuery'],
    demoUrl: 'https://andytule.github.io/blokkus/',
    sourceUrl: 'https://github.com/Andytule/blokkus',
  },
  {
    title: 'A* Pathfinder',
    description:
      'An interactive visualizer for the A* pathfinding algorithm. Draw walls, set start and end points, and watch the algorithm navigate mazes in real time.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://andytule.github.io/a-star-pathfinder/',
    sourceUrl: 'https://github.com/Andytule/a-star-pathfinder',
  },
  {
    title: 'Electromagnetic Roomba',
    description:
      'An autonomous metal-collecting robot built on a Raspberry Pi and Arduino. Uses electromagnets to detect and pick up metal objects, with motion and logic controlled through Python and C++.',
    tags: ['Python', 'C++', 'Arduino', 'Raspberry Pi'],
    sourceUrl: 'https://github.com/Andytule/electromagnetic-robot',
  },
];

// ─── Social Links ─────────────────────────────────────────────────────────────

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Andytule', icon: '⌥' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/andy-tu-le', icon: '🔗' },
  { label: 'Email', href: 'mailto:Andytule321@gmail.com', icon: '✉' },
];
