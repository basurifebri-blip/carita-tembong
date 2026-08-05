"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { primaryCta } from "@/config/navigation";
import { siteConfig } from "@/config/site";

const MENU_TRIGGER_ID = "mobile-menu-trigger";

/**
 * Site header: editorial, warm, and lightly ornamented, not a government
 * dashboard. Two tiers on desktop so all seven nav items have room to breathe;
 * a single row with a menu button on smaller screens. Decorative touches: a
 * slim Bamboo-Gold ribbon on top, a faint woven texture, and a soft gold rule
 * between the tiers.
 */
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40">
      <div className="relative bg-surface/92 backdrop-blur-md shadow-[0_8px_30px_-22px_rgba(45,42,38,0.4)]">
        {/* Tier 1: logo + CTA + menu toggle */}
        <Container className="relative z-10 flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
          <Link
            href="/"
            className="shrink-0 text-brand"
            aria-label={`Beranda ${siteConfig.name}`}
          >
            <Logo descriptor="Desa Tembong · Carita" />
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button href={primaryCta.href} size="md" withArrow>
                {primaryCta.label}
              </Button>
            </div>

            <button
              id={MENU_TRIGGER_ID}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Buka menu navigasi"
              aria-expanded={menuOpen}
              aria-haspopup="dialog"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-primary transition-colors hover:bg-surface-muted lg:hidden"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </Container>

        {/* Tier 2: full-width desktop navigation */}
        <div className="relative z-10 hidden lg:block">
          <Container>
            <Navbar />
          </Container>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        triggerId={MENU_TRIGGER_ID}
      />
    </header>
  );
}
