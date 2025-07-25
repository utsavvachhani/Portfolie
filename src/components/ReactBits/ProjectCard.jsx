import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const ProjectCard = ({ title, description, image, repo, live }) => {
  return (
    <div className="group border mx-6 md:mx-0 border-white bg-transparent backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:rotate-[0.5deg] flex flex-col overflow-hidden hover:border-[#679ae7]">
      <img
        src={image || "https://via.placeholder.com/400x200?text=Project+Preview"}
        alt={title}
        className="w-full h-54 object-cover"
        loading="lazy"
      />

      <div className="p-5 flex flex-col flex-1 justify-between transition-colors duration-300">
        <div>
          <h3 className="text-xl font-semibold group-hover:text-[#679ae7] transition-colors duration-300 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-300 group-hover:text-white mb-4 line-clamp-3 transition-colors duration-300">
            {description}
          </p>
        </div>

        <div className="flex justify-between gap-2 mt-auto">
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium border border-white text-white rounded hover:bg-white hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#679ae7]"
          >
            <GitHubIcon className="mr-2" />
            GitHub
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium bg-white text-black rounded hover:bg-[#679ae7] hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <FlightTakeoffIcon className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
