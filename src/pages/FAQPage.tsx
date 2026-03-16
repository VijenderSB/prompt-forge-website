import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { FAQS } from "@/data/siteData";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  { key: "technology", label: "Technology" },
  { key: "general", label: "General" },
  { key: "eligibility", label: "Eligibility" },
  { key: "cost", label: "Cost & EMI" },
  { key: "recovery", label: "Recovery" },
  { key: "armed-forces", label: "Armed Forces" },
];

const FAQPage = () => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container text-center max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-primary-foreground/80 text-lg">Everything you need to know about LASIK eye surgery — from the latest technology to recovery and costs.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container max-w-3xl">
        {categories.map((cat) => {
          const faqs = FAQS.filter((f) => f.category === cat.key);
          if (faqs.length === 0) return null;
          return (
            <div key={cat.key} className="mb-10">
              <h2 className="font-display font-bold text-xl text-foreground mb-4">{cat.label}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`${cat.key}-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm">
                    <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-4 text-sm">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          );
        })}
      </div>
    </section>
    <CTABanner withForm />
  </Layout>
);

export default FAQPage;
