import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "violet" | "cyan" | "green" | "outline";
  className?: string;
}

const variants = {
  default:
    "bg-[rgba(139,92,246,0.12)] text-violet-500 border border-[rgba(139,92,246,0.2)]",
  violet:
    "bg-[rgba(139,92,246,0.15)] text-violet-500 border border-[rgba(139,92,246,0.25)]",
  cyan: "bg-[rgba(34,211,238,0.12)] text-cyan-600 border border-[rgba(34,211,238,0.2)]",
  green:
    "bg-[rgba(34,197,94,0.1)] text-green-600 border border-[rgba(34,197,94,0.2)]",
  outline:
    "border border-[var(--color-card-border)] text-[var(--color-text-muted)]",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
