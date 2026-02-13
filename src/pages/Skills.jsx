import React from "react";
import { skillCategories } from "../content/page";

function Skills() {
  return (
    <div className="  min-h-screen max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-hover">
        My Skills
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {skillCategories.map(({ title, icon, skills }, index) => (
          <div
            key={index}
            className="group relative border border-divider bg-secondary backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6 hover:border-highlight"
          >
            {/* Header */}
            <div className="flex items-center gap-4 font-semibold text-highlight">
              <div className="bg-primary p-3 rounded-full transition duration-300 group-hover:bg-highlight group-hover:text-white">
                {icon}
              </div>
              <h3 className="text-xl">{title}</h3>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-2 mt-5 text-third">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-primary text-primary hover:bg-highlight hover:text-white hover:font-bold py-2 px-3 rounded-md text-sm text-center transition"
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
