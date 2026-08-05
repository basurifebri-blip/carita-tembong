type NewsEmptyStateProps = {
  /** Overrides the default message. */
  message?: string;
};

const DEFAULT_MESSAGE =
  "Belum ada kabar terbaru yang dipublikasikan. Berita dan kabar Desa Tembong " +
  "akan muncul di sini secara otomatis setelah portal terhubung dengan CMS desa.";

/**
 * Friendly, intentional empty state for news sections (CLAUDE.md §30, §60), so a
 * section without CMS data still looks finished. Shared by the homepage teaser
 * (BeritaTerbaru) and the full archive (NewsArchive).
 */
export function NewsEmptyState({ message = DEFAULT_MESSAGE }: NewsEmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-xl border border-dashed border-soft bg-surface px-6 py-16 text-center">
      <span
        aria-hidden="true"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-muted text-cultural"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 5h13v14H5a1 1 0 0 1-1-1V5Z" />
          <path d="M17 8h2.5a.5.5 0 0 1 .5.5V18a1 1 0 0 1-1 1" />
          <path d="M7.5 9h6M7.5 12.5h6M7.5 16h3.5" />
        </svg>
      </span>
      <p className="max-w-md text-secondary">{message}</p>
    </div>
  );
}
