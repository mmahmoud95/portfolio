"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)]">
          <span className="text-2xl">⚠</span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-100 font-display mb-2">
            Something went wrong
          </h2>
          <p className="text-slate-500 text-sm">
            An unexpected error occurred. Please try again.
          </p>
        </div>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
