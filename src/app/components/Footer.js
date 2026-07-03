import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const SOCIALS = [
    {
        icon: FaLinkedin,
        href: 'https://www.linkedin.com/in/mustafa-mahmoud-za/',
        label: 'LinkedIn',
    },
    {
        icon: FaGithub,
        href: 'https://github.com/mmahmoud95',
        label: 'GitHub',
    },
    {
        icon: FaWhatsapp,
        href: 'https://api.whatsapp.com/send?phone=201152910495',
        label: 'WhatsApp',
    },
    {
        icon: FaEnvelope,
        href: 'mailto:mustafa.mahmoud.za@gmail.com',
        label: 'Email',
    },
];

const Footer = () => {
    return (
        <footer className="border-t border-line bg-bg">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-8 sm:flex-row sm:justify-between sm:px-8">
                <div className="text-center sm:text-left">
                    <p className="font-mono text-sm text-content">
                        © 2025 Mustafa Mahmoud —{' '}
                        <span className="text-muted">Front-end Developer</span>
                    </p>
                    <p className="comment mt-1 text-xs">
                        {'// built with React, Next.js & Tailwind'}
                    </p>
                </div>

                <div className="flex gap-2">
                    {SOCIALS.map((s) => (
                        <Link
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                        >
                            <s.icon size={16} />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
