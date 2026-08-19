import React, { useState } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../content/page";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

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
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("vachhaniutsav2@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative bg-primary text-primary min-h-screen pt-28 sm:pt-36 pb-20 px-6 sm:px-12 lg:px-8 overflow-hidden">
      
      {/* Background Ambient Glowing Nodes */}
      <div className="absolute top-[10%] left-[-15%] w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-highlight/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-purple-500/5 blur-[110px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="p-3 rounded-2xl bg-highlight/10 border border-highlight/20 mb-3.5 shadow-md">
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
          <div className="group relative bg-secondary/30 backdrop-blur-xl border border-divider/10 hover:border-highlight/30 p-8 md:p-10 rounded-3xl text-center shadow-2xl transition-all duration-300 max-w-md w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-highlight/0 to-highlight/[0.03] pointer-events-none"></div>
            
            <div className="mx-auto w-14 h-14 rounded-2xl bg-highlight/10 flex items-center justify-center text-highlight mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
              <EmailIcon sx={{ fontSize: 30 }} />
            </div>

            <p className="text-xl font-black text-primary tracking-wide mb-1">Direct Email</p>
            <p className="text-sm text-third font-mono font-semibold select-all mb-6">vachhaniutsav2@gmail.com</p>

            <div className="flex items-center justify-center gap-3">
              <a
                href="mailto:vachhaniutsav2@gmail.com?subject=Hello%20Utsav,%20I%20just%20Wanted%20to%20Connect&body=I%20wanted%20to%20connect%20with%20you!"
                className="btn-primary px-5 py-2.5 rounded-xl font-black text-xs shadow-md flex items-center gap-2"
              >
                <span>Send Email</span>
                <SendIcon sx={{ fontSize: 14 }} />
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn-secondary px-4 py-2.5 rounded-xl font-bold text-xs border border-divider/10 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <CheckIcon sx={{ fontSize: 15 }} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <ContentCopyIcon sx={{ fontSize: 15 }} className="text-highlight" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>
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
          {socialLinks.map(({ href, icon, label, textColor }, index) => (
            <motion.a
              key={index}
              variants={cardVariants}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              className="group border border-divider/10 bg-secondary/30 backdrop-blur-xl p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-highlight/30 flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-highlight/0 to-highlight/[0.03] pointer-events-none"></div>

              <div className="flex flex-col items-center transition duration-300 group-hover:scale-105 text-primary">
                <div className={`text-4xl mb-3 text-highlight group-hover:scale-110 transition-transform duration-300 ${textColor}`}>{icon}</div>
                <p className="font-extrabold text-xs tracking-wider uppercase text-primary">{label}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
