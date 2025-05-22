// /app/components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group transition-all duration-300"
          >
            <div className="relative">
              {/* Custom Logo Design */}
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-6 h-6 relative">
                  {/* Bridge/Lab icon - representing connection between lab and skin */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full text-white"
                  >
                    <path
                      d="M3 17h18M3 17l3-6M21 17l-3-6M6 11l3-6M18 11l-3-6M9 5h6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="9" cy="11" r="1" fill="currentColor" />
                    <circle cx="15" cy="11" r="1" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="ml-3">
              <span className="text-2xl font-heading font-semibold text-[var(--primary)] dark:text-white group-hover:text-[var(--primary-light)] transition-colors duration-300">
                Labrugis
              </span>
              <div className="text-xs text-[var(--foreground-muted)] font-medium tracking-wide uppercase">
                Science-Driven Skincare
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                isActive("/")
                  ? "text-[var(--primary)] dark:text-white"
                  : "text-[var(--foreground-muted)] hover:text-[var(--primary)] dark:text-gray-300 dark:hover:text-white"
              }`}
            >
              Home
              {isActive("/") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full"></div>
              )}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>

            <Link
              href="/about"
              className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                isActive("/about")
                  ? "text-[var(--primary)] dark:text-white"
                  : "text-[var(--foreground-muted)] hover:text-[var(--primary)] dark:text-gray-300 dark:hover:text-white"
              }`}
            >
              About
              {isActive("/about") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full"></div>
              )}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>

            {/* Coming Soon Links */}
            <div className="relative group">
              <span className="px-4 py-2 font-medium text-[var(--foreground-muted)] cursor-not-allowed opacity-60">
                Products
              </span>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-[var(--primary)] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Coming Soon
              </div>
            </div>

            <div className="relative group">
              <span className="px-4 py-2 font-medium text-[var(--foreground-muted)] cursor-not-allowed opacity-60">
                Science
              </span>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-[var(--primary)] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Coming Soon
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary text-sm">Stay Updated</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - You can expand this later */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 hidden">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className="px-4 py-2 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
            >
              About
            </Link>
            <button className="btn-primary text-sm mt-4 w-full">
              Stay Updated
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
