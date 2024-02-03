import React, { useState, useEffect } from "react";
import "./Projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectsData from "../../data/projectsData";
import { Project } from "../../types/Project";
import Loader from "../../components/Loader/Loader";

const Projects: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 750);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="projects">
      <div className="projects-container">
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <>
            <h2 className="section-title">Projects</h2>
            {projectsData.map((project: Project, index: number) => (
              <ProjectCard key={index} project={project} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
