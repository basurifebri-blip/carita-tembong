import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { NewsCard } from "@/components/news/NewsCard";
import { NewsEmptyState } from "@/components/news/NewsEmptyState";
import { getLatestNews } from "@/lib/cms/news";
import { cn } from "@/lib/utils";

type BeritaTerbaruProps = {
  eyebrow: string;
  title: string;
  description: string;
  limit?: number;
  tone?: "surface" | "muted";
  cta?: { label: string; href: string };
};

/**
 * Latest-news section driven by the CMS. When WordPress is connected and has
 * posts, it renders real news cards; otherwise it shows a friendly, intentional
 * empty state so the section always looks finished (CLAUDE.md §30, §60).
 */
export async function BeritaTerbaru({
  eyebrow,
  title,
  description,
  limit = 3,
  tone = "surface",
  cta,
}: BeritaTerbaruProps) {
  const news = await getLatestNews(limit);

  return (
    <section className={cn("section", tone === "muted" && "bg-surface-muted")}>
      <Container>
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

        {news.length === 0 ? (
          <Reveal className="mt-10">
            <NewsEmptyState />
          </Reveal>
        ) : (
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
