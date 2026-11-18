"use client";

import React from "react";
import Image from "next/image";
import {
  GraduationCap,
  Layers,
  FlaskConical,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Sparkles,
  BookOpen,
  Award
} from "lucide-react";
import { FigmaIcon } from "@/components/Icons";

export default function About() {
  return (
    <section id="tentang" className="py-20 sm:py-28 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mengenal Lebih Dekat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Tentang Saya
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Perpaduan rasa ingin tahu teknis, empati pengguna, dan pemikiran strategis bisnis.
          </p>
        </div>

        {/* Top Grid: Photo Card & Short Bio + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Profile Photo / Avatar Card (4 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              {/* Glowing gradient backplate */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-amber-500 opacity-30 group-hover:opacity-60 blur-xl transition-opacity duration-500" />
              
              <div className="relative rounded-2xl bg-navy-900 border border-slate-800 p-4 shadow-2xl overflow-hidden">
                {/* Figma Canvas Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-500">profile_mirza.fig</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-purple-950/70 border border-purple-500/30 text-purple-300 font-mono text-[10px]">
                    100% Zoom
                  </span>
                </div>

                {/* Avatar Image with alt text & lazy loading */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-navy-950 border border-slate-800/80 flex items-center justify-center">
                  <Image
                    src="/mirza-avatar.svg"
                    alt="Potret Muhammad Mirza Fatih, Mahasiswa Sistem Informasi dan UI/UX Designer"
                    width={380}
                    height={380}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Status bar under photo */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 font-medium text-[11px]">Siap Magang UI/UX Segera</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">Surabaya / Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Paragraph & Education (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Bio Paragraph (Strictly <= 60 words: 48 words) */}
            <div className="p-6 rounded-2xl bg-navy-900/60 border border-slate-800 backdrop-blur-sm relative">
              <div className="absolute top-4 right-4 text-slate-700 font-mono text-xs">
                #biografi
              </div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span>Riset Empatik, Desain Berdampak</span>
              </h3>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                Mahasiswa Sistem Informasi Universitas Negeri Surabaya dengan dedikasi tinggi pada antarmuka pengguna yang ramah dan fungsional. Menggabungkan empati riset UX dengan wawasan digital marketing untuk menciptakan produk digital yang tidak hanya memikat secara visual, tapi juga terbukti menyelesaikan masalah nyata dan mendorong konversi pengguna.
              </p>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-900/90 to-navy-850/80 border border-slate-800/90 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Pendidikan Formal
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> 2024 – Sekarang
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Universitas Negeri Surabaya (UNESA)
                  </h4>
                  <p className="text-cyan-400 font-medium text-sm mb-3">
                    S1 Sistem Informasi — Fakultas Teknik
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                    Fokus studi pada <strong className="text-white">Interaksi Manusia & Komputer (HCI)</strong>, Analisis & Perancangan Sistem Informasi, Pengukuran & Analisis Pengalaman Pengguna, Pemasaran Digital Cerdas.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60">
                      🎯 Fokus: HCI & User Research
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tiga Keahlian Utama (Three Core Skills Cards) */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Tiga Keahlian Utama
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Kompetensi inti yang siap saya kontribusikan sejak hari pertama magang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Skill 1: Figma dan Wireframing */}
            <div className="p-6 rounded-2xl bg-navy-900/70 border border-slate-800 hover:border-cyan-500/40 hover:shadow-cyan-glow/20 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-105 transition-transform">
                  <FigmaIcon className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Figma & Wireframing
                  </h4>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    UI/UX
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Membangun arsitektur informasi terstruktur dari sketsa kawat low-fidelity hingga purwarupa interaktif high-fidelity yang siap diserahterimakan ke pengembang.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Design System & Atomic Components</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Auto-layout Lanjutan & Responsive Grid</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Interactive Micro-interactions & Smart Animate</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">Figma</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">FigJam</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">Miro</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">Whimsical</span>
              </div>
            </div>

            {/* Skill 2: Uji Kegunaan (Maze dan SUS) */}
            <div className="p-6 rounded-2xl bg-navy-900/70 border border-slate-800 hover:border-purple-500/40 hover:shadow-purple-glow/20 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-105 transition-transform">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    Uji Kegunaan (Maze & SUS)
                  </h4>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    UX Research
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Menguji asumsi desain secara empiris dengan tolok ukur saintifik untuk menemukan titik friksi pengguna dan memvalidasi kemudahan navigasi produk.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>System Usability Scale (SUS Brooke)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Maze Remote Testing & Heatmap Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>In-depth User Interview & Think-Aloud</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">Maze</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">SUS Metrics</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">UEQ Framework</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">Heuristics</span>
              </div>
            </div>

            {/* Skill 3: Strategi Konten Media Sosial */}
            <div className="p-6 rounded-2xl bg-navy-900/70 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    Strategi Konten Medsos
                  </h4>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Marketing
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Mengembangkan materi visual, copy persuasif, dan funnel pemasaran digital yang menghubungkan audiens sosial media ke halaman produk konversi tinggi.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>A/B Testing Visual Hook & Call-to-Action</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Meta Business Suite & Google Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Customer Journey Mapping & Persona</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">Content Funnel</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">Meta Ads</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">Copywriting</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
