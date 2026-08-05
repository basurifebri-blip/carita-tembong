import type { StaticImageData } from "next/image";

/**
 * A paragraph is a list of segments so inline highlights survive in data: a
 * plain string renders as text, `{ mark }` renders inside the <Mark> component.
 */
export type StorySegment = string | { mark: string };
export type StoryParagraph = StorySegment[];

export type Story = {
  slug: string;
  /** Small label above the title (e.g. "Keagamaan"). */
  eyebrow: string;
  /** Short category shown on cards and breadcrumbs. */
  category: string;
  title: string;
  /** One or two sentences for cards, metadata, and the listing. */
  summary: string;
  image: StaticImageData;
  imageAlt: string;
  caption: string;
  /** Full narrative, one entry per paragraph. */
  paragraphs: StoryParagraph[];
  /** Optional honest note (e.g. documentation still being gathered). */
  note?: string;
};
