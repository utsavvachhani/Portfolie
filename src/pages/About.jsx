import React from "react";
import { motion } from "framer-motion";
import PersonIcon from "@mui/icons-material/Person";
import LifeJourneyTimeline from "../components/ReactBits/LifeJourneyTimeline";
import { stats } from "../content/page";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

function About() {
  return (
    <section className="relative bg-primary text-primary min-h-screen py-20 px-6 sm:px-12 lg:px-8 overflow-hidden">
      {/* Background Glowing Ambient Nodes */}
      <div className="absolute top-[12%] left-[-15%] w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-highlight/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[45%] right-[-15%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-purple-500/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="p-3 rounded-2xl bg-highlight/10 border border-highlight/20 mb-4 shadow-lg shadow-highlight/5">
            <PersonIcon className="text-highlight" sx={{ fontSize: 40 }} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            About <span className="text-highlight font-extrabold">Myself</span>
          </h1>
          <div className="h-1 w-16 bg-highlight rounded-full mt-4 shadow-md shadow-highlight/45"></div>
        </motion.div>

        {/* Narrative & Statistics Glass Box */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="glass-card rounded-3xl p-10 md:p-14 mb-24 border border-divider/45 shadow-2xl relative overflow-hidden group hover:border-highlight/35 transition-colors duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/0 to-highlight/[0.01] pointer-events-none"></div>

          <h2 className="text-3xl font-extrabold text-primary mb-8 text-center md:text-left tracking-tight">
            Hi, I'm <span className="text-highlight">Utsav Vachhani</span> 👋
          </h2>

          <div className="space-y-6 text-third leading-relaxed text-base md:text-lg max-w-4xl">
            <p>
              I am an ambitious{" "}
              <span className="text-highlight font-bold bg-highlight/5 px-2.5 py-0.5 rounded-lg border border-highlight/10">
                Full-Stack Developer
              </span>{" "}
              and an IT undergraduate student at{" "}
              <span className="text-primary font-bold">
                Sarvajanik College of Engineering & Technology (SCET), Surat
              </span>
              .
            </p>

            <p>
              My expertise spans the entire development lifecycle, with a heavy
              emphasis on building scalable, real-time web products utilizing
              the{" "}
              <span className="text-primary font-semibold underline decoration-highlight/40 decoration-2 underline-offset-4">
                MERN stack
              </span>{" "}
              (MongoDB, Express, React, Node.js). I thrive on creating clean,
              intuitive interfaces and highly performant backend systems.
            </p>

            <p>
              What started as simple web experiments has grown into a strong
              engineering career path. I’m continuously learning and seeking new
              opportunities to deploy high-quality software, solve production
              bottlenecks, and collaborate with great development teams.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <motion.div
            variants={statVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-10 border-t border-divider/45"
          >
           {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-5 rounded-2xl bg-secondary/15 border border-divider/30 hover:border-highlight/30 hover:bg-secondary/25 transition-all duration-300 text-center"
              >
                <div className="text-2xl md:text-3xl font-black text-highlight mb-1.5 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-third font-medium tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Timeline Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-highlight font-black px-3.5 py-1 bg-highlight/10 rounded-full border border-highlight/20 select-none">
              Milestones
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-3 tracking-tight">
              My <span className="text-highlight">Journey</span>
            </h2>
            <div className="h-1 w-16 bg-highlight rounded-full mt-3 shadow-md shadow-highlight/45"></div>
          </div>

          <div className="p-4 md:p-8 rounded-3xl bg-secondary/10  ">
            <LifeJourneyTimeline />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
