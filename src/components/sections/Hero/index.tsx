"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* ── Left: Content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7 max-w-2xl"
          >
            {/* Availability badge */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-500 text-sm font-medium tracking-wide">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name + role */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
              <p className="text-[var(--color-text-muted)] text-sm font-medium tracking-widest uppercase">
                Frontend Developer
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-bold font-display leading-[1.05] tracking-tight text-[var(--color-text)]">
                Mustafa{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Mahmoud
                </span>
              </h1>
            </motion.div>

            {/* Value proposition */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-xl"
            >
              Building scalable web applications with React, Next.js, and
              TypeScript. Specialized in enterprise systems, real-time features,
              and production-grade frontend architecture.
            </motion.p>

            {/* Tech pills */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "SignalR"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-[var(--color-glass-border)] text-[var(--color-text-muted)] bg-[var(--color-glass-bg)] backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ),
              )}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-medium text-sm hover:opacity-90 active:scale-95 transition-all shadow-[0_0_28px_rgba(139,92,246,0.38)]"
              >
                View Projects
                <ArrowRight size={15} />
              </button>
              <a
                href="/Mustafa_Mahmoud_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-glass-border)] text-[var(--color-text)] font-medium text-sm hover:border-violet-400/60 hover:bg-[rgba(139,92,246,0.07)] active:scale-95 transition-all backdrop-blur-sm"
              >
                <Download size={15} />
                Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-glass-border)] text-[var(--color-text-muted)] font-medium text-sm hover:border-violet-400/40 hover:text-[var(--color-text)] hover:bg-[rgba(139,92,246,0.06)] active:scale-95 transition-all backdrop-blur-sm"
              >
                <Mail size={15} />
                Contact
              </button>
            </motion.div>

            {/* Social row */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-5 pt-1"
            >
              <a
                href="https://github.com/mmahmoud95"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                <FaGithub size={17} />
                <span>mmahmoud95</span>
              </a>
              <span className="w-px h-4 bg-[var(--color-glass-border)]" />
              <a
                href="https://www.linkedin.com/in/mustafa-mahmoud-za"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[#0a66c2] transition-colors"
              >
                <FaLinkedin size={17} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.21, 0.47, 0.32, 0.98],
              delay: 0.25,
            }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/25 to-cyan-500/15 blur-3xl scale-110 pointer-events-none" />
              {/* Border gradient wrapper */}
              <div className="relative w-[280px] h-[340px] rounded-2xl p-[2px] bg-gradient-to-br from-violet-500/50 to-cyan-400/30">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-[var(--color-bg)] relative">
                  <Image
                    src="/profile-img.webp"
                    alt="Mustafa Mahmoud — Frontend Developer"
                    fill
                    className="object-cover"
                    priority
                    sizes="280px"
                  />
                  {/* Subtle bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating status chip */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-card)] border border-[var(--color-card-border)] backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] whitespace-nowrap">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-[var(--color-text-muted)]">
                  Open to work
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
