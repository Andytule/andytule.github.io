import React from "react";
import "./Projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectsData from "../../data/projectsData";
import { Project } from "../../types/Projects";

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        {projectsData.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
