"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Logo } from "@/components/ui/Logo";
import { mainNav, primaryCta } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn, isActivePath } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  /** id of the button that opens this menu, for aria wiring. */
  triggerId: string;
};

/**
 * Full-screen mobile navigation. Keyboard accessible: Escape closes it, focus
 * is moved in on open and trapped within the panel while it is open, and body
 * scroll is locked.
 */
export function MobileMenu({ open, onClose, triggerId }: MobileMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={triggerId}
      className="fixed inset-0 z-50 flex flex-col bg-surface lg:hidden"
    >
      <div className="flex items-center justify-between border-b border-soft px-5 py-4">
        <span className="text-brand">
          <Logo />
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-primary transition-colors hover:bg-surface-muted"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <nav aria-label="Navigasi utama" className="flex-1 overflow-y-auto px-5 py-6">
        <ul className="flex flex-col gap-1">
          {mainNav.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center rounded-[10px] px-3 py-3 font-display text-xl transition-colors",
                    active
                      ? "text-brand"
                      : "text-primary hover:bg-surface-muted",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mr-3 h-5 w-0.5 rounded-full bg-decorative transition-opacity",
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-soft px-5 py-6">
        <Link
          href={primaryCta.href}
          onClick={onClose}
          className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-interactive text-base font-semibold text-white shadow-card transition-colors hover:bg-interactive-strong"
        >
          {primaryCta.label}
          <span aria-hidden="true">→</span>
        </Link>
        <p className="mt-4 text-sm text-secondary">{siteConfig.location}</p>
      </div>
    </div>
  );
}
