import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { NewsCard } from "@/components/news/NewsCard";
import { NewsEmptyState } from "@/components/news/NewsEmptyState";
import { getAllNews } from "@/lib/cms/news";
import type { NewsArticle } from "@/types/cms";

type NewsArchiveProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

/**
 * Full news index for /kabar-tembong. Renders every published article (newest
 * first) as a grid of cards, or a friendly empty state until the CMS has posts.
 */
export async function NewsArchive({
  eyebrow,
  title,
  description,
}: NewsArchiveProps) {
  let news: NewsArticle[];

  try {
    news = await getAllNews();
  } catch (error) {
    // Keep production builds deployable when WordPress is temporarily slow.
    // Runtime failures still bubble up so ISR can preserve its last good page.
    if (process.env.NEXT_PHASE !== "phase-production-build") throw error;
    news = [];
  }

  return (
    <section className="section">
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />

        {news.length === 0 ? (
          <Reveal className="mt-10">
            <NewsEmptyState message="Belum ada kabar yang dipublikasikan. Kabar Desa Tembong akan muncul di sini secara otomatis setelah portal terhubung dengan CMS desa." />
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
