import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import Chip from "../Chip/Chip";
import "./ProjectCard.scss";
import { Project } from "../../pages/Projects/Projects";
import projectImages from "../../utils/projectImages";
// import technologyData from "../../data/technologyData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${projectImages[project.imageName]})`,
  };

  return (
    <div className="project" style={backgroundImageStyle}>
      {/* Your other content goes here */}
    </div>
  );
};

export default ProjectCard;
