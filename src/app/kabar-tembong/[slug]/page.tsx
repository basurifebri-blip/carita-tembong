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
  const news = await getAllNews();
  return news.map((article) => ({ slug: article.slug }));
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
      <header className="relative overflow-hidden bg-surface-muted">
        <BambooPattern className="text-decorative" opacity={0.05} />
        <Container width="reading" className="relative py-12 md:py-16">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Kabar Tembong", href: "/kabar-tembong" },
              { label: article.title },
            ]}
            className="mb-6"
          />
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-secondary">
            {article.category && (
              <>
                <span className="font-semibold text-cultural">
                  {article.category}
                </span>
                <span aria-hidden="true">·</span>
              </>
            )}
            {article.dateLabel && (
              <time dateTime={article.date}>{article.dateLabel}</time>
            )}
          </div>
          <h1 className="type-h1 mt-3 text-brand">{article.title}</h1>
          {article.excerpt && (
            <p className="type-lead mt-5 text-secondary">{article.excerpt}</p>
          )}
        </Container>
      </header>

      <Container width="reading" className="py-12 md:py-16">
        {article.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            className="mb-10 aspect-[16/9] w-full rounded-xl border border-soft object-cover"
          />
        )}

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
