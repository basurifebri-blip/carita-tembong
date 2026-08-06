import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { ExploreCallout } from "@/components/home/ExploreCallout";
import { destinations, destinationSource } from "@/data/destinations";
import { mapPoints } from "@/data/mapPoints";
import { googleMapsUrl } from "@/lib/maps";
import type { VisitStatus } from "@/types/tourism";

type Params = { slug: string };

/** Honest, verifiable note per visit status — never over-promises facilities. */
const statusNote: Record<VisitStatus, string> = {
  "Bisa Dikunjungi":
    "Lokasi ini dapat dikunjungi. Tetap jaga kebersihan dan keselamatan selama berada di sana.",
  "Akses Terbatas":
    "Akses ke lokasi ini terbatas. Sebaiknya berkoordinasi dulu dengan warga atau pemerintah desa sebelum berkunjung.",
  "Potensial Dikembangkan":
    "Lokasi ini memiliki potensi wisata, tetapi belum tentu dilengkapi fasilitas atau akses yang siap untuk kunjungan umum. Informasi yang lebih rinci akan ditambahkan setelah diverifikasi bersama warga dan pemerintah desa.",
  "Dalam Pengembangan":
    "Lokasi ini sedang dalam tahap pengembangan, sehingga sebagian fasilitas mungkin belum tersedia.",
  "Tutup Sementara":
    "Lokasi ini sedang tutup sementara. Nantikan informasi pembukaannya kembali.",
};

const aksesInfo = [
  "Sebagian lokasi berada di kawasan alam dan dapat memerlukan perjalanan melalui jalan desa serta jalur berjalan kaki.",
  "Kondisi jalur dan cuaca bisa berubah, terutama pada musim hujan. Gunakan alas kaki yang sesuai dan perhatikan keselamatan di sekitar air.",
];

export function generateStaticParams(): Params[] {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return { title: "Destinasi tidak ditemukan" };
  }

  return {
    title: destination.name,
    description: destination.summary,
    alternates: { canonical: `/jelajahi-tembong/${destination.slug}` },
    openGraph: {
      type: "article",
      title: destination.name,
      description: destination.summary,
      images: destination.image ? [{ url: destination.image.src }] : undefined,
    },
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) notFound();

  const point = mapPoints.find((p) => p.id === destination.slug);
  const mapsUrl = googleMapsUrl(point?.coordinates ?? null);
  const others = destinations.filter((d) => d.slug !== destination.slug);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  const pageUrl = siteUrl
    ? `${siteUrl}/jelajahi-tembong/${destination.slug}`
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: destination.name,
    description: destination.summary,
    image: destination.image ? [destination.image.src] : undefined,
    url: pageUrl,
    ...(point?.coordinates
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: point.coordinates[0],
            longitude: point.coordinates[1],
          },
        }
      : {}),
    containedInPlace: {
      "@type": "Place",
      name: "Desa Tembong, Carita, Pandeglang, Banten",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl ? `${siteUrl}/` : undefined },
      {
        "@type": "ListItem",
        position: 2,
        name: "Jelajahi Tembong",
        item: siteUrl ? `${siteUrl}/jelajahi-tembong` : undefined,
      },
      { "@type": "ListItem", position: 3, name: destination.name, item: pageUrl },
    ],
  };

  return (
    <>
      <PageHero
        eyebrow={destination.category}
        title={destination.name}
        description={destination.summary}
        image={destination.image}
        imageAlt={
          destination.image
            ? `${destination.name}, ${destination.category.toLowerCase()} di Desa Tembong.`
            : undefined
        }
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Jelajahi Tembong", href: "/jelajahi-tembong" },
          { label: destination.name },
        ]}
      />

      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
            {/* Narrative */}
            <div>
              <Badge tone="cultural">{destination.status}</Badge>
              <h2 className="type-h2 mt-4 text-brand">Tentang Tempat Ini</h2>
              <p className="type-lead mt-5 text-secondary">{destination.summary}</p>
              {destination.story?.map((para, index) => (
                <p key={index} className="mt-4 text-secondary">
                  {para}
                </p>
              ))}
              <p className="mt-4 text-secondary">{statusNote[destination.status]}</p>

              {destination.lore && (
                <div className="mt-10 rounded-xl border-l-2 border-decorative bg-surface-muted/60 p-6">
                  <span className="type-eyebrow text-cultural">Tradisi Lisan</span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-brand">
                    {destination.lore.heading}
                  </h3>
                  {destination.lore.body.map((para, index) => (
                    <p key={index} className="mt-3 text-secondary">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {destination.etiquette && destination.etiquette.length > 0 && (
                <>
                  <h3 className="mt-10 font-display text-xl font-semibold text-brand">
                    Adab Berkunjung
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {destination.etiquette.map((item, index) => (
                      <li key={index} className="flex gap-3 text-secondary">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-decorative"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h3 className="mt-10 font-display text-xl font-semibold text-brand">
                Sebelum Berkunjung
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {aksesInfo.map((info, index) => (
                  <li key={index} className="flex gap-3 text-secondary">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-decorative"
                    />
                    <span>{info}</span>
                  </li>
                ))}
              </ul>

              {destination.note && (
                <p className="mt-8 border-t border-soft pt-4 text-xs text-secondary">
                  {destination.note}
                </p>
              )}
            </div>

            {/* Facts & location */}
            <aside>
              <div className="rounded-xl border border-soft bg-surface-muted p-6">
                <h3 className="text-sm font-semibold text-brand">Fakta Singkat</h3>
                <dl className="mt-4 flex flex-col gap-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-secondary">Kategori</dt>
                    <dd className="text-right font-medium text-primary">
                      {destination.category}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-secondary">Status</dt>
                    <dd className="text-right font-medium text-primary">
                      {destination.status}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-secondary">Lokasi</dt>
                    <dd className="text-right font-medium text-primary">
                      {point?.coordinates
                        ? "Tersedia di peta desa"
                        : "Titik sedang diverifikasi"}
                    </dd>
                  </div>
                </dl>

                <div className="mt-5 flex flex-col gap-2">
                  <Button href="/peta" variant="secondary" className="w-full">
                    Lihat di Peta Desa
                  </Button>
                  {mapsUrl && (
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 text-sm font-semibold text-interactive hover:text-interactive-strong"
                    >
                      Buka di Google Maps
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>

                <p className="mt-5 border-t border-soft pt-4 text-xs text-secondary">
                  Sumber: {destinationSource}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Other destinations — keep the portal navigable */}
      <section className="section bg-surface-muted">
        <Container>
          <SectionTitle eyebrow="Lanjutkan" title="Destinasi Lain di Tembong" />
          <Reveal className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/jelajahi-tembong/${other.slug}`}
                className="group rounded-xl border border-soft bg-surface p-6 transition-colors hover:border-decorative"
              >
                <span className="type-eyebrow">{other.category}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-brand">
                  {other.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-secondary">
                  {other.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-interactive">
                  Lihat destinasi
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    ›
                  </span>
                </span>
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      <ExploreCallout
        eyebrow="Terhubung"
        title="Setiap tempat punya cerita di baliknya"
        description="Temui masyarakat dan tradisi yang menjaga alam serta kehidupan Desa Tembong."
        primary={{ label: "Cerita & Budaya", href: "/cerita-budaya" }}
        secondary={{ label: "Jelajahi Peta", href: "/peta" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLd, breadcrumbLd]),
        }}
      />
    </>
  );
}
