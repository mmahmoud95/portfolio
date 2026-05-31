"use client";

import { motion } from "framer-motion";

const badges = [
  { label: "React", color: "#61dafb", top: "-14%", right: "-18%", delay: 0 },
  { label: "Next.js", color: "#ffffff", top: "12%", right: "-24%", delay: 0.4 },
  {
    label: "TypeScript",
    color: "#3178c6",
    bottom: "22%",
    right: "-22%",
    delay: 0.8,
  },
  {
    label: "Node.js",
    color: "#68a063",
    bottom: "-8%",
    left: "10%",
    delay: 1.2,
  },
  { label: "Tailwind", color: "#38bdf8", top: "-10%", left: "22%", delay: 1.6 },
  {
    label: "MongoDB",
    color: "#47a248",
    bottom: "12%",
    left: "-18%",
    delay: 2.0,
  },
];

export function FloatingBadges() {
  return (
    <>
      {badges.map(({ label, color, delay, ...pos }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 1, 1],
            scale: [0.6, 1, 1],
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { delay, duration: 0.5 },
            scale: { delay, duration: 0.5 },
            y: {
              delay: delay + 0.5,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap"
          style={{
            ...pos,
            background: "rgba(17,17,34,0.85)",
            border: `1px solid ${color}30`,
            backdropFilter: "blur(8px)",
            boxShadow: `0 0 12px ${color}20`,
            color: color,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: color }}
          />
          {label}
        </motion.div>
      ))}
    </>
  );
}
