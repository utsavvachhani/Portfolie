import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectCard = ({
  title,
  description,
  image,
  repo,
  live,
  techStack = [],
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card rounded-xl overflow-hidden hover-lift flex flex-col justify-between"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 bg-black/20">
        <img
          src={
            image || "https://via.placeholder.com/400x200?text=Project+Preview"
          }
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        {/* Title & Description */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Tech Stack */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-highlight/10 text-highlight border border-highlight/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* GitHub + Live Buttons at Bottom */}
        <div className="flex gap-3 mt-4">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <GitHubIcon sx={{ fontSize: 20 }} />
              GitHub
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3  justify-center bg-highlight text-white rounded-lg hover:bg-white  hover:text-black transition-all duration-300 font-medium shadow-lg shadow-highlight/30 hover:shadow-white/30 group/btn"
            >
              <LaunchIcon sx={{ fontSize: 20 }} />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
