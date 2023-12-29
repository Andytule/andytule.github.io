import React from "react";
import { Project } from "../../pages/Projects/Projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>Demo: {project.demoLink}</p>
      <p>Github: {project.githubLink}</p>
      <p>Technologies: {project.technologies.join(", ")}</p>
    </div>
  );
};

export default ProjectCard;
