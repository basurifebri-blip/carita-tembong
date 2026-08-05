import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { BarChart } from "@/components/ui/BarChart";
import { villageProfile } from "@/data/village";

/**
 * Basic services: household water sources (animated bars) and infrastructure
 * coverage. Figures from the official village profile.
 */
export function InfrastrukturDesa() {
  const { waterSources, infrastructure, source } = villageProfile;

  return (
    <section className="section bg-surface-muted">
      <Container>
        <SectionTitle
          eyebrow="Layanan Dasar"
          title="Air, Listrik, dan Jalan Desa"
          description="Sebagian besar rumah tangga masih memanfaatkan air sungai dan air tanah, sementara jaringan listrik serta jalan telah menjangkau hampir seluruh warga."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="text-sm font-semibold text-brand">
              Sumber Air Rumah Tangga (rumah)
            </h3>
            <BarChart className="mt-5" items={waterSources} />
          </Reveal>
          <Reveal delay={80}>
            <h3 className="text-sm font-semibold text-brand">Infrastruktur</h3>
            <dl className="mt-5 flex flex-col gap-3">
              {infrastructure.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 border-b border-soft pb-3"
                >
                  <dt className="text-sm text-secondary">{item.label}</dt>
                  <dd className="text-sm font-semibold text-primary tabular-nums">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <p className="mt-10 text-sm text-secondary/80">Sumber: {source}.</p>
      </Container>
    </section>
  );
}
