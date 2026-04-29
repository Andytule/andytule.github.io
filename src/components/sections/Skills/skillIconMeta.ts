/**
 * skillIconMeta.ts
 *
 * Maps every skill name to icon metadata. Two CDNs are supported:
 *
 *   "devicon"  — cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/<slug>/<slug>-<variant>.svg
 *                Full-color brand SVGs. Requires `slug` + `variant`.
 *
 *   "simpleicons" — cdn.simpleicons.org/<slug>/<color>
 *                Monochrome SVGs served in brand color. Requires `slug` + `color` (hex, no #).
 *                Use for brands that have no Devicon entry.
 *
 * Adding a new skill: append an entry below — no component changes needed.
 * Browse Devicon at: https://devicon.dev/
 * Browse Simple Icons at: https://simpleicons.org/
 */

interface DevIconMeta {
  cdn: 'devicon';
  /** Devicon folder/icon name (e.g. "typescript", "csharp") */
  slug: string;
  /** Devicon variant: "original", "plain", "original-wordmark", etc. */
  variant: string;
  /** Official website URL opened when the icon is clicked */
  url: string;
}

interface SimpleIconMeta {
  cdn: 'simpleicons';
  /** Simple Icons slug (lowercase, as listed on simpleicons.org) */
  slug: string;
  /** Brand hex color WITHOUT the # (e.g. "FF3621") — used to tint the SVG */
  color: string;
  /** Official website URL opened when the icon is clicked */
  url: string;
}

export type SkillIconMeta = DevIconMeta | SimpleIconMeta;

/** Lookup keyed by the exact skill name used in `src/data/index.ts` */
export const SKILL_ICON_META: Readonly<Record<string, SkillIconMeta>> = {
  // ── Languages ────────────────────────────────────────────────────────
  TypeScript: {
    cdn: 'devicon',
    slug: 'typescript',
    variant: 'original',
    url: 'https://www.typescriptlang.org/',
  },
  JavaScript: {
    cdn: 'devicon',
    slug: 'javascript',
    variant: 'original',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  Python: { cdn: 'devicon', slug: 'python', variant: 'original', url: 'https://www.python.org/' },
  'C#': {
    cdn: 'devicon',
    slug: 'csharp',
    variant: 'original',
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  },
  Java: { cdn: 'devicon', slug: 'java', variant: 'original', url: 'https://www.java.com/' },
  SQL: {
    cdn: 'devicon',
    slug: 'postgresql',
    variant: 'original',
    url: 'https://www.postgresql.org/',
  },
  Swift: { cdn: 'devicon', slug: 'swift', variant: 'original', url: 'https://www.swift.org/' },
  Kotlin: { cdn: 'devicon', slug: 'kotlin', variant: 'original', url: 'https://kotlinlang.org/' },
  PHP: { cdn: 'devicon', slug: 'php', variant: 'original', url: 'https://www.php.net/' },
  'C++': { cdn: 'devicon', slug: 'cplusplus', variant: 'original', url: 'https://isocpp.org/' },

  // ── Frontend ──────────────────────────────────────────────────────────
  React: { cdn: 'devicon', slug: 'react', variant: 'original', url: 'https://react.dev/' },
  'Next.js': { cdn: 'devicon', slug: 'nextjs', variant: 'original', url: 'https://nextjs.org/' },
  Angular: { cdn: 'devicon', slug: 'angular', variant: 'original', url: 'https://angular.dev/' },
  Vue: { cdn: 'devicon', slug: 'vuejs', variant: 'original', url: 'https://vuejs.org/' },
  Redux: { cdn: 'devicon', slug: 'redux', variant: 'original', url: 'https://redux.js.org/' },
  RxJS: { cdn: 'devicon', slug: 'rxjs', variant: 'original', url: 'https://rxjs.dev/' },
  'Tailwind CSS': {
    cdn: 'devicon',
    slug: 'tailwindcss',
    variant: 'original',
    url: 'https://tailwindcss.com/',
  },
  jQuery: { cdn: 'devicon', slug: 'jquery', variant: 'original', url: 'https://jquery.com/' },

  // ── Backend ───────────────────────────────────────────────────────────
  'Node.js': { cdn: 'devicon', slug: 'nodejs', variant: 'original', url: 'https://nodejs.org/' },
  Express: { cdn: 'devicon', slug: 'express', variant: 'original', url: 'https://expressjs.com/' },
  // dotnetcore = correct purple .NET Core logo
  '.NET / ASP.NET': {
    cdn: 'devicon',
    slug: 'dotnetcore',
    variant: 'original',
    url: 'https://dotnet.microsoft.com/',
  },
  Django: {
    cdn: 'devicon',
    slug: 'django',
    variant: 'plain',
    url: 'https://www.djangoproject.com/',
  },
  Flask: {
    cdn: 'devicon',
    slug: 'flask',
    variant: 'original',
    url: 'https://flask.palletsprojects.com/',
  },
  GraphQL: { cdn: 'devicon', slug: 'graphql', variant: 'plain', url: 'https://graphql.org/' },
  FastAPI: {
    cdn: 'devicon',
    slug: 'fastapi',
    variant: 'original',
    url: 'https://fastapi.tiangolo.com/',
  },
  Kafka: {
    cdn: 'devicon',
    slug: 'apachekafka',
    variant: 'original',
    url: 'https://kafka.apache.org/',
  },
  Knex: { cdn: 'devicon', slug: 'knexjs', variant: 'original', url: 'https://knexjs.org/' },

  // ── Databases ─────────────────────────────────────────────────────────
  PostgreSQL: {
    cdn: 'devicon',
    slug: 'postgresql',
    variant: 'original',
    url: 'https://www.postgresql.org/',
  },
  MySQL: { cdn: 'devicon', slug: 'mysql', variant: 'original', url: 'https://www.mysql.com/' },
  MongoDB: {
    cdn: 'devicon',
    slug: 'mongodb',
    variant: 'original',
    url: 'https://www.mongodb.com/',
  },
  'SQL Server': {
    cdn: 'devicon',
    slug: 'microsoftsqlserver',
    variant: 'plain',
    url: 'https://www.microsoft.com/en-us/sql-server',
  },
  // Databricks has no Devicon entry — use Simple Icons with official red brand color
  Databricks: {
    cdn: 'simpleicons',
    slug: 'databricks',
    color: 'FF3621',
    url: 'https://www.databricks.com/',
  },
  Supabase: { cdn: 'devicon', slug: 'supabase', variant: 'original', url: 'https://supabase.com/' },

  // ── DevOps & Cloud ────────────────────────────────────────────────────
  Docker: { cdn: 'devicon', slug: 'docker', variant: 'original', url: 'https://www.docker.com/' },
  Kubernetes: {
    cdn: 'devicon',
    slug: 'kubernetes',
    variant: 'plain',
    url: 'https://kubernetes.io/',
  },
  AWS: {
    cdn: 'devicon',
    slug: 'amazonwebservices',
    variant: 'plain-wordmark',
    url: 'https://aws.amazon.com/',
  },
  'Google Cloud': {
    cdn: 'devicon',
    slug: 'googlecloud',
    variant: 'original',
    url: 'https://cloud.google.com/',
  },
  // Render has no Devicon entry — use Simple Icons with official teal brand color
  Render: { cdn: 'simpleicons', slug: 'render', color: '46E3B7', url: 'https://render.com/' },
  Nginx: { cdn: 'devicon', slug: 'nginx', variant: 'original', url: 'https://nginx.org/' },
  'GitHub Actions': {
    cdn: 'devicon',
    slug: 'githubactions',
    variant: 'original',
    url: 'https://github.com/features/actions',
  },

  // ── Testing ───────────────────────────────────────────────────────────
  Jest: { cdn: 'devicon', slug: 'jest', variant: 'plain', url: 'https://jestjs.io/' },
  // xUnit has no Devicon — use vitest as the closest testing-framework icon
  xUnit: { cdn: 'devicon', slug: 'vitest', variant: 'original', url: 'https://xunit.net/' },
  Pytest: { cdn: 'devicon', slug: 'pytest', variant: 'original', url: 'https://pytest.org/' },
  // React Testing Library uses Simple Icons (no Devicon entry)
  'React Testing Library': {
    cdn: 'simpleicons',
    slug: 'testinglibrary',
    color: 'E33332',
    url: 'https://testing-library.com/',
  },
  Postman: {
    cdn: 'devicon',
    slug: 'postman',
    variant: 'original',
    url: 'https://www.postman.com/',
  },
  ESLint: { cdn: 'devicon', slug: 'eslint', variant: 'original', url: 'https://eslint.org/' },

  // ── Tools ─────────────────────────────────────────────────────────────
  Git: { cdn: 'devicon', slug: 'git', variant: 'original', url: 'https://git-scm.com/' },
  Unity: { cdn: 'devicon', slug: 'unity', variant: 'original', url: 'https://unity.com/' },
  // Dynamics 365 has no Devicon — use Simple Icons with official deep-blue brand color
  'Dynamics 365': {
    cdn: 'simpleicons',
    slug: 'microsoftdynamics365',
    color: '002050',
    url: 'https://www.microsoft.com/en-us/dynamics-365',
  },
  Webpack: { cdn: 'devicon', slug: 'webpack', variant: 'original', url: 'https://webpack.js.org/' },
  Vite: { cdn: 'devicon', slug: 'vitejs', variant: 'original', url: 'https://vitejs.dev/' },
  'Android Studio': {
    cdn: 'devicon',
    slug: 'androidstudio',
    variant: 'original',
    url: 'https://developer.android.com/studio',
  },
  Xcode: {
    cdn: 'devicon',
    slug: 'xcode',
    variant: 'original',
    url: 'https://developer.apple.com/xcode/',
  },
  'Visual Studio': {
    cdn: 'devicon',
    slug: 'visualstudio',
    variant: 'plain',
    url: 'https://visualstudio.microsoft.com/',
  },
  Arduino: { cdn: 'devicon', slug: 'arduino', variant: 'original', url: 'https://www.arduino.cc/' },
} as const;
