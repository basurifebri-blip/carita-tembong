/**
 * CMS configuration, read from the environment.
 *
 * The whole CMS layer is optional: with no WORDPRESS_API_URL set, service
 * functions short-circuit to empty results and the site renders its built-in
 * placeholders (so the static build never depends on a live WordPress).
 */

/** Base REST URL, e.g. https://cms.example.id/wp-json (no trailing slash). */
export const WORDPRESS_API_URL = (process.env.WORDPRESS_API_URL ?? "").replace(
  /\/+$/,
  "",
);

/** True once a WordPress endpoint is configured. */
export const isCmsEnabled = WORDPRESS_API_URL.length > 0;

/** ISR window: how long fetched CMS content is cached before revalidating. */
export const CMS_REVALIDATE_SECONDS = Number(
  process.env.CMS_REVALIDATE_SECONDS ?? 300,
);

/**
 * WordPress REST post-type slug used for news (Kabar Tembong). Defaults to the
 * built-in "posts"; set WORDPRESS_NEWS_TYPE to a custom post type (e.g.
 * "berita"). The CMS is applied to news only.
 */
// `||` (not `??`) so an empty WORDPRESS_NEWS_TYPE="" also falls back to "posts"
// — an empty env var should mean "use the default", not "".
export const NEWS_POST_TYPE = process.env.WORDPRESS_NEWS_TYPE || "posts";
