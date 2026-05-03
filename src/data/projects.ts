import type { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    title: 'Chord-Shift',
    shortDescription: 'Full-stack chord transposition tool',
    description:
      'Full-stack chord transposition app with capo and semitone modes, saved chord sheets, and auth — built on a REST API with a strategy-pattern transposition engine.',
    tags: [
      'TypeScript',
      'React',
      'SCSS',
      'Vite',
      'NodeJS',
      'Express',
      'Supabase',
      'Docker',
      'Nginx',
      'Jest',
    ],
    sourceUrl: 'https://github.com/Andytule/chord-shift',
    demoUrl: 'https://andytule.github.io/chord-shift/',
    image: '/chord-shift.png',
    featured: true,
  },
  {
    title: 'Rate My Course',
    shortDescription: 'Collaborative university course review platform',
    description:
      'Collaborative course review platform with ratings, forums, surveys, and user profiles — React/TypeScript frontend backed by a PHP REST API and MySQL database.',
    tags: ['TypeScript', 'React', 'MaterialUI', 'PHP', 'MySQL', 'Jest', 'ReactTestingLibrary'],
    demoUrl: 'https://andytule.github.io/rate-my-course/',
    sourceUrl: 'https://github.com/Andytule/rate-my-course',
    image: '/rate-my-course.png',
  },
  {
    title: 'Truck Load Visualizer',
    shortDescription: '3D cargo load planning tool',
    description:
      '3D truck cargo load planning tool that parses XML load instructions and renders bundles, stacks, and dunnage inside a scaled truck model — with orbit/pivot camera controls and a pick-list UI.',
    tags: ['CPlusPlus', 'Unity'],
    sourceUrl: 'https://github.com/Andytule/truck-load-visualizer',
    image: '/truck-load-visualizer.png',
  },
  {
    title: 'Chess',
    shortDescription: 'Real-time multiplayer chess app',
    description:
      'Real-time multiplayer chess app with full rule enforcement including castling, en passant, and promotion — React frontend using RxJS observables for game state, backed by a Node.js/Express server.',
    tags: ['JavaScript', 'React', 'RxJS', 'NodeJS', 'Express'],
    demoUrl: 'https://andytule.github.io/chess/',
    sourceUrl: 'https://github.com/Andytule/chess',
    image: '/chess.png',
  },
  {
    title: 'Covid Tracker',
    shortDescription: 'Live Covid-19 stats dashboard',
    description:
      'Live Covid-19 stats dashboard with country filtering, animated case counters, and Chart.js line/bar charts — built with React and Material UI, fetching from public COVID-19 REST APIs.',
    tags: ['JavaScript', 'React', 'MaterialUI', 'ChartJS'],
    demoUrl: 'https://andytule.github.io/covid-app/',
    sourceUrl: 'https://github.com/Andytule/covid-app',
    image: '/covid-app.png',
  },
  {
    title: 'Blokus',
    shortDescription: '3D multiplayer board game in the browser',
    description:
      '4-player Blokus board game rendered in the browser with Three.js — featuring 3D LEGO-style game pieces, GLB model loading, raycasting-based piece placement, and an in-game leaderboard.',
    tags: ['HTML', 'CSS', 'JavaScript', 'ThreeJS', 'jQuery'],
    demoUrl: 'https://andytule.github.io/blokkus/',
    sourceUrl: 'https://github.com/Andytule/blokkus',
    image: '/blokkus.png',
  },
  {
    title: 'A* Pathfinder',
    shortDescription: 'Interactive A* algorithm visualizer',
    description:
      'Interactive grid-based A* pathfinding visualizer built with vanilla JavaScript and HTML Canvas — lets users paint walls and watch the algorithm find the shortest path in real time.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://andytule.github.io/a-star-pathfinder/',
    sourceUrl: 'https://github.com/Andytule/a-star-pathfinder',
    image: '/a-star-pathfinder.png',
  },
  {
    title: 'Electromagnetic Roomba',
    shortDescription: 'Autonomous metal-collecting robot',
    description:
      'Autonomous metal-collecting robot controlled via a Python/Flask web server running on a Raspberry Pi — sending serial commands to an Arduino that drives servos and an electromagnet to collect metal objects.',
    tags: ['Python', 'Arduino', 'RaspberryPi'],
    sourceUrl: 'https://github.com/Andytule/electromagnetic-robot',
    image: '/electro-magnetic-roomba.png',
  },
];
