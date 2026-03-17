import Layout from "@/components/Layout";
import CTABanner from "@/components/CTABanner";
import USPBanner from "@/components/USPBanner";
import ProcedureNavStrip from "@/components/ProcedureNavStrip";
import ConsultationForm from "@/components/ConsultationForm";
import { FAQS } from "@/data/siteData";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  { key: "general", label: "General LASIK Questions" },
  { key: "technology", label: "LASIK Technology & Procedures" },
  { key: "eligibility", label: "Eligibility & Candidacy" },
  { key: "cost", label: "Cost, Pricing & EMI" },
  { key: "recovery", label: "Recovery & Aftercare" },
  { key: "armed-forces", label: "Armed Forces & Pilots" },
];

const FAQPage = () => (
  <Layout>
    {/* Hero */}
    <section className="hero-gradient section-padding">
      <div className="container text-center max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70 mb-3 block">
            Patient Guide — 50 Expert Answers
          </span>
          <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Must-Know Information Before LASIK Surgery
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Thinking about LASIK can feel exciting — and a little overwhelming. You're making a decision that can reduce or even eliminate your dependence on glasses or contact lenses. Here's everything you need to know, answered by India's top refractive surgeons.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Narrative intro */}
    <section className="section-padding bg-surface border-b border-border">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-sm sm:prose max-w-none text-muted-foreground"
        >
          <p className="text-base md:text-lg leading-relaxed">
            Before you go ahead with laser vision correction, it helps to understand
            what the procedure involves, which technology suits your eyes, what the
            costs look like, and how recovery works. We've compiled <strong className="text-foreground">50
            of the most frequently asked questions</strong> from patients across India —
            answered in plain language by ophthalmologists with 20+ years of experience.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Whether you're comparing SMILE Pro vs Contoura Vision, wondering about armed forces
            eligibility, or simply asking <em>"Is LASIK painful?"</em> — you'll find clear,
            honest answers below. And remember: Centre for Lasik's free 90-minute diagnostic
            evaluation gives you a personalised, data-backed recommendation at no cost.
          </p>
        </motion.div>
      </div>
    </section>


    {/* Two-column FAQ sections */}
    <section className="section-padding">
      <div className="container max-w-6xl">
        {categories.map((cat) => {
          const faqs = FAQS.filter((f) => f.category === cat.key);
          if (faqs.length === 0) return null;

          // Split into two columns
          const mid = Math.ceil(faqs.length / 2);
          const col1 = faqs.slice(0, mid);
          const col2 = faqs.slice(mid);

          return (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-6 rounded-full bg-primary inline-block" />
                {cat.label}
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  {faqs.length} questions
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                {/* Column 1 */}
                <Accordion type="single" collapsible className="space-y-3">
                  {col1.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`${cat.key}-a-${i}`}
                      className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-sm"
                    >
                      <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-4 text-sm">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Column 2 */}
                <Accordion type="single" collapsible className="space-y-3">
                  {col2.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`${cat.key}-b-${i}`}
                      className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-sm"
                    >
                      <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-4 text-sm">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Lead Form */}
    <section className="section-padding bg-surface border-y border-border">
      <div className="container max-w-lg text-center">
        <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">
          Still Have Questions?
        </h2>
        <p className="text-muted-foreground text-sm mb-6">
          Book a free consultation — our LASIK specialist will answer every doubt personally.
        </p>
        <ConsultationForm variant="section" />
      </div>
    </section>

    {/* Navigate to LASIK Packages */}
    <ProcedureNavStrip />

    <CTABanner />
  </Layout>
);

export default FAQPage;
