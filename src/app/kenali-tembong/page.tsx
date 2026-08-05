import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ImageBand } from "@/components/ui/ImageBand";
import { SekilasDesa } from "@/components/kenali/SekilasDesa";
import { DemografiDesa } from "@/components/kenali/DemografiDesa";
import { InfrastrukturDesa } from "@/components/kenali/InfrastrukturDesa";
import { PemerintahanDesa } from "@/components/kenali/PemerintahanDesa";
import { EkonomiKehidupan } from "@/components/kenali/EkonomiKehidupan";
import { ExploreCallout } from "@/components/home/ExploreCallout";
import heroImage from "../../../public/images/hero/tembong-lanskap.jpg";
import kebunImage from "../../../public/images/village/kebun-tembong.jpg";

export const metadata: Metadata = {
  title: "Kenali Tembong",
  description:
    "Mengenal Desa Tembong, Kecamatan Carita: geografi, demografi, pemerintahan desa, serta ekonomi dan kehidupan masyarakatnya berdasarkan data resmi desa.",
};

/**
 * Kenali Tembong (IA §13–16). Foundation for understanding the village, built
 * from verified data: the official village profile and the government structure
 * boards. Pages compose components only.
 */
export default function KenaliTembongPage() {
  return (
    <>
      <PageHero
        eyebrow="Kenali Tembong"
        title="Mengenal Desa Tembong"
        description="Profil singkat desa, dari alam dan wilayahnya hingga masyarakat serta pemerintahan yang menjaganya."
        image={heroImage}
        imageAlt="Lanskap Desa Tembong dengan kebun kelapa dan saung di bawah langit cerah."
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Kenali Tembong" },
        ]}
      />
      <SekilasDesa />
      <ImageBand
        image={kebunImage}
        alt="Kebun kelapa dan pepohonan hijau di kawasan Desa Tembong."
        eyebrow="Alam Tembong"
        statement="Di dataran tinggi Carita, kehidupan Tembong tumbuh dari tanah dan kebunnya sendiri."
        caption="Kebun warga di kawasan Desa Tembong."
      />
      <DemografiDesa />
      <InfrastrukturDesa />
      <PemerintahanDesa />
      <EkonomiKehidupan />
      <ExploreCallout
        eyebrow="Jelajahi"
        title="Sudah mengenal Tembong? Mari lihat apa yang ada di dalamnya"
        description="Temukan alam, cerita, dan potensi Desa Tembong lebih dekat."
        primary={{ label: "Jelajahi Tembong", href: "/jelajahi-tembong" }}
        secondary={{ label: "Jelajahi Peta", href: "/peta" }}
      />
    </>
  );
}
