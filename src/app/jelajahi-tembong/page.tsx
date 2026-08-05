import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { DestinationCard } from "@/components/tourism/DestinationCard";
import { ExploreCallout } from "@/components/home/ExploreCallout";
import { destinations, destinationSource } from "@/data/destinations";
import heroImage from "../../../public/images/wisata/aliran-sungai.jpg";

export const metadata: Metadata = {
  title: "Jelajahi Tembong",
  description:
    "Jelajahi potensi wisata alam Desa Tembong: Curug Cibanteri, Embung Desa, dan Bulakan Ciherang, lengkap dengan status kunjungannya.",
};

const aksesInfo = [
  "Sebagian lokasi berada di kawasan alam dan dapat memerlukan perjalanan melalui jalan desa serta jalur berjalan kaki.",
  "Kondisi jalur dan cuaca bisa berubah, terutama pada musim hujan. Gunakan alas kaki yang sesuai dan perhatikan keselamatan di sekitar air.",
  "Informasi titik lokasi, akses, dan keselamatan yang lebih rinci akan ditambahkan setelah diverifikasi bersama warga dan pemerintah desa.",
];

/**
 * Jelajahi Tembong (IA §17-22). Discovery of the village's natural places.
 * Every destination shows an honest visit status; none is promoted as a
 * finished attraction.
 */
export default function JelajahiTembongPage() {
  return (
    <>
      <PageHero
        eyebrow="Jelajahi Tembong"
        title="Alam yang Menunggu untuk Ditemukan"
        description="Di balik kebun dan aliran sungainya, Desa Tembong menyimpan tempat-tempat yang tenang dan alami. Inilah potensi wisata yang tercatat di desa."
        image={heroImage}
        imageAlt="Aliran air Curug Cibanteri di antara bebatuan dan pepohonan hijau Desa Tembong."
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Jelajahi Tembong" },
        ]}
      />

      <section className="section">
        <Container>
          <SectionTitle
            eyebrow="Destinasi"
            title="Tiga Ruang Alam Desa Tembong"
            description="Curug, embung, dan mata air yang menjadi bagian dari kehidupan dan potensi desa."
          />
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </Reveal>
          <p className="mt-8 max-w-3xl text-sm text-secondary">
            Status &ldquo;Potensial Dikembangkan&rdquo; berarti lokasi memiliki
            potensi wisata, namun belum tentu dilengkapi fasilitas atau akses yang
            siap untuk kunjungan umum. Sumber: {destinationSource}.
          </p>
        </Container>
      </section>

      <section className="section bg-surface-muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionTitle
              eyebrow="Sebelum Berkunjung"
              title="Akses dan Keselamatan"
              description="Tembong menyimpan keindahan yang masih apa adanya. Kenali dulu kondisinya sebelum melangkah lebih jauh."
            />
            <ul className="flex flex-col gap-4">
              {aksesInfo.map((point, index) => (
                <li key={index} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-decorative"
                  />
                  <span className="text-secondary">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ExploreCallout
        eyebrow="Terhubung"
        title="Setiap tempat punya cerita di baliknya"
        description="Temui masyarakat dan tradisi yang menjaga alam serta kehidupan Desa Tembong."
        primary={{ label: "Cerita & Budaya", href: "/cerita-budaya" }}
        secondary={{ label: "Jelajahi Peta", href: "/peta" }}
      />
    </>
  );
}
