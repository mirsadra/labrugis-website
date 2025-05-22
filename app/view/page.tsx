// app/view/page.tsx
"use client";

import Chart from "chart.js/auto"; // Using auto import for Chart.js v3+
import Head from "next/head";
import { useCallback, useEffect, useRef, useState } from "react";

// Data (moved from the original script tag)
const ingredientsData = [
  {
    id: "aqua",
    name: "AQUA",
    functions: ["Solvent"],
    ewgScore: "1 (Robust)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Universal solvent, base of the emulsion.",
    alternatives: "None needed.",
  },
  {
    id: "octocrylene",
    name: "OCTOCRYLENE",
    functions: ["UV Filter"],
    ewgScore: "3 (Fair)",
    ewgConcerns:
      "Biochemical/cellular changes, contamination concerns, skin penetration.",
    sephoraStatus: "Prohibited",
    credoStatus: "Prohibited",
    overallAssessment: "Non-Compliant",
    rationale:
      "Prohibited by both Sephora and Credo. EWG notes potential for producing oxygen radicals upon UV exposure.",
    alternatives: "Non-nano Zinc Oxide, Non-nano Titanium Dioxide.",
  },
  {
    id: "butyloctyl_salicylate",
    name: "BUTYLOCTYL SALICYLATE",
    functions: ["Solvent", "Emollient", "SPF Booster"],
    ewgScore: "3 (Fair)",
    ewgConcerns:
      "Moderate use restrictions; Endocrine disruption (Danish Centre), potential developmental/reproductive toxicity.",
    sephoraStatus: "Allowed",
    credoStatus: "Likely Prohibited",
    overallAssessment: "Questionable / Non-Compliant",
    rationale:
      "Controversy over its function as an undeclared UV filter. Potential endocrine/reproductive concerns. Transparency issues.",
    alternatives:
      "If SPF booster: Remove. If emollient: Plant-derived Squalane, Coco-Caprylate/Caprate.",
  },
  {
    id: "ethylhexyl_salicylate",
    name: "ETHYLHEXYL SALICYLATE (Octisalate)",
    functions: ["UV Filter"],
    ewgScore: "3 (Fair)",
    ewgConcerns:
      "Moderate use restrictions, penetration enhancer, low endocrine disruption concern (EWG). Some sources link to birth defects.",
    sephoraStatus: "Allowed",
    credoStatus: "Prohibited",
    overallAssessment: "Non-Compliant",
    rationale:
      "Prohibited by Credo. EWG notes penetration enhancement; other sources raise concerns for pregnancy.",
    alternatives: "Non-nano Zinc Oxide, Non-nano Titanium Dioxide.",
  },
  {
    id: "propanediol",
    name: "PROPANEDIOL",
    functions: ["Solvent", "Humectant", "Viscosity Control"],
    ewgScore: "1-3 (Good)",
    ewgConcerns:
      "Low concern, potential skin irritation at high concentrations.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale:
      'Generally well-tolerated. Plant-derived versions enhance "clean" profile.',
    alternatives: "Ensure plant-derived source.",
  },
  {
    id: "glycerin",
    name: "GLYCERIN",
    functions: ["Humectant", "Skin-conditioning Agent"],
    ewgScore: "1-2 (Fair)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Widely used, effective humectant.",
    alternatives: "Ensure vegetable origin for vegan claims.",
  },
  {
    id: "butyl_methoxydibenzoylmethane",
    name: "BUTYL METHOXYDIBENZOYLMETHANE (Avobenzone)",
    functions: ["UV Filter"],
    ewgScore: "2 (Fair)",
    ewgConcerns:
      "Moderate use restrictions, unstable (breaks down in sunlight), low endocrine disruption.",
    sephoraStatus: "Allowed",
    credoStatus: "Prohibited",
    overallAssessment: "Non-Compliant",
    rationale:
      "Prohibited by Credo. Stability concerns and formation of unknown breakdown products.",
    alternatives: "Non-nano Zinc Oxide (provides broad-spectrum UVA/UVB).",
  },
  {
    id: "c12_15_alkyl_benzoate",
    name: "C12-15 ALKYL BENZOATE",
    functions: ["Emollient", "Solvent", "Texture Enhancer"],
    ewgScore: "1 (Good)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Common emollient providing good sensory feel.",
    alternatives:
      'Plant-derived esters if a specific "natural" focus is desired.',
  },
  {
    id: "glyceryl_stearate_citrate",
    name: "GLYCERYL STEARATE CITRATE",
    functions: ["Emulsifier", "Emollient"],
    ewgScore: "1 (Limited)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Plant-derived (typically) emulsifier, good for skin.",
    alternatives: "None needed.",
  },
  {
    id: "niacinamide",
    name: "NIACINAMIDE",
    functions: ["Skin-conditioning Agent"],
    ewgScore: "1 (Good)",
    ewgConcerns: "Low concern, beneficial for skin.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Well-established skin benefits.",
    alternatives: "None needed.",
  },
  {
    id: "polymethylsilsesquioxane",
    name: "POLYMETHYLSILSESQUIOXANE",
    functions: ["Film Former", "Texture Enhancer"],
    ewgScore: "1 (Limited)",
    ewgConcerns:
      "Low concern for skin, potential environmental persistence (general silicone concern).",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Questionable",
    rationale:
      "Not a cyclic silicone banned by Credo/Sephora. However, general concerns about synthetic polymers/silicones for very strict standards.",
    alternatives:
      "Cellulose or silica-based powders (Bamboo Silk, Corn Starch).",
  },
  {
    id: "ci_77163",
    name: "CI 77163 (Bismuth Oxychloride)",
    functions: ["Colorant"],
    ewgScore: "1-2 (Fair)",
    ewgConcerns:
      "Low concern, potential for irritation in some sensitive individuals if poorly formulated.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Common pearlescent pigment.",
    alternatives: "Mica (ethically sourced), or alternative pearl pigments.",
  },
  {
    id: "mica",
    name: "MICA",
    functions: ["Colorant"],
    ewgScore: "2 (Fair)",
    ewgConcerns:
      "Primary concern is ethical sourcing (child labor, unsafe mining) and potential inhalation of loose powder.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed (Requires ethical sourcing verification)",
    overallAssessment: "Compliant",
    rationale: 'Ethical sourcing is key for "clean" status.',
    alternatives:
      "Synthetic Fluorphlogopite (Synthetic Mica) if natural mica sourcing is unverified.",
  },
  {
    id: "ci_77891",
    name: "CI 77891 (Titanium Dioxide)",
    functions: ["Colorant", "UV Filter"],
    ewgScore: "1-3 (Good)",
    ewgConcerns:
      "Inhalation concern for powders, nanoparticle concerns for UV protection.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale:
      "Safe as a pigment in creams. If contributing to SPF, non-nano form preferred.",
    alternatives: "None needed as colorant.",
  },
  {
    id: "caprylic_capric_triglyceride",
    name: "CAPRYLIC/CAPRIC TRIGLYCERIDE",
    functions: ["Emollient", "Solvent"],
    ewgScore: "1 (Good)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale:
      "Widely used, well-tolerated emollient. Ensure sustainable sourcing.",
    alternatives: "Ensure sustainable sourcing (e.g., coconut-derived).",
  },
  {
    id: "cetyl_phosphate",
    name: "CETYL PHOSPHATE",
    functions: ["Emulsifier", "Surfactant"],
    ewgScore: "1 (Limited)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Effective emulsifier, often plant-derived.",
    alternatives: "None needed.",
  },
  {
    id: "diisopropyl_sebacate",
    name: "DIISOPROPYL SEBACATE",
    functions: ["Emollient", "Solvent", "Plasticiser"],
    ewgScore: "1 (Fair)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Good sensory properties, can enhance spreadability.",
    alternatives: "None needed.",
  },
  {
    id: "glyceryl_stearate",
    name: "GLYCERYL STEARATE",
    functions: ["Emulsifier", "Emollient"],
    ewgScore: "1 (Good)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Common, generally plant-derived emulsifier.",
    alternatives: "None needed.",
  },
  {
    id: "isodecyl_neopentanoate",
    name: "ISODECYL NEOPENTANOATE",
    functions: ["Emollient", "Skin-conditioning Agent"],
    ewgScore: "1 (Fair)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Provides a light, non-greasy feel.",
    alternatives: "Other light plant-derived esters if preferred.",
  },
  {
    id: "isododecane",
    name: "ISODODECANE",
    functions: ["Solvent", "Emollient"],
    ewgScore: "1 (Limited)",
    ewgConcerns:
      "Low concern by EWG. ECHA classifies as toxic/harmful. Traditionally petroleum-derived.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Questionable",
    rationale:
      "ECHA classification is a red flag. Petroleum origin is a concern for sustainability. Plant-based versions emerging.",
    alternatives:
      "Plant-derived Undecane/Tridecane, Coco-Caprylate/Caprate, plant-derived Squalane.",
  },
  {
    id: "lauryl_lactate",
    name: "LAURYL LACTATE",
    functions: ["Emollient", "Skin-conditioning Agent"],
    ewgScore: "1 (Fair)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Mild emollient.",
    alternatives: "None needed.",
  },
  {
    id: "1_2_hexanediol",
    name: "1,2-HEXANEDIOL",
    functions: ["Solvent", "Humectant", "Preservative Booster"],
    ewgScore: "1 (Fair)",
    ewgConcerns: "Low concern, potential for mild irritation.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Multi-functional ingredient.",
    alternatives: "None needed.",
  },
  {
    id: "acrylates_c10_30_alkyl_acrylate_crosspolymer",
    name: "ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER",
    functions: ["Thickener", "Emulsion Stabiliser", "Film Former"],
    ewgScore: "1 (Limited)",
    ewgConcerns:
      "EWG notes high contamination concerns (e.g. residual monomers). Non-biodegradable.",
    sephoraStatus: "Allowed",
    credoStatus: "Questionable",
    overallAssessment: "Questionable",
    rationale:
      "Potential for toxic residual monomers. Environmental concerns due to non-biodegradability.",
    alternatives:
      "Natural gums (Xanthan Gum, Sclerotium Gum), Cellulose derivatives.",
  },
  {
    id: "arginine",
    name: "ARGININE",
    functions: ["Skin-conditioning Agent"],
    ewgScore: "1 (Good)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Beneficial amino acid.",
    alternatives: "None needed.",
  },
  {
    id: "butylene_glycol",
    name: "BUTYLENE GLYCOL",
    functions: ["Solvent", "Humectant", "Viscosity Control"],
    ewgScore: "1 (Fair)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale:
      "Common solvent/humectant. Questionable if petroleum-derived for strict sustainability.",
    alternatives: "Plant-derived Propanediol or bio-based Butylene Glycol.",
  },
  {
    id: "caprylyl_glycol",
    name: "CAPRYLYL GLYCOL",
    functions: ["Humectant", "Emollient", "Preservative Booster"],
    ewgScore: "1 (Good)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Multi-functional, often used in clean preservative systems.",
    alternatives: "None needed.",
  },
  {
    id: "coco_caprylate",
    name: "COCO-CAPRYLATE (likely COCO-CAPRYLATE/CAPRATE)",
    functions: ["Emollient"],
    ewgScore: "1 (Limited)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Plant-derived (coconut) emollient with good sensory profile.",
    alternatives: "None needed.",
  },
  {
    id: "ethylhexyl_hydroxystearate",
    name: "ETHYLHEXYL HYDROXYSTEARATE",
    functions: ["Emollient", "Skin-conditioning Agent"],
    ewgScore: "1 (Limited)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Synthetic emollient.",
    alternatives: "Other plant-derived emollients if preferred.",
  },
  {
    id: "ferulic_acid",
    name: "FERULIC ACID",
    functions: ["Antioxidant"],
    ewgScore: "1-3 (Fair)",
    ewgConcerns: "Low concern, use restrictions in Japan.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Potent antioxidant.",
    alternatives: "None needed.",
  },
  {
    id: "helianthus_annuus_seed_oil",
    name: "HELIANTHUS ANNUUS SEED OIL (Sunflower Seed Oil)",
    functions: ["Emollient", "Skin-conditioning Agent"],
    ewgScore: "1 (Good)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Common, beneficial plant oil.",
    alternatives: "None needed.",
  },
  {
    id: "hydroxyacetophenone",
    name: "HYDROXYACETOPHENONE",
    functions: ["Antioxidant", "Preservative Booster", "Soothing Agent"],
    ewgScore: "1 (Fair)",
    ewgConcerns: "Low concern, some reports of contact dermatitis.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant / Questionable",
    rationale:
      "Generally safe, but potential for irritation in sensitive individuals.",
    alternatives: "Other soothing agents or ensure low concentration.",
  },
  {
    id: "leuconostoc_radish_root_ferment_filtrate",
    name: "LEUCONOSTOC/RADISH ROOT FERMENT FILTRATE",
    functions: ["Preservative"],
    ewgScore: "1 (Limited)",
    ewgConcerns:
      "High contamination concern for Didecyldimethylammonium chloride (DDAC).",
    sephoraStatus: "Allowed",
    credoStatus: "Questionable",
    overallAssessment: "Questionable / Non-Compliant",
    rationale:
      "Natural origin appealing, but DDAC contamination risk is significant. Requires stringent supplier verification.",
    alternatives:
      "Alternative clean preservative systems (Sodium Benzoate/Potassium Sorbate).",
  },
  {
    id: "limonium_gerberi_extract",
    name: "LIMONIUM GERBERI EXTRACT (Sea Lavender Extract)",
    functions: ["Skin-conditioning Agent"],
    ewgScore: "1 (Limited)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Plant extract with potential antioxidant/soothing properties.",
    alternatives: "None needed.",
  },
  {
    id: "pantothenic_acid",
    name: "PANTOTHENIC ACID (Vitamin B5)",
    functions: ["Skin-conditioning Agent", "Humectant"],
    ewgScore: "1 (Limited)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Beneficial for skin hydration and soothing.",
    alternatives: "None needed.",
  },
  {
    id: "phospholipids",
    name: "PHOSPHOLIPIDS",
    functions: ["Skin-conditioning Agent", "Emulsifier"],
    ewgScore: "1 (Fair)",
    ewgConcerns: "Low concern, naturally occurring in skin.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale:
      "Biomimetic ingredient. Ensure non-GMO soy or sunflower origin if specified.",
    alternatives: "Ensure non-GMO source.",
  },
  {
    id: "sodium_hyaluronate",
    name: "SODIUM HYALURONATE",
    functions: ["Humectant", "Skin-conditioning Agent"],
    ewgScore: "1 (Fair)",
    ewgConcerns:
      "Low concern. PETA lists as potentially animal-derived, but vegan sources common.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale:
      "Effective humectant. Ensure fermentation-derived (non-animal) source.",
    alternatives: "Ensure non-animal source.",
  },
  {
    id: "theobroma_cacao_seed_extract",
    name: "THEOBROMA CACAO SEED EXTRACT (Cocoa Seed Extract)",
    functions: ["Antioxidant", "Skin-conditioning Agent"],
    ewgScore: "1 (Good)",
    ewgConcerns: "Low concern.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Rich in polyphenols, beneficial for skin.",
    alternatives: "None needed.",
  },
  {
    id: "tocopherol",
    name: "TOCOPHEROL (Vitamin E)",
    functions: ["Antioxidant", "Skin-conditioning Agent"],
    ewgScore: "1-3 (Fair)",
    ewgConcerns:
      "Low concern, potential contamination with hydroquinone (rare with cosmetic grade).",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Common antioxidant. Ensure high purity.",
    alternatives: "Ensure high purity, food/cosmetic grade.",
  },
  {
    id: "trisodium_ethylenediamine_disuccinate",
    name: "TRISODIUM ETHYLENEDIAMINE DISUCCINATE",
    functions: ["Chelating Agent"],
    ewgScore: "1 (Good)",
    ewgConcerns: "Biodegradable alternative to EDTA.",
    sephoraStatus: "Prohibited",
    credoStatus: "Allowed",
    overallAssessment: "Non-Compliant",
    rationale:
      'Biodegradable alternative to EDTA. However, Sephora\'s ban on "EDTA and derivatives" likely includes it.',
    alternatives: "Sodium Phytate, Sodium Gluconate.",
  },
  {
    id: "chlorphenesin",
    name: "CHLORPHENESIN",
    functions: ["Preservative"],
    ewgScore: "3 (Fair)",
    ewgConcerns:
      "Moderate use restrictions, low-moderate allergies/immunotoxicity concern. Restricted in Japan.",
    sephoraStatus: "Allowed",
    credoStatus: "Questionable",
    overallAssessment: "Questionable / Non-Compliant",
    rationale:
      'Allergenic potential and restrictions in some regions make it less ideal for strict "clean" profiles.',
    alternatives: "Alternative clean preservative systems.",
  },
  {
    id: "ci_77491",
    name: "CI 77491 (Iron Oxides - Red)",
    functions: ["Colorant"],
    ewgScore: "2 (Good)",
    ewgConcerns: "Low concern, generally considered safe.",
    sephoraStatus: "Allowed",
    credoStatus: "Allowed",
    overallAssessment: "Compliant",
    rationale: "Natural or nature-identical mineral pigments.",
    alternatives: "None needed.",
  },
];

const flaggedIngredientDetailsData = {
  OCTOCRYLENE: {
    category: "Chemical UV Filters",
    summary:
      'Synthetic UV absorber (UVB, some UVAII). EWG Score 3. Prohibited by "Clean at Sephora" and Credo. Concerns: skin penetration, allergic contact dermatitis, potential to produce oxygen radicals.',
    alternativesText: "Non-nano Zinc Oxide, Non-nano Titanium Dioxide.",
  },
  "ETHYLHEXYL SALICYLATE (Octisalate)": {
    category: "Chemical UV Filters",
    summary:
      "UVB absorber. EWG Score 3. Prohibited by Credo. Concerns: penetration enhancer, potential endocrine disruption (some sources), warnings for pregnancy.",
    alternativesText: "Non-nano Zinc Oxide, Non-nano Titanium Dioxide.",
  },
  "BUTYL METHOXYDIBENZOYLMETHANE (Avobenzone)": {
    category: "Chemical UV Filters",
    summary:
      "Broad-spectrum UVA filter. EWG Score 2. Prohibited by Credo. Concerns: instability in sunlight, formation of breakdown products.",
    alternativesText: "Non-nano Zinc Oxide.",
  },
  "BUTYLOCTYL SALICYLATE": {
    category: "Controversial SPF Booster/Emollient",
    summary:
      "Often listed as inactive, but evidence suggests UV-absorbing/SPF boosting properties. EWG Score 3. Likely prohibited by Credo. Concerns: transparency (undeclared UV filter), potential endocrine disruptor, developmental/reproductive toxicity (ECHA).",
    alternativesText:
      "If SPF booster: Remove. If emollient: Plant-derived Squalane, Coco-Caprylate/Caprate.",
  },
  POLYMETHYLSILSESQUIOXANE: {
    category: "Silicones",
    summary:
      "Silicone polymer (texture enhancer). EWG Score 1. Allowed by Sephora/Credo (not cyclic). Concerns for very strict standards: synthetic polymer, environmental persistence.",
    alternativesText:
      "Cellulose or silica-based powders (e.g., Bamboo Silk, Corn Starch modified).",
  },
  ISODODECANE: {
    category: "Hydrocarbons (Emollients/Solvents)",
    summary:
      "Lightweight emollient/solvent. EWG Score 1. Allowed by Sephora/Credo. Concerns: ECHA classification as potentially toxic/harmful, traditionally petroleum-derived (sustainability).",
    alternativesText:
      "Plant-derived Undecane/Tridecane, Coco-Caprylate/Caprate, plant-derived Squalane.",
  },
  CHLORPHENESIN: {
    category: "Preservatives",
    summary:
      "Synthetic preservative. EWG Score 3. Allowed by Sephora. Questionable by Credo. Concerns: allergenic potential, restricted in Japan.",
    alternativesText:
      "Caprylyl Glycol blends, Sodium Benzoate/Potassium Sorbate, Benzyl Alcohol/Dehydroacetic Acid.",
  },
  "LEUCONOSTOC/RADISH ROOT FERMENT FILTRATE": {
    category: "Preservatives",
    summary:
      '"Natural" preservative. EWG Score 1. Allowed by Sephora, Questionable by Credo. Major Concern: high risk of contamination with Didecyldimethylammonium chloride (DDAC), a toxic biocide. Requires purity verification.',
    alternativesText:
      "Alternative clean preservative systems, ensuring DDAC-free certification if this is used.",
  },
  "ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER": {
    category: "Polymers/Thickeners",
    summary:
      "Synthetic polymer (thickener, stabiliser). EWG Score 1. Allowed by Sephora, Questionable by Credo. Concerns: potential residual monomers (irritants), non-biodegradable (environmental impact, microplastic debate).",
    alternativesText:
      "Natural gums (Xanthan Gum, Sclerotium Gum), Cellulose derivatives (Hydroxyethylcellulose).",
  },
  "TRISODIUM ETHYLENEDIAMINE DISUCCINATE": {
    category: "Chelating Agents",
    summary:
      'Biodegradable alternative to EDTA. EWG Score 1. Prohibited by "Clean at Sephora" (as EDTA derivative). Allowed by Credo. Concern: Sephora compliance.',
    alternativesText: "Sodium Phytate, Sodium Gluconate.",
  },
};

interface Ingredient {
  id: string;
  name: string;
  functions: string[];
  ewgScore: string;
  ewgConcerns: string;
  sephoraStatus: string;
  credoStatus: string;
  overallAssessment: string;
  rationale: string;
  alternatives: string;
}

interface FlaggedDetail {
  category: string;
  summary: string;
  alternativesText?: string;
}

interface FlaggedIngredientDetails {
  [key: string]: FlaggedDetail;
}

const sectionsConfig = [
  { id: "intro", title: "Understanding Clean Beauty" },
  { id: "analysis", title: "Ingredient Analysis" },
  { id: "flagged", title: "Flagged Ingredients" },
  { id: "alternatives", title: "Clean Alternatives" },
  { id: "conclusion", title: "Key Takeaways" },
];

export default function GlowscreenAnalyzerPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [statusFilter, setStatusFilter] = useState("all");
  const [functionFilter, setFunctionFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredIngredients, setFilteredIngredients] =
    useState<Ingredient[]>(ingredientsData);
  const [allFunctions, setAllFunctions] = useState<string[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] =
    useState<Ingredient | null>(null);

  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const [openAccordionCategory, setOpenAccordionCategory] = useState<
    string | null
  >(null);

  // Populate function filter options and set initial filtered ingredients
  useEffect(() => {
    const functions = new Set<string>();
    ingredientsData.forEach((ing) =>
      ing.functions.forEach((fn) => functions.add(fn))
    );
    setAllFunctions(Array.from(functions).sort());
    setFilteredIngredients(ingredientsData);
  }, []);

  // Apply filters when filter states change
  const applyFilters = useCallback(() => {
    const filtered = ingredientsData.filter((ing) => {
      const statusMatch =
        statusFilter === "all" ||
        ing.overallAssessment.includes(statusFilter) ||
        (statusFilter === "Questionable" &&
          (ing.overallAssessment.includes("Questionable") ||
            ing.overallAssessment.includes("Compliant / Questionable"))) ||
        (statusFilter === "Non-Compliant" &&
          (ing.overallAssessment.includes("Non-Compliant") ||
            ing.overallAssessment.includes("Questionable / Non-Compliant")));
      const functionMatch =
        functionFilter === "all" || ing.functions.includes(functionFilter);
      const searchMatch = ing.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return statusMatch && functionMatch && searchMatch;
    });
    setFilteredIngredients(filtered);
  }, [statusFilter, functionFilter, searchTerm]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  // Chart update logic
  useEffect(() => {
    if (chartRef.current) {
      const counts = { Compliant: 0, Questionable: 0, "Non-Compliant": 0 };
      filteredIngredients.forEach((ing) => {
        if (ing.overallAssessment.includes("Non-Compliant"))
          counts["Non-Compliant"]++;
        else if (ing.overallAssessment.includes("Questionable"))
          counts["Questionable"]++;
        else if (ing.overallAssessment === "Compliant") counts["Compliant"]++;
      });

      const chartData = {
        labels: ["Compliant", "Questionable", "Non-Compliant"],
        datasets: [
          {
            label: "Ingredient Compliance",
            data: [
              counts["Compliant"],
              counts["Questionable"],
              counts["Non-Compliant"],
            ],
            backgroundColor: [
              "rgba(16, 185, 129, 0.7)", // emerald-500
              "rgba(245, 158, 11, 0.7)", // amber-500
              "rgba(239, 68, 68, 0.7)", // red-500
            ],
            borderColor: [
              "rgba(5, 150, 105, 1)", // emerald-600
              "rgba(217, 119, 6, 1)", // amber-600
              "rgba(220, 38, 38, 1)", // red-600
            ],
            borderWidth: 1,
          },
        ],
      };

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "doughnut",
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "top" },
            tooltip: {
              callbacks: {
                label: function (context: {
                  label: string | undefined;
                  parsed: number | null;
                }) {
                  let label = context.label || "";
                  if (label) label += ": ";
                  if (context.parsed !== null) label += context.parsed;
                  return label;
                },
              },
            },
          },
        },
      });
    }
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [filteredIngredients]);

  const getStatusColor = (status: string) => {
    if (status === "Compliant")
      return "border-green-500 bg-green-50 dark:bg-green-900/30 dark:border-green-700";
    if (status === "Questionable" || status === "Compliant / Questionable")
      return "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30 dark:border-yellow-700";
    if (status === "Non-Compliant" || status === "Questionable / Non-Compliant")
      return "border-red-500 bg-red-50 dark:bg-red-900/30 dark:border-red-700";
    return "border-slate-300 bg-slate-50 dark:bg-slate-800/30 dark:border-slate-700";
  };
  const getStatusTextColor = (status: string) => {
    if (status === "Compliant") return "text-green-700 dark:text-green-400";
    if (status === "Questionable" || status === "Compliant / Questionable")
      return "text-yellow-700 dark:text-yellow-400";
    if (status === "Non-Compliant" || status === "Questionable / Non-Compliant")
      return "text-red-700 dark:text-red-400";
    return "text-slate-700 dark:text-slate-300";
  };

  const handleShowDetails = (ingredientId: string) => {
    const ing = ingredientsData.find((i) => i.id === ingredientId);
    if (ing) {
      setSelectedIngredient(ing);
      setIsModalOpen(true);
    }
  };

  const renderFlaggedIngredientsAccordion = () => {
    const categories: {
      [key: string]: { ingredient: Ingredient; summary: string }[];
    } = {};
    const typedFlaggedDetails =
      flaggedIngredientDetailsData as FlaggedIngredientDetails;

    ingredientsData.forEach((ing) => {
      const upperCaseName = ing.name.toUpperCase().split(" (")[0];
      if (typedFlaggedDetails[upperCaseName]) {
        const detail = typedFlaggedDetails[upperCaseName];
        if (!categories[detail.category]) {
          categories[detail.category] = [];
        }
        categories[detail.category].push({
          ingredient: ing,
          summary: detail.summary,
        });
      } else if (
        ing.overallAssessment.includes("Non-Compliant") ||
        ing.overallAssessment.includes("Questionable")
      ) {
        const category = ing.functions.includes("UV Filter")
          ? "Chemical UV Filters"
          : ing.functions.includes("Preservative")
          ? "Preservatives"
          : ing.functions.includes("Chelating Agent")
          ? "Chelating Agents"
          : ing.name.toLowerCase().includes("silicone") ||
            ing.name.toLowerCase().includes("silsesquioxane")
          ? "Silicones"
          : ing.name.toLowerCase().includes("acrylate")
          ? "Polymers/Thickeners"
          : "Other Questionable Ingredients";
        if (!categories[category]) {
          categories[category] = [];
        }
        categories[category].push({ ingredient: ing, summary: ing.rationale });
      }
    });

    return Object.keys(categories)
      .sort()
      .map((category) => (
        <div
          key={category}
          className="bg-white dark:bg-neutral-800 rounded-lg shadow"
        >
          <button
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-neutral-700/50 focus:outline-none"
            onClick={() =>
              setOpenAccordionCategory(
                openAccordionCategory === category ? null : category
              )
            }
          >
            <span>{category}</span>
            <span
              className={`transform transition-transform duration-300 text-xl ${
                openAccordionCategory === category ? "rotate-180" : "rotate-0"
              }`}
            >
              &#x25BC;
            </span>
          </button>
          {openAccordionCategory === category && (
            <div className="border-t border-slate-200 dark:border-neutral-700 p-4 space-y-3">
              {categories[category].map((item) => (
                <div
                  key={item.ingredient.id}
                  className="pb-2 mb-2 border-b border-slate-100 dark:border-neutral-700/50 last:border-b-0 last:pb-0 last:mb-0"
                >
                  <h4
                    className={`font-semibold ${getStatusTextColor(
                      item.ingredient.overallAssessment
                    )}`}
                  >
                    {item.ingredient.name} ({item.ingredient.overallAssessment})
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ));
  };

  const renderAlternativesList = () => {
    const relevantIngredients = ingredientsData.filter(
      (ing) =>
        (ing.overallAssessment.includes("Non-Compliant") ||
          ing.overallAssessment.includes("Questionable")) &&
        ing.alternatives &&
        ing.alternatives !== "None needed."
    );
    const typedFlaggedDetails =
      flaggedIngredientDetailsData as FlaggedIngredientDetails;

    if (relevantIngredients.length === 0) {
      return (
        <p className="text-slate-500 dark:text-slate-400">
          No specific alternatives listed for currently problematic ingredients
          in this product, or all ingredients are considered compliant.
        </p>
      );
    }

    return relevantIngredients.map((ing) => {
      const detail =
        typedFlaggedDetails[ing.name.toUpperCase().split(" (")[0]] || {};
      const alternativesText = detail.alternativesText || ing.alternatives;

      return (
        <div
          key={ing.id}
          className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow"
        >
          <h4
            className={`font-semibold text-lg ${getStatusTextColor(
              ing.overallAssessment
            )}`}
          >
            {ing.name}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            <strong>Reason for concern:</strong> {ing.rationale}
          </p>
          <p className="text-sm text-teal-700 dark:text-teal-400 mt-2">
            <strong>Suggested Clean Alternative(s):</strong> {alternativesText}
          </p>
        </div>
      );
    });
  };

  return (
    <>
      <Head>
        <title>Glowscreen SPF 30 Ingredient Analysis</title>
        <meta
          name="description"
          content="An interactive clean beauty analysis of Supergoop! Glowscreen SPF 30 ingredients, presented by Labrugis."
        />
      </Head>
      {/* Global styles for modal animation, scrollbar, accordion - consider moving to a global CSS file if preferred */}
      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
        }
        .details-modal-animation {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .modal-content-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .modal-content-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .modal-content-scroll::-webkit-scrollbar-thumb {
          background: #0d9488;
          border-radius: 10px;
        }
        .modal-content-scroll::-webkit-scrollbar-thumb:hover {
          background: #0f766e;
        }

        .dark .modal-content-scroll::-webkit-scrollbar-track {
          background: #374151;
        } /* gray-700 */
        .dark .modal-content-scroll::-webkit-scrollbar-thumb {
          background: #14b8a6;
        } /* teal-500 */
        .dark .modal-content-scroll::-webkit-scrollbar-thumb:hover {
          background: #0d9488;
        } /* teal-600 */
      `}</style>

      <div className="min-h-screen bg-slate-50 dark:bg-neutral-900 text-slate-700 dark:text-slate-300">
        <header className="bg-white dark:bg-neutral-800 shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between py-4">
              <h1 className="text-xl md:text-2xl font-bold text-teal-700 dark:text-teal-400 mb-4 sm:mb-0 text-center sm:text-left">
                Glowscreen SPF 30 Analysis
              </h1>
              <nav className="flex flex-wrap justify-center gap-1 sm:gap-2">
                {sectionsConfig.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`text-xs sm:text-sm font-medium py-2 px-2 sm:px-3 rounded-md transition-colors duration-200 ${
                      activeSection === section.id
                        ? "bg-teal-600 text-white"
                        : "text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-neutral-700/50"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          {activeSection === "intro" && (
            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-teal-600 dark:text-teal-400 border-b border-slate-200 dark:border-neutral-700 pb-2">
                Understanding &quot;Clean Beauty&quot;
              </h2>
              <p className="text-lg leading-relaxed">
                This section provides an overview of the &quot;clean
                beauty&quot; landscape. &quot;Clean Beauty&quot; generally
                refers to products formulated without ingredients known or
                suspected to be harmful to human health or the planet. It&apos;s
                a movement driven by consumer demand for safer products and
                greater transparency. However, the term isn&apos;t officially
                regulated, leading to varied interpretations.
              </p>
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-3">
                  Key Principles of &quot;Clean Beauty&quot; for this Analysis:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Safety (Human Health):</strong> Prioritising
                    ingredients free from known or suspected harmful chemicals
                    (e.g., parabens, phthalates, sulfates,
                    formaldehyde-releasers). Scrutiny on irritation, allergies,
                    endocrine disruption, etc.
                  </li>
                  <li>
                    <strong>Safety (Environmental Health):</strong> Considering
                    biodegradability, persistence, ecotoxicity, and microplastic
                    pollution.
                  </li>
                  <li>
                    <strong>Transparency & Ethical Sourcing:</strong> Complete
                    ingredient lists (INCI), transparent production,
                    cruelty-free testing, and responsible sourcing (e.g., mica).
                  </li>
                </ul>
              </div>
              <p className="text-md italic">
                It&apos;s important to note that &quot;clean&quot; doesn&apos;t
                always mean &quot;natural,&quot; and &quot;natural&quot;
                isn&apos;t inherently safer. The focus is on non-toxicity and
                safety, whether an ingredient is natural or synthetic.
              </p>
              <p className="text-md">
                This application analyses Supergoop! Glowscreen SPF 30
                ingredients against prominent standards like Credo Beauty&apos;s
                &quot;The Dirty List,&quot; &quot;Clean at Sephora,&quot; EWG
                ratings, and EU Cosmetics Regulation to provide a comprehensive
                view.
              </p>
            </section>
          )}

          {activeSection === "analysis" && (
            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-teal-600 dark:text-teal-400 border-b border-slate-200 dark:border-neutral-700 pb-2">
                Glowscreen SPF 30: Ingredient Analysis
              </h2>
              <p className="text-lg leading-relaxed">
                Explore the ingredients of Supergoop! Glowscreen SPF 30. The
                list below details each ingredient&apos;s function, EWG hazard
                score, status according to &quot;Clean at Sephora&quot; and
                Credo Beauty, and an overall &quot;clean&quot; assessment. You
                can filter the ingredients by their compliance status or primary
                function. Click on an ingredient to see more details and
                suggested alternatives if applicable.
              </p>

              <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="statusFilter"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Filter by Compliance Status:
                    </label>
                    <select
                      id="statusFilter"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="w-full p-2 border border-slate-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-neutral-700 dark:text-slate-200"
                    >
                      <option value="all">All Statuses</option>
                      <option value="Compliant">Compliant</option>
                      <option value="Questionable">Questionable</option>
                      <option value="Non-Compliant">Non-Compliant</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="functionFilter"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Filter by Primary Function:
                    </label>
                    <select
                      id="functionFilter"
                      value={functionFilter}
                      onChange={(e) => setFunctionFilter(e.target.value)}
                      className="w-full p-2 border border-slate-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-neutral-700 dark:text-slate-200"
                    >
                      <option value="all">All Functions</option>
                      {allFunctions.map((fn) => (
                        <option key={fn} value={fn}>
                          {fn}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="searchIngredient"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Search Ingredient:
                    </label>
                    <input
                      type="text"
                      id="searchIngredient"
                      placeholder="Enter ingredient name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full p-2 border border-slate-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-neutral-700 dark:text-slate-200"
                    />
                  </div>
                </div>
                <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 max-w-xs sm:max-w-sm md:max-w-md mb-6">
                  <canvas ref={chartRef}></canvas>
                </div>
                <p className="text-sm text-center text-slate-600 dark:text-slate-400 mb-4">
                  The chart above summarises the overall &quot;clean&quot;
                  assessment of the listed ingredients based on the current
                  filters.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredIngredients.length > 0 ? (
                  filteredIngredients.map((ing) => (
                    <div
                      key={ing.id}
                      className={`p-4 rounded-lg shadow border ${getStatusColor(
                        ing.overallAssessment
                      )} cursor-pointer transition-shadow hover:shadow-lg`}
                      onClick={() => handleShowDetails(ing.id)}
                    >
                      <h3
                        className={`font-semibold text-lg ${getStatusTextColor(
                          ing.overallAssessment
                        )}`}
                      >
                        {ing.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Functions: {ing.functions.join(", ")}
                      </p>
                      <p
                        className={`text-sm font-medium mt-1 ${getStatusTextColor(
                          ing.overallAssessment
                        )}`}
                      >
                        Assessment: {ing.overallAssessment}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="col-span-full text-center text-slate-500 dark:text-slate-400">
                    No ingredients match your filters.
                  </p>
                )}
              </div>
            </section>
          )}

          {activeSection === "flagged" && (
            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-teal-600 dark:text-teal-400 border-b border-slate-200 dark:border-neutral-700 pb-2">
                Flagged Ingredients: A Closer Look
              </h2>
              <p className="text-lg leading-relaxed">
                This section delves deeper into ingredients from Glowscreen SPF
                30 that were identified as &quot;Non-Compliant&quot; or
                &quot;Questionable&quot; based on stringent &quot;clean
                beauty&quot; standards. Understanding why these ingredients are
                flagged can help in making more informed choices.
              </p>
              <div className="space-y-3">
                {renderFlaggedIngredientsAccordion()}
              </div>
            </section>
          )}

          {activeSection === "alternatives" && (
            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-teal-600 dark:text-teal-400 border-b border-slate-200 dark:border-neutral-700 pb-2">
                Safer Swaps: Clean Alternatives
              </h2>
              <p className="text-lg leading-relaxed">
                For ingredients that don&apos;t meet strict &quot;clean
                beauty&quot; criteria, there are often safer alternatives
                available. This section outlines recommendations for replacing
                flagged ingredients in Glowscreen SPF 30, focusing on options
                with improved safety and environmental profiles. Note that
                reformulating products is complex and requires extensive
                testing.
              </p>
              <div className="space-y-4">{renderAlternativesList()}</div>
            </section>
          )}

          {activeSection === "conclusion" && (
            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-teal-600 dark:text-teal-400 border-b border-slate-200 dark:border-neutral-700 pb-2">
                Key Takeaways & Conclusion
              </h2>
              <p className="text-lg leading-relaxed">
                The analysis of Supergoop! Glowscreen SPF 30 shows that while
                popular, it contains several components conflicting with
                stricter &quot;clean&quot; standards, especially from Credo
                Beauty and, in some cases, &quot;Clean at Sephora.&quot; This
                highlights the evolving nature of &quot;clean beauty&quot; and
                the importance of ingredient awareness.
              </p>
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow space-y-4">
                <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-400">
                  Summary of Alignment:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Primary Concerns:</strong> Chemical UV filters
                    (Octocrylene, Ethylhexyl Salicylate, Butyl
                    Methoxydibenzoylmethane), Butyloctyl Salicylate (potential
                    undeclared UV filter), Chlorphenesin (preservative),
                    Leuconostoc/Radish Root Ferment Filtrate (contamination
                    risk), and Trisodium Ethylenediamine Disuccinate (EDTA
                    derivative).
                  </li>
                  <li>
                    <strong>Questionable Ingredients:</strong>{" "}
                    Polymethylsilsesquioxane (silicone), Isododecane
                    (hydrocarbon), Acrylates/C10-30 Alkyl Acrylate Crosspolymer
                    (synthetic polymer) due to environmental persistence or
                    residual monomer risks.
                  </li>
                  <li>
                    <strong>Compliant Ingredients:</strong> Many base
                    ingredients, emollients, plant extracts, and colorants
                    (assuming ethical sourcing and non-nano forms where
                    applicable) meet general &quot;clean&quot; principles.
                  </li>
                </ul>
                <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mt-4">
                  Recommendations for Consumers:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Prioritise sunscreens with non-nano Zinc Oxide and/or
                    non-nano Titanium Dioxide.
                  </li>
                  <li>
                    Scrutinise labels for flagged chemical UV filters and
                    preservatives.
                  </li>
                  <li>
                    Use resources like EWG Skin Deep® and retailer
                    &quot;clean&quot; lists.
                  </li>
                </ul>
                <p className="mt-4">
                  Transparency and ongoing research are vital in the dynamic
                  &quot;clean beauty&quot; sector. Brands are increasingly
                  innovating for safer, more sustainable products.
                </p>
              </div>
            </section>
          )}
        </main>

        {isModalOpen && selectedIngredient && (
          <div
            className="fixed inset-0 bg-slate-800 bg-opacity-75 flex items-center justify-center p-4 z-[60]"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] details-modal-animation"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-neutral-700">
                <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-400">
                  {selectedIngredient.name}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-2xl"
                >
                  &times;
                </button>
              </div>
              <div className="p-6 overflow-y-auto modal-content-scroll max-h-[calc(90vh-120px)] space-y-3 text-sm">
                <p>
                  <strong>Primary Function(s):</strong>{" "}
                  {selectedIngredient.functions.join(", ")}
                </p>
                <p>
                  <strong>EWG Hazard Score:</strong>{" "}
                  {selectedIngredient.ewgScore}
                </p>
                <p>
                  <strong>EWG Key Concerns:</strong>{" "}
                  {selectedIngredient.ewgConcerns}
                </p>
                <p>
                  <strong>&quot;Clean at Sephora&quot; Status:</strong>{" "}
                  <span
                    className={`${
                      selectedIngredient.sephoraStatus === "Prohibited"
                        ? "text-red-600 dark:text-red-400 font-semibold"
                        : "text-green-600 dark:text-green-400"
                    }`}
                  >
                    {selectedIngredient.sephoraStatus}
                  </span>
                </p>
                <p>
                  <strong>Credo &quot;The Dirty List&quot; Status:</strong>{" "}
                  <span
                    className={`${
                      selectedIngredient.credoStatus.includes("Prohibited")
                        ? "text-red-600 dark:text-red-400 font-semibold"
                        : "text-green-600 dark:text-green-400"
                    }`}
                  >
                    {selectedIngredient.credoStatus}
                  </span>
                </p>
                <hr className="my-3 border-slate-200 dark:border-neutral-700" />
                <p>
                  <strong>Overall &quot;Clean&quot; Assessment:</strong>{" "}
                  <span
                    className={`${getStatusTextColor(
                      selectedIngredient.overallAssessment
                    )} font-semibold`}
                  >
                    {selectedIngredient.overallAssessment}
                  </span>
                </p>
                <p>
                  <strong>Detailed Rationale:</strong>{" "}
                  {selectedIngredient.rationale}
                </p>
                <p>
                  <strong>Suggested &quot;Clean&quot; Alternative(s):</strong>{" "}
                  {selectedIngredient.alternatives}
                </p>
              </div>
              <div className="p-4 border-t border-slate-200 dark:border-neutral-700 text-right">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <footer className="text-center py-8 mt-12 border-t border-slate-200 dark:border-neutral-700">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            This interactive tool is for informational purposes only and
            reflects our own independent analysis and judgment. It is not
            affiliated with, endorsed by, or representative of Supergoop! or any
            other brand. Always consult multiple sources and professionals for
            cosmetic advice.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
            Analyser content derived from external report data.
          </p>
        </footer>
      </div>
    </>
  );
}
