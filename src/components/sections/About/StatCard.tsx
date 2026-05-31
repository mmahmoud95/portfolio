"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { scaleIn, viewport } from "@/lib/animations";
import type { StatItem } from "@/lib/types";

interface StatCardProps {
  stat: StatItem;
  index: number;
}

function useCountUp(target: number, isVisible: boolean, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return count;
}

export function StatCard({ stat, index }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10);
  const hasPlus = stat.value.includes("+");
  const count = useCountUp(numericValue, visible);

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col gap-1 p-5 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] hover:border-[var(--color-card-border-hover)] hover:bg-[var(--color-card-hover)] transition-all duration-300 group"
    >
      <span className="text-3xl font-bold font-display bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent tabular-nums">
        {visible ? count : 0}
        {hasPlus && "+"}
        {stat.suffix}
      </span>
      <span className="text-[var(--color-text-muted)] text-sm font-medium">
        {stat.label}
      </span>
    </motion.div>
  );
}
