import Link from "next/link";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

export type Crumb = {
  label: string;
  /** Omit href on the current (last) page. */
  href?: string;
};

type BreadcrumbProps = {
  items: Crumb[];
  className?: string;
  /** "onDark" recolours the trail for use over a photographic hero. */
  variant?: "default" | "onDark";
};

/**
 * Accessible breadcrumb trail for detail pages (IA §58). Not used on the
 * homepage, but part of the shared UI foundation so detail pages stay
 * consistent later.
 */
export function Breadcrumb({ items, className, variant = "default" }: BreadcrumbProps) {
  const onDark = variant === "onDark";

  return (
    <nav aria-label="Breadcrumb" className={cn("font-sans text-sm", className)}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-x-2 gap-y-1",
          onDark ? "text-white/70" : "text-secondary",
        )}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <Fragment key={`${item.label}-${index}`}>
              <li>
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "underline-offset-4 hover:underline",
                      onDark
                        ? "text-white hover:text-white"
                        : "text-interactive hover:text-interactive-strong",
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={onDark ? "text-white/85" : "text-secondary"}
                  >
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="select-none text-decorative">
                  /
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
