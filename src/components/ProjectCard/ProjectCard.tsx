import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Chip from "../Chip/Chip";
import "./ProjectCard.scss";
import { Project } from "../../pages/Projects/Projects";
import projectImages from "../../utils/projectImages";
import techHomePageConfig from "../../data/technologyHomePage";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project">
      <img
        className="project-image"
        src={projectImages[project.imageName]}
        alt={project.title}
      />
      <div className="project-content">
        <h3 className="project-title">
          {project.title}
          {project.demoLink && (
            <a
              className="project-demo"
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Demo Link"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          )}
        </h3>

        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <Chip
              key={index}
              technology={techHomePageConfig[tech].originalName}
              link={techHomePageConfig[tech].link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
