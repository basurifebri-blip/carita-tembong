import { Container } from "@/components/ui/Container";

/** Loading skeleton while the news archive fetches from the CMS. */
export default function Loading() {
  return (
    <div className="section">
      <Container>
        <div className="h-3 w-28 animate-pulse rounded bg-primary/10" />
        <div className="mt-4 h-9 w-2/3 max-w-md animate-pulse rounded bg-primary/10" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-soft bg-surface"
            >
              <div className="aspect-[16/10] w-full animate-pulse bg-primary/[0.06]" />
              <div className="flex flex-col gap-3 p-5">
                <div className="h-3 w-20 animate-pulse rounded bg-primary/10" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-primary/10" />
                <div className="h-3 w-1/2 animate-pulse rounded bg-primary/10" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
