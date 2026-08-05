"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type BarItem = {
  label: string;
  value: number;
  /** Optional display string (defaults to the value). */
  display?: string;
};

type BarChartProps = {
  items: readonly BarItem[];
  className?: string;
  /** Bar colour token class, e.g. "bg-brand" (default) or "bg-cultural". */
  color?: string;
};

/**
 * Horizontal bars for real village figures. Each width is emitted as a `--bar-w`
 * CSS variable, so bars are drawn at their real value by default and never depend
 * on JavaScript to be visible. After mount in a real browser, a chart still below
 * the fold is collapsed to zero and grows into its value on scroll; a chart
 * already in view fills right away. Reduced-motion keeps bars full and static.
 */
export function BarChart({ items, className, color = "bg-brand" }: BarChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);
  const max = Math.max(...items.map((i) => i.value), 1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // stay full, no animation
    }

    const vh = window.innerHeight || document.documentElement.clientHeight;
    // Already in view (or above): fill immediately, no collapse.
    if (el.getBoundingClientRect().top < vh * 0.85) return;

    // Below the fold: collapse off-screen, then grow when scrolled into view.
    setCollapsed(true);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCollapsed(false);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("flex flex-col gap-4", className)}>
      {items.map((item, index) => (
        <div key={item.label} className="flex flex-col gap-1.5">
          <div className="flex items-baseline justify-between gap-3 text-sm">
            <span className="text-secondary">{item.label}</span>
            <span className="font-semibold text-primary tabular-nums">
              {item.display ?? item.value.toLocaleString("id-ID")}
            </span>
          </div>
          <div className="bar-track">
            <div
              className={cn("bar-fill", collapsed && "is-collapsed", color)}
              style={
                {
                  "--bar-w": `${(item.value / max) * 100}%`,
                  transitionDelay: `${index * 70}ms`,
                } as CSSProperties
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
