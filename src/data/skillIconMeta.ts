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

interface InlineSvgMeta {
  cdn: 'inline';
  /** Raw SVG string rendered directly. Use only when absent from both Devicon + Simple Icons. */
  svg: string;
  /** Official website URL opened when the icon is clicked */
  url: string;
}

export type SkillIconMeta = DevIconMeta | SimpleIconMeta | InlineSvgMeta;

/** Lookup keyed by the exact skill name used in `src/data/index.ts` */
export const SKILL_ICON_META: Readonly<Record<string, SkillIconMeta>> = {
  // ── Languages ────────────────────────────────────────────────────────
  HTML: {
    cdn: 'devicon',
    slug: 'html5',
    variant: 'original',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  CSS: {
    cdn: 'devicon',
    slug: 'css3',
    variant: 'original',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
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
  // SQL — no single correct logo; use a clean inline database cylinder SVG
  SQL: {
    cdn: 'inline',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="sqlg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#60A0F0"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
  </defs>
  <!-- cylinder body -->
  <rect x="5" y="11" width="22" height="14" fill="url(#sqlg)"/>
  <!-- bottom ellipse -->
  <ellipse cx="16" cy="25" rx="11" ry="4" fill="#1D4ED8"/>
  <!-- top ellipse (lighter) -->
  <ellipse cx="16" cy="11" rx="11" ry="4" fill="#93C5FD"/>
  <!-- middle ellipse line -->
  <ellipse cx="16" cy="18" rx="11" ry="4" fill="none" stroke="#93C5FD" stroke-width="0.8" opacity="0.6"/>
</svg>`,
    url: 'https://en.wikipedia.org/wiki/SQL',
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
  // Express has no colored Devicon variant — use Simple Icons with a light grey so it reads on dark surfaces
  Express: { cdn: 'simpleicons', slug: 'express', color: 'CCCCCC', url: 'https://expressjs.com/' },
  // dotnetcore = correct purple .NET Core logo
  '.NET / ASP.NET': {
    cdn: 'devicon',
    slug: 'dotnetcore',
    variant: 'original',
    url: 'https://dotnet.microsoft.com/',
  },
  // Django's devicon plain variant is near-invisible dark green on dark surfaces
  // — use Simple Icons with Django's vivid brand green instead
  Django: {
    cdn: 'simpleicons',
    slug: 'django',
    color: '44B78B',
    url: 'https://www.djangoproject.com/',
  },
  // Flask has no colored Devicon variant — use Simple Icons with white so the minimal logo reads clearly
  Flask: {
    cdn: 'simpleicons',
    slug: 'flask',
    color: 'FFFFFF',
    url: 'https://flask.palletsprojects.com/',
  },
  GraphQL: { cdn: 'devicon', slug: 'graphql', variant: 'plain', url: 'https://graphql.org/' },
  FastAPI: {
    cdn: 'devicon',
    slug: 'fastapi',
    variant: 'original',
    url: 'https://fastapi.tiangolo.com/',
  },
  // Kafka's Devicon variant is monochrome black — use Simple Icons with the official white brand color
  Kafka: {
    cdn: 'simpleicons',
    slug: 'apachekafka',
    color: 'FFFFFF',
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
  // Dynamics 365 — no entry in Devicon or Simple Icons.
  // Use the Microsoft Windows logo (4-color flag) as the brand proxy.
  'Dynamics 365': {
    cdn: 'inline',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path d="M2 4.8L13.5 3.2V14.5H2z" fill="#F25022"/>
  <path d="M14.5 3L30 0.8V14.5H14.5z" fill="#7FBA00"/>
  <path d="M2 15.5H13.5V26.8L2 25.2z" fill="#00A4EF"/>
  <path d="M14.5 15.5H30V29.2L14.5 27z" fill="#FFB900"/>
</svg>`,
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
