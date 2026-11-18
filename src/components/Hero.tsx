"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Check,
  Sparkles,
  ChevronDown,
  GraduationCap
} from "lucide-react";
import { LinkedInIcon, GitHubIcon, InstagramIcon } from "@/components/Icons";

interface HeroProps {
  onOpenCvModal: () => void;
}

export default function Hero({ onOpenCvModal }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "mirzafatih@email.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("proyek");
    if (el) {
      const navHeight = 70;
      window.scrollTo({
        top: el.offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] sm:min-h-screen pt-24 sm:pt-32 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Figma-style decorative background canvas grid & spotlights */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft radial spotlights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[350px] sm:h-[450px] bg-gradient-radial from-cyan-500/15 via-purple-600/10 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-10 right-5 sm:right-20 w-72 h-72 bg-purple-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-20 left-5 sm:left-20 w-80 h-80 bg-cyan-600/10 blur-[100px] rounded-full" />
        
        {/* Figma canvas subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `radial-gradient(circle, #38BDF8 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Signature Badge: STILL IN BETA. */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-wider mb-6 shadow-sm hover:border-amber-400/50 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span>STILL IN BETA.</span>
          <span className="text-[10px] text-amber-400/70 font-sans hidden sm:inline">
            — Eksplorasi Desain Berkelanjutan
          </span>
        </div>

        {/* Sapaan Utama */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
          Halo, saya{" "}
          <span className="relative inline-block">
            <span className="text-white">Mirza</span>
            <span className="text-cyan-400">.</span>
            {/* Figma-like selection box decoration */}
            <span className="hidden sm:inline-block absolute -top-1 -right-3 w-2 h-2 border border-cyan-400 bg-navy-950" />
            <span className="hidden sm:inline-block absolute -bottom-1 -left-3 w-2 h-2 border border-cyan-400 bg-navy-950" />
          </span>
        </h1>

        {/* Satu baris bidang */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-2xl md:text-3xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
            UI/UX Design
          </span>
          <span className="text-purple-400 font-light">·</span>
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Digital Marketing
          </span>
        </div>

        {/* Kalimat Nilai (Value Proposition) */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8">
          Merancang produk digital yang <span className="text-white font-semibold">intuitif</span>,{" "}
          <span className="text-white font-semibold">estetik</span>, dan diakselerasi strategi{" "}
          <span className="text-cyan-300 font-semibold">pemasaran berbasis data</span> untuk mendorong pertumbuhan bisnis nyata.
        </p>

        {/* Recruiter Quick Info Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 mb-9">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-900/80 border border-slate-800 text-slate-300">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>S1 Sistem Informasi UNESA</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-900/80 border border-slate-800 text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Alum MSIB Batch 5</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Terbuka untuk Magang UI/UX</span>
          </div>
        </div>

        {/* Dua Tombol CTA Utama */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-11">
          <a
            href="#proyek"
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-navy-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 shadow-cyan-glow hover:shadow-cyan-400/60 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span>Lihat Proyek</span>
            <ArrowRight className="w-4 h-4 text-navy-950 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500/40 transition-all hover:scale-[1.01] active:scale-[0.99] group shadow-sm"
              title="Buka Pratinjau CV"
            >
              <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Unduh CV</span>
            </button>
            <a
              href="/Muhammad_Mirza_Fatih_CV.pdf"
              download="Muhammad_Mirza_Fatih_CV.pdf"
              className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
              title="Unduh langsung PDF"
              aria-label="Unduh langsung berkas PDF CV Mirza"
            >
              <span className="text-xs font-mono font-bold">.PDF</span>
            </a>
          </div>
        </div>

        {/* Ikon Tautan Sosial: LinkedIn, GitHub, Instagram, Email */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
            Taut Menghubungkan
          </span>
          <div className="flex items-center justify-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/mirzafatih"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all group"
              aria-label="Profil LinkedIn Muhammad Mirza Fatih"
              title="LinkedIn: Muhammad Mirza Fatih"
            >
              <LinkedInIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mirzafatih"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all group"
              aria-label="Profil GitHub Muhammad Mirza Fatih"
              title="GitHub: Mirza Fatih"
            >
              <GitHubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/mirzafatih"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-purple-950/60 border border-slate-800 hover:border-purple-500/40 text-slate-400 hover:text-purple-400 transition-all group"
              aria-label="Profil Instagram Muhammad Mirza Fatih"
              title="Instagram: @mirzafatih"
            >
              <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            {/* Email with copy tooltip */}
            <button
              onClick={handleCopyEmail}
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all group relative"
              aria-label="Salin alamat email Mirza"
              title="Klik untuk menyalin email"
            >
              {copiedEmail ? (
                <Check className="w-5 h-5 text-emerald-400 animate-in zoom-in-75 duration-200" />
              ) : (
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              )}
              {copiedEmail && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-500 text-navy-950 text-[10px] font-bold whitespace-nowrap shadow-md">
                  Tersalin!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Gentle scroll indicator */}
        <div className="mt-14 hidden sm:flex flex-col items-center justify-center animate-bounce opacity-50">
          <a
            href="#tentang"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("tentang");
              if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
            }}
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Gulir ke bagian Tentang"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
