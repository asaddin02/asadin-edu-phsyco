# Perombakan Asadin Edu Physics — 26 September 2026

Versi ini mengubah aplikasi menjadi ruang belajar bertema terang dengan aksen merah untuk **SD sampai pengajar**. Rujukan gaya produk Bio Taxa dan Kimia dipakai untuk kebutuhan lintas jenjang, pembaca materi dan perangkat pengajar; kedua proyek rujukan tidak diubah. Logo AI buku/orbit sudah dipasang. Paket hosting statis tersedia di `dist/`; belum ada deployment ke domain publik.

## Perubahan yang dapat diperiksa

| Area | Implementasi | Bukti |
|---|---|---|
| Identitas & UI | Logo PNG baru, token light/red, navbar responsif, pencarian, beranda, kartu jalur dan footer baru | `assets/brand/logo-ai.png`, `css/rebuild.css`, `js/components/`, `js/pages/home-page.js`, [prompt logo](BRAND_PROMPT.md) |
| Materi | 61 pelajaran asli berbahasa Indonesia; intuisi, penjelasan, analisis, contoh terurai, aktivitas, kuis dengan alasan, dan rujukan. 25 pendalaman tambahan | `js/data/courses/`, [matriks topik](TOPIC_COVERAGE.md), [pemetaan JSON](coverage.json) |
| Jenjang | SD 7, SMP 15, SMA 31, universitas 26, pengajar 61 termasuk dua modul pedagogi | `courses/index.js`, `coursesForLevel()`, tes 41 kebutuhan pendidikan |
| Pembaca | Navigasi isi, pilihan kedalaman, catatan, status membaca, jawaban salah/benar, coba ulang, sumber, sebelumnya/berikutnya, salin tautan dan cetak | `lesson-page.js`, [PDF modul pengajar](teacher-module.pdf) |
| Progres | Status membaca dan hasil latihan terpisah; penyimpanan lokal tervalidasi; migrasi URL/progres lama; ekspor JSON; penghapusan dengan konfirmasi dan batal | `core/study.js`, `learn-page.js`, tes persistensi/storage denial/XSS |
| Pengajar | Rencana kegiatan terkait materi, pertanyaan diagnostik, aktivitas, asesmen, rubrik, diferensiasi dan cetak | Mode `?level=educator`, modul `teacher-design` dan `teacher-experiments` |
| Integrasi | 191 tujuan katalog; materi masuk pencarian/penjelajah; 86 dossier entitas, 19 persamaan, 19 konstanta, 6 eksperimen, 13 simulasi dan graf tetap terhubung | `core/catalog.js`, `core/search.js`, browser audit |
| Distribusi | Build statis hanya aset publik; server Node dengan pembatasan path/metode/header; workflow CI | `scripts/build.mjs`, `server/server.mjs`, `.github/workflows/checks.yml`, [deployment tests](deployment.json) |

Dua rute lama `/learn?level=...&lesson=...` dan ID lama tetap diarahkan ke pelajaran baru. Progres lama dimigrasikan sebagai status membaca, bukan bukti lulus kuis. Catatan tidak dikirim ke server. Ekspor JSON merupakan arsip; belum ada impor/sinkronisasi akun. Tidak ada service worker/offline cache.

## Cakupan materi dan batas klaim

**252/252 butir materi section 10–31 dan 41/41 butir pendidikan section 38 memiliki pemetaan pelajaran.** Pemetaan tidak hanya menuju nama domain: record memiliki penjelasan, model/asumsi, contoh, aktivitas, soal dan pembahasan yang dapat dibuka. Topik yang saling terkait digabung dalam pelajaran, bukan dipisahkan menjadi 252 halaman tipis. Tes menguji pemetaan dan integritas struktur; tes tidak mampu memvalidasi makna setiap kalimat.

Cakupan sekarang meliputi dasar pengukuran, mekanika, fluida, osilasi/gelombang, termal/statistik, listrik/magnet/Maxwell, optika, relativitas, kuantum, atom/nuklir/partikel, bahan terkondensasi, plasma, astrofisika/kosmologi, komputasi, geofisika/atmosfer, biofisika/medis dan akselerator. Modul pengajar memuat rancangan pembelajaran, asesmen dan eksperimen.

**Kedalaman tetap berupa modul ringkas.** Seluruh mata kuliah universitas, bank soal komprehensif, sertifikasi kurikulum resmi dan review ahli per klaim belum dipenuhi atau diklaim. Status review dossier legacy tetap terlihat. Perombakan UI dan kelulusan tes tidak menjadikan seluruh 644 baris master specification otomatis VERIFIED. Audit lama disimpan di `docs/audit/` sebagai snapshot historis; skor lama tidak dipakai sebagai skor versi baru dan tidak diganti dengan angka 100 tanpa rubrik yang setara.

Setiap pelajaran memiliki bacaan pendukung. [Pemeriksaan 60 URL unik](source-availability.json) memperoleh HTTP 200 pada 50 URL dan HTTP 403 pada 10 URL (Feynman, PPPL, USGS) dari klien otomatis. HTTP 403 dicatat sebagai pemeriksaan terblokir, bukan sukses atau bukti halaman hilang. Sebagian rujukan dikonfirmasi lewat penelusuran web penerbit; ketersediaan halaman tidak sama dengan verifikasi setiap klaim. Rujukan SD dipilih per bidang. Link Lagrange, spin, laser, statistik, akselerator, plasma dan gempa disesuaikan ke halaman yang relevan.

## Hasil validasi

Lingkungan: Node 24.18.0, Chrome 152.0.7977.64, Linux headless.

| Pemeriksaan | Hasil / lingkup |
|---|---|
| `npm test` | **23 lulus**: 7 pemeriksaan struktur + 16 regresi/kurikulum/model/penyimpanan |
| `npm run test:browser` | **17/17 kelompok lulus**, [hasil JSON](browser-audit.json) |
| Tujuan katalog | **191/191** dirender; 70 tautan variabel persamaan menuju tujuan valid |
| Latihan | **61/61** pelajaran diuji jawaban salah → coba ulang → benar |
| Laboratorium | **13 modul / 84 aksi kontrol**, perubahan canvas dan HUD, kontrol ekstrem, pause dan pembersihan RAF |
| Responsif | **72/72** kombinasi 12 halaman × 320, 375, 414, 768, 1366, 1920 px tanpa overflow dokumen |
| Belajar/pengajar | Catatan tetap tersimpan sesudah reload, status baca bisa dibatalkan, ekspor JSON berisi catatan, batal hapus menjaga data, konfirmasi hapus bekerja, clipboard dan cetak diuji |
| `npm run test:accessibility` | **52/52 scan tanpa pelanggaran otomatis**, [hasil axe](accessibility.json): halaman inti, semua persamaan/simulasi, hasil kuis, dialog pencarian, mobile dan menu terbuka |
| `npm run test:build` | **8/8** kasus paket statis di root dan subdirektori `/physics/`, tanpa page error atau aset 404 |
| Model numerik | Solusi analitik proyektil; energi bandul; kelajuan/orbit Lorentz; Ohm/Kirchhoff/daya; kontinuitas Carnot, gas ideal dan kerja integral |
| Keamanan dasar | Escaping input/catatan, malformed routes, pembatasan server, GET/HEAD, traversal, private paths; dependency audit melaporkan 0 vulnerability pada saat pemeriksaan |
| Integritas perubahan | `git diff --check`, parsing modul dan build lulus |

Pemeriksaan aksesibilitas mencakup tag WCAG 2 A/AA serta 2.1 AA dari axe, tanpa mengecualikan aturan kontras. Perbaikan meliputi warna metadata/nav/footer, label filter, penanda tautan, fokus kuis, skip link dan kontras dialog. Hasil otomatis bukan sertifikasi WCAG; hasil `incomplete` untuk pemeriksaan manual tetap disimpan di JSON. Alternatif DOM untuk graf/kontrol tersedia, tetapi pembaca layar penuh, Firefox/WebKit, PDF bertag, dan perangkat fisik belum diuji.

Inspeksi visual dilakukan pada beranda desktop/ponsel, reader, persamaan, serta halaman modul pengajar pada PDF. Overflow 320 px, posisi ilustrasi lab pada ponsel, teks metadata pucat, dan tombol kuis sudah diperbaiki. PDF tiga halaman menampilkan materi dan rencana pengajar, dengan pilihan jawaban tetap terlihat saat dicetak.

## Performa terukur

Sampel lokal pada browser audit: 306 DOM nodes, 69 resource, jumlah body resource 2.00 MB, DOMContentLoaded 588 ms. Ukuran resource dapat menghitung pemuatan aset yang berulang, bukan ukuran paket distribusi terkompresi. Animasi medan listrik: 90 interval, rerata 25.74 ms (~38.9 fps), p95 33.40 ms. Tidak ada klaim 60 fps pada seluruh perangkat.

Dua batch navigasi lab dengan garbage collection menghasilkan heap 4,587,724 → 4,587,772 byte; tidak ada pending RAF setelah keluar tiap lab. Ini sampel pendek di mesin pengujian, bukan pembuktian bebas kebocoran memori jangka panjang atau profil jaringan publik.

## Bukti visual

- [Beranda desktop](desktop-home.png)
- [Beranda ponsel](mobile-home.png)
- [Pembaca materi ponsel](mobile-lesson.png)
- [Lab termodinamika ponsel](mobile-thermodynamics.png)
- [Persamaan ponsel](mobile-equation.png)
- [Modul pengajar PDF](teacher-module.pdf)

## Menjalankan hasil

`npm start`, kemudian buka `http://127.0.0.1:8088`. Untuk hosting statis, `npm run build`, lalu unggah isi `dist/`. Panduan Node/HTTPS, penyimpanan lokal dan konfigurasi hosting ada di [README](../../README.md). CI disiapkan, tetapi tidak diklaim sudah berjalan di GitHub. Tidak ada perubahan yang dipush, di-merge, atau dipublikasikan ke hosting eksternal.
