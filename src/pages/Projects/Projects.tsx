import React from "react";
import "./Projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectsData from "../../data/projectsData";

export interface Project {
  title: string;
  description: string;
  demoLink: string | null;
  githubLink: string;
  technologies: string[];
  imageName: string;
}

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        {projectsData.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
