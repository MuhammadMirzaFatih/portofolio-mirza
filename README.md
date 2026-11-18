# Portofolio Pribadi — Muhammad Mirza Fatih

> **UI/UX Design · Digital Marketing**  
> Mahasiswa Sistem Informasi Universitas Negeri Surabaya (UNESA) yang menargetkan posisi Magang UI/UX Design dengan keunggulan riset kegunaan dan pemasaran digital berbasis data.

---

## 🌟 Ikhtisar Portofolio
Situs portofolio satu halaman (*one-page portfolio*) berkinerja tinggi, responsif, dan dirancang khusus agar rekruter, HR, serta design manager dapat memahami profil, bidang keahlian, dan 4 karya terbaik Mirza dalam waktu **kurang dari 10 detik**.

### 3 Tindakan Utama (Call-to-Action):
1. **Buka Studi Kasus Lengkap** (EduTrack.id, TechNotes, Nin's Kitchen, Jurnal JISEBI)
2. **Unduh Berkas CV (.PDF)**
3. **Hubungi Mirza** via Surel / LinkedIn

---

## 🧭 Struktur Halaman & Fitur
1. **Bilah Menu Tetap (Sticky Header)**
   - Logo inisial 'M' dengan aksen gradien cyan-ungu.
   - Menu navigasi jangkar (*anchor links*): Beranda, Tentang, Proyek, Pengalaman, Kontak.
   - Pelacak bagian aktif otomatis (*Scroll Spy*).
   - Tombol "Lihat CV" (Modal Interaktif) & "Unduh CV" (.PDF).
   - Menu Hamburger responsif untuk layar ponsel.

2. **Beranda (Hero Section)**
   - Penanda khas: `STILL IN BETA.` dengan indikator berdenyut (*pulsating beacon*).
   - Sapaan: *"Halo, saya Mirza."*
   - Baris bidang: *"UI/UX Design · Digital Marketing"*.
   - Kalimat proposisi nilai: *"Merancang produk digital yang intuitif, estetik, dan diakselerasi strategi pemasaran berbasis data untuk mendorong pertumbuhan bisnis nyata."*
   - Tombol utama: *"Lihat Proyek"* (gulir halus ke `#proyek`) & *"Unduh CV"*.
   - Ikon tautan langsung: LinkedIn, GitHub, Instagram, dan Surel (dengan fitur salin sekali klik).

3. **Tentang (About Section)**
   - Mockup bingkai kanvas profil Figma dengan lencana *"Siap Magang Segera"*.
   - Paragraf ringkas (48 kata, di bawah batas maksimal 60 kata).
   - Pendidikan formal: S1 Sistem Informasi Universitas Negeri Surabaya (UNESA) — Fokus HCI & Analisis Sistem.
   - Tiga keahlian utama:
     * **Figma & Wireframing**: Design System, Auto-layout, Interactive Prototyping.
     * **Uji Kegunaan (Maze & SUS)**: System Usability Scale, Remote Testing, Heuristic Evaluation.
     * **Strategi Konten Medsos**: Copywriting konversi, A/B testing visual, Meta Business Suite, Google Analytics.

4. **Proyek Pilihan (Core Projects - 4 Kartu + Modal Studi Kasus)**
   - **EduTrack.id**: Platform belajar daring gamifikasi (Peran: UI Designer, UX Designer, UX Researcher). Skor SUS 84.5 (*Excellent*), Task Success Rate 94%.
   - **TechNotes**: Aplikasi dokumentasi teknis & manajemen cuplikan kode minimalis (Peran: Product Designer & UX Strategist). Akses pencarian < 0.5s, kepuasan navigasi 9.2/10.
   - **Nin's Kitchen**: Solusi pemesanan & katalog digital UMKM kuliner Palembang (Peran: End-to-End UI/UX Designer & Marketing Researcher). Pemesanan 3 tap WhatsApp, efisiensi +60%, 0 salah kirim.
   - **Artikel Jurnal JISEBI**: Publikasi riset empiris evaluasi SIAKAD berbasis SUS & UEQ (Peran: Penulis Utama & UX Researcher). Melibatkan 150 responden, terakreditasi SINTA.
   - **Modal Interaktif 5 Bagian**: Masalah, Riset, Proses, Hasil Akhir, dan Pelajaran yang Didapat.

5. **Pengalaman & Linimasa**
   - **Magang Pemasaran Digital & Media Sosial — VINIX7** (Feb 2024 – Jun 2024): Pertumbuhan engagement Instagram +38%, standardisasi 45+ aset grafis.
   - **Studi Independen Pemasaran Digital (MSIB Batch 5 Kemendikbudristek) — VINIX7** (Agu 2023 – Des 2023): Lulus predikat A (92.4/100), Top 5 Capstone Project.

6. **Kontak (Contact Section)**
   - Ajakan kolaborasi langsung.
   - Kartu surel dengan tombol salin otomatis & pembuka surel langsung (`mirzafatih@email.com`).
   - Kartu profil LinkedIn terverifikasi.
   - Informasi ketersediaan: Magang UI/UX Segera (Surabaya / Hybrid / Remote).

7. **Kaki Halaman (Footer)**
   - Identitas nama & hak cipta 2026.
   - Tombol kembali ke atas (*Scroll to Top*).

---

## 🎨 Arah Visual & Desain
- **Warna Latar**: Biru navy gelap terinspirasi Figma (`#060911`, `#0B0F19`, `#0F1626`).
- **Tiga Aksen Warna Utama**:
  * **Sian (`#22D3EE` / `#06B6D4`)**: Tombol aksi utama, sorotan aktif, dan pendaran cahaya (*glow*).
  * **Ungu (`#C084FC` / `#A855F7`)**: Sorotan sekunder, kategori, dan aksen linimasa.
  * **Kuning-Oranye (`#FBBF24` / `#F59E0B`)**: Penanda `STILL IN BETA.`, lencana metrik, dan sorotan masalah.
- **Tipografi**: Sans-serif modern (*Plus Jakarta Sans* / *Inter*), judul tebal tegas, keterbacaan kontras tinggi sesuai standar aksesibilitas WCAG.
- **Micro-interactions**: Efek glassmorphism halus, animasi hover kartu membal, feedback visual saat menyalin surel.

---

## 💻 Menjalankan Proyek Secara Lokal

### Prasyarat:
- Node.js versi 18+ atau 20+

### 1. Masuk ke direktori:
```bash
cd c:\Users\ASUS\portofolio-mirza
```

### 2. Jalankan mode pengembangan:
```bash
npm run dev
```
Buka peramban di `http://localhost:3000`.

### 3. Kompilasi build produksi:
```bash
npm run build
npm run start
```

---

## 🚀 Panduan Hosting di Vercel
1. Unggah repositori ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit portofolio muhammad mirza fatih"
   git branch -M main
   git remote add origin <url-repo-github-anda>
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com) dan masuk dengan akun GitHub Anda.
3. Klik **"Add New Project"**, pilih repositori `portofolio-mirza`.
4. Framework preset akan otomatis terdeteksi sebagai **Next.js**.
5. Klik **"Deploy"**. Dalam ~60 detik portofolio langsung aktif secara global dengan HTTPS dan CDN super cepat!
