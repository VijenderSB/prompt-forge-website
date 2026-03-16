import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ProcedureCard from "@/components/ProcedureCard";
import ConsultationForm from "@/components/ConsultationForm";
import { PROCEDURES, BRAND, FAQS, formatPrice } from "@/data/siteData";
import { motion } from "framer-motion";
import { Check, Phone, ChevronRight, Shield, Clock, Zap } from "lucide-react";
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
      <section className="relative hero-gradient overflow-hidden">
        <div className="container grid lg:grid-cols-5 gap-8 lg:gap-12 items-center py-16 md:py-24 px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-3">
            {procedure.badge && (
              <span className="discount-badge mb-4 inline-block">{procedure.badge}</span>
            )}
            <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 leading-tight">
              {procedure.name} Eye Surgery in India
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-6 max-w-xl">{procedure.tagline}</p>
            <div className="flex items-center gap-6 mb-6">
              <div className="text-primary-foreground">
                <span className="line-through text-primary-foreground/50 text-sm">{formatPrice(procedure.originalPrice)}/eye</span>
                <span className="block font-display font-black text-3xl">{formatPrice(procedure.price)}/eye</span>
              </div>
              <span className="discount-badge text-sm">{procedure.discountPercent}% OFF</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold px-8">
                <Link to="/am-i-a-candidate">Book Free Consultation</Link>
              </Button>
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-primary-foreground font-medium h-12 px-6 rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/5 transition-colors">
                <Phone className="w-5 h-5" /> {BRAND.phoneDisplay}
              </a>
            </div>
          </motion.div>
          <div className="lg:col-span-2">
            <ConsultationForm variant="hero" />
          </div>
        </div>
      </section>

      {/* Key Specs */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <SectionHeading title={`What is ${procedure.name}?`} centered={false} />
          <p className="text-muted-foreground leading-relaxed mb-8">{procedure.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Zap, label: "Technology", value: procedure.technology },
              { icon: Clock, label: "Duration", value: procedure.duration },
              { icon: Shield, label: "Recovery", value: procedure.recovery },
              { icon: Shield, label: "Dry Eye Risk", value: procedure.dryEyeRisk },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-surface border border-border rounded-xl p-4 text-center">
                <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">{label}</p>
                <p className="text-sm font-medium text-foreground leading-tight">{value}</p>
              </div>
            ))}
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display font-bold text-foreground mb-4">Key Benefits</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {procedure.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-accent shrink-0" /> {f}
                </div>
              ))}
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-accent shrink-0" /> Starting at {formatPrice(procedure.price)}/eye
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-accent shrink-0" /> US-FDA approved platform
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="section-padding bg-surface">
        <div className="container max-w-3xl">
          <SectionHeading title={`${procedure.name} Cost in India`} />
          <div className="bg-card border border-border rounded-xl p-8 text-center mb-6">
            <p className="text-muted-foreground line-through">{formatPrice(procedure.originalPrice)}/eye</p>
            <p className="font-display font-black text-4xl text-primary my-2">{formatPrice(procedure.price)}/eye</p>
            <p className="text-sm text-muted-foreground mb-1">Both eyes: {formatPrice(procedure.price * 2)}</p>
            <p className="text-xs text-muted-foreground mb-4">EMI from {formatPrice(Math.round(procedure.price * 2 / 12))}/month • No hidden charges</p>
            <Button asChild className="cta-gradient border-0 text-primary-foreground">
              <Link to="/am-i-a-candidate">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading title="Compare Other LASIK Procedures" subtitle={`Not sure if ${procedure.name} is right for you? Explore alternatives:`} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {otherProcedures.slice(0, 3).map((p, i) => <ProcedureCard key={p.id} procedure={p} index={i} />)}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/which-lasik-is-best">Compare All Procedures <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container max-w-3xl">
          <SectionHeading title={`FAQs about ${procedure.name}`} />
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.slice(0, 5).map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm">
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-4 text-sm">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner withForm />
    </Layout>
  );
};

export default ProcedureHubPage;
