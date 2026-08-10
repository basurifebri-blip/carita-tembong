import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/ui/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Mark } from "@/components/ui/Mark";
import { Button } from "@/components/ui/Button";
import { ExploreCallout } from "@/components/home/ExploreCallout";
import { products } from "@/data/products";
import { whatsappUrl } from "@/lib/whatsapp";
import empingPemipihan from "../../../public/images/galeri/emping-pemipihan.jpg";
import pasarUtama from "../../../public/images/galeri/pasar-pantai-carita.jpg";
import pasarWelcome from "../../../public/images/galeri/pasar-welcome.jpg";
import pasarPetai from "../../../public/images/galeri/pasar-petai.jpg";
import pasarLapak from "../../../public/images/galeri/pasar-lapak.jpg";

export const metadata: Metadata = {
  title: "Potensi Desa",
  description:
    "Produk dan potensi ekonomi Desa Tembong: emping melinjo, opak, dan karya para pengrajin lokal yang diwariskan dari generasi ke generasi.",
};

const barokahProduct = products.find((product) => product.slug === "emping-opak-barokah");
const villageProducts = products.filter((product) => product.slug !== "emping-opak-barokah");

export default function PotensiDesaPage() {
  return (
    <>
      <PageHero
        eyebrow="Potensi Desa"
        title="Hasil dari Tangan dan Tanah Tembong"
        description="Dari kebun melinjo hingga tungku kayu, banyak keluarga Tembong menghidupi hari-harinya lewat keterampilan tangan yang diwariskan turun-temurun."
        image={empingPemipihan}
        imageAlt="Warga memipihkan emping melinjo di atas batu di dekat tungku kayu di Desa Tembong."
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Potensi Desa" },
        ]}
      />

      {/* Intro */}
      <section className="section">
        <Container width="reading" className="text-center">
          <span className="type-eyebrow">Ekonomi Warga</span>
          <h2 className="type-h2 mt-4 text-brand">
            Seratus Usaha, Ribuan Keping Cerita
          </h2>
          <p className="type-lead mt-6 text-secondary">
            Desa Tembong mencatat sekitar seratus usaha pengrajin. Di antara
            semuanya, emping melinjo dan opak menjadi produk yang paling dikenal,
            lahir dari kebun sendiri dan dikerjakan dengan sabar oleh warga.
          </p>
        </Container>
      </section>

      {/* Featured products — each links to its detail page */}
      <section className="section bg-surface-muted">
        <Container>
          <SectionTitle
            eyebrow="Dari Tembong"
            title="Produk yang Tumbuh dari Kebun Warga"
            description="Setiap produk punya cerita dan proses pembuatannya sendiri. Telusuri lebih dekat."
          />
          <Reveal className="mt-10 grid gap-6 md:grid-cols-2">
            {villageProducts.map((item) => (
              <Link
                key={item.slug}
                href={`/potensi-desa/produk/${item.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-soft bg-surface shadow-card transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                  <Image
                    src={item.cardImage}
                    alt={item.cardAlt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 40rem, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <Badge tone="cultural">{item.tag}</Badge>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-brand">
                    {item.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-secondary">
                    {item.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-interactive">
                    Lihat produk &amp; prosesnya
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

      {/* Pemasaran */}
      <section className="section">
        <Container>
          <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="type-eyebrow">Pemasaran</span>
              <h2 className="type-h2 mt-4 text-brand">
                Akhir Pekan di Pasar Pantai Carita
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-secondary">
                <p>
                  Setiap akhir pekan, <Mark>Sabtu dan Minggu</Mark>, para pengrajin
                  membawa emping dan opak buatan mereka ke{" "}
                  <Mark>Pasar Pantai Carita</Mark>. Ada yang menggelar lapak, ada
                  pula yang berkeliling menawarkan dagangan dari satu tempat ke
                  tempat lain.
                </p>
                <p>
                  Pembeli utamanya adalah para <Mark>wisatawan</Mark>, yang menurut
                  penuturan pengrajin banyak datang dari Jakarta untuk menikmati
                  Pantai Carita. Di tangan mereka, camilan dari dapur Tembong ikut
                  pulang sebagai oleh-oleh.
                </p>
              </div>
            </div>

            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-soft shadow-card">
                <Image
                  src={pasarUtama}
                  alt="Suasana Pasar Pantai Carita pada akhir pekan dengan lapak-lapak pedagang."
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 40rem, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-secondary">
                Suasana pasar akhir pekan di kawasan Pantai Carita.
              </figcaption>
            </figure>
          </Reveal>

          {/* Supporting photos */}
          <Reveal className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                image: pasarWelcome,
                alt: "Gapura bertuliskan selamat datang di Pasir Putih Pantai Carita.",
                caption: "Gerbang kawasan Pantai Carita",
              },
              {
                image: pasarLapak,
                alt: "Lapak-lapak pedagang di tepi jalan kawasan Pantai Carita.",
                caption: "Lapak di tepi jalan kawasan pantai",
              },
              {
                image: pasarPetai,
                alt: "Hasil bumi seperti petai yang turut dijual pedagang di pasar.",
                caption: "Hasil bumi yang turut dijajakan",
              },
            ].map((item) => (
              <figure key={item.caption}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-soft shadow-card">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 640px) 22rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-secondary">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </Reveal>

          <p className="mt-8 max-w-3xl text-sm text-secondary">
            Produk dari UMKM Tembong dapat dipesan melalui katalog di bawah.
            Untuk Emping &amp; Opak Barokah, pemesanan langsung terhubung ke Ibu
            Siti Aminah melalui WhatsApp.
          </p>
        </Container>
      </section>

      {barokahProduct?.catalog && (
        <section className="section bg-surface-muted">
          <Container>
            <SectionTitle
              eyebrow="UMKM Unggulan"
              title="Katalog Emping & Opak Barokah"
              description="Pilihan camilan khas Carita produksi Ibu Siti Aminah. Harga dapat berubah mengikuti ketersediaan bahan baku dan jumlah pesanan."
            />
            <Reveal className="mt-10 grid gap-6 md:grid-cols-3">
              {barokahProduct.catalog.map((item) => {
                const orderUrl = barokahProduct.contact
                  ? whatsappUrl(
                      barokahProduct.contact.whatsapp,
                      `Halo Ibu Siti Aminah, saya tertarik memesan ${item.name} dari Desa Tembong.`,
                    )
                  : undefined;

                return (
                  <article
                    key={item.name}
                    className="flex flex-col overflow-hidden rounded-xl border border-soft bg-surface shadow-card"
                  >
                    <div className="relative aspect-square bg-white p-2">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 768px) 24rem, 100vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-semibold text-brand">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-secondary">
                        {item.description}
                      </p>
                      <p className="mt-4 font-semibold text-primary">{item.price}</p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <Button
                          href={`/potensi-desa/produk/${barokahProduct.slug}`}
                          variant="secondary"
                        >
                          Detail Produk
                        </Button>
                        {orderUrl && (
                          <Button
                            href={orderUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Pesan WhatsApp
                          </Button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </Reveal>
          </Container>
        </section>
      )}

      <ExploreCallout
        eyebrow="Dengarkan"
        title="Di balik setiap produk, ada orang yang menjaganya"
        description="Kenali para pengrajin dan tradisi yang menghidupkan ekonomi Desa Tembong."
        primary={{ label: "Cerita & Budaya", href: "/cerita-budaya" }}
        secondary={{ label: "Kenali Tembong", href: "/kenali-tembong" }}
      />
    </>
  );
}
