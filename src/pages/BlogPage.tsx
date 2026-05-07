import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";
import ProcedureNavStrip from "@/components/ProcedureNavStrip";
import { PAGE_FAQS } from "@/data/siteData";
import { LEGACY_BLOG_POSTS } from "@/data/legacyBlogPosts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
import SEO from "@/components/SEO";
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const blogPosts = [
  { slug: "contoura-vision-explained", title: "Contoura Vision Explained: How 22,000-Point Mapping Transforms Your Vision", excerpt: "Understanding the advanced topographic technology behind India's most popular LASIK procedure.", category: "LASIK Technology", date: "2026-03-10", featured: true },
  { slug: "lasik-risks-complications", title: "LASIK Risks & Complications: What the Data Actually Shows", excerpt: "A transparent look at LASIK safety statistics, side effects, and how modern technology minimizes risk.", category: "Safety & Risk", date: "2026-03-08", featured: true },
  { slug: "how-much-lasik-costs", title: "How Much Does LASIK Cost in India in 2026?", excerpt: "Complete pricing breakdown for all LASIK procedures, EMI options, and insurance coverage.", category: "LASIK Cost", date: "2026-03-05", featured: true },
  { slug: "lasik-recovery-day-by-day", title: "LASIK Recovery: A Day-by-Day Guide to Your Healing Journey", excerpt: "What to expect from Day 1 to Month 3 after LASIK surgery, including dos and don'ts.", category: "Recovery", date: "2026-03-03" },
  { slug: "am-i-candidate-lasik", title: "Am I a Candidate for LASIK? Complete Eligibility Guide", excerpt: "Age, prescription, corneal thickness, and other factors that determine your LASIK eligibility.", category: "Eligibility", date: "2026-02-28" },
  { slug: "contoura-vs-smile", title: "Contoura Vision vs SMILE: Which LASIK is Better?", excerpt: "A detailed comparison of two of the most popular LASIK procedures in India.", category: "Comparisons", date: "2026-02-25" },
  { slug: "visumax-800-smile-pro", title: "VisuMax 800 & SMILE Pro: The Future of Keyhole LASIK", excerpt: "How the VisuMax 800 platform achieves 7-second laser treatment with robotic precision.", category: "LASIK Technology", date: "2026-02-20" },
  { slug: "lasik-eligibility-army", title: "LASIK for Indian Armed Forces: Eligibility & Rules", excerpt: "Everything you need to know about LASIK eligibility for Army, Navy, Air Force, and paramilitary forces.", category: "Eligibility", date: "2026-02-15" },
  { slug: "lasik-emi-options", title: "LASIK EMI Options: Make Vision Correction Affordable", excerpt: "Break down your LASIK cost into easy monthly installments starting from ₹2,500/month.", category: "LASIK Cost", date: "2026-02-10" },
];

// Merge curated posts with legacy laser.fyi posts (preserves dated URL paths from sheet).
const allPosts = [
  ...blogPosts.map(p => ({ ...p, path: `/blog/${p.slug}` })),
  ...LEGACY_BLOG_POSTS.map(p => ({ slug: p.slug, title: p.title, excerpt: (p.excerptHtml || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().slice(0, 180), category: p.category, date: p.date, featured: false, path: p.path })),
].sort((a, b) => b.date.localeCompare(a.date));

const categories = ["All", ...Array.from(new Set(allPosts.map(p => p.category)))];
const faqs = PAGE_FAQS["blog"] || [];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = allPosts.filter(post => {
    const matchCat = activeCategory === "All" || post.category === activeCategory;
    const matchSearch = !search || post.title.toLowerCase().includes(search.toLowerCase()) || (post.excerpt || "").toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = allPosts.filter(p => p.featured);

  return (
    <Layout>
      <SEO
        title="LASIK Blog — Expert Insights, Recovery Tips & Patient Stories"
        description="Surgeon-authored articles on LASIK procedures, recovery, costs, and comparisons. Updated weekly with the latest research and patient experiences."
        path="/blog"
      />
      {/* Hero with Lead Form */}
      <section className="hero-gradient section-padding">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">LASIK Eye Surgery Blog</h1>
              <p className="text-primary-foreground/80 text-lg mb-4">Expert insights on LASIK technology, costs, recovery, and eligibility from Centre for Lasik.</p>
              <ul className="space-y-2 text-primary-foreground/70 text-sm">
                <li>✓ Latest LASIK technology updates</li>
                <li>✓ Honest cost breakdowns & EMI options</li>
                <li>✓ Recovery guides & patient stories</li>
                <li>✓ Eligibility criteria for all procedures</li>
              </ul>
            </motion.div>
            <ConsultationForm variant="hero" />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-surface">
        <div className="container max-w-5xl">
          <SectionHeading title="Featured Articles" />
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((post, i) => (
              <motion.article key={post.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={post.path} className="block bg-card border border-primary/20 rounded-xl p-6 card-elevated group h-full ring-1 ring-primary/5">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
                  <h2 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors mt-3 mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Directory */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <SectionHeading title="All Articles" />
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search articles..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((post, i) => (
              <motion.article key={post.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={post.path} className="block bg-card border border-border rounded-xl p-6 card-elevated group h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  </div>
                  <h2 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                  <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container max-w-4xl">
          <SectionHeading title="LASIK Knowledge Base — FAQs" subtitle="Quick answers to your most common LASIK questions" />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm">
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-4 text-sm">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Procedure Navigation */}
      <ProcedureNavStrip />

      {/* Bottom CTA */}
      <section className="section-padding hero-gradient">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display font-bold text-2xl text-primary-foreground mb-3">Ready to Start Your LASIK Journey?</h2>
          <p className="text-primary-foreground/80 mb-6">Book a free consultation — our specialist will recommend the best procedure for your eyes.</p>
          <ConsultationForm variant="compact" />
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
