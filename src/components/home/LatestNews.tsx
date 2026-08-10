import { BeritaTerbaru } from "@/components/news/BeritaTerbaru";

/**
 * Latest news on the homepage. Populates automatically from the CMS
 * (CLAUDE.md §30); falls back to a placeholder until WordPress is connected.
 */
export function LatestNews() {
  return (
    <BeritaTerbaru
      eyebrow="Kabar Tembong"
      title="Perkembangan Terbaru dari Desa"
      description="Tiga kabar terbaru dari Desa Tembong, diperbarui otomatis dari CMS desa."
      limit={3}
      tone="surface"
      cta={{ label: "Lihat Kabar Tembong", href: "/kabar-tembong" }}
    />
  );
}
