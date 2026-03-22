import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaBootstrap,
  FaDatabase,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiRender,
} from "react-icons/si";

import { motion } from "motion/react";

function SkillSection() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaPython className="text-yellow-500" />, name: "Python" },

    // MERN STACK
    { icon: <FaReact className="text-blue-400" />, name: "React" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },

    // Extra Frameworks / Tools
    { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "TailwindCSS" },

    // Databases
    { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
    { icon: <FaDatabase className="text-gray-400" />, name: "SQL" },

    // DevOps / Tools
    { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
    { icon: <FaGithub className="text-white" />, name: "GitHub" },
    { icon: <SiRender className="text-indigo-500" />, name: "Render" },
  ];

  return (
    <div className="w-[90%] mx-auto md:p-20 mt-20 text-white">
      
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl lora-font italic mb-10 text-center">
          Technical Skills
        </h1>
      </motion.div>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="rounded-xl p-4 flex flex-col items-center bg-white/5 hover:bg-white/10 transition"
          >
            <div className="mb-3 text-3xl md:text-5xl">
              {skill.icon}
            </div>
            <p className="text-sm md:text-lg">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
