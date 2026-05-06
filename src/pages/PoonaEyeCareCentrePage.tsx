// @ts-nocheck
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, MapPin, Phone, Star, Clock, ChevronRight, Check, ShieldCheck, Award, Quote, GraduationCap, Cpu } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ConsultationForm from "@/components/ConsultationForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BRAND } from "@/data/siteData";
import { CENTRE_BY_SLUG, type CentreData } from "@/data/centresData";
import NotFound from "./NotFound";

const POONA_SLUGS = new Set([
  "centre-for-lasik-poona-eye-care-karve-road-pune",
]);

export const isPoonaEyeCareSlug = (slug: string) => POONA_SLUGS.has(slug);

const procedures = [
  {
    slug: "lasik",
    name: "LASIK",
    badge: "Value",
    tagline: "Trusted bladeless LASIK on the Carl Zeiss MEL 90 excimer platform.",
    price: 19999,
    recovery: "1–2 days",
    duration: "~10 min/eye",
    features: [
      "Carl Zeiss MEL 90 — German engineering, 500 Hz ablation",
      "Femtosecond flap creation, fully bladeless",
      "Predictable visual outcomes for routine prescriptions",
    ],
  },
  {
    slug: "customised-lasik",
    name: "Customised LASIK",
    badge: "Popular",
    tagline: "Wavefront-optimised, topography-guided ablation for sharper night vision.",
    price: 24999,
    recovery: "1–2 days",
    duration: "~12 min/eye",
    features: [
      "Personalised ablation profile on Carl Zeiss MEL 90",
      "Reduces higher-order aberrations & glare/halos",
      "Recommended for high astigmatism or active lifestyles",
    ],
  },
  {
    slug: "smile-pro",
    name: "SMILE Pro",
    badge: "Latest",
    tagline: "Flapless, minimally-invasive refractive surgery on the Zeiss VisuMax 800.",
    price: 74999,
    recovery: "Same day",
    duration: "~9 sec/eye laser time",
    features: [
      "Zeiss VisuMax 800 — fastest SMILE laser globally",
      "Single 2–4 mm incision, no flap, biomechanically stronger cornea",
      "Ideal for athletes, defence aspirants & dry-eye-prone patients",
    ],
  },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Carl Zeiss MEL 90 + VisuMax 800" },
  { icon: Award, label: "30+ years refractive expertise" },
  { icon: Star, label: "Trusted across Pune since 1990s" },
  { icon: Check, label: "Free 90-min diagnostic" },
];

const surgeon = {
  name: "Dr. Nitin Kolte",
  title: "Director & Chief Refractive Surgeon",
  credentials: "MBBS, MS (Ophthalmology), Fellowship in Phaco-Refractive Surgery",
  experience: "30+ years",
  surgeries: "40,000+ refractive & cataract procedures",
  bio: "Dr. Nitin Kolte is the founder-director and chief refractive surgeon at Poona Eye Care, Karve Road — one of Pune's most respected names in laser vision correction and advanced cataract surgery. With more than three decades of clinical experience and over forty thousand surgeries to his credit, Dr. Kolte is recognised across Maharashtra for his conservative, data-driven approach: every patient undergoes an exhaustive Pentacam, topography and pachymetry workup, and only those with the right corneal biomechanics are cleared for surgery. He personally performs every LASIK and SMILE Pro procedure on the centre's Carl Zeiss MEL 90 excimer laser and Zeiss VisuMax 800 femtosecond platform — the same technology trusted by leading refractive centres in Germany, Switzerland and Japan. Dr. Kolte's commitment to honest counselling — including telling patients when LASIK is not the right answer — has built Poona Eye Care a multi-generational patient base across Pune, Pimpri-Chinchwad and western Maharashtra.",
};

const testimonials = [
  { name: "Aniruddha Joshi", age: 26, procedure: "SMILE Pro", quote: "Dr. Kolte's team explained every detail of the VisuMax 800 procedure. Surgery was over in minutes, no flap, no stitches. Back to running marathons within 4 days. Best decision of my life." },
  { name: "Shruti Deshpande", age: 29, procedure: "Customised LASIK", quote: "I had high astigmatism and night-driving was a nightmare. The customised LASIK on Zeiss MEL 90 changed everything — sharper than glasses, zero halos. Poona Eye Care's diagnostics are next level." },
  { name: "Rohan Patil", age: 24, procedure: "LASIK", quote: "Affordable, transparent and incredibly professional. Dr. Kolte personally walked me through the Pentacam scan and recommended standard LASIK. 6/6 vision in 24 hours." },
  { name: "Priya Kulkarni", age: 32, procedure: "SMILE Pro", quote: "I researched SMILE Pro across Pune for months. Poona Eye Care had the latest VisuMax 800 and Dr. Kolte's experience was unmatched. The flapless recovery is genuinely as good as advertised." },
  { name: "Kunal Bhosale", age: 28, procedure: "Customised LASIK", quote: "Defence aspirant — needed perfect vision quickly. Dr. Kolte cleared me only after a thorough check, performed customised LASIK, and I cleared my medical the next month. Forever grateful." },
  { name: "Meghana Sane", age: 35, procedure: "LASIK", quote: "After 20 years of glasses, I finally took the step. The Karve Road centre is spotless, the team is warm, and Dr. Kolte's confidence put me at ease. Both eyes done, perfect vision." },
];

const faqs = (c: CentreData) => [
  { q: `Which LASIK technologies are available at Poona Eye Care, Karve Road?`, a: `Poona Eye Care operates on the Carl Zeiss MEL 90 excimer laser platform (used for all LASIK and Customised LASIK procedures) and the Zeiss VisuMax 800 femtosecond laser (used for SMILE Pro). These are among the most advanced refractive laser systems available globally.` },
  { q: `How much does LASIK cost at Poona Eye Care?`, a: `Pricing through Centre for Lasik at Poona Eye Care, Karve Road: Standard LASIK ₹19,999/eye, Customised LASIK ₹24,999/eye, and SMILE Pro ₹74,999/eye. 0% EMI options are available up to 24 months.` },
  { q: `Who will perform my LASIK or SMILE Pro procedure?`, a: `Every refractive surgery is personally performed by Dr. Nitin Kolte, Director & Chief Refractive Surgeon, with 30+ years of experience and over 40,000 procedures.` },
  { q: `What is the difference between LASIK and Customised LASIK?`, a: `Standard LASIK uses a wavefront-optimised ablation profile suitable for routine prescriptions. Customised LASIK adds patient-specific topography or wavefront-guided ablation on the Zeiss MEL 90, reducing higher-order aberrations and improving night vision — recommended for high astigmatism, large pupils or active lifestyles.` },
  { q: `Why choose SMILE Pro over LASIK?`, a: `SMILE Pro on the Zeiss VisuMax 800 is flapless — only a 2–4 mm incision is made instead of a corneal flap. This preserves more of the cornea's biomechanical strength, dramatically reduces dry-eye risk, and is preferred for athletes, defence personnel and patients with active or impact-heavy lifestyles.` },
  { q: `Is the pre-LASIK consultation really free?`, a: `Yes. The complete 90-minute pre-LASIK workup — Pentacam tomography, corneal topography, pachymetry, dry-eye assessment and dilated retinal evaluation — is fully complimentary with no obligation to proceed.` },
  { q: `What is the recovery time?`, a: `LASIK and Customised LASIK have a 1–2 day visual recovery; most patients drive and return to work within 24–48 hours. SMILE Pro recovery is similar, with many patients seeing functionally well the same evening.` },
  { q: `Are post-operative follow-ups included?`, a: `Yes. Day 1, Week 1, Month 1 and Month 3 follow-ups with Dr. Kolte are included in the package, along with all post-op eye drops, protective shields and dark glasses.` },
  { q: `What other eye-care services are offered?`, a: `Beyond LASIK and SMILE Pro, Poona Eye Care offers phacoemulsification cataract surgery with premium IOLs, glaucoma management, retina services, cornea care, ICL for high prescriptions, and routine comprehensive eye exams.` },
  { q: `How do I book an appointment?`, a: `Call ${BRAND.phoneDisplay} or fill the consultation form on this page. Our care team will confirm your slot at Poona Eye Care, Karve Road, Pune within 30 minutes.` },
];

const PoonaEyeCareCentrePage = () => {
  const { slug = "" } = useParams();
  const centre = CENTRE_BY_SLUG[slug];

  useEffect(() => {
    if (!centre) return;
    document.title = `Poona Eye Care, Karve Road, Pune | LASIK & SMILE Pro by Dr. Nitin Kolte — Centre for Lasik`;
    const desc = `Book LASIK at Poona Eye Care, Karve Road, Pune. Carl Zeiss MEL 90 LASIK & VisuMax 800 SMILE Pro by Dr. Nitin Kolte. Free 90-min consultation.`;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = desc;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = window.location.origin + window.location.pathname;
  }, [centre]);

  if (!centre) return <NotFound />;
  const c = centre;

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient section-padding">
        <div className="container max-w-6xl">
          <nav className="text-primary-foreground/60 text-sm mb-4">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <ChevronRight className="w-3 h-3 inline mx-1" />
            <Link to="/centres" className="hover:text-primary-foreground">Centres</Link>
            <ChevronRight className="w-3 h-3 inline mx-1" />
            <span className="text-primary-foreground">Poona Eye Care, Karve Road</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-card/15 border border-card/20 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground mb-4">
                <Building2 className="w-3 h-3 inline mr-1" /> Partner LASIK Centre
              </span>
              <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-3">
                LASIK & SMILE Pro at Poona Eye Care, Karve Road, Pune
              </h1>
              <p className="text-primary-foreground/80 mb-6">
                Carl Zeiss MEL 90 excimer laser for all LASIK procedures and Zeiss VisuMax 800 for SMILE Pro — performed by <strong className="text-primary-foreground">Dr. Nitin Kolte</strong>, Director & Chief Refractive Surgeon (30+ years, 40,000+ procedures).
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6 max-w-md">
                {trustBadges.map(b => (
                  <div key={b.label} className="flex items-start gap-2 text-primary-foreground/90 text-xs">
                    <b.icon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold">
                  <a href="#book">Book Free Consultation</a>
                </Button>
                <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-primary-foreground font-medium px-4 h-11 rounded-md border border-primary-foreground/30">
                  <Phone className="w-4 h-4" /> {BRAND.phoneDisplay}
                </a>
              </div>
            </motion.div>
            <div id="book"><ConsultationForm variant="hero" /></div>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <SectionHeading title="Centre at a Glance" subtitle="Everything you need to know before visiting Poona Eye Care, Karve Road." />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 card-elevated">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Address</h3>
              <p className="text-sm text-muted-foreground">Poona Eye Care, Karve Road, Pune, Maharashtra</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 card-elevated">
              <Phone className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Booking Helpline</h3>
              <p className="text-sm text-muted-foreground">{BRAND.phoneDisplay}<br/>Mon–Sat, 9 AM – 7 PM</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 card-elevated">
              <Clock className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Diagnostic Slot</h3>
              <p className="text-sm text-muted-foreground">90-min comprehensive workup<br/>Free, no obligation</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-surface">
        <div className="container max-w-4xl">
          <SectionHeading title="About Poona Eye Care, Karve Road" subtitle="One of Pune's most trusted names in laser vision correction since the 1990s." />
          <div className="space-y-5 text-foreground/85 leading-relaxed text-[15px]">
            <p>
              Poona Eye Care, Karve Road is a long-established refractive and anterior-segment super-speciality centre in the heart of Pune. Founded by <strong>Dr. Nitin Kolte</strong>, the centre has built its reputation across three decades on a single principle — uncompromising surgical precision backed by exhaustive pre-operative screening on the most advanced German-engineered platforms available.
            </p>
            <p>
              The centre operates exclusively on Zeiss refractive technology — the <strong>Carl Zeiss MEL 90</strong> excimer laser is used for all LASIK and Customised LASIK procedures (500 Hz ablation, wavefront-optimised and topography-guided profiles), and the <strong>Zeiss VisuMax 800</strong> femtosecond laser powers SMILE Pro — the world's fastest flapless refractive procedure with a sub-10-second laser time per eye. This is the same technology trusted by leading refractive centres across Germany, Switzerland and Japan.
            </p>
            <p>
              Beyond laser vision correction, Poona Eye Care offers comprehensive ophthalmology services — phacoemulsification cataract surgery with premium monofocal, toric and trifocal IOLs; glaucoma diagnostics and management; medical and surgical retina; cornea, keratoconus and ICL services; and routine comprehensive eye exams. All procedures are performed inside ISO-class modular operating theatres with strict NABH-aligned sterile protocols.
            </p>
            <p>
              Booking through Centre for Lasik unlocks transparent institutional pricing, 0% EMI options up to 24 months, a free 90-minute diagnostic, and a structured follow-up plan with Dr. Kolte — same surgeon, same OT, same Zeiss technology, every time.
            </p>
          </div>
        </div>
      </section>

      {/* Surgeon */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <SectionHeading title="Meet Your Surgeon" subtitle="Every refractive surgery at this centre is personally performed by Dr. Nitin Kolte." />
          <div className="bg-card border border-border rounded-2xl p-6 md:p-10 card-elevated">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/10 border-4 border-primary/20 shadow-lg shrink-0 flex items-center justify-center">
                <GraduationCap className="w-16 h-16 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-foreground">{surgeon.name}</h3>
                <p className="text-primary font-semibold text-sm mb-1">{surgeon.title}</p>
                <p className="text-muted-foreground text-sm mb-4 inline-flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> {surgeon.credentials}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-5 max-w-md">
                  <div className="bg-surface rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Experience</p>
                    <p className="font-display font-bold text-foreground">{surgeon.experience}</p>
                  </div>
                  <div className="bg-surface rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Procedures</p>
                    <p className="font-display font-bold text-foreground">{surgeon.surgeries}</p>
                  </div>
                </div>
                <p className="text-foreground/85 leading-relaxed text-[15px]">{surgeon.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Highlight */}
      <section className="section-padding bg-surface">
        <div className="container max-w-5xl">
          <SectionHeading title="The Technology Behind Your Surgery" subtitle="Two flagship Zeiss platforms — engineered in Germany, trusted globally." />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 card-elevated">
              <Cpu className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground text-lg mb-2">Carl Zeiss MEL 90 Excimer Laser</h3>
              <p className="text-sm text-muted-foreground mb-3">Used for all LASIK & Customised LASIK procedures.</p>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-start gap-2 text-foreground/80"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 500 Hz ablation, sub-millisecond eye-tracking</li>
                <li className="flex items-start gap-2 text-foreground/80"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Wavefront-optimised & topography-guided profiles</li>
                <li className="flex items-start gap-2 text-foreground/80"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Tissue-saving algorithm preserves corneal thickness</li>
                <li className="flex items-start gap-2 text-foreground/80"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> CE-marked & FDA-aligned, German engineering</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 card-elevated">
              <Cpu className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground text-lg mb-2">Zeiss VisuMax 800 Femtosecond Laser</h3>
              <p className="text-sm text-muted-foreground mb-3">Used for SMILE Pro — flapless refractive surgery.</p>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-start gap-2 text-foreground/80"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Fastest SMILE laser globally — under 10 seconds/eye</li>
                <li className="flex items-start gap-2 text-foreground/80"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Centration assist for precise lenticule placement</li>
                <li className="flex items-start gap-2 text-foreground/80"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Single 2–4 mm incision, no flap</li>
                <li className="flex items-start gap-2 text-foreground/80"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Preserves corneal biomechanics, ideal for active lifestyles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures & Pricing */}
      <section className="section-padding">
        <div className="container max-w-6xl">
          <SectionHeading title="Procedures & Transparent Pricing" subtitle="Per-eye institutional pricing through Centre for Lasik. 0% EMI up to 24 months." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {procedures.map((p) => (
              <div key={p.slug} className="bg-card border border-border rounded-xl p-6 card-elevated flex flex-col">
                <span className="inline-block self-start bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-2 py-1 rounded mb-3">{p.badge}</span>
                <h3 className="font-display font-bold text-foreground text-lg mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.tagline}</p>
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground">Starting at</p>
                  <p className="font-display font-black text-2xl text-primary">₹{p.price.toLocaleString("en-IN")}<span className="text-sm text-muted-foreground font-normal">/eye</span></p>
                  <p className="text-xs text-muted-foreground">Recovery: {p.recovery} · {p.duration}</p>
                </div>
                <ul className="space-y-1.5 mb-4 text-sm">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-foreground/80">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            All pricing inclusive of pre-op diagnostics, surgery, medications and structured post-op follow-ups.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface">
        <div className="container max-w-6xl">
          <SectionHeading title="Patient Testimonials" subtitle="Real stories from patients of Dr. Nitin Kolte at Poona Eye Care." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 card-elevated flex flex-col">
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <p className="text-foreground/85 text-sm leading-relaxed mb-4 flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="font-display font-bold text-foreground">{t.name}, {t.age}</p>
                <p className="text-xs text-muted-foreground">{t.procedure}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs(c).map((f, i) => (
              <AccordionItem key={i} value={`q${i}`} className="bg-card border border-border rounded-xl px-5">
                <AccordionTrigger className="text-left font-display font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner
        title="Book Your Free LASIK Consultation with Dr. Nitin Kolte"
        subtitle="Our specialist will call you within 30 minutes to confirm your slot at Poona Eye Care, Karve Road, Pune."
      />
    </Layout>
  );
};

export default PoonaEyeCareCentrePage;
