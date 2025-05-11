import NewsArticleItem from "./components/NewsArticleItem"; // Import the new component

interface NewsPost {
  id: string;
  title: string;
  date: string;
  summary: string;
}

// Sample news data - later this could come from a CMS or markdown files
const newsItems: NewsPost[] = [
  {
    id: "1",
    title: "The Spark Behind Labrugis",
    date: "08 March, 2025",
    summary:
      "A small group of pharmacists and healthcare professionals came together with one shared vision: to build a skincare brand rooted in science and marketing. Inspired by our clinical backgrounds and a growing passion for evidence-based beauty, we began exploring how to create a startup that would be both innovative and impactful.",
  },
  {
    id: "2",
    title: "Researching UK Endorsement Pathways",
    date: "19 March, 2025",
    summary:
      "We began studying the UK Endorsing Bodies and their startup endorsement criteria. After two weeks of analysis, we identified the UK Endorsing Services (UKES) as the most aligned with our vision. We focused on their innovation, viability and scalability standards, as well as their expectations around market research, product differentiation, and commitment to development.",
  },
  {
    id: "3",
    title: "Learning the UK Regulatory Landscape",
    date: "19 March, 2025 - Present",
    summary:
      "To build a compliant and future-proof brand, we continuously study UK cosmetic regulations post-Brexit. This includes UK REACH, the Cosmetic Products Enforcement Regulations 2013, responsible person requirements, ingredient labelling, claims substantiation, and product safety assessments (CPSR). We also track updates from the Office for Product Safety and Standards (OPSS) and stay informed on trade, packaging, and labelling standards specific to the UK market.",
  },
  {
    id: "4",
    title: "Formulation Begins: Peptides in Focus",
    date: "20 March, 2025",
    summary:
      "We initiated the scientific development of our skincare formulations, with a strong focus on bioactive peptides. Drawing on pharmaceutical principles and published dermatological research, we began building prototypes that would stand out in both safety and efficacy. To understand the feasibility of our formulations, we began contacting UK-based and international suppliers of cosmetic-grade raw materials, primary packaging, and contract manufacturers. Professional enquiries were made via our dedicated email as we scoped out partners that align with our vision and values.",
  },
  {
    id: "5",
    title: "Naming the Brand: Labrugis is Born",
    date: "17 April, 2025",
    summary:
      "After weeks of brainstorming and careful checks across UK business registers, domains, and social media availability, we finalised our brand name: Labrugis. The name reflects our philosophy and now appears in our registered domain names, Labrugis.com and Labrugis.co.uk. We began using hello@labrugis.com for formal brand communications.",
  },
  {
    id: "6",
    title: "First Consultation with Business Plan Experts",
    date: "23 April, 2025",
    summary:
      "We held an introductory virtual meeting with Bespoke BP, a UK-based consultancy specialising in business planning for startups. The conversation focused on who we are, our long-term goals, and the vision behind Labrugis. Bespoke BP introduced how they could support us in preparing a professionally structured business plan, particularly in areas such as financial forecasting, cash flow modelling, and aligning our proposal with the expectations of UK Endorsing Services (UKES).",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 lg:p-24">
      <header className="w-full max-w-5xl text-center lg:text-left mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Labrugis</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Your source for upcoming news and information about Labrugis cosmetic
          products.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
          We are currently preparing for our official launch. Stay tuned for
          updates!
        </p>
      </header>

      <section className="w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-8 text-center lg:text-left">
          Latest News
        </h2>
        <div className="space-y-6">
          {newsItems.length > 0 ? (
            newsItems.map((post) => (
              <NewsArticleItem key={post.id} post={post} />
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              No news yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
