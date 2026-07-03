'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from './ThemeProvider';

const LINKS = [
    { label: 'about', href: '#about' },
    { label: 'experience', href: '#experience' },
    { label: 'stack', href: '#stack' },
    { label: 'projects', href: '#projects' },
    { label: 'contact', href: '#contact' },
];

const Navbar = () => {
    const { theme, toggle } = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <header className="nav-blur sticky top-0 z-50 border-b border-line backdrop-blur-md backdrop-saturate-150">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
                {/* Logo */}
                <Link
                    href="#top"
                    aria-label="Home"
                    className="font-mono text-lg font-bold tracking-tight text-content transition-colors hover:text-accent"
                >
                    {'<MM/>'}
                </Link>

                {/* Center path links */}
                <ul className="hidden items-center gap-7 md:flex">
                    {LINKS.map((l) => (
                        <li key={l.href}>
                            <Link
                                href={l.href}
                                className="group font-mono text-sm text-muted transition-colors hover:text-content"
                            >
                                <span className="prompt">~/</span>
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right controls */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <button
                        onClick={toggle}
                        aria-label="Toggle color theme"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                        {theme === 'dark' ? (
                            <FiSun size={16} />
                        ) : (
                            <FiMoon size={16} />
                        )}
                    </button>
                    <Link
                        href="https://www.linkedin.com/in/mustafa-mahmoud-za/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hidden h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent sm:flex"
                    >
                        <FaLinkedin size={16} />
                    </Link>
                    <Link
                        href="https://github.com/mmahmoud95"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hidden h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent sm:flex"
                    >
                        <FaGithub size={16} />
                    </Link>
                    <button
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
                    >
                        {open ? <FiX size={16} /> : <FiMenu size={16} />}
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown */}
            {open && (
                <ul className="flex flex-col gap-1 border-t border-line px-5 py-3 md:hidden">
                    {LINKS.map((l) => (
                        <li key={l.href}>
                            <Link
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-2 py-2 font-mono text-sm text-muted transition-colors hover:bg-accent-soft hover:text-content"
                            >
                                <span className="prompt">~/</span>
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
};

export default Navbar;
