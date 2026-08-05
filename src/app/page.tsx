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
