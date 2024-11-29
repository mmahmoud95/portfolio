import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 md:px-24 lg:px-64 poppins w-full text-center flex flex-col justify-between">
            <div className="px-4">
                <div className="flex md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold">Mustafa Mahmoud</h3>
                        <p className="text-gray-400">Full Stack Web Developer</p>
                    </div>

                    <div className="flex space-x-6">

                        <Link
                            href="https://api.whatsapp.com/send?phone=201152910495"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#128c7e] transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <FaWhatsapp size={24} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/mustafa-mahmoud-za/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#0077B5] transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin size={24} />
                        </Link>

                        <Link
                            href="mailto:mustafa.mahmoud.za@gmail.com"
                            className="hover:text-red-400 transition-colors"
                            aria-label="Email Contact"
                        >
                            <FaEnvelope size={24} />
                        </Link><Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub size={24} />
                        </Link>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-400 text-sm">
                    <p>
                        © {new Date().getFullYear()} Mustafa Mahmoud. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
