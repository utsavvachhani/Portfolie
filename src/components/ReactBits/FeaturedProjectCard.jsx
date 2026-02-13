import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import StarIcon from "@mui/icons-material/Star";

const FeaturedProjectCard = ({
  title,
  description,
  image,
  repo,
  live,
  techStack = [],
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-secondary border border-white/10 rounded-2xl overflow-hidden hover:border-highlight transition-all duration-500 shadow-2xl hover:shadow-highlight/20"
    >
      {/* Featured Badge */}
      <div className="absolute top-6 right-6 z-10 bg-highlight text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
        <StarIcon className="text-sm" />
        Featured
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative overflow-hidden h-64 md:h-auto">
          <img
            src={
              image ||
              "https://via.placeholder.com/600x400?text=Featured+Project"
            }
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-highlight transition-colors duration-300">
            {title}
          </h3>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Tech Stack Tags */}
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-highlight/10 text-highlight rounded-full text-sm font-medium border border-highlight/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium group/btn"
            >
              <GitHubIcon className="group-hover/btn:rotate-12 transition-transform" />
              View Code
            </a>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-highlight text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium shadow-lg shadow-highlight/30 hover:shadow-white/30 group/btn"
              >
                <LaunchIcon className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectCard;
