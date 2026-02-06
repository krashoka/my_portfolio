"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Blob 1 */}
      <motion.div
        className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        style={{ top: "10%", left: "10%" }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ bottom: "10%", right: "10%" }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        style={{ top: "40%", left: "50%" }}
      />
    </div>
  );
}
