"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/data/experience";
import { staggerContainer, fadeInUp, viewport } from "@/lib/animations";

const typeBadgeColor: Record<string, string> = {
  "Full-time":
    "text-emerald-400 bg-[rgba(52,211,153,0.1)] border-[rgba(52,211,153,0.25)]",
  "Part-time":
    "text-amber-400 bg-[rgba(251,191,36,0.1)] border-[rgba(251,191,36,0.25)]",
  Internship:
    "text-cyan-400 bg-[rgba(34,211,238,0.1)] border-[rgba(34,211,238,0.25)]",
  Contract:
    "text-violet-400 bg-[rgba(139,92,246,0.1)] border-[rgba(139,92,246,0.25)]",
  Freelance:
    "text-violet-400 bg-[rgba(139,92,246,0.1)] border-[rgba(139,92,246,0.25)]",
};

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(
    experiences[0]?.id ?? null,
  );

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-violet-400 bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
              Career
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--color-text)] leading-tight">
              Professional{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </motion.div>

          {/* Accordion list */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col gap-3"
          >
            {experiences.map((exp) => {
              const isOpen = openId === exp.id;
              return (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[rgba(139,92,246,0.35)] bg-[var(--color-card-hover)]"
                      : "border-[var(--color-card-border)] bg-[var(--color-card)] hover:border-[rgba(139,92,246,0.25)]"
                  }`}
                >
                  {/* Header row */}
                  <button
                    onClick={() => toggle(exp.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-base font-bold font-display text-[var(--color-text)]">
                          {exp.role}
                        </h3>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${typeBadgeColor[exp.type] ?? typeBadgeColor["Contract"]}`}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
                        <span className="font-medium text-[var(--color-text)]">
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex-shrink-0 text-[var(--color-text-muted)]"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  {/* Expandable body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 flex flex-col gap-4 border-t border-[var(--color-glass-border)]">
                          {/* Key achievements */}
                          <ul className="flex flex-col gap-2.5 mt-4">
                            {exp.achievements.slice(0, 3).map((ach, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                                {ach}
                              </li>
                            ))}
                          </ul>

                          {/* Tech pills */}
                          <div className="flex flex-wrap gap-2 pt-1">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 text-xs font-medium rounded-lg border border-[var(--color-glass-border)] text-[var(--color-text-muted)] bg-[var(--color-glass-bg)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
