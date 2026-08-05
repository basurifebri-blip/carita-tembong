import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

import pengajianImage from "../../../public/images/galeri/pengajian-kelompok.jpg";
import silatImage from "../../../public/images/galeri/pencak-silat.jpg";
import jumatBersihImage from "../../../public/images/galeri/kampung-bilik.jpg";

type Activity = {
  title: string;
  blurb: string;
  image: StaticImageData;
  alt: string;
  href: string;
};

/** Recurring village life — real, documented activities (CLAUDE.md §28, §42). */
const activities: Activity[] = [
  {
    title: "Pengajian Jumat",
    blurb:
      "Berpindah dari kampung ke kampung setiap Jumat, merawat silaturahmi antar warga empat kampung.",
    image: pengajianImage,
    alt: "Warga berkumpul dalam pengajian di masjid Desa Tembong.",
    href: "/cerita-budaya",
  },
  {
    title: "Pencak Silat & Debus",
    blurb:
      "Latihan Perguruan Cibinong pada malam Minggu dan malam Rabu, diiringi tabuhan kendang.",
    image: silatImage,
    alt: "Penampilan pencak silat diiringi kendang di Desa Tembong.",
    href: "/cerita-budaya",
  },
  {
    title: "Jumat Bersih",
    blurb:
      "Gotong royong warga menjaga kebersihan lingkungan kampung, tumbuh dari inisiatif warga sendiri.",
    image: jumatBersihImage,
    alt: "Sudut kampung berdinding bilik bambu di Desa Tembong.",
    href: "/cerita-budaya",
  },
];

export function VillageActivities() {
  return (
    <section className="section bg-surface-muted">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Kehidupan Desa"
            title="Kegiatan yang Menghidupkan Tembong"
            description="Dari pengajian yang berpindah kampung hingga latihan silat dan gotong royong, inilah denyut keseharian warga Tembong."
          />
          <div className="shrink-0">
            <Button href="/cerita-budaya" variant="secondary" withArrow>
              Cerita &amp; Budaya
            </Button>
          </div>
        </div>

        <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-soft bg-surface shadow-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {item.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-interactive">
                  Baca selengkapnya
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    ›
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
