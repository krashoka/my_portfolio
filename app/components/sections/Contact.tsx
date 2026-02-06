"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-gradient-to-b from-white to-lightbg flex justify-center scroll-mt-24"
    >
      <motion.div
        className="max-w-4xl w-full text-center bg-white rounded-3xl shadow-lg p-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Let’s Work Together
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          I’m open to exciting opportunities where I can build impactful
          products and scalable applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="/Ashok_Kumar_Resume.pdf"
            download
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
          >
            Download Resume
            <FaDownload />
          </a>

          <a
            href="mailto:kumarashoka7677@gmail.com"
            className="flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition"
          >
            Email Me
            <FaEnvelope />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 text-2xl text-gray-600">
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
    </section>
  );
}
