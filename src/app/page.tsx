"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CVModal from "@/components/CVModal";

export default function Home() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Fixed Sticky Header */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Single-Page Content with Anchor Sections */}
      <main className="flex-1">
        {/* 1. Beranda (Hero Section) */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 2. Tentang (About Section) */}
        <About />

        {/* 3. Proyek (Core Projects & Case Studies) */}
        <Projects />

        {/* 4. Pengalaman (Work & Internship Timeline) */}
        <Experience />

        {/* 5. Kontak (Contact CTA Section) */}
        <Contact onOpenCvModal={() => setIsCvModalOpen(true)} />
      </main>

      {/* 6. Kaki Halaman (Footer) */}
      <Footer />

      {/* Interactive CV Modal Viewer */}
      <CVModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
