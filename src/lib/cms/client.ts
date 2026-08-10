import { CMS_REVALIDATE_SECONDS, WORDPRESS_API_URL } from "./config";

/**
 * Thin WordPress REST fetch wrapper. Uses Next.js ISR (`revalidate`) so content
 * stays fresh without redeploys. Transient failures are retried before an
 * error is thrown, allowing Next.js ISR to keep serving the last good result.
 */
export async function wpFetch<T>(path: string): Promise<T> {
  const url = `${WORDPRESS_API_URL}${path.startsWith("/") ? path : `/${path}`}`;

  let lastError: Error | undefined;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
        next: { revalidate: CMS_REVALIDATE_SECONDS },
      });

      if (!response.ok) {
        throw new Error(`WordPress request failed (${response.status}): ${path}`);
      }

      return (await response.json()) as T;
    } catch (error) {
      lastError =
        error instanceof Error ? error : new Error("Unknown WordPress request error");

      if (attempt < 3) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 300));
      }
    }
  }

  throw lastError ?? new Error(`WordPress request failed: ${path}`);
}
