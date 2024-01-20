import React from "react";
import "./WorkExperienceCard.scss";
import { WorkExperience } from "../../types/WorkExperience";
import Chip from "../Chip/Chip";
import technologyData from "../../data/technologyData";

interface WorkExperienceCardProps {
  experience: WorkExperience;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  experience,
}) => {
  return (
    <div className="work-experience-card">
      <div className="work-experience-header">
        <h2 className="work-experience-position">{experience.position}</h2>
        <p className="work-experience-subheader">
          {experience.company} - {experience.location}
        </p>
      </div>
      <p className="work-experience-responsibilities">
        {experience.responsibilities}
      </p>
      <div className="work-experience-technologies">
        {experience.technologies.map((technology, index) => (
          <Chip
            key={index}
            text={technologyData[technology].originalName}
            link={technologyData[technology].link}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceCard;
