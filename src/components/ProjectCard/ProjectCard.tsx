import React from "react";
import "./ProjectCard.scss";
import { Project } from "../../types/Project";
import projectImages from "../../utils/projectImages";
import Chip from "../Chip/Chip";
import technologyData from "../../data/technologyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img
        alt={project.title}
        className="project-image"
        src={projectImages[project.imageName]}
        loading="lazy"
      />
      <div className="project-background"></div>
      <div className="project-content">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((technology, index) => (
            <Chip
              key={index}
              text={technologyData[technology].originalName}
              link={technologyData[technology].link}
            />
          ))}
        </div>
        <div className="project-links">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-demo"
            >
              Live Demo{" "}
              <FontAwesomeIcon
                className="arrow-icon"
                icon={faArrowUpRightFromSquare}
              />
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github"
          >
            <FontAwesomeIcon className="github-icon" icon={faGithub} /> View
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
