import type { NewsArticle, NewsArticleDetail } from "@/types/cms";
import { isCmsEnabled, NEWS_POST_TYPE } from "./config";
import { wpFetch } from "./client";
import { mapWpPost, mapWpPostDetail, type WpPost } from "./map";

/**
 * Latest news, newest first. Returns an empty array only when the CMS is not
 * configured; configured CMS failures are allowed to throw so ISR preserves
 * the last successful page instead of caching a false empty state.
 */
export async function getLatestNews(limit = 3): Promise<NewsArticle[]> {
  // Reuse the same request as the archive so the homepage and /kabar-tembong
  // cannot diverge because of separate WordPress data-cache entries.
  const news = await getAllNews();
  return news.slice(0, limit);
}

/**
 * All published news for the archive page (/kabar-tembong), newest first.
 * `limit` caps the request (WordPress REST allows at most 100 per page).
 */
export async function getAllNews(limit = 100): Promise<NewsArticle[]> {
  if (!isCmsEnabled) return [];

  const posts = await wpFetch<WpPost[]>(
    `/wp/v2/${NEWS_POST_TYPE}?per_page=${limit}&orderby=date&order=desc&_embed`,
  );
  return Array.isArray(posts) ? posts.map(mapWpPost) : [];
}

/**
 * A single news article by slug, including its full body, for the detail page.
 * Returns null when the CMS is off or no matching post is published, so the
 * page can call notFound().
 */
export async function getNewsBySlug(
  slug: string,
): Promise<NewsArticleDetail | null> {
  if (!isCmsEnabled) return null;

  const posts = await wpFetch<WpPost[]>(
    `/wp/v2/${NEWS_POST_TYPE}?slug=${encodeURIComponent(slug)}&_embed`,
  );
  const post = Array.isArray(posts) ? posts[0] : undefined;
  return post ? mapWpPostDetail(post) : null;
}
