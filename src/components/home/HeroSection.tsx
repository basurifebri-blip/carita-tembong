import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import heroImage from "../../../public/images/hero/tembong-lanskap.jpg";

/**
 * Homepage hero (design-system §48, CLAUDE.md §44). One strong image of the
 * village landscape, a deep pine-green gradient for text legibility, and a
 * clear editorial hierarchy: eyebrow → headline → supporting copy → CTAs.
 *
 * The photo is original documentation from Desa Tembong — coconut groves and
 * saung under an open sky. Swap `heroImage` when a final, editor-approved hero
 * frame is chosen.
 */
export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[560px] items-end overflow-hidden md:min-h-[80vh] md:max-h-[860px]">
      {/* Background photograph */}
      <Image
        src={heroImage}
        alt="Lanskap Desa Tembong: kebun kelapa, saung bambu, dan hamparan ladang di bawah langit cerah."
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Deep pine-green overlay — stronger toward the bottom-left where text sits */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-tr from-[#132720]/90 via-[#132720]/55 to-[#132720]/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#132720]/70 to-transparent"
      />

      {/* Content */}
      <Container className="relative z-10 pb-14 pt-28 md:pb-24 md:pt-40">
        <div className="max-w-2xl">
          <span className="type-eyebrow text-decorative">
            Wilujeng Sumping di Tembong
          </span>

          <h1 className="type-display mt-5 text-white">
            Setiap Sudut{" "}
            <br className="hidden sm:block" />
            Punya Cerita
          </h1>

          <p className="type-lead mt-6 max-w-xl text-white/85">
            Kenali alam, budaya, kehidupan masyarakat, dan hasil karya yang
            tumbuh dari Desa Tembong.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/jelajahi-tembong" size="lg" withArrow>
              Jelajahi Tembong
            </Button>
            <Button
              href="/kenali-tembong"
              size="lg"
              variant="secondary"
              className="border-white/50 bg-white/5 text-white hover:border-white hover:bg-white/10"
            >
              Kenali Desa
            </Button>
          </div>

          {/* Quick facts (verified from the village profile) */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {[
              { value: "76 mdpl", label: "Dataran tinggi Carita" },
              { value: "1.825 jiwa", label: "Penduduk desa" },
              { value: "3 titik", label: "Potensi wisata alam" },
            ].map((fact) => (
              <div key={fact.label}>
                <p className="font-display text-2xl font-semibold text-white">
                  {fact.value}
                </p>
                <p className="mt-0.5 text-xs uppercase tracking-wider text-white/70">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
