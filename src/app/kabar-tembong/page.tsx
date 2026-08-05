import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { NewsArchive } from "@/components/news/NewsArchive";
import { ExploreCallout } from "@/components/home/ExploreCallout";
import heroImage from "../../../public/images/hero/curug-cibanteri.jpg";

export const metadata: Metadata = {
  title: "Kabar Tembong",
  description:
    "Berita dan kabar terbaru dari Desa Tembong: kegiatan warga, budaya, ekonomi, kesehatan, dan pembangunan desa.",
};

export default function KabarTembongPage() {
  return (
    <>
      <PageHero
        eyebrow="Kabar Tembong"
        title="Apa yang Sedang Terjadi di Desa"
        description="Catatan tentang kegiatan, capaian, dan perkembangan Desa Tembong. Ditulis untuk warga, dan siapa pun yang ingin mengenal desa lebih dekat."
        image={heroImage}
        imageAlt="Curug Cibanteri di kawasan alam Desa Tembong dengan langit cerah."
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Kabar Tembong" },
        ]}
      />

      <NewsArchive
        eyebrow="Kabar Desa"
        title="Kabar Terbaru dari Tembong"
        description="Setiap kabar mengutamakan hal yang benar-benar terjadi — ditulis ringkas, jelas, untuk warga. Daftar ini tumbuh seiring redaksi desa mempublikasikan kabar baru."
      />

      <ExploreCallout
        eyebrow="Kenali"
        title="Baru mengenal Tembong?"
        description="Mulai dari profil desa untuk memahami tempat di balik setiap kabar."
        primary={{ label: "Kenali Tembong", href: "/kenali-tembong" }}
        secondary={{ label: "Kembali ke Beranda", href: "/" }}
      />
    </>
  );
}
