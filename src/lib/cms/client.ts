import { CMS_REVALIDATE_SECONDS, WORDPRESS_API_URL } from "./config";

/**
 * Thin WordPress REST fetch wrapper. Uses Next.js ISR (`revalidate`) so content
 * stays fresh without redeploys. Throws on a non-OK response; callers in
 * src/lib/cms catch and fall back to empty results.
 */
export async function wpFetch<T>(path: string): Promise<T> {
  const url = `${WORDPRESS_API_URL}${path.startsWith("/") ? path : `/${path}`}`;

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    next: { revalidate: CMS_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`WordPress request failed (${response.status}): ${path}`);
  }

  return (await response.json()) as T;
}
