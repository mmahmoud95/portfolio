"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const sectionIds = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "testimonials",
  "contact",
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-[2px] inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--navbar-bg)] backdrop-blur-xl border-b border-[rgba(139,92,246,0.1)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="text-xl font-bold font-display bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          MM
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "text-violet-500 bg-[rgba(139,92,246,0.1)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[rgba(139,92,246,0.06)]"
                  }`}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Resume CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/Mustafa_Mahmoud_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-colors"
            aria-label="Toggle menu"
            style={{ color: "var(--color-text-muted)" }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-[var(--navbar-mobile-bg)] backdrop-blur-xl border-b border-[rgba(139,92,246,0.1)] px-6 pb-5"
          >
            <ul className="flex flex-col gap-1 pt-2">
              {navLinks.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className={`w-full text-left px-4 py-3 text-sm rounded-xl font-medium transition-all duration-200 ${
                        isActive
                          ? "text-violet-500 bg-[rgba(139,92,246,0.1)]"
                          : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href="/Mustafa_Mahmoud_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
