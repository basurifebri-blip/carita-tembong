import { cn } from "@/lib/utils";

type SundaDividerProps = {
  className?: string;
  align?: "left" | "center";
};

/**
 * A slender cultural divider: two Bamboo-Gold rules flanking a small woven
 * diamond motif (design-system §41). Purely decorative, so it is hidden from
 * assistive technology.
 *
 * NOTE: the central motif is a simple geometric abstraction, not a claim to a
 * specific traditional Sundanese pattern. Replace with a verified ornament
 * asset when available.
 */
export function SundaDivider({ className, align = "center" }: SundaDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center gap-3 text-decorative",
        align === "center" ? "justify-center" : "justify-start",
        className,
      )}
    >
      <span className="h-px w-12 bg-current opacity-60 sm:w-16" />
      <svg
        width="26"
        height="12"
        viewBox="0 0 26 12"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M6 6 9 3l3 3-3 3-3-3Zm11 0 3-3 3 3-3 3-3-3Z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <circle cx="13" cy="6" r="1.4" fill="currentColor" />
      </svg>
      <span className="h-px w-12 bg-current opacity-60 sm:w-16" />
    </div>
  );
}
