# CLAUDE.md — CARITA TEMBONG

> Project constitution and source of truth. Read this together with the
> documents in [`docs/`](./docs) before writing code. Do not introduce
> architecture, colors, content models, navigation, or visual directions that
> conflict with these documents.

## 1. Project Identity

**Project Name:** CARITA TEMBONG
**Project Type:** Village Information Portal · Digital Storytelling Platform · Local Product Showcase · Tourism Discovery · Digital Village Archive.

CARITA TEMBONG adalah portal digital **Desa Tembong, Kecamatan Carita, Kabupaten Pandeglang, Banten.**

The website is a digital space that brings together: informasi desa, cerita masyarakat, budaya lokal, potensi wisata, UMKM, produk lokal, kegiatan masyarakat, kesehatan, peta desa, dan dokumentasi perkembangan desa.

CARITA TEMBONG is **not** merely a village administration website.

- **Core idea:** Data + Storytelling + Map + Local Products
- **Tagline:** _Setiap Sudut Punya Cerita._

## 2. Main Product Philosophy

The experience should feel like a **modern editorial village magazine with a Sundanese cultural soul**. Visitors should feel they are getting to know Desa Tembong closely — not reading government data.

Experience priorities: mengenal desa · melihat manusia dan cerita di balik desa · menemukan budaya · menjelajahi alam · mengenal produk masyarakat · menemukan lokasi · mengikuti perkembangan desa.

## 3. Primary Language

- Primary: **Bahasa Indonesia**
- **Bahasa Sunda** is used as a cultural accent only (e.g. _Wilujeng Sumping_, _Carita ti Tembong_, _Urang Tembong_).
- Do not use Sundanese for the whole interface. Never let Sundanese terms in the main navigation reduce usability.

## 4. Technology Stack

Next.js · TypeScript · Tailwind CSS · Headless WordPress · WordPress REST API · Leaflet · OpenStreetMap.

Deployment: GitHub + Vercel. The WordPress CMS may use separate hosting.

## 5. General Development Rules

**Always:** use TypeScript; reusable components; separate data from presentation and content from components; semantic HTML; prioritize accessibility; mobile-first; optimize images; minimize unnecessary JavaScript; keep code simple and readable; avoid premature abstraction.

**Do not:** hardcode duplicated data; create giant page components; mix API logic directly inside UI components; create unnecessary dependencies; introduce complex architecture without justification; change the design system arbitrarily; create new color values when existing tokens suffice.

## 6. Architecture Principle

Separation of concerns: `CONTENT → CMS / DATA → SERVICE / API LAYER → COMPONENTS → PAGES`.

Pages compose components. Components must not own raw content that belongs in the CMS or in structured data.

## 7. Folder Structure

```text
carita-tembong/
├── CLAUDE.md
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── docs/
├── public/
│   ├── images/ (village, hero, wisata, budaya, umkm/{emping,opak}, kesehatan, kegiatan, pemerintahan, stories)
│   ├── icons/ (map, categories, social)
│   ├── ornaments/ (sunda, textures)
│   └── logos/
└── src/
    ├── app/
    ├── components/ (layout, ui, sunda, home, story, umkm, tourism, activities, health, news, map)
    ├── config/
    ├── lib/
    ├── types/
    ├── styles/
    └── data/
```

## 8. App Routes

```text
/            /kenali-tembong
/jelajahi-tembong            /jelajahi-tembong/[slug]
/cerita-budaya              /cerita-budaya/[slug]
/potensi-desa
/potensi-desa/umkm          /potensi-desa/umkm/[slug]
/potensi-desa/pengrajin     /potensi-desa/pengrajin/[slug]
/potensi-desa/produk        /potensi-desa/produk/[slug]
/tembong-sehat              /tembong-sehat/kajedak
/kegiatan                   /kegiatan/[slug]
/kabar-tembong              /kabar-tembong/[slug]
/peta
```

Do not introduce route structures outside this model without a clear requirement.

## 9. Main Navigation

`Beranda · Kenali Tembong · Jelajahi Tembong · Cerita & Budaya · Potensi Desa · Tembong Sehat · Kabar Tembong`

"Peta" is presented as a prominent CTA button. Navigation configuration lives in `src/config/navigation.ts` — do not duplicate navigation arrays across components.

## 10. Page Composition Rule

Avoid large `page.tsx` files. Each major section lives in its own component. Example homepage composition:

```tsx
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VillageIntroduction />
      <VillageStats />
      <FeaturedStories />
      <FeaturedTourism />
      <FeaturedProducts />
      <VillageActivities />
      <HealthHighlight />
      <MapPreview />
      <LatestNews />
    </>
  );
}
```

## 11–13. Components

Domain-based organization: `layout · ui · sunda · home · story · umkm · tourism · activities · health · news · map`.

Core reusable UI: `Button · Card · Badge · SectionTitle · Breadcrumb · ImageCard · Quote · Container · PageHero · SectionWrapper`. Do not recreate buttons/badges/headings/cards independently on each page.

Sundanese decoration components live in `src/components/sunda/` (`SundaDivider`, `BambooPattern`, and later `SundaFrame`, `AksaraAccent`, `TraditionalQuote`, `SundaSectionLabel`). Ornaments must remain subtle, never sacrifice readability, and must not appear on every card. Cultural elements support content — they do not dominate it.

## 14. Visual Direction

Core style: **Traditional Sundanese-Banten × Modern Editorial Design**. The site should feel warm, natural, grounded, authentic, editorial, elegant, human, calm, culturally rooted.

Avoid: generic government portal style · corporate blue · SaaS dashboard appearance · excessive gradients · neon colors · excessive glassmorphism · over-decorative cultural visuals · generic marketplace layouts.

## 15. Design Palette

> **Palette update (2026-07-31, by project owner):** the original earthy palette
> was refined to **"Rimba & Kertas"** — a cleaner, higher-contrast editorial
> direction with a single warm accent. This supersedes the palette in the
> design-system source document. The cultural intent (warm, natural, editorial,
> not corporate) is unchanged.

Active palette (implemented in `src/app/globals.css` via Tailwind v4 `@theme`):

```ts
export const colors = {
  brand: "#2F5A4C",       // deep pine — identity, headings, navbar, footer, CTA
  brandStrong: "#274C40", // hover/pressed
  brandDeep: "#20423A",   // footer base, hero overlay
  cultural: "#C0603A",    // warm clay — eyebrow, badges, highlights
  decorative: "#BE9A57",  // muted gold — thin dividers/ornament only
  wood: "#7A5C45",        // natural editorial accents
  surface: "#F7F4EC",     // clean warm paper — primary background
  surfaceMuted: "#EDE8DB",// secondary background
  primary: "#211F1B",     // near-black warm ink — body text
  secondary: "#67615A",   // softened ink — metadata/support
};
```

Interactive/CTA colour is intentionally the same pine green as `brand` (fewer
competing hues). Do not create random colors without design justification. See
[`docs/`](./docs) for full color roles, ratios, and semantic Tailwind naming
(`bg-brand`, `bg-surface`, `text-primary`, `text-cultural`, `border-soft`, …).

## 16. Typography

Two personalities. **Display / Editorial** (serif, preferred **Lora**) for hero heading, storytelling titles, cultural headings, featured quotes. **UI / Body** (sans-serif, preferred **Plus Jakarta Sans**) for navigation, body text, forms, labels, buttons, metadata. Do not use decorative fonts for body text. Loaded via `next/font`.

## 17. Spacing Philosophy

Generous whitespace; editorial and calm, not dashboard-dense. Default section pattern: `Section Label → Headline → Supporting Text → Content → CTA`. Vertical rhythm stays consistent across pages.

## 18–19. Photography & Images

Photography is a major identity element — prioritize original documentation from Desa Tembong (landscape, curug, mata air, kebun, melinjo, pengrajin, proses emping/opak, pencak silat, pengajian, Jumat Bersih, Posyandu, KAJEDAK, masyarakat, tokoh, pemerintahan). Images should feel documentary, not commercial. Do not rely on generic stock images.

Use Next.js Image: always define alt text, optimize size, use responsive images, maintain consistent card aspect ratios. Suggested ratios — Hero 16:7/16:8 · Story 4:3 · Cards 4:3 · Product 1:1 · Portrait 3:4 · News 16:10.

## 20–35. Content Architecture

Core entities: `Village · Story · UMKM · Artisan · Product · Collector · Destination · Activity · News · Facility · HealthProgram · MapPoint`. Do not store all content as generic articles.

**UMKM chain:** `Artisan/Pengrajin → Product → Collector/Mitra Pemasaran → Customer`. Not every artisan sells directly. Public labels prefer **"Kontak Pemesanan"** / **"Mitra Pemasaran"** over "pengepul". Product pages are **story first, commerce second** — never marketplace-style. Stories are a first-class, editorial content type (not ordinary blog posts). News lives in the CMS and surfaces automatically. Activity and News are distinct (`Agenda → Activity → Documentation → News`). Health claims must be verified. Tourism destinations carry an honest visit status (`open · limited_access · potential · under_development`). The interactive map uses Leaflet + OpenStreetMap with filterable, structured markers (never hardcoded in JSX).

Full field definitions live in the Content Model document in [`docs/`](./docs).

## 36–41. CMS

Headless WordPress backend → REST API → service layer → Next.js → public website. CMS-related code lives in `src/lib/cms/` (`wordpress.ts`, `news.ts`, `stories.ts`, …). Components never call WordPress directly — prefer `const stories = await getStories()`. Fail gracefully with sensible empty states; never expose stack traces, WordPress/DB errors, or credentials. Roles: Administrator · Editor Desa · Contributor. Publishing workflow verifies demography, health statistics, government personnel, achievements, historical facts, legal status, and program recognition before publish.

## 42–44. Homepage

Homepage is a **discovery/navigation layer**, not a full content dump. Priority order: Hero · Village Introduction · Village Statistics · Featured Stories · Featured Tourism · Local Products · Village Culture · Health Highlight · Activities · Interactive Map · Latest News. Storytelling and human/landscape content rank above administrative content.

Hero direction — Eyebrow: _Wilujeng Sumping di Tembong_ · Headline: _Setiap Sudut Punya Cerita_ · CTAs: _Jelajahi Tembong_, _Kenali Desa_.

## 45–47. Accessibility, Responsive, Performance

Provide semantic heading order, alt text, focus states, keyboard navigation, accessible contrast, labelled forms, meaningful button text (prefer "Baca Cerita Pengrajin" over "Read More"). Mobile is a priority — recompose sections, do not shrink desktop. Default to Server Components; add `"use client"` only for state, browser APIs, event handlers, interactive filters, maps, carousels. Dynamically import heavy map functionality.

## 48–49. SEO & URLs

Each public page has title, description, canonical, Open Graph; structured data where appropriate (Article, NewsArticle, LocalBusiness, TouristAttraction, Organization, BreadcrumbList) — never misleading schema. URLs are lowercase kebab-case and readable.

## 50–55. Conventions

Components `PascalCase.tsx`; utilities `camelCase.ts`; types `story.ts` etc. Extract a reusable component when a visual pattern appears 3+ times — but prefer clarity over abstraction. Prefer URL state / server data / local React state before any global state library. Animations are calm and natural (fade, slight translate, subtle image zoom, gentle hover, staggered cards); respect `prefers-reduced-motion`. Sundanese ornament/pattern opacity generally 3–10%; never patterned backgrounds behind long text.

## 56–57. Data Integrity & Privacy

**Never invent** names, demographic values, addresses, contact info, coordinates, government roles, product prices, health outcomes, or historical claims. If missing, use an explicit `TODO`/placeholder such as `[Data jumlah penduduk belum tersedia]` — never a believable fake number. Never expose private data; business contacts are public only with consent; do not publish private home coordinates.

## 58–62. Commerce, States

The website does not process payments. Flow: `View Product → Read Story → View Artisan → Contact Marketing Partner → WhatsApp`. WhatsApp link generation lives in `src/lib/whatsapp.ts`. Provide friendly empty states, human-readable errors, and subtle loading skeletons.

## 63–71. Process & Standards

Keep code and docs in sync — update `docs/` on significant architecture changes. Build order: **Phase 1 Foundation** (Next.js, Tailwind, tokens, typography, layout, navbar, footer) → **Phase 2 Homepage** → **Phase 3 Core Pages** → **Phase 4 CMS** → **Phase 5 Map** → **Phase 6 QA**. Complete each domain before moving on. Before finishing any task, verify TypeScript, lint, build, responsiveness, duplication, unused imports, accessibility, and links — never report completion if the build fails.

**Decision priority when ambiguous:** factual accuracy → usability → content clarity → cultural authenticity → accessibility → performance → visual aesthetics → developer convenience.

Every page should support at least one core intent: **Kenali · Jelajahi · Dengarkan · Temukan · Ikuti.**

**Final standard:** CARITA TEMBONG should not feel like a government template populated with village data. It should feel like a living digital portrait of Desa Tembong. Every design and engineering decision serves that objective.
```

---

## Current build status (Foundation phase)

The frontend foundation is implemented: design tokens, typography, global layout,
reusable UI primitives, header/navigation, footer, homepage skeleton, and a final
hero. CMS (WordPress REST), the full interactive map, and real data are **not yet**
wired up. See [`README.md`](./README.md) for what exists and the recommended next step.
