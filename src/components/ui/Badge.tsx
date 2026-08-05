import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "cultural" | "brand" | "neutral";

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
};

/**
 * Small muted label (design-system §59). Backgrounds stay soft — no saturated
 * pills, no marketplace-style discount/rating badges.
 */
const toneClass: Record<BadgeTone, string> = {
  cultural: "bg-cultural/[0.12] text-cultural",
  brand: "bg-brand/[0.12] text-brand",
  neutral: "bg-surface-muted text-secondary",
};

export function Badge({ children, tone = "cultural", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide font-sans",
        toneClass[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
