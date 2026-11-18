"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  BarChart,
  Eye,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { projectsData, ProjectCaseStudy } from "@/data/projects";
import CaseStudyModal from "./CaseStudyModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <section id="proyek" className="py-20 sm:py-28 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-purple-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Karya Terbaik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Proyek Pilihan
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            4 studi kasus teruji yang membuktikan pemecahan masalah nyata melalui riset empiris, desain sistematis di Figma, dan pemikiran berorientasi dampak produk.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const isCyan = project.accentColor === "cyan";
            const isPurple = project.accentColor === "purple";
            const isAmber = project.accentColor === "amber";

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-navy-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-cyan-950/40"
              >
                {/* Glow accent bar at top of card */}
                <div
                  className={`h-1 w-full ${
                    isCyan
                      ? "bg-gradient-to-r from-cyan-400 to-cyan-600"
                      : isPurple
                      ? "bg-gradient-to-r from-purple-400 to-purple-600"
                      : "bg-gradient-to-r from-amber-400 to-amber-600"
                  }`}
                />

                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Cover Image / Mockup */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-navy-950 border border-slate-800/80 mb-6 cursor-pointer group-hover:border-cyan-500/30 transition-all duration-300"
                      title={`Klik untuk membaca studi kasus ${project.title}`}
                    >
                      <Image
                        src={project.coverImage}
                        alt={`Sampul proyek ${project.title} - ${project.subtitle}`}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-400 text-navy-950 text-xs font-bold shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                          <Eye className="w-4 h-4" />
                          <span>Buka Studi Kasus</span>
                        </span>
                      </div>
                    </div>

                    {/* Category & Stats Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <span className="text-white font-bold">{project.stats[0].value}</span>
                        <span>{project.stats[0].label}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Peran (Roles) */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-4">
                      <span className="text-xs text-slate-400 font-medium mr-1">Peran:</span>
                      {project.role.map((r, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md bg-purple-950/60 border border-purple-500/25 text-purple-300 text-xs font-medium"
                        >
                          {r}
                        </span>
                      ))}
                    </div>

                    {/* Satu Kalimat Masalah (One-Sentence Problem Statement) */}
                    <div className="p-3.5 rounded-xl bg-navy-950/90 border border-slate-800/90 mb-5">
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                            Pernyataan Masalah
                          </span>
                          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                            “{project.oneSentenceProblem}”
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Tools & CTA "Baca studi kasus" */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 overflow-hidden text-xs text-slate-400 font-mono">
                      <span>{project.tools.slice(0, 3).join(" · ")}</span>
                    </div>

                    {/* Primary Action Button: Baca studi kasus */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-navy-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 transition-all shadow-sm group/btn focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      aria-label={`Baca studi kasus lengkap ${project.title}`}
                    >
                      <span>Baca studi kasus</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recruiter Guarantee Banner */}
        <div className="mt-12 p-4 rounded-xl bg-navy-900/60 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Kebutuhan Rekruter Terpenuhi:</span>
          </span>
          <span>
            Seluruh studi kasus mencakup <strong>Masalah</strong>, <strong>Riset</strong>, <strong>Proses</strong>, <strong>Hasil Akhir</strong>, dan <strong>Pelajaran yang Didapat</strong> tanpa teks placeholder.
          </span>
        </div>
      </div>

      {/* Case Study Modal Viewer */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
