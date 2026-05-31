"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-16">
          <SectionHeader
            tag="Portfolio"
            title="Featured"
            titleHighlight="Projects"
            description="A selection of projects that showcase my skills in building real-world, production-grade web applications."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
