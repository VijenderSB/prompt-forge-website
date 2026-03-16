import { Link } from "react-router-dom";
import { Phone, Star, MapPin, Eye, Shield, Award, Zap, Heart, Stethoscope, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProcedureCard from "@/components/ProcedureCard";
import CTABanner from "@/components/CTABanner";
import StatsBar from "@/components/StatsBar";
import ComparisonTable from "@/components/ComparisonTable";
import ConsultationForm from "@/components/ConsultationForm";
import { Button } from "@/components/ui/button";
import { BRAND, PROCEDURES, FAQS, TESTIMONIALS, formatPrice } from "@/data/siteData";
import heroImage from "@/assets/hero-lasik.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ─── Hero ─── */
const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={heroImage} alt="Young woman happy after LASIK eye surgery" className="w-full h-full object-cover object-top" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,11%)]/75 via-[hsl(222,47%,11%)]/55 to-transparent" />
    </div>
    <div className="container relative z-10 grid lg:grid-cols-5 gap-8 lg:gap-12 items-center py-16 md:py-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-3"
      >
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-5">
          <Eye className="w-4 h-4" /> WaveLight Plus InnovEyes
        </div>
        <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground leading-[1.1] mb-6">
          See the World <span className="text-accent">Without Glasses</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
          Just 10 minutes to crystal-clear vision. Safe, painless, and trusted by millions worldwide. Starting at just <strong className="text-primary-foreground">₹8,999</strong> per eye.
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
            <span className="font-bold text-primary-foreground">Trusted by 10L+ patients</span>
            <span className="block">97% satisfaction rate</span>
          </div>
        </div>
      </motion.div>
      <div className="lg:col-span-2">
        <ConsultationForm variant="hero" />
      </div>
    </div>
  </section>
);

/* ─── Quick Pricing Strip ─── */
const QuickPricing = () => (
  <section className="section-padding bg-surface">
    <div className="container">
      <SectionHeading
        title="LASIK Eye Surgery Cost & Technologies"
        subtitle="Over 10,00,000 procedures performed since 2004. All packages include pre-op diagnostics, surgery, eye drops & follow-up visits. No hidden charges. EMI from ₹1,500/month."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {PROCEDURES.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <Link
              to={`/procedures/${p.slug}`}
              className={`block bg-card rounded-xl p-4 text-center card-elevated group h-full ${
                p.badge ? "border-2 border-primary/20" : "border border-border"
              }`}
            >
              <h3 className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors mb-1 leading-tight">{p.name}</h3>
              <p className="font-display font-black text-xl text-primary mb-1">{formatPrice(p.price)}<span className="text-xs font-normal text-muted-foreground">/eye</span></p>
              <p className="text-[11px] text-muted-foreground leading-snug">{p.tagline}</p>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-xs text-muted-foreground">
        {["US-FDA approved platforms", "97% satisfaction rate", "Free 90-minute evaluation", "Both eyes treated same day"].map(item => (
          <span key={item} className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-accent" />{item}</span>
        ))}
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
      <SectionHeading title="Choose Your Path to Clear Vision" subtitle="Globally trusted LASIK options with 25+ years of proven outcomes on millions of patients." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROCEDURES.map((p, i) => <ProcedureCard key={p.id} procedure={p} index={i} />)}
      </div>
    </div>
  </section>
);

/* ─── Why Choose Us ─── */
const WhyUsSection = () => {
  const points = [
    { icon: Zap, title: "WaveLight Plus InnovEyes", desc: "AI-guided laser with PerfectPulse Technology® — 400 Hz speed, 1,050 eye-tracking points per second for sub-micron precision." },
    { icon: Eye, title: "SMILE Pro & SiLK", desc: "Flapless lenticule-based surgery — no corneal flap, 2mm incision, minimal dry eye, fastest recovery." },
    { icon: Shield, title: "US-FDA Approved", desc: "All platforms are US-FDA approved. Over 10,00,000 procedures performed since 2004 with 97% satisfaction rate." },
    { icon: Award, title: "Expert Surgeons", desc: "Refractive surgeons with 20+ years of experience across all flap-based and lenticule-based technologies." },
    { icon: Stethoscope, title: "Free 90-Min Evaluation", desc: "Pentacam, Topography, Aberrometry, Pachymetry — full diagnostic before any commitment, at no cost." },
    { icon: Heart, title: "Painless & Quick", desc: "Just 10 minutes per eye with zero pain. Both eyes same day. Walk in with glasses, walk out without." },
  ];
  return (
    <section className="section-padding bg-surface">
      <div className="container">
        <div className="text-center mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Why Choose Us</span>
        </div>
        <SectionHeading title="Your Vision, Our Expertise" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
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

/* ─── Testimonials ─── */
const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container">
      <div className="text-center mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">Patient Stories</span>
      </div>
      <SectionHeading title="Life After LASIK" subtitle="Real experiences from patients who chose to see the world differently." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
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
                  <p className="text-xs text-muted-foreground">Age {t.age}</p>
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

/* ─── Expert Insights ─── */
const ExpertInsights = () => (
  <section className="section-padding bg-surface">
    <div className="container max-w-4xl">
      <div className="text-center mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">Expert Insights</span>
      </div>
      <SectionHeading title="Best LASIK Eye Surgery in India" />
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-5">
        <p>
          Centre For Lasik has performed over <strong className="text-foreground">10,00,000 LASIK procedures since 2004</strong>, maintaining a 97% patient satisfaction rate across both flap-based and lenticule-based technologies. Our facility offers every clinically validated vision correction platform available in India — from Standard LASIK starting at ₹8,999/eye to the premium SiLK lenticule procedure. All surgeries use US-FDA approved equipment; all packages include pre-surgery diagnostics, procedure, medications, and follow-up.
        </p>
        <h3 className="text-foreground font-display font-bold text-lg">Which Technology Is Right for You?</h3>
        <ul className="space-y-2 list-none pl-0">
          {[
            { bold: "Active lifestyle / sports / thin corneas:", text: "SMILE Pro or SiLK (flapless, no dry eye risk)" },
            { bold: "Corneal irregularities / astigmatism:", text: "HD Contoura Vision or Femto + Contoura" },
            { bold: "Best overall precision, flap-based:", text: "WaveLight Plus InnovEyes" },
            { bold: "Budget-conscious, lower prescription:", text: "Standard LASIK (₹8,999/eye)" },
          ].map(({ bold, text }) => (
            <li key={bold} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span><strong className="text-foreground">{bold}</strong> {text}</span>
            </li>
          ))}
        </ul>
        <p>
          Pricing starts at ₹8,999/eye (Standard LASIK) up to ₹75,000/eye (SiLK). EMI from ₹1,500/month. No hidden charges. <Link to="/am-i-a-candidate" className="text-primary font-semibold hover:underline">Book your free evaluation today.</Link>
        </p>
      </div>
    </div>
  </section>
);

/* ─── FAQ ─── */
const FAQSection = () => (
  <section className="section-padding">
    <div className="container max-w-3xl">
      <div className="text-center mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">Got Questions?</span>
      </div>
      <SectionHeading title="Frequently Asked Questions" subtitle="Everything you need to know about LASIK eye surgery." />
      <Accordion type="single" collapsible className="space-y-3">
        {FAQS.slice(0, 8).map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm">
            <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-4 text-sm">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="text-center mt-8">
        <Button asChild variant="outline">
          <Link to="/faq">View All FAQs <ChevronRight className="w-4 h-4 ml-1" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ─── Homepage ─── */
const Homepage = () => (
  <Layout>
    <Hero />
    <QuickPricing />
    <ProceduresSection />
    <StatsBar />
    <ComparisonTable />
    <WhyUsSection />
    <TestimonialsSection />
    <CTABanner withForm />
    <ExpertInsights />
    <FAQSection />
    <CTABanner />
  </Layout>
);

export default Homepage;
