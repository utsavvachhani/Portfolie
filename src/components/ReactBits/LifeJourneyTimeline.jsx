import React from "react";
import { motion } from "framer-motion";
import { milestones } from "../../content/page";

const itemVariants = (side) => ({
  hidden: { opacity: 0, x: side === "left" ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const LifeJourneyTimeline = () => {
  return (
    <div className="relative w-full py-20 px-4 bg-primary text-primary">
      <h2 className="text-4xl font-bold text-center mb-20 text-hover">
        My Life Journey
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical center line - hidden on small screens */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-divider z-0" />

        {milestones.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={itemVariants(item.side)}
            className={`relative mb-16 flex flex-col md:flex-row items-center ${
              item.side === "left" ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Timeline Dot - hidden on small screens */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-highlight rounded-full border-4 border-primary z-10 shadow-lg" />

            {/* Card */}
            <div
              className={`w-full md:w-1/2 px-4 mt-6 md:mt-0 ${
                item.side === "left"
                  ? "md:pr-12 md:items-end text-right"
                  : "md:pl-12 md:items-start text-left"
              } flex flex-col hover:border-white `}
            >
              <a href={item.link}>
                <div className="group bg-secondary p-6 rounded-xl border border-transparent shadow-xl transition-all duration-300 ease-in-out hover:border-white hover:shadow-2xl hover:scale-[1.02]">
                  <h3 className="text-2xl font-semibold text-highlight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-third mb-2">{item.year}</p>
                  <p className="text-primary">{item.description}</p>
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LifeJourneyTimeline;
