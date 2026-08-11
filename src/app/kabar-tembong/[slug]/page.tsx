import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { BambooPattern } from "@/components/sunda/BambooPattern";
import { siteConfig } from "@/config/site";
import { getAllNews, getNewsBySlug } from "@/lib/cms/news";

type Params = { slug: string };

/**
 * Pre-render every published article at build time. When the CMS is off this
 * returns an empty list, so the build stays green and unknown slugs fall back
 * to on-demand rendering (then notFound()).
 */
export async function generateStaticParams(): Promise<Params[]> {
  try {
    const news = await getAllNews();
    return news.map((article) => ({ slug: article.slug }));
  } catch {
    // A temporary CMS outage must not block unrelated production changes.
    // With dynamicParams enabled by default, article pages are generated on
    // demand as soon as WordPress is reachable again.
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) {
    return { title: "Kabar tidak ditemukan" };
  }

  return {
    title: article.title,
    description: article.excerpt || undefined,
    alternates: { canonical: `/kabar-tembong/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt || undefined,
      publishedTime: article.date || undefined,
      images: article.imageUrl ? [{ url: article.imageUrl }] : undefined,
    },
  };
}

export default async function KabarDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  const pageUrl = siteUrl
    ? `${siteUrl}/kabar-tembong/${article.slug}`
    : undefined;
  const hasHeroImage = Boolean(article.imageUrl);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt || undefined,
    datePublished: article.date || undefined,
    dateModified: article.date || undefined,
    image: article.imageUrl ? [article.imageUrl] : undefined,
    articleSection: article.category || undefined,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: siteUrl ? `${siteUrl}/` : undefined,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kabar Tembong",
        item: siteUrl ? `${siteUrl}/kabar-tembong` : undefined,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <article>
      <header
        className={`relative overflow-hidden ${
          hasHeroImage ? "bg-brand-deep" : "bg-surface-muted"
        }`}
      >
        {article.imageUrl && (
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.imageUrl}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-deep/75" />
          </div>
        )}
        <BambooPattern
          className={hasHeroImage ? "text-white" : "text-decorative"}
          opacity={hasHeroImage ? 0.06 : 0.05}
        />
        <Container width="reading" className="relative z-10 py-12 md:py-16">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Kabar Tembong", href: "/kabar-tembong" },
              { label: article.title },
            ]}
            variant={hasHeroImage ? "onDark" : "default"}
            className="mb-6"
          />
          <div
            className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${
              hasHeroImage ? "text-white/80" : "text-secondary"
            }`}
          >
            {article.category && (
              <>
                <span
                  className={`font-semibold ${
                    hasHeroImage ? "text-decorative" : "text-cultural"
                  }`}
                >
                  {article.category}
                </span>
                <span aria-hidden="true">·</span>
              </>
            )}
            {article.dateLabel && (
              <time dateTime={article.date}>{article.dateLabel}</time>
            )}
          </div>
          <h1 className={`type-h1 mt-3 ${hasHeroImage ? "text-white" : "text-brand"}`}>
            {article.title}
          </h1>
        </Container>
      </header>

      <Container width="reading" className="py-12 md:py-16">
        {/* Trusted HTML from the village CMS (WordPress content.rendered). */}
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 border-t border-soft pt-8">
          <Button href="/kabar-tembong" variant="secondary" withArrow>
            Kembali ke Kabar Tembong
          </Button>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]) }}
      />
    </article>
  );
}
