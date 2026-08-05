import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/ui/Container";
import defaultImage from "../../../public/images/hero/curug-cibanteri.jpg";

type CalloutLink = { label: string; href: string };

type ExploreCalloutProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: CalloutLink;
  secondary?: CalloutLink;
  /** Background photograph; defaults to a Tembong landscape. */
  image?: StaticImageData;
  imageAlt?: string;
};

/**
 * A full-width invitation band set over a photograph of Desa Tembong, with a
 * deep pine overlay so the text stays legible (design-system §72, §48). It
 * breaks the rhythm of the cream editorial sections and carries a primary CTA.
 * Props default to the homepage invitation; any page can reuse or override them.
 */
export function ExploreCallout({
  eyebrow = "Jelajahi Tembong",
  title = "Setiap sudut desa menyimpan cerita untuk ditemukan",
  description = "Telusuri alam, budaya, dan kehidupan masyarakat Desa Tembong melalui peta dan cerita yang terus bertambah.",
  primary = { label: "Jelajahi Peta", href: "/peta" },
  secondary = { label: "Kenali Tembong", href: "/kenali-tembong" },
  image = defaultImage,
  imageAlt = "Alam Desa Tembong di kawasan Curug Cibanteri.",
}: ExploreCalloutProps) {
  return (
    <section className="relative isolate overflow-hidden text-surface">
      {/* Background photograph */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Deep pine overlay for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#132620]/78 via-[#132620]/80 to-[#0f1f19]/90"
      />

      <Container className="relative">
        <div className="section flex flex-col items-center gap-6 text-center">
          <span className="type-eyebrow text-decorative">{eyebrow}</span>

          <h2 className="type-h2 max-w-2xl text-white">{title}</h2>

          <p className="type-lead max-w-xl text-white/85">{description}</p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primary.href}
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-surface px-7 text-base font-semibold text-brand shadow-card transition-colors hover:bg-white"
            >
              {primary.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/50 px-7 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
