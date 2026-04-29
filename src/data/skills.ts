import type { Skill } from '@/types';

export const SKILLS: Skill[] = [
  {
    category: 'Languages',
    icon: '⌨',
    items: [
      'TypeScript',
      'JavaScript',
      'Python',
      'CSharp',
      'Java',
      'SQL',
      'HTML',
      'CSS',
      'Swift',
      'Kotlin',
      'PHP',
      'CPlusPlus',
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['React', 'NextJS', 'Angular', 'Vue', 'Redux', 'RxJS', 'TailwindCSS', 'jQuery'],
  },
  {
    category: 'Backend',
    icon: '⚙',
    items: [
      'NodeJS',
      'Express',
      'DotNet',
      'Django',
      'Flask',
      'GraphQL',
      'FastAPI',
      'Kafka',
      'Knex',
    ],
  },
  {
    category: 'Databases',
    icon: '🗄',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLServer', 'Databricks', 'Supabase'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁',
    items: ['Docker', 'Kubernetes', 'AWS', 'GoogleCloud', 'Render', 'Nginx', 'GitHubActions'],
  },
  {
    category: 'Testing',
    icon: '🧪',
    items: ['Jest', 'xUnit', 'Pytest', 'ReactTestingLibrary', 'Postman', 'ESLint'],
  },
  {
    category: 'Tools',
    icon: '🛠',
    items: [
      'Git',
      'Unity',
      'Dynamics365',
      'Webpack',
      'Vite',
      'AndroidStudio',
      'Xcode',
      'VisualStudio',
      'Arduino',
    ],
  },
];
