import React from "react";
import "./ProjectCard.scss";
import { Project } from "../../pages/Projects/Projects";
import images from "../../utils/images";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project">
      <img
        className="project-image"
        src={images[project.imageName]}
        alt={project.title}
      />
      <div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p>Demo: {project.demoLink}</p>
        <p>Github: {project.githubLink}</p>
        <p>Technologies: {project.technologies.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
