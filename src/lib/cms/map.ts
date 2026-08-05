/**
 * Shared WordPress REST mapping used by every CMS service (news, stories,
 * products). Turns a raw `_embed`-ed post into a clean, presentation-ready
 * object so components never touch WordPress internals.
 */

type WpRendered = { rendered: string };

export type WpPost = {
  id: number;
  slug: string;
  date: string;
  title: WpRendered;
  excerpt: WpRendered;
  /** Full body HTML — only present on single-item requests (e.g. ?slug=). */
  content?: WpRendered;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>;
    "wp:term"?: Array<Array<{ name?: string }>>;
  };
};

export type MappedPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  category?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8211;/g, "-")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&hellip;|&#8230;/g, "…")
    .trim();
}

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function mapWpPost(post: WpPost): MappedPost {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const term = post._embedded?.["wp:term"]?.[0]?.[0];

  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title?.rendered ?? ""),
    excerpt: stripHtml(post.excerpt?.rendered ?? ""),
    date: post.date,
    dateLabel: post.date ? dateFormatter.format(new Date(post.date)) : "",
    category: term?.name ? stripHtml(term.name) : undefined,
    imageUrl: media?.source_url,
    imageAlt: media?.alt_text || undefined,
  };
}

/**
 * Like {@link mapWpPost} but also carries the full rendered body, for detail
 * pages. `content` is raw HTML from WordPress (`content.rendered`) and is
 * rendered as-is, so it must come from the trusted village CMS.
 */
export function mapWpPostDetail(post: WpPost): MappedPost & { content: string } {
  return {
    ...mapWpPost(post),
    content: post.content?.rendered ?? "",
  };
}
