"use client";

import React, { useEffect } from "react";
import {
  X,
  Download,
  FileText,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Layers,
  Award,
  Sparkles
} from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-navy-950/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl bg-navy-900 border border-slate-700 shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-navy-950/90 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <h2 id="cv-modal-title" className="text-sm font-bold text-white">
              Curriculum Vitae — Muhammad Mirza Fatih
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/Muhammad_Mirza_Fatih_CV.pdf"
              download="Muhammad_Mirza_Fatih_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-navy-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="Tutup jendela CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document View */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-300 text-xs sm:text-sm">
          {/* Header of Resume */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
              Muhammad Mirza Fatih
            </h1>
            <p className="text-cyan-400 font-semibold text-sm sm:text-base mb-3">
              UI/UX Designer · Digital Marketing Specialist
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" /> Surabaya, Jawa Timur
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" /> mirzafatih@email.com
              </span>
              <span className="flex items-center gap-1">
                <LinkedInIcon className="w-3.5 h-3.5 text-slate-500" /> linkedin.com/in/mirzafatih
              </span>
            </div>
          </div>

          {/* Ringkasan Profil */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ringkasan Profil</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Mahasiswa Sistem Informasi Universitas Negeri Surabaya dengan fokus keahlian pada User Interface (UI), User Experience (UX), pengujian kegunaan empiris (Maze & SUS), serta strategi pemasaran digital. Berpengalaman merancang 4 produk digital teruji dan memadukan riset pengguna dengan optimasi konversi produk.
            </p>
          </div>

          {/* Pendidikan */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Pendidikan</span>
            </h3>
            <div className="p-3.5 rounded-xl bg-navy-950 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h4 className="font-bold text-white text-sm">Universitas Negeri Surabaya (UNESA)</h4>
                <span className="text-xs font-mono text-slate-400">2024 – Sekarang</span>
              </div>
              <p className="text-cyan-400 text-xs font-semibold mb-1">
                S1 Sistem Informasi — Fakultas Teknik
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fokus: Interaksi Manusia & Komputer (HCI), Analisis & Perancangan Sistem Informasi, Pengukuran & Analisis Pengalaman Pengguna, Pemasaran Digital Cerdas.
              </p>
            </div>
          </div>

          {/* Pengalaman Kerja & Magang */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Pengalaman Kerja &amp; Program Magang</span>
            </h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-navy-950 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h4 className="font-bold text-white text-sm">
                    VINIX7 — Magang Pemasaran Digital & Media Sosial
                  </h4>
                  <span className="text-xs font-mono text-slate-400">Feb 2024 – Jun 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 mt-2">
                  <li>Meningkatkan Instagram engagement rate sebesar +38% melalui visual hierarchy UI.</li>
                  <li>Memproduksi 45+ aset grafis terstandarisasi untuk kampanye multi-kanal.</li>
                  <li>Melakukan A/B testing visual hook dan copywriting berorientasi konversi.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-950 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h4 className="font-bold text-white text-sm">
                    VINIX7 (MSIB Kampus Merdeka Batch 5) — Studi Independen Pemasaran Digital
                  </h4>
                  <span className="text-xs font-mono text-slate-400">Agu 2023 – Des 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 mt-2">
                  <li>Lulus dengan predikat Memuaskan (Nilai A, Skor Akhir 92.4/100).</li>
                  <li>Memetakan Customer Journey Map & User Persona untuk platform web e-commerce.</li>
                  <li>Menyelesaikan proyek capstone 'Top 5 Best Marketing & UX Audit Campaign'.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Portofolio & Publikasi */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Portofolio &amp; Publikasi Ilmiah</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-navy-950 border border-slate-800">
                <span className="font-bold text-white block">1. EduTrack.id</span>
                <span className="text-slate-400 block text-[11px] mb-1">Platform Belajar Daring Gamifikasi</span>
                <span className="text-cyan-400 font-mono text-[11px]">Skor SUS: 84.5 · Success Rate: 94%</span>
              </div>
              <div className="p-3 rounded-xl bg-navy-950 border border-slate-800">
                <span className="font-bold text-white block">2. TechNotes</span>
                <span className="text-slate-400 block text-[11px] mb-1">Developer Documentation & Snippet</span>
                <span className="text-purple-400 font-mono text-[11px]">Akses &lt; 0.5s · Reduksi Langkah: 60%</span>
              </div>
              <div className="p-3 rounded-xl bg-navy-950 border border-slate-800">
                <span className="font-bold text-white block">3. Nin's Kitchen</span>
                <span className="text-slate-400 block text-[11px] mb-1">Aplikasi Pesanan UMKM Palembang</span>
                <span className="text-amber-400 font-mono text-[11px]">Pesan dalam 3 Tap · Efisiensi +60%</span>
              </div>
              <div className="p-3 rounded-xl bg-navy-950 border border-slate-800">
                <span className="font-bold text-white block">4. Artikel Jurnal JISEBI</span>
                <span className="text-slate-400 block text-[11px] mb-1">Riset Usability SIAKAD (SUS & UEQ)</span>
                <span className="text-cyan-400 font-mono text-[11px]">150 Responden · SINTA Terakreditasi</span>
              </div>
            </div>
          </div>

          {/* Keahlian Teknis */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Keahlian &amp; Perangkat Lunak</span>
            </h3>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {[
                "Figma (Auto-layout, Components)",
                "Usability Testing (Maze & SUS)",
                "Information Architecture",
                "Wireframing & Prototyping",
                "Digital Marketing Strategy",
                "Meta Business Suite",
                "Google Analytics",
                "A/B Testing",
                "Next.js & Tailwind CSS",
                "Heuristic Evaluation"
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-navy-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400">
            Berkas PDF siap dicetak dan lolos ATS
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 transition-colors"
            >
              Tutup
            </button>
            <a
              href="/Muhammad_Mirza_Fatih_CV.pdf"
              download="Muhammad_Mirza_Fatih_CV.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-navy-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-cyan-glow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh Berkas (.PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
