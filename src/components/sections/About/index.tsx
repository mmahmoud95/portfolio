"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "./StatCard";
import type { StatItem } from "@/lib/types";

const stats: StatItem[] = [
  { value: "1+", label: "Years Professional Experience" },
  { value: "4+", label: "Projects in Portfolio" },
  { value: "950+", label: "Questions Answered" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-center mb-16">
          <SectionHeader
            tag="About Me"
            title="The Developer"
            titleHighlight="Behind the Code"
            description="I build modern, production-grade web experiences that balance technical excellence with real business impact."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ── Left: narrative ─────────────── */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-5 text-[var(--color-text-muted)] leading-relaxed text-base"
          >
            <p>
              I&apos;m a{" "}
              <span className="text-[var(--color-text)] font-medium">
                Frontend Developer
              </span>{" "}
              specializing in <span className="text-violet-400">React</span>,{" "}
              <span className="text-cyan-400">Next.js</span>, and{" "}
              <span className="text-violet-400">TypeScript</span>. At{" "}
              <span className="text-[var(--color-text)] font-medium">
                JanaLight
              </span>
              , I build enterprise-scale systems — from complex multi-step
              workflows to SignalR-powered real-time features — taking ownership
              of frontend architecture decisions and writing clean, maintainable
              code.
            </p>
            <p>
              Outside of work, I mentor developers through the tech community,
              having answered{" "}
              <span className="text-[var(--color-text)] font-medium">950+</span>{" "}
              technical questions on Hsoub Academy to help learners accelerate
              their growth.
            </p>

            {/* Highlight tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Clean Code",
                "Performance",
                "Team Collaboration",
                "Architecture",
                "Mentoring",
                "AI-Assisted Dev",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium text-violet-500 bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Right: stats grid ───────────── */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
