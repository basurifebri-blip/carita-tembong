import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import empingImage from "../../../public/images/galeri/emping-pemipihan.jpg";

/** Local products, story-first (CLAUDE.md §25): an image-led invitation. */
export function FeaturedProducts() {
  return (
    <section className="section">
      <Container>
        <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <figure className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-soft shadow-card">
              <Image
                src={empingImage}
                alt="Warga memipihkan emping melinjo di atas batu di dekat tungku kayu di Desa Tembong."
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
              />
            </div>
          </figure>

          <div className="order-1 lg:order-2">
            <span className="type-eyebrow">Dari Tembong</span>
            <h2 className="type-h2 mt-4 text-brand">
              Produk yang Tumbuh dari Tangan Warga
            </h2>
            <p className="type-lead mt-5 text-secondary">
              Emping melinjo dan opak menjadi produk yang paling dikenal, lahir
              dari kebun sendiri dan dikerjakan dengan sabar oleh sekitar seratus
              usaha pengrajin Desa Tembong.
            </p>
            <div className="mt-7">
              <Button href="/potensi-desa" withArrow>
                Lihat Potensi Desa
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
