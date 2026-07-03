'use client';
import { motion } from 'framer-motion';

/**
 * Terminal-style section header, e.g.  ~/about
 * with an optional muted "// comment" subtitle underneath.
 */
const SectionHeading = ({ path, comment }) => {
    return (
        <motion.div
            className="mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="font-mono text-2xl sm:text-3xl font-medium tracking-tight">
                <span className="prompt">~/</span>
                <span className="text-content">{path}</span>
                <span className="cursor" aria-hidden="true">
                    ▋
                </span>
            </h2>
            {comment && (
                <p className="comment mt-2 text-sm">
                    {'// '}
                    {comment}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeading;
