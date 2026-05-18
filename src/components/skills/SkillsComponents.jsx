import React from "react";
import { motion } from "framer-motion";

function SkillsComponents({
  containerVariants,
  cardVariants,
  skillCategories,
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {skillCategories.map(({ title, icon, skills }, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ y: -6, scale: 1.02 }}
          className="group relative border border-divider/45 bg-secondary/35 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 hover:border-highlight/40 overflow-hidden"
        >
          {/* Top Glass Glowing Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-highlight/0 to-highlight/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          {/* Category Header */}
          <div className="flex items-center gap-4 font-bold text-primary mb-6">
            <div className="bg-primary/50 text-highlight p-3.5 rounded-xl border border-divider/50 transition-all duration-300 group-hover:bg-highlight group-hover:text-dark group-hover:scale-110 shadow-md">
              {icon}
            </div>
            <h3 className="text-xl tracking-wide">{title}</h3>
          </div>

          {/* Skills Interactive Badges Container */}
          <div className="flex flex-wrap gap-2.5 mt-2">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-xs font-semibold px-3 py-2 rounded-xl bg-primary/40 text-third border border-divider hover:text-highlight hover:border-highlight hover:bg-highlight/5 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default SkillsComponents;
