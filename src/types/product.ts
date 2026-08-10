import type { StaticImageData } from "next/image";
import type { StoryParagraph } from "@/types/story";

export type ProductPhoto = {
  image: StaticImageData;
  alt: string;
  caption: string;
};

export type ProductCatalogItem = {
  name: string;
  image: StaticImageData;
  alt: string;
  description: string;
  price: string;
};

export type Product = {
  slug: string;
  name: string;
  /** Badge label, e.g. "Produk Unggulan". */
  tag: string;
  /** Named product brand, when the entry represents a specific business. */
  brand?: string;
  /** Short description for cards and metadata. */
  summary: string;
  /** Image for the listing card. */
  cardImage: StaticImageData;
  cardAlt: string;
  /** Detail-page hero image. */
  heroImage: StaticImageData;
  heroAlt: string;
  storyTitle: string;
  /** Narrative with inline highlights (shares the Story segment model). */
  story: StoryParagraph[];
  /** Process chips, first -> last. */
  steps: string[];
  /** Process photos on the detail page. */
  gallery: ProductPhoto[];
  /** Optional profile facts for a named local business or brand. */
  businessFacts?: { label: string; value: string }[];
  /** Optional price information; always presented as subject to change. */
  prices?: { label: string; value: string }[];
  /** Product flavours or variants confirmed by the maker or packaging. */
  variants?: string[];
  /** Individual products shown as a catalogue for a named brand. */
  catalog?: ProductCatalogItem[];
  /**
   * Marketing-partner WhatsApp contact. Present ONLY when verified + consented
   * (CLAUDE.md §56-57); otherwise the detail page shows an honest fallback.
   */
  contact?: { name: string; whatsapp: string };
};
