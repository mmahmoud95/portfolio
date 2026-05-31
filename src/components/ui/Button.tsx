import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const variants = {
  primary:
    "bg-gradient-to-r from-violet-500 to-cyan-400 text-white hover:opacity-90 shadow-[0_0_20px_rgba(139,92,246,0.3)]",
  secondary:
    "bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.3)] text-violet-300 hover:border-violet-500 hover:bg-[rgba(139,92,246,0.18)]",
  ghost:
    "text-slate-400 hover:text-slate-200 hover:bg-[rgba(255,255,255,0.05)]",
  outline:
    "border border-[rgba(139,92,246,0.4)] text-slate-300 hover:border-violet-400 hover:text-violet-300 hover:bg-[rgba(139,92,246,0.08)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
