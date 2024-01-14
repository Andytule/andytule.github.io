import React from "react";
import "./WorkExperience.scss";
import { Chrono } from "react-chrono";
import WorkExperienceCard from "../../components/WorkExperienceCard/WorkExperienceCard";
import workExperiences from "../../data/workExperienceData";

const WorkExperiences: React.FC = () => {
  const events = workExperiences.map((experience, index) => ({
    title: experience.company,
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
        />
      </div>
    </div>
  );
};

export default WorkExperiences;
