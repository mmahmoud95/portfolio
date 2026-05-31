import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    description: "Building modern, performant UIs",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Query",
      "Framer Motion",
      "HTML5 / CSS3",
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    description: "Full-stack API & data layer",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "NextAuth",
      "Supabase",
      "SignalR",
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "Wrench",
    description: "Shipping with confidence",
    skills: [
      "Git",
      "GitHub",
      "Azure DevOps",
      "VS Code",
      "GitHub Copilot",
      "ChatGPT",
      "Postman",
      "Figma",
      "Vercel",
      "Netlify",
    ],
  },
];
