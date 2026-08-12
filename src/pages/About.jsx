import React from "react";
import { motion } from "framer-motion";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
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

const FOCUS_AREAS = [
  {
    icon: <CodeIcon className="text-blue-400" />,
    title: "Full-Stack Development",
    desc: "Architecting responsive, high-performance web applications using React.js, Next.js, and modern CSS systems.",
  },
  {
    icon: <StorageIcon className="text-emerald-400" />,
    title: "Database Modeling",
    desc: "Designing scalable MongoDB collections, PostgreSQL schemas, indexing strategies, and aggregation pipelines.",
  },
  {
    icon: <SpeedIcon className="text-amber-400" />,
    title: "REST API Microservices",
    desc: "Engineering Node.js and Express servers with JWT authentication, role-based access, and rate limiting.",
  },
  {
    icon: <SecurityIcon className="text-purple-400" />,
    title: "Web Security & Auditing",
    desc: "Implementing Helmet security headers, Nodemailer webhooks, input sanitization, and automated threat tests.",
  },
];

function About() {
  return (
    <section className="relative bg-primary text-primary min-h-screen py-20 px-6 sm:px-12 lg:px-8 overflow-hidden">
      {/* Visual Depth Background Glowing Orbs */}
      <div className="absolute top-[12%] left-[-15%] w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-highlight/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] right-[-15%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-purple-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="p-3.5 rounded-2xl bg-highlight/10 border border-highlight/20 mb-4 shadow-lg shadow-highlight/5">
            <PersonIcon className="text-highlight" sx={{ fontSize: 36 }} />
          </div>
          <span className="text-xs uppercase tracking-widest text-highlight font-black px-3.5 py-1 bg-highlight/10 rounded-full border border-highlight/20 select-none mb-3">
            Full-Stack Engineer Profile
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            About <span className="text-highlight font-extrabold">Myself</span>
          </h1>
          <div className="h-1 w-16 bg-highlight rounded-full mt-4 shadow-md shadow-highlight/45" />
        </motion.div>

        {/* Biography & Quick Metrics Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="glass-card rounded-3xl p-8 md:p-14 mb-16 border border-divider/40 shadow-2xl relative overflow-hidden group hover:border-highlight/30 transition-colors duration-300 bg-secondary/30 backdrop-blur-2xl"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
            <div className="flex-1 space-y-6 text-third leading-relaxed text-base md:text-lg">
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Hi, I'm <span className="text-highlight">Utsav Vachhani</span> 👋
              </h2>

              <p>
                I am an ambitious{" "}
                <span className="text-highlight font-bold bg-highlight/10 px-2.5 py-0.5 rounded-lg border border-highlight/20">
                  Full-Stack Developer (MERN)
                </span>{" "}
                and an IT undergraduate student at{" "}
                <span className="text-primary font-bold">
                  Sarvajanik College of Engineering & Technology (SCET), Surat
                </span>
                .
              </p>

              <p>
                My engineering expertise spans the entire development lifecycle, with a heavy emphasis on building scalable, real-time web products utilizing the{" "}
                <span className="text-primary font-semibold underline decoration-highlight/40 decoration-2 underline-offset-4">
                  MERN stack
                </span>{" "}
                (MongoDB, Express.js, React.js, Node.js). I thrive on creating clean, intuitive user interfaces and highly performant backend microservices.
              </p>

              <p>
                What started as simple web experiments has grown into a dedicated software engineering career. I'm continuously expanding my technical knowledge, optimizing production bottlenecks, and building high-impact web products.
              </p>

              {/* Action Buttons inside Card */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://drive.google.com/file/d/1zGjqP97eWmsi4EpYrL9FZXMl4KveP65P/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-highlight text-dark font-bold text-xs hover:bg-white transition-all shadow-md flex items-center gap-2"
                >
                  <PictureAsPdfIcon sx={{ fontSize: 16 }} />
                  <span>Download / View CV</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vachhani-utsav-21ut75/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-secondary border border-divider/20 text-primary font-bold text-xs hover:border-highlight hover:text-highlight transition-all flex items-center gap-2"
                >
                  <LinkedInIcon sx={{ fontSize: 16 }} />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/utsavvachhani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-secondary border border-divider/20 text-primary font-bold text-xs hover:border-highlight hover:text-highlight transition-all flex items-center gap-2"
                >
                  <GitHubIcon sx={{ fontSize: 16 }} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Metrics Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-divider/25">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-5 rounded-2xl bg-secondary/40 border border-divider/20 hover:border-highlight/30 hover:bg-secondary/60 transition-all duration-300 text-center shadow-md"
              >
                <div className="text-2xl md:text-3xl font-black text-highlight mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-third font-medium tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Engineering Focus Areas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-highlight font-black px-3.5 py-1 bg-highlight/10 rounded-full border border-highlight/20 select-none">
              Core Competencies
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mt-3">
              Technical <span className="text-highlight">Focus Areas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOCUS_AREAS.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="glass-card p-6 rounded-2xl border border-divider/20 hover:border-highlight/30 transition-all duration-300 bg-secondary/20 flex items-start gap-4 shadow-lg"
              >
                <div className="p-3 rounded-xl bg-secondary border border-divider/20 shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-third leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Life Journey Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-highlight font-black px-3.5 py-1 bg-highlight/10 rounded-full border border-highlight/20 select-none">
              Academic & Professional Milestone
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-3 tracking-tight">
              Life Journey <span className="text-highlight">Timeline</span>
            </h2>
            <div className="h-1 w-16 bg-highlight rounded-full mt-3 shadow-md shadow-highlight/45" />
          </div>

          <LifeJourneyTimeline />
        </motion.div>

      </div>
    </section>
  );
}

export default About;
