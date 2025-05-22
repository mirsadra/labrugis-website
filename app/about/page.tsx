// /app/about/page.tsx
import React, { JSX } from "react";

interface Article {
  id: string;
  title: string;
  content: JSX.Element[];
}

export default function AboutPage() {
  // Main article content from your text
  const mainArticle: Article = {
    id: "labrugis-story",
    title: "Where Science Meets Soul in Skincare",
    content: [
      <div key="intro" className="mb-6">
        <p className="mb-4">
          In a world full of fleeting beauty trends and overblown promises,{" "}
          <strong>Labrugis</strong> was created with a different purpose. Born
          from the minds of pharmacists and healthcare professionals, we set out
          to create skincare that is rooted in science, shaped by compassion and
          powered by integrity.
        </p>
        <p>
          Our name, <strong>Labrugis</strong>, is more than a label. Inspired by
          the Dutch word <em>Brug</em> (pronounced <em>Broozh</em>, ژ), meaning{" "}
          <em>bridge</em>, it reflects who we are and what we stand for. We aim
          to be the bridge between the lab and your skin. Between research and
          real life. Between what works and what feels right.
        </p>
      </div>,

      <div key="laboratory" className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">
          From the Laboratory to Your Skin
        </h3>
        <p>
          Every Labrugis product begins in the lab, not in a marketing meeting.
          We are a collective of scientifically trained minds who believe that
          skincare should be backed by evidence, not empty claims. With our
          pharmaceutical backgrounds, we take pride in developing formulas that
          are both safe and effective, with each ingredient chosen for a reason,
          not for a trend.
        </p>
        <p className="mt-2">
          Although we are in the early stages of development, our vision is
          built on years of healthcare experience, research knowledge and a
          commitment to high standards.
        </p>
      </div>,

      <div key="nature" className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">
          Nature-Inspired, Science-Led
        </h3>
        <p>
          We honour the natural world while holding fast to the principles of
          science. Our approach blends clinically active ingredients with
          botanicals, balancing purity with performance. We formulate with
          precision, test with integrity and refine our work with care.
        </p>
        <p className="mt-2">
          Because beauty is not just about appearance. It is about trust,
          comfort and wellbeing.
        </p>
      </div>,

      <div key="roots" className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">
          European Roots, Global Spirit
        </h3>
        <p>
          Our founders have studied and worked across Europe — from Budapest to
          London, Dublin to Tehran. This diversity shapes our thinking and our
          formulations. We combine pharmaceutical excellence with a deep
          understanding of different skin needs, cultural values and healthcare
          systems.
        </p>
        <p className="mt-2">
          <strong>Labrugis</strong> is founded on shared ideals: rigour,
          compassion and a continuous drive to improve the lives we touch.
        </p>
      </div>,

      <div key="mission" className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
        <p>
          To elevate skincare through honest science, ethical practice and
          elegant simplicity. Our aim is to educate, to empower and to create
          products that make a meaningful difference — not only to your skin,
          but to your confidence.
        </p>
      </div>,

      <div key="welcome" className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">Welcome to Labrugis</h3>
        <p>
          Whether you are a minimalist or a skincare devotee, Labrugis is for
          those who value truth over trends and quality over quantity. As we
          continue to grow and refine our offering, we remain committed to our
          founding belief: that skincare should feel like care.
        </p>
        <p className="mt-4 text-center font-medium italic">
          Because at Labrugis, every formula is a promise in progress. ✨
        </p>
      </div>,
    ],
  };

  // Original philosophy content maintained for reference or potential second section
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const philosophyArticle: Article = {
    id: "labrugis-philosophy",
    title: "Our Philosophy: Science, Compassion, Integrity",
    content: [
      <p key="phil-1">
        At Labrugis, our foundation is built upon three core pillars: science,
        compassion and integrity. We believe that effective skincare is born
        from rigorous scientific research and a deep understanding of
        dermatological needs.
      </p>,
      <p key="phil-2" className="mt-2">
        Our team, comprising experienced pharmacists and healthcare
        professionals, is dedicated to formulating products that are not only
        effective but also safe and gentle on your skin. Compassion guides our
        approach to customer care and product development, ensuring we meet the
        diverse needs of our community.
      </p>,
      <p key="phil-3" className="mt-2">
        Integrity is at the heart of everything we do, from sourcing
        high-quality ingredients to transparently communicating our product
        benefits. We strive to be more than just a skincare brand; we aim to be
        a trusted partner in your journey to healthy, radiant skin, bridging the
        gap between laboratory innovation and your daily skincare ritual.
      </p>,
    ],
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 lg:p-24">
      {/* Hero Section */}
      <header className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">About Labrugis</h1>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-1 bg-black rounded"></div>
        </div>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          The bridge between pharmaceutical science and soulful skincare.
          Formulated with integrity, designed with purpose.
        </p>
      </header>

      {/* Main Content */}
      <section className="w-full max-w-5xl">
        <div className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-3xl font-semibold">{mainArticle.title}</h2>
          </div>

          <article className="prose prose-lg lg:prose-xl dark:prose-invert max-w-none">
            {mainArticle.content.map((element, index) => (
              <React.Fragment key={`content-${index}`}>
                {element}
              </React.Fragment>
            ))}
          </article>
        </div>
      </section>

      {/* Values Section - Optional as a visual enhancement */}
      <section className="w-full max-w-5xl mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold mb-2">Science</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Evidence-based formulations developed by pharmaceutical
              professionals
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🤍</div>
            <h3 className="text-xl font-semibold mb-2">Compassion</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Created with care for diverse skin needs and environmental impact
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Transparent communication and ethical practices in everything we
              do
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
