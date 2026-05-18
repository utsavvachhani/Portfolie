import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../content/page";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

function Contact() {
  return (
    <section className="relative bg-primary text-primary min-h-screen py-20 px-6 sm:px-12 lg:px-8 overflow-hidden">
      
      {/* Background Ambient Glowing Nodes */}
      <div className="absolute top-[10%] left-[-15%] w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-highlight/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-purple-500/5 blur-[110px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="p-3 rounded-2xl bg-highlight/10 border border-highlight/20 mb-4 shadow-lg shadow-highlight/5">
            <SendIcon className="text-highlight" sx={{ fontSize: 32 }} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Let's <span className="text-highlight font-extrabold">Connect</span>
          </h1>
          <p className="text-third text-sm md:text-base mt-4 max-w-xl leading-relaxed">
            Have a project in mind, looking for a developer, or just want to chat about code? Feel free to drop a message or connect via social networks!
          </p>
        </motion.div>

        {/* Primary Email Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
          className="flex justify-center mb-16"
        >
          <a
            href="mailto:vachhaniutsav2@gmail.com?subject=Hello%20Utsav,%20I%20just%20Wanted%20to%20Connect&body=I%20wanted%20to%20connect%20with%20you!"
            className="group relative cursor-pointer bg-secondary/30 backdrop-blur-md border border-divider/45 hover:border-highlight/40 p-8 md:p-10 rounded-2xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 max-w-md w-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-highlight/0 to-highlight/[0.01] pointer-events-none"></div>
            
            <div className="mx-auto w-14 h-14 rounded-2xl bg-highlight/10 border border-highlight/20 flex items-center justify-center text-highlight mb-4 group-hover:scale-110 transition-transform duration-300">
              <EmailIcon sx={{ fontSize: 30 }} />
            </div>

            <p className="text-xl font-bold text-primary tracking-wide mb-1">Send an Email</p>
            <p className="text-sm text-third font-medium select-all">vachhaniutsav2@gmail.com</p>

            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-highlight uppercase tracking-wider mt-8 px-4 py-1.5 rounded-full bg-highlight/10 border border-highlight/20 group-hover:bg-highlight group-hover:text-dark transition-colors duration-300">
              Shoot Message &rarr;
            </span>
          </a>
        </motion.div>

        {/* Social Cards Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-highlight font-black px-3.5 py-1 bg-highlight/10 rounded-full border border-highlight/20 select-none">
            Online Presence
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-3">
            Social Networks
          </h2>
          <div className="h-1 w-16 bg-highlight rounded-full mt-3 shadow-md shadow-highlight/45"></div>
        </div>

        {/* Social Cards Stagger Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto"
        >
          {socialLinks.map(({ href, icon, label }, index) => (
            <motion.a
              key={index}
              variants={cardVariants}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.02 }}
              className="group border border-divider/45 bg-secondary/35 backdrop-blur-md p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-highlight/45 flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-highlight/0 to-highlight/[0.01] pointer-events-none"></div>

              <div className="flex flex-col items-center transition duration-300 group-hover:scale-105 text-primary">
                <div className="text-4xl mb-3 text-highlight group-hover:scale-110 transition-transform duration-300">{icon}</div>
                <p className="font-bold text-sm tracking-wider uppercase">{label}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
