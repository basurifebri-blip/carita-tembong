import type { NewsArticle, NewsArticleDetail } from "@/types/cms";
import { isCmsEnabled, NEWS_POST_TYPE } from "./config";
import { wpFetch } from "./client";
import { mapWpPost, mapWpPostDetail, type WpPost } from "./map";

/**
 * Latest news, newest first. Returns an empty array when the CMS is not yet
 * configured or a request fails, so callers can render a placeholder and the
 * static build never breaks.
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

  try {
    const posts = await wpFetch<WpPost[]>(
      `/wp/v2/${NEWS_POST_TYPE}?per_page=${limit}&orderby=date&order=desc&_embed`,
    );
    return Array.isArray(posts) ? posts.map(mapWpPost) : [];
  } catch (error) {
    console.error("[cms] getAllNews failed:", error);
    return [];
  }
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

  try {
    const posts = await wpFetch<WpPost[]>(
      `/wp/v2/${NEWS_POST_TYPE}?slug=${encodeURIComponent(slug)}&_embed`,
    );
    const post = Array.isArray(posts) ? posts[0] : undefined;
    return post ? mapWpPostDetail(post) : null;
  } catch (error) {
    console.error(`[cms] getNewsBySlug(${slug}) failed:`, error);
    return null;
  }
}
