"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "../ui/AnimatedBackground";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        bg-white
        scroll-mt-24
        px-6
        pt-24 pb-20
        md:py-28
        flex justify-center
      "
    >
      <AnimatedBackground />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center">
        {/* Left Illustration — hidden on mobile & tablet */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center relative"
        >
          {/* Glow */}
          <div className="absolute w-[420px] h-[420px] bg-primary/30 rounded-full blur-3xl"></div>

          {/* Floating Illustration */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[380px] h-[440px]"
          >
            <Image
              src="/ghibli_about.png"
              alt="Ashok Illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2
            className="
              font-bold text-gray-800 mb-5
              text-2xl
              sm:text-3xl
            "
          >
            About Me
          </h2>

          <p
            className="
              text-gray-600 leading-relaxed
              text-base
              sm:text-lg
              max-w-xl
              mx-auto md:mx-0
            "
          >
            I am a Full-Stack Developer with 3.5+ years of experience building
            scalable, high-performance web applications using React, Angular,
            Next.js, and modern frontend ecosystems. I specialize in reusable
            component architecture, performance optimization, and building
            responsive UI systems used in real production environments.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10 text-center md:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                3.5+
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                15+
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">
                Projects Built
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                10+
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">
                Technologies
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
