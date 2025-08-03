// app/page.tsx
import NewsArticleItem from "./components/NewsArticleItem";

interface NewsPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  link?: string;
  linkText?: string;
}

const newsItems: NewsPost[] = [
  {
    id: "8",
    title: "Project Draft Completed",
    date: "3 August, 2025",
    summary:
      "After months of dedicated work, we have finalised the comprehensive draft of our business plan, financial models and supporting documentation. This package has now been submitted to our external business plan assessors for a final, independent review. Their feedback will be crucial in ensuring our proposal is robust, credible and fully aligned with the stringent requirements for UK endorsement. We anticipate their insights will help us refine our strategy and move one step closer to official submission.",
  },
  {
    id: "7",
    title: "An In-Depth Analysis of Supergoop! Glowscreen SPF 30",
    date: "22 May, 2025",
    summary:
      "As part of our commitment to transparency and evidence-based skincare, Labrugis has conducted a detailed analysis of the popular Supergoop! Glowscreen SPF 30. We've examined its ingredients against prominent 'clean beauty' standards, including Credo Beauty's 'The Dirty List,' 'Clean at Sephora,' EWG ratings, and EU Cosmetics Regulation.\n\nOur interactive tool allows you to explore each ingredient, its function, safety assessment, and how it aligns with these benchmarks. Discover which ingredients are flagged, why, and what cleaner alternatives might exist.",
    link: "/view",
    linkText: "Explore the Interactive Analyzer",
  },
  {
    id: "6",
    title: "First Consultation with Business Plan Experts",
    date: "23 April, 2025",
    summary:
      "We held an introductory virtual meeting with Bespoke BP, a UK-based consultancy specialising in business planning for startups. The conversation focused on who we are, our long-term goals, and the vision behind Labrugis. Bespoke BP introduced how they could support us in preparing a professionally structured business plan, particularly in areas such as financial forecasting, cash flow modelling, and aligning our proposal with the expectations of UK Endorsing Services (UKES).",
  },
  {
    id: "5",
    title: "Naming the Brand: Labrugis is Born",
    date: "17 April, 2025",
    summary:
      "After weeks of brainstorming and careful checks across UK business registers, domains, and social media availability, we finalised our brand name: Labrugis. The name reflects our philosophy and now appears in our registered domain names, Labrugis.com and Labrugis.co.uk. We began using hello@labrugis.com for formal brand communications.",
  },
  {
    id: "4",
    title: "Formulation Begins: Peptides in Focus",
    date: "20 March, 2025",
    summary:
      "We initiated the scientific development of our skincare formulations, with a strong focus on bioactive peptides. Drawing on pharmaceutical principles and published dermatological research, we began building prototypes that would stand out in both safety and efficacy. To understand the feasibility of our formulations, we began contacting UK-based and international suppliers of cosmetic-grade raw materials, primary packaging, and contract manufacturers. Professional enquiries were made via our dedicated email as we scoped out partners that align with our vision and values.",
  },
  {
    id: "3",
    title: "Learning the UK Regulatory Landscape",
    date: "19 March, 2025 - Present",
    summary:
      "To build a compliant and future-proof brand, we continuously study UK cosmetic regulations post-Brexit. This includes UK REACH, the Cosmetic Products Enforcement Regulations 2013, responsible person requirements, ingredient labelling, claims substantiation, and product safety assessments (CPSR). We also track updates from the Office for Product Safety and Standards (OPSS) and stay informed on trade, packaging, and labelling standards specific to the UK market.",
  },
  {
    id: "2",
    title: "Researching UK Endorsement Pathways",
    date: "19 March, 2025",
    summary:
      "We began studying the UK Endorsing Bodies and their startup endorsement criteria. After two weeks of analysis, we identified the UK Endorsing Services (UKES) as the most aligned with our vision. We focused on their innovation, viability and scalability standards, as well as their expectations around market research, product differentiation, and commitment to development.",
  },
  {
    id: "1",
    title: "The Spark Behind Labrugis",
    date: "08 March, 2025",
    summary:
      "A small group of pharmacists and healthcare professionals came together with one shared vision: to build a skincare brand rooted in science and marketing. Inspired by our clinical backgrounds and a growing passion for evidence-based beauty, we began exploring how to create a startup that would be both innovative and impactful.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full text-[var(--accent)] text-sm font-medium mb-6 animate-fade-in-scale">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Science-Driven Innovation
              </div>

              <h1 className="text-responsive-xl font-heading font-bold text-[var(--foreground)] mb-6 leading-tight">
                Where Pharmaceutical
                <span className="gradient-text block">Science Meets</span>
                Soulful Skincare
              </h1>

              <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Evidence-based formulations crafted by healthcare professionals
                for discerning skin. Bridging clinical expertise with innovative
                beauty science.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="btn-primary group">
                  Stay Updated for Launch
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
                <button className="btn-outline">Explore Our Science</button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-[var(--foreground-muted)]">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  UK Regulatory Compliant
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Pharmaceutical Heritage
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Evidence-Based
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main Card */}
                <div className="card-elegant p-8 hover-lift">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-heading font-semibold mb-3">
                      Clinical-Grade Formulations
                    </h3>

                    <p className="text-[var(--foreground-muted)] mb-6">
                      Peptide-powered skincare developed with pharmaceutical
                      precision
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-[var(--background-secondary)] rounded-lg">
                        <span className="text-sm font-medium">
                          Bioactive Peptides
                        </span>
                        <span className="text-xs text-[var(--accent)] font-semibold">
                          RESEARCH BACKED
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-[var(--background-secondary)] rounded-lg">
                        <span className="text-sm font-medium">
                          Safety Assessment
                        </span>
                        <span className="text-xs text-green-600 font-semibold">
                          CPSR READY
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-[var(--background-secondary)] rounded-lg">
                        <span className="text-sm font-medium">
                          UK Compliance
                        </span>
                        <span className="text-xs text-blue-600 font-semibold">
                          CERTIFIED
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[var(--secondary)]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--accent)]/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[var(--accent)] rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[var(--secondary)] rounded-full animate-pulse delay-200"></div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-[var(--background-secondary)]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-6 text-[var(--foreground)]">
            Our Mission
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
            Founded by a dedicated team of pharmacists and healthcare
            professionals, Labrugis represents the future of skincare—where
            rigorous scientific methodology meets innovative beauty formulation.
            We&apos;re committed to transparency, efficacy, and regulatory
            excellence as we prepare to launch in the UK market.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4 text-[var(--foreground)]">
              Latest Updates
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Follow our journey from concept to launch as we build the future
              of science-driven skincare
            </p>
          </div>

          <div className="space-y-6">
            {newsItems.length > 0 ? (
              newsItems.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <NewsArticleItem post={post} />
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[var(--background-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[var(--foreground-muted)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <p className="text-[var(--foreground-muted)]">
                  No news yet. Check back soon for updates on our journey!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pre-Launch CTA */}
      <section className="py-16 bg-primary-gradient text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Be Part of the Science
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our community of skincare enthusiasts and be the first to
            experience our pharmaceutical-grade formulations when we launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center text-sm font-bold">
                👩‍⚕️
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center text-sm font-bold">
                👨‍🔬
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center text-sm font-bold">
                ⚗️
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center text-lg">
                +
              </div>
            </div>
            <span className="text-white/80 text-sm">
              Trusted by healthcare professionals
            </span>
          </div>

          <button className="btn-secondary text-lg px-8 py-4">
            Get Early Access
          </button>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}
