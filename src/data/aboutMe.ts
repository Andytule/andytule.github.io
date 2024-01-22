type AboutItem = {
  input: string;
  return: string;
};

const aboutData: AboutItem[] = [
  {
    input: "Andy.contactInfo",
    return:
      '["<a href="mailto:Andytule321@gmail.com" target="_blank">Andytule321@gmail.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/andy-tu-le/" target="_blank">LinkedIn</a>", "<a rel="noopener" href="https://github.com/Andytule" target="_blank">Github</a>"]',
  },
  {
    input: "Andy.favouriteTech",
    return:
      '["TypeScript", "React", ".NET", "PostgreSQL", "Node.js", "Express.js"]',
  },
  {
    input: "Andy.education",
    return: '"Sofware Development - Mohawk College, Hamilton"',
  },
  {
    input: "Andy.currentLocation",
    return: '"Hamilton, ON"',
  },
  {
    input: "Andy.interests",
    return: '["frisbee", "baking", "cats", "valorant", "league of legends"]',
  },
];

export default aboutData;
