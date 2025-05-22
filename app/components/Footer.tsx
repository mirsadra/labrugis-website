// /app/components/Footer.tsx
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--accent-dark)] text-white">
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-white"
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
              <div className="ml-3">
                <span className="text-2xl font-heading font-semibold">
                  Labrugis
                </span>
                <div className="text-sm text-white/70 font-medium tracking-wide">
                  Science-Driven Skincare
                </div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md mb-6">
              Bridging pharmaceutical science and soulful skincare.
              Evidence-based formulations crafted by healthcare professionals
              for discerning skin.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm text-white/80 mb-3">
                Get notified about our launch and exclusive insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/20 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:border-white/50 backdrop-blur-sm"
                />
                <button className="px-6 py-2 bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] rounded-r-lg font-medium transition-colors duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-white/50 cursor-not-allowed">
                  Products (Coming Soon)
                </span>
              </li>
              <li>
                <span className="text-white/50 cursor-not-allowed">
                  Science (Coming Soon)
                </span>
              </li>
              <li>
                <Link
                  href="/view"
                  className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Interactive Analyzer
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@labrugis.com"
                  className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <svg
                    className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  hello@labrugis.com
                </a>
              </li>
              <li className="text-white/60 text-sm mt-6">
                <p className="mb-2">Proudly UK-based 🇬🇧</p>
                <p className="mb-2">Pharmaceutical heritage 🔬</p>
                <p>Science meets nature 🌱 </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 Labrugis. All rights reserved.</p>
              <p className="mt-1">
                Formulated with integrity, designed with purpose.
              </p>
            </div>

            {/* Social Links & Certifications */}
            <div className="flex items-center space-x-6">
              <div className="text-xs text-white/50">
                <div className="flex items-center space-x-2">
                  <span>EU Compliant 🇪🇺</span>
                  <span>•</span>
                  <span>CPSR Ready 🧪 </span>
                  <span>•</span>
                  <span>Sustainable ♻️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
    </footer>
  );
}
