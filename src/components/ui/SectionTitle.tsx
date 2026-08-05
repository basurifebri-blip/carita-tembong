import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  /** Small uppercase cultural label above the heading. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Heading level — sections use h2, sub-sections h3. Defaults to h2. */
  as?: "h2" | "h3";
  className?: string;
};

/**
 * The standard section header pattern (design-system §49):
 * Eyebrow → Heading → short supporting copy.
 */
export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionTitleProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        centered && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <span className="type-eyebrow">{eyebrow}</span>}
      <Heading className={cn(Heading === "h2" ? "type-h2" : "type-h3", "max-w-2xl")}>
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "type-lead text-secondary max-w-2xl",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
