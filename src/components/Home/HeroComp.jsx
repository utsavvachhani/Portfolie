import React from "react";
import uvPhoto from "../../assets/uvPhoto.jpg";
import CircularText from "../ReactBits/CircularText.jsx";
import GradientText from "../ReactBits/GradientText.jsx";

function ImageSection() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer wrapper for circular text */}
      <div className="absolute md:w-[24rem] md:h-[24rem] w-[20rem] h-[20rem] flex items-center justify-center">
        <CircularText
          text="MERN FULL STACK DEVELOPER "
          onHover="speedUp"
          spinDuration={20}
          className="w-full h-full text-highlight"
        />
      </div>

      {/* Inner circular image */}
      <img
        src={uvPhoto}
        alt="UV"
        className="w-64 h-64 md:w-72 md:h-72 rounded-full border-[6px]
        border-primary shadow-xl transform rotate-6 
        hover:rotate-[360deg] hover:scale-105 transition duration-500 ease-in-out"
      />
    </div>
  );
}

function HeroComp() {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center px-20 h-screen ">
      <div className="md:hidden block pt-20">
        <ImageSection />
      </div>

      <div className="text-center py md:py-0-5">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Hey, I am
        </h1>

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={6}
          showBorder={false}
          className="text-4xl md:text-6xl font-extrabold font-[poppins] "
        >
          Utsav Vachhani
        </GradientText>

        <p className="mt-6 text-lg md:text-xl text-primary">
          Full Stack Developer (MERN)
        </p>
        <p className="text-sm md:text-base text-third mt-2">
          Student @ SCET | Building Web Apps with
          <p className="text-highlight font-bold ">MongoDB, Express, React & Node.js</p>
        </p>
        <p className="text-sm md:text-base text-third mt-1">
          Passionate about learning, solving problems, and turning ideas into
          real projects.
        </p>
      </div>

      <div className="hidden md:block">
        <ImageSection />
      </div>
    </div>
  );
}

export default HeroComp;
