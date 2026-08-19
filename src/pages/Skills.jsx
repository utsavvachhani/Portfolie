import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../content/page";
import SkillsComponents from "../components/skills/SkillsComponents";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TerminalIcon from "@mui/icons-material/Terminal";

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

const CORE_METRICS = [
  { label: "Core Stack", val: "MERN Stack" },
  { label: "Frontend", val: "React & Next.js" },
  { label: "Database", val: "MongoDB & Postgres" },
  { label: "Architecture", val: "REST APIs & MVC" },
];

function Skills() {
  return (
    <section className="relative bg-primary text-primary min-h-screen pt-28 sm:pt-36 pb-20 px-6 sm:px-12 lg:px-8 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-highlight/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-purple-500/5 blur-[110px] pointer-events-none" />
      <div className="absolute top-[50%] left-[20%] w-[250px] h-[250px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="p-3 rounded-2xl bg-highlight/10 border border-highlight/20 mb-3.5 shadow-md">
            <AutoAwesomeIcon className="text-highlight" sx={{ fontSize: 34 }} />
          </div>
          <span className="text-xs uppercase tracking-widest text-highlight font-black px-3.5 py-1 bg-highlight/10 rounded-full border border-highlight/20 select-none mb-3">
            Engineering Matrix
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Technical <span className="text-highlight font-extrabold">Abilities</span>
          </h1>
          <p className="text-third text-sm md:text-base mt-4 max-w-xl leading-relaxed">
            A comprehensive overview of my software engineering capabilities, framework proficiencies, database management, and architecture practices.
          </p>
        </motion.div>

        {/* Quick Engineering Summary Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14 glass-card p-6 rounded-3xl border border-divider/10 bg-secondary/30 backdrop-blur-xl shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {CORE_METRICS.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-secondary/50">
                <div className="text-[11px] text-third uppercase font-mono tracking-wider mb-1">
                  {item.label}
                </div>
                <div className="text-sm sm:text-base font-black text-highlight">
                  {item.val}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Skills Categories */}
        <SkillsComponents
          containerVariants={containerVariants}
          cardVariants={cardVariants}
          skillCategories={skillCategories}
        />

        {/* Architecture & Engineering Practices Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 glass-card p-8 sm:p-12 rounded-3xl border border-divider/10 bg-secondary/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-highlight font-black text-sm">
                <TerminalIcon sx={{ fontSize: 20 }} />
                <span>Continuous Software Learning</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-primary tracking-tight">
                Building Production-Ready Systems
              </h2>
              <p className="text-third text-xs sm:text-sm max-w-2xl leading-relaxed">
                Adhering to SOLID principles, modular component design, clean RESTful route structuring, and strict version control practices.
              </p>
            </div>

            <a
              href="https://github.com/utsavvachhani"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 rounded-2xl font-bold text-xs shadow-lg flex-shrink-0"
            >
              Explore Repositories on GitHub
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
