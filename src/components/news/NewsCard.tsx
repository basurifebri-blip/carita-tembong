import Link from "next/link";
import type { NewsArticle } from "@/types/cms";

/**
 * News card (design-system §31). Lighter than a story card. The whole card is a
 * link to the article: the title carries the accessible name and a full-card
 * overlay (`after:inset-0`) makes the surrounding area clickable too. Uses a
 * plain <img> for the CMS-hosted featured image so it works with any WordPress
 * domain without pre-configuring next/image remote patterns.
 */
export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-soft bg-surface shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
        {article.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-secondary">
          {article.category && (
            <>
              <span className="font-semibold text-cultural">{article.category}</span>
              <span aria-hidden="true">·</span>
            </>
          )}
          {article.dateLabel && (
            <time dateTime={article.date}>{article.dateLabel}</time>
          )}
        </div>
        <h3 className="font-display text-lg font-semibold leading-snug text-brand">
          <Link
            href={`/kabar-tembong/${article.slug}`}
            className="transition-colors after:absolute after:inset-0 group-hover:text-interactive-strong"
          >
            {article.title}
          </Link>
        </h3>
        {article.excerpt && (
          <p className="text-sm leading-relaxed text-secondary">{article.excerpt}</p>
        )}
      </div>
    </article>
  );
}
