"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data/projects";
import { staggerContainer, fadeInUp, viewport } from "@/lib/animations";

const featured = projects.filter((p) => p.featured).slice(0, 3);

export function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };
  const prev = () => go((index - 1 + featured.length) % featured.length);
  const next = () => go((index + 1) % featured.length);

  const project = featured[index];

  const variants = {
    enter: (dir: number) => ({ x: dir * 48, opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
    exit: (dir: number) => ({
      x: dir * -48,
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" as const },
    }),
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-12"
        >
          {/* Header + nav controls */}
          <div className="flex items-end justify-between gap-6">
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-violet-400 bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
                Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--color-text)] leading-tight">
                Featured{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
            </motion.div>

            {/* Prev / Next */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <button
                onClick={prev}
                aria-label="Previous project"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--color-card-border)] text-[var(--color-text-muted)] hover:border-violet-400/50 hover:text-[var(--color-text)] hover:bg-[rgba(139,92,246,0.08)] transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next project"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--color-card-border)] text-[var(--color-text-muted)] hover:border-violet-400/50 hover:text-[var(--color-text)] hover:bg-[rgba(139,92,246,0.08)] transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </motion.div>
          </div>

          {/* Slide */}
          <div className="relative overflow-hidden rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] min-h-[420px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={project.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-2 gap-0"
              >
                {/* Left: info */}
                <div className="flex flex-col gap-5 p-8 lg:p-10 justify-center">
                  {/* Project number */}
                  <span className="text-xs font-bold tracking-widest text-[var(--color-text-muted)] uppercase">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(featured.length).padStart(2, "0")}
                  </span>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-[var(--color-text)]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg border border-[var(--color-glass-border)] text-[var(--color-text-muted)] bg-[var(--color-glass-bg)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--color-card-border)] text-[var(--color-text-muted)] text-sm font-medium hover:border-violet-400/50 hover:text-[var(--color-text)] hover:bg-[rgba(139,92,246,0.07)] transition-all"
                    >
                      <FaGithub size={15} />
                      Source
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 active:scale-95 transition-all shadow-[0_0_18px_rgba(139,92,246,0.3)]"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Right: image */}
                <div className="relative min-h-[260px] lg:min-h-[420px] overflow-hidden lg:rounded-r-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay on left edge for blending */}
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[var(--color-card)] to-transparent hidden lg:block" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === index
                    ? "w-6 h-2 bg-violet-400"
                    : "w-2 h-2 bg-[var(--color-text-muted)]/30 hover:bg-[var(--color-text-muted)]/60"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
