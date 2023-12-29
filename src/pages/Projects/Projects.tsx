import React from "react";
import "./Projects.scss";
import projectData from "../../data/projects.json";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

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
      <h2>Welcome to the Projects Page</h2>
      <div className="projects-container">
        {projectData.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
