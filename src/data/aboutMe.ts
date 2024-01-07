type AboutItem = {
  input: string;
  return: string;
};

const aboutData: AboutItem[] = [
  {
    input: "Andy.currentLocation",
    return: '"Hamilton, ON"',
  },
  {
    input: "Andy.contactInfo",
    return:
      '["<a href="mailto:andytule321@gmail.com" target="_blank">andytule321@gmail.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/andy-tu-le/" target="_blank">LinkedIn</a>", "<a rel="noopener" href="https://github.com/Andytule" target="_blank">github</a>"]',
  },
  {
    input: "Andy.resume",
    return:
      '"<a rel="noopener" href="/resume.pdf" target="_blank">resume.pdf</a>"',
  },
  {
    input: "Andy.interests",
    return: '["frisbee", "baking", "cats", "valorant", "league of legends"]',
  },
  {
    input: "Andy.education",
    return: '"Sofware Development - Mohawk College, Hamilton"',
  },
];

export default aboutData;
