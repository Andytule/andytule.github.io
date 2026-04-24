interface EducationItem {
  school: string;
  schoolLink: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  logoName: string;
}

const educationData: EducationItem[] = [
  {
    school: "McMaster University",
    schoolLink: "https://www.mcmaster.ca/",
    degree: "Bachelor of Technology (B.Tech.)",
    field: "Software Engineering Technology (Co-op)",
    location: "Hamilton, ON",
    startDate: "2022",
    endDate: "2024",
    logoName: "mcmasterLogo",
  },
  {
    school: "Mohawk College",
    schoolLink: "https://www.mohawkcollege.ca/",
    degree: "Ontario College Advanced Diploma",
    field: "Computer Systems Technology - Software Development",
    location: "Hamilton, ON",
    startDate: "2019",
    endDate: "2023",
    logoName: "mohawkLogo",
  },
];

export default educationData;
