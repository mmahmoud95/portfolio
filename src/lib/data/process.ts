import type { ProcessStep } from "@/lib/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Requirements Analysis",
    description:
      "Deep dive into business requirements, user needs, and technical constraints before writing a single line of code.",
    icon: "FileSearch",
  },
  {
    step: 2,
    title: "UI Development",
    description:
      "Build pixel-perfect, responsive interfaces with clean component architecture and accessibility in mind.",
    icon: "Monitor",
  },
  {
    step: 3,
    title: "API Integration",
    description:
      "Connect frontend to backend services with typed API clients, proper error handling, and optimistic updates.",
    icon: "Plug",
  },
  {
    step: 4,
    title: "Testing & QA",
    description:
      "Write tests, conduct manual QA across devices and browsers, and validate all business logic edge cases.",
    icon: "TestTube2",
  },
  {
    step: 5,
    title: "Optimization",
    description:
      "Optimize performance with code splitting, lazy loading, caching strategies, and Lighthouse audits.",
    icon: "Gauge",
  },
  {
    step: 6,
    title: "Deployment",
    description:
      "Deploy with CI/CD pipelines, monitor production performance, and iterate based on real-world feedback.",
    icon: "Rocket",
  },
];
