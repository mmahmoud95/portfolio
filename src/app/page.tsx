import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { AIWorkflow } from "@/components/sections/AIWorkflow";
import { Contact } from "@/components/sections/Contact";
import { TechMarquee } from "@/components/layout/TechMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Projects />
      <AIWorkflow />
      <Contact />
    </>
  );
}
