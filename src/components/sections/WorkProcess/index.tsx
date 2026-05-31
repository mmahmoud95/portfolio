"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  Monitor,
  Plug,
  TestTube2,
  Gauge,
  Rocket,
} from "lucide-react";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/data/process";

const iconMap: Record<string, React.ElementType> = {
  FileSearch,
  Monitor,
  Plug,
  TestTube2,
  Gauge,
  Rocket,
};

export function WorkProcess() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-16">
          <SectionHeader
            tag="Process"
            title="How I"
            titleHighlight="Work"
            description="A structured approach that takes ideas from concept to production — with quality at every step."
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Rocket;
            return (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                transition={{ delay: i * 0.08 }}
                className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] hover:border-[var(--color-card-border-hover)] transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-cyan-400/0 group-hover:from-violet-500/5 group-hover:to-cyan-400/3 transition-all duration-500 rounded-2xl" />

                {/* Step number */}
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-4xl font-bold font-display text-[rgba(139,92,246,0.15)] group-hover:text-[rgba(139,92,246,0.25)] transition-colors tabular-nums">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet-500/20 to-cyan-400/10 border border-[rgba(139,92,246,0.2)]">
                    <Icon size={16} className="text-violet-400" />
                  </div>
                </div>

                <div className="relative z-10 flex flex-col gap-1.5">
                  <h3 className="text-[var(--color-text)] font-semibold font-display">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
