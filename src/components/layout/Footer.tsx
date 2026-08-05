import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/Logo";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

/**
 * Footer on deep Forest Green (design-system §47): a clean editorial layout with
 * a thin gold rule, a strong brand block, quick links, and an honest contact
 * note. Real contact details appear only once verified with the village (§56).
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep text-surface">
      {/* Thin gold rule instead of a heavy ornament */}
      <div
        aria-hidden="true"
        className="h-0.5 bg-gradient-to-r from-transparent via-decorative to-transparent opacity-60"
      />

      <Container>
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-lg bg-surface p-2 shadow-card">
                <LogoMark className="h-8 shrink-0" />
              </span>
              <p className="font-display text-2xl font-semibold">
                {siteConfig.name}
              </p>
            </div>
            <p className="mt-4 font-display text-lg text-decorative">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-surface/70">
              {siteConfig.location}.
            </p>
          </div>

          {/* Link groups */}
          {footerNav.map((group) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className="lg:col-span-2"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-decorative">
                {group.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-surface/85 transition-colors hover:text-decorative"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact: honest, never invented (§56) */}
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-decorative">
              Hubungi
            </h2>
            <p className="mt-4 text-sm text-surface/85">
              {siteConfig.institutional.village}
            </p>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-surface/55">
              Alamat, surel, dan media sosial resmi akan ditampilkan di sini
              setelah diverifikasi bersama pemerintah desa.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface/15 py-8">
          <div className="flex flex-col gap-3 text-sm text-surface/65 md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {siteConfig.name}
            </p>
            <p className="text-surface/55">
              {siteConfig.institutional.village} ·{" "}
              {siteConfig.institutional.district} ·{" "}
              {siteConfig.institutional.regency}
            </p>
          </div>
          <p className="mt-5 text-sm text-surface/70">
            Dibuat oleh{" "}
            <Link
              href="/tim"
              className="font-medium text-decorative underline-offset-4 transition-colors hover:text-surface hover:underline"
            >
              Tim Tempura
            </Link>{" "}
            · Kuliah Kerja Nyata Tematik (KKNT) IPB University
          </p>
        </div>
      </Container>
    </footer>
  );
}
