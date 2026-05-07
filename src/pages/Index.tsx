import { Link } from "react-router-dom";
import { Phone, Star, MapPin, Eye, Shield, Award, Zap, Heart, Stethoscope, ChevronRight, Clock, Users, BadgeCheck, Sparkles, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProcedureCard from "@/components/ProcedureCard";
import CTABanner from "@/components/CTABanner";
import StatsBar from "@/components/StatsBar";
import ConsultationForm from "@/components/ConsultationForm";
import USPBanner from "@/components/USPBanner";
import { Button } from "@/components/ui/button";
import { BRAND, PROCEDURES, FAQS, TESTIMONIALS, formatPrice } from "@/data/siteData";
import heroImage from "@/assets/hero-lasik.png";
import heroImageMobile from "@/assets/hero-lasik-mobile.png";
import {
import SEO from "@/components/SEO";
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ─── Hero ─── */
const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <picture className="block w-full h-full">
        <source media="(max-width: 767px)" srcSet={heroImageMobile} />
        <img
          src={heroImage}
          alt="Young couple happy after LASIK eye surgery throwing away their glasses"
          className="w-full h-full object-cover object-[center_top] md:object-[20%_top]"
        />
      </picture>
      {/* Left side darkening for headline readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,11%)]/85 via-[hsl(222,47%,11%)]/55 to-transparent" />
      {/* Mobile bottom darkening so text on top of image stays readable */}
      <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-[hsl(222,47%,11%)]/30 via-[hsl(222,47%,11%)]/40 to-[hsl(222,47%,11%)]/85" />
    </div>
    <div className="container relative z-10 grid lg:grid-cols-5 gap-8 lg:gap-12 items-center py-16 md:py-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-3"
      >
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-5">
          <MapPin className="w-4 h-4" /> Delhi NCR · WaveLight Plus InnovEyes
        </div>
        <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground leading-[1.1] mb-6">
          Best LASIK in <span className="text-accent">Delhi NCR</span> — Without Glasses
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
          Delhi's most trusted LASIK platform — accredited centres in Delhi, Noida & Gurgaon. Just 10 minutes to crystal-clear vision. Starting at just <strong className="text-primary-foreground">₹8,999</strong> per eye.
        </p>
        <div className="flex items-center gap-8 mb-6">
          <div className="flex -space-x-2">
            {["K", "S", "H", "P"].map((l, i) => (
              <div key={i} className="w-9 h-9 rounded-full bg-primary/60 border-2 border-[hsl(222,47%,11%)] flex items-center justify-center text-primary-foreground text-xs font-bold">
                {l}
              </div>
            ))}
          </div>
          <div className="text-primary-foreground/80 text-sm">
            <span className="font-bold text-primary-foreground">Trusted by 10L+ Delhi NCR patients</span>
            <span className="block">97% satisfaction · 50+ centres in Delhi NCR</span>
          </div>
        </div>
      </motion.div>
      <div className="lg:col-span-2">
        <ConsultationForm variant="hero" />
      </div>
    </div>
  </section>
);

/* ─── Procedures Grid ─── */
const ProceduresSection = () => (
  <section className="section-padding">
    <div className="container">
      <div className="text-center mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">Our Procedures</span>
      </div>
      <SectionHeading title="LASIK Procedures Available in Delhi NCR" subtitle="All 5 globally trusted LASIK technologies under one roof in Delhi, Noida & Gurgaon — from topography-guided to flapless lenticule surgery. All US-FDA approved." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROCEDURES.map((p, i) => <ProcedureCard key={p.id} procedure={p} index={i} />)}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-muted-foreground">
        {["US-FDA approved platforms", "97% satisfaction rate", "Free 90-minute evaluation", "Both eyes treated same day", "EMI from ₹1,500/mo"].map(item => (
          <span key={item} className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent" />{item}</span>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Why Choose Us — Full Width ─── */
const WhyUsSection = () => {
  const points = [
    { icon: Zap, title: "WaveLight Plus InnovEyes", desc: "AI-guided laser with PerfectPulse Technology® — 400 Hz speed, 1,050 eye-tracking points per second for sub-micron precision." },
    { icon: Eye, title: "SMILE Pro & SiLK", desc: "Flapless lenticule-based surgery — no corneal flap, 2mm incision, minimal dry eye, fastest recovery." },
    { icon: Shield, title: "US-FDA Approved Tech", desc: "All platforms are US-FDA approved. Over 10,00,000 procedures performed since 2004 with 97% satisfaction rate." },
    { icon: Award, title: "Expert Surgeons", desc: "Refractive surgeons with 20+ years of experience across all flap-based and lenticule-based technologies." },
    { icon: Stethoscope, title: "Free 90-Min Evaluation", desc: "Pentacam, Topography, Aberrometry, Pachymetry — full diagnostic before any commitment, at no cost." },
    { icon: Heart, title: "Painless & Quick", desc: "Just 10 minutes per eye with zero pain. Both eyes same day. Walk in with glasses, walk out without." },
    { icon: BadgeCheck, title: "Armed Forces Approved", desc: "EPI LASIK is the preferred procedure for armed forces candidates — non-detectable, structurally safest, no flap." },
    { icon: TrendingUp, title: "EMI from ₹1,500/mo", desc: "Affordable EMI options through major banks. No-cost EMI on select cards. No hidden charges — all inclusive pricing." },
  ];
  return (
    <section className="section-padding bg-surface">
      <div className="container">
        <div className="text-center mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Why Choose Us</span>
        </div>
        <SectionHeading title="Delhi NCR's Most Trusted LASIK Network" subtitle="20+ years in Delhi NCR. 10L+ happy patients across Delhi, Noida & Gurgaon. Every technology under one roof." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card border border-border rounded-xl p-6 card-elevated"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Testimonials — Full Width ─── */
const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container">
      <div className="text-center mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">Patient Stories</span>
      </div>
      <SectionHeading title="Life After LASIK — Delhi NCR Patient Stories" subtitle="Real experiences from patients across Delhi, Noida, Gurgaon & Faridabad who chose to see the world differently." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card border border-border rounded-xl p-6 card-elevated"
          >
            <div className="text-3xl text-primary/30 font-serif mb-2">"</div>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full cta-gradient flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city} · Age {t.age}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Expert Insights — Full Width, Detailed SEO Content ─── */
const ExpertInsights = () => (
    <section className="section-padding bg-surface">
      <div className="container">
      <div className="text-center mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">Expert Insights</span>
      </div>
      <SectionHeading title="Best LASIK Eye Surgery in Delhi NCR" />
      <div className="max-w-4xl mx-auto space-y-0">
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-5">
          <p>
            <strong className="text-foreground">Centre For Lasik</strong> is Delhi NCR's largest refractive surgery network, having performed over <strong className="text-foreground">10,00,000 LASIK procedures since 2004</strong> across our flagship centres in <strong className="text-foreground">South Delhi, Noida, Gurgaon, Faridabad and Ghaziabad</strong>. We maintain a 97% patient satisfaction rate across both flap-based and lenticule-based technologies — and offer every clinically validated vision correction platform available in India, from HD Contoura Vision at ₹25,500/eye to premium SiLK lenticule surgery at ₹75,000/eye.
          </p>
          <p>
            Delhi NCR is India's largest LASIK market — with over 1.2 lakh procedures performed annually across the capital region. With its concentration of top-tier eye hospitals, internationally trained refractive surgeons, and the latest 7th-generation lasers, Delhi consistently sets the national benchmark for LASIK outcomes, safety and pricing transparency.
          </p>
          <h3 className="text-foreground font-display font-bold text-lg">LASIK Technologies Available in Delhi NCR (2026)</h3>
          <p>
            All five primary technologies are available across our Delhi NCR centres: <strong className="text-foreground">WaveLight Plus InnovEyes</strong> (AI-guided, 400 Hz PerfectPulse), <strong className="text-foreground">HD Contoura Vision</strong> (22,000-point topography-guided), <strong className="text-foreground">EPI LASIK</strong> (non-detectable surface ablation — preferred by Delhi-based armed forces aspirants), <strong className="text-foreground">SiLK</strong> (ultra-smooth lenticule by J&J), and <strong className="text-foreground">SMILE Pro</strong> (flapless by Carl Zeiss). Each technology addresses a different clinical need — from cost-effectiveness to premium night vision quality.
          </p>
        </div>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-5 mt-5">
          <h3 className="text-foreground font-display font-bold text-lg">Which Technology Is Right for You?</h3>
          <ul className="space-y-3 list-none pl-0">
            {[
              { bold: "Active lifestyle / sports / thin corneas:", text: "SMILE Pro or SiLK — flapless, no dry eye risk, fastest recovery." },
              { bold: "Corneal irregularities / astigmatism:", text: "HD Contoura Vision — 22,000 elevation points for personalized correction." },
              { bold: "Best AI-guided flap-based precision:", text: "WaveLight Plus InnovEyes — PerfectPulse® tracks 1,050x/sec." },
              { bold: "Armed forces / contact sports:", text: "EPI LASIK — non-detectable, no flap, structurally safest." },
              { bold: "Best night vision & latest technology:", text: "SiLK by Johnson & Johnson — ultra-smooth stromal bed, sub-2mm incision." },
            ].map(({ bold, text }) => (
              <li key={bold} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">{bold}</strong> {text}</span>
              </li>
            ))}
          </ul>
          <h3 className="text-foreground font-display font-bold text-lg">LASIK Cost in Delhi NCR — Locality-Wise Guide</h3>
          <p>
            Delhi NCR LASIK pricing typically ranges between ₹18,000–₹75,000/eye depending on the technology and locality: <strong className="text-foreground">South Delhi & Central Delhi</strong> (₹24,000–₹75,000/eye), <strong className="text-foreground">Gurgaon</strong> (₹22,000–₹68,000/eye), <strong className="text-foreground">Noida</strong> (₹21,000–₹65,000/eye), <strong className="text-foreground">Faridabad</strong> (₹18,000–₹54,000/eye), and <strong className="text-foreground">Ghaziabad</strong> (₹18,000–₹52,000/eye). At Centre For Lasik, all Delhi NCR prices are fixed and transparent — no hidden charges, no surprise costs. Packages include pre-surgery diagnostics, the procedure, medications, and follow-up visits. EMI from ₹1,500/month.
          </p>
          <p>
            <Link to="/am-i-a-candidate" className="text-primary font-semibold hover:underline">Book your free 90-minute evaluation at any Delhi NCR centre</Link> — diagnostic tests alone are worth ₹4,000+ and include Pentacam tomography, corneal topography, aberrometry, pachymetry, Schirmer dry eye test, and dilated retinal exam.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ─── FAQ — Two Columns (no SMILE Pro) ─── */
const FAQSection = () => {
  const filteredFaqs = FAQS.filter(f => !f.q.toLowerCase().includes("smile pro") && !f.a.toLowerCase().includes("smile pro"));
  const half = Math.ceil(filteredFaqs.length / 2);
  const col1 = filteredFaqs.slice(0, half);
  const col2 = filteredFaqs.slice(half);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Got Questions?</span>
        </div>
        <SectionHeading title="LASIK FAQs — Delhi NCR Patients" subtitle="Everything Delhi NCR patients ask about LASIK eye surgery — technologies, eligibility, cost, and recovery." />
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {filteredFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm">
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-4 text-sm">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/faq">View All FAQs <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* ─── Resources / Blog Preview ─── */
const blogPreview = [
  { slug: "contoura-vision-explained", title: "Contoura Vision Explained: How 22,000-Point Mapping Transforms Your Vision", excerpt: "Understanding the advanced topographic technology behind India's most popular LASIK procedure.", category: "LASIK Technology", date: "2026-03-10" },
  { slug: "lasik-risks-complications", title: "LASIK Risks & Complications: What the Data Actually Shows", excerpt: "A transparent look at LASIK safety statistics, side effects, and how modern technology minimizes risk.", category: "Safety & Risk", date: "2026-03-08" },
  { slug: "how-much-lasik-costs", title: "How Much Does LASIK Cost in India in 2026?", excerpt: "Complete pricing breakdown for all LASIK procedures, EMI options, and insurance coverage.", category: "LASIK Cost", date: "2026-03-05" },
];

const ResourcesSection = () => (
  <section className="section-padding">
    <div className="container">
      <div className="text-center mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">Resources</span>
      </div>
      <SectionHeading title="Latest from Our Blog" subtitle="Expert articles on LASIK technology, costs, recovery, and eligibility." />
      <div className="grid md:grid-cols-3 gap-8">
        {blogPreview.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link to={`/blog/${post.slug}`} className="block bg-card border border-border rounded-xl overflow-hidden card-elevated group h-full">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline">
          <Link to="/blog">View All Articles <ChevronRight className="w-4 h-4 ml-1" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ─── Homepage ─── */
const Homepage = () => (
  <Layout>
      <SEO
        title="LASIK Eye Surgery in India from ₹11,249/Eye"
        description="India's #1 LASIK platform. Standard LASIK, Contoura Vision, SMILE Pro & WaveLight InnovEyes from ₹11,249/eye across 3,700+ cities. 30% off. Free 90-min consultation."
        path="/"
      />
    <Hero />
    <ProceduresSection />
    <StatsBar />
    <USPBanner variant="full" />
    <WhyUsSection />
    <TestimonialsSection />
    <CTABanner withForm />
    <ExpertInsights />
    <FAQSection />
    <ResourcesSection />
    <CTABanner />
  </Layout>
);

export default Homepage;
