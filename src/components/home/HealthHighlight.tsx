import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import kaderImage from "../../../public/images/sehat/kader-posyandu.jpg";

/**
 * Tembong Sehat highlight. Health claims require verification (CLAUDE.md §32)
 * — we describe activities that are documented (Posyandu, kader, bidan desa,
 * KAJEDAK) and never assert recognition or impact figures.
 */
export function HealthHighlight() {
  return (
    <section className="section bg-surface-sage">
      <Container>
        <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <figure className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-soft shadow-card">
              <Image
                src={kaderImage}
                alt="Kader kesehatan Desa Tembong di depan gedung Posyandu Kenanga."
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-secondary">
              Kader kesehatan yang menggerakkan Posyandu di tiap kampung.
            </figcaption>
          </figure>

          <div className="order-1 lg:order-2">
            <span className="type-eyebrow">Tembong Sehat</span>
            <h2 className="type-h2 mt-4 text-brand">
              Menjaga Kesehatan Bersama Masyarakat
            </h2>
            <p className="type-lead mt-5 text-secondary">
              Setiap bulan, Posyandu digelar bergiliran di empat RW: Salabarang,
              Galaya, Kadu Kokosan, dan Tembol. Kader yang aktif bersama bidan
              desa mendampingi pemeriksaan balita, ibu hamil, dan lansia.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              {[
                { value: "4 RW", label: "Posyandu bulanan" },
                { value: "Puskesmas", label: "Carita, di Tembong" },
                { value: "KAJEDAK", label: "Jemput dahak" },
              ].map((fact) => (
                <li key={fact.label}>
                  <p className="font-display text-xl font-semibold text-brand">
                    {fact.value}
                  </p>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-secondary">
                    {fact.label}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/tembong-sehat" withArrow>
                Tembong Sehat
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
