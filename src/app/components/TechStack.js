'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const TIERS = [
    {
        label: '$ core',
        items: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Tailwind CSS',
            'Redux Toolkit',
        ],
    },
    {
        label: '$ tools',
        items: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Git', 'Figma'],
    },
];

const TechStack = () => {
    return (
        <section
            id="stack"
            className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20"
        >
            <SectionHeading path="stack" comment="tools I reach for" />

            <div className="space-y-8">
                {TIERS.map((tier, ti) => (
                    <div key={tier.label}>
                        <p className="comment mb-3 text-sm">{tier.label}</p>
                        <div className="flex flex-wrap gap-2.5">
                            {tier.items.map((item, i) => (
                                <motion.span
                                    key={item}
                                    className="chip !text-sm !px-3 !py-1.5"
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.6 }}
                                    transition={{
                                        duration: 0.35,
                                        delay: ti * 0.05 + i * 0.04,
                                    }}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
