"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/navigation";
import { cn, isActivePath } from "@/lib/utils";

/**
 * Desktop primary navigation, centered across the full container width (tier 2
 * of the header). Active state uses Forest Green text with a Bamboo-Gold
 * underline (design-system §45); labels never wrap.
 */
export function Navbar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navigasi utama" className="flex justify-center">
      <ul className="flex items-center gap-0.5 xl:gap-2">
        {mainNav.map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative block whitespace-nowrap px-3.5 py-3 text-sm font-medium font-sans transition-colors",
                  active ? "text-brand" : "text-primary/70 hover:text-brand",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "pointer-events-none absolute inset-x-3.5 bottom-1.5 h-0.5 rounded-full bg-decorative transition-all duration-300",
                    active
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-70 group-hover:scale-x-100",
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
