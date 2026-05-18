import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../content/page.jsx";
import ProjectCard from "../components/ReactBits/ProjectCard.jsx";
import FeaturedProjectCard from "../components/ReactBits/FeaturedProjectCard.jsx";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  // Fixes duplicate Memories card and missing Converse2K24 bug in original code
  const featuredProject = projects[0]; 
  const otherProjects = projects.slice(1); 

  const filteredProjects =
    filter === "all"
      ? otherProjects
      : filter === "live"
      ? otherProjects.filter((p) => p.live)
      : otherProjects.filter((p) => !p.live);

  return (
    <section className="relative bg-primary text-primary min-h-screen py-20 px-6 sm:px-12 lg:px-8 overflow-hidden">
      
      {/* Visual Canvas Enhancement: Glowing Theme-Aware Background Orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-highlight/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[45%] right-[-15%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-purple-500/5 blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="p-3 rounded-2xl bg-highlight/10 border border-highlight/20 mb-4 shadow-lg shadow-highlight/5">
            <FolderOpenIcon className="text-highlight" sx={{ fontSize: 40 }} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            My Creative <span className="text-highlight font-extrabold">Archive</span>
          </h1>
          <p className="text-third text-sm md:text-base mt-4 max-w-xl leading-relaxed">
            A comprehensive catalog of full-stack products, lab utilities, algorithms, and frontend interfaces I have designed and deployed.
          </p>
        </motion.div>

        {/* Featured Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-24"
        >
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-highlight font-black px-3.5 py-1 bg-highlight/10 rounded-full border border-highlight/20 select-none">
              Featured Showcase
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mt-3">
              {featuredProject.title}
            </h2>
            <div className="h-1 w-16 bg-highlight rounded-full mt-3 shadow-md shadow-highlight/45"></div>
          </div>

          <FeaturedProjectCard 
            {...featuredProject} 
          />
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-highlight font-black px-3.5 py-1 bg-highlight/10 rounded-full border border-highlight/20 select-none">
              Browse Collections
            </span>
            {/* Bug Fix: Changed from text-white dark:text-black to text-primary to prevent invisible text in light mode */}
            <h2 className="text-2xl md:text-3xl font-bold text-primary mt-3">
              All Repositories
            </h2>
            <div className="h-1 w-16 bg-highlight rounded-full mt-3 shadow-md shadow-highlight/45"></div>
          </div>

          {/* Interactive Navigation Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
            {[
              { type: "all", label: `📁 All (${otherProjects.length})` },
              { type: "live", label: `⚡ Live Demos (${otherProjects.filter((p) => p.live).length})` },
              { type: "repo", label: `💻 Code Only (${otherProjects.filter((p) => !p.live).length})` }
            ].map(({ type, label }) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                  filter === type
                    ? "bg-highlight text-dark shadow-xl shadow-highlight/25 scale-105 border border-highlight/20"
                    : "bg-secondary border border-divider text-third hover:text-highlight hover:border-highlight hover:bg-secondary/70 backdrop-blur-sm"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid with dynamic tech stacks loaded */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              index={index} 
            />
          ))}
        </div>

        {/* Clean Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 glass-card rounded-3xl border border-divider max-w-xl mx-auto"
          >
            <p className="text-xl font-bold text-third">
              No repositories found under this filter.
            </p>
          </motion.div>
        )}

        {/* Bottom Interactive Stats Panel */}
        <div className="mt-28 pt-20 border-t border-divider/25">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <motion.div 
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-secondary/20 border border-divider/30 hover:border-highlight/30 transition-all duration-300 text-center"
            >
              <div className="text-4xl sm:text-5xl font-black text-highlight mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {projects.length}
              </div>
              <div className="text-xs sm:text-sm text-third font-medium tracking-wider uppercase">
                Total Projects
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-secondary/20 border border-divider/30 hover:border-highlight/30 transition-all duration-300 text-center"
            >
              <div className="text-4xl sm:text-5xl font-black text-highlight mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {projects.filter((p) => p.live).length}
              </div>
              <div className="text-xs sm:text-sm text-third font-medium tracking-wider uppercase">
                Live Demos
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-secondary/20 border border-divider/30 hover:border-highlight/30 transition-all duration-300 text-center"
            >
              <div className="text-4xl sm:text-5xl font-black text-highlight mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {
                  projects.filter(
                    (p) =>
                      p.title.toLowerCase().includes("mern") ||
                      p.description.toLowerCase().includes("mern") ||
                      p.title.toLowerCase() === "memories"
                  ).length
                }
              </div>
              <div className="text-xs sm:text-sm text-third font-medium tracking-wider uppercase">
                Full Stack
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-secondary/20 border border-divider/30 hover:border-highlight/30 transition-all duration-300 text-center"
            >
              <div className="text-4xl sm:text-5xl font-black text-highlight mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                100%
              </div>
              <div className="text-xs sm:text-sm text-third font-medium tracking-wider uppercase">
                Open Source
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
