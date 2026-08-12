import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import uvPhoto from "../../assets/uvPhoto.jpg";
import CircularText from "../ReactBits/CircularText.jsx";
import GradientText from "../ReactBits/GradientText.jsx";
import Hero3DCanvas from "./Hero3DCanvas.jsx";

function ProfileAvatar() {
  return (
    <div className="relative flex items-center justify-center select-none">
      {/* Rotating Circular Text */}
      <div className="absolute w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] flex items-center justify-center pointer-events-none">
        <CircularText
          text="MERN FULL STACK DEVELOPER "
          onHover="speedUp"
          spinDuration={20}
          className="w-full h-full text-highlight"
        />
      </div>

      {/* Profile Image Avatar */}
      <div className="relative p-2.5 rounded-full bg-gradient-to-tr from-highlight/40 via-emerald-500/30 to-purple-500/40 backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(103,154,231,0.3)]">
        <img
          src={uvPhoto}
          alt="Utsav Vachhani"
          className="w-52 h-52 sm:w-64 sm:h-64 rounded-full border-[6px] border-divider shadow-2xl transform rotate-3 hover:rotate-[360deg] hover:scale-105 transition duration-700 ease-in-out object-cover"
        />
      </div>
    </div>
  );
}

function HeroComp() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center bg-primary overflow-hidden">
      {/* 3D WebGL Background Scene covering full Hero section */}
      <Hero3DCanvas />

      {/* Radial Background Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-highlight/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />

      {/* Hero Content Overlay (Foreground Layer) */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10 pointer-events-none">
        
        {/* Left Side: Developer Hook & Actions (7 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl mx-auto lg:mx-0 pointer-events-auto"
        >
          {/* Status Pill */}
          <span className="px-4 py-2 rounded-full text-xs font-semibold bg-highlight/15 text-highlight border border-highlight/30 mb-6 flex items-center gap-2.5 backdrop-blur-md shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-highlight animate-ping" />
            Open for Engineering Internships & Full-Stack Projects
          </span>

          <h1 className="text-xl sm:text-2xl font-bold mb-2 text-third tracking-wide">
            Hey there, I am
          </h1>

          <div className="mb-4">
            <GradientText
              colors={["#679ae7", "#10b981", "#679ae7", "#a855f7", "#10b981"]}
              animationSpeed={6}
              showBorder={false}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-[poppins] block drop-shadow-md"
            >
              Utsav Vachhani
            </GradientText>
          </div>

          <p className="mt-1 text-xl sm:text-2xl font-bold text-primary">
            Full Stack Developer <span className="text-highlight font-extrabold">(MERN)</span>
          </p>

          <p className="text-sm sm:text-base text-third mt-4 leading-relaxed max-w-xl backdrop-blur-sm bg-primary/30 p-3 rounded-2xl border border-divider/10">
            IT Undergraduate at <span className="text-primary font-semibold">Sarvajanik College of Engineering & Technology (SCET), Surat</span>. I build scalable full-stack web applications, REST API servers, database architectures, and responsive 3D web interfaces.
          </p>

          {/* Core Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
            {[
              "React.js",
              "Node.js",
              "MongoDB",
              "Express.js",
              "Next.js",
              "Firebase",
              "GitHub",
              "Git",
              "Tailwind",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono font-medium px-3.5 py-1.5 rounded-full bg-secondary/80 text-highlight border border-highlight/20 backdrop-blur-md hover:border-highlight hover:scale-105 transition-all duration-300 shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Hero Action CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#featured-projects"
              className="px-8 py-4 bg-highlight text-dark rounded-xl font-bold hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(103,154,231,0.5)] transition-all duration-300 flex items-center gap-2 border border-highlight/30 shadow-xl"
            >
              Featured Projects
            </a>
            <Link
              to="/about"
              className="px-8 py-4 bg-secondary/80 backdrop-blur-md border border-divider/30 hover:border-highlight text-primary rounded-xl font-bold hover:bg-highlight/10 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              About Myself
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Profile Avatar (5 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative pointer-events-auto"
        >
          <ProfileAvatar />
        </motion.div>

      </div>
    </section>
  );
}

export default HeroComp;
