import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ProcedureCard from "@/components/ProcedureCard";
import { PROCEDURES, BRAND, FAQS, formatPrice, discountedPrice } from "@/data/siteData";
import { motion } from "framer-motion";
import { Check, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProcedureHubPage = () => {
  const { slug } = useParams();
  const procedure = PROCEDURES.find(p => p.slug === slug) || PROCEDURES[0];

  const otherProcedures = PROCEDURES.filter(p => p.slug !== procedure.slug);

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient section-padding">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="discount-badge mb-4 inline-block">30% OFF This Month</span>
            <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">{procedure.name} Eye Surgery in India</h1>
            <p className="text-primary-foreground/80 text-lg mb-6">{procedure.tagline}</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="text-primary-foreground">
                <span className="line-through text-primary-foreground/50 text-sm">{formatPrice(procedure.price)}/eye</span>
                <span className="block font-display font-black text-2xl">{formatPrice(discountedPrice(procedure.price))}/eye</span>
              </div>
              <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold px-8">
                <Link to="/am-i-a-candidate">Book Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is this procedure */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <SectionHeading title={`What is ${procedure.name}?`} centered={false} />
          <p className="text-muted-foreground leading-relaxed mb-6">{procedure.description}</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Technology", value: procedure.technology },
              { label: "Duration", value: procedure.duration },
              { label: "Recovery", value: procedure.recovery },
            ].map(({ label, value }) => (
              <div key={label} className="bg-surface border border-border rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-1">{label}</p>
                <p className="text-sm font-medium text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section-padding bg-surface">
        <div className="container max-w-3xl">
          <SectionHeading title={`Why Choose ${procedure.name}?`} centered={false} />
          <ul className="space-y-3">
            {[procedure.usp, `Starting at just ${formatPrice(discountedPrice(procedure.price))}/eye after 30% discount`, "Available across 3,700+ cities in India", "Performed by board-certified ophthalmologists with 10,000+ procedures"].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cost */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <SectionHeading title={`${procedure.name} Cost in India`} />
          <div className="bg-card border border-border rounded-xl p-8 text-center mb-6">
            <p className="text-muted-foreground line-through">{formatPrice(procedure.price)}/eye</p>
            <p className="font-display font-black text-4xl text-primary my-2">{formatPrice(discountedPrice(procedure.price))}/eye</p>
            <p className="text-sm text-muted-foreground mb-4">Both eyes: {formatPrice(discountedPrice(procedure.price) * 2)} (after 30% discount)</p>
            <Button asChild className="cta-gradient border-0 text-primary-foreground">
              <Link to="/am-i-a-candidate">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Other procedures */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionHeading title="Compare Other LASIK Procedures" subtitle={`Not sure if ${procedure.name} is right for you? Explore alternatives:`} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {otherProcedures.map((p, i) => <ProcedureCard key={p.id} procedure={p} index={i} />)}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/which-lasik-is-best">Compare All Procedures <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <SectionHeading title={`FAQs about ${procedure.name}`} />
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.slice(0, 3).map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm">
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-4">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default ProcedureHubPage;
