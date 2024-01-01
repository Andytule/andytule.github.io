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
  rxjs: { originalName: "RxJs", link: "https://rxjs.dev/" },
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
};

export default technologyData;
