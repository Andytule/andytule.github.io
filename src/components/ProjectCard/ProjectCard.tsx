import React from "react";
import "./ProjectCard.scss";
import { Project } from "../../pages/Projects/Projects";
import projectImages from "../../utils/projectImages";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${projectImages[project.imageName]})`,
  };

  return (
    <div className="project">
      <div className="project-image" style={backgroundImageStyle}></div>
      <div className="project-details">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
