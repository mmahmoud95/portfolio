import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Form from './components/Form';

export default function Home() {
    return (
        <div className="w-full">
            <Hero />
            <About />
            <Experience />
            <TechStack />
            <Projects />
            <Form />
        </div>
    );
}
