import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
            <div className="card max-w-md p-8">
                <p className="comment mb-3 text-sm">{'$ cd /page'}</p>
                <h2 className="font-display text-3xl font-bold text-content">
                    404 — Not Found
                    <span className="cursor">▋</span>
                </h2>
                <p className="mt-3 text-[15px] text-muted">
                    The page you are looking for does not exist.
                </p>
                <Link
                    href="/"
                    className="mt-6 inline-block rounded-lg border border-line px-5 py-2.5 font-mono text-sm text-content transition-colors hover:border-accent hover:text-accent"
                >
                    {'← return home'}
                </Link>
            </div>
        </div>
    );
}
