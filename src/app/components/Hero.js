'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaFileDownload, FaBriefcase } from 'react-icons/fa';
import profile from '../../../public/profile-img.webp';

const CV = '/Mustafa_Mahmoud_CV.pdf';

// The terminal script: cmd lines are "typed", out lines appear as output.
const SCRIPT = [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: 'Mustafa Mahmoud — Front-end Developer' },
    { type: 'cmd', text: 'cat about.txt' },
    { type: 'out', text: 'I build high-performance, scalable web apps with' },
    { type: 'out', text: 'React & Next.js. Focused on real-time interfaces' },
    { type: 'out', text: 'and clean architecture.' },
    { type: 'cmd', text: 'echo $STATUS' },
    { type: 'out', text: 'Available for work', status: true },
    { type: 'cmd', text: './contact.sh' },
];

const Hero = () => {
    const [lines, setLines] = useState([]);
    const [done, setDone] = useState(false);
    const timer = useRef(null);

    useEffect(() => {
        const reduce =
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduce) {
            setLines(SCRIPT);
            setDone(true);
            return;
        }

        let li = 0; // line index
        let ci = 0; // char index (for cmd lines)
        const acc = [];

        const step = () => {
            if (li >= SCRIPT.length) {
                setDone(true);
                return;
            }
            const line = SCRIPT[li];

            if (line.type === 'cmd') {
                if (ci === 0) acc.push({ ...line, text: '' });
                ci += 1;
                acc[acc.length - 1] = { ...line, text: line.text.slice(0, ci) };
                setLines([...acc]);
                if (ci >= line.text.length) {
                    li += 1;
                    ci = 0;
                    timer.current = setTimeout(step, 240);
                } else {
                    timer.current = setTimeout(step, 34);
                }
            } else {
                acc.push(line);
                setLines([...acc]);
                li += 1;
                timer.current = setTimeout(step, 120);
            }
        };

        timer.current = setTimeout(step, 450);
        return () => clearTimeout(timer.current);
    }, []);

    const lastLine = lines[lines.length - 1];
    const cursorOnCmd = !done && lastLine?.type === 'cmd';

    return (
        <section
            id="top"
            className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-20"
        >
            {/* LEFT — terminal window */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-soft"
            >
                {/* Title bar */}
                <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                    <span className="flex-1 text-center font-mono text-xs text-muted">
                        mustafa@portfolio: ~
                    </span>
                </div>

                {/* Body */}
                <div className="min-h-[352px] px-5 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
                    {lines.map((line, i) => {
                        const isLast = i === lines.length - 1;
                        if (line.type === 'cmd') {
                            return (
                                <p key={i} className="text-content">
                                    <span className="prompt">$ </span>
                                    {line.text}
                                    {cursorOnCmd && isLast && (
                                        <span className="cursor">▋</span>
                                    )}
                                </p>
                            );
                        }
                        return (
                            <p key={i} className="pl-3 text-muted">
                                <span className="text-accent opacity-70">
                                    {'> '}
                                </span>
                                {line.status && (
                                    <span
                                        className="mr-1.5 inline-block h-2 w-2 rounded-full align-middle"
                                        style={{ background: 'var(--ok)' }}
                                    />
                                )}
                                <span
                                    className={
                                        line.status
                                            ? 'text-content'
                                            : undefined
                                    }
                                >
                                    {line.text}
                                </span>
                            </p>
                        );
                    })}

                    {/* Contact buttons appear after ./contact.sh is typed */}
                    <AnimatePresence>
                        {done && (
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mt-4 flex flex-wrap items-center gap-2.5"
                            >
                                <Link
                                    href="https://mostaql.com/u/mustafa_za"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                                >
                                    <FaBriefcase size={13} /> Hire Me
                                </Link>
                                <Link
                                    href="https://api.whatsapp.com/send?phone=201152910495"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-content transition-colors hover:border-accent hover:text-accent"
                                >
                                    <FaWhatsapp size={14} /> DM on WhatsApp
                                </Link>
                                <a
                                    href={CV}
                                    download
                                    className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-content transition-colors hover:border-accent hover:text-accent"
                                >
                                    <FaFileDownload size={13} /> Download CV
                                </a>
                                <span className="cursor self-center">▋</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* RIGHT — profile photo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center gap-4"
            >
                <div className="rounded-full p-[3px] ring-1 ring-accent">
                    <div className="overflow-hidden rounded-full border-2 border-bg">
                        <Image
                            src={profile}
                            alt="Mustafa Mahmoud"
                            priority
                            className="h-40 w-40 object-cover sm:h-52 sm:w-52 lg:h-60 lg:w-60"
                        />
                    </div>
                </div>
                <p className="comment text-xs">{'// based in Cairo, Egypt'}</p>
            </motion.div>
        </section>
    );
};

export default Hero;
