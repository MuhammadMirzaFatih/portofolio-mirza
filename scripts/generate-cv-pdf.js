const fs = require('fs');
const path = require('path');

// Simple valid standard PDF 1.4 generator
function createResumePdf() {
  const lines = [
    "%PDF-1.4",
    "1 0 obj",
    "<< /Type /Catalog /Pages 2 0 R >>",
    "endobj",
    "2 0 obj",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "endobj",
    "3 0 obj",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>",
    "endobj",
    "5 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "endobj",
    "6 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "endobj"
  ];

  // PDF Text stream
  const contentStream = `
BT
/F1 22 Tf
50 780 Td
(MUHAMMAD MIRZA FATIH) Tj
ET

BT
/F1 12 Tf
50 760 Td
(UI/UX Designer & Digital Marketing Enthusiast) Tj
ET

BT
/F2 10 Tf
50 745 Td
(Surabaya, Indonesia | mirzafatih@email.com | linkedin.com/in/mirzafatih | github.com/mirzafatih) Tj
ET

BT
/F1 12 Tf
50 715 Td
(TENTANG SAYA) Tj
ET

BT
/F2 10 Tf
50 698 Td
(Mahasiswa Sistem Informasi Universitas Negeri Surabaya dengan keahlian dalam riset pengguna, wireframing,) Tj
0 -14 Td
(antarmuka produk digital berbasis Figma, serta optimasi strategi pertumbuhan pemasaran digital.) Tj
ET

BT
/F1 12 Tf
50 655 Td
(PENDIDIKAN) Tj
ET

BT
/F1 10 Tf
50 638 Td
(Universitas Negeri Surabaya (UNESA)) Tj
/F2 10 Tf
300 0 Td
(2022 - Sekarang) Tj
ET

BT
/F2 10 Tf
50 624 Td
(S1 Sistem Informasi | Fokus: Human-Computer Interaction & Analisis Sistem Informasi) Tj
ET

BT
/F1 12 Tf
50 595 Td
(PENGALAMAN KERJA & MAGANG) Tj
ET

BT
/F1 10 Tf
50 578 Td
(VINIX7 - Magang Pemasaran Digital & Media Sosial) Tj
/F2 10 Tf
250 0 Td
(Feb 2024 - Jun 2024) Tj
ET

BT
/F2 9 Tf
50 564 Td
(- Merancang strategi konten visual, copy, dan micro-interaction kampanye digital multi-kanal.) Tj
0 -12 Td
(- Meningkatkan engagement rate Instagram sebesar 38% dan memproduksi 45+ aset grafis terstandarisasi.) Tj
0 -12 Td
(- Menerapkan prinsip UI visual hierarchy untuk memaksimalkan keterbacaan audiens ponsel.) Tj
ET

BT
/F1 10 Tf
50 522 Td
(VINIX7 - Studi Independen MSIB Kampus Merdeka Batch 5) Tj
/F2 10 Tf
230 0 Td
(Agu 2023 - Des 2023) Tj
ET

BT
/F2 9 Tf
50 508 Td
(- Lulus dengan Predikat Memuaskan (Nilai A, Skor Akhir 92.4/100).) Tj
0 -12 Td
(- Menganalisis Customer Journey Mapping, SEO/SEM, dan Consumer Behavior Analysis untuk produk web.) Tj
ET

BT
/F1 12 Tf
50 468 Td
(PORTOFOLIO & PROYEK UNGGULAN) Tj
ET

BT
/F1 10 Tf
50 450 Td
(1. EduTrack.id - Platform Belajar Daring (UI/UX Designer & Researcher)) Tj
ET
BT
/F2 9 Tf
50 436 Td
(- Merancang antarmuka gamifikasi dan modul interaktif. Hasil SUS Score 84.5 (Excellent) dan Task Success 94%.) Tj
ET

BT
/F1 10 Tf
50 414 Td
(2. TechNotes - Developer Documentation & Snippet Workspace) Tj
ET
BT
/F2 9 Tf
50 400 Td
(- Mendesain antarmuka keyboard-first, dark mode ergonomis, dan reduksi langkah operasional sebesar 60%.) Tj
ET

BT
/F1 10 Tf
50 378 Td
(3. Nin's Kitchen - Aplikasi Pemesanan UMKM Kuliner Palembang) Tj
ET
BT
/F2 9 Tf
50 364 Td
(- Memangkas proses pemesanan manual menjadi 3 tap terintegrasi WhatsApp, nihil kesalahan pesanan.) Tj
ET

BT
/F1 10 Tf
50 342 Td
(4. Publikasi Jurnal JISEBI - Evaluasi Usability Sistem Informasi Akademik) Tj
ET
BT
/F2 9 Tf
50 328 Td
(- Penulis utama riset empiris SUS & UEQ dengan 150 responden, merumuskan 5 rekomendasi heuristik.) Tj
ET

BT
/F1 12 Tf
50 295 Td
(KEAHLIAN UTAMA) Tj
ET

BT
/F2 9 Tf
50 278 Td
(- UI/UX Tools: Figma (Auto-layout, Design System, Prototyping), FigJam, Miro, Whimsical) Tj
0 -13 Td
(- Usability & UX Research: Usability Testing, Maze Remote Testing, SUS Brooke, UEQ, User Interview) Tj
0 -13 Td
(- Digital Marketing: Social Media Strategy, A/B Testing, Meta Business Suite, Google Analytics, SEO) Tj
0 -13 Td
(- Tech Stack: Next.js, React, Tailwind CSS, HTML5/CSS3, TypeScript Dasar, Git/GitHub) Tj
ET
`;

  const streamBytes = Buffer.from(contentStream, "utf-8");
  const obj4 = `4 0 obj\n<< /Length ${streamBytes.length} >>\nstream\n${contentStream}\nendstream\nendobj\n`;

  let pdfText = lines.join("\n") + "\n" + obj4;

  // xref table
  const offsets = [
    "0000000000 65535 f \n"
  ];
  
  // calculate xref offsets
  const objects = [
    "1 0 obj",
    "2 0 obj",
    "3 0 obj",
    "4 0 obj",
    "5 0 obj",
    "6 0 obj"
  ];

  const objOffsets = {};
  objects.forEach(objHeader => {
    const idx = pdfText.indexOf(objHeader);
    const objNum = parseInt(objHeader.split(" ")[0]);
    objOffsets[objNum] = String(idx).padStart(10, '0') + " 00000 n \n";
  });

  const xrefOffset = pdfText.length;
  let xref = `xref\n0 7\n0000000000 65535 f \n`;
  for (let i = 1; i <= 6; i++) {
    xref += objOffsets[i];
  }
  xref += `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  pdfText += xref;

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, 'Muhammad_Mirza_Fatih_CV.pdf');
  fs.writeFileSync(outputPath, pdfText);
  console.log('CV PDF generated successfully at:', outputPath);
}

createResumePdf();
