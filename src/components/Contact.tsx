"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Download,
  Sparkles,
  MapPin,
  Clock,
  FileText
} from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";

interface ContactProps {
  onOpenCvModal: () => void;
}

export default function Contact({ onOpenCvModal }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const email = "mirzafatih@email.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="kontak" className="py-20 sm:py-28 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Availability Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Tersedia untuk Magang UI/UX Segera</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Mari Terhubung & Berkolaborasi
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Apakah perusahaan Anda sedang mencari kandidat magang UI/UX Design yang analitis, terbiasa dengan riset pengguna, dan memahami metrik konversi pemasaran digital? Pintu komunikasi saya selalu terbuka!
          </p>
        </div>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {/* Card 1: Email */}
          <div className="p-6 rounded-2xl bg-navy-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Kirimkan Surel Langsung
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                {email}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Respon cepat untuk undangan wawancara magang, tinjauan portofolio, atau kolaborasi proyek desain.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-slate-800">
              <a
                href={`mailto:${email}?subject=Tawaran%20Magang%20UI/UX%20Design%20-%20Muhammad%20Mirza%20Fatih`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-navy-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                <span>Buka Surel</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                title="Salin alamat surel"
                aria-label="Salin alamat surel ke papan klip"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: LinkedIn */}
          <div className="p-6 rounded-2xl bg-navy-900/90 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-105 transition-transform">
                <LinkedInIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Jejaring Profesional
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                linkedin.com/in/mirzafatih
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Terhubung di LinkedIn untuk memantau pembaruan studi kasus, rekam jejak akademik, dan diskusi seputar UI/UX.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <a
                href="https://linkedin.com/in/mirzafatih"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-purple-glow/30"
              >
                <span>Kunjungi Profil LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Location & CV Download Banner */}
        <div className="p-5 rounded-2xl bg-navy-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Surabaya, Jawa Timur (Siap On-site / Remote)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Respon Surel &lt; 24 Jam</span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onOpenCvModal}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Pratinjau CV</span>
            </button>
            <a
              href="/Muhammad_Mirza_Fatih_CV.pdf"
              download="Muhammad_Mirza_Fatih_CV.pdf"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-navy-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
