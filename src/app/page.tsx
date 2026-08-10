import { HeroSection } from "@/components/home/HeroSection";
import { VillageIntroduction } from "@/components/home/VillageIntroduction";
import { DiscoverGrid } from "@/components/home/DiscoverGrid";
import { VillageStats } from "@/components/home/VillageStats";
import { FeaturedStories } from "@/components/home/FeaturedStories";
import { FeaturedTourism } from "@/components/home/FeaturedTourism";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ExploreCallout } from "@/components/home/ExploreCallout";
import { VillageActivities } from "@/components/home/VillageActivities";
import { HealthHighlight } from "@/components/home/HealthHighlight";
import { MapPreview } from "@/components/home/MapPreview";
import { LatestNews } from "@/components/home/LatestNews";
import { ImageBand } from "@/components/ui/ImageBand";
import curugBand from "../../public/images/hero/curug-cibanteri.jpg";

// Keep the homepage news teaser fresh even though the surrounding village
// content is largely static. This matches the CMS cache interval on Vercel.
export const revalidate = 300;

/**
 * Homepage acts purely as a discovery/composition layer (IA §7, CLAUDE.md §10).
 * HeroSection and VillageIntroduction are fully implemented; the remaining
 * sections are layout-ready shells awaiting CMS content.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VillageIntroduction />
      <DiscoverGrid />
      <VillageStats />
      <ImageBand
        image={curugBand}
        alt="Air terjun Curug Cibanteri mengalir di antara bebatuan dan rimbun pepohonan Desa Tembong."
        eyebrow="Ruang Alam"
        statement="Air jernih yang jatuh di antara bebatuan, salah satu sudut alam yang membuat Tembong layak dijelajahi."
        caption="Curug Cibanteri di Desa Tembong."
      />
      <FeaturedStories />
      <FeaturedTourism />
      <FeaturedProducts />
      <ExploreCallout />
      <VillageActivities />
      <HealthHighlight />
      <MapPreview />
      <LatestNews />
    </>
  );
}
