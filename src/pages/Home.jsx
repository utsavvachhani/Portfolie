import React from "react";
import HeroComp from "../components/Home/HeroComp.jsx";
import ProjectCard from "../components/ReactBits/ProjectCard.jsx";
import Conver2k24 from "../assets/Converse2k24.png";
import Memories from "../assets/memories.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <HeroComp />
      <section className="bg-primary text-primary py-20 px-0">
        <h2 className="text-4xl font-bold text-center mb-12 text-hover">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProjectCard
            title="Converse2K24"
            description="Full-stack college fest site using React & Firebase."
            image={Conver2k24}
            repo="https://github.com/utsavvachhani/converse2k24"
            live="https://utsavvachhani.github.io/converse2k24/"
          />
          <ProjectCard
            title="Memories"
            description="Full-stack MERN app for sharing memories with image upload."
            image={Memories}
            repo="https://github.com/utsavvachhani/memories"
            live="https://memories-app-omega.vercel.app/"
          />

          <div className="group border mx-6 md:mx-0 border-white bg-transparent backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:rotate-[0.5deg] flex items-center justify-center h-100 w-110 md:w-full hover:border-[#679ae7] cursor-pointer">
            <Link to="/projects">
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-white text-black transition-all duration-300 group-hover:bg-[#679ae7] group-hover:text-white">
                <ArrowForwardIosIcon />
              </div>
                <p className="mt-6 flex items-center">View More</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
