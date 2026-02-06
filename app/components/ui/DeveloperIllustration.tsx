"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DeveloperIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      className="relative flex justify-center items-center"
    >
      {/* Glow */}
      <div className="absolute w-[420px] h-[420px] bg-primary/30 rounded-full blur-3xl"></div>

      {/* Circle background */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-purple-200 overflow-hidden flex justify-center"
      >
        {/* Image inside circle (bottom aligned) */}
        <div className="relative w-[85%] h-[95%] mt-10">
          <Image
            src="/my_ghibli.png"
            alt="Ashok Avatar"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
