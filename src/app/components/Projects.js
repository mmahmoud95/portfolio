import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../utils/projects';

const Projects = () => {
    return (
        <div className="py-24 px-6 flex flex-col items-center justify-center lg:px-24">
            <h2 className="solid-heading text-3xl sm:text-5xl font-bold poppins text-center mb-4">
                Latest Projects{' '}
            </h2>
            <p className="dark-content mb-16 font-extralight text-2xl sm:text-3xl text-center">
                Things I’ve built so far
            </p>
            <ul className="gap-4 sm:gap-12 items-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => (
                    <li key={project.id}>
                        <ProjectCard {...project} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
