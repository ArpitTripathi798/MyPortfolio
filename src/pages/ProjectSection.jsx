import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "motion/react";

function ProjectSection() {
  return (
    <>
      <div className="text-white mt-20 md:mt-0 w-[90%] mx-auto">
        <h1 className="lora-font text-5xl italic text-center">Projects</h1>
        <div className="mt-20 md:mt-0 space-y-10 md:space-y-0 md:p-20 flex justify-around flex-wrap">
          <ProjectCard
            imageLink="Images/weatherProject.png"
            title="Weather App"
            description="A Weather app using React JS and openWeatherMap API. This was my first app after learning Reactjs"
            github="Your_gitHub link"
            liveDemo=""
          />
          <ProjectCard
            imageLink="Images/Homigo.png"
            title="Homigo"
            description="Built a full-stack, server-side rendered property listing platform using Node.js, Express.js, and MongoDB."
            github="Your_GitHub repo link"
            liveDemo="Website_Live_link"
          />
          <ProjectCard
            imageLink="Images/Chatably.png"
            title="A Real-time Chat App"
            description="Built a full-stack, real-time chat application using React, Node.js, and Socket.io for instant user-to-user messaging."
            github="Your_GitHub Repo Link"
            liveDemo="Website Live Link"
          />
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
