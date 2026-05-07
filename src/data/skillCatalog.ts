import type { SkillDef } from '@/types';

export const SKILL_CATALOG = {
  // Languages
  TypeScript: {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    icon: { cdn: 'devicon', slug: 'typescript', variant: 'original' },
  },
  JavaScript: {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: { cdn: 'devicon', slug: 'javascript', variant: 'original' },
  },
  Python: {
    name: 'Python',
    url: 'https://www.python.org/',
    icon: { cdn: 'devicon', slug: 'python', variant: 'original' },
  },
  CSharp: {
    name: 'C#',
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    icon: { cdn: 'devicon', slug: 'csharp', variant: 'original' },
  },
  Java: {
    name: 'Java',
    url: 'https://www.java.com/',
    icon: { cdn: 'devicon', slug: 'java', variant: 'original' },
  },
  SQL: {
    name: 'SQL',
    url: 'https://en.wikipedia.org/wiki/SQL',
    icon: {
      cdn: 'inline',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="sqlg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#60A0F0"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
  </defs>
  <rect x="5" y="11" width="22" height="14" fill="url(#sqlg)"/>
  <ellipse cx="16" cy="25" rx="11" ry="4" fill="#1D4ED8"/>
  <ellipse cx="16" cy="11" rx="11" ry="4" fill="#93C5FD"/>
  <ellipse cx="16" cy="18" rx="11" ry="4" fill="none" stroke="#93C5FD" stroke-width="0.8" opacity="0.6"/>
</svg>`,
    },
  },
  HTML: {
    name: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    icon: { cdn: 'devicon', slug: 'html5', variant: 'original' },
  },
  CSS: {
    name: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    icon: { cdn: 'devicon', slug: 'css3', variant: 'original' },
  },
  Swift: {
    name: 'Swift',
    url: 'https://www.swift.org/',
    icon: { cdn: 'devicon', slug: 'swift', variant: 'original' },
  },
  Kotlin: {
    name: 'Kotlin',
    url: 'https://kotlinlang.org/',
    icon: { cdn: 'devicon', slug: 'kotlin', variant: 'original' },
  },
  PHP: {
    name: 'PHP',
    url: 'https://www.php.net/',
    icon: { cdn: 'devicon', slug: 'php', variant: 'original' },
  },
  CPlusPlus: {
    name: 'C++',
    url: 'https://isocpp.org/',
    icon: { cdn: 'devicon', slug: 'cplusplus', variant: 'original' },
  },

  // Frontend
  React: {
    name: 'React',
    url: 'https://react.dev/',
    icon: { cdn: 'devicon', slug: 'react', variant: 'original' },
  },
  NextJS: {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    icon: { cdn: 'devicon', slug: 'nextjs', variant: 'original' },
  },
  Angular: {
    name: 'Angular',
    url: 'https://angular.dev/',
    icon: { cdn: 'devicon', slug: 'angular', variant: 'original' },
  },
  Vue: {
    name: 'Vue',
    url: 'https://vuejs.org/',
    icon: { cdn: 'devicon', slug: 'vuejs', variant: 'original' },
  },
  Redux: {
    name: 'Redux',
    url: 'https://redux.js.org/',
    icon: { cdn: 'devicon', slug: 'redux', variant: 'original' },
  },
  RxJS: {
    name: 'RxJS',
    url: 'https://rxjs.dev/',
    icon: { cdn: 'devicon', slug: 'rxjs', variant: 'original' },
  },
  TailwindCSS: {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    icon: { cdn: 'devicon', slug: 'tailwindcss', variant: 'original' },
  },
  jQuery: {
    name: 'jQuery',
    url: 'https://jquery.com/',
    icon: { cdn: 'devicon', slug: 'jquery', variant: 'original' },
  },
  ThreeJS: {
    name: 'Three.js',
    url: 'https://threejs.org/',
    icon: { cdn: 'simpleicons', slug: 'threedotjs', color: 'ffffff' },
  },
  MaterialUI: {
    name: 'Material-UI',
    url: 'https://mui.com/',
    icon: { cdn: 'devicon', slug: 'materialui', variant: 'original' },
  },
  ChartJS: {
    name: 'Chart.js',
    url: 'https://www.chartjs.org/',
    icon: { cdn: 'simpleicons', slug: 'chartdotjs', color: 'FF6384' },
  },
  SCSS: {
    name: 'SCSS',
    url: 'https://sass-lang.com/',
    icon: { cdn: 'devicon', slug: 'sass', variant: 'original' },
  },

  // Backend
  NodeJS: {
    name: 'Node.js',
    url: 'https://nodejs.org/',
    icon: { cdn: 'devicon', slug: 'nodejs', variant: 'original' },
  },
  Express: {
    name: 'Express',
    url: 'https://expressjs.com/',
    icon: { cdn: 'simpleicons', slug: 'express', color: 'CCCCCC' },
  },
  DotNet: {
    name: '.NET / ASP.NET',
    url: 'https://dotnet.microsoft.com/',
    icon: { cdn: 'devicon', slug: 'dotnetcore', variant: 'original' },
  },
  Django: {
    name: 'Django',
    url: 'https://www.djangoproject.com/',
    icon: { cdn: 'simpleicons', slug: 'django', color: '44B78B' },
  },
  Flask: {
    name: 'Flask',
    url: 'https://flask.palletsprojects.com/',
    icon: { cdn: 'simpleicons', slug: 'flask', color: 'FFFFFF' },
  },
  GraphQL: {
    name: 'GraphQL',
    url: 'https://graphql.org/',
    icon: { cdn: 'devicon', slug: 'graphql', variant: 'plain' },
  },
  FastAPI: {
    name: 'FastAPI',
    url: 'https://fastapi.tiangolo.com/',
    icon: { cdn: 'devicon', slug: 'fastapi', variant: 'original' },
  },
  Kafka: {
    name: 'Kafka',
    url: 'https://kafka.apache.org/',
    icon: { cdn: 'simpleicons', slug: 'apachekafka', color: 'FFFFFF' },
  },
  Knex: {
    name: 'Knex',
    url: 'https://knexjs.org/',
    icon: { cdn: 'devicon', slug: 'knexjs', variant: 'original' },
  },
  Scala: {
    name: 'Scala',
    url: 'https://www.scala-lang.org/',
    icon: { cdn: 'devicon', slug: 'scala', variant: 'original' },
  },

  // Databases
  OracleSQL: {
    name: 'Oracle SQL',
    url: 'https://www.oracle.com/database/',
    icon: { cdn: 'devicon', slug: 'oracle', variant: 'original' },
  },
  PostgreSQL: {
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    icon: { cdn: 'devicon', slug: 'postgresql', variant: 'original' },
  },
  MySQL: {
    name: 'MySQL',
    url: 'https://www.mysql.com/',
    icon: { cdn: 'devicon', slug: 'mysql', variant: 'original' },
  },
  MongoDB: {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    icon: { cdn: 'devicon', slug: 'mongodb', variant: 'original' },
  },
  SQLServer: {
    name: 'SQL Server',
    url: 'https://www.microsoft.com/en-us/sql-server',
    icon: { cdn: 'devicon', slug: 'microsoftsqlserver', variant: 'plain' },
  },
  Databricks: {
    name: 'Databricks',
    url: 'https://www.databricks.com/',
    icon: { cdn: 'simpleicons', slug: 'databricks', color: 'FF3621' },
  },
  Supabase: {
    name: 'Supabase',
    url: 'https://supabase.com/',
    icon: { cdn: 'devicon', slug: 'supabase', variant: 'original' },
  },

  // DevOps & Cloud
  Docker: {
    name: 'Docker',
    url: 'https://www.docker.com/',
    icon: { cdn: 'devicon', slug: 'docker', variant: 'original' },
  },
  Kubernetes: {
    name: 'Kubernetes',
    url: 'https://kubernetes.io/',
    icon: { cdn: 'devicon', slug: 'kubernetes', variant: 'plain' },
  },
  AWS: {
    name: 'AWS',
    url: 'https://aws.amazon.com/',
    icon: { cdn: 'devicon', slug: 'amazonwebservices', variant: 'plain-wordmark' },
  },
  GoogleCloud: {
    name: 'Google Cloud',
    url: 'https://cloud.google.com/',
    icon: { cdn: 'devicon', slug: 'googlecloud', variant: 'original' },
  },
  Render: {
    name: 'Render',
    url: 'https://render.com/',
    icon: { cdn: 'simpleicons', slug: 'render', color: '46E3B7' },
  },
  Nginx: {
    name: 'Nginx',
    url: 'https://nginx.org/',
    icon: { cdn: 'devicon', slug: 'nginx', variant: 'original' },
  },
  GitHubActions: {
    name: 'GitHub Actions',
    url: 'https://github.com/features/actions',
    icon: { cdn: 'devicon', slug: 'githubactions', variant: 'original' },
  },

  // Testing
  Jest: {
    name: 'Jest',
    url: 'https://jestjs.io/',
    icon: { cdn: 'devicon', slug: 'jest', variant: 'plain' },
  },
  xUnit: {
    name: 'xUnit',
    url: 'https://xunit.net/',
    icon: { cdn: 'devicon', slug: 'vitest', variant: 'original' },
  },
  Pytest: {
    name: 'Pytest',
    url: 'https://pytest.org/',
    icon: { cdn: 'devicon', slug: 'pytest', variant: 'original' },
  },
  ReactTestingLibrary: {
    name: 'React Testing Library',
    url: 'https://testing-library.com/',
    icon: { cdn: 'simpleicons', slug: 'testinglibrary', color: 'E33332' },
  },
  Postman: {
    name: 'Postman',
    url: 'https://www.postman.com/',
    icon: { cdn: 'devicon', slug: 'postman', variant: 'original' },
  },
  ESLint: {
    name: 'ESLint',
    url: 'https://eslint.org/',
    icon: { cdn: 'devicon', slug: 'eslint', variant: 'original' },
  },
  Selenium: {
    name: 'Selenium',
    url: 'https://www.selenium.dev/',
    icon: { cdn: 'devicon', slug: 'selenium', variant: 'original' },
  },

  // Tools
  Figma: {
    name: 'Figma',
    url: 'https://www.figma.com/',
    icon: { cdn: 'devicon', slug: 'figma', variant: 'original' },
  },
  Git: {
    name: 'Git',
    url: 'https://git-scm.com/',
    icon: { cdn: 'devicon', slug: 'git', variant: 'original' },
  },
  Unity: {
    name: 'Unity',
    url: 'https://unity.com/',
    icon: { cdn: 'devicon', slug: 'unity', variant: 'original' },
  },
  Dynamics365: {
    name: 'Dynamics 365',
    url: 'https://www.microsoft.com/en-us/dynamics-365',
    icon: { cdn: 'devicon', slug: 'windows8', variant: 'original' },
  },
  Webpack: {
    name: 'Webpack',
    url: 'https://webpack.js.org/',
    icon: { cdn: 'devicon', slug: 'webpack', variant: 'original' },
  },
  Vite: {
    name: 'Vite',
    url: 'https://vitejs.dev/',
    icon: { cdn: 'devicon', slug: 'vitejs', variant: 'original' },
  },
  AndroidStudio: {
    name: 'Android Studio',
    url: 'https://developer.android.com/studio',
    icon: { cdn: 'devicon', slug: 'androidstudio', variant: 'original' },
  },
  Xcode: {
    name: 'Xcode',
    url: 'https://developer.apple.com/xcode/',
    icon: { cdn: 'devicon', slug: 'xcode', variant: 'original' },
  },
  VisualStudio: {
    name: 'Visual Studio',
    url: 'https://visualstudio.microsoft.com/',
    icon: { cdn: 'devicon', slug: 'visualstudio', variant: 'plain' },
  },
  Arduino: {
    name: 'Arduino',
    url: 'https://www.arduino.cc/',
    icon: { cdn: 'devicon', slug: 'arduino', variant: 'original' },
  },
  RaspberryPi: {
    name: 'Raspberry Pi',
    url: 'https://www.raspberrypi.org/',
    icon: { cdn: 'devicon', slug: 'raspberrypi', variant: 'original' },
  },
  Adyen: {
    name: 'Adyen',
    url: 'https://www.adyen.com/',
    icon: { cdn: 'simpleicons', slug: 'adyen', color: '0ABF53' },
  },

  // ML / AI
  PyTorch: {
    name: 'PyTorch',
    url: 'https://pytorch.org/',
    icon: { cdn: 'devicon', slug: 'pytorch', variant: 'original' },
  },
  NumPy: {
    name: 'NumPy',
    url: 'https://numpy.org/',
    icon: { cdn: 'devicon', slug: 'numpy', variant: 'original' },
  },
  Pandas: {
    name: 'Pandas',
    url: 'https://pandas.pydata.org/',
    icon: { cdn: 'devicon', slug: 'pandas', variant: 'original' },
  },
  Matplotlib: {
    name: 'Matplotlib',
    url: 'https://matplotlib.org/',
    icon: { cdn: 'devicon', slug: 'matplotlib', variant: 'original' },
  },
  ScikitLearn: {
    name: 'Scikit-learn',
    url: 'https://scikit-learn.org/',
    icon: { cdn: 'devicon', slug: 'scikitlearn', variant: 'original' },
  },
  Keras: {
    name: 'Keras',
    url: 'https://keras.io/',
    icon: { cdn: 'devicon', slug: 'keras', variant: 'original' },
  },
  TensorFlow: {
    name: 'TensorFlow',
    url: 'https://www.tensorflow.org/',
    icon: { cdn: 'devicon', slug: 'tensorflow', variant: 'original' },
  },
} as const satisfies Record<string, SkillDef>;

export type SkillKey = keyof typeof SKILL_CATALOG;

export function getSkill(key: SkillKey): SkillDef {
  return SKILL_CATALOG[key];
}
