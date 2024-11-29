import Image from "next/image";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Form from "./components/Form";
import Bar from "./components/Bar";
import Testimonials from "./components/Testimonials";
import { Suspense } from "react";

export default function Home() {
  const hr = <div className=""></div>
  return (
    <div className="flex items-center flex-col">
      <Suspense fallback={<span className="loader">Loading...</span>}>
        <Hero />
        <Bar />
        <TechStack />      <Bar />
        <Projects /><Bar />
        {/* <Testimonials />    <Bar /> */}
        <Form />
      </Suspense>

    </div>
  );
}
