"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "CodingGenie",
    description:
      "Developer productivity tools built with Next.js and TypeScript, optimized for SEO and performance.",
    image: "/projects/codinggenie.png",
    imageFit: "object-cover",
    tech: ["Next.js", "TypeScript", "Tailwind", "SEO"],
    live: "https://codinggenie.vercel.app",
    github: "https://github.com/krashoka/codegenie",
  },
  {
    title: "PMINJ E-commerce Platform",
    description:
      "Full-featured Angular e-commerce platform with cart, coupons, payments, and admin dashboard.",
    image: "/projects/pminj.jpg",
    imageFit: "object-contain",
    tech: ["Angular", "RxJS", "REST API", "Payments"],
    live: "https://www.pminjorg.com/",
    github: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 bg-lightbg flex justify-center scroll-mt-24"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          className="text-3xl font-bold text-gray-800 text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Preview Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`
      ${project.imageFit}
      transition-transform duration-500
      group-hover:scale-110
    `}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6">
                  {/* Live site button */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl hover:scale-105 transition"
                    >
                      Live
                      <FaExternalLinkAlt />
                    </a>
                  )}

                  {/* GitHub button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-white text-white px-5 py-3 rounded-xl hover:bg-white hover:text-primary transition"
                    >
                      GitHub
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
