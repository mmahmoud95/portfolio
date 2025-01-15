'use client';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Navbar = () => {
    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark')
    }
    return (
        <motion.nav
            className="flex items-center justify-between py-2 px-6 lg:px-24 bg-white shadow-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            {/* Logo */}
            <motion.div
                className="flex flex-shrink-0 items-center justify-center text-[#26274b]"
                whileHover={{ scale: 1.1 }}
            >
                <Link
                    href="/"
                    className="text-4xl lg:text-6xl font-bold"
                    aria-label="Home"
                >
                    {'<MM />'}
                </Link>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
                className="lg:flex justify-center items-center gap-12 text-lg text-[#666]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {/* Social Media Links */}
                <div className="flex gap-4 lg:mt-0">
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link
                            href="https://www.linkedin.com/in/mustafa-mahmoud-za/"
                            className="text-xl hover:text-[#0077B5]"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link
                            href="https://github.com/mmahmoud95"
                            className="text-xl hover:text-gray-700"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link
                            href="https://api.whatsapp.com/send?phone=201152910495"
                            className="text-xl hover:text-[#128c7e]"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </Link>
                        {/* <button onClick={toggleTheme}>dark</button> */}
                    </motion.div>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
