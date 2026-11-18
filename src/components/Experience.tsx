"use client";

import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Award,
  ArrowUpRight
} from "lucide-react";
import { experiencesData } from "@/data/experience";

export default function Experience() {
  return (
    <section id="pengalaman" className="py-20 sm:py-28 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Jejak Pengalaman</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Pengalaman & Linimasa
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Pengalaman praktis di industri dan program percepatan nasional yang membentuk pola pikir desain berbasis konversi dan perilaku pengguna nyata.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiencesData.map((exp, idx) => {
            const isCyan = exp.accentColor === "cyan";

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot Marker with Beacon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-navy-950 border-2 flex items-center justify-center transition-transform group-hover:scale-125 duration-300 ${
                    isCyan
                      ? "border-cyan-400 text-cyan-400 shadow-cyan-glow/50"
                      : "border-purple-400 text-purple-400 shadow-purple-glow/50"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isCyan ? "bg-cyan-400" : "bg-purple-400"
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-navy-900/80 border border-slate-800 hover:border-slate-700 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
                  {/* Header: Role, Company, Period, Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                            isCyan
                              ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                              : "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                          }`}
                        >
                          {exp.type}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-cyan-400">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-navy-950 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role Overview */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                      Tanggung Jawab & Kontribusi Kunci:
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.keyResponsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isCyan ? "text-cyan-400" : "text-purple-400"
                            }`}
                          />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quantifiable Achievements */}
                  <div className="p-4 rounded-xl bg-navy-950/90 border border-slate-800/90 mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 font-bold flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      <span>Pencapaian Terukur:</span>
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Applied Tags */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs text-slate-400 font-medium mr-1">Keahlian:</span>
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 font-mono text-[11px] border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
