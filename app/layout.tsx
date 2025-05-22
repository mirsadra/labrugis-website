// /app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Labrugis | Science-Driven Skincare",
  description:
    "Where pharmaceutical science meets soulful skincare. Evidence-based formulations crafted by healthcare professionals for discerning skin.",
  keywords:
    "skincare, pharmaceutical, science-based, cosmetics, peptides, dermatology, UK",
  authors: [{ name: "Labrugis Team" }],
  openGraph: {
    title: "Labrugis | Science-Driven Skincare",
    description:
      "Where pharmaceutical science meets soulful skincare. Evidence-based formulations crafted by healthcare professionals.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labrugis | Science-Driven Skincare",
    description: "Where pharmaceutical science meets soulful skincare.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-body bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-50 to-orange-100 dark:from-amber-900/10 dark:to-orange-900/10 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </body>
    </html>
  );
}
