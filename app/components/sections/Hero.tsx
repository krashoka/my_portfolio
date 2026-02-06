"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedBackground from "../ui/AnimatedBackground";
import DeveloperIllustration from "../ui/DeveloperIllustration";

export default function Hero() {
  const roles = [
    "Building Scalable Full-Stack Web Applications",
    "React, Angular & Next.js Specialist",
    "Performance-Driven Frontend & API Development",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    if (subIndex === roles[index].length) {
      const timeout = setTimeout(() => {
        setSubIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 1400);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setText((prev) => prev + roles[index][subIndex]);
      setSubIndex((prev) => prev + 1);
    }, 40);

    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  useEffect(() => {
    setText("");
  }, [index]);

  return (
    <section
      id="home"
      className="
        relative
        flex items-center justify-center
        bg-lightbg
        scroll-mt-24
        px-6
        pt-24 pb-20
        md:min-h-screen
      "
    >
      {/* Background */}
      <AnimatedBackground />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <h1
            className="
              font-bold leading-tight
              text-3xl
              sm:text-4xl
              md:text-5xl
            "
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Ashok Kumar
            </span>
          </h1>

          <h2
            className="
    text-primary font-semibold mt-4
    h-12 sm:h-14 md:h-16
    text-lg sm:text-xl md:text-2xl
  "
          >
            {text}
            <span className="animate-pulse">|</span>
          </h2>

          <div className="h-4 sm:h-3 md:h-2" />

          <p
            className="
    text-gray-600
    text-base sm:text-lg
    leading-relaxed
    max-w-xl
    mx-auto md:mx-0
  "
          >
            Full-Stack Developer Specializing in Modern Frontend Development for
            Scalable Web Applications
          </p>

          <div className="flex justify-center md:justify-start gap-3 mt-7">
            <button
              onClick={() => {
                const section = document.getElementById("projects");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="
                bg-primary text-white rounded-xl shadow-md transition
                px-4 py-2 text-sm
                sm:px-5 sm:py-2.5 sm:text-base
                hover:scale-105
              "
            >
              View Projects
            </button>

            <a
              href="/Ashok_Kumar_Resume.pdf"
              download
              className="
      border border-primary text-primary rounded-xl transition
      px-4 py-2 text-sm
      sm:px-5 sm:py-2.5 sm:text-base
      hover:bg-primary hover:text-white
    "
            >
              Download Resume
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-5 mt-7 text-xl text-gray-600">
            <a
              href="https://github.com/krashoka"
              target="_blank"
              className="hover:text-primary hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ashok-kumar-869093174/"
              target="_blank"
              className="hover:text-primary hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Illustration — hidden on tablet & mobile */}
        <div className="relative justify-center hidden md:flex">
          <DeveloperIllustration />
        </div>
      </div>
    </section>
  );
}
