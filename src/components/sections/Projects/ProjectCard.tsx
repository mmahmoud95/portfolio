"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { fadeInUp, viewport } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-[var(--color-card)] border border-[var(--color-card-border)] hover:border-[var(--color-card-border-hover)] hover:shadow-[0_0_40px_rgba(139,92,246,0.12)] transition-all duration-400"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[var(--color-bg-secondary)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,17,34,0.9)] via-[rgba(17,17,34,0.2)] to-transparent" />

        {/* Links overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[rgba(8,8,16,0.9)] border border-[rgba(255,255,255,0.1)] text-[#f8fafc] text-sm font-medium hover:border-violet-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub size={15} />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Title + links (mobile) */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-[var(--color-text)] font-display">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[rgba(139,92,246,0.08)] transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-violet-500 hover:bg-[rgba(139,92,246,0.1)] transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-1.5">
          {project.features.slice(0, 3).map((feat) => (
            <li
              key={feat}
              className="flex items-start gap-2 text-xs text-[var(--color-text-muted)]"
            >
              <Check
                size={12}
                className="text-violet-400 mt-0.5 flex-shrink-0"
              />
              {feat}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
