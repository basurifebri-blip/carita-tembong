/**
 * Presentation-facing content types produced by the CMS service layer
 * (src/lib/cms). Components consume these, never the raw WordPress payloads.
 */

export type NewsArticle = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date string from the CMS. */
  date: string;
  /** Human date, formatted in Indonesian (e.g. "7 Agustus 2026"). */
  dateLabel: string;
  category?: string;
  imageUrl?: string;
  imageAlt?: string;
};

/**
 * A news article with its full rendered body, for the detail page
 * (/kabar-tembong/[slug]). `content` is trusted HTML from the village CMS.
 */
export type NewsArticleDetail = NewsArticle & {
  /** Rendered HTML body from WordPress (`content.rendered`). */
  content: string;
};
