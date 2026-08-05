import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";
import { BambooPattern } from "@/components/sunda/BambooPattern";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: Crumb[];
  /** Optional photographic background. */
  image?: StaticImageData;
  imageAlt?: string;
};

/**
 * Hero for internal pages (CLAUDE.md §12 "PageHero"). With an `image` it becomes
 * a photographic hero with a deep pine overlay, matching the homepage feel; without
 * one it falls back to a warm muted band with a faint woven texture.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  image,
  imageAlt,
}: PageHeroProps) {
  if (image) {
    return (
      <section className="relative isolate overflow-hidden">
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#122620]/92 via-[#122620]/62 to-[#122620]/38"
        />
        <Container className="relative z-10 flex min-h-[360px] flex-col justify-end py-14 md:min-h-[420px] md:py-20">
          {breadcrumb && (
            <Breadcrumb items={breadcrumb} variant="onDark" className="mb-6" />
          )}
          {eyebrow && <span className="type-eyebrow text-decorative">{eyebrow}</span>}
          <h1 className="type-h1 mt-3 max-w-3xl text-white">{title}</h1>
          {description && (
            <p className="type-lead mt-5 max-w-2xl text-white/85">{description}</p>
          )}
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-surface-muted">
      <BambooPattern className="text-decorative" opacity={0.05} />
      <Container className="relative py-12 md:py-20">
        {breadcrumb && <Breadcrumb items={breadcrumb} className="mb-6" />}
        {eyebrow && <span className="type-eyebrow">{eyebrow}</span>}
        <h1 className="type-h1 mt-3 max-w-3xl text-brand">{title}</h1>
        {description && (
          <p className="type-lead mt-5 max-w-2xl text-secondary">{description}</p>
        )}
      </Container>
    </section>
  );
}
