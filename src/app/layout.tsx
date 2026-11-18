import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mirza | UI/UX Designer & Digital Marketing",
  description:
    "Portofolio Muhammad Mirza Fatih, mahasiswa Sistem Informasi Universitas Negeri Surabaya (UNESA) yang mengincar magang UI/UX Design dengan keunggulan riset usability dan digital marketing berbasis data.",
  keywords: [
    "Muhammad Mirza Fatih",
    "Mirza Fatih",
    "UI/UX Designer",
    "Digital Marketing",
    "Sistem Informasi UNESA",
    "Portofolio UI/UX",
    "Magang UI/UX Design",
    "Figma",
    "Usability Testing",
    "Surabaya"
  ],
  authors: [{ name: "Muhammad Mirza Fatih" }],
  creator: "Muhammad Mirza Fatih",
  metadataBase: new URL("https://portofolio-mirza.vercel.app"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portofolio-mirza.vercel.app",
    title: "Mirza | UI/UX Designer & Digital Marketing",
    description:
      "Merancang produk digital yang intuitif, berdampak, dan diakselerasi strategi pemasaran berbasis data. Lihat 4 studi kasus UI/UX unggulan Muhammad Mirza Fatih.",
    siteName: "Portofolio Muhammad Mirza Fatih",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Muhammad Mirza Fatih - UI/UX Designer & Digital Marketing Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirza | UI/UX Designer & Digital Marketing",
    description:
      "Mahasiswa Sistem Informasi UNESA · Terbuka untuk magang UI/UX Design dengan nilai tambah Digital Marketing.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/mirza-avatar.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-navy-950 text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
