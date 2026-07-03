'use client';
import { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';
import { projects } from '../utils/projects';

const Projects = () => {
    const trackRef = useRef(null);
    const [active, setActive] = useState(0);

    const cardStep = () => {
        const track = trackRef.current;
        if (!track || !track.firstElementChild) return 0;
        const gap =
            parseFloat(getComputedStyle(track).columnGap) || 16;
        return track.firstElementChild.offsetWidth + gap;
    };

    const scrollByCard = (dir) => {
        const track = trackRef.current;
        if (!track) return;
        track.scrollBy({ left: dir * cardStep(), behavior: 'smooth' });
    };

    const scrollToIndex = (i) => {
        const track = trackRef.current;
        if (!track) return;
        track.scrollTo({ left: i * cardStep(), behavior: 'smooth' });
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const onScroll = () => {
            const step = cardStep();
            if (step) setActive(Math.round(track.scrollLeft / step));
        };
        track.addEventListener('scroll', onScroll, { passive: true });
        return () => track.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section
            id="projects"
            className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20"
        >
            <div className="flex items-end justify-between gap-4">
                <SectionHeading path="projects" comment="things I've built" />
                <div className="mb-10 flex shrink-0 gap-2 sm:mb-12">
                    <button
                        onClick={() => scrollByCard(-1)}
                        aria-label="Previous project"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                        <FiChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => scrollByCard(1)}
                        aria-label="Next project"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                        <FiChevronRight size={18} />
                    </button>
                </div>
            </div>

            <div
                ref={trackRef}
                className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1"
            >
                {projects.map((p) => (
                    <div
                        key={p.id}
                        className="w-full shrink-0 snap-start md:w-[calc(50%-8px)]"
                    >
                        <ProjectCard {...p} />
                    </div>
                ))}
            </div>

            {/* Dot indicators */}
            <div className="mt-7 flex justify-center gap-2">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToIndex(i)}
                        aria-label={`Go to project ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            i === active
                                ? 'w-6 bg-accent'
                                : 'w-2 bg-line hover:bg-muted'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
