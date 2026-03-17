import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import StatsBar from "@/components/StatsBar";
import ConsultationForm from "@/components/ConsultationForm";
import { BRAND, TESTIMONIALS } from "@/data/siteData";
import { motion } from "framer-motion";
import {
  Globe, Shield, Percent, MapPin, Eye, Award,
  Star, Stethoscope, Heart, Zap, Users, Building2,
  BadgeCheck, ArrowRight, CheckCircle2, Crown, Sparkles,
} from "lucide-react";

/* ───── hero bullets ───── */
const heroBullets = [
  "World's largest digital platform for Laser Vision Correction",
  "VIP volume-discount rates at 50+ premium centres PAN India",
  "Same surgeon, same technology — up to 30% less",
];

/* ───── how it works steps ───── */
const howItWorks = [
  { step: "01", icon: Globe, title: "We Aggregate the Best", desc: "We partner with top-tier LASIK centres across every major Indian city — vetting their surgeons, technology, and outcomes before they join the platform." },
  { step: "02", icon: Percent, title: "Volume = Your Savings", desc: "Because we bring thousands of patients every month, centres offer us exclusive institutional pricing — savings we pass directly to you, the patient." },
  { step: "03", icon: Crown, title: "You Get VIP Access", desc: "Same world-class surgeon. Same FDA-approved laser. Same premium centre. You simply pay less — with priority scheduling and dedicated care coordination." },
];

/* ───── value props ───── */
const valueProps = [
  { icon: Zap, title: "6 Laser Technologies", desc: "From ₹8,999 Standard LASIK to ₹75,000 SiLK — every FDA-approved platform under one roof so you compare and choose with confidence." },
  { icon: Eye, title: "Up to 30% Volume Discount", desc: "Our institutional partnerships mean you access the same procedure at significantly lower cost than walk-in pricing — no compromise on quality." },
  { icon: MapPin, title: "50+ Centres, All Major Cities", desc: "Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad — premium LASIK centres near you, wherever you are." },
  { icon: Shield, title: "100% US-FDA Approved", desc: "Every laser platform on our network — WaveLight InnovEyes, SMILE Pro, SiLK, Contoura Vision — carries full US-FDA approval." },
  { icon: Award, title: "Surgeons with 20+ Years", desc: "We only partner with refractive surgeons who have performed 10,000+ procedures. Your eyes deserve nothing less." },
  { icon: Stethoscope, title: "Free 90-Min Diagnostic", desc: "Pentacam, Topography, Aberrometry, Pachymetry — comprehensive pre-op evaluation at zero cost before any commitment." },
  { icon: Heart, title: "Painless, 10-Minute Procedure", desc: "Walk in with glasses, walk out without. Both eyes same day. Return to work within 24–48 hours." },
  { icon: Building2, title: "Transparent, Fixed Pricing", desc: "No hidden charges, no upselling. The price you see is the price you pay — with EMI options from ₹750/month." },
];

/* ───── comparison rows ───── */
const comparisonRows = [
  { feature: "Average LASIK Cost", us: "Up to 30% lower (volume rates)", others: "Full retail / MRP pricing" },
  { feature: "Technology Options", us: "6 FDA-approved platforms", others: "1–2 platforms typically" },
  { feature: "Surgeon Vetting", us: "20+ yrs, 10K+ procedures required", others: "Varies widely" },
  { feature: "Pre-Op Diagnostic", us: "Free 90-minute comprehensive", others: "Often charged ₹500–₹2,000" },
  { feature: "City Coverage", us: "50+ centres, PAN India", others: "Single location" },
  { feature: "Price Transparency", us: "Fixed, published, no hidden fees", others: "Often quoted on visit" },
  { feature: "EMI & Financing", us: "From ₹750/month, 0% options", others: "Limited or unavailable" },
  { feature: "Post-Op Follow-Up", us: "Included — coordinated by us", others: "Varies by clinic" },
];

/* ───── trust numbers ───── */
const trustNumbers = [
  { value: "10,00,000+", label: "Procedures Facilitated", icon: Users },
  { value: "50+", label: "Premium Centres PAN India", icon: Building2 },
  { value: "97%", label: "Patient Satisfaction", icon: Star },
  { value: "30%", label: "Average Savings vs. MRP", icon: Percent },
];

const WhyUsPage = () => (
  <Layout hideUSPStrip>
    {/* ═══════ HERO ═══════ */}
    <section className="hero-gradient section-padding">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-5">
              <Globe className="w-3.5 h-3.5" /> India's #1 LASIK Platform
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl text-primary-foreground mb-5 leading-tight">
              The Smartest Way to Get <span className="text-accent">Laser Vision Correction</span> in India
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed">
              Think of us as your VIP pass to premium LASIK surgery. {BRAND.name} is the world's largest digital aggregator for laser eye surgery — connecting you with top surgeons and FDA-approved technology at exclusive volume-discounted rates across 50+ centres nationwide.
            </p>
            <ul className="space-y-3 mb-8">
              {heroBullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <ConsultationForm variant="hero" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ═══════ TRUST NUMBERS ═══════ */}
    <section className="bg-card border-y border-border">
      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustNumbers.map(({ icon: Icon, value, label }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-display font-black text-3xl md:text-4xl text-foreground">{value}</p>
              <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════ THE PROBLEM WE SOLVE ═══════ */}
    <section className="section-padding">
      <div className="container max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionHeading
            title="Planning LASIK? Here's the Problem."
            subtitle="Choosing the right LASIK procedure shouldn't be this hard."
          />
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { emoji: "😵‍💫", title: "Confusing Options", desc: "6+ procedure types, dozens of clinics, wildly different prices — and no easy way to compare apples to apples." },
              { emoji: "💸", title: "Inflated Pricing", desc: "Individual clinics charge full MRP with no volume incentive. You end up paying retail for a life-changing procedure." },
              { emoji: "🎯", title: "No Accountability", desc: "Walk into any clinic and you're on your own. No coordinated care, no standardized outcomes, no patient advocacy." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 card-elevated">
                <span className="text-3xl mb-3 block">{item.emoji}</span>
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ═══════ HOW IT WORKS ═══════ */}
    <section className="section-padding bg-surface">
      <div className="container max-w-5xl">
        <SectionHeading
          title="How Centre for Lasik Works"
          subtitle="We're not a hospital. We're your strategic advantage."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map(({ step, icon: Icon, title, desc }, i) => (
            <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 card-elevated h-full">
                <span className="font-display font-black text-5xl text-primary/10 absolute top-4 right-6">{step}</span>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 z-10 w-8 h-8 rounded-full bg-primary text-primary-foreground items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* aggregator analogy */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 bg-card border border-primary/20 rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto card-elevated">
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="font-display font-bold text-xl text-foreground mb-3">Think MakeMyTrip for LASIK</h3>
          <p className="text-muted-foreground leading-relaxed">
            Just like a travel aggregator gets you better hotel rates through volume, {BRAND.name} leverages its scale — <strong className="text-foreground">10 lakh+ procedures</strong> — to negotiate institutional pricing from top eye hospitals. You get the same 5-star surgeon and the same FDA-approved laser, but at a price individual patients can never access on their own.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ═══════ WHAT SETS US APART ═══════ */}
    <section className="section-padding">
      <div className="container max-w-6xl">
        <SectionHeading
          title="The Centre for Lasik Advantage"
          subtitle="Every benefit of a premium eye hospital — without the premium price tag."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {valueProps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="bg-card border border-border rounded-xl p-6 card-elevated group hover:border-primary/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2 text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════ COMPARISON TABLE ═══════ */}
    <section className="section-padding bg-surface">
      <div className="container max-w-4xl">
        <SectionHeading
          title="Centre for Lasik vs. Going Direct"
          subtitle="See exactly what changes when you book through India's largest LASIK network."
        />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl overflow-hidden card-elevated">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-display font-bold text-foreground">Feature</th>
                  <th className="text-left p-4 font-display font-bold text-primary">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-4 h-4" /> Centre for Lasik
                    </div>
                  </th>
                  <th className="text-left p-4 font-display font-bold text-muted-foreground">Individual Clinic</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-muted/30" : ""}`}>
                    <td className="p-4 font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 text-foreground">
                      <span className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {row.us}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ═══════ TESTIMONIALS ═══════ */}
    <section className="section-padding">
      <div className="container max-w-5xl">
        <SectionHeading title="Real Patients, Real Savings" subtitle="Hear from patients who chose the smarter way to get LASIK." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 card-elevated">
              <div className="text-3xl text-primary/30 font-serif mb-2">"</div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full cta-gradient flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city} • Age {t.age}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════ CTA WITH FORM ═══════ */}
    <CTABanner
      withForm
      title="Ready to Save on Premium LASIK?"
      subtitle="Fill in your details and our LASIK specialist will call you within 30 minutes — with transparent pricing, zero obligations, and your exclusive volume-discount quote."
    />
  </Layout>
);

export default WhyUsPage;
