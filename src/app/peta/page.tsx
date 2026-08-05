import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/ui/PageHero";
import { ExploreCallout } from "@/components/home/ExploreCallout";
import { PetaExplorer } from "@/components/map/PetaExplorer";
import heroImage from "../../../public/images/wisata/aliran-sungai.jpg";

export const metadata: Metadata = {
  title: "Peta Desa",
  description:
    "Peta interaktif Desa Tembong: titik pemerintahan, kesehatan, wisata, dan potensi ekonomi desa, dibangun dengan Leaflet dan OpenStreetMap.",
};

export default function PetaPage() {
  return (
    <>
      <PageHero
        eyebrow="Peta Desa"
        title="Menemukan Tembong dari Dekat"
        description="Peta interaktif untuk menelusuri lokasi penting desa, dari kantor pemerintahan hingga sumber air dan potensi wisata."
        image={heroImage}
        imageAlt="Aliran air di kawasan alam Desa Tembong."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Peta" }]}
      />

      <section className="section">
        <Container>
          <SectionTitle
            eyebrow="Jelajahi Peta"
            title="Menelusuri Tembong per Kategori"
            description="Saring titik lokasi sesuai kebutuhan, lalu telusuri langsung di peta OpenStreetMap."
          />

          <div className="mt-10">
            <PetaExplorer />
          </div>
        </Container>
      </section>

      <ExploreCallout
        eyebrow="Jelajahi"
        title="Mulai penelusuran dari alam Tembong"
        description="Kenali potensi wisata dan cerita desa lebih dekat, lalu temukan lokasinya di peta."
        primary={{ label: "Jelajahi Tembong", href: "/jelajahi-tembong" }}
        secondary={{ label: "Kenali Tembong", href: "/kenali-tembong" }}
      />
    </>
  );
}
