import { cn } from "@/lib/utils";

type BambooPatternProps = {
  className?: string;
  /** Pattern opacity. Keep low — design-system §38 suggests 3–8%. */
  opacity?: number;
};

/**
 * A subtle, tone-on-tone woven ("anyaman"-inspired) texture rendered as an
 * inline SVG so it can tint with `currentColor` and never blocks a network
 * request. Meant as a faint background accent behind a section — not behind
 * long body text.
 *
 * IMPORTANT: this is a simple geometric abstraction generated in code, a
 * placeholder for a verified motif asset. It is decorative only and hidden
 * from assistive technology. Do not describe it as a specific traditional
 * pattern until an authentic asset is confirmed.
 */
export function BambooPattern({ className, opacity = 0.06 }: BambooPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity }}
    >
      <svg width="100%" height="100%" className="text-current">
        <defs>
          <pattern
            id="carita-anyaman"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <path
              d="M0 8h32M0 24h32"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M8 0v32M24 0v32"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#carita-anyaman)" />
      </svg>
    </div>
  );
}
