'use client';
import React from 'react';
import Image from 'next/image';
import profile from '../../../public/profile-img.webp';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBriefcase, FaFileDownload, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
    return (
        <motion.div
            className="md:px-20 px-6 py-24 flex flex-col lg:flex-row lg:text-left items-center justify-between xl:gap-40 gap-4 sm:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div className="order-1 lg:-order-1">
                {/* Text Section */}
                <motion.h1
                    className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold solid-heading mb-8 md:mb-0 text-center lg:text-left "
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    Hello 👋,
                    <span className="lg:block inline">
                        My name is <br className="lg:hidden" />
                    </span>
                    <span className="bg-clip-text text-gradient-to-r from-[#13b0f5] to-[#e70faa] bg-gradient-to-r text-transparent ,lg:block inline">
                        Mustafa Mahmoud
                    </span>
                    <span className="block">
                        Full Stack Web Developer.
                        <br />
                        <span className="font-light md:text-xl mt-2 inline-block text-base">
                            I build high-performance web applications that meet
                            user needs and business goals.
                        </span>
                    </span>
                </motion.h1>
                {/* Buttons Section */}
                <motion.div
                    className="flex sm:flex-row gap-6 mt-8 md:mt-6 text-xs sm:text-lg justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1 }}
                >
                    {/* Hire Me Button */}
                    <Link
                        href="https://mostaql.com/u/mustafa_za"
                        target="_blank"
                        passHref
                    >
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold md:px-3 sm:py-3 py-2 px-4 rounded-2xl hover:opacity-80 transition duration-300 shadow-lg">
                            Hire Me{' '}
                            <FaBriefcase className="inline-block ml-2 -mt-1" />
                        </button>
                    </Link>

                    {/* Contact Me Button */}
                    <Link
                        href="https://api.whatsapp.com/send?phone=201152910495"
                        target="_blank"
                    >
                        <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold md:px-3 sm:py-3 py-2 px-4 rounded-2xl hover:opacity-90 transition duration-300 shadow-lg">
                            DM on WhatsApp{' '}
                            <FaWhatsapp className="inline-block ml-2 -mt-1" />
                        </button>
                    </Link>

                    {/* Download CV Button */}
                    <Link
                        href="/"
                        download={true}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold  md:px-3 sm:py-3 py-2 px-4 rounded-2xl hover:opacity-90 transition duration-300 shadow-lg">
                            Download CV{' '}
                            <FaFileDownload className="inline-block ml-2 -mt-1" />
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Profile Image Section */}
            <motion.div
                className="border-gradient-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}

            >
                <motion.div className="profile-image" initial={{ filter: "grayscale(100%)" }} transition={{ delay: 0.5, duration: 1 }}
                    whileHover={{ filter: "grayscale(0%)" }}
                >
                    <Image src={profile} alt="Profile" className="profile-image" /></motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Hero;
