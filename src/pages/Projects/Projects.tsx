import React from "react";
import "./Projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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
        <ResponsiveMasonry columnsCountBreakPoints={{ 1000: 1, 1001: 2 }}>
          <Masonry gutter="3rem">
            {projectsData.map((project: Project, index: number) => (
              <ProjectCard project={project} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Projects;
