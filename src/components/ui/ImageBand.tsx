import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/ui/Container";
import { SundaDivider } from "@/components/sunda/SundaDivider";

type ImageBandProps = {
  image: StaticImageData;
  alt: string;
  eyebrow?: string;
  /** Large editorial statement (site copy, not a resident quote). */
  statement?: string;
  caption?: string;
};

/**
 * Full-bleed photographic break with a deep pine overlay and an optional
 * editorial statement. Used to give long pages a visual breath (design-system
 * §71-72).
 */
export function ImageBand({ image, alt, eyebrow, statement, caption }: ImageBandProps) {
  return (
    <section className="relative isolate">
      <div className="relative max-h-[560px] min-h-[340px] w-full overflow-hidden md:h-[52vh]">
        <Image
          src={image}
          alt={alt}
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#132720]/85 via-[#132720]/45 to-[#132720]/20"
        />
        {(eyebrow || statement) && (
          <Container className="relative flex h-full min-h-[340px] flex-col items-center justify-center py-16 text-center">
            {eyebrow && (
              <span className="type-eyebrow text-decorative">{eyebrow}</span>
            )}
            {statement && (
              <p className="mt-4 max-w-2xl font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                {statement}
              </p>
            )}
            <SundaDivider className="mt-7" />
          </Container>
        )}
      </div>
      {caption && (
        <p className="bg-surface px-5 py-2 text-center text-xs text-secondary">
          {caption}
        </p>
      )}
    </section>
  );
}
