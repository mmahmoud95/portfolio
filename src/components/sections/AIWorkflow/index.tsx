"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, BrainCircuit } from "lucide-react";
import { staggerContainer, fadeInUp, viewport } from "@/lib/animations";

const cards = [
  {
    icon: Zap,
    title: "Accelerated Development",
    description:
      "GitHub Copilot and ChatGPT are woven into my daily coding workflow — from generating boilerplate to rapid prototyping complex features — resulting in measurably faster delivery without sacrificing quality.",
    tools: ["GitHub Copilot", "ChatGPT", "Claude"],
    accent: "violet",
  },
  {
    icon: ShieldCheck,
    title: "Code Quality & Review",
    description:
      "AI assists with pattern detection, automated refactoring suggestions, and catching edge cases during code reviews — keeping production standards high while reducing manual review overhead.",
    tools: ["AI Debugging", "Code Review", "Refactoring"],
    accent: "cyan",
  },
  {
    icon: BrainCircuit,
    title: "Engineering Intelligence",
    description:
      "Smart documentation generation, architecture decision validation, and automated analysis enhance my engineering judgment — with humans always making the final call.",
    tools: ["Documentation", "Architecture", "Validation"],
    accent: "emerald",
  },
];

const accentClasses: Record<
  string,
  { icon: string; pill: string; glow: string }
> = {
  violet: {
    icon: "text-violet-400 bg-[rgba(139,92,246,0.1)] border-[rgba(139,92,246,0.25)]",
    pill: "text-violet-400 bg-[rgba(139,92,246,0.08)] border-[rgba(139,92,246,0.2)]",
    glow: "from-violet-500/10 to-transparent",
  },
  cyan: {
    icon: "text-cyan-400 bg-[rgba(34,211,238,0.1)] border-[rgba(34,211,238,0.25)]",
    pill: "text-cyan-400 bg-[rgba(34,211,238,0.08)] border-[rgba(34,211,238,0.2)]",
    glow: "from-cyan-500/10 to-transparent",
  },
  emerald: {
    icon: "text-emerald-400 bg-[rgba(52,211,153,0.1)] border-[rgba(52,211,153,0.25)]",
    pill: "text-emerald-400 bg-[rgba(52,211,153,0.08)] border-[rgba(52,211,153,0.2)]",
    glow: "from-emerald-500/10 to-transparent",
  },
};

export function AIWorkflow() {
  return (
    <section
      id="ai-workflow"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-4 items-center text-center max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-violet-400 bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
              Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--color-text)] leading-tight">
              AI-Enhanced{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Development
              </span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
              Leveraging AI tools strategically to deliver higher quality code,
              faster — while keeping human judgment at the center of every
              decision.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {cards.map(({ icon: Icon, title, description, tools, accent }) => {
              const cls = accentClasses[accent];
              return (
                <motion.div
                  key={title}
                  variants={fadeInUp}
                  className="relative flex flex-col gap-5 p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] backdrop-blur-sm hover:border-[var(--color-card-border-hover)] hover:bg-[var(--color-card-hover)] transition-all duration-300 overflow-hidden group"
                >
                  {/* Subtle corner glow */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-bl ${cls.glow} blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border ${cls.icon}`}
                  >
                    <Icon size={18} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold font-display text-[var(--color-text)]">
                      {title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-1">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${cls.pill}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
