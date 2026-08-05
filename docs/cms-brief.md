# CARITA TEMBONG — Brief CMS

> Dokumen acuan untuk fase CMS. Turunan dari [`CLAUDE.md`](../CLAUDE.md) §4, §6,
> §20–35, §36–41, §56–57. Bila dokumen ini dan `CLAUDE.md` berbeda, `CLAUDE.md`
> menang — perbarui keduanya bersamaan.

## Keputusan (2026-08-01, oleh project owner)

1. **Teknologi:** **Headless WordPress** → WordPress REST API → service layer
   (`src/lib/cms/`) → komponen → halaman Next.js. Menegaskan konstitusi; **bukan**
   CMS lain dan **bukan** admin panel custom.
2. **Cakupan awal:** **bertahap**. Mulai **Kabar Tembong** (kode sudah ~90% siap),
   lalu **Cerita & Budaya**, baru melebar ke entity lain.

## 1. Tujuan

Memberi perangkat desa & kontributor **non-teknis** ruang kerja redaksi untuk
menerbitkan dan memutakhirkan seluruh isi portal **tanpa menyentuh kode**, sambil
website tetap cepat, statis, dan aman. CMS = sumber konten; Next.js = penyajian.

## 2. Prinsip (dari konstitusi)

- **Pemisahan tegas:** `CONTENT → CMS → SERVICE/API → COMPONENTS → PAGES`.
  Komponen tidak pernah memanggil WordPress langsung — selalu lewat `src/lib/cms/`.
- **Bukan artikel generik.** Tiap entity punya struktur field sendiri.
- **Story first, commerce second.** Halaman produk berbasis cerita, bukan marketplace.
- **Integritas data mutlak.** Nama, demografi, harga, kontak, koordinat, jabatan,
  klaim kesehatan **tidak boleh direkayasa** — belum ada → placeholder eksplisit.
- **Gagal dengan anggun.** CMS mati/kosong → website tetap render empty-state;
  tidak pernah bocorkan error/stack trace/kredensial WordPress.

## 3. Arsitektur

```
WordPress (headless, hosting terpisah)
  └── Custom Post Types + Custom Fields (ACF) + Taksonomi
       └── WordPress REST API  (…/wp-json)
            └── src/lib/cms/   ← service layer: fetch, cache (ISR), mapping
                 └── src/types ← tipe presentasi (bukan payload WP mentah)
                      └── components → pages (Next.js)
```

WordPress hanya editor + API. Tampilan publik 100% Next.js. Konten disegarkan
otomatis lewat ISR (`revalidate`, default 300 dtk) tanpa re-deploy. Lapisan CMS
**opsional**: tanpa `WORDPRESS_API_URL`, service mengembalikan hasil kosong dan
website memakai placeholder bawaan (build tetap statis).

## 4. Pemetaan Content Model → struktur CMS

| Entity | Bentuk di WordPress | Field kunci (ACF) | Relasi |
|---|---|---|---|
| **Village / Profil Desa** | Options Page (tunggal) | sejarah, visi-misi, batas wilayah, statistik | — |
| **Story / Cerita** | CPT `cerita` | ringkasan, isi, narasumber, galeri | → pengrajin/wisata |
| **Destination / Jelajahi** | CPT `wisata` | deskripsi, **status kunjungan**, akses, koordinat | → titik peta |
| **UMKM** | CPT `umkm` | profil usaha, kontak, foto | → produk, pengrajin |
| **Artisan / Pengrajin** | CPT `pengrajin` | profil, keahlian, proses | → produk |
| **Product / Produk** | CPT `produk` | cerita produk, harga\*, foto 1:1 | → pengrajin, mitra |
| **Collector / Mitra Pemasaran** | CPT `mitra` | nama, wilayah, WhatsApp | → produk |
| **Activity / Kegiatan** | CPT `kegiatan` | tanggal, agenda, dokumentasi | — |
| **News / Kabar** | `posts` bawaan → nanti CPT `berita`\*\* | kategori, kutipan, gambar | — |
| **Facility / Fasilitas** | CPT `fasilitas` | jenis, lokasi, koordinat | → titik peta |
| **HealthProgram / Tembong Sehat** | CPT `program-sehat` | deskripsi, **status verifikasi**, jadwal | — |
| **MapPoint / Titik Peta** | koordinat sbg field di wisata/umkm/fasilitas, **diagregasi** untuk `/peta` | lat, lng, kategori, ikon | mengikat semua |

\* Harga opsional & story-first. \*\* Slug news sudah didukung env `WORDPRESS_NEWS_TYPE`.

**Enum terstruktur (bukan teks bebas):** status kunjungan wisata
(`open · limited_access · potential · under_development`), kategori cerita,
kategori produk, kategori berita.

## 5. Peran & alur editorial (konstitusi §41)

- **Administrator** — pengelola teknis: struktur, plugin, user, publish apa saja.
- **Editor Desa** — kelola & terbitkan konten desa.
- **Contributor** — kirim draf, **tidak** bisa publish.

**Alur:** `Draf → Tinjau → Verifikasi fakta → Terbit`. Verifikasi wajib untuk
demografi, statistik kesehatan, personel pemerintahan, capaian, fakta sejarah,
status legal, pengakuan program.

## 6. Media & integritas data

- Foto dokumenter asli Desa Tembong = identitas. CMS jadi pustaka media terpusat,
  **alt text wajib**, **consent** untuk wajah yang dapat dikenali.
- Rasio kartu (Hero 16:7 · Cerita/Card 4:3 · Produk 1:1 · Potret 3:4 · Berita
  16:10) diarahkan lewat panduan unggah; `next/image` optimasi ulang.
- Koordinat rumah pribadi tidak dipublikasikan; kontak bisnis publik hanya dengan izin.

## 7. Rencana bertahap

| Fase | Isi | Status kode |
|---|---|---|
| **1. Backend** | WordPress headless, REST aktif, ACF, peran & user, REST read-only publik | belum |
| **2. Pilot Kabar** | `getLatestNews`/`getAllNews`/`getNewsBySlug` + halaman daftar & detail `/kabar-tembong` + skema `NewsArticle`/`BreadcrumbList` | **sisi web selesai** — tinggal sambung WordPress |
| **3. Cerita** | CPT `cerita` + `src/lib/cms/stories.ts` + `src/types/story.ts` + halaman | belum |
| **4. Perluasan** | UMKM/Pengrajin/Produk/Mitra/Wisata/Kegiatan/Kesehatan | belum |
| **5. Peta** | Agregasi koordinat → marker `/peta` (Leaflet) | belum |
| **6. QA + panduan editor** | Manual singkat Bahasa Indonesia untuk Editor Desa | belum |

## 8. Detail teknis tahap pertama

### 8a. Kabar Tembong (pilot end-to-end)

Sudah ada: [`src/lib/cms/news.ts`](../src/lib/cms/news.ts) (`getLatestNews`),
[`src/lib/cms/map.ts`](../src/lib/cms/map.ts) (`mapWpPost` → `MappedPost`),
[`src/types/cms.ts`](../src/types/cms.ts) (`NewsArticle`). Pola fallback & ISR
sudah benar. **Mulai dengan `posts` bawaan WordPress** (paling cepat; migrasi ke
CPT `berita` belakangan lewat env — tanpa ubah kode).

Yang perlu ditambahkan:

- `getAllNews()` — daftar berita untuk halaman `/kabar-tembong` (paginasi).
- `getNewsBySlug(slug)` — `/wp/v2/{type}?slug=…&_embed` untuk `/kabar-tembong/[slug]`.
- Field isi lengkap (`content.rendered`) pada tipe artikel detail (saat ini map
  hanya mengambil `excerpt`).
- Halaman `app/kabar-tembong/page.tsx` + `app/kabar-tembong/[slug]/page.tsx`
  (metadata SEO + `NewsArticle`/`BreadcrumbList` schema).
- Set `WORDPRESS_API_URL` di `.env.local`.

### 8b. Cerita & Budaya

- **WordPress:** CPT `cerita` (`show_in_rest: true`, `rest_base: cerita`,
  dukung `excerpt` + featured image), taksonomi `kategori_cerita`, field ACF
  `narasumber` & `galeri` (semua `show_in_rest: true`).
- **Kode:** `src/types/story.ts` (tipe presentasi `Story`), `src/lib/cms/stories.ts`
  (`getFeaturedStories`, `getStories`, `getStoryBySlug`) memakai kembali
  `mapWpPost` sebagai basis + field ACF. Halaman `/cerita-budaya` &
  `/cerita-budaya/[slug]`. Sambungkan placeholder `FeaturedStories` di homepage.

## 9. Setup WordPress (checklist Fase 1)

> Panduan lengkap langkah-demi-langkah ada di
> [`cms-wordpress-setup.md`](./cms-wordpress-setup.md).

1. Instal WordPress (lokal dulu untuk dev, mis. LocalWP/Docker; lalu hosting).
2. Plugin: **Advanced Custom Fields** (custom fields), **Custom Post Type UI**
   (atau daftar CPT via code), pastikan ACF field `show_in_rest`.
3. Aktifkan permalink "Post name" (REST butuh pretty permalink).
4. Buat peran **Editor Desa** & **Contributor** (plugin role editor / code).
5. Kunci REST agar publik **read-only**; tulis butuh Application Password.
6. Set featured image + kategori pada beberapa post contoh untuk uji pilot.

## 10. Yang perlu disiapkan project owner

- **Hosting WordPress** (PHP + MySQL) terpisah dari Vercel — untuk dev bisa lokal dulu.
- **Domain CMS** (mis. `cms.desatembong.id`).
- **Konten prioritas terverifikasi** dari pihak desa untuk mengisi pilot Kabar & Cerita.
