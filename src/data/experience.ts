export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  keyResponsibilities: string[];
  achievements: string[];
  skills: string[];
  accentColor: "cyan" | "purple";
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "vinix7-internship",
    role: "Magang Pemasaran Digital & Pemasar Media Sosial",
    company: "VINIX7",
    type: "Magang (Internship)",
    period: "Februari 2024 – Juni 2024",
    location: "Surabaya, Jawa Timur (Hybrid)",
    description: "Memimpin perancangan aset visual kreatif, copywriting, dan strategi distribusi konten media sosial serta mengintegrasikan pemahaman perilaku pengguna ke dalam funnel pemasaran digital.",
    keyResponsibilities: [
      "Merancang strategi kalender konten bulanan dan memproduksi aset visual antarmuka kampanye promosi di Instagram dan TikTok.",
      "Menerapkan prinsip hierarki visual dan tipografi UI ke dalam desain media sosial untuk memaksimalkan keterbacaan (readability) audiens ponsel.",
      "Melakukan A/B testing terhadap hook visual dan variasi copy untuk mengidentifikasi materi promosi dengan tingkat konversi tertinggi.",
      "Menganalisis metrik mingguan (Reach, Engagement Rate, Click-Through Rate) menggunakan Meta Business Suite dan Google Analytics."
    ],
    achievements: [
      "Mendongkrak rata-rata Instagram Engagement Rate sebesar +38% dalam periode 3 bulan pertama.",
      "Menghasilkan lebih dari 45+ aset visual terstandarisasi yang kini menjadi panduan identitas merek (Brand Style Guide) internal.",
      "Membangun kolaborasi sinergis antara tim konten visual dan tim pengembang produk digital."
    ],
    skills: [
      "Social Media Strategy",
      "Visual Hierarchy & Copywriting",
      "Meta Business Suite",
      "A/B Testing",
      "Google Analytics",
      "Figma for Marketing"
    ],
    accentColor: "cyan"
  },
  {
    id: "vinix7-msib",
    role: "Studi Independen Pemasaran Digital & Pertumbuhan Produk",
    company: "VINIX7 (MSIB Batch 5 – Kampus Merdeka)",
    type: "Program Resmi Kemendikbudristek RI",
    period: "Agustus 2023 – Desember 2023",
    location: "Surabaya / Daring (Remote)",
    description: "Mengikuti program akselerasi kompetensi profesional bersertifikasi nasional dengan fokus pada Digital Marketing Strategy, Customer Journey Mapping, SEO/SEM, dan Product Growth Hacking.",
    keyResponsibilities: [
      "Menyusun User Persona dan Customer Journey Map komprehensif untuk memetakan titik gesekan (pain points) calon pembeli pada platform web e-commerce.",
      "Merancang kampanye digital terpadu mencakup optimasi Search Engine Optimization (SEO on-page/off-page) dan periklanan berbayar.",
      "Mengembangkan proyek akhir (Capstone Project) berupa audit pengalaman pengguna dan strategi pertumbuhan merek dengan nilai A (Sangat Memuaskan).",
      "Mempresentasikan hasil riset pasar dan rekomendasi desain antarmuka kepada mentor industri dan panel praktisi pemasaran digital."
    ],
    achievements: [
      "Lulus dengan Predikat Memuaskan (Nilai A, Skor Akhir 92.4/100) dari lebih 100+ peserta program.",
      "Menyelesaikan Capstone Project terpilih sebagai 'Top 5 Best Marketing & UX Audit Campaign' pada MSIB Batch 5.",
      "Mengintegrasikan ilmu data-driven marketing sebagai nilai tambah strategis dalam merancang produk UI/UX yang berorientasi konversi."
    ],
    skills: [
      "Customer Journey Mapping",
      "Data-Driven Marketing",
      "Search Engine Optimization (SEO)",
      "Growth Strategy",
      "User Persona Development",
      "Performance Reporting"
    ],
    accentColor: "purple"
  }
];
