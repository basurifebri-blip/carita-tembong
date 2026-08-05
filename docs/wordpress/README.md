# CARITA TEMBONG — Penyederhanaan Admin WordPress

`carita-tembong-admin.php` adalah **mu-plugin** yang membuat panel admin WordPress
lebih mudah dikelola perangkat desa yang non-teknis. Pendamping
[`../cms-wordpress-setup.md`](../cms-wordpress-setup.md).

## Yang dilakukan

- **Editor klasik** (mirip Microsoft Word) menggantikan block editor Gutenberg.
- **Menu samping diringkas** untuk peran Editor Desa & Contributor — Administrator
  tetap melihat semuanya. Yang disembunyikan: Komentar, Perkakas, Tampilan,
  Plugin, Pengaturan, Halaman.
- Label menu **"Posts" → "Kabar"** agar selaras dengan portal.
- **Panel "Selamat Datang"** di dashboard berisi langkah "Cara menambah kabar".
- Kotak **Ringkasan** ditampilkan otomatis + teks bantuan singkat di bawah judul.
- **Branding "CMS Desa Tembong"** di footer & bilah admin.
- Dashboard dibersihkan dari widget teknis bawaan yang membingungkan.

## Cara memasang di WordPress asli

1. Salin `carita-tembong-admin.php` ke folder `wp-content/mu-plugins/` di server
   WordPress Anda. Buat folder `mu-plugins` bila belum ada.
2. Selesai — **mu-plugins aktif otomatis**, tidak perlu diaktifkan manual.
3. Untuk admin Bahasa Indonesia: **Settings → General → Site Language →
   Bahasa Indonesia** (sekali klik, bawaan WordPress).

## Menyesuaikan

Semua dapat diubah langsung di berkas dengan komentar Bahasa Indonesia:

- Menu yang disembunyikan → bagian **(2)**.
- Isi panduan panel sambutan → fungsi **`ct_render_welcome_widget`**.
- Teks branding → bagian **(6)/(7)**.

## Catatan

- Karena **Administrator melihat semua menu**, penyederhanaan menu hanya terlihat
  saat login sebagai **Editor Desa** atau **Contributor**. Efek lain (editor
  klasik, panel sambutan, branding, kotak Ringkasan) terlihat untuk semua peran.
- Plugin ini murni mengubah **tampilan admin**; tidak menyentuh data maupun
  tampilan publik website.
