import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../content/page.jsx";
import ProjectCard from "../components/ReactBits/ProjectCard.jsx";
import FeaturedProjectCard from "../components/ReactBits/FeaturedProjectCard.jsx";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  // Featured project (first one)
  const featuredProject = projects[1];
  const otherProjects = projects.slice(1);

  // Filter projects based on whether they have a live demo
  const filteredProjects =
    filter === "all"
      ? otherProjects
      : filter === "live"
        ? otherProjects.filter((p) => p.live)
        : otherProjects.filter((p) => !p.live);

  return (
    <section className="bg-primary text-primary min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <FolderOpenIcon className="text-highlight" sx={{ fontSize: 32 }} />
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
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-highlight rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              ⭐ Featured Project
            </h2>
          </div>
          <FeaturedProjectCard {...featuredProject} />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-highlight rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              All Projects
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-highlight to-transparent rounded-full"></div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                filter === "all"
                  ? "bg-highlight text-black shadow-lg shadow-highlight/50 scale-105"
                  : "bg-secondary border border-white/20 text-white hover:border-highlight hover:text-highlight"
              }`}
            >
              All Projects ({otherProjects.length})
            </button>
            <button
              onClick={() => setFilter("live")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                filter === "live"
                  ? "bg-highlight text-black shadow-lg shadow-highlight/50 scale-105"
                  : "bg-secondary border border-white/20 text-white hover:border-highlight hover:text-highlight"
              }`}
            >
              Live Demos ({otherProjects.filter((p) => p.live).length})
            </button>
            <button
              onClick={() => setFilter("repo")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                filter === "repo"
                  ? "bg-highlight text-black shadow-lg shadow-highlight/50 scale-105"
                  : "bg-secondary border border-white/20 text-white hover:border-highlight hover:text-highlight"
              }`}
            >
              Repository Only ({otherProjects.filter((p) => !p.live).length})
            </button>
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
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-highlight mb-2">
                {projects.length}
              </div>
              <div className="text-third group-hover:text-white transition-colors">
                Total Projects
              </div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-highlight mb-2">
                {projects.filter((p) => p.live).length}
              </div>
              <div className="text-third group-hover:text-white transition-colors">
                Live Demos
              </div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-highlight mb-2">
                {
                  projects.filter(
                    (p) =>
                      p.title.toLowerCase().includes("mern") ||
                      p.description.toLowerCase().includes("mern"),
                  ).length
                }
              </div>
              <div className="text-third group-hover:text-white transition-colors">
                Full Stack
              </div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-highlight mb-2">100%</div>
              <div className="text-third group-hover:text-white transition-colors">
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
