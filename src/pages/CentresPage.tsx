import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";
import ProcedureNavStrip from "@/components/ProcedureNavStrip";
import { CENTRES, PAGE_FAQS } from "@/data/siteData";
import { MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = PAGE_FAQS["centres"] || [];

const CentresPage = () => (
  <Layout>
    {/* Hero with Lead Form */}
    <section className="hero-gradient section-padding">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">LASIK Eye Surgery Centres Across India</h1>
            <p className="text-primary-foreground/80 text-lg mb-4">State-of-the-art facilities with same world-class quality at every location.</p>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>✓ Multiple centres across Delhi NCR</li>
              <li>✓ Free 90-minute diagnostic at every location</li>
              <li>✓ All procedures from ₹8,999/eye to ₹75,000/eye</li>
              <li>✓ Mon–Sat, 9 AM – 7 PM</li>
            </ul>
          </motion.div>
          <ConsultationForm variant="hero" />
        </div>
      </div>
    </section>

    {/* Centres Grid */}
    <section className="section-padding">
      <div className="container max-w-4xl">
        <SectionHeading title="Our Centres" subtitle="Visit any of our centres for a free LASIK consultation" />
        <div className="grid md:grid-cols-2 gap-6">
          {CENTRES.map((c, i) => (
            <motion.div key={c.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link to={`/centres/${c.slug}`} className="block bg-card border border-border rounded-xl p-6 card-elevated group h-full">
                <h2 className="font-display font-bold text-foreground group-hover:text-primary transition-colors mb-1">{c.name}</h2>
                <p className="text-xs text-muted-foreground mb-3">Partner: {c.hospital}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2"><MapPin className="w-4 h-4 shrink-0 mt-0.5" />{c.address}</p>
                  <p className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" />{c.phone}</p>
                  <p className="flex items-center gap-2"><Clock className="w-4 h-4 shrink-0" />Mon–Sat, 9:00 AM – 7:00 PM</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding bg-surface">
      <div className="container max-w-4xl">
        <SectionHeading title="Centre & Consultation FAQs" subtitle="Everything you need to know before visiting" />
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
        <h2 className="font-display font-bold text-2xl text-primary-foreground mb-3">Book Your Free LASIK Consultation</h2>
        <p className="text-primary-foreground/80 mb-6">Walk in or call — our specialist will evaluate your eyes and recommend the best procedure.</p>
        <ConsultationForm variant="compact" />
      </div>
    </section>
  </Layout>
);

export default CentresPage;
