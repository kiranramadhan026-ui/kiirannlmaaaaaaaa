# 🕷️ Website Pribadi Bertema Spider-Man

Website portfolio sederhana tentang diri sendiri, dibuat hanya dengan **HTML, CSS, dan JavaScript murni** (tanpa framework). Tampilannya bergaya panel komik dengan warna merah-biru khas Spider-Man.

> *"Kekuatan besar datang dengan tanggung jawab besar."*

## ✨ Fitur

- Hero dengan jaring laba-laba (SVG dibuat lewat JavaScript)
- Efek mengetik otomatis untuk peran/profesi
- Tombol **Spider-Sense**: layar bergetar dan muncul teks "TING!"
- Bar skill yang terisi saat di-scroll
- Desain responsif (HP, tablet, desktop)
- Mendukung `prefers-reduced-motion` dan fokus keyboard yang jelas

## 📁 Struktur File

```
spiderman-portfolio/
├── index.html   # struktur halaman
├── style.css    # tampilan bertema Spider-Man
├── script.js    # interaksi (jaring, mengetik, spider-sense, skill bar)
└── README.md    # dokumentasi ini
```

## 🚀 Cara Menjalankan

1. Unduh atau salin semua file ke satu folder.
2. Buka `index.html` di browser (klik dua kali).
3. Selesai. Tidak perlu instalasi apa pun.

Untuk tampilan terbaik, sambungkan ke internet agar font **Bangers** dan **Barlow** dari Google Fonts termuat. Tanpa internet, browser memakai font cadangan.

## ✏️ Cara Mengubah Isi

| Yang ingin diubah | Di mana |
|---|---|
| Nama | `index.html`: cari `Nama Kamu` (judul, logo, `<title>`) |
| Perkenalan & data diri | `index.html`: bagian `#tentang` |
| Kemampuan & persentase | `index.html`: bagian `#skill`, ubah `data-level` dan angka di `<b>` |
| Proyek | `index.html`: bagian `#proyek` |
| Email & media sosial | `index.html`: bagian `#kontak` |
| Teks peran yang mengetik | `script.js`: array `roles` di baris paling atas |
| Warna | `style.css`: variabel di `:root` (`--red`, `--blue`, `--ink`, dll.) |

## 🌐 Publikasi Gratis

Kamu bisa menayangkan website ini lewat **GitHub Pages**, **Netlify**, atau **Vercel**. Cukup unggah satu folder ini.

## 🛠️ Teknologi

- HTML5
- CSS3 (Grid, Flexbox, variabel CSS, animasi)
- JavaScript ES6 (DOM, IntersectionObserver)

## 📄 Lisensi

Bebas dipakai dan dimodifikasi untuk keperluan pribadi. Spider-Man adalah karakter milik Marvel; proyek ini hanya fan project non-komersial.
