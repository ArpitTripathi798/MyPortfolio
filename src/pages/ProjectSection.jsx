import React from "react";
import ProjectCard from "../components/ProjectCard";

function ProjectSection() {
  return (
    <div className="text-white mt-20 md:mt-0 w-[90%] mx-auto">
      
      <h1 className="lora-font text-5xl italic text-center">Projects</h1>

      <div className="mt-20 md:mt-0 space-y-10 md:space-y-0 md:p-20 flex justify-around flex-wrap">

        {/* 🔥 AI Resume Analyzer */}
        <ProjectCard
          imageLink="/Images/Ai-resume.jpg"
          title="AI Resume Analyzer"
          description="AI-powered app that analyzes resumes and matches jobs using Gemini API."
          github="https://github.com/ArpitTripathi798/Ai-Resume-Analyzer"
          liveDemo="https://ai-resume-analyzer-nu-lemon.vercel.app/"
        />

        {/* 🔗 URL Shortener */}
        <ProjectCard
          imageLink="/Images/Url.jpg"
          title="URL Shortener"
          description="Full-stack URL shortener with custom alias and fast redirection."
          github="https://github.com/ArpitTripathi798/Url-shortner"
          liveDemo="https://url-shortner-khaki-ten.vercel.app/"
        />

        {/* 📌 Job Application Tracker */}
        <ProjectCard
          imageLink="/Images/Job.jpg"
          title="Job Application Tracker"
          description="Track job applications with dashboard and authentication."
          github="https://github.com/ArpitTripathi798/Job-Tracker"
          liveDemo="https://job-tracker-two-ivory.vercel.app/"
        />

      </div>
    </div>
  );
}

export default ProjectSection;
