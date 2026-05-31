"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { fadeInUp, viewport } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";
import type { ExperienceItem } from "@/lib/types";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay: index * 0.15 }}
      className="relative flex gap-6"
    >
      {/* ── Timeline spine ─────────────── */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div
          className={`relative z-10 flex-shrink-0 w-4 h-4 rounded-full mt-1.5 border-2 ${
            item.current
              ? "bg-violet-500 border-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
              : "bg-[var(--color-bg-tertiary)] border-[rgba(139,92,246,0.4)]"
          }`}
        />
        {/* Line */}
        {!isLast && (
          <div className="w-[2px] flex-1 mt-2 bg-gradient-to-b from-[rgba(139,92,246,0.4)] to-[rgba(139,92,246,0.05)]" />
        )}
      </div>

      {/* ── Card ───────────────────────── */}
      <div className="flex-1 pb-12">
        <div className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] hover:border-[var(--color-card-border-hover)] transition-all duration-300 group">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="text-lg font-bold text-[var(--color-text)] font-display">
                {item.role}
              </h3>
              <p className="text-violet-400 font-medium text-sm mt-0.5">
                {item.company}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {item.current && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-green-400 bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Current
                </span>
              )}
              <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                <Calendar size={12} />
                {item.period}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                <MapPin size={12} />
                {item.location}
              </span>
            </div>
          </div>

          {/* Description bullets */}
          <ul className="flex flex-col gap-2 mb-5">
            {item.description.map((desc, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
              >
                <span className="w-1 h-1 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                {desc}
              </li>
            ))}
          </ul>

          {/* Achievements */}
          {item.achievements.length > 0 && (
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">
                Key Achievements
              </p>
              <ul className="flex flex-col gap-1.5">
                {item.achievements.map((ach, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
                  >
                    <span className="text-violet-400 mt-0.5 flex-shrink-0">
                      ▸
                    </span>
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
