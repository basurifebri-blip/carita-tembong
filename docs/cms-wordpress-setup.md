# CARITA TEMBONG — Panduan Setup WordPress (Headless)

> Panduan langkah-demi-langkah menyiapkan backend WordPress untuk portal ini.
> Pendamping [`cms-brief.md`](./cms-brief.md). Ditulis mengikuti **persis** yang
> diharapkan kode di [`src/lib/cms/`](../src/lib/cms) — endpoint, nama env, dan
> field yang dipetakan. Ikuti **Bagian A** untuk melihat Kabar hidup secepatnya;
> Bagian B–E untuk melengkapi peran, tipe konten, dan keamanan.

Yang sudah disiapkan kode (tidak perlu diubah):

- Fetch REST: `GET /wp/v2/{type}?...&_embed` (list, `?slug=` detail).
- `{type}` = env `WORDPRESS_NEWS_TYPE` — **default `posts`** (bawaan WordPress).
- Field yang dibaca: `title.rendered`, `excerpt.rendered`, `content.rendered`,
  `date`, `slug`, `id`; dari `_embed`: featured image (`source_url`, `alt_text`)
  & nama kategori pertama (`wp:term`).
- CMS **opsional & aman**: tanpa `WORDPRESS_API_URL`, website tetap jalan dengan
  empty-state. Begitu env diisi dan ada post, Kabar terisi otomatis.

---

## Bagian A — Jalur cepat: Kabar hidup dengan `posts` bawaan

Tujuan: dari nol sampai melihat berita asli di `/kabar-tembong` dalam ±30 menit.
Belum perlu plugin, custom post type, atau ACF.

### A1. Jalankan WordPress lokal

Pilih salah satu (untuk **pengembangan** di Windows 11 Anda):

| Opsi | Cocok untuk | Catatan |
|---|---|---|
| **Studio by WordPress.com** | Paling mudah, gratis | GUI, sekali klik, beri URL `http://localhost:PORT`. Rekomendasi. |
| **Local (by WP Engine)** | GUI populer | Beri URL `http://namasitus.local`. Pakai link **http** (bukan https) agar Node tidak menolak sertifikat self-signed. |
| **Docker** | Jika sudah pakai Docker Desktop | `wordpress` + `mysql`/`mariadb` image via `docker compose`. |

Setelah situs jalan, selesaikan wizard instalasi WordPress (judul situs, akun
admin). Catat URL dasarnya, mis. `http://localhost:8881`.

> **CORS/HTTPS:** tidak perlu setel CORS — website mengambil data dari **server**
> (Server Component), bukan dari browser. Untuk lokal, pakai URL `http://` agar
> tidak kena masalah sertifikat.

### A2. Aktifkan permalink "Post name" (wajib)

WP Admin → **Settings → Permalinks → Post name → Save Changes**.

Ini membuat slug bersih dan mengaktifkan rute REST yang rapi. Melewatkan langkah
ini adalah penyebab #1 error `rest_no_route`/404.

### A3. Buat kategori & beberapa berita contoh

1. **Posts → Categories** — buat mis. `Gotong Royong`, `Kesehatan`, `UMKM`.
2. **Posts → Add New** — buat 2–3 berita, masing-masing:
   - **Title** — judul kabar.
   - **Content** — isi (paragraf, subjudul, gambar bila perlu). Ini yang tampil
     di halaman detail dengan gaya `.article-body`.
   - **Excerpt** (panel *Excerpt*; kalau tak muncul, aktifkan via *Screen
     Options* / *Options → Excerpt*) — ringkasan 1–2 kalimat. Tampil di kartu &
     jadi meta description. Kalau kosong, WordPress membuat ringkasan otomatis.
   - **Featured image** (*Set featured image*) — gambar kartu & hero detail.
     Selalu isi **Alt text** gambar (dipakai sebagai alt aksesibel).
   - **Category** — pilih satu (nama kategori pertama tampil sebagai label).
   - **Publish** (bukan draft — REST publik hanya menampilkan yang published).

### A4. Sambungkan Next.js ke WordPress

Buat/edit `.env.local` di root proyek (salin dari `.env.example`):

```bash
# Base REST URL = URL situs + /wp-json  (tanpa trailing slash; kode juga merapikannya)
WORDPRESS_API_URL=http://localhost:8881/wp-json

# Kosongkan untuk pilot → otomatis pakai "posts" bawaan
WORDPRESS_NEWS_TYPE=

# Turunkan sementara saat menguji agar perubahan cepat terlihat (detik)
CMS_REVALIDATE_SECONDS=15
```

Ganti `http://localhost:8881` dengan URL situs Anda dari A1.

> **Penting:** perubahan `.env.local` hanya terbaca saat server dev **start**.
> Hentikan `npm run dev` lalu jalankan lagi.

### A5. Uji endpoint REST langsung (opsional tapi disarankan)

Buka di browser:

- `http://localhost:8881/wp-json/` → muncul JSON = REST hidup.
- `http://localhost:8881/wp-json/wp/v2/posts?_embed` → array berisi post Anda.

Kalau dua ini benar, website pasti bisa membacanya.

### A6. Lihat Kabar hidup

```bash
npm run dev
```

Buka `http://localhost:3000/kabar-tembong` (atau port dev Anda):

- Daftar berita muncul sebagai kartu (gambar, kategori, tanggal, judul, ringkasan).
- Klik kartu → halaman detail `/kabar-tembong/<slug>` dengan isi lengkap.
- Homepage bagian **Kabar Tembong** menampilkan 3 terbaru.

### A7. Troubleshooting cepat

| Gejala | Penyebab & solusi |
|---|---|
| `rest_no_route` / 404 di `/wp-json/...` | Permalink belum "Post name" (A2). Save Permalinks sekali lagi. |
| Daftar tetap kosong / empty-state | Belum ada post **published**; atau `WORDPRESS_API_URL` salah/typo; atau dev server belum di-restart setelah edit env. |
| Gambar kartu tidak muncul | Featured image belum diset pada post; atau URL media tidak bisa diakses publik. |
| Perubahan konten lama muncul | Cache ISR — turunkan `CMS_REVALIDATE_SECONDS` (mis. 15) dan/atau restart dev. |
| Fetch gagal ke `https://...local` | Sertifikat self-signed ditolak Node — pakai URL **http** lokal. |

---

## Bagian B — Peran & alur editorial

Peta ke peran bawaan WordPress (paling cepat, tanpa plugin):

| Peran di brief | Peran WordPress | Kemampuan |
|---|---|---|
| **Administrator** (Anda) | Administrator | Semua: struktur, plugin, user, publish. |
| **Editor Desa** | **Editor** | Kelola & **publish** semua konten; unggah media. |
| **Contributor** | **Contributor** | Tulis **draf**, tidak bisa publish. |

> **Catatan Contributor:** secara bawaan Contributor **tidak bisa mengunggah
> media** (featured image). Pilihan: (a) Editor Desa yang menambah gambar saat
> meninjau; atau (b) beri kapabilitas `upload_files` ke Contributor lewat plugin
> peran (mis. *Members* / *User Role Editor*).

**Alur:** `Draf (Contributor) → Tinjau & verifikasi fakta (Editor Desa) → Publish`.
Verifikasi wajib untuk demografi, statistik kesehatan, personel pemerintahan,
capaian, fakta sejarah, status legal (lihat brief §5).

Untuk mengganti label peran menjadi "Editor Desa" atau membuat peran kustom,
gunakan plugin *Members* (no-code). Tidak wajib untuk pilot.

> **Admin lebih ramah desa:** untuk menyederhanakan tampilan wp-admin (editor
> klasik, menu diringkas, panel panduan Bahasa Indonesia, branding desa), pasang
> mu-plugin siap-pakai di [`wordpress/carita-tembong-admin.php`](./wordpress/carita-tembong-admin.php)
> — lihat [`wordpress/README.md`](./wordpress/README.md).

---

## Bagian C — Naik level: custom post type `berita`

`posts` bawaan cukup untuk pilot. Saat ingin Kabar punya identitas sendiri
(terpisah dari blog bawaan), buat CPT `berita`. **Tidak perlu ubah kode** — cukup
ubah env.

### C1. Daftarkan CPT (dua cara)

**Cara no-code:** plugin **Custom Post Type UI** → *Add/Edit Post Types* → slug
`berita`, aktifkan **"Show in REST API"**, REST base `berita`, dukung *Excerpt*
& *Featured Image*, dan kaitkan taksonomi **Categories**.

**Cara kode** (buat file plugin `wp-content/plugins/carita-tembong/carita-tembong.php`, lalu Activate):

```php
<?php
/**
 * Plugin Name: Carita Tembong — Konten Desa
 * Description: Custom post type & taksonomi untuk portal Carita Tembong.
 */

add_action('init', function () {
  register_post_type('berita', [
    'label'        => 'Berita',
    'public'       => true,
    'show_in_rest' => true,          // WAJIB: expose ke REST API
    'rest_base'    => 'berita',      // endpoint: /wp-json/wp/v2/berita
    'menu_icon'    => 'dashicons-megaphone',
    'supports'     => ['title', 'editor', 'excerpt', 'thumbnail', 'author'],
    'has_archive'  => true,
    'rewrite'      => ['slug' => 'berita'],
    'taxonomies'   => ['category'],  // pakai kategori bawaan → _embed sama
  ]);
});
```

### C2. Pindahkan env & flush permalink

1. WP Admin → **Settings → Permalinks → Save** (mendaftarkan rute CPT baru).
2. `.env.local`:
   ```bash
   WORDPRESS_NEWS_TYPE=berita
   ```
3. Restart `npm run dev`. Uji `http://<site>/wp-json/wp/v2/berita?_embed`.

Kode membangun `/wp/v2/${WORDPRESS_NEWS_TYPE}`, jadi `rest_base` CPT **harus**
sama dengan nilai env (`berita`).

---

## Bagian D — ACF (custom fields)

**Tidak diperlukan untuk pilot Kabar** (judul/isi/excerpt/featured image/kategori
bawaan sudah cukup). ACF menjadi penting untuk entity yang lebih kaya — terutama
**Cerita** (narasumber, galeri) di tahap berikutnya.

Langkah dasar saat dibutuhkan:

1. Instal plugin **Advanced Custom Fields** (gratis).
2. **ACF → Field Groups → Add New**, buat field (mis. `narasumber`, `galeri`).
3. **Location rules** — tampilkan grup pada post type terkait.
4. **Setelan grup → "Show in REST API" = Yes** (wajib agar field muncul di REST,
   di bawah objek `acf` pada tiap item). Tanpa ini, field tidak terbaca website.

Service layer untuk membaca `acf.*` akan ditambahkan saat membangun Cerita.

---

## Bagian E — "Kunci REST" & keamanan

Prinsip headless: **konten published memang perlu bisa dibaca publik** (itulah
sumber website). Yang dikunci adalah hal di luar itu.

Checklist praktis:

- [ ] **Biarkan konten published terbaca** (jangan blokir seluruh REST — website
      butuh `posts`/`berita`).
- [ ] **Matikan enumerasi user** lewat REST untuk anonim. Snippet (tambahkan ke
      plugin di C1):
      ```php
      add_filter('rest_endpoints', function ($endpoints) {
        unset($endpoints['/wp/v2/users']);
        unset($endpoints['/wp/v2/users/(?P<id>[\d]+)']);
        return $endpoints;
      });
      ```
- [ ] **Matikan XML-RPC** bila tidak dipakai:
      ```php
      add_filter('xmlrpc_enabled', '__return_false');
      ```
- [ ] **Tulis via Application Passwords**, bukan password utama (WP Admin → Users
      → Profil → *Application Passwords*). Untuk website read-only ini tidak
      diperlukan; berguna bila nanti ada preview draft.
- [ ] **Admin aman:** password kuat, batasi percobaan login (plugin keamanan
      seperti *Wordfence* / *Solid Security* — sekaligus menutup enumerasi user
      tanpa kode).
- [ ] **Selalu update** WordPress core, plugin, tema.
- [ ] **Produksi pakai HTTPS** dan domain khusus (mis. `cms.desatembong.id`).

---

## Bagian F — Menuju produksi (nanti)

- **Hosting:** WordPress butuh PHP + MySQL — hosting terpisah dari Vercel (shared
  hosting/VPS/managed WP). Pindahkan konten dari lokal via export/import atau
  migrasi plugin.
- **Env produksi (Vercel):** set `WORDPRESS_API_URL` = `https://cms.desatembong.id/wp-json`,
  `NEXT_PUBLIC_SITE_URL` = domain publik, dan `CMS_REVALIDATE_SECONDS` wajar (mis. 300).
- **Gambar:** kartu & detail memakai `<img>` biasa, jadi domain media WordPress
  **tidak** perlu didaftarkan. Bila kelak beralih ke `next/image`, tambahkan host
  media ke `next.config.ts → images.remotePatterns`.

---

## Ringkasan variabel environment

| Variabel | Untuk apa | Nilai pilot (lokal) |
|---|---|---|
| `WORDPRESS_API_URL` | Base REST WordPress | `http://localhost:8881/wp-json` |
| `WORDPRESS_NEWS_TYPE` | Slug tipe berita | kosong (`posts`) → nanti `berita` |
| `CMS_REVALIDATE_SECONDS` | Jendela cache ISR | `15` saat menguji, `300` normal |
| `NEXT_PUBLIC_SITE_URL` | URL publik (canonical/OG) | `https://desatembong.id` |
