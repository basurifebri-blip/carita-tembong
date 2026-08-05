# CARITA TEMBONG

Portal digital **Desa Tembong**, Kecamatan Carita, Kabupaten Pandeglang, Banten.

> **Setiap Sudut Punya Cerita.**

A modern editorial village magazine with a Sundanese cultural soul — bringing
together the village's nature, people, culture, local products, activities, and
health initiatives. Built as a discovery-first digital portrait of Desa Tembong,
not a government template.

## Status — Foundation phase

This repository currently contains the **frontend foundation** only. The
following are implemented and verified (`lint`, `typecheck`, and `build` all pass):

- Next.js (App Router) + TypeScript + Tailwind CSS v4 project setup
- Global design tokens & semantic Tailwind theme (`src/app/globals.css`)
- Typography via `next/font` — **Lora** (display) + **Plus Jakarta Sans** (body)
- Global layout: accessible sticky **Header**, desktop **Navbar** with active
  indicator, keyboard-accessible **MobileMenu**, deep-forest **Footer**
- Reusable UI primitives: `Container`, `Button`, `SectionTitle`, `Badge`, `Breadcrumb`
- Subtle Sundanese components: `SundaDivider`, `BambooPattern` (placeholder motifs)
- Homepage skeleton composing all sections
  - **Fully implemented:** `HeroSection` (real Desa Tembong photo + forest
    overlay), `VillageIntroduction`
  - **Layout-ready placeholders** (clearly marked `[Konten akan terhubung ke CMS]`):
    stats, stories, tourism, products, activities, health, map, news
- Branded `not-found` page

**Not yet built** (intentionally — later phases): WordPress CMS + REST API,
service layer, full interactive Leaflet map, internal detail pages, and real
verified village data.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint (next lint)
npm run typecheck  # tsc --noEmit
```

## Project structure

```text
src/
├── app/            # routes + root layout + global styles
├── components/
│   ├── layout/     # Header, Navbar, MobileMenu, Footer
│   ├── ui/         # Container, Button, SectionTitle, Badge, Breadcrumb
│   ├── sunda/      # SundaDivider, BambooPattern
│   └── home/       # homepage sections
├── config/         # site.ts, navigation.ts (single source of truth)
├── lib/            # small utilities
├── types/          # (reserved for content types)
├── styles/         # (reserved)
└── data/           # (reserved)
```

## Documentation (source of truth)

Design and content decisions are governed by [`CLAUDE.md`](./CLAUDE.md) and the
original planning documents in [`docs/`](./docs) (design system, information
architecture, content model, editorial guideline, village profile). **Do not**
introduce architecture, colors, content models, navigation, or visual directions
that conflict with them.

## Design language (implemented)

- **Palette — "Rimba & Kertas":** Deep Pine Green (brand + CTA) · Warm Clay
  (cultural accent) · Muted Gold (decorative) · clean warm paper (surface) ·
  soft paper (surface-muted) · warm near-black ink (text). A cleaner,
  higher-contrast refinement of the original earthy palette. Exposed as semantic
  Tailwind utilities (`bg-brand`, `text-primary`, `text-cultural`, `border-soft`,
  …) — components never repeat raw hex.
- **Type scale:** fluid editorial scale (`clamp`) matching the design system.
- **Layout:** 1280px content / 720px reading measure / 1440px wide; section
  rhythm 64 → 96 → 128px.

## Content & data integrity

Never fabricate village data — names, statistics, prices, contacts, coordinates,
government roles, or health outcomes. Where data is unavailable, use explicit
placeholders (e.g. `[Alamat resmi desa]`). Real content will be verified with the
village and delivered through the CMS.

## Recommended next step

Build the **Kenali Tembong** page (`/kenali-tembong`) using the existing UI
primitives and section rhythm, alongside a small set of content types in
`src/types/`. Then set up the WordPress CMS service layer in `src/lib/cms/`
before wiring the homepage placeholders to live data.
