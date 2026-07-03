'use client';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({
    title,
    description,
    imgSrc,
    tags,
    source_code,
    live_demo,
}) => {
    return (
        <div className="card group flex h-full flex-col overflow-hidden transition-colors hover:border-accent">
            {/* Screenshot */}
            <div className="relative h-44 w-full overflow-hidden border-b border-line sm:h-48">
                <Image
                    src={imgSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-content">
                        {title}
                    </h3>
                    <span className="font-mono text-xs text-muted">
                        {'~/projects'}
                    </span>
                </div>

                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="chip">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-line pt-4">
                    <a
                        href={live_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-sm text-content transition-colors hover:text-accent"
                    >
                        <FiExternalLink size={15} /> Live Preview
                    </a>
                    <a
                        href={source_code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
                    >
                        <FiGithub size={15} /> View Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
