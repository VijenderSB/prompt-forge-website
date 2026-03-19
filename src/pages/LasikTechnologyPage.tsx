import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ConsultationForm from "@/components/ConsultationForm";
import SectionHeading from "@/components/SectionHeading";
import ProcedureNavStrip from "@/components/ProcedureNavStrip";
import { PAGE_FAQS, PROCEDURES, formatPrice } from "@/data/siteData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowRight, Zap, Eye, Shield, Timer, Layers, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const techGenerations = [
  {
    era: "1st Generation (1990s)",
    name: "PRK / Surface Ablation",
    description: "Photorefractive Keratectomy was the first laser vision correction. The epithelium is removed and an excimer laser reshapes the exposed corneal surface. No flap is created. Recovery is slower (5–7 days) but the cornea retains full biomechanical strength since no flap is cut.",
    pros: ["No flap — strongest cornea post-surgery", "Suitable for thin corneas", "Lower cost"],
    cons: ["Longer, uncomfortable recovery (5–7 days)", "Higher risk of corneal haze", "Vision fluctuates for weeks"],
    available: "EPI LASIK (Advanced PRK)",
    slug: "epi-lasik",
    status: "available",
  },
  {
    era: "2nd Generation (2000s)",
    name: "Microkeratome LASIK",
    description: "Traditional LASIK uses a mechanical microkeratome blade to create a thin corneal flap, then an excimer laser reshapes the underlying stroma. The flap is repositioned and heals naturally. This was a breakthrough — offering near-painless surgery with next-day vision.",
    pros: ["Fast visual recovery (24 hours)", "Painless procedure", "Proven 25+ year track record"],
    cons: ["Mechanical blade creates variable flap thickness", "Flap-related complications possible", "Higher dry eye risk"],
    available: "Standard LASIK",
    slug: "standard-lasik",
    status: "available",
  },
  {
    era: "3rd Generation (2010s)",
    name: "Femto-LASIK (All-Laser LASIK)",
    description: "Femtosecond lasers replaced mechanical blades for flap creation — enabling precise, uniform, thinner flaps (90–110μm vs 130–160μm with blades). Combined with topography-guided excimer ablation (Contoura Vision), this generation delivers customized corneal reshaping based on 22,000+ elevation data points.",
    pros: ["Blade-free flap — more precise and consistent", "Topography-guided = personalized treatment", "Superior night vision outcomes"],
    cons: ["Still creates a flap (biomechanical compromise)", "Two laser systems required", "Higher cost than standard LASIK"],
    available: "HD Contoura Vision / Femto + Contoura",
    slug: "contoura-vision",
    status: "available",
  },
  {
    era: "4th Generation (2016–Present)",
    name: "SMILE (Small Incision Lenticule Extraction)",
    description: "SMILE eliminates the flap entirely. A femtosecond laser creates a thin lenticule (disc of tissue) inside the intact cornea, which is extracted through a 2–4mm micro-incision. This preserves corneal biomechanics, reduces dry eye, and enables faster sports/activity resumption. SMILE Pro on VisuMax 800 achieves 7-second laser time.",
    pros: ["Flapless — preserves corneal strength", "Minimal dry eye risk", "2mm incision — fastest recovery for active lifestyles"],
    cons: ["Cannot treat hyperopia (farsightedness)", "No topography guidance in current SMILE", "Enhancement procedures more complex"],
    available: "SMILE Pro",
    slug: "smile-pro",
    status: "available",
  },
  {
    era: "5th Generation (2020s)",
    name: "Wavefront-Optimized Femto-LASIK (Advanced Flap-Based)",
    description: "Building on topography-guided LASIK, 5th generation platforms introduced wavefront-optimized ablation profiles with AI-driven planning. These systems compensate for the cornea's natural asphericity, reducing spherical aberration and improving night vision quality over standard topography-guided treatments.",
    pros: ["AI-optimized ablation profiles", "Better night vision than standard topo-guided", "Proven flap-based workflow"],
    cons: ["Still creates a corneal flap", "Two-laser system required", "Not flapless"],
    available: "Femto + Contoura (Wavefront-Optimized)",
    slug: "contoura-vision",
    status: "available",
  },
  {
    era: "6th Generation (2024–Present)",
    name: "Advanced Lenticule Extraction (SMILE Pro / SiLK)",
    description: "Flapless lenticule extraction eliminates the corneal flap entirely. A femtosecond laser creates a thin disc of tissue inside the intact cornea, extracted through a 2mm micro-incision. SMILE Pro (Carl Zeiss VisuMax 800) achieves 7-second laser time, while SiLK (J&J elita™) delivers sub-2mm incisions with ultra-smooth stromal beds for the best night vision outcomes.",
    pros: ["Flapless — preserves corneal strength", "Minimal dry eye risk", "Sub-2mm incision — fastest recovery", "500 Hz speed with optimized pattern"],
    cons: ["Cannot treat hyperopia yet", "No topography guidance in current lenticule tech", "Higher cost (₹65,000–₹75,000/eye)"],
    available: "SMILE Pro / SiLK",
    slug: "smile-pro",
    status: "available",
  },
  {
    era: "7th Generation (2025–Present)",
    name: "AI-Guided Refractive Suite (WaveLight Plus InnovEyes)",
    description: "WaveLight Plus InnovEyes by Alcon represents the pinnacle of flap-based refractive surgery. Its proprietary PerfectPulse Technology® tracks eye position 1,050 times per second with 6D eye tracking, ensuring every laser pulse lands with sub-micron accuracy at 400 Hz. The InnovEyes Sightmap integrates AI-driven corneal analysis with topography-guided + wavefront-optimized ablation — delivering the most personalized treatment profile available in 2025. Clinical data shows 48% of patients achieve 20/12.5 or better vision.",
    pros: ["PerfectPulse Technology® — 1,050 Hz eye tracking", "AI-driven personalized ablation profiles", "48% patients achieve ≥20/12.5 super vision", "Topography + wavefront combined guidance"],
    cons: ["Flap-based procedure (not flapless)", "Premium pricing (₹49,000/eye)", "Requires two-laser system (FS200 + EX800)"],
    available: "WaveLight Plus InnovEyes",
    slug: "innovEyes",
    status: "available",
  },
];

const laserPlatforms = [
  {
    name: "Alcon WaveLight EX500",
    type: "Excimer Laser",
    speed: "500 Hz",
    tracking: "1,050 Hz ActiveTrack",
    usedIn: ["Standard LASIK", "HD Contoura Vision"],
    slugs: ["standard-lasik", "contoura-vision"],
    features: ["PerfectPulse® technology", "Gaussian beam profile", "Topography-guided Contoura mode", "Fastest excimer in market"],
  },
  {
    name: "Alcon WaveLight EX800 (InnovEyes)",
    type: "Excimer Laser",
    speed: "400 Hz (optimized)",
    tracking: "1,050 Hz ActiveTrack 3D",
    usedIn: ["WaveLight Plus InnovEyes"],
    slugs: ["innovEyes"],
    features: ["AI-optimized ablation profiles", "Wavefront-optimized + topography-guided", "Neuro-tracker eye tracking", "SmartSurface corneal compensation"],
  },
  {
    name: "Alcon WaveLight FS200",
    type: "Femtosecond Laser",
    speed: "200 kHz",
    tracking: "Integrated",
    usedIn: ["Femto + Contoura"],
    slugs: ["femto-contoura"],
    features: ["Ultra-thin flaps (90μm)", "Inverted side-cut for secure flap", "Customizable hinge position", "6-second flap creation"],
  },
  {
    name: "Carl Zeiss VisuMax 800",
    type: "Femtosecond Laser",
    speed: "500 Hz",
    tracking: "CentraLign™",
    usedIn: ["SMILE Pro"],
    slugs: ["smile-pro"],
    features: ["7-second laser time", "2mm micro-incision", "Lenticule extraction technology", "Curved contact glass for comfort"],
  },
  {
    name: "J&J Vision elita™",
    type: "Femtosecond Laser",
    speed: "500 Hz",
    tracking: "Integrated 3D",
    usedIn: ["SiLK"],
    slugs: ["silk"],
    features: ["Optimized lenticule pattern", "Sub-2mm incision", "Ultra-smooth stromal bed", "Next-gen lenticule extraction"],
  },
];

const LasikTechnologyPage = () => {
  const faqs = PAGE_FAQS["lasik-technology"] || [];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-surface to-background">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">Technology Guide</span>
              <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                Every LASIK Technology Available in 2026 — Explained
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                From 1990s PRK to 2025's AI-guided InnovEyes — a thorough guide to every laser vision correction technology, how they work, which platforms power them, and how to choose the right one for your eyes and budget.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Layers, label: "7 Generations Covered" },
                  { icon: Cpu, label: "5 Laser Platforms Compared" },
                  { icon: Eye, label: "6 Procedures Available" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2">
                    <s.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{s.label}</span>
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

      {/* Technology Timeline */}
      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          <SectionHeading title="The Evolution of LASIK Technology" subtitle="5 generations of laser vision correction — from PRK to next-gen lenticule extraction" />
          <div className="space-y-6">
            {techGenerations.map((gen, i) => (
              <motion.div
                key={gen.era}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl p-6 md:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{gen.era}</span>
                  <h3 className="font-display font-bold text-lg text-foreground">{gen.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{gen.description}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Advantages</p>
                    <div className="space-y-1.5">
                      {gen.pros.map((p) => (
                        <div key={p} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Limitations</p>
                    <div className="space-y-1.5">
                      {gen.cons.map((c) => (
                        <div key={c} className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-destructive/60 shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-surface rounded-xl p-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Available at Centre for Lasik as</p>
                    <p className="font-display font-bold text-sm text-foreground">{gen.available}</p>
                  </div>
                  <Button asChild size="sm" className="cta-gradient border-0 text-primary-foreground">
                    <Link to={`/procedures/${gen.slug}`}>View Details <ArrowRight className="w-3.5 h-3.5 ml-1" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Laser Platforms */}
      <section className="section-padding bg-surface">
        <div className="container max-w-5xl">
          <SectionHeading title="Laser Platforms We Use" subtitle="The actual hardware behind each procedure — every platform is FDA-approved" />
          <div className="space-y-4">
            {laserPlatforms.map((p) => (
              <div key={p.name} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-foreground">{p.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{p.type}</span>
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">Speed: {p.speed}</span>
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">Tracking: {p.tracking}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.slugs.map((slug, idx) => (
                      <Button key={slug} asChild variant="outline" size="sm">
                        <Link to={`/procedures/${slug}`}>{p.usedIn[idx]} →</Link>
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 bg-surface rounded-lg p-2.5">
                      <Zap className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-background">
        <div className="container max-w-5xl">
          <SectionHeading title="Technology Comparison at a Glance" subtitle="Side-by-side comparison of all procedures available at Centre for Lasik" />
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-surface">
                  <TableHead className="font-display font-bold text-foreground">Feature</TableHead>
                  {PROCEDURES.map((p) => (
                    <TableHead key={p.slug} className="font-display font-bold text-foreground text-center text-xs">
                      <Link to={`/procedures/${p.slug}`} className="hover:text-primary transition-colors">{p.name}</Link>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { label: "Price/Eye", key: "price", render: (p: typeof PROCEDURES[0]) => formatPrice(p.price) },
                  { label: "Technology", key: "technology", render: (p: typeof PROCEDURES[0]) => p.technology },
                  { label: "Technique", key: "techType", render: (p: typeof PROCEDURES[0]) => p.techType === "flap" ? "Flap-based" : "Lenticule" },
                  { label: "Blade-Free", key: "bladeFree", render: (p: typeof PROCEDURES[0]) => p.bladeFree ? "✅" : "❌" },
                  { label: "Flapless", key: "flapless", render: (p: typeof PROCEDURES[0]) => p.flapless ? "✅" : "❌" },
                  { label: "Topo-Guided", key: "topoGuided", render: (p: typeof PROCEDURES[0]) => p.topoGuided ? "✅" : "❌" },
                  { label: "Incision", key: "incision", render: (p: typeof PROCEDURES[0]) => p.incision },
                  { label: "Laser Speed", key: "laserSpeed", render: (p: typeof PROCEDURES[0]) => p.laserSpeed },
                  { label: "Dry Eye Risk", key: "dryEyeRisk", render: (p: typeof PROCEDURES[0]) => p.dryEyeRisk },
                  { label: "Thin Cornea Safe", key: "thinCorneaSafe", render: (p: typeof PROCEDURES[0]) => p.thinCorneaSafe ? "✅" : "❌" },
                  { label: "Recovery", key: "recovery", render: (p: typeof PROCEDURES[0]) => p.recovery },
                ].map((row) => (
                  <TableRow key={row.key}>
                    <TableCell className="font-medium text-foreground text-xs">{row.label}</TableCell>
                    {PROCEDURES.map((p) => (
                      <TableCell key={p.slug} className="text-center text-xs text-muted-foreground">{row.render(p)}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="section-padding bg-primary">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-3">Not Sure Which Technology Suits You?</h2>
          <p className="text-primary-foreground/80 mb-6">Our free 90-minute diagnostic maps your cornea and recommends the best-fit procedure.</p>
          <ConsultationForm variant="compact" />
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container max-w-3xl">
            <SectionHeading title="LASIK Technology — FAQ" subtitle="Common questions about laser platforms, procedures, and choosing the right technology" />
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
      <section className="section-padding bg-surface">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">Ready to Choose Your LASIK Technology?</h2>
          <p className="text-muted-foreground mb-6">Book a free consultation — our specialists will recommend the perfect technology for your eyes.</p>
          <ConsultationForm variant="compact" />
        </div>
      </section>
    </Layout>
  );
};

export default LasikTechnologyPage;
