'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const ROLES = [
    {
        role: 'Front-end Developer',
        company: 'JanaLight Co.',
        date: 'MAY 2025 — PRESENT',
        current: true,
        points:
            'Building real-time SignalR modules that track employees, warehouses, and materials. Led code reviews and set architecture standards across the front-end.',
    },
    {
        role: 'Teaching Assistant',
        company: 'Hsoub Academy',
        date: 'JAN 2024 — APR 2025',
        points:
            'Mentored students across JavaScript, React, and Next.js. Resolved 950+ technical queries with clear, practical guidance.',
    },
    {
        role: 'Full Stack Intern',
        company: 'ITI',
        date: 'JUL 2023 — NOV 2023',
        points:
            'Completed intensive MEARN-stack training. Built full-stack apps with JWT authentication and REST APIs.',
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20"
        >
            <SectionHeading path="experience" comment="where I've worked" />

            <ol className="relative ml-1">
                {/* connecting line */}
                <span
                    className="absolute left-[7px] top-2 bottom-2 w-px bg-line"
                    aria-hidden="true"
                />

                {ROLES.map((r, i) => (
                    <motion.li
                        key={r.company}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="relative pl-8 pb-9 last:pb-0"
                    >
                        {/* dot */}
                        <span
                            className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                                r.current
                                    ? 'pulse-dot border-accent bg-accent'
                                    : 'border-muted bg-bg'
                            }`}
                            aria-hidden="true"
                        />

                        <div className="card p-5 sm:p-6">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="font-display text-lg font-semibold text-content">
                                        {r.role}
                                    </h3>
                                    <p className="font-mono text-sm text-accent">
                                        {r.company}
                                    </p>
                                </div>
                                <span className="font-mono text-xs text-muted sm:pt-1 sm:text-right">
                                    {r.date}
                                </span>
                            </div>
                            <p className="mt-3 text-[15px] leading-relaxed text-muted">
                                {r.points}
                            </p>
                        </div>
                    </motion.li>
                ))}
            </ol>
        </section>
    );
};

export default Experience;
