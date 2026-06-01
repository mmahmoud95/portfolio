"use client";

import { motion } from "framer-motion";
import { Code2, Building2, MessageSquare, Zap } from "lucide-react";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

const highlights = [
  {
    icon: Code2,
    metric: "React / Next.js",
    label: "Frontend Developer",
    desc: "TypeScript-first, component-driven UIs",
  },
  {
    icon: Building2,
    metric: "Enterprise",
    label: "Systems",
    desc: "Production management platforms at JanaLight",
  },
  {
    icon: MessageSquare,
    metric: "950+",
    label: "Questions Answered",
    desc: "Technical mentorship at Hsoub Academy",
  },
  {
    icon: Zap,
    metric: "Real-Time",
    label: "Applications",
    desc: "SignalR & WebSocket live-data dashboards",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start"
        >
          {/* ── Left: Bio ── */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            {/* Section tag */}
            <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-violet-400 bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
              About
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--color-text)] leading-tight">
              The Developer{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Behind the Code
              </span>
            </h2>

            <div className="flex flex-col gap-4 text-[var(--color-text-muted)] leading-relaxed text-base">
              <p>
                I&apos;m a{" "}
                <span className="text-[var(--color-text)] font-medium">
                  Frontend Developer
                </span>{" "}
                specializing in{" "}
                <span className="text-violet-400 font-medium">React</span>,{" "}
                <span className="text-cyan-400 font-medium">Next.js</span>, and{" "}
                <span className="text-violet-400 font-medium">TypeScript</span>.
                At{" "}
                <span className="text-[var(--color-text)] font-medium">
                  JanaLight
                </span>
                , I build enterprise-scale systems — complex multi-step
                workflows, SignalR-powered real-time dashboards — taking full
                ownership of frontend architecture decisions.
              </p>
              <p>
                I care about clean code, meaningful performance, and shipping
                things that actually work in production. I also mentor
                developers through the community, having answered{" "}
                <span className="text-[var(--color-text)] font-medium">
                  950+ technical questions
                </span>{" "}
                to help learners accelerate their growth.
              </p>
            </div>

            {/* Trait chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Clean Architecture",
                "Performance",
                "Team Collaboration",
                "AI-Assisted Dev",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium text-violet-400 bg-[rgba(139,92,246,0.08)] border border-[rgba(139,92,246,0.18)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Right: 2×2 highlight cards ── */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, metric, label, desc }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="flex flex-col gap-3 p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] backdrop-blur-sm hover:border-[var(--color-card-border-hover)] hover:bg-[var(--color-card-hover)] transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
                  <Icon size={17} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-lg font-bold font-display text-[var(--color-text)] leading-none">
                    {metric}
                  </p>
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mt-0.5">
                    {label}
                  </p>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
