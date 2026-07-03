import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const ThankYouPage = () => {
    return (
        <AnimatedSection>
            <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
                <div className="card max-w-lg p-8 shadow-soft">
                    <p className="comment mb-4 text-sm">{'$ ./message-sent'}</p>
                    <h1 className="font-display text-3xl font-bold text-content sm:text-4xl">
                        Thank you!
                        <span className="cursor">▋</span>
                    </h1>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted">
                        Your message has been received. I&apos;ll get back to you
                        as soon as possible.
                    </p>
                    <p className="mt-3 text-sm text-muted">
                        Something urgent? Reach me directly on{' '}
                        <Link
                            href="https://api.whatsapp.com/send?phone=201152910495"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-accent hover:opacity-80"
                        >
                            WhatsApp <FaWhatsapp className="inline-block" />
                        </Link>
                    </p>
                    <Link
                        href="/"
                        className="mt-7 inline-block rounded-lg border border-line px-5 py-2.5 font-mono text-sm text-content transition-colors hover:border-accent hover:text-accent"
                    >
                        {'← back to home'}
                    </Link>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default ThankYouPage;
