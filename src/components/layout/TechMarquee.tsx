const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "SignalR",
  "MongoDB",
  "Supabase",
  "Redux Toolkit",
  "Express.js",
  "REST APIs",
  "JWT",
  "Azure DevOps",
  "Git",
  "PostgreSQL",
  "Framer Motion",
];

export function TechMarquee() {
  const doubled = [...TECH, ...TECH];

  return (
    <div
      aria-hidden="true"
      className="relative py-4 overflow-hidden border-y border-[var(--color-glass-border)] bg-[var(--color-bg-secondary)]"
      style={{ maxHeight: 80 }}
    >
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[var(--color-bg-secondary)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[var(--color-bg-secondary)] to-transparent" />

      <div className="flex w-max animate-marquee gap-10 items-center">
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] whitespace-nowrap select-none"
          >
            <span className="w-1 h-1 rounded-full bg-violet-400/50 inline-block" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
