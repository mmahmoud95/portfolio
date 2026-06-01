"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { staggerContainer, fadeInUp, viewport } from "@/lib/animations";

const links = [
  {
    icon: FaGithub,
    label: "GitHub",
    handle: "mmahmoud95",
    href: "https://github.com/mmahmoud95",
    hoverColor: "hover:text-[var(--color-text)]",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    handle: "mustafa-mahmoud-za",
    href: "https://www.linkedin.com/in/mustafa-mahmoud-za",
    hoverColor: "hover:text-[#0a66c2]",
  },
  {
    icon: FileText,
    label: "Resume",
    handle: "View PDF",
    href: "/Mustafa_Mahmoud_CV.pdf",
    hoverColor: "hover:text-violet-400",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col items-center text-center gap-10"
        >
          {/* Heading */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-violet-400 bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--color-text)] leading-tight">
              Let&apos;s Work{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-base leading-relaxed">
              Open to full-time roles, freelance projects, and interesting
              conversations about frontend architecture and product development.
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            variants={fadeInUp}
            className="w-full flex flex-col gap-6 p-8 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] backdrop-blur-sm"
          >
            {/* Availability */}
            <div className="flex items-center justify-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-sm font-medium">
                Available for new opportunities
              </span>
            </div>

            {/* Email CTA */}
            <a
              href="mailto:mustafa.mahmoud.za@gmail.com"
              className="group flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-medium hover:opacity-90 active:scale-95 transition-all shadow-[0_0_28px_rgba(139,92,246,0.35)]"
            >
              <Mail size={17} />
              <span>mustafa.mahmoud.za@gmail.com</span>
            </a>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[var(--color-glass-border)]" />
              <span className="text-xs text-[var(--color-text-muted)]">
                or find me on
              </span>
              <div className="flex-1 h-px bg-[var(--color-glass-border)]" />
            </div>

            {/* Social links row */}
            <div className="flex items-center justify-center gap-3">
              {links.map(({ icon: Icon, label, handle, href, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[var(--color-card-border)] text-[var(--color-text-muted)] text-sm font-medium ${hoverColor} hover:border-[rgba(139,92,246,0.4)] hover:bg-[rgba(139,92,246,0.06)] transition-all`}
                >
                  <Icon size={15} />
                  <span className="hidden sm:inline">{handle}</span>
                  <span className="sm:hidden">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
