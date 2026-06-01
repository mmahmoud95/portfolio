"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-glass-border)] bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <span className="text-sm font-bold font-display bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Mustafa Mahmoud
        </span>

        {/* Copy */}
        <p className="text-xs text-[var(--color-text-muted)] order-last sm:order-none">
          © {year} — Frontend Developer
        </p>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mmahmoud95"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/mustafa-mahmoud-za"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-text-muted)] hover:text-[#0a66c2] transition-colors"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href="mailto:mustafa.mahmoud.za@gmail.com"
            aria-label="Email"
            className="text-[var(--color-text-muted)] hover:text-violet-400 transition-colors"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
