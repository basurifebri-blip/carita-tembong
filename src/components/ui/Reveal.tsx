"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds, applied as the CSS transition-delay. */
  delay?: number;
};

/**
 * Scroll reveal. Content is visible by default (CSS), so it is NEVER hidden if
 * JavaScript or React hydration does not run — e.g. embedded viewers. Only after
 * the component mounts in a real browser does it hide sections that are still
 * below the fold, then fade + rise them into view on scroll. Sections already in
 * view are left untouched (no flash). Reduced-motion keeps everything static.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // stay visible, no animation
    }

    const vh = window.innerHeight || document.documentElement.clientHeight;
    // Already in view (or above): keep it visible — no hide, so no flash.
    if (el.getBoundingClientRect().top < vh * 0.85) return;

    // Below the fold: hide it off-screen, then reveal when scrolled into view.
    setHidden(true);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHidden(false);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", hidden && "is-hidden", className)}
      style={
        delay ? ({ transitionDelay: `${delay}ms` } as CSSProperties) : undefined
      }
    >
      {children}
    </div>
  );
}
