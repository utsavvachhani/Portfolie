import React from "react";
import { motion } from "framer-motion";
import { milestones } from "../../content/page";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// Choose icon based on milestone type
const getIcon = (title) => {
  if (
    title.toLowerCase().includes("grade") ||
    title.toLowerCase().includes("bachelor") ||
    title.toLowerCase().includes("guject") ||
    title.toLowerCase().includes("mains")
  ) {
    return <SchoolIcon className="text-highlight" />;
  } else if (title.toLowerCase().includes("internship")) {
    return <WorkIcon className="text-highlight" />;
  } else if (title.toLowerCase().includes("project")) {
    return <CodeIcon className="text-highlight" />;
  }
  return <EmojiEventsIcon className="text-highlight" />;
};

// Motion variants for left/right slide animation
const itemVariants = (side) => ({
  hidden: { opacity: 0, x: side === "left" ? -50 : 50, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const LifeJourneyTimeline = () => {
  return (
    <div className="relative w-full py-10">
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line in center */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-highlight via-highlight/50 to-transparent z-0" />

        {milestones.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants(item.side)}
            className={`relative mb-12 flex flex-col md:flex-row items-center ${
              item.side === "left" ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Timeline Dot with Icon */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-secondary rounded-full border-2 border-highlight z-10 shadow-lg shadow-highlight/30 items-center justify-center">
              {getIcon(item.title)}
            </div>

            {/* Milestone Card */}
            <div
              className={`w-full md:w-[calc(50%-3rem)] ${
                item.side === "left"
                  ? "md:pr-8 md:text-right"
                  : "md:pl-8 md:text-left"
              }`}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group glass-card p-6 rounded-xl border border-white/10 hover:border-highlight transition-all duration-300 shadow-lg hover:shadow-highlight/20"
                >
                  {/* Icon for mobile */}
                  <div className="md:hidden flex items-center gap-3 mb-3">
                    {getIcon(item.title)}
                    <h3 className="text-xl font-bold text-highlight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Title for desktop */}
                  <h3 className="hidden md:block text-xl font-bold text-white group-hover:text-highlight transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-highlight font-medium mb-3">
                    {item.year}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-400 group-hover:text-highlight transition-colors">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </a>
            </div>
          </motion.div>
        ))}

        {/* End dot */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 bg-highlight rounded-full z-10 shadow-lg shadow-highlight/50" />
      </div>
    </div>
  );
};

export default LifeJourneyTimeline;
