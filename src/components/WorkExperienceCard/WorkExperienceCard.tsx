import React from "react";
import { WorkExperience } from "../../types/WorkExperience";

interface WorkExperienceCardProps {
  experience: WorkExperience;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  experience,
}) => {
  return (
    <div>
      <h3>{experience.company}</h3>
      <p>{experience.position}</p>
      <p>{experience.location}</p>
      <p>{`${experience.startDate} - ${experience.endDate}`}</p>
      <h4>Responsibilities:</h4>
      <ul>
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <p>{`Technologies Used: ${experience.technologies.join(", ")}`}</p>
    </div>
  );
};

export default WorkExperienceCard;
