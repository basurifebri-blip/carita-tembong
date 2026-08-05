import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { villageProfile } from "@/data/village";

/**
 * "Tembong dalam Angka" — verified figures from the official village profile.
 * Every number is sourced (see src/data/village.ts); none are invented
 * (CLAUDE.md §28/§56). The source and year are shown so readers know the basis.
 */
export function VillageStats() {
  const { stats, source, wisata } = villageProfile;

  return (
    <section className="section bg-surface-clay">
      <Container>
        <SectionTitle
          eyebrow="Tembong dalam Angka"
          title="Gambaran Ringkas Desa Tembong"
          description="Sekilas kondisi desa berdasarkan data resmi, dari jumlah penduduk hingga potensi yang dimilikinya."
        />

        <Reveal className="mt-10">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-y-10 md:grid-cols-3">
            {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-decorative/60 pl-4">
              <dd className="font-display text-4xl font-semibold leading-none text-brand sm:text-5xl">
                {stat.value}
                {stat.unit && (
                  <span className="ml-1 align-baseline text-2xl text-brand/80">
                    {stat.unit}
                  </span>
                )}
              </dd>
              <dt className="mt-2 text-sm text-secondary">{stat.label}</dt>
            </div>
          ))}
          </dl>
        </Reveal>

        <p className="mt-10 max-w-2xl text-sm text-secondary">
          Potensi wisata desa meliputi {wisata.join(", ")}.{" "}
          <span className="text-secondary/80">Sumber: {source}.</span>
        </p>
      </Container>
    </section>
  );
}
