# CARITA TEMBONG — Documentation

This folder holds the authoritative planning documents for CARITA TEMBONG.
[`CLAUDE.md`](../CLAUDE.md) at the repo root distills the project constitution
from these sources; the full detail lives here.

## Source documents

The original documents (Word / PDF) are preserved verbatim in
[`source/`](./source). When [`CLAUDE.md`](../CLAUDE.md) or task briefs refer to a
`docs/*.md` name, the authoritative content is the matching source document
below:

| Referenced as | Authoritative source |
| --- | --- |
| `docs/project-overview.md` | `source/CARITA TEMBONG.docx` (also summarized in `CLAUDE.md`) |
| `docs/design-system.md` | `source/CARITA TEMBONG Design System.docx` |
| `docs/information-architecture.md` | `source/Carita Tembong Information Architecture.docx` |
| `docs/content-model.md` | `source/CARITA TEMBONG — Content Model.docx` |
| `docs/editorial-guideline.md` | `source/CARITA TEMBONG Editorial Guideline.docx` (+ `.pdf`) |
| `docs/map-architecture.md` | Map rules in `CLAUDE.md` §34–35 + Information Architecture §52–57 + Design System §55–57 |
| Village profile | `source/PROFIL DESA TEMBONG 17 juni 2026.pdf` |

> A `map-architecture.md` does not exist as a standalone source document yet; the
> map decisions are currently spread across the documents noted above. Author a
> dedicated one before the map phase (Phase 5) begins.

## Reference photos

[`reference-photos/`](./reference-photos) contains original documentation
photography of Desa Tembong (nature, curug, village life). These are unsorted,
UUID-named field photos — **verify what each depicts and obtain consent for any
identifiable people before publishing.** Only vetted images are promoted into
`public/`. The homepage hero currently uses one verified landscape frame
(`public/images/hero/tembong-alam.jpg`).

## Working agreement

Do not let code and documentation diverge. When a significant architecture,
content-model, design-system, or map decision changes, update the relevant
document here (and `CLAUDE.md`) in the same change.
