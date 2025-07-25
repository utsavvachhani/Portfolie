import React from "react";

import {skillCategories} from '../content/page'

function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-hover">My Skills</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-secondary">
        {skillCategories.map(({ title, icon, skills, textColor, borderColor, ringColor }, index) => (
          <div
            key={index}
            className={`group relative border border-white/20 ${borderColor} bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6`}
          >
            {/* Header */}
            <div className={`flex items-center gap-4 font-semibold ${textColor}`}>
              <div className={`bg-white/20 p-3 rounded-full ${ringColor} transition duration-300`}>
                {icon}
              </div>
              <h3 className="text-xl">{title}</h3>
            </div>

            {/* Split Skill Grid */}
            <div className={`grid grid-cols-2 gap-2 mt-5 ${textColor}`}>
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-white/5 text-white/80 hover:bg-white hover:text-black hover:font-bold  py-2 px-3 rounded-md text-sm text-center transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
