import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Mark } from "@/components/ui/Mark";
import { villageProfile } from "@/data/village";
import type { FactItem } from "@/types/village";

/**
 * "Sekilas Desa" — a factual overview of Desa Tembong plus its geography,
 * boundaries, distances, and land use. Every figure comes from villageProfile
 * (the official 2026 profile); the narrative only restates those facts.
 */

function FactList({ title, items }: { title: string; items: FactItem[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-cultural">
        {title}
      </h3>
      <dl className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-baseline justify-between gap-4 border-b border-soft pb-3"
          >
            <dt className="text-sm text-secondary">{item.label}</dt>
            <dd className="text-sm font-semibold text-primary">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function SekilasDesa() {
  const { geography, boundaries, orbitasi, landUse } = villageProfile;

  const geografiFacts: FactItem[] = [
    { label: "Ketinggian", value: geography.elevation },
    { label: "Topografi", value: "Dataran tinggi" },
    { label: "Suhu udara", value: geography.temperature },
    { label: "Curah hujan", value: geography.rainfall },
  ];

  return (
    <section className="section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle
              eyebrow="Sekilas Desa"
              title="Desa di Dataran Tinggi Carita"
            />
            <div className="mt-6 flex flex-col gap-4 type-body text-secondary">
              <p>
                Desa Tembong berada di Kecamatan Carita, Kabupaten Pandeglang,
                pada ketinggian sekitar 76 meter di atas permukaan laut dengan
                topografi <Mark>dataran tinggi</Mark> dan udara sejuk berkisar
                19-23 °C. Dari total 340 hektare wilayahnya, sebagian besar
                berupa perkebunan dan lahan pertanian, sementara permukiman warga
                menempati area yang lebih kecil.
              </p>
              <p>
                Desa ini dihuni sekitar <Mark>1.825 jiwa</Mark> dalam{" "}
                <Mark>526 kepala keluarga</Mark> yang tersebar di 10 RT dan 4 RW.
                Letaknya berdekatan dengan pusat kecamatan, hanya sekitar satu
                kilometer, dan sebagian besar warga bekerja sebagai petani, buruh
                tani, pedagang, serta pengrajin.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-soft bg-surface-muted/60 p-6 sm:p-8">
            <FactList title="Kondisi Geografis" items={geografiFacts} />
          </div>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <FactList
            title="Batas Wilayah"
            items={boundaries.map((b) => ({ label: b.direction, value: b.area }))}
          />
          <FactList title="Jarak dari Pusat" items={orbitasi} />
          <FactList title="Penggunaan Lahan" items={landUse} />
        </div>

        <p className="mt-10 text-sm text-secondary/80">
          Sumber: {villageProfile.source}.
        </p>
      </Container>
    </section>
  );
}
