import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">
        <div className="text-7xl font-bold font-display bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          404
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-100 font-display mb-2">
            Page not found
          </h2>
          <p className="text-slate-500 text-sm">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
