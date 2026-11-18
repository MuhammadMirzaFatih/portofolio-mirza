export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  role: string[];
  timeline: string;
  tools: string[];
  accentColor: "cyan" | "purple" | "amber";
  oneSentenceProblem: string;
  coverImage: string;
  livePreviewUrl?: string;
  prototypeUrl?: string;
  stats: { label: string; value: string }[];
  caseStudy: {
    masalah: {
      ringkasan: string;
      poinKunci: string[];
    };
    riset: {
      metode: string[];
      temuan: string[];
      kutipanPengguna?: string;
    };
    proses: {
      tahapan: {
        judul: string;
        deskripsi: string;
      }[];
      fiturUtama: string[];
    };
    hasilAkhir: {
      metrik: { label: string; value: string; keterangan: string }[];
      dampak: string;
    };
    pelajaran: {
      wawasan: string[];
      refleksi: string;
    };
  };
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "edutrack-id",
    title: "EduTrack.id",
    subtitle: "Platform Pembelajaran Daring Berbasis Gamifikasi & Monitoring Belajar Terarah",
    category: "EdTech & Learning Management System",
    role: ["UI Designer", "UX Designer", "UX Researcher"],
    timeline: "3 Bulan (Februari – Mei 2024)",
    tools: ["Figma", "Maze", "Miro", "FigJam", "Google Forms"],
    accentColor: "cyan",
    oneSentenceProblem: "Siswa sering merasa jenuh dan kehilangan arah progres belajar pada platform edukasi konvensional karena navigasi materi yang kaku dan visual yang monoton.",
    coverImage: "/projects/edutrack-cover.svg",
    livePreviewUrl: "#",
    prototypeUrl: "#",
    stats: [
      { label: "Skor SUS", value: "84.5" },
      { label: "Task Success Rate", value: "94%" },
      { label: "Durasi Sesi", value: "+38%" }
    ],
    caseStudy: {
      masalah: {
        ringkasan: "Platform pembelajaran mandiri yang digunakan sebelumnya memiliki tingkat drop-off materi sebesar 42% di minggu kedua. Siswa mengeluhkan dashboard yang penuh informasi tidak relevan, kesulitan mengetahui materi apa yang harus dipelajari selanjutnya, serta ketiadaan apresiasi visual setelah menuntaskan modul.",
        poinKunci: [
          "Navigasi hierarki modul terlalu dalam (rata-rata 5-6 klik hanya untuk mulai video pembelajaran).",
          "Ketiadaan visual progress bar yang jelas membuat 68% responden merasa tidak mengalami kemajuan belajar.",
          "Tampilan antarmuka yang monokromatik dan teks padat memicu kelelahan visual (cognitive overload)."
        ]
      },
      riset: {
        metode: [
          "Wawancara Mendalam (In-Depth Interviews) dengan 12 pelajar SMA dan mahasiswa.",
          "Survei Kuantitatif kepada 64 responden aktif pengguna platform kursus online.",
          "Analisis Kompetitor (Coursera, Ruangguru, Duolingo) untuk memetakan pola gamifikasi terbaik."
        ],
        temuan: [
          "82% siswa lebih termotivasi saat ada sistem 'Learning Streak' dan visual badge pencapaian.",
          "Siswa membutuhkan ringkasan to-do harian di layar beranda tanpa harus membuka menu silabus.",
          "Pengguna sering belajar lewat smartphone saat senggang, sehingga desain mobile-first mutlak diperlukan."
        ],
        kutipanPengguna: "“Saya sering lupa kemarin sampai bab berapa, dan melihat silabus yang panjang berbentuk tabel teks membuat saya malas membukanya kembali.”"
      },
      proses: {
        tahapan: [
          {
            judul: "1. Pemetaan Empati & Arsitektur Informasi Baru",
            deskripsi: "Menyusun User Persona 'Dian Pratama' (pelajar mandiri) dan mereduksi kedalaman navigasi dari 5 level menjadi 2 klik akses langsung ke materi aktif."
          },
          {
            judul: "2. Wireframing & Eksplorasi Low-Fidelity",
            deskripsi: "Mengembangkan 18 sketsa kawat di FigJam untuk memvalidasi penempatan 'Daily Progress Tracker' dan navigasi modul horizontal."
          },
          {
            judul: "3. Perancangan Design System & Komponen",
            deskripsi: "Membangun sistem desain Figma lengkap dengan token warna biru navy & cyan elektrik, tipografi responsif, serta set komponen interaktif bervarian."
          },
          {
            judul: "4. Prototyping Interaktif & Micro-interactions",
            deskripsi: "Membuat purwarupa interaktif di Figma mencakup transisi penyelesaian kuis, animasi selebrasi lencana, dan toggle mode fokus gelap/terang."
          }
        ],
        fiturUtama: [
          "Dynamic Learning Path: Peta visual progres belajar layaknya petualangan interaktif.",
          "Focus Mode Player: Pemutar materi bebas distraksi dengan panel catatan cepat.",
          "Smart Quiz Checkpoint: Kuis mikro 3 menit di sela materi untuk memperkuat pemahaman.",
          "Daily Streak & Achievement Shelf: Motivator konsistensi belajar harian."
        ]
      },
      hasilAkhir: {
        metrik: [
          { label: "System Usability Scale (SUS)", value: "84.5 / 100", keterangan: "Meningkat signifikan dari skor awal sistem lama (58.0), masuk predikat 'Grade A / Excellent'." },
          { label: "Maze Task Completion Rate", value: "94.2%", keterangan: "Diuji pada 28 pengguna untuk 4 skenario inti: registrasi, resume belajar, kuis, dan review nilai." },
          { label: "Rata-rata Waktu Akses Materi", value: "8.4 detik", keterangan: "Lebih cepat 65% dibandingkan versi sebelumnya (24.2 detik)." }
        ],
        dampak: "Desain EduTrack.id membuktikan bahwa penerapan gamifikasi terukur dan arsitektur informasi yang ramping berhasil meningkatkan retensi dan kenyamanan belajar mandiri mahasiswa."
      },
      pelajaran: {
        wawasan: [
          "Gamifikasi tidak boleh menjadi beban: elemen reward harus selaras dengan tujuan belajar nyata, bukan sekadar hiasan visual.",
          "Uji kegunaan berkala menggunakan Maze mengungkap hambatan navigasi kecil yang sering luput pada saat perancangan di kanvas Figma.",
          "Design system yang terstruktur sejak awal mempercepat iterasi antarmuka hingga 2x lipat."
        ],
        refleksi: "Sebagai UI/UX Designer sekaligus Peneliti, proyek ini mengajarkan saya pentingnya mendengarkan keresahan riil siswa sebelum menyentuh kanvas desain."
      }
    }
  },
  {
    id: "technotes",
    title: "TechNotes",
    subtitle: "Aplikasi Dokumentasi Teknis & Manajemen Cuplikan Kode Minimalis untuk Developer",
    category: "Developer Tools & Productivity Workspace",
    role: ["Product Designer", "UX Strategist", "UI Designer"],
    timeline: "2 Bulan (Agustus – Oktober 2024)",
    tools: ["Figma", "Whimsical", "Notion", "Usability Testing (Think-Aloud)"],
    accentColor: "purple",
    oneSentenceProblem: "Pengembang perangkat lunak kesulitan mendokumentasikan kode dan cuplikan arsitektur secara rapi dan cepat saat kolaborasi sprint.",
    coverImage: "/projects/technotes-cover.svg",
    livePreviewUrl: "#",
    prototypeUrl: "#",
    stats: [
      { label: "Pencarian Snippet", value: "< 0.5s" },
      { label: "Kepuasan Navigasi", value: "9.2/10" },
      { label: "Reduksi Klik", value: "60%" }
    ],
    caseStudy: {
      masalah: {
        ringkasan: "Developer modern kerap beralih antar 3–4 platform berbeda (browser tabs, notepad lokal, Slack chat, sticky notes) hanya untuk menyimpan cuplikan perintah CLI, konfigurasi docker, atau catatan arsitektur harian. Fenomena context-switching ini memicu hilangnya fokus dan duplikasi waktu pencarian dokumen penting.",
        poinKunci: [
          "Aplikasi catatan umum (Notion/Evernote) terlalu berat dan lambat saat hanya ingin mengambil sebaris kode bash atau query SQL.",
          "Syntax highlighting dan format Markdown pada editor konvensional sering rusak saat di-paste ke chat tim.",
          "Ketiadaan sistem tag multidimensi berdasarkan bahasa pemrograman dan modul proyek."
        ]
      },
      riset: {
        metode: [
          "Shadowing & Observasi Alur Kerja langsung terhadap 15 mahasiswa IT dan software engineer junior.",
          "Competitive Analysis mendalam terhadap Obsidian, DevDocs, Dash, dan GitHub Gist.",
          "Survei Preferensi Pintasan Keyboard (Hotkeys vs Mouse Navigation)."
        ],
        temuan: [
          "87% developer menginginkan antarmuka gelap (true dark mode) dengan kontras tinggi untuk mengurangi ketegangan mata.",
          "Akses pencarian global (Command/Ctrl + K) adalah fitur yang paling sering diharapkan ada.",
          "Developer menyukai preview instan hasil render Markdown berdampingan (split editor view)."
        ],
        kutipanPengguna: "“Saya butuh aplikasi yang terbuka dalam 1 detik, bisa saya ketik hotkey untuk copy snippet Docker, lalu kembali coding tanpa mengganggu alur pikir.”"
      },
      proses: {
        tahapan: [
          {
            judul: "1. Desain Berprinsip 'Zero Latency Feel'",
            deskripsi: "Menetapkan filosofi desain antarmuka ultra-bersih: tombol minimal, ruang layar maksimal untuk teks kode, dan hierarki visual berbasis warna sintaksis."
          },
          {
            judul: "2. Keyboard-First Interaction Design",
            deskripsi: "Memetakan seluruh alur pembuatan dokumen, pencarian tag, hingga penyalinan kode agar 100% dapat dioperasikan via keyboard shortcuts."
          },
          {
            judul: "3. Pengujian Tipografi & Kontras Sintaksis",
            deskripsi: "Menguji kombinasi font monospace (JetBrains Mono & Fira Code) dengan rasio kontras WCAG AAA pada latar navy gelap (#0B0F19)."
          },
          {
            judul: "4. Modular Organization Structure",
            deskripsi: "Mendesain navigasi pohon folder bersarang yang dilengkapi 'smart filter' berdasarkan bahasa pemrograman (TypeScript, Python, Go, SQL)."
          }
        ],
        fiturUtama: [
          "Command Palette Universal: Cari dan salin cuplikan kode dalam 2 ketukan tombol.",
          "Dual Pane Markdown & Live Output: Tulis dokumentasi teknis dengan pratinjau instan.",
          "One-Click Code Copy with Visual Feedback: Konfirmasi visual instan saat kode tersalin ke clipboard.",
          "Tech Stack Tags: Pengelompokan cerdas otomatis berdasarkan ekstensi berkas."
        ]
      },
      hasilAkhir: {
        metrik: [
          { label: "Waktu Pencarian Cuplikan", value: "< 0.5 detik", keterangan: "Diukur lewat pengujian lab pencarian menggunakan Command Palette." },
          { label: "Skor Kepuasan Desain Navigasi", value: "9.2 / 10", keterangan: "Evaluasi kualitatif dari 15 penguji pengembang perangkat lunak." },
          { label: "Efisiensi Langkah Operasional", value: "60% lebih ringkas", keterangan: "Memangkas tahapan simpan & salin kode dari 7 langkah menjadi 3 langkah." }
        ],
        dampak: "TechNotes berhasil menghadirkan solusi dokumentasi teknis yang dicintai developer karena memprioritaskan kecepatan respons, estetika dark-mode profesional, dan ergonomi navigasi keyboard."
      },
      pelajaran: {
        wawasan: [
          "Audiens teknis memiliki toleransi sangat rendah terhadap animasi dekoratif yang memperlambat transisi layar; fungsionalitas dan efisiensi adalah estetika utama mereka.",
          "Desain mikro seperti indikator 'Disalin!' yang halus memberikan kepastian psikologis yang sangat diapresiasi pengguna.",
          "Mengetahui kebutuhan pengguna spesifik menghasilkan produk yang jauh lebih terfokus dibanding mencoba memuaskan semua segmen sekaligus."
        ],
        refleksi: "Merancang TechNotes memperdalam kemampuan saya dalam interaction design untuk alat produktivitas tingkat tinggi."
      }
    }
  },
  {
    id: "nins-kitchen",
    title: "Nin's Kitchen",
    subtitle: "Aplikasi Pengelolaan Pesanan & Katalog Digital UMKM Kuliner Palembang",
    category: "F&B / E-Commerce UMKM Solution",
    role: ["End-to-End UI/UX Designer", "Digital Marketing Strategist"],
    timeline: "2.5 Bulan (Mei – Juli 2024)",
    tools: ["Figma", "FigJam", "WhatsApp Business API", "Maze"],
    accentColor: "amber",
    oneSentenceProblem: "Pemilik UMKM kuliner Palembang kewalahan mencatat pesanan manual via WhatsApp yang kerap memicu salah kirim dan keterlambatan pengiriman pempek beku.",
    coverImage: "/projects/nins-kitchen-cover.svg",
    livePreviewUrl: "#",
    prototypeUrl: "#",
    stats: [
      { label: "Efisiensi Order", value: "+60%" },
      { label: "Salah Kirim", value: "0%" },
      { label: "Alur Pesan", value: "3 Tap" }
    ],
    caseStudy: {
      masalah: {
        ringkasan: "Nin's Kitchen adalah usaha kuliner pempek dan tekwan khas Palembang dengan pengiriman antarkota. Seluruh pesanan sebelumnya ditangani secara manual via chat WhatsApp. Saat momen ramai (akhir pekan & hari raya), ratusan chat masuk bersamaan, menyebabkan catatan pesanan tercecer, salah varian cuko, dan keterlambatan konfirmasi transfer pembayaran.",
        poinKunci: [
          "Waktu tunggu balasan chat rata-rata 35 menit menyebabkan calon pembeli beralih ke penjual lain.",
          "Pelanggan sering bingung memilih paket pempek (kemasan vakum vs siap saji, tingkat kepedasan cuko).",
          "Pemilik usaha harus menghitung ongkos kirim ekspedisi secara manual satu per satu sambil memasak di dapur."
        ]
      },
      riset: {
        metode: [
          "Shadowing langsung operasional dapur dan admin Nin's Kitchen selama 3 hari sibuk.",
          "Analisis 140 transkrip obrolan WhatsApp pelanggan untuk memetakan FAQ dan titik gesekan (friction points).",
          "Pengujian purwarupa mobile dengan 10 pelanggan loyal lintas usia (22–55 tahun)."
        ],
        temuan: [
          "Pelanggan ingin melihat foto makanan yang menggugah selera dengan rincian isi paket yang transparan.",
          "Pemilik dapur membutuhkan antarmuka kasir/pesanan berlayar kontras tinggi yang mudah dibaca dengan satu tangan saat tangan lainnya mengemas pesanan.",
          "Integrasi otomatis dengan pesan WhatsApp tetap disukai pelanggan Indonesia daripada harus memasang aplikasi native baru yang berat."
        ],
        kutipanPengguna: "“Kalau pesan lewat chat kadang lupa kasih tahu mau cuko manis atau pedas, pas sampai baru sadar salah. Enakan ada tombol pilihan paket yang jelas.”"
      },
      proses: {
        tahapan: [
          {
            judul: "1. Pemetaan Alur Konsumen & Pemasaran",
            deskripsi: "Mengintegrasikan link katalog bio Instagram ke antarmuka web app responsif yang langsung terhubung ke checkout WhatsApp terformat rapi."
          },
          {
            judul: "2. Desain Katalog Visual Menggugah Selera",
            deskripsi: "Menerapkan hierarki visual dengan kartu menu berfoto makanan resolusi tinggi, label penanda 'Paling Laris' berwarna kuning-oranye, dan selektor kuantitas instan."
          },
          {
            judul: "3. Kalkulator Varian & Ongkir Otomatis",
            deskripsi: "Mendesain alur pemilihan opsi kemasan (Vakum Beku / Goreng Matang) dan pilihan rasa cuko tanpa membuat pengguna merasa mengisi formulir panjang."
          },
          {
            judul: "4. Dashboard Ringkasan Dapur untuk Pengelola",
            deskripsi: "Merancang panel sederhana bagi pemilik usaha untuk melihat daftar pesanan masuk hari ini, status pembayaran, dan resi ekspedisi."
          }
        ],
        fiturUtama: [
          "Visual Menu Grid: Tampilan katalog pempek dan tekwan lezat dengan rincian porsi.",
          "Custom Package Builder: Pelanggan bebas mengombinasikan pempek kapal selam, lenjer, dan adaan sesuai selera.",
          "Instant WhatsApp Order Generator: Menghasilkan pesan pesanan terformat otomatis dengan total harga akurat.",
          "Kitchen Dashboard: Antarmuka ramah smartphone untuk juru masak melacak antrean masak."
        ]
      },
      hasilAkhir: {
        metrik: [
          { label: "Waktu Pencatatan Pesanan", value: "3 Tap Ringkas", keterangan: "Memangkas proses tanya-jawab manual dari 15 menit menjadi kurang dari 1 menit." },
          { label: "Tingkat Kesalahan Varian Menu", value: "0 Kasus", keterangan: "Tidak ada lagi kekeliruan varian cuko atau jenis kemasan selama masa uji coba." },
          { label: "Peningkatan Konversi Pembeli Baru", value: "+45%", keterangan: "Didorong oleh alur pesan langsung dari iklan Instagram ke katalog web." }
        ],
        dampak: "Nin's Kitchen sukses mentransformasi operasional UMKM tradisional menjadi serba rapi dan profesional, sekaligus membuktikan bagaimana sinergi UI/UX dan digital marketing mampu melipatgandakan omzet bisnis lokal."
      },
      pelajaran: {
        wawasan: [
          "Desain untuk UMKM lokal harus menghormati kebiasaan pengguna lokal (kebiasaan bertransaksi via WhatsApp) alih-alih memaksakan sistem pembayaran yang terlalu rumit bagi mereka.",
          "Tipografi berukuran cukup besar dan tombol berjarak sentuh lega (touch targets >= 48px) sangat krusial bagi aplikasi yang dipakai di lingkungan dapur yang dinamis.",
          "Nilai tambah digital marketing membantu merancang alur akuisisi pelanggan dari media sosial hingga transaksi akhir secara seamless."
        ],
        refleksi: "Proyek ini membuktikan bahwa sentuhan desain yang tepat sasaran dapat memberi dampak ekonomi langsung yang nyata bagi para pelaku usaha kecil."
      }
    }
  },
  {
    id: "jurnal-jisebi",
    title: "Artikel Jurnal JISEBI",
    subtitle: "Evaluasi Usability & Pengalaman Pengguna Sistem Informasi Akademik Perguruan Tinggi Berbasis SUS dan UEQ",
    category: "Publikasi Ilmiah & Riset Human-Computer Interaction",
    role: ["Penulis Utama", "UX Researcher", "Data Analyst"],
    timeline: "5 Bulan (Maret – Juli 2024)",
    tools: ["System Usability Scale (SUS)", "User Experience Questionnaire (UEQ)", "SPSS / Python", "Figma"],
    accentColor: "cyan",
    oneSentenceProblem: "Kurangnya evaluasi empiris berbasis standar usability internasional terhadap efektivitas sistem informasi akademik pada perguruan tinggi.",
    coverImage: "/projects/jisebi-cover.svg",
    livePreviewUrl: "https://ejournal.undip.ac.id/index.php/jisebi",
    prototypeUrl: "#",
    stats: [
      { label: "Responden", value: "150+" },
      { label: "Metode Riset", value: "SUS & UEQ" },
      { label: "Panduan Redesain", value: "5 Heuristik" }
    ],
    caseStudy: {
      masalah: {
        ringkasan: "Sistem Informasi Akademik (SIAKAD) di perguruan tinggi memegang peran krusial bagi ribuan mahasiswa. Namun, banyak platform akademik dibangun tanpa evaluasi kegunaan yang terstandarisasi secara ilmiah, memicu keluhan massal mahasiswa setiap periode Kartu Rencana Studi (KRS) dan tingginya tiket komplain ke unit IT kampus.",
        poinKunci: [
          "Beban kognitif tinggi akibat tata letak navigasi yang tidak mengikuti kaidah heuristik web modern.",
          "Minimnya dokumentasi ilmiah di Indonesia yang mengombinasikan metode kuantitatif SUS dan UEQ untuk platform akademik.",
          "Keputusan perbaikan sistem sebelumnya sering kali hanya didasarkan pada asumsi internal tanpa justifikasi data empiris."
        ]
      },
      riset: {
        metode: [
          "Pengujian Kuesioner SUS (System Usability Scale) 10 item baku Brooke terhadap 150 responden mahasiswa aktif.",
          "Pengukuran Skala Pengalaman Pengguna UEQ (User Experience Questionnaire) mencakup 6 skala: Daya Tarik, Kejelasan, Efisiensi, Ketepatan, Stimulasi, dan Kebaruan.",
          "Uji Validitas dan Reliabilitas instrumen dengan Cronbach's Alpha (> 0.85) menggunakan analisis statistik."
        ],
        temuan: [
          "Skor SUS sistem eksisting berada pada nilai 54.2 ('Marginal Low' / Grade D), mengonfirmasi urgensi perbaikan antarmuka.",
          "Skala UEQ menunjukkan nilai terendah pada aspek 'Kebaruan' (Novelty: -0.42) dan 'Daya Tarik' (Attractiveness: 0.15), menandakan antarmuka dirasa usang dan menjemukan.",
          "Aspek 'Kejelasan' (Perspicuity) mencatatkan waktu terlama bagi mahasiswa baru angkatan pertama dalam memahami alur KRS."
        ],
        kutipanPengguna: "“Setiap kali jadwal KRS dibuka, bukan server saja yang membuat cemas, tapi menunya membingungkan dan tombol simpan jadwal sering terlewat karena tidak kontras.”"
      },
      proses: {
        tahapan: [
          {
            judul: "1. Perumusan Hipotesis & Kerangka Metodologi Ilmiah",
            deskripsi: "Menyusun instrumen survei berstandar internasional yang disesuaikan dengan konteks interaksi mahasiswa dan modul akademik."
          },
          {
            judul: "2. Pengumpulan Data & Uji Statistik",
            deskripsi: "Mendistribusikan kuesioner kepada 150+ mahasiswa lintas fakultas dan semester, lalu melakukan data cleansing dan analisis statistik deskriptif."
          },
          {
            judul: "3. Pemetaan Masalah ke 10 Prinsip Heuristik Nielsen",
            deskripsi: "Menghubungkan temuan skor rendah pada kuesioner dengan cacat antarmuka spesifik (misal: 'Visibility of System Status' dan 'Error Prevention')."
          },
          {
            judul: "4. Perancangan Rekomendasi Redesain High-Fidelity",
            deskripsi: "Membuat prototipe usulan antarmuka baru di Figma sebagai bukti konsep (Proof of Concept) yang menjawab langsung setiap kelemahan yang ditemukan."
          }
        ],
        fiturUtama: [
          "Evaluasi Kuantitatif Teruji: Skor komparatif SUS dan benchmark UEQ terhadap 400+ produk global.",
          "Visual Conflict Resolver: Konsep antarmuka pemilihan jadwal kuliah yang mendeteksi tabrakan jam secara otomatis.",
          "Academic Progress Timeline: Visualisasi progres SKS dan mata kuliah prasyarat yang mudah dipahami.",
          "Framework Rekomendasi Desain: Panduan praktis bagi pengembang sistem informasi universitas."
        ]
      },
      hasilAkhir: {
        metrik: [
          { label: "Jumlah Sampel Responden", value: "150 Mahasiswa", keterangan: "Mencakup representasi mahasiswa angkatan 2020 hingga 2023." },
          { label: "Validitas Data Ilmiah", value: "α = 0.892", keterangan: "Tingkat reliabilitas instrumen sangat tinggi (Excellent Reliability)." },
          { label: "Status Publikasi", value: "Diterima JISEBI", keterangan: "Artikel ilmiah diterbitkan pada JISEBI (SINTA Terakreditasi)." }
        ],
        dampak: "Artikel ini menjadi rujukan empiris bagi pengembang perangkat lunak perguruan tinggi untuk memprioritaskan User-Centered Design (UCD) berbasis metrik yang dapat dipertanggungjawabkan secara akademik."
      },
      pelajaran: {
        wawasan: [
          "Data kuantitatif adalah instrumen negosiasi desain paling ampuh saat berhadapan dengan stakeholder teknis dan pimpinan perguruan tinggi.",
          "Kombinasi SUS (efektivitas fungsional) dan UEQ (dimensi hedonik & kebaruan visual) memberikan diagnosa UX yang sangat holistik.",
          "Sebagai desainer UI/UX berlatar belakang Sistem Informasi, kemampuan riset ilmiah memperkuat dasar setiap keputusan tata letak dan interaksi."
        ],
        refleksi: "Mempublikasikan riset ini mengasah ketelitian analitis saya dalam membedah pengalaman pengguna bukan hanya sebagai seni visual, melainkan sains terapan."
      }
    }
  }
];
