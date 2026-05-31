"use client";

import { motion } from "framer-motion";
import { Quote, ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-16">
          <SectionHeader
            tag="Testimonials"
            title="What People"
            titleHighlight="Say"
            description="Feedback from colleagues, clients, and students I've had the privilege of working with."
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              variants={fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col gap-5 p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] hover:border-[var(--color-card-border-hover)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-cyan-400/0 group-hover:from-violet-500/5 group-hover:to-cyan-400/3 transition-all duration-500 rounded-2xl" />

              {/* Quote icon */}
              <div className="relative z-10">
                <Quote size={24} className="text-violet-500/60" />
              </div>

              {/* Quote text */}
              <p className="relative z-10 text-[var(--color-text-muted)] text-sm leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="relative z-10 flex items-center gap-3 pt-2 border-t border-[var(--color-card-border)]">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold font-display bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-[rgba(139,92,246,0.25)] text-violet-500">
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[var(--color-text)] font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-[var(--color-text-muted)] text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
                {t.reviewUrl && (
                  <a
                    href={t.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View review on Mostaqel"
                    className="flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium text-amber-500 hover:text-amber-400 hover:bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.25)] hover:border-[rgba(245,158,11,0.45)] transition-all duration-200"
                  >
                    <ExternalLink size={11} />
                    {t.platform ?? "Review"}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
