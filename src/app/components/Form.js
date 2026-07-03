'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useFetch } from '../hook/useFetch';
import SectionHeading from './SectionHeading';

const DETAILS = [
    {
        icon: FiMail,
        label: 'Email',
        value: 'mustafa.mahmoud.za@gmail.com',
        href: 'mailto:mustafa.mahmoud.za@gmail.com',
    },
    {
        icon: FiPhone,
        label: 'Phone',
        value: '+20 115 291 0495',
        href: 'https://api.whatsapp.com/send?phone=201152910495',
    },
    {
        icon: FiMapPin,
        label: 'Location',
        value: 'Cairo, Egypt',
        href: null,
    },
];

const inputClass =
    'w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm text-content placeholder:text-muted outline-none transition-colors focus:border-accent';

const Form = () => {
    const router = useRouter();
    const { loading, submitForm } = useFetch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await submitForm(event, router);
    };

    return (
        <section
            id="contact"
            className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20"
        >
            <SectionHeading path="contact" comment="open to opportunities" />

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                {/* Left: pitch + direct details */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="font-display text-2xl font-semibold leading-snug text-content sm:text-3xl">
                        Let&apos;s build something great together
                    </h3>
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                        Have a role, a project, or an idea in mind? Drop me a
                        line — I usually reply within a day.
                    </p>

                    <div className="mt-7 space-y-3">
                        {DETAILS.map((d) => {
                            const Row = (
                                <div className="flex items-center gap-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-accent">
                                        <d.icon size={16} />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="comment block text-[11px]">
                                            {d.label}
                                        </span>
                                        <span className="block truncate font-mono text-sm text-content">
                                            {d.value}
                                        </span>
                                    </span>
                                </div>
                            );
                            return d.href ? (
                                <a
                                    key={d.label}
                                    href={d.href}
                                    target={
                                        d.href.startsWith('http')
                                            ? '_blank'
                                            : undefined
                                    }
                                    rel="noopener noreferrer"
                                    className="block rounded-xl p-1 transition-colors hover:bg-accent-soft"
                                >
                                    {Row}
                                </a>
                            ) : (
                                <div key={d.label} className="p-1">
                                    {Row}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Right: form */}
                <motion.form
                    id="contactform"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="card p-5 sm:p-7"
                >
                    <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-1.5">
                            <span className="comment text-xs">name</span>
                            <input
                                disabled={loading}
                                required
                                name="name"
                                type="text"
                                placeholder="Your name"
                                className={inputClass}
                            />
                        </label>
                        <label className="flex flex-col gap-1.5">
                            <span className="comment text-xs">email</span>
                            <input
                                disabled={loading}
                                required
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className={inputClass}
                            />
                        </label>
                    </div>

                    <label className="mt-4 flex flex-col gap-1.5">
                        <span className="comment text-xs">subject</span>
                        <input
                            disabled={loading}
                            required
                            name="_subject"
                            type="text"
                            placeholder="What's this about?"
                            className={inputClass}
                        />
                    </label>

                    <label className="mt-4 flex flex-col gap-1.5">
                        <span className="comment text-xs">message</span>
                        <textarea
                            disabled={loading}
                            required
                            name="comment"
                            rows="5"
                            placeholder="Tell me a bit more..."
                            className={`${inputClass} resize-none`}
                        />
                    </label>

                    <input name="_formsubmit_id" type="text" className="hidden" />

                    <button
                        type="submit"
                        disabled={loading}
                        className={`mt-5 inline-flex w-full items-center justify-center rounded-lg bg-accent px-4 py-2.5 font-mono text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto ${
                            loading ? 'cursor-not-allowed opacity-70' : ''
                        }`}
                    >
                        {loading ? (
                            <span className="loader-container">
                                <span className="loader" />
                            </span>
                        ) : (
                            '$ send-message'
                        )}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Form;
