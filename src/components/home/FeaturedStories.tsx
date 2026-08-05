import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SundaDivider } from "@/components/sunda/SundaDivider";
import saungImage from "../../../public/images/village/saung-tembong.jpg";

/** Editorial heart of the homepage: an image-led invitation into the stories. */
export function FeaturedStories() {
  return (
    <section className="section">
      <Container>
        <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="type-eyebrow">Carita ti Tembong</span>
            <h2 className="type-h2 mt-4 text-brand">
              Cerita dari Mereka yang Menjaga Tembong
            </h2>
            <SundaDivider align="left" className="my-6" />
            <p className="type-lead text-secondary">
              Di balik alam dan hasil karyanya, ada manusia. Kisah pengrajin,
              tradisi, pengajian, dan kebersamaan warga akan hadir di sini sebagai
              cerita utama desa.
            </p>
            <div className="mt-7">
              <Button href="/cerita-budaya" withArrow>
                Baca Cerita &amp; Budaya
              </Button>
            </div>
          </div>

          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-soft shadow-card">
              <Image
                src={saungImage}
                alt="Saung bambu tempat warga berkumpul di kawasan kebun Desa Tembong."
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
