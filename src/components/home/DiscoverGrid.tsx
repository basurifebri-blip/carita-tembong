import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

import lanskap from "../../../public/images/hero/tembong-lanskap.jpg";
import curug from "../../../public/images/hero/curug-cibanteri.jpg";
import pengajian from "../../../public/images/galeri/pengajian-kelompok.jpg";
import emping from "../../../public/images/galeri/emping-tungku.jpg";
import posyandu from "../../../public/images/sehat/posyandu-edukasi.jpg";
import saung from "../../../public/images/village/saung-tembong.jpg";

const doors: {
  title: string;
  href: string;
  body: string;
  image: StaticImageData;
  alt: string;
}[] = [
  {
    title: "Kenali Tembong",
    href: "/kenali-tembong",
    body: "Profil, geografi, demografi, dan pemerintahan desa dari data resmi.",
    image: lanskap,
    alt: "Lanskap Desa Tembong dengan kebun kelapa dan saung.",
  },
  {
    title: "Jelajahi Tembong",
    href: "/jelajahi-tembong",
    body: "Curug, mata air, dan ruang alam desa beserta status kunjungannya.",
    image: curug,
    alt: "Curug Cibanteri dengan aliran air di antara bebatuan di Desa Tembong.",
  },
  {
    title: "Cerita & Budaya",
    href: "/cerita-budaya",
    body: "Kisah pengrajin, tradisi, pengajian, dan kebersamaan warga.",
    image: pengajian,
    alt: "Warga berkumpul dalam pengajian di masjid Desa Tembong.",
  },
  {
    title: "Potensi Desa",
    href: "/potensi-desa",
    body: "Emping melinjo, opak, dan karya para pengrajin Tembong.",
    image: emping,
    alt: "Pembuatan emping melinjo di atas tungku kayu di Desa Tembong.",
  },
  {
    title: "Tembong Sehat",
    href: "/tembong-sehat",
    body: "Posyandu, kader kesehatan, dan program Desa Siaga TB.",
    image: posyandu,
    alt: "Kegiatan edukasi kesehatan dan Posyandu di Desa Tembong.",
  },
  {
    title: "Galeri Tembong",
    href: "/galeri",
    body: "Wajah desa lewat foto alam, tempat, dan kehidupan warganya.",
    image: saung,
    alt: "Saung bambu di antara pohon kelapa di Desa Tembong.",
  },
];

/**
 * A discovery grid that opens a door into each part of the site, so the
 * homepage works as a guided gateway (IA §7). Each door leads with a photo.
 */
export function DiscoverGrid() {
  return (
    <section className="section bg-surface-sage">
      <Container>
        <SectionTitle
          eyebrow="Jelajahi"
          title="Temukan yang Anda Cari"
          description="Pintu-pintu untuk mengenal Desa Tembong lebih dekat, dari alam hingga kehidupan warganya."
          align="center"
        />

        <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doors.map((door) => (
            <Link
              key={door.href}
              href={door.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-soft bg-surface shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-decorative hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                <Image
                  src={door.image}
                  alt={door.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-brand">
                  {door.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary">
                  {door.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-interactive">
                  Buka
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
