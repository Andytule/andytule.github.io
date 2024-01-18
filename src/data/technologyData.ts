interface TechnologyData {
  [key: string]: { originalName: string; link: string };
}

const technologyData: TechnologyData = {
  typescript: {
    originalName: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  react: { originalName: "React", link: "https://reactjs.org/" },
  materialui: { originalName: "Material-UI", link: "https://material-ui.com/" },
  nodejs: { originalName: "Node.js", link: "https://nodejs.org/" },
  mysql: { originalName: "MySQL", link: "https://www.mysql.com/" },
  php: { originalName: "PHP", link: "https://www.php.net/" },
  javascript: {
    originalName: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  rxjs: { originalName: "RxJS", link: "https://rxjs.dev/" },
  chartsjs: { originalName: "Charts.js", link: "https://www.chartjs.org/" },
  html: {
    originalName: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  css: {
    originalName: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  threejs: { originalName: "Three.js", link: "https://threejs.org/" },
  jquery: { originalName: "jQuery", link: "https://jquery.com/" },
  python: { originalName: "Python", link: "https://www.python.org/" },
  cpp: { originalName: "C++", link: "http://www.cplusplus.com/" },
  arduino: { originalName: "Arduino", link: "https://www.arduino.cc/" },
  raspberrypi: {
    originalName: "Raspberry Pi",
    link: "https://www.raspberrypi.org/",
  },
  jest: { originalName: "Jest", link: "https://jestjs.io/" },
  lint: { originalName: "Lint", link: "https://eslint.org/" },
  semanticui: { originalName: "Semantic UI", link: "https://semantic-ui.com/" },
  ngxtranslate: {
    originalName: "NGX-Translate",
    link: "https://github.com/ngx-translate/core",
  },
  express: { originalName: "Express", link: "https://expressjs.com/" },
  knex: { originalName: "Knex", link: "http://knexjs.org/" },
  postgres: { originalName: "PostgreSQL", link: "https://www.postgresql.org/" },
  docker: { originalName: "Docker", link: "https://www.docker.com/" },
  nginx: { originalName: "Nginx", link: "https://www.nginx.com/" },
  dynamics365: {
    originalName: "Dynamics 365",
    link: "https://dynamics.microsoft.com/en-us/",
  },
  adyen: { originalName: "Adyen", link: "https://www.adyen.com/" },
  angular: { originalName: "Angular", link: "https://angular.io/" },
  unity: { originalName: "Unity", link: "https://unity.com/" },
};

export default technologyData;
