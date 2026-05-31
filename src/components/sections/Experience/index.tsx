"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiences } from "@/lib/data/experience";
import { TimelineItem } from "./TimelineItem";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-16">
          <SectionHeader
            tag="Career"
            title="Professional"
            titleHighlight="Experience"
            description="Real-world work building enterprise systems, mentoring developers, and delivering production-ready applications."
          />
        </div>

        <div className="flex flex-col">
          {experiences.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
