"use client";

import { motion } from "framer-motion";
import { Building2, Zap, MessageSquare, Layers, Rocket } from "lucide-react";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { highlights } from "@/lib/data/highlights";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Zap,
  MessageSquare,
  Layers,
  Rocket,
};

export function Highlights() {
  return (
    <section id="highlights" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-16">
          <SectionHeader
            tag="Highlights"
            title="Career"
            titleHighlight="Achievements"
            description="Key milestones and impact across professional roles, projects, and community contributions."
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {highlights.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Rocket;
            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                transition={{ delay: i * 0.08 }}
                className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] hover:border-[var(--color-card-border-hover)] hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-cyan-400/0 group-hover:from-violet-500/5 group-hover:to-cyan-400/5 transition-all duration-500 rounded-2xl" />

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet-500/20 to-cyan-400/10 border border-[rgba(139,92,246,0.2)]">
                  <Icon size={22} className="text-violet-400" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-1">
                  <span className="text-2xl font-bold font-display bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    {item.metric}
                  </span>
                  <h3 className="text-[var(--color-text)] font-semibold text-base">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                    {item.description}
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
