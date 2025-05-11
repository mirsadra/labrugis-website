import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Labrugis",
  description:
    "Official website for Labrugis. Stay updated with our latest news and upcoming product launches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 dark:bg-neutral-900`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
