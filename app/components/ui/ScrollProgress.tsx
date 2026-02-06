"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]
      bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
      shadow-[0_0_8px_rgba(99,102,241,0.6)]"
    />
  );
}
