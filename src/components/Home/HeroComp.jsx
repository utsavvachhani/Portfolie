import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import uvPhoto from "../../assets/uvPhoto.jpg";
import CircularText from "../ReactBits/CircularText.jsx";
import GradientText from "../ReactBits/GradientText.jsx";

function ImageSection() {
  return (
    <div className="relative flex items-center justify-center select-none">
      {/* Circular Text */}
      <div className="absolute md:w-[24rem] md:h-[24rem] w-[20rem] h-[20rem] flex items-center justify-center">
        <CircularText
          text="MERN FULL STACK DEVELOPER "
          onHover="speedUp"
          spinDuration={20}
          className="w-full h-full text-highlight"
        />
      </div>

      {/* Profile Image with subtle outer glowing gradient border */}
      <div className="relative p-2 md:p-3 rounded-full bg-gradient-to-tr from-highlight/10 to-cyan-500/10 backdrop-blur-sm border border-white/5 shadow-2xl">
        <img
          src={uvPhoto}
          alt="Utsav Vachhani"
          className="w-56 h-56 md:w-64 md:h-64 rounded-full border-[6px] 
          border-divider shadow-xl transform rotate-6 
          hover:rotate-[360deg] hover:scale-105 transition duration-700 ease-in-out object-cover"
        />
      </div>
    </div>
  );
}

function HeroComp() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center bg-primary overflow-hidden">
      {/* Premium background radial gradients (glowing orbs) that adapt well to theme */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-highlight/10 blur-[80px] md:blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full bg-cyan-500/10 blur-[100px] md:blur-[130px]"></div>

      <div className="max-w-6xl w-full mx-auto px-6 sm:px-12 lg:px-8 py-16 md:py-24 flex flex-col-reverse md:flex-row justify-between items-center gap-16 md:gap-12 z-10">
        
        {/* Left Side: Copy & Actions */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left flex flex-col items-center md:items-start max-w-xl"
        >
          {/* Status Badge */}
          <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-highlight/10 text-highlight border border-highlight/20 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-highlight animate-ping"></span>
            Open to internships & projects
          </span>

          <h1 className="text-xl md:text-2xl font-bold mb-2 text-third tracking-wide">
            Hey there, I am
          </h1>

          <div className="mb-4">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={6}
              showBorder={false}
              className="text-4xl sm:text-5xl md:text-6.5xl font-extrabold tracking-tight font-[poppins] block"
            >
              Utsav Vachhani
            </GradientText>
          </div>

          <p className="mt-2 text-xl md:text-2xl font-bold text-primary">
            Full Stack Developer <span className="text-highlight font-extrabold">(MERN)</span>
          </p>

          <p className="text-sm md:text-base text-third mt-4 leading-relaxed max-w-lg">
            IT undergraduate at <span className="text-primary font-semibold">Sarvajanik College of Engineering & Technology (SCET), Surat</span>. I specialize in engineering high-fidelity web experiences and dynamic full-stack systems.
          </p>

          {/* Quick Core Skills Badges */}
          <div className="flex flex-wrap gap-2 mt-5 justify-center md:justify-start">
            {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-secondary text-highlight border border-divider hover:border-highlight transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Premium call to action buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#featured-projects"
              className="px-8 py-3.5 bg-highlight text-dark rounded-xl font-bold hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(103,154,231,0.4)] transition-all duration-300 flex items-center gap-2 border border-highlight/20"
            >
              Explore Work
            </a>
            <Link
              to="/contact"
              className="px-8 py-3.5 border border-divider hover:border-highlight text-primary rounded-xl font-bold hover:bg-highlight/5 hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-auto flex justify-center"
        >
          <ImageSection />
        </motion.div>

      </div>
    </section>
  );
}

export default HeroComp;

