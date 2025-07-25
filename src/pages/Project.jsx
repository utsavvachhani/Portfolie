import React from "react";
import { projects } from "../content/page";
import ProjectCard from "../components/ReactBits/ProjectCard.jsx";

const ProjectsSection = () => {
  return (
    <section className="bg-primary text-primary py-20 px-0">
      <h2 className="text-4xl font-bold text-center mb-12 text-hover">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
