import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function SkillsComponents({
  containerVariants,
  cardVariants,
  skillCategories,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return skillCategories;

    return skillCategories.filter((cat) => {
      const matchesTitle = cat.title.toLowerCase().includes(query);
      const matchesSkill = cat.skills?.some((s) => s.toLowerCase().includes(query));
      return matchesTitle || matchesSkill;
    });
  }, [skillCategories, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Skill Search Box */}
      <div className="max-w-md mx-auto relative mb-10">
        <SearchIcon sx={{ fontSize: 20 }} className="absolute left-4 top-1/2 -translate-y-1/2 text-third" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter skills (e.g. React, MongoDB, JWT, Git)..."
          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-secondary/40 text-primary text-xs border border-divider/20 focus:border-highlight focus:outline-none transition-colors backdrop-blur-xl shadow-lg"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-third hover:text-primary"
          >
            ✕
          </button>
        )}
      </div>

      {/* Grid of Skill Categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredCategories.map(({ title, icon, skills }, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative border border-divider/30 bg-secondary/30 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-highlight/10 transition-all duration-300 p-8 hover:border-highlight/40 overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient Spotlight Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-highlight/0 to-highlight/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              {/* Category Header */}
              <div className="flex items-center gap-4 font-bold text-primary mb-6">
                <div className="bg-primary/50 text-highlight p-3.5 rounded-2xl border border-divider/40 transition-all duration-300 group-hover:bg-highlight group-hover:text-dark group-hover:scale-110 shadow-md">
                  {icon}
                </div>
                <h3 className="text-xl font-black tracking-wide text-primary">{title}</h3>
              </div>

              {/* Interactive Skills Chips */}
              <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.06 }}
                    className="text-xs font-semibold px-3.5 py-2 rounded-xl bg-primary/50 text-primary border border-divider/20 hover:text-highlight hover:border-highlight/40 hover:bg-highlight/10 transition-all duration-300 cursor-default flex items-center gap-1.5 shadow-sm"
                  >
                    <CheckCircleOutlineIcon sx={{ fontSize: 13 }} className="text-highlight" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Indicator */}
            <div className="mt-6 pt-4 border-t border-divider/10 text-[10px] uppercase font-mono text-third/70 flex items-center justify-between">
              <span>{skills.length} Technologies</span>
              <span className="text-highlight font-bold">Verified Proficiency</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12 bg-secondary/20 rounded-3xl border border-divider/10 max-w-md mx-auto">
          <p className="text-xs text-third">No technologies found matching "{searchQuery}".</p>
        </div>
      )}
    </div>
  );
}

export default SkillsComponents;
