import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ProcedureCard from "@/components/ProcedureCard";
import ConsultationForm from "@/components/ConsultationForm";
import {
  PROCEDURES,
  BRAND,
  PROCEDURE_FAQS,
  PROCEDURE_TESTIMONIALS,
  PROCEDURE_TECH_DETAILS,
  PROCEDURE_CLINICAL_STUDIES,
  formatPrice,
} from "@/data/siteData";
import ClinicalStudiesTable from "@/components/ClinicalStudiesTable";
import { motion } from "framer-motion";
import {
  Check,
  Phone,
  ChevronRight,
  Shield,
  Clock,
  Zap,
  Star,
  Eye,
  Target,
  Cpu,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProcedureHubPage = () => {
  const { slug } = useParams();
  const procedure = PROCEDURES.find((p) => p.slug === slug) || PROCEDURES[0];
  const otherProcedures = PROCEDURES.filter((p) => p.slug !== procedure.slug);
  const techDetails = PROCEDURE_TECH_DETAILS[procedure.slug];
  const procedureFaqs = PROCEDURE_FAQS.filter((f) => f.procedure === procedure.slug);
  const procedureTestimonials = PROCEDURE_TESTIMONIALS.filter((t) => t.procedure === procedure.slug);
  const clinicalStudies = PROCEDURE_CLINICAL_STUDIES[procedure.slug];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="container max-w-6xl grid lg:grid-cols-5 gap-8 lg:gap-12 items-center py-16 md:py-24 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            {procedure.badge && (
              <span className="discount-badge mb-4 inline-block">
                {procedure.badge}
              </span>
            )}
            <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 leading-tight">
              {procedure.name} Eye Surgery in India
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-6 max-w-xl">
              {procedure.tagline}
            </p>
            <div className="flex items-center gap-6 mb-6">
              <div className="text-primary-foreground">
                <span className="line-through text-primary-foreground/50 text-sm">
                  {formatPrice(procedure.originalPrice)}/eye
                </span>
                <span className="block font-display font-black text-3xl">
                  {formatPrice(procedure.price)}/eye
                </span>
              </div>
              <span className="discount-badge text-sm">
                {procedure.discountPercent}% OFF
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-card text-foreground hover:bg-card/90 font-semibold px-8"
              >
                <Link to="/am-i-a-candidate">Book Free Consultation</Link>
              </Button>
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-2 text-primary-foreground font-medium h-12 px-6 rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/5 transition-colors"
              >
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
        <div className="container max-w-6xl">
          <SectionHeading
            title={`What is ${procedure.name}?`}
            centered={false}
          />
          <p className="text-muted-foreground leading-relaxed mb-8">
            {procedure.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Zap, label: "Technology", value: procedure.technology },
              { icon: Clock, label: "Duration", value: procedure.duration },
              { icon: Shield, label: "Recovery", value: procedure.recovery },
              {
                icon: Eye,
                label: "Dry Eye Risk",
                value: procedure.dryEyeRisk,
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-surface border border-border rounded-xl p-4 text-center"
              >
                <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">{label}</p>
                <p className="text-sm font-medium text-foreground leading-tight">
                  {value}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display font-bold text-foreground mb-4">
              Key Benefits
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {procedure.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <Check className="w-4 h-4 text-accent shrink-0" /> {f}
                </div>
              ))}
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-accent shrink-0" /> Starting at{" "}
                {formatPrice(procedure.price)}/eye
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-accent shrink-0" /> US-FDA
                approved platform
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Deep Dive */}
      {techDetails && (
        <section className="section-padding bg-surface">
          <div className="container max-w-6xl">
            <SectionHeading
              title={`${procedure.name} Technology`}
              subtitle="Understand the science behind your vision correction"
            />

            {/* Overview */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
              <div className="flex items-start gap-3 mb-4">
                <Cpu className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">
                    Technology Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {techDetails.overview}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* How It Works */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" /> How It Works
                </h3>
                <ol className="space-y-3">
                  {techDetails.howItWorks.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="text-foreground leading-relaxed pt-0.5">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Ideal For */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" /> Ideal For
                </h3>
                <ul className="space-y-3">
                  {techDetails.idealFor.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Specs Table */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-primary/5 px-6 py-3 border-b border-border">
                <h3 className="font-display font-bold text-foreground text-sm">
                  Technical Specifications
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
                {techDetails.techSpecs.map((spec) => (
                  <div key={spec.label} className="bg-card p-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      {spec.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cost + CTA */}
      <section className="section-padding">
        <div className="container max-w-6xl">
          <SectionHeading title={`${procedure.name} Cost in India`} />
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-card border border-border rounded-xl p-8">
              <p className="text-muted-foreground line-through">
                {formatPrice(procedure.originalPrice)}/eye
              </p>
              <p className="font-display font-black text-4xl text-primary my-2">
                {formatPrice(procedure.price)}/eye
              </p>
              <p className="text-sm text-muted-foreground mb-1">
                Both eyes: {formatPrice(procedure.price * 2)}
              </p>
              <p className="text-xs text-muted-foreground mb-6">
                EMI from {formatPrice(Math.round((procedure.price * 2) / 12))}
                /month • No hidden charges
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="font-display font-semibold text-foreground text-sm">
                  Price Includes:
                </h4>
                {[
                  "Comprehensive 90-min pre-op diagnostic",
                  "Surgery by senior refractive surgeon",
                  "Post-operative medications & drops",
                  "All follow-up visits (1 day, 1 week, 1 month, 3 months)",
                  "Enhancement guarantee (if needed)",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <Check className="w-4 h-4 text-accent shrink-0" /> {item}
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="w-full cta-gradient border-0 text-primary-foreground h-12 font-semibold"
              >
                <Link to="/am-i-a-candidate">
                  Book Free Consultation — Lock This Price
                </Link>
              </Button>
            </div>

            <ConsultationForm variant="section" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {procedureTestimonials.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="container max-w-6xl">
            <SectionHeading
              title={`${procedure.name} Patient Stories`}
              subtitle="Real experiences from patients who chose this procedure"
            />
            <div className="grid md:grid-cols-3 gap-6">
              {procedureTestimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 relative"
                >
                  <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.city} • Age {t.age}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compare */}
      <section className="section-padding">
        <div className="container max-w-6xl">
          <SectionHeading
            title="Compare Other LASIK Procedures"
            subtitle={`Not sure if ${procedure.name} is right for you? Explore alternatives:`}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {otherProcedures.slice(0, 3).map((p, i) => (
              <ProcedureCard key={p.id} procedure={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/which-lasik-is-best">
                Compare All Procedures{" "}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container max-w-6xl">
          <SectionHeading
            title={`FAQs about ${procedure.name}`}
            subtitle={`Everything you need to know about ${procedure.name} — pricing, technology, recovery, and more`}
          />
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {procedureFaqs.map((faq, i) => (
              <Accordion
                key={i}
                type="single"
                collapsible
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-4 text-sm">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container max-w-6xl">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display font-black text-2xl md:text-3xl text-primary-foreground mb-3">
              Ready for {procedure.name}?
            </h2>
            <p className="text-primary-foreground/80 mb-2 max-w-lg mx-auto">
              Get a free 90-minute diagnostic evaluation and personalized
              recommendation. Starting at just{" "}
              {formatPrice(procedure.price)}/eye.
            </p>
            <p className="text-primary-foreground/60 text-sm mb-6">
              {procedure.discountPercent}% discount • EMI from{" "}
              {formatPrice(Math.round((procedure.price * 2) / 12))}/month • No
              hidden charges
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-card text-foreground hover:bg-card/90 font-semibold px-8"
              >
                <Link to="/am-i-a-candidate">Book Free Consultation</Link>
              </Button>
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-2 text-primary-foreground font-medium h-12 px-6 rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/5 transition-colors"
              >
                <Phone className="w-5 h-5" /> Call {BRAND.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProcedureHubPage;
