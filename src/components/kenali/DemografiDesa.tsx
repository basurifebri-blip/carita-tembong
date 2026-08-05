import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { BarChart } from "@/components/ui/BarChart";
import { villageProfile } from "@/data/village";

/**
 * Demographics of Desa Tembong shown as animated bars (age distribution and
 * educational attainment). All figures come from the official village profile.
 */
export function DemografiDesa() {
  const { ageGroups, education, source } = villageProfile;

  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="Demografi"
          title="Wajah Penduduk Tembong"
          description="Dari 1.825 jiwa, penduduk Tembong tersebar cukup merata di semua kelompok usia, dengan jumlah laki-laki dan perempuan yang nyaris seimbang (913 dan 912)."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="text-sm font-semibold text-brand">
              Kelompok Usia (jiwa)
            </h3>
            <BarChart className="mt-5" items={ageGroups} />
          </Reveal>
          <Reveal delay={80}>
            <h3 className="text-sm font-semibold text-brand">
              Tingkat Pendidikan (jiwa)
            </h3>
            <BarChart className="mt-5" items={education} color="bg-cultural" />
          </Reveal>
        </div>
        <p className="mt-10 text-sm text-secondary/80">Sumber: {source}.</p>
      </Container>
    </section>
  );
}
