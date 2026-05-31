export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  challenges: string;
  github: string;
  demo: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: "Full-time" | "Part-time" | "Internship" | "Contract" | "Freelance";
  location: string;
  description: string[];
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export interface SkillGroup {
  category: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface Highlight {
  id: string;
  icon: string;
  metric: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string | null;
  quote: string;
  platform?: string;
  reviewUrl?: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}
