import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";
import ProcedureNavStrip from "@/components/ProcedureNavStrip";
import { PAGE_FAQS } from "@/data/siteData";
import { motion } from "framer-motion";
import { Eye, Shield, AlertTriangle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const timeline = [
  { day: "Day 1", title: "Surgery Day", desc: "Procedure takes 15–30 minutes. You may experience mild discomfort, tearing, and light sensitivity. Rest with eyes closed for 4–6 hours." },
  { day: "Day 2–3", title: "Early Recovery", desc: "Vision begins to clear. Avoid rubbing eyes, screens, and strenuous activity. Use prescribed eye drops regularly." },
  { day: "Day 4–7", title: "Significant Improvement", desc: "Most patients achieve functional vision. Return to work is possible for most. Continue wearing protective eyewear at night." },
  { day: "Week 2–4", title: "Stabilization", desc: "Vision continues to sharpen. Minor fluctuations are normal. Avoid swimming, dusty environments, and eye makeup." },
  { day: "Month 1–3", title: "Full Recovery", desc: "Vision fully stabilizes. Final check-up confirms results. Dry eye symptoms typically resolve by this stage." },
];

const risks = [
  { title: "Dry Eyes", severity: "Common", desc: "Temporary dryness lasting 1–3 months. Managed effectively with lubricating eye drops.", percentage: "20–40%" },
  { title: "Glare & Halos", severity: "Common", desc: "Seeing halos around lights at night. Usually resolves within 3–6 months.", percentage: "15–25%" },
  { title: "Under/Over-correction", severity: "Uncommon", desc: "Minor residual prescription may need enhancement procedure.", percentage: "5–10%" },
  { title: "Flap Complications", severity: "Rare", desc: "Only applies to flap-based procedures. Avoided entirely with SMILE/EPI.", percentage: "<1%" },
  { title: "Infection", severity: "Very Rare", desc: "Prevented by strict sterile protocols and post-op antibiotics.", percentage: "<0.1%" },
];

const faqs = PAGE_FAQS["risk-recovery"] || [];

const RiskRecoveryPage = () => (
  <Layout>
    {/* Hero with Lead Form */}
    <section className="hero-gradient section-padding">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">LASIK Risks, Recovery & Side Effects</h1>
            <p className="text-primary-foreground/80 text-lg mb-4">A complete, honest guide to what you can expect before, during, and after LASIK eye surgery.</p>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>✓ 99.5% safety record across all procedures</li>
              <li>✓ Day-by-day recovery timeline</li>
              <li>✓ Transparent risk data with percentages</li>
              <li>✓ Post-operative care instructions</li>
            </ul>
          </motion.div>
          <ConsultationForm variant="hero" />
        </div>
      </div>
    </section>

    {/* Recovery Timeline */}
    <section className="section-padding">
      <div className="container max-w-4xl">
        <SectionHeading title="Day-by-Day Recovery Timeline" />
        <div className="space-y-6">
          {timeline.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex gap-4">
              <div className="w-20 shrink-0">
                <span className="text-sm font-display font-bold text-primary">{item.day}</span>
              </div>
              <div className="flex-1 bg-card border border-border rounded-xl p-5">
                <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Risks */}
    <section className="section-padding bg-surface">
      <div className="container max-w-4xl">
        <SectionHeading title="Risks & Side Effects" subtitle="LASIK is one of the safest elective procedures. Here's what the data shows:" />
        <div className="space-y-4">
          {risks.map((risk, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
              <AlertTriangle className={`w-5 h-5 shrink-0 mt-0.5 ${risk.severity === "Very Rare" || risk.severity === "Rare" ? "text-accent" : "text-yellow-500"}`} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display font-bold text-foreground">{risk.title}</h3>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{risk.severity} ({risk.percentage})</span>
                </div>
                <p className="text-sm text-muted-foreground">{risk.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Post-op care */}
    <section className="section-padding">
      <div className="container max-w-4xl">
        <SectionHeading title="Post-Procedure Care Instructions" />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Eye, title: "Do", items: ["Use prescribed eye drops on schedule", "Wear protective eyewear while sleeping", "Attend all follow-up appointments", "Stay hydrated and rest well"] },
            { icon: Shield, title: "Don't", items: ["Rub or touch your eyes", "Swim or use hot tubs for 2 weeks", "Apply eye makeup for 1 week", "Engage in contact sports for 1 month"] },
          ].map(({ icon: Icon, title, items }) => (
            <div key={title} className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2"><Icon className="w-5 h-5 text-primary" />{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${title === "Do" ? "bg-accent" : "bg-destructive"}`} />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding bg-surface">
      <div className="container max-w-4xl">
        <SectionHeading title="Risk & Recovery FAQs" subtitle="Common questions about LASIK safety and recovery" />
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
        <h2 className="font-display font-bold text-2xl text-primary-foreground mb-3">Still Have Questions About LASIK Safety?</h2>
        <p className="text-primary-foreground/80 mb-6">Speak to our LASIK specialist for a personalized risk assessment — completely free.</p>
        <ConsultationForm variant="compact" />
      </div>
    </section>
  </Layout>
);

export default RiskRecoveryPage;
