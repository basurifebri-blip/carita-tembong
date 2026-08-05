import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DestinationCard } from "@/components/tourism/DestinationCard";
import { destinations } from "@/data/destinations";

/** Discovery of physical places, using the real documented destinations. */
export function FeaturedTourism() {
  return (
    <section className="section bg-surface-muted">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Jelajahi Tembong"
            title="Alam dan Tempat yang Bisa Ditemukan"
            description="Curug, mata air, dan ruang alam desa, lengkap dengan status kunjungannya yang sebenarnya."
          />
          <div className="shrink-0">
            <Button href="/jelajahi-tembong" variant="secondary" withArrow>
              Jelajahi Tembong
            </Button>
          </div>
        </div>

        <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
