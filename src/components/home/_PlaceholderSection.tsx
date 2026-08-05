import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { BambooPattern } from "@/components/sunda/BambooPattern";
import { cn } from "@/lib/utils";

/**
 * Shared shell for homepage sections whose real content will come from the CMS
 * later. It establishes the correct heading, spacing, and layout rhythm while
 * showing honest, clearly-labelled development placeholders — never invented
 * data (CLAUDE.md §28, §56). Each concrete section (VillageStats,
 * FeaturedStories, …) is a thin wrapper around this.
 */

type Shape = "stats" | "feature" | "cards" | "map" | "news";

type PlaceholderSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  shape: Shape;
  cta?: { label: string; href: string };
  tone?: "surface" | "muted";
};

const ghostBox = "rounded-lg border border-dashed border-soft bg-black/[0.02]";
const ghostLine = "block rounded bg-primary/10";

function GhostCard({ withImage = true }: { withImage?: boolean }) {
  return (
    <div className={cn(ghostBox, "flex flex-col gap-3 p-4")}>
      {withImage && <span className="block aspect-[4/3] w-full rounded-md bg-primary/[0.06]" />}
      <span className={cn(ghostLine, "h-3 w-20")} />
      <span className={cn(ghostLine, "h-4 w-3/4")} />
      <span className={cn(ghostLine, "h-3 w-1/2")} />
    </div>
  );
}

function GhostLayout({ shape }: { shape: Shape }) {
  switch (shape) {
    case "stats":
      return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={cn(ghostBox, "flex flex-col gap-3 p-6")}>
              <span className={cn(ghostLine, "h-9 w-16 bg-primary/[0.08]")} />
              <span className={cn(ghostLine, "h-3 w-24")} />
            </div>
          ))}
        </div>
      );
    case "feature":
      return (
        <div className="grid gap-6 lg:grid-cols-12">
          <div className={cn(ghostBox, "lg:col-span-7")}>
            <span className="block aspect-[16/10] w-full rounded-lg bg-primary/[0.06]" />
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className={cn(ghostBox, "flex gap-4 p-4")}>
                <span className="h-20 w-24 shrink-0 rounded-md bg-primary/[0.06]" />
                <div className="flex flex-1 flex-col gap-2 pt-1">
                  <span className={cn(ghostLine, "h-3 w-16")} />
                  <span className={cn(ghostLine, "h-4 w-full")} />
                  <span className={cn(ghostLine, "h-3 w-2/3")} />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case "map":
      return (
        <div className={cn(ghostBox, "overflow-hidden")}>
          <span className="block aspect-[16/9] w-full bg-primary/[0.05] lg:aspect-[21/9]" />
        </div>
      );
    case "news":
      return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <GhostCard key={i} />
          ))}
        </div>
      );
    case "cards":
    default:
      return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <GhostCard key={i} />
          ))}
        </div>
      );
  }
}

export function PlaceholderSection({
  id,
  eyebrow,
  title,
  description,
  shape,
  cta,
  tone = "surface",
}: PlaceholderSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section relative overflow-hidden",
        tone === "muted" && "bg-surface-muted",
      )}
    >
      <BambooPattern className="text-wood" opacity={0.035} />
      <Container className="relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle eyebrow={eyebrow} title={title} description={description} />
          {cta && (
            <div className="shrink-0">
              <Button href={cta.href} variant="secondary" withArrow>
                {cta.label}
              </Button>
            </div>
          )}
        </div>

        <div className="relative mt-10">
          <GhostLayout shape={shape} />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="rounded-full border border-soft bg-surface/85 px-4 py-1.5 text-xs font-medium text-secondary shadow-card backdrop-blur-sm">
              Segera hadir
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
