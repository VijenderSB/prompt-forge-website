import Layout from "@/components/Layout";
import ConsultationForm from "@/components/ConsultationForm";
import SectionHeading from "@/components/SectionHeading";
import ProcedureNavStrip from "@/components/ProcedureNavStrip";
import { PAGE_FAQS } from "@/data/siteData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Globe, FileCheck, Award, CheckCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const guidelines = [
  {
    org: "US FDA (Food & Drug Administration)",
    country: "United States",
    icon: Shield,
    summary: "The US FDA approved LASIK in 1999 and classifies excimer lasers as Class III medical devices. FDA mandates pre-market approval (PMA) for all laser platforms, rigorous clinical trials with 6–12 month follow-ups, adverse event reporting (MedWatch), and informed consent disclosures. The FDA's LASIK Quality of Life Collaboration Study (2014) confirmed 95.4% patient satisfaction.",
    keyPoints: [
      "All laser devices require PMA with extensive clinical trial data",
      "Minimum age: 18 years; stable prescription for 12 months",
      "Mandatory adverse event reporting through MedWatch system",
      "Post-market surveillance studies required for all approved devices",
      "FDA-approved platforms: WaveLight EX500, VisuMax 800, elita™, MEL 90",
    ],
    link: "https://www.fda.gov/medical-devices/lasik",
  },
  {
    org: "WHO (World Health Organization)",
    country: "Global",
    icon: Globe,
    summary: "The WHO recognizes refractive error as a leading cause of visual impairment affecting 2.7 billion people globally. WHO's Vision 2020 initiative includes refractive correction through spectacles, contact lenses, and refractive surgery as key interventions. WHO recommends that refractive surgery be performed by trained ophthalmologists in accredited facilities with proper equipment.",
    keyPoints: [
      "Refractive error is the #1 cause of correctable visual impairment worldwide",
      "Refractive surgery included in Vision 2020: The Right to Sight initiative",
      "Recommends surgery only by qualified ophthalmologists in accredited facilities",
      "Emphasizes informed consent and patient counseling before surgery",
      "Supports accessibility of refractive correction in developing nations",
    ],
    link: "https://www.who.int/blindness/causes/priority/en/",
  },
  {
    org: "AAO (American Academy of Ophthalmology)",
    country: "United States",
    icon: FileCheck,
    summary: "The AAO publishes Preferred Practice Patterns (PPP) for refractive surgery, updated every 3–5 years. The AAO recommends comprehensive pre-operative evaluation including corneal topography, pachymetry, wavefront analysis, and dry eye assessment. AAO guidelines specify minimum residual stromal bed thickness of 250μm and recommend against surgery in patients with keratoconus or unstable prescriptions.",
    keyPoints: [
      "Preferred Practice Patterns updated every 3–5 years with latest evidence",
      "Minimum residual stromal bed: 250μm after ablation",
      "Contraindicated in keratoconus, autoimmune disorders, uncontrolled diabetes",
      "Pre-op must include topography, pachymetry, wavefront, and dry eye evaluation",
      "Surgeon must have completed fellowship-level training in refractive surgery",
    ],
    link: "https://www.aao.org/preferred-practice-pattern/refractive-management-correction-of-refractive-errors",
  },
  {
    org: "ESCRS (European Society of Cataract and Refractive Surgeons)",
    country: "Europe",
    icon: Award,
    summary: "ESCRS provides evidence-based clinical guidelines and conducts the largest annual refractive surgery survey in Europe. ESCRS guidelines emphasize topography-guided treatments (like Contoura Vision) for superior visual outcomes, validate lenticule extraction (SMILE/SiLK) as equivalent to LASIK for myopia, and recommend femtosecond laser flap creation over microkeratome for improved safety.",
    keyPoints: [
      "Endorses topography-guided ablation for best visual quality outcomes",
      "Validates SMILE/lenticule extraction as equivalent to LASIK for myopia correction",
      "Recommends femtosecond laser flap creation over mechanical microkeratome",
      "Annual survey tracks outcomes from 500,000+ procedures across Europe",
      "Guidelines available for surgeon certification and facility accreditation",
    ],
    link: "https://www.escrs.org/",
  },
  {
    org: "AIOS (All India Ophthalmological Society)",
    country: "India",
    icon: Shield,
    summary: "AIOS, with 20,000+ members, sets national standards for refractive surgery in India. AIOS guidelines align with international standards while addressing India-specific considerations like higher astigmatism prevalence, thinner corneas in Indian populations, and tropical climate considerations for post-op care. AIOS recommends Contoura/topography-guided treatments for Indian patients with high astigmatism.",
    keyPoints: [
      "Guidelines address Indian-specific corneal parameters (thinner average corneas)",
      "Recommends topography-guided treatments for higher astigmatism prevalence",
      "Post-op protocols account for tropical climate and dust exposure",
      "Mandatory NABH accreditation for centres performing refractive surgery",
      "Annual National Refractive Surgery Survey for outcome benchmarking",
    ],
    link: "https://www.aios.org/",
  },
  {
    org: "NICE (National Institute for Health and Care Excellence)",
    country: "United Kingdom",
    icon: FileCheck,
    summary: "NICE evaluates refractive surgery technologies for the UK's NHS. NICE Interventional Procedures Guidance (IPG) covers LASIK (IPG164), SMILE (IPG616), and surface ablation (IPG164). NICE confirms that LASIK is safe and efficacious for myopia, hyperopia, and astigmatism, and has classified SMILE as a safe alternative to LASIK for myopia.",
    keyPoints: [
      "IPG164: LASIK is safe and efficacious — normal arrangements for consent apply",
      "IPG616: SMILE is safe for myopia — no special safety concerns",
      "Recommends audit of patient outcomes by all refractive surgery providers",
      "Informed consent must cover alternatives, risks, and realistic expectations",
      "Supports shared decision-making between surgeon and patient",
    ],
    link: "https://www.nice.org.uk/guidance/ipg164",
  },
];

const safetyStats = [
  { stat: "99.5%", label: "Patient Satisfaction Rate (FDA PROWL Study)" },
  { stat: "40M+", label: "LASIK Procedures Performed Globally" },
  { stat: "25+ Years", label: "Track Record Since FDA Approval (1999)" },
  { stat: "<0.1%", label: "Serious Complication Rate" },
];

const InternationalGuidelinesPage = () => {
  const faqs = PAGE_FAQS["international-guidelines"] || [];

  return (
    <Layout>
      <SEO
        title="LASIK Safety Standards — FDA, CE, NICE & AAO Guidelines"
        description="International compliance benchmarks: US FDA, EU CE Mark, UK NICE, AAO. How Centre for Lasik meets each global LASIK safety standard."
        path="/international-guidelines"
      />
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-surface to-background">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">International Standards</span>
              <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                LASIK Safety: Global Guidelines & Regulatory Standards
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Every LASIK procedure at Centre for Lasik follows guidelines set by the world's top regulatory and medical bodies — FDA, WHO, AAO, ESCRS, AIOS, and NICE. Here's what these organizations say about the safety, efficacy, and standards of modern laser eye surgery.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {safetyStats.map((s) => (
                  <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
                    <p className="font-display font-bold text-2xl text-primary">{s.stat}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <ConsultationForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Detail */}
      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          <SectionHeading title="What Global Authorities Say About LASIK" subtitle="Evidence-based guidelines from six leading regulatory and medical organizations worldwide" />
          <div className="space-y-8">
            {guidelines.map((g, i) => (
              <motion.div
                key={g.org}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <g.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">{g.org}</h3>
                    <span className="text-xs text-muted-foreground">{g.country}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{g.summary}</p>
                <div className="space-y-2 mb-4">
                  {g.keyPoints.map((pt) => (
                    <div key={pt} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{pt}</span>
                    </div>
                  ))}
                </div>
                <a href={g.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline">
                  Official Source <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Centre for Lasik Compliance */}
      <section className="section-padding bg-surface">
        <div className="container max-w-4xl">
          <SectionHeading title="How Centre for Lasik Meets Global Standards" subtitle="Our commitment to exceeding international safety benchmarks" />
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "FDA-Approved Platforms Only", desc: "We use only FDA-approved laser systems: WaveLight EX500/EX800, Carl Zeiss VisuMax 800, and J&J elita™ — no off-brand devices." },
              { title: "AAO Pre-Op Protocol", desc: "Our free 90-minute diagnostic follows AAO Preferred Practice Patterns: Pentacam, topography, pachymetry, wavefront, dry eye assessment." },
              { title: "ESCRS Outcome Tracking", desc: "Every patient's outcomes are tracked and benchmarked against ESCRS annual survey data for quality assurance." },
              { title: "AIOS-Compliant Facility", desc: "All centres meet AIOS and NABH accreditation standards with climate-controlled surgical suites and laminar airflow." },
              { title: "WHO-Aligned Access", desc: "Starting at ₹8,999/eye with EMI from ₹750/month — making vision correction accessible per WHO Vision 2020 goals." },
              { title: "NICE Informed Consent", desc: "We follow NICE shared decision-making guidelines with comprehensive written consent, realistic expectations, and alternative options." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h4 className="font-display font-bold text-sm text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container max-w-3xl">
            <SectionHeading title="International LASIK Guidelines — FAQ" subtitle="Common questions about LASIK safety standards and regulations" />
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5">
                  <AccordionTrigger className="text-left text-sm font-medium text-foreground">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <ProcedureNavStrip />

      {/* Bottom CTA */}
      <section className="section-padding bg-primary">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-3">Your Eyes Deserve Global-Standard Care</h2>
          <p className="text-primary-foreground/80 mb-6">Book a free consultation and experience LASIK that meets FDA, WHO, and AAO guidelines.</p>
          <ConsultationForm variant="compact" />
        </div>
      </section>
    </Layout>
  );
};

export default InternationalGuidelinesPage;
