'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const AI_TOOLS = ['Claude Code', 'GitHub Copilot'];

const About = () => {
    return (
        <section
            id="about"
            className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20"
        >
            <SectionHeading path="about" comment="a bit about me" />

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="card max-w-3xl p-6 sm:p-8"
            >
                <div className="space-y-4 text-[15px] leading-relaxed text-content sm:text-base">
                    <p>
                        I started out in Civil Engineering at Cairo University,
                        then made a deliberate shift into software development
                        through an intensive full-stack program at{' '}
                        <span className="font-medium text-accent">ITI</span>.
                        Today I specialize in React and Next.js, building
                        large-scale, real-time interfaces at{' '}
                        <span className="font-medium text-accent">
                            JanaLight&nbsp;Co.
                        </span>
                    </p>
                    <p className="text-muted">
                        I also lean on AI-powered development tools to accelerate
                        delivery and keep code quality high — pairing daily with
                        Claude Code and GitHub Copilot as part of my workflow.
                    </p>
                </div>

                <div className="mt-6 border-t border-line pt-5">
                    <p className="comment mb-3 text-xs">{'$ ai-workflow'}</p>
                    <div className="flex flex-wrap gap-2">
                        {AI_TOOLS.map((tool) => (
                            <span key={tool} className="chip">
                                <span className="prompt mr-1.5">◆</span>
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
