"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACKS } from '../utils/constants';

const TechStack = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center py-24 px-6 lg:px-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h2
                className="solid-heading text-3xl sm:text-5xl font-bold poppins text-center mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                My Tech Stack
            </motion.h2>

            <motion.p
                className="dark-content mb-16 text-2xl sm:text-3xl text-center font-extralight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
            >
                Technologies I specialize in and actively use in my projects.
            </motion.p>

            <motion.ul
                className="w-full justify-around gap-12 flex flex-wrap items-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                {TECH_STACKS.map((tech, index) => {
                    return (
                        <motion.li
                            className="flex flex-col items-center"
                            key={index}
                            animate={{
                                scale: [1, 1.1, 1], // Scale from 1 to 1.1 and back to 1
                                opacity: [1, 0.7, 1], // Fade in and out
                            }}
                            transition={{
                                duration: 2, // Animation duration
                                repeat: Infinity, // Infinite loop
                                repeatType: 'loop', // Repeats the animation in a loop
                                delay: index * 0.5, // Stagger each item slightly
                            }}
                        >
                            {/* SVG Icon with responsive size */}
                            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 max-w-full max-h-full overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center">
                                    {tech.svgImg}
                                </div>
                            </div>
                        </motion.li>
                    );
                })}
            </motion.ul>
        </motion.div>
    );
};

export default TechStack;
