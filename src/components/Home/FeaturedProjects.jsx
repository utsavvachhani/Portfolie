import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "../../content/page.jsx";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import StorageIcon from "@mui/icons-material/Storage";
import HttpIcon from "@mui/icons-material/Http";
import CodeIcon from "@mui/icons-material/Code";
import FilterListIcon from "@mui/icons-material/FilterList";

const FeaturedProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedProject, setExpandedProject] = useState(null);

  // Filter projects dynamically linked with projectCategories and techStack array
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search matching across title, description, and techStack array
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack?.some((tech) => tech.toLowerCase().includes(query));

      if (!matchesSearch) return false;
      if (selectedCategory === "all") return true;

      // Category matching dynamically linked with techStack values
      const techList = project.techStack?.map((t) => t.toLowerCase()) || [];

      if (selectedCategory === "mern") {
        return (
          techList.includes("mongodb") ||
          techList.includes("express.js") ||
          techList.includes("node.js") ||
          techList.includes("react.js")
        );
      }
      if (selectedCategory === "react") {
        return (
          techList.includes("react.js") ||
          techList.includes("react") ||
          techList.includes("next.js") ||
          techList.includes("next js")
        );
      }
      if (selectedCategory === "node") {
        return (
          techList.includes("node.js") ||
          techList.includes("express.js") ||
          techList.includes("socket.io") ||
          techList.includes("whatsapp-web.js")
        );
      }
      if (selectedCategory === "web") {
        return (
          techList.includes("html5") ||
          techList.includes("css3") ||
          techList.includes("javascript (es6+)") ||
          techList.includes("vanilla js") ||
          techList.includes("c programming")
        );
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="featured-projects" className="relative z-10 py-24 px-6 sm:px-12 lg:px-8 bg-primary border-t border-divider/15">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-highlight font-black px-4 py-1.5 rounded-full bg-highlight/10 border border-highlight/25 select-none inline-block mb-3"
          >
            Software Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight mb-4"
          >
            Featured Engineering <span className="text-highlight">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-third text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Explore full-stack MERN applications, security systems, RESTful microservices, and client UI dashboards built by Utsav Vachhani.
          </motion.p>
        </div>

        {/* Filter Bar & Live Search */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-secondary/40 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-divider/20 shadow-xl">
          
          {/* Category Filter Pills exported from page.jsx */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-highlight text-dark shadow-md shadow-highlight/20 scale-105"
                    : "bg-secondary text-third hover:text-primary hover:bg-secondary/80 border border-divider/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-72">
            <SearchIcon sx={{ fontSize: 18 }} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-third" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack or title..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-primary/70 text-primary text-xs border border-divider/20 focus:border-highlight focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-third hover:text-primary"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Project Results Count Indicator */}
        <div className="mb-6 flex items-center justify-between text-xs text-third font-medium px-2">
          <span>
            Showing <strong className="text-highlight font-black">{filteredProjects.length}</strong> project{filteredProjects.length === 1 ? "" : "s"}
          </span>
          <span className="flex items-center gap-1">
            <FilterListIcon sx={{ fontSize: 14 }} className="text-highlight" />
            <span>Click any technology badge to filter</span>
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedProject === project.title;
              const hasLive = Boolean(project.live && project.live.trim() !== "");

              return (
                <motion.div
                  key={project.id || project.title || index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group glass-card rounded-3xl overflow-hidden hover-lift flex flex-col justify-between border border-divider/20 hover:border-highlight/40 transition-all duration-500 shadow-xl relative"
                >
                  {/* Top Image Banner */}
                  <div className="relative overflow-hidden h-52 bg-black/40">
                    <img
                      src={
                        project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80"
                      }
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                    <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                      <span className="text-[10px] uppercase font-mono font-bold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-highlight border border-white/10 shadow-md">
                        #{index + 1}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 z-10">
                      <h3 className="text-xl font-black text-white tracking-tight drop-shadow-md">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <p className="text-third text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills dynamically linked */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack?.map((tech) => (
                          <button
                            key={tech}
                            onClick={() => setSearchQuery(tech)}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-secondary/80 text-highlight border border-highlight/20 hover:bg-highlight hover:text-dark transition-colors cursor-pointer"
                            title={`Filter by ${tech}`}
                          >
                            {tech}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Technical Breakdown Preview Toggle */}
                    {(project.databaseSchema || project.apiRoutes) && (
                      <div className="pt-2 border-t border-divider/15">
                        <button
                          onClick={() => setExpandedProject(isExpanded ? null : project.title)}
                          className="w-full py-2 px-3 rounded-xl bg-secondary/40 hover:bg-secondary text-[11px] font-bold text-highlight border border-divider/10 transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5">
                            <CodeIcon sx={{ fontSize: 14 }} />
                            <span>{isExpanded ? "Hide Architecture Specs" : "View Technical Specs"}</span>
                          </span>
                          <span>{isExpanded ? "▲" : "▼"}</span>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-3 space-y-3 text-left overflow-hidden"
                            >
                              {project.databaseSchema && (
                                <div className="p-3 rounded-xl bg-secondary/60 border border-divider/10 text-[11px] space-y-1">
                                  <div className="font-bold text-emerald-400 flex items-center gap-1">
                                    <StorageIcon sx={{ fontSize: 13 }} />
                                    <span>DB: {project.databaseSchema.type}</span>
                                  </div>
                                  <div className="text-third font-mono">
                                    {project.databaseSchema.collections?.slice(0, 2).join(", ")}
                                  </div>
                                </div>
                              )}

                              {project.apiRoutes && (
                                <div className="p-3 rounded-xl bg-secondary/60 border border-divider/10 text-[11px] space-y-1">
                                  <div className="font-bold text-highlight flex items-center gap-1">
                                    <HttpIcon sx={{ fontSize: 14 }} />
                                    <span>Endpoints</span>
                                  </div>
                                  <div className="text-third font-mono">
                                    {project.apiRoutes.slice(0, 2).map((r, i) => (
                                      <div key={i}>• {r.method} {r.path}</div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-3 border-t border-divider/15">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 bg-secondary hover:bg-highlight hover:text-dark hover:border-red text-primary font-bold text-xs py-2.5 rounded-xl border border-divider/20 transition-all duration-300 shadow-sm ${
                            hasLive ? "flex-1" : "w-full"
                          }`}
                          title="View Repository"
                        >
                          <GitHubIcon sx={{ fontSize: 16 }} />
                          <span>GitHub Repository</span>
                        </a>
                      )}

                      {hasLive && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 bg-highlight text-dark font-bold text-xs py-2.5 rounded-xl hover:bg-white transition-all duration-300 shadow-md shadow-highlight/20"
                          title="Open Live Site"
                        >
                          <span>Live Demo</span>
                          <LaunchIcon sx={{ fontSize: 14 }} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-secondary/20 rounded-3xl border border-divider/10">
            <p className="text-third text-sm">No projects matching your current search or category filter.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-highlight text-dark font-bold text-xs cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedProjects;
