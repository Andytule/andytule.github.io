type AboutItem = {
  input: string;
  return: string;
};

const aboutData: AboutItem[] = [
  {
    input: "Andy.externalLinks",
    return:
      '["<a href="mailto:Andytule321@gmail.com" target="_blank">Andytule321@gmail.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/andy-tu-le/" target="_blank">LinkedIn</a>", "<a rel="noopener" href="https://github.com/Andytule" target="_blank">Github</a>", "<a rel="noopener" href="https://andytule.github.io" target="_blank">Portfolio</a>"]',
  },
  {
    input: "Andy.favouriteTech",
    return: '["TypeScript", "React", "Node.js", "PostgreSQL", ".NET", "Kafka"]',
  },
  {
    input: "Andy.education",
    return:
      '"Software Engineering Technology (Co-op) - McMaster University, Hamilton"',
  },
  {
    input: "Andy.currentLocation",
    return: '"Boston, MA"',
  },
  {
    input: "Andy.interests",
    return: '["frisbee", "baking", "cats", "valorant", "league of legends"]',
  },
];

export default aboutData;
