import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { FAQS } from "@/data/siteData";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  { key: "general", label: "General" },
  { key: "cost", label: "Cost & Insurance" },
  { key: "recovery", label: "Recovery" },
  { key: "eligibility", label: "Eligibility" },
  { key: "armed-forces", label: "Armed Forces" },
];

const FAQPage = () => (
  <Layout>
    <section className="section-padding">
      <div className="container max-w-3xl">
        <SectionHeading title="Frequently Asked Questions About LASIK" subtitle="Everything you need to know about LASIK eye surgery" />

        {categories.map((cat) => {
          const faqs = FAQS.filter((f) => f.category === cat.key);
          if (faqs.length === 0) return null;
          return (
            <div key={cat.key} className="mb-10">
              <h2 className="font-display font-bold text-xl text-foreground mb-4">{cat.label}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`${cat.key}-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm">
                    <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-4">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          );
        })}
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default FAQPage;
