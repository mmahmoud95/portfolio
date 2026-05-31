"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";
import { fadeInUp, staggerFast, viewport } from "@/lib/animations";
import type { SkillGroup as SkillGroupType } from "@/lib/types";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Wrench,
};

interface SkillGroupProps {
  group: SkillGroupType;
  index: number;
}

export function SkillGroup({ group, index }: SkillGroupProps) {
  const Icon = iconMap[group.icon] ?? Monitor;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay: index * 0.15 }}
      className="flex flex-col gap-5 p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] hover:border-[var(--color-card-border-hover)] transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet-500/20 to-cyan-400/10 border border-[rgba(139,92,246,0.2)]">
          <Icon size={18} className="text-violet-400" />
        </div>
        <div>
          <h3 className="text-[var(--color-text)] font-semibold font-display">
            {group.category}
          </h3>
          <p className="text-[var(--color-text-muted)] text-xs">
            {group.description}
          </p>
        </div>
      </div>

      {/* Skills grid */}
      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex flex-wrap gap-2"
      >
        {group.skills.map((skill) => (
          <motion.span
            key={skill}
            variants={fadeInUp}
            className="px-3 py-1.5 rounded-xl text-xs font-medium text-[var(--color-text-muted)] bg-[var(--color-input-bg)] border border-[var(--color-card-border)] hover:border-[rgba(139,92,246,0.3)] hover:text-violet-500 hover:bg-[rgba(139,92,246,0.08)] transition-all duration-200 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
