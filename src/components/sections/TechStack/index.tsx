"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillGroups } from "@/lib/data/skills";
import { SkillGroup } from "./SkillGroup";

export function TechStack() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-16">
          <SectionHeader
            tag="Tech Stack"
            title="Technical"
            titleHighlight="Expertise"
            description="A curated set of technologies I use to build scalable, modern applications — from UI to API to deployment."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.category} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
