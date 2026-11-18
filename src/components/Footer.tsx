"use client";

import React from "react";
import { ArrowUp, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-navy-950 py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          {/* Brand & Name & Year */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-bold text-white tracking-tight">
              Muhammad Mirza Fatih
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="text-slate-400">
              © 2026. Seluruh hak cipta dilindungi.
            </span>
          </div>

          {/* Tagline / Tech Stack */}
          <div className="text-center sm:text-right text-[11px] text-slate-500">
            <span>Didesain dengan pendekatan Figma, dibangun menggunakan Next.js &amp; Tailwind CSS.</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Kembali ke bagian paling atas halaman"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-[11px] font-medium hidden xs:inline">Ke Atas</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
