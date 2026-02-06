"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Angular", icon: <FaAngular /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Java", icon: <FaJava /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white flex justify-center scroll-mt-24">
      <div className="max-w-6xl w-full text-center">

        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-lightbg rounded-2xl p-8 shadow-sm cursor-pointer flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div className="text-4xl text-primary">{skill.icon}</div>
              <p className="font-semibold text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
