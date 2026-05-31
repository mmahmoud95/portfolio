"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
