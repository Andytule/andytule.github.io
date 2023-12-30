import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Chip from "../Chip/Chip";
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
        <h3 className="project-title">
          {project.title}
          {project.demoLink && (
            <a
              className="project-demo"
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          )}
        </h3>

        <p className="project-description">{project.description}</p>

        <p>
          Github:{" "}
          <a href={project.githubLink}>
            <FontAwesomeIcon icon={faGithub} />
            {project.githubLink}
          </a>
        </p>

        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <Chip key={index} technology={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
