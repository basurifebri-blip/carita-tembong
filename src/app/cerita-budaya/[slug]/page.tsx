import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { StoryBody } from "@/components/story/StoryBody";
import { ExploreCallout } from "@/components/home/ExploreCallout";
import { siteConfig, siteUrl } from "@/config/site";
import { stories, getStory } from "@/data/stories";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);

  if (!story) return { title: "Cerita tidak ditemukan" };

  return {
    title: story.title,
    description: story.summary,
    alternates: { canonical: `/cerita-budaya/${story.slug}` },
    openGraph: {
      type: "article",
      title: story.title,
      description: story.summary,
      images: [{ url: story.image.src }],
    },
  };
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const story = getStory(slug);

  if (!story) notFound();

  const others = stories.filter((s) => s.slug !== story.slug);
  const pageUrl = `${siteUrl}/cerita-budaya/${story.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.summary,
    image: [story.image.src],
    articleSection: story.category,
    inLanguage: "id-ID",
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: `${siteUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cerita & Budaya",
        item: `${siteUrl}/cerita-budaya`,
      },
      { "@type": "ListItem", position: 3, name: story.title, item: pageUrl },
    ],
  };

  return (
    <>
      <PageHero
        eyebrow={story.eyebrow}
        title={story.title}
        description={story.summary}
        image={story.image}
        imageAlt={story.imageAlt}
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Cerita & Budaya", href: "/cerita-budaya" },
          { label: story.title },
        ]}
      />

      <section className="section">
        <Container width="reading">
          <Badge tone="cultural">{story.category}</Badge>
          <StoryBody
            paragraphs={story.paragraphs}
            className="mt-6 text-[1.05rem] leading-relaxed"
          />
          {story.note && (
            <p className="mt-6 text-sm text-secondary/80">{story.note}</p>
          )}
        </Container>

        {story.gallery && story.gallery.length > 0 && (
          <Container className="mt-12">
            <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {story.gallery.map((item) => (
                <figure key={item.caption}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-soft shadow-card">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-secondary">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </Reveal>
          </Container>
        )}

        <Container width="reading">
          <div className="mt-12 border-t border-soft pt-8">
            <Button href="/cerita-budaya" variant="secondary" withArrow>
              Kembali ke Cerita &amp; Budaya
            </Button>
          </div>
        </Container>
      </section>

      {/* Other stories */}
      <section className="section bg-surface-muted">
        <Container>
          <SectionTitle eyebrow="Lanjutkan" title="Cerita Lain dari Tembong" />
          <Reveal className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/cerita-budaya/${other.slug}`}
                className="group rounded-xl border border-soft bg-surface p-6 transition-colors hover:border-decorative"
              >
                <span className="type-eyebrow">{other.category}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-brand">
                  {other.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-secondary">
                  {other.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-interactive">
                  Baca cerita
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
        eyebrow="Temukan"
        title="Cerita bertemu tempat dan hasil karya"
        description="Setiap kisah di Tembong terhubung dengan alam, produk, dan orang-orang di baliknya."
        primary={{ label: "Potensi Desa", href: "/potensi-desa" }}
        secondary={{ label: "Jelajahi Tembong", href: "/jelajahi-tembong" }}
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
