// Inject <SEO> tags into all listed page files.
import fs from "node:fs";

const pages = [
  { file: "src/pages/Index.tsx", path: "/", title: "LASIK Eye Surgery in India from ₹11,249/Eye", desc: "India's #1 LASIK platform. Standard LASIK, Contoura Vision, SMILE Pro & WaveLight InnovEyes from ₹11,249/eye across 3,700+ cities. 30% off. Free 90-min consultation." },
  { file: "src/pages/CostPage.tsx", path: "/cost", title: "LASIK Cost in India 2026 — Price by Procedure & City", desc: "Compare LASIK prices: Standard ₹11,249, Contoura ₹25,500, SMILE Pro ₹49,000, InnovEyes ₹61,250. EMI from ₹750/mo. Transparent institutional pricing." },
  { file: "src/pages/FAQPage.tsx", path: "/faq", title: "LASIK FAQ — 50 Questions Answered by Top Surgeons", desc: "50 surgeon-verified answers on LASIK safety, cost, recovery, eligibility, side effects, age, results. Reviewed by Dr. V.K. Tewari MS Ophthalmology." },
  { file: "src/pages/WhyUsPage.tsx", path: "/why-us", title: "Why Centre for Lasik — India's #1 LASIK Booking Platform", desc: "12,480+ patients, 4.9★, 3,700+ cities, US-FDA-approved tech, 30% institutional volume-discount pricing. Compare Centre for Lasik vs hospitals." },
  { file: "src/pages/EyeAnatomyPage.tsx", path: "/eye-anatomy", title: "Human Eye Anatomy — Cornea, Lens, Retina Explained", desc: "Surgeon-reviewed guide to eye anatomy, how vision works, and how LASIK reshapes the cornea. Diagrams of cornea, iris, lens, retina, optic nerve." },
  { file: "src/pages/CommonVisionProblemsPage.tsx", path: "/common-vision-problems", title: "Myopia, Hyperopia & Astigmatism — Causes, Symptoms, Treatment", desc: "Complete guide to refractive errors in India: myopia, hyperopia, astigmatism, presbyopia. Diagnosis, prescription explained, LASIK vs glasses vs ICL." },
  { file: "src/pages/WhatIsLasikPage.tsx", path: "/what-is-lasik", title: "What is LASIK Eye Surgery? Procedure, Safety & Results", desc: "LASIK is FDA-approved laser vision correction with 99.5% success rate. 15-minute procedure, 24-hour recovery. Complete patient guide for India 2026." },
  { file: "src/pages/LasikMythsPage.tsx", path: "/lasik-myths-vs-facts", title: "15 LASIK Myths vs Facts — Debunked by Eye Surgeons", desc: "Is LASIK painful? Permanent? Safe? Affordable? Surgeon-verified answers to the top 15 LASIK myths in India. Updated 2026." },
  { file: "src/pages/UnfitLasikPage.tsx", path: "/unfit-for-lasik", title: "Not a LASIK Candidate? 5 Best Alternatives (ICL, RLE, PRK)", desc: "If you're unfit for LASIK, ICL, RLE, Phakic IOL or Epi-LASIK may help. Compare cost, suitability and recovery for each alternative procedure." },
  { file: "src/pages/RiskRecoveryPage.tsx", path: "/risk-recovery", title: "LASIK Risks, Side Effects & Recovery Timeline (Day-by-Day)", desc: "Honest guide to LASIK complications (<1%), dry eye, halos, and the day-by-day recovery timeline from day 1 to day 30. Surgeon-reviewed." },
  { file: "src/pages/WhichLasikPage.tsx", path: "/which-lasik-is-best", title: "Which LASIK is Best for You? Free Procedure Selector Tool", desc: "Compare Standard LASIK, Contoura, SMILE Pro, WaveLight InnovEyes & ICL. Match the right procedure to your eyes, budget and lifestyle." },
  { file: "src/pages/LocationsPage.tsx", path: "/locations", title: "LASIK Eye Surgery Near You — Pan-India Coverage (3,700+ Cities)", desc: "Available in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur and 3,693 more cities across India." },
  { file: "src/pages/BlogPage.tsx", path: "/blog", title: "LASIK Blog — Expert Insights, Recovery Tips & Patient Stories", desc: "Surgeon-authored articles on LASIK procedures, recovery, costs, and comparisons. Updated weekly with the latest research and patient experiences." },
  { file: "src/pages/InternationalGuidelinesPage.tsx", path: "/international-guidelines", title: "LASIK Safety Standards — FDA, CE, NICE & AAO Guidelines", desc: "International compliance benchmarks: US FDA, EU CE Mark, UK NICE, AAO. How Centre for Lasik meets each global LASIK safety standard." },
  { file: "src/pages/LasikTechnologyPage.tsx", path: "/lasik-technology", title: "LASIK Technology 2026 — 7 Generations from PRK to AI Lasers", desc: "Every laser platform compared: Alcon WaveLight, Carl Zeiss VisuMax, J&J elita. PRK to AI-guided InnovEyes. FDA approvals & specs." },
];

let count = 0;
for (const p of pages) {
  let src = fs.readFileSync(p.file, "utf8");
  if (src.includes('from "@/components/SEO"') || src.includes("<SEO ")) {
    console.log(`⏭  ${p.file} already has SEO`);
    continue;
  }

  // Add import after first import line
  const importLine = `import SEO from "@/components/SEO";\n`;
  const lines = src.split("\n");
  let lastImport = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("import ")) lastImport = i;
  }
  lines.splice(lastImport + 1, 0, importLine.trimEnd());
  src = lines.join("\n");

  // Insert <SEO ... /> right after first <Layout> opening tag occurrence
  const seoTag = `      <SEO\n        title=${JSON.stringify(p.title)}\n        description=${JSON.stringify(p.desc)}\n        path=${JSON.stringify(p.path)}\n      />\n`;
  src = src.replace(/<Layout>\s*\n/, match => match + seoTag);

  fs.writeFileSync(p.file, src);
  console.log(`✅ ${p.file}`);
  count++;
}
console.log(`\nInjected SEO into ${count} pages.`);
