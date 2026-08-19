import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroComp from "../components/Home/HeroComp.jsx";
import FeaturedProjects from "../components/Home/FeaturedProjects.jsx";
import LifeJourneyTimeline from "../components/ReactBits/LifeJourneyTimeline.jsx";
import SkillsComponents from "../components/skills/SkillsComponents";
import { stats, skillCategories } from "../content/page.jsx";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    hover: {
      y: -6,
      scale: 1.02,
    },
  };

  return (
    <div className="relative bg-primary text-primary overflow-hidden min-h-screen">
      {/* Background Radial Glow Orbs */}
      <div className="absolute top-[30%] -right-48 w-96 h-96 rounded-full bg-highlight/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[60%] -left-48 w-80 h-80 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      {/* 1. Full-Section 3D WebGL Hero */}
      <HeroComp />

      {/* Animated Stats Banner */}
      <section className="relative z-10 bg-secondary/30 py-12 sm:py-16 border-y border-divider/10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                className="text-center group flex flex-col justify-center items-center p-4 rounded-2xl hover:bg-highlight/5 transition-all duration-300"
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-highlight mb-2 block tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-third font-medium tracking-wider uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Interactive Featured Projects Showcase */}
      <FeaturedProjects limit={6} />

      {/* 3. Life Journey Timeline Section */}
      <section id="life-journey-timeline" className="relative z-10 py-20 sm:py-24 px-6 sm:px-12 lg:px-8 bg-secondary/10 border-t border-divider/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-highlight font-black px-3.5 py-1 bg-highlight/10 rounded-full border border-highlight/20 select-none">
              Academic & Professional Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mt-3 tracking-tight">
              Life Journey <span className="text-highlight">Timeline</span>
            </h2>
            <div className="h-1 w-16 bg-highlight rounded-full mt-3 shadow-md shadow-highlight/45" />
          </div>

          <LifeJourneyTimeline />
        </div>
      </section>

      {/* 4. Tech Stack Dashboard Section */}
      <section className="relative z-10 bg-secondary/15 py-20 sm:py-24 px-6 sm:px-12 lg:px-8 border-t border-divider/10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight mb-4"
            >
              Skills & <span className="text-highlight">Capabilities</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-third text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            >
              Core technologies for building scalable full-stack web applications, REST microservices, and reactive user interfaces.
            </motion.p>
          </div>

          <SkillsComponents
            containerVariants={containerVariants}
            cardVariants={cardVariants}
            skillCategories={skillCategories.slice(0, 3)}
          />

          <div className="mt-12 text-center">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-sm font-semibold text-highlight hover:text-white transition-all duration-300 hover:translate-x-1"
            >
              <span>Explore full skills & milestones</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Call to Action Banner */}
      <section className="relative z-10 py-20 sm:py-24 px-6 sm:px-12 lg:px-8 border-t border-divider/10 bg-secondary/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl p-10 sm:p-14 md:p-16 overflow-hidden glass-card border border-divider/10 shadow-2xl text-center flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-widest text-highlight font-black mb-4 px-3.5 py-1 bg-highlight/10 rounded-full border border-highlight/20 select-none">
              Let's Collaborate
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-primary tracking-tight max-w-2xl leading-tight">
              Have a project concept or an exciting opportunity?
            </h2>

            <p className="text-base sm:text-lg text-third max-w-2xl mb-8 leading-relaxed">
              I'm always eager to exchange ideas, tackle technical challenges,
              or join innovative engineering teams. Let's design and code
              something magnificent!
            </p>

            <Link
              to="/contact"
              className="px-8 py-4 bg-highlight text-dark rounded-xl font-bold shadow-lg shadow-highlight/20 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
