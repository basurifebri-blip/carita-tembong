import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Inline highlight for a key term inside editorial prose. A soft gold tint that
 * draws the eye without shouting. Overrides the browser's default yellow
 * <mark> background and clones the box across line breaks.
 */
export function Mark({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <mark
      className={cn(
        "box-decoration-clone rounded-md bg-decorative/25 px-1.5 py-0.5 font-semibold text-brand",
        className,
      )}
    >
      {children}
    </mark>
  );
}
