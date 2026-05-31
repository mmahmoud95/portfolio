"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const quickLinks = ["About", "Experience", "Projects", "Skills", "Contact"];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/mmahmoud95",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mustafa-mahmoud-za",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:mustafa.mahmoud.za@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[rgba(8,8,16,0.8)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold font-display bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Mustafa Mahmoud
            </span>
            <p className="text-slate-500 text-sm leading-relaxed">
              Frontend Developer building scalable, modern web applications with
              React, Next.js, and TypeScript.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors group"
                >
                  <Icon
                    size={15}
                    className="group-hover:text-violet-400 transition-colors"
                  />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.04)] mt-10 pt-8 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} Mustafa Mahmoud. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
