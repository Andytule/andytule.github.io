import type { NavItem, Project, Skill, SocialLink, TimelineEntry } from '@/types';

// ─── Navigation ────────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#timeline' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '#resume' },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILLS: Skill[] = [
  {
    category: 'Languages',
    icon: '⌨',
    items: [
      'TypeScript',
      'JavaScript',
      'Python',
      'C#',
      'Java',
      'SQL',
      'Swift',
      'Kotlin',
      'PHP',
      'C++',
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['React', 'Next.js', 'Angular', 'Vue', 'Redux', 'RxJS', 'Tailwind CSS', 'jQuery'],
  },
  {
    category: 'Backend',
    icon: '⚙',
    items: ['Node.js', 'Express', '.NET / ASP.NET', 'Django', 'GraphQL', 'REST', 'Knex'],
  },
  {
    category: 'Databases',
    icon: '🗄',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Kafka', 'Databricks', 'Supabase'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁',
    items: ['Docker', 'Kubernetes', 'AWS', 'Nginx', 'GitHub Actions'],
  },
  {
    category: 'Testing',
    icon: '🧪',
    items: ['Jest', 'xUnit', 'Postman', 'ESLint'],
  },
  {
    category: 'Tools',
    icon: '🛠',
    items: [
      'Git',
      'Unity',
      'Dynamics 365',
      'Webpack',
      'Vite',
      'Android Studio',
      'Xcode',
      'Visual Studio',
    ],
  },
];

// ─── Timeline (Work Experience) ───────────────────────────────────────────────

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
      'Node.js',
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
    tags: ['React', 'TypeScript', 'Redux', 'C#', '.NET', 'MySQL', 'Jest', 'xUnit', 'ESLint'],
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
      'Node.js',
      'Express',
      '.NET',
      'PostgreSQL',
      'Docker',
      'Material-UI',
    ],
  },
  {
    period: 'Sept 2021 – Dec 2021',
    role: 'Full Stack Developer Intern',
    company: 'Caliber Communications · Stoney Creek, ON',
    logo: '/ecam-logo.png',
    description:
      'Optimized workflow efficiency of security application users by 15% through personalized dashboard interfaces with real-time data streams via WebSocket. Engineered backend microservices with Node.js, Express.js, and Knex; implemented automated PostgreSQL scripts to purge 3.5TB of obsolete data.',
    tags: ['Angular', 'RxJS', 'Node.js', 'Express', 'Knex', 'PostgreSQL', 'Docker', 'Nginx'],
  },
  {
    period: 'May 2021 – Aug 2021',
    role: 'Web Developer Intern',
    company: 'Evenica · Burlington, ON',
    logo: '/evenica-logo.png',
    description:
      "Revamped the e-commerce UI, enhancing accessibility and reducing the frontend codebase by 35% through a reusable web component library. Implemented a secure payment terminal integrating Adyen's payment API to establish a resilient payment pipeline.",
    tags: ['JavaScript', 'React', '.NET', 'Dynamics 365', 'Adyen'],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    title: 'Chord-Shift',
    description: 'Full-stack chord transposition tool',
    tags: ['TypeScript', 'React', 'Node.js', 'Supabase'],
    sourceUrl: 'https://github.com/Andytule/chord-shift',
    demoUrl: 'https://andytule.github.io/chord-shift/',
    image: '/chord-shift.png',
    featured: true,
  },
  {
    title: 'Rate My Course',
    description: 'Collaborative course review platform',
    tags: ['TypeScript', 'React', 'Material-UI', 'Node.js', 'MySQL', 'PHP'],
    demoUrl: 'https://andytule.github.io/rate-my-course/',
    sourceUrl: 'https://github.com/Andytule/rate-my-course',
    image: '/rate-my-course.png',
  },
  {
    title: 'Truck Load Visualizer',
    description: '3D cargo load planning tool',
    tags: ['C++', 'JavaScript', 'Unity'],
    sourceUrl: 'https://github.com/Andytule/truck-load-visualizer',
    image: '/truck-load-visualizer.png',
  },
  {
    title: 'Chess',
    description: 'Real-time multiplayer chess app',
    tags: ['JavaScript', 'React', 'RxJS', 'Node.js'],
    demoUrl: 'https://andytule.github.io/chess/',
    sourceUrl: 'https://github.com/Andytule/chess',
    image: '/chess.png',
  },
  {
    title: 'Covid Tracker',
    description: 'Live Covid-19 stats dashboard',
    tags: ['JavaScript', 'React', 'Material-UI', 'Chart.js', 'Node.js'],
    demoUrl: 'https://andytule.github.io/covid-app/',
    sourceUrl: 'https://github.com/Andytule/covid-app',
    image: '/covid-app.png',
  },
  {
    title: 'Blokus',
    description: '3D multiplayer board game in the browser',
    tags: ['HTML', 'CSS', 'JavaScript', 'Three.js', 'jQuery'],
    demoUrl: 'https://andytule.github.io/blokkus/',
    sourceUrl: 'https://github.com/Andytule/blokkus',
    image: '/blokkus.png',
  },
  {
    title: 'A* Pathfinder',
    description: 'Interactive A* algorithm visualizer',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://andytule.github.io/a-star-pathfinder/',
    sourceUrl: 'https://github.com/Andytule/a-star-pathfinder',
    image: '/a-star-pathfinder.png',
  },
  {
    title: 'Electromagnetic Roomba',
    description: 'Autonomous metal-collecting robot',
    tags: ['Python', 'C++', 'Arduino', 'Raspberry Pi'],
    sourceUrl: 'https://github.com/Andytule/electromagnetic-robot',
    image: '/electro-magnetic-roomba.png',
  },
];

// ─── Social Links ─────────────────────────────────────────────────────────────

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Andytule', icon: '⌥' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/andy-tu-le', icon: '🔗' },
  { label: 'Email', href: 'mailto:Andytule321@gmail.com', icon: '✉' },
];
