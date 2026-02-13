import React from "react";
import { motion } from "framer-motion";
import PersonIcon from "@mui/icons-material/Person";
import LifeJourneyTimeline from "../components/ReactBits/LifeJourneyTimeline";

function About() {
  return (
    <section className="bg-primary text-primary min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <PersonIcon className="text-highlight mb-4" sx={{ fontSize: 48 }} />
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            About <span className="text-highlight">Me</span>
          </h1>
        </motion.div>

        {/* Introduction Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-10 mb-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
            Hi, I'm <span className="text-highlight">Utsav Vachhani</span> 👋
          </h2>

          <div className="space-y-4 text-third leading-relaxed max-w-3xl mx-auto">
            <p className="text-lg">
              I'm a passionate{" "}
              <span className="text-highlight font-semibold">
                Full-Stack Developer
              </span>{" "}
              and
              <span className="text-highlight font-semibold">
                {" "}
                B.Tech IT student
              </span>{" "}
              at Sarvajanik College of Engineering & Technology (SCET), Surat.
            </p>

            <p>
              I specialize in building modern web applications using the{" "}
              <span className="text-primary font-semibold">MERN stack</span>{" "}
              (MongoDB, Express, React, Node.js), and I'm always excited to
              learn new technologies and tackle challenging problems.
            </p>

            <p>
              My journey in tech started with a curiosity about how websites
              work, and it has evolved into a passion for creating beautiful,
              functional, and user-friendly applications that make a difference.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-divider">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-highlight mb-2">
                9+
              </div>
              <div className="text-sm text-third">Projects</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-highlight mb-2">
                2
              </div>
              <div className="text-sm text-third">Internships</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-highlight mb-2">
                MERN
              </div>
              <div className="text-sm text-third">Stack</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-highlight mb-2">
                2026
              </div>
              <div className="text-sm text-third">Graduating</div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              My <span className="text-highlight">Journey</span>
            </h2>
            <div className="h-1 w-20 bg-highlight rounded-full mt-2"></div>
          </div>

          <LifeJourneyTimeline />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
