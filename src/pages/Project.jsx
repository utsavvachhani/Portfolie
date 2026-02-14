import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../content/page.jsx";
import ProjectCard from "../components/ReactBits/ProjectCard.jsx";
import FeaturedProjectCard from "../components/ReactBits/FeaturedProjectCard.jsx";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const featuredProject = projects[1];
  const otherProjects = projects.slice(1);

  const filteredProjects =
    filter === "all"
      ? otherProjects
      : filter === "live"
      ? otherProjects.filter((p) => p.live)
      : otherProjects.filter((p) => !p.live);

  return (
    <section className="bg-primary text-primary min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <FolderOpenIcon
            className="text-highlight mb-4"
            sx={{ fontSize: 48 }}
          />
          <h1 className="text-4xl md:text-5xl font-bold">
            My <span className="text-highlight">Projects</span>
          </h1>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-2">
              ⭐ Featured Project
            </h2>
            <div className="h-1 w-20 bg-highlight rounded-full mt-2"></div>
          </div>

          <FeaturedProjectCard {...featuredProject} />
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-black mb-2">
              All Projects
            </h2>
            <div className="h-1 w-20 bg-highlight rounded-full mt-2"></div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {["all", "live", "repo"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  filter === type
                    ? "bg-highlight text-white dark:text-black  shadow-lg scale-105"
                    : "bg-secondary border border-divider text-primary hover:border-highlight hover:text-highlight"
                }`}
              >
                {type === "all" && `All (${otherProjects.length})`}
                {type === "live" &&
                  `Live Demos (${otherProjects.filter((p) => p.live).length})`}
                {type === "repo" &&
                  `Code Only (${otherProjects.filter((p) => !p.live).length})`}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-third">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-divider">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-highlight mb-2">
                {projects.length}
              </div>
              <div className="text-third group-hover:text-highlight transition-colors">
                Total Projects
              </div>
            </div>

            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-highlight mb-2">
                {projects.filter((p) => p.live).length}
              </div>
              <div className="text-third group-hover:text-highlight transition-colors">
                Live Demos
              </div>
            </div>

            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-highlight mb-2">
                {
                  projects.filter(
                    (p) =>
                      p.title.toLowerCase().includes("mern") ||
                      p.description.toLowerCase().includes("mern")
                  ).length
                }
              </div>
              <div className="text-third group-hover:text-highlight transition-colors">
                Full Stack
              </div>
            </div>

            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-highlight mb-2">
                100%
              </div>
              <div className="text-third group-hover:text-highlight transition-colors">
                Open Source
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
