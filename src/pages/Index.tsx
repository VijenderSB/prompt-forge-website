import { Link } from "react-router-dom";
import { Phone, Eye, Shield, Award, MapPin, Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProcedureCard from "@/components/ProcedureCard";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { BRAND, PROCEDURES, STATES, TOP_CITIES, FAQS, TESTIMONIALS, CENTRES, formatPrice, discountedPrice, slugify } from "@/data/siteData";
import heroImage from "@/assets/hero-lasik.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Hero = () => (
  <section className="relative hero-gradient overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-28 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="discount-badge text-sm mb-4 inline-block">30% OFF This Month</span>
        <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
          India's Leading LASIK Eye Surgery Centre
        </h1>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg">
          Contoura Vision from ₹25,500/eye. ReLEx SMILE, InnovEyes, SMILE Pro & more across 3,700+ cities. Book your free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold px-8 h-12">
            <Link to="/am-i-a-candidate">Book Free Consultation</Link>
          </Button>
          <a href={`tel:${BRAND.phone}`} className="flex items-center justify-center gap-2 text-primary-foreground font-medium h-12 px-6 rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/5 transition-colors">
            <Phone className="w-5 h-5" /> {BRAND.phoneDisplay}
          </a>
        </div>
        <div className="flex items-center gap-6 mt-8 text-primary-foreground/60 text-sm">
          <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9/5 Rating</span>
          <span>1,200+ Reviews</span>
          <span>3,700+ Cities</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden lg:block"
      >
        <img src={heroImage} alt="Advanced LASIK eye surgery facility" className="rounded-2xl shadow-2xl w-full" />
      </motion.div>
    </div>
  </section>
);

const ProceduresSection = () => (
  <section className="section-padding bg-surface">
    <div className="container">
      <SectionHeading title="Our LASIK Procedures" subtitle="Six advanced vision correction procedures to suit every need and budget" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROCEDURES.map((p, i) => <ProcedureCard key={p.id} procedure={p} index={i} />)}
      </div>
    </div>
  </section>
);

const StatesSection = () => (
  <section className="section-padding">
    <div className="container">
      <SectionHeading title="LASIK Centres Across India" subtitle="Available in 28+ states and 3,700+ cities" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {STATES.map((state) => (
          <Link
            key={state}
            to={`/${slugify(state)}`}
            className="bg-card border border-border rounded-lg px-3 py-2.5 text-sm text-center font-medium text-foreground hover:border-primary hover:text-primary transition-colors card-elevated"
          >
            {state}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const TopCitiesSection = () => (
  <section className="section-padding bg-surface">
    <div className="container">
      <SectionHeading title="Top 10 Cities" subtitle="Most popular destinations for LASIK surgery" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {TOP_CITIES.map((city, i) => (
          <motion.div
            key={city.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={`/${slugify(city.state)}/${city.slug}`}
              className="block bg-card border border-border rounded-xl p-5 text-center card-elevated group"
            >
              <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
              <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">{city.name}</h3>
              <span className="text-xs text-muted-foreground">{city.state}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CostTable = () => (
  <section className="section-padding">
    <div className="container">
      <SectionHeading title="LASIK Surgery Cost in India" subtitle="Transparent pricing with 30% discount on all procedures" />
      <div className="max-w-3xl mx-auto bg-card rounded-xl border border-border overflow-hidden">
        <div className="grid grid-cols-4 gap-px bg-border text-sm font-display font-semibold text-foreground">
          <div className="bg-secondary p-4">Procedure</div>
          <div className="bg-secondary p-4 text-center">Standard Price</div>
          <div className="bg-secondary p-4 text-center">After 30% Off</div>
          <div className="bg-secondary p-4 text-center">You Save</div>
        </div>
        {PROCEDURES.map((p) => (
          <div key={p.id} className="grid grid-cols-4 gap-px bg-border text-sm">
            <div className="bg-card p-4 font-medium text-foreground">{p.name}</div>
            <div className="bg-card p-4 text-center text-muted-foreground line-through">{formatPrice(p.price)}/eye</div>
            <div className="bg-card p-4 text-center font-bold text-primary">{formatPrice(discountedPrice(p.price))}/eye</div>
            <div className="bg-card p-4 text-center text-accent font-semibold">{formatPrice(p.price - discountedPrice(p.price))}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyUsSection = () => {
  const points = [
    { icon: Eye, title: "Latest Technology", desc: "FDA-approved lasers including VisuMax 800, WaveLight EX500, and elita platforms" },
    { icon: Award, title: "Expert Surgeons", desc: "Board-certified ophthalmologists with 10,000+ successful procedures" },
    { icon: MapPin, title: "26 Centres Nationwide", desc: "Convenient access across major Indian cities with standardized quality" },
    { icon: Shield, title: "99%+ Success Rate", desc: "Proven track record with thousands of satisfied patients across India" },
  ];
  return (
    <section className="section-padding bg-surface">
      <div className="container">
        <SectionHeading title="Why Choose Centre for Lasik?" subtitle="India's most trusted LASIK surgery platform" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center card-elevated"
            >
              <div className="w-12 h-12 rounded-xl cta-gradient flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container">
      <SectionHeading title="Patient Testimonials" subtitle="Hear from real patients who trusted Centre for Lasik" />
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 card-elevated"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full cta-gradient flex items-center justify-center text-primary-foreground text-xs font-bold">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.city}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="section-padding bg-surface">
    <div className="container max-w-3xl">
      <SectionHeading title="Frequently Asked Questions" />
      <Accordion type="single" collapsible className="space-y-3">
        {FAQS.slice(0, 5).map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm">
            <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-4">{faq.q}</AccordionTrigger>
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

const CentresPreview = () => (
  <section className="section-padding">
    <div className="container">
      <SectionHeading title="Our LASIK Centres" subtitle="Conveniently located across major cities" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {CENTRES.slice(0, 5).map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link to={`/centres/${c.slug}`} className="block bg-card border border-border rounded-xl p-5 card-elevated group">
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{c.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{c.hospital}</p>
              <p className="text-sm text-muted-foreground flex items-start gap-1">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />{c.address}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline">
          <Link to="/centres">View All Centres <ChevronRight className="w-4 h-4 ml-1" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

const Homepage = () => (
  <Layout>
    <Hero />
    <ProceduresSection />
    <StatesSection />
    <TopCitiesSection />
    <CostTable />
    <WhyUsSection />
    <TestimonialsSection />
    <FAQSection />
    <CentresPreview />
    <CTABanner />
  </Layout>
);

export default Homepage;
