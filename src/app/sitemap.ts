import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { destinations } from "@/data/destinations";
import { stories } from "@/data/stories";
import { products } from "@/data/products";
import { getAllNews } from "@/lib/cms/news";

/**
 * Sitemap for CARITA TEMBONG. Static routes plus data-driven detail routes.
 * News entries appear only when the CMS is connected (getAllNews returns [] when
 * WORDPRESS_API_URL is unset), so the sitemap never lists pages that would 404.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPaths = [
    "",
    "/kenali-tembong",
    "/jelajahi-tembong",
    "/cerita-budaya",
    "/potensi-desa",
    "/tembong-sehat",
    "/tembong-sehat/kajedak",
    "/kegiatan",
    "/kabar-tembong",
    "/peta",
    "/galeri",
    "/tim",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const destinationEntries: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${siteUrl}/jelajahi-tembong/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const storyEntries: MetadataRoute.Sitemap = stories.map((s) => ({
    url: `${siteUrl}/cerita-budaya/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${siteUrl}/potensi-desa/produk/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  let newsEntries: MetadataRoute.Sitemap = [];
  try {
    const news = await getAllNews();
    newsEntries = news.map((article) => ({
      url: `${siteUrl}/kabar-tembong/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : now,
      changeFrequency: "weekly",
      priority: 0.6,
    }));
  } catch {
    newsEntries = [];
  }

  return [
    ...staticEntries,
    ...destinationEntries,
    ...storyEntries,
    ...productEntries,
    ...newsEntries,
  ];
}
