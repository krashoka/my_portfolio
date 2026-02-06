"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-lightbg flex justify-center scroll-mt-24">
      <div className="max-w-5xl w-full">
        <motion.h2
          className="text-3xl font-bold text-gray-800 text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">

          <motion.div
            className="bg-white p-8 rounded-3xl shadow-md"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Software Engineer L2 — Predigle
            </h3>
            <p className="text-gray-500 text-sm">2024 – Present</p>

            <p className="text-gray-600 mt-3 text-sm">
              Leading frontend development using React, building reusable UI
              component libraries, and optimizing application performance
              through modern React patterns and architecture.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-3xl shadow-md"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Software Engineer — TCS
            </h3>
            <p className="text-gray-500 text-sm">2019 – 2021</p>

            <p className="text-gray-600 mt-3 text-sm">
              Developed Angular enterprise applications, integrated REST APIs,
              improved UI responsiveness, and collaborated with cross-functional
              teams to deliver scalable frontend solutions.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
