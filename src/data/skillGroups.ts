import type { Skill } from '@/types';

export const SKILL_GROUPS: Skill[] = [
  {
    category: 'Languages',
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
    items: [
      'React',
      'NextJS',
      'Angular',
      'Vue',
      'Redux',
      'RxJS',
      'TailwindCSS',
      'jQuery',
      'ChartJS',
      'ThreeJS',
    ],
  },
  {
    category: 'Backend',
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
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLServer', 'OracleSQL', 'Databricks', 'Supabase'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'AWS', 'GoogleCloud', 'Render', 'Nginx', 'GitHubActions'],
  },
  {
    category: 'Testing',
    items: ['Jest', 'xUnit', 'Pytest', 'ReactTestingLibrary', 'Selenium', 'Postman', 'ESLint'],
  },
  {
    category: 'Tools',
    items: [
      'Figma',
      'Git',
      'Unity',
      'Dynamics365',
      'Webpack',
      'Vite',
      'AndroidStudio',
      'Xcode',
      'VisualStudio',
      'Arduino',
      'RaspberryPi',
    ],
  },
];
