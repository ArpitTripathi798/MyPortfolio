import React from "react";
import { motion } from "motion/react";

function ProjectCard({ imageLink, title, description, github, liveDemo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true }}
      className="w-[90%] md:w-[30%] bg-black/80 rounded-2xl ring-1 ring-white/10 shadow-lg p-2"
    >
      {/* ✅ Image */}
      <img
        src={imageLink}
        alt="project"
        className="w-full h-48 object-cover rounded-xl"
      />

      {/* ✅ Content */}
      <div className="p-3 text-white">
        <h1 className="my-2 text-xl font-semibold">{title}</h1>

        <p className="text-sm text-gray-300">{description}</p>

        <div className="mt-4 flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-white/10 rounded-lg hover:bg-blue-500 transition"
          >
            GitHub
          </a>

          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-white/10 rounded-lg hover:bg-green-500 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
