"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { HeroBackground } from "./HeroBackground";
import { FloatingBadges } from "./FloatingBadges";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center w-full">
        {/* ── Left: text content ─────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Headline */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-2">
            <p className="text-slate-500 font-medium tracking-widest text-xs uppercase">
              Frontend Developer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold font-display leading-[1.1] text-slate-100">
              Building{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Scalable
              </span>{" "}
              <br />
              Web Applications
            </h1>
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-medium text-sm hover:opacity-90 transition-all duration-200 shadow-[0_0_22px_rgba(139,92,246,0.35)]"
            >
              View Projects
              <ArrowDown size={15} />
            </button>
            <a
              href="https://mostaql.com/u/mustafa_za"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(245,158,11,0.35)] text-amber-500 font-medium text-sm hover:border-amber-400 hover:text-amber-400 hover:bg-[rgba(245,158,11,0.08)] transition-all duration-200"
            >
              <Briefcase size={15} />
              Hire on Mostaqel
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2 pt-1"
          >
            <span className="text-[var(--color-text-muted)] text-sm">
              Find me on
            </span>
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/mmahmoud95"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[rgba(139,92,246,0.08)] transition-all duration-200"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mustafa-mahmoud-za"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[#0a66c2] hover:bg-[rgba(10,102,194,0.1)] transition-all duration-200"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://wa.me/201152910495"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[#25d366] hover:bg-[rgba(37,211,102,0.1)] transition-all duration-200"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: profile image ────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.21, 0.47, 0.32, 0.98],
            delay: 0.2,
          }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/25 to-cyan-400/15 blur-3xl scale-125 pointer-events-none" />

            {/* Image wrapper */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] rounded-full p-[3px] bg-gradient-to-br from-violet-500/60 to-cyan-400/40">
              <div className="w-full h-full rounded-full overflow-hidden bg-bg">
                <Image
                  src="/profile-img.webp"
                  alt="Mustafa Mahmoud — Frontend Developer"
                  fill
                  className="object-cover rounded-full"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </div>
              {/* Floating tech badges */}
              <FloatingBadges />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
