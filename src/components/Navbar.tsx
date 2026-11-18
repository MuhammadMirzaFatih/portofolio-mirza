"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Download, FileText, Sparkles, ExternalLink } from "lucide-react";

interface NavbarProps {
  onOpenCvModal: () => void;
}

export default function Navbar({ onOpenCvModal }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>("beranda");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang", href: "#tentang" },
    { label: "Proyek", href: "#proyek" },
    { label: "Pengalaman", href: "#pengalaman" },
    { label: "Kontak", href: "#kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["beranda", "tentang", "proyek", "pengalaman", "kontak"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = 70;
      const targetPosition = targetElement.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, "#beranda")}
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Kembali ke Beranda Muhammad Mirza Fatih"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-navy-900 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-cyan-400 text-base tracking-tighter">M</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                Mirza Fatih<span className="text-cyan-400">.</span>
              </span>
              <span className="text-[10px] font-medium text-slate-400 hidden xs:block">
                UI/UX Designer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navigasi Utama">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-cyan-400 bg-cyan-950/40 border border-cyan-500/20"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500/40 transition-all shadow-sm group"
              title="Pratinjau CV Interaktif"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Lihat CV</span>
            </button>
            <a
              href="/Muhammad_Mirza_Fatih_CV.pdf"
              download="Muhammad_Mirza_Fatih_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 transition-all shadow-cyan-glow hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Unduh Berkas CV PDF Muhammad Mirza Fatih"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh CV</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/Muhammad_Mirza_Fatih_CV.pdf"
              download="Muhammad_Mirza_Fatih_CV.pdf"
              className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1"
              aria-label="Unduh CV PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="text-[11px]">CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-xl border-b border-slate-800 px-5 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2 mb-5" aria-label="Menu Ponsel">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-cyan-400 bg-cyan-950/50 border border-cyan-500/20"
                      : "text-slate-300 hover:bg-slate-800/50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
          </nav>

          <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Pratinjau CV Interaktif</span>
            </button>
            <a
              href="/Muhammad_Mirza_Fatih_CV.pdf"
              download="Muhammad_Mirza_Fatih_CV.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-navy-950 bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download className="w-4 h-4" />
              <span>Unduh Berkas CV (.PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
