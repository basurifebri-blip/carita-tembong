import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SundaDivider } from "@/components/sunda/SundaDivider";
import curugImage from "../../../public/images/wisata/aliran-sungai.jpg";

/**
 * Editorial introduction (IA §8, CLAUDE.md §42) establishing that Tembong is
 * more than an administrative area — it is a place known through its stories.
 * A two-column layout pairs a real photograph of the village's nature
 * (Curug Cibanteri) with the opening statement.
 */
export function VillageIntroduction() {
  return (
    <section className="section">
      <Container>
        <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Photograph */}
          <figure className="order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-soft shadow-card">
              <Image
                src={curugImage}
                alt="Curug Cibanteri di Desa Tembong, aliran air jernih di antara bebatuan dan pepohonan hijau."
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-secondary">
              Curug Cibanteri, salah satu potensi wisata alam Desa Tembong.
            </figcaption>
          </figure>

          {/* Statement */}
          <div className="order-2">
            <span className="type-eyebrow">Carita ti Tembong</span>
            <h2 className="type-h2 mt-4 text-brand">
              Mengenal Desa dari Cerita yang Hidup di Dalamnya
            </h2>

            <SundaDivider align="left" className="my-7" />

            <p className="type-lead text-secondary">
              CARITA TEMBONG mengajak pengunjung mengenal desa melalui alam,
              masyarakat, budaya, produk lokal, dan kehidupan yang terus tumbuh
              di dalamnya.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
