import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { StoryBody } from "@/components/story/StoryBody";
import { ProcessStrip } from "@/components/umkm/ProcessStrip";
import { KontakPemesanan } from "@/components/umkm/KontakPemesanan";
import { ExploreCallout } from "@/components/home/ExploreCallout";
import { siteConfig, siteUrl } from "@/config/site";
import { products, getProduct } from "@/data/products";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return { title: "Produk tidak ditemukan" };

  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/potensi-desa/produk/${product.slug}` },
    openGraph: {
      type: "article",
      title: product.name,
      description: product.summary,
      images: [{ url: product.heroImage.src }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug);
  const pageUrl = `${siteUrl}/potensi-desa/produk/${product.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: [product.heroImage.src],
    category: product.tag,
    url: pageUrl,
    brand: {
      "@type": "Brand",
      name: product.brand ?? siteConfig.name,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: `${siteUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Potensi Desa",
        item: `${siteUrl}/potensi-desa`,
      },
      { "@type": "ListItem", position: 3, name: product.name, item: pageUrl },
    ],
  };

  return (
    <>
      <PageHero
        eyebrow={product.tag}
        title={product.name}
        description={product.summary}
        image={product.heroImage}
        imageAlt={product.heroAlt}
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Potensi Desa", href: "/potensi-desa" },
          { label: product.name },
        ]}
      />

      {/* Story + process */}
      <section className="section">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-[1fr_18rem] lg:gap-16">
            <div>
              <h2 className="type-h2 text-brand">{product.storyTitle}</h2>
              <StoryBody
                paragraphs={product.story}
                className="mt-6 text-[1.05rem] leading-relaxed"
              />
            </div>
            <aside className="lg:pt-2">
              <KontakPemesanan product={product} />

              {product.businessFacts && product.businessFacts.length > 0 && (
                <div className="mt-6 rounded-xl border border-soft bg-surface-muted p-6">
                  <h3 className="font-display text-xl font-semibold text-brand">
                    Profil Usaha
                  </h3>
                  <dl className="mt-4 flex flex-col gap-3 text-sm">
                    {product.businessFacts.map((fact) => (
                      <div key={fact.label}>
                        <dt className="text-secondary">{fact.label}</dt>
                        <dd className="font-medium text-primary">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </aside>
          </Reveal>

          {(product.prices || product.variants) && (
            <Reveal className="mt-10 rounded-xl border border-soft bg-surface-clay p-6 sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-brand">
                Harga &amp; Varian
              </h2>
              {product.prices && (
                <dl className="mt-5 grid gap-4 sm:grid-cols-3">
                  {product.prices.map((price) => (
                    <div key={price.label}>
                      <dt className="text-sm text-secondary">{price.label}</dt>
                      <dd className="mt-1 font-semibold text-primary">{price.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {product.variants && (
                <p className="mt-5 text-sm text-secondary">
                  Varian rasa: {product.variants.join(", ")}.
                </p>
              )}
              <p className="mt-3 text-xs text-secondary">
                Harga merupakan informasi saat pendataan dan dapat berubah mengikuti
                ketersediaan bahan baku serta jumlah pesanan.
              </p>
            </Reveal>
          )}

          <Reveal className="mt-10">
            <ProcessStrip label="Tahap Pembuatan" steps={product.steps} />
          </Reveal>

          <Reveal className="mt-6 grid gap-6 sm:grid-cols-3">
            {product.gallery.map((photo) => (
              <figure key={photo.caption}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-soft shadow-card">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 640px) 22rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-secondary">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </Reveal>

          <div className="mt-12 border-t border-soft pt-8">
            <Button href="/potensi-desa" variant="secondary" withArrow>
              Kembali ke Potensi Desa
            </Button>
          </div>
        </Container>
      </section>

      {/* Other products */}
      {others.length > 0 && (
        <section className="section bg-surface-muted">
          <Container>
            <SectionTitle eyebrow="Produk Lain" title="Dari Tangan Warga Tembong" />
            <Reveal className="mt-8 grid gap-6 sm:grid-cols-2">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/potensi-desa/produk/${other.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-soft bg-surface shadow-card transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                    <Image
                      src={other.cardImage}
                      alt={other.cardAlt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 640px) 30rem, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-brand">
                      {other.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-secondary">
                      {other.summary}
                    </p>
                  </div>
                </Link>
              ))}
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLd, breadcrumbLd]),
        }}
      />
    </>
  );
}
