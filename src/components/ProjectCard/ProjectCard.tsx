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
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.imageName && (
        <img
          src={images[project.imageName]}
          alt={project.title}
          style={{ width: "10%" }}
        />
      )}
      <p>Demo: {project.demoLink}</p>
      <p>Github: {project.githubLink}</p>
      <p>Technologies: {project.technologies.join(", ")}</p>
    </div>
  );
};

export default ProjectCard;
