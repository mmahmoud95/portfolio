'use client';
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectCard = ({
    title,
    description,
    imgSrc,
    tags,
    source_code,
    live_demo,
}) => {
    return (
        <motion.div
            className="border-t-stone-950 border-t-[5px] border-solid rounded-2xl overflow-hidden shadow-md sm:shadow-2xl w-full sm:w-[275px] md:w-[325px] lg:w-[375px] poppins flex flex-col"
            initial={{ opacity: 0, y: 50 }} // Initial state: invisible and moved down
            whileInView={{ opacity: 1, y: 0 }} // Animates when in view: fully visible and reset to normal position
            viewport={{ once: true, amount: 0.3 }} // Triggers animation once when 30% of the card is in view
            transition={{ duration: 0.6 }} // Animation duration
        >
            {/* قسم الصورة */}
            <div className="relative w-full h-48">
                <Image fill className="object-cover" src={imgSrc} alt={title} />
            </div>

            {/* قسم المحتوى */}
            <div className="flex-grow p-4 sm:px-7 sm:pt-5 sm:pb-3 flex flex-col justify-between">
                <div>
                    <h2 className="text-lg sm:text-2xl font-medium">{title}</h2>
                    <p className="sm:text-base mt-1 dark-content line-clamp-5 mb-3 text-sm">
                        {description}
                    </p>
                </div>
                <div>
                    <h3 className="solid-heading font-light">
                        <span className="solid-heading font-normal sm:text-lg">
                            Tech stack :{' '}
                        </span>
                        <span>
                            {tags?.map((tag, index) => (
                                <span key={index} className="text-sm">
                                    {tag}
                                    {index < tags.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                        </span>
                    </h3>
                    <div className="flex items-center sm:gap-5 gap-2 mt-5 mb-3 text-xs sm:text-base">
                        <p className="flex items-center gap-2">
                            <FaLink />{' '}
                            <a
                                className="underline"
                                target="_blank"
                                href={live_demo}
                            >
                                Live Preview
                            </a>
                        </p>
                        <p className="flex items-center gap-2">
                            <FaGithub />{' '}
                            <Link
                                href={source_code}
                                target="_blank"
                                className="underline"
                            >
                                View Code
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
