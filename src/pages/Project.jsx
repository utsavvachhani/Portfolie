import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { projects } from "../content/page.jsx";
import ProjectCard from "../components/ReactBits/ProjectCard.jsx";
import FeaturedProjectCard from "../components/ReactBits/FeaturedProjectCard.jsx";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  // Filter projects by category and search keyword
  const filteredProjects = useMemo(() => {
    return otherProjects.filter((p) => {
      const matchesCategory =
        filter === "all"
          ? true
          : filter === "live"
          ? Boolean(p.live && p.live.trim() !== "")
          : !p.live || p.live.trim() === "";

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.techStack?.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [otherProjects, filter, searchQuery]);

  return (
    <section className="relative bg-primary text-primary min-h-screen pt-28 sm:pt-36 pb-20 px-6 sm:px-12 lg:px-8 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-highlight/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] right-[-15%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-purple-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Page Header with Navbar Clearance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="p-3 rounded-2xl bg-highlight/10 border border-highlight/20 mb-3.5 shadow-md">
            <FolderOpenIcon className="text-highlight" sx={{ fontSize: 36 }} />
          </div>
          <span className="text-xs uppercase tracking-widest text-highlight font-black px-3.5 py-1 bg-highlight/10 rounded-full border border-highlight/20 select-none mb-3">
            Open Source Catalog
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            My Creative <span className="text-highlight font-extrabold">Archive</span>
          </h1>
          <p className="text-third text-sm md:text-base mt-4 max-w-xl leading-relaxed">
            A comprehensive catalog of full-stack products, lab utilities, algorithms, and frontend interfaces I have designed and deployed.
          </p>
        </motion.div>

        {/* Featured Project Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-highlight font-black px-3.5 py-1 bg-highlight/10 rounded-full border border-highlight/20 select-none">
              Flagship Application
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mt-3">
              {featuredProject.title}
            </h2>
            <div className="h-1 w-16 bg-highlight rounded-full mt-3 shadow-md shadow-highlight/45" />
          </div>

          <FeaturedProjectCard {...featuredProject} />
        </motion.div>

        {/* Interactive Filter & Search Bar - Ambient Glass Elevation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-highlight font-black px-3.5 py-1 bg-highlight/10 rounded-full border border-highlight/20 select-none">
              Browse Repositories
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mt-3">
              All Project Repositories
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-secondary/30 backdrop-blur-2xl p-4 sm:p-5 rounded-3xl border border-divider/10 shadow-2xl max-w-4xl mx-auto">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { type: "all", label: `📁 All (${otherProjects.length})` },
                { type: "live", label: `⚡ Live Demos (${otherProjects.filter((p) => p.live && p.live.trim() !== "").length})` },
                { type: "repo", label: `💻 Code Repos (${otherProjects.filter((p) => !p.live || p.live.trim() === "").length})` },
              ].map(({ type, label }) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 cursor-pointer ${
                    filter === type
                      ? "btn-primary shadow-lg scale-105"
                      : "btn-secondary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Live Search Box */}
            <div className="relative w-full md:w-64">
              <SearchIcon sx={{ fontSize: 18 }} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-third" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stack or title..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-primary/60 text-primary text-xs border border-divider/15 focus:border-highlight focus:outline-none transition-colors"
              />
            </div>
          </div>
        </motion.div>

        {/* Counter Pill */}
        <div className="mb-6 flex items-center justify-between text-xs text-third font-medium max-w-6xl mx-auto px-2">
          <span>
            Showing <strong className="text-highlight font-black">{filteredProjects.length}</strong> project{filteredProjects.length === 1 ? "" : "s"}
          </span>
          <span className="flex items-center gap-1">
            <FilterListIcon sx={{ fontSize: 14 }} className="text-highlight" />
            <span>Interactive Repository Grid</span>
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id || index} {...project} index={index} />
          ))}
        </div>

        {/* Clean Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 rounded-3xl border border-divider/10 max-w-xl mx-auto bg-secondary/20"
          >
            <p className="text-sm font-bold text-third mb-4">
              No repositories found matching your filter or search query.
            </p>
            <button
              onClick={() => {
                setFilter("all");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-xl btn-primary font-bold text-xs cursor-pointer"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Bottom Interactive Stats Panel */}
        <div className="mt-24 pt-12 border-t border-divider/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <motion.div 
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-secondary/30 border border-divider/10 hover:border-highlight/25 transition-all duration-300 text-center shadow-md"
            >
              <div className="text-4xl sm:text-5xl font-black text-highlight mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {projects.length}
              </div>
              <div className="text-xs sm:text-sm text-third font-medium tracking-wider uppercase">
                Total Projects
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-secondary/30 border border-divider/10 hover:border-highlight/25 transition-all duration-300 text-center shadow-md"
            >
              <div className="text-4xl sm:text-5xl font-black text-highlight mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {projects.filter((p) => p.live && p.live.trim() !== "").length}
              </div>
              <div className="text-xs sm:text-sm text-third font-medium tracking-wider uppercase">
                Live Demos
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-secondary/30 border border-divider/10 hover:border-highlight/25 transition-all duration-300 text-center shadow-md"
            >
              <div className="text-4xl sm:text-5xl font-black text-highlight mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {
                  projects.filter(
                    (p) =>
                      p.title.toLowerCase().includes("mern") ||
                      p.description.toLowerCase().includes("mern") ||
                      p.title.toLowerCase() === "converse2k25" ||
                      p.title.toLowerCase() === "memories"
                  ).length
                }
              </div>
              <div className="text-xs sm:text-sm text-third font-medium tracking-wider uppercase">
                Full Stack
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-secondary/30 border border-divider/10 hover:border-highlight/25 transition-all duration-300 text-center shadow-md"
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
