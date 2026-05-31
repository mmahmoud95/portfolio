"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { fadeInLeft, fadeInRight, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useFetch } from "@/hooks/useFetch";

const SUBMIT_URL = "https://formsubmit.co/mustafa.mahmoud.za@gmail.com";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "mustafa.mahmoud.za@gmail.com",
    href: "mailto:mustafa.mahmoud.za@gmail.com",
    color: "text-violet-400",
    bg: "bg-[rgba(139,92,246,0.1)]",
    border: "border-[rgba(139,92,246,0.2)]",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "mustafa-mahmoud-za",
    href: "https://www.linkedin.com/in/mustafa-mahmoud-za",
    color: "text-[#0a66c2]",
    bg: "bg-[rgba(10,102,194,0.1)]",
    border: "border-[rgba(10,102,194,0.2)]",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "mmahmoud95",
    href: "https://github.com/mmahmoud95",
    color: "text-[var(--color-text-muted)]",
    bg: "bg-[rgba(255,255,255,0.05)]",
    border: "border-[rgba(139,92,246,0.15)]",
  },
  {
    icon: Briefcase,
    label: "Mostaqel",
    value: "Hire me on Mostaqel",
    href: "https://mostaql.com/u/mustafa_za",
    color: "text-amber-500",
    bg: "bg-[rgba(245,158,11,0.1)]",
    border: "border-[rgba(245,158,11,0.25)]",
  },
];

export function Contact() {
  const { error, loading, submitForm } = useFetch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _captcha: "false",
      },
      SUBMIT_URL,
    );
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[var(--color-input-bg)] border border-[var(--color-input-border)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] text-sm focus:outline-none focus:border-violet-500/50 focus:bg-[rgba(139,92,246,0.06)] transition-all duration-200";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-16">
          <SectionHeader
            tag="Contact"
            title="Let's Work"
            titleHighlight="Together"
            description="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── Left: info ─────────────────── */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-bold text-[var(--color-text)] font-display mb-3">
                Get in touch
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                I&apos;m currently open to new opportunities — whether
                that&apos;s a full-time role, freelance project, or just a
                conversation about frontend architecture.
              </p>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              {contactLinks.map(
                ({ icon: Icon, label, value, href, color, bg, border }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:border-[var(--color-card-border-hover)] hover:bg-[var(--color-card-hover)] transition-all duration-200 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg} border ${border} flex-shrink-0`}
                    >
                      <Icon size={18} className={color} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)] font-medium uppercase tracking-widest">
                        {label}
                      </p>
                      <p className="text-[var(--color-text)] text-sm group-hover:text-violet-500 transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ),
              )}
            </div>

            {/* Availability */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.07)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <p className="text-green-400 text-sm font-medium">
                Available for new opportunities
              </p>
            </div>
          </motion.div>

          {/* ── Right: form ────────────────── */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Project inquiry..."
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {error && <p className="text-red-400 text-sm px-1">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-medium text-sm hover:opacity-90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
