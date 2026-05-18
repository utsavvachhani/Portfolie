import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../content/page";
import SkillsComponents from "../components/skills/SkillsComponents";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

function Skills() {
  return (
    <section className="relative bg-primary text-primary min-h-screen py-20 px-6 sm:px-12 lg:px-8 overflow-hidden">
      {/* Visual Canvas Depth: Premium Background Orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-highlight/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-purple-500/5 blur-[110px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Animated Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="p-3 rounded-2xl bg-highlight/10 border border-highlight/20 mb-4 shadow-lg shadow-highlight/5">
            <AutoAwesomeIcon className="text-highlight" sx={{ fontSize: 32 }} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Technical{" "}
            <span className="text-highlight font-extrabold">Abilities</span>
          </h1>
          <p className="text-third text-sm md:text-base mt-4 max-w-xl leading-relaxed">
            A comprehensive overview of my software engineering capabilities,
            framework proficiencies, database management, and architecture
            practices.
          </p>
        </motion.div>

        <SkillsComponents
          containerVariants={containerVariants}
          cardVariants={cardVariants}
          skillCategories={skillCategories}
        />
      </div>
    </section>
  );
}

export default Skills;
