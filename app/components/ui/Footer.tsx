"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-lightbg mt-24 pt-12 pb-8"
    >
      {/* Top divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-10"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">

        {/* Name */}
        <h3 className="text-xl font-bold text-gray-800">
          Ashok Kumar
        </h3>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Ashok Kumar. Built with Next.js & Tailwind.
        </p>
      </div>
    </motion.footer>
  );
}
