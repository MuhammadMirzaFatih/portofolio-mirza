"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Search,
  PenTool,
  Award,
  Sparkles,
  BarChart3,
  BookOpen,
  Calendar,
  Layers,
  Quote
} from "lucide-react";
import { ProjectCaseStudy } from "@/data/projects";

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<"masalah" | "riset" | "proses" | "hasil" | "pelajaran">("masalah");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const tabs = [
    { id: "masalah", label: "1. Masalah", icon: AlertCircle },
    { id: "riset", label: "2. Riset", icon: Search },
    { id: "proses", label: "3. Proses", icon: PenTool },
    { id: "hasil", label: "4. Hasil Akhir", icon: Award },
    { id: "pelajaran", label: "5. Pelajaran", icon: Lightbulb },
  ] as const;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-navy-950/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-navy-900 border border-slate-700/80 shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-navy-950/90 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              Studi Kasus Lengkap
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400 hidden sm:inline">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors focus:ring-2 focus:ring-cyan-400"
            aria-label="Tutup jendela studi kasus"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Project Title Header */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.timeline}
              </span>
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              {project.subtitle}
            </p>

            {/* Roles and Tools */}
            <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-800 text-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-slate-400 font-semibold">Peran Saya:</span>
                {project.role.map((r, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-md bg-purple-950/60 text-purple-300 border border-purple-500/30 font-medium"
                  >
                    {r}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-slate-400 font-semibold">Tools:</span>
                {project.tools.map((t, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-navy-950/80 border border-slate-800">
            {project.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-lg sm:text-2xl font-extrabold text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Cover Preview Image */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-800 bg-navy-950">
            <Image
              src={project.coverImage}
              alt={`Tampilan antarmuka ${project.title}`}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Tab Navigation for 5 Core Case Study Sections */}
          <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="space-y-6">
            {/* 1. MASALAH */}
            {activeTab === "masalah" && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-slate-200">
                  <h4 className="text-base font-bold text-red-400 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Latar Belakang & Inti Masalah</span>
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {project.caseStudy.masalah.ringkasan}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Titik Hambatan Utama (Pain Points)
                  </h5>
                  <div className="space-y-2.5">
                    {project.caseStudy.masalah.poinKunci.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-950 border border-slate-800/80"
                      >
                        <span className="w-5 h-5 rounded-full bg-red-950 text-red-400 border border-red-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. RISET */}
            {activeTab === "riset" && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <Search className="w-4 h-4 text-cyan-400" />
                    <span>Metodologi Riset yang Dijalankan</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.caseStudy.riset.metode.map((m, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-navy-950 border border-slate-800 text-xs text-slate-300 leading-relaxed"
                      >
                        <span className="font-bold text-cyan-400 block mb-1">Metode 0{i + 1}</span>
                        {m}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Temuan Riset Kunci (Key Insights)</h4>
                  <div className="space-y-2.5">
                    {project.caseStudy.riset.temuan.map((t, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-950 border border-slate-800/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-300">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {project.caseStudy.riset.kutipanPengguna && (
                  <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 flex items-start gap-3">
                    <Quote className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                    <p className="text-xs sm:text-sm italic text-purple-200">
                      {project.caseStudy.riset.kutipanPengguna}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* 3. PROSES */}
            {activeTab === "proses" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <PenTool className="w-4 h-4 text-cyan-400" />
                    <span>Tahapan Desain & Eksekusi</span>
                  </h4>
                  <div className="space-y-3">
                    {project.caseStudy.proses.tahapan.map((step, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-navy-950 border border-slate-800 hover:border-slate-700 transition-colors"
                      >
                        <h5 className="text-xs sm:text-sm font-bold text-cyan-300 mb-1">
                          {step.judul}
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {step.deskripsi}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Fitur & Solusi Desain Utama</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.caseStudy.proses.fiturUtama.map((feature, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-navy-900 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 4. HASIL AKHIR */}
            {activeTab === "hasil" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>Metrik Evaluasi & Validasi Kuantitatif</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.caseStudy.hasilAkhir.metrik.map((m, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-navy-950 border border-cyan-500/20 text-center"
                      >
                        <div className="text-xs font-semibold text-slate-400 mb-1">{m.label}</div>
                        <div className="text-xl sm:text-2xl font-black text-cyan-400 mb-2">
                          {m.value}
                        </div>
                        <p className="text-[11px] text-slate-300 leading-tight">{m.keterangan}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    Dampak Nyata Solusi
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {project.caseStudy.hasilAkhir.dampak}
                  </p>
                </div>
              </div>
            )}

            {/* 5. PELAJARAN */}
            {activeTab === "pelajaran" && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span>Wawasan yang Dipetik (Key Takeaways)</span>
                  </h4>
                  <div className="space-y-3">
                    {project.caseStudy.pelajaran.wawasan.map((w, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-950 border border-slate-800"
                      >
                        <span className="w-5 h-5 rounded-full bg-amber-950 text-amber-400 border border-amber-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{w}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-navy-950 border border-slate-800">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Refleksi Profesional
                  </h5>
                  <p className="text-xs sm:text-sm italic text-slate-300 leading-relaxed">
                    “{project.caseStudy.pelajaran.refleksi}”
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="px-6 py-4 bg-navy-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400">
            Dibuat dengan standar proses UI/UX &amp; Riset Terstruktur
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Tutup Studi Kasus
            </button>
            {project.livePreviewUrl && project.livePreviewUrl !== "#" ? (
              <a
                href={project.livePreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-navy-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                <span>Buka Dokumen Publikasi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-navy-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                <span>Kembali ke Halaman</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
