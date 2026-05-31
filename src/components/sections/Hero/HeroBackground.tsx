"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Violet blob */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.26, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Cyan blob */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 right-[10%] w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.22) 0%, transparent 70%)",
          transform: "translate(50%, -50%)",
        }}
      />

      {/* Purple blob (bottom) */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.16, 0.1] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-10 left-1/2 w-[350px] h-[350px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
          transform: "translateX(-50%)",
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-60" />
    </div>
  );
}
