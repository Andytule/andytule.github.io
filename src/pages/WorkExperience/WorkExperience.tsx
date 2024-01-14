import React from "react";
import "./WorkExperience.scss";
import { Chrono } from "react-chrono";
import WorkExperienceCard from "../../components/WorkExperienceCard/WorkExperienceCard";
import CompanyLogo from "../../components/CompanyLogo/CompanyLogo";
import workExperiences from "../../data/workExperienceData";
import companyLogos from "../../utils/companyLogos";

const WorkExperiences: React.FC = () => {
  const events = workExperiences.map((experience, index) => ({
    title: (
      <CompanyLogo
        title={experience.company}
        imageUrl={companyLogos[experience.logoName]}
      />
    ),
    cardDetailedText: <WorkExperienceCard experience={experience} />,
  }));

  const customTheme = {
    primary: "#558bd9",
    secondary: "#99b9e8",
    titleColorActive: "#ffffff",
  };

  return (
    <div className="work-experience">
      <div className="work-experience-container">
        <h2 className="section-title">Work Experience</h2>
        <Chrono
          items={events}
          mode="VERTICAL"
          theme={customTheme}
          hideControls
          disableClickOnCircle
          disableNavOnKey
        />
      </div>
    </div>
  );
};

export default WorkExperiences;
