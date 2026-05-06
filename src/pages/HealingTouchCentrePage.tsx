// @ts-nocheck
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, MapPin, Phone, Star, Clock, ChevronRight, Check, ShieldCheck, Award, Quote, GraduationCap } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ConsultationForm from "@/components/ConsultationForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PROCEDURES, BRAND } from "@/data/siteData";
import { CENTRE_BY_SLUG, type CentreData } from "@/data/centresData";
import drPiyushKapur from "@/assets/dr-piyush-kapur.png";
import NotFound from "./NotFound";

const HEALING_TOUCH_SLUGS = new Set([
  "centre-for-lasik-the-healing-touch-super-speciality-eye-care-janakpuri-new-delhi",
  "centre-for-lasik-the-healing-touch-super-speciality-eye-care-vikaspuri-new-delhi",
]);

export const isHealingTouchSlug = (slug: string) => HEALING_TOUCH_SLUGS.has(slug);

const TECH_SLUGS = ["innovEyes", "contoura-vision", "epi-lasik", "standard-lasik", "smile-pro", "silk"];

const trustBadges = [
  { icon: ShieldCheck, label: "NABH-aligned safety protocols" },
  { icon: Award, label: "Full LASIK technology suite" },
  { icon: Star, label: "4.9/5 patient satisfaction" },
  { icon: Check, label: "Free 90-min diagnostic" },
];

const surgeon = {
  name: "Dr. Piyush Kapur",
  title: "Director & Chief Refractive Surgeon",
  credentials: "MBBS, MS (Ophthalmology), Fellowship in Phaco & Refractive Surgery",
  experience: "25+ years",
  surgeries: "30,000+ refractive procedures",
  bio: "Dr. Piyush Kapur is the founder-director and chief refractive surgeon at The Healing Touch Super Speciality Eye Care, with over two and a half decades of dedicated practice across LASIK, advanced cataract and anterior-segment surgery. Trained in the most advanced laser vision correction modalities — including WaveLight Plus InnovEyes, Contoura Vision, EPI Contoura and conventional LASIK — Dr. Kapur is recognised in the Delhi-NCR ophthalmology community for his meticulous pre-operative screening protocol and his refusal to operate on borderline candidates. He personally reviews every Pentacam, topography and pachymetry report before clearing a patient for surgery, and performs each procedure himself inside the centre's ISO-class modular operating theatre. His clinical philosophy — \"the best LASIK is the one you didn't need to redo\" — has translated into a re-treatment rate well below the national average and a 4.9/5 patient satisfaction score sustained over more than a decade.",
};

const testimonials = [
  { name: "Ankit Sharma", age: 27, procedure: "WaveLight Plus InnovEyes", quote: "Dr. Kapur explained every single number on my Pentacam before suggesting InnovEyes. Surgery was 8 minutes per eye, walked out the same evening, drove to office the next morning. 6/6 in both eyes." },
  { name: "Pooja Mehra", age: 31, procedure: "HD Contoura Vision", quote: "I had high astigmatism and three other clinics had given me different opinions. Healing Touch Janakpuri was the only one that did a proper topography-guided plan. Three months on — sharper than I ever saw with glasses." },
  { name: "Rahul Verma", age: 24, procedure: "EPI Contoura", quote: "I was rejected for standard LASIK because of thin corneas. Dr. Kapur recommended EPI Contoura, walked me through the recovery honestly. Healing took a week but the result is incredible — I'm back to playing cricket without spectacles." },
  { name: "Sneha Kapoor", age: 29, procedure: "Standard LASIK", quote: "Quick, painless, and genuinely affordable through Centre for Lasik. The team at Vikaspuri was warm and the post-op follow-ups were taken seriously. No glasses for the first time in 14 years." },
  { name: "Vikram Singh", age: 35, procedure: "WaveLight Plus InnovEyes", quote: "I researched LASIK for almost a year before choosing Dr. Kapur. The depth of his consultation is unmatched — he actually told me which procedure I did NOT need. That honesty is why I went ahead." },
  { name: "Neha Aggarwal", age: 26, procedure: "HD Contoura Vision", quote: "From the first call to my one-month follow-up, the experience was seamless. The Janakpuri centre is spotless, the equipment is clearly latest-generation, and Dr. Kapur is everything you'd want in a surgeon." },
];

const faqs = (c: CentreData) => [
  { q: `Which LASIK technologies are available at The Healing Touch, ${c.cityName}?`, a: `The centre offers the complete LASIK technology suite — WaveLight Plus InnovEyes (Alcon), HD Contoura Vision, EPI Contoura, EPI LASIK and conventional Standard LASIK. The right procedure for you is decided after a free 90-minute diagnostic.` },
  { q: `How much does LASIK cost at The Healing Touch ${c.locality ? c.locality.replace(/-/g, " ") : ""}?`, a: `Indicative pricing through Centre for Lasik: Standard LASIK from ₹11,249/eye, HD Contoura Vision from ₹31,875/eye, EPI LASIK / EPI Contoura from ₹22,500/eye, and WaveLight Plus InnovEyes from ₹61,250/eye. 0% EMI options available up to 24 months.` },
  { q: `Who will perform my LASIK procedure?`, a: `Every refractive surgery at The Healing Touch is personally performed by Dr. Piyush Kapur, Director and Chief Refractive Surgeon, with 25+ years of experience and 30,000+ procedures.` },
  { q: `Is the pre-LASIK consultation really free?`, a: `Yes. The complete 90-minute pre-LASIK workup — Pentacam tomography, corneal topography, pachymetry, dry-eye assessment and dilated retinal evaluation — is fully complimentary with no obligation to proceed.` },
  { q: `What is the difference between EPI Contoura and HD Contoura Vision?`, a: `HD Contoura Vision is a flap-based topography-guided LASIK on the WaveLight EX500 platform. EPI Contoura combines surface ablation (no flap, epithelial separation only) with topography guidance — preferred for patients with thin corneas or high-impact lifestyles.` },
  { q: `Am I a candidate for WaveLight Plus InnovEyes?`, a: `WaveLight Plus InnovEyes is suitable for most patients aged 18+ with stable prescriptions, adequate corneal thickness and no active ocular pathology. Final candidacy is decided after the diagnostic workup. Dr. Kapur reviews every Pentacam personally before clearance.` },
  { q: `How long is the recovery after LASIK at The Healing Touch?`, a: `Most flap-based procedures (WaveLight InnovEyes, Contoura Vision, Standard LASIK) have a 1–2 day visual recovery. Surface procedures (EPI LASIK / EPI Contoura) typically need 5–7 days. Functional vision returns within 24 hours for the majority of patients.` },
  { q: `Are post-operative follow-ups included?`, a: `Yes. A structured post-op care plan is included — Day 1, Week 1, Month 1 and Month 3 follow-ups with Dr. Kapur, all complimentary. Eye drops, protective shield and dark glasses are provided on the day of surgery.` },
  { q: `What other eye-care services are available at the centre?`, a: `Beyond LASIK, the centre offers phacoemulsification cataract surgery with premium IOLs, retina services, glaucoma management, cornea and keratoconus care (C3R, ICL), oculoplasty, paediatric ophthalmology and routine comprehensive eye exams.` },
  { q: `How do I book an appointment?`, a: `Call ${BRAND.phoneDisplay} or fill the consultation form on this page. Our care team will confirm your slot at the ${c.locality ? `${c.locality.replace(/-/g, " ")}, ` : ""}${c.cityName} centre within 30 minutes.` },
];

const HealingTouchCentrePage = () => {
  const { slug = "" } = useParams();
  const centre = CENTRE_BY_SLUG[slug];

  useEffect(() => {
    if (!centre) return;
    const title = `${centre.hospital}, ${centre.address} | LASIK by Dr. Piyush Kapur — Centre for Lasik`;
    const desc = `Book LASIK at The Healing Touch, ${centre.address}. WaveLight Plus InnovEyes, HD Contoura Vision, EPI Contoura & Standard LASIK by Dr. Piyush Kapur. Free 90-min consultation.`;
    document.title = title;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = desc;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = window.location.origin + window.location.pathname;
  }, [centre]);

  if (!centre) return <NotFound />;

  const c = centre;
  const localityDisplay = c.locality ? c.locality.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ") : null;
  const techProcedures = PROCEDURES.filter(p => TECH_SLUGS.includes(p.slug));

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
            <span className="text-primary-foreground">{c.hospital}, {localityDisplay}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-card/15 border border-card/20 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground mb-4">
                <Building2 className="w-3 h-3 inline mr-1" /> Partner LASIK Centre
              </span>
              <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-3">
                LASIK Eye Surgery at The Healing Touch, {localityDisplay}, New Delhi
              </h1>
              <p className="text-primary-foreground/80 mb-6">
                The complete LASIK technology suite — WaveLight Plus InnovEyes, HD Contoura Vision, EPI Contoura & Standard LASIK — performed by <strong className="text-primary-foreground">Dr. Piyush Kapur</strong>, Director & Chief Refractive Surgeon (25+ years, 30,000+ procedures).
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

      {/* Centre at a glance */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <SectionHeading title="Centre at a Glance" subtitle={`Everything you need to know before visiting The Healing Touch, ${localityDisplay}.`} />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 card-elevated">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Address</h3>
              <p className="text-sm text-muted-foreground">The Healing Touch Super Speciality Eye Care, {localityDisplay}, New Delhi</p>
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

      {/* About the centre */}
      <section className="section-padding bg-surface">
        <div className="container max-w-4xl">
          <SectionHeading
            title={`About The Healing Touch, ${localityDisplay}`}
            subtitle="A complete super-speciality eye-care destination in West Delhi."
          />
          <div className="space-y-5 text-foreground/85 leading-relaxed text-[15px]">
            <p>
              The Healing Touch Super Speciality Eye Care, {localityDisplay} is one of West Delhi's most established refractive and anterior-segment eye-care destinations. Founded by <strong>Dr. Piyush Kapur</strong>, the centre has built its reputation over more than two decades on a single principle — uncompromising surgical precision backed by exhaustive pre-operative screening. Every patient who walks in is treated by a single accountable care team, from the first Pentacam scan to the three-month post-operative review.
            </p>
            <p>
              The {localityDisplay} centre is uniquely positioned in Delhi-NCR for offering the full LASIK technology stack under one roof — <strong>WaveLight Plus InnovEyes</strong> (Alcon's AI-guided 400 Hz platform), <strong>HD Contoura Vision</strong> (22,000-point topography-guided ablation), <strong>EPI Contoura</strong> (flapless topo-guided surface ablation for thin corneas), <strong>EPI LASIK</strong>, and conventional <strong>Standard LASIK</strong>. The matching procedure is decided objectively by clinical data, never by upselling.
            </p>
            <p>
              Beyond laser vision correction, The Healing Touch functions as a full super-speciality eye hospital: phacoemulsification cataract surgery with premium monofocal, toric and trifocal IOLs; medical and surgical retina; glaucoma diagnostics and surgery; cornea, keratoconus and ICL services; oculoplasty, squint and paediatric ophthalmology; and routine comprehensive eye exams. Diagnostics and procedures are performed inside ISO-class modular operating theatres with strict NABH-aligned sterile protocols.
            </p>
            <p>
              Booking through Centre for Lasik unlocks transparent institutional pricing, 0% EMI options up to 24 months, a free 90-minute diagnostic, and a structured follow-up plan with Dr. Kapur — same surgeon, same OT, same technology, every time.
            </p>
          </div>
        </div>
      </section>

      {/* Surgeon */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <SectionHeading title="Meet Your Surgeon" subtitle="Every refractive surgery at this centre is personally performed by Dr. Piyush Kapur." />
          <div className="bg-card border border-border rounded-2xl p-6 md:p-10 card-elevated">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                <Stethoscope className="w-10 h-10 text-primary-foreground" />
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

      {/* LASIK Technologies & Pricing */}
      <section className="section-padding bg-surface">
        <div className="container max-w-6xl">
          <SectionHeading
            title="LASIK Technologies & Pricing"
            subtitle="The full refractive technology suite available at this centre — with transparent institutional pricing through Centre for Lasik."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techProcedures.map((p) => (
              <div key={p.id} className="bg-card border border-border rounded-xl p-6 card-elevated flex flex-col">
                {p.badge && (
                  <span className="inline-block self-start bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-2 py-1 rounded mb-3">{p.badge}</span>
                )}
                <h3 className="font-display font-bold text-foreground text-lg mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.tagline}</p>
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground">Starting at</p>
                  <p className="font-display font-black text-2xl text-primary">₹{p.price.toLocaleString("en-IN")}<span className="text-sm text-muted-foreground font-normal">/eye</span></p>
                  <p className="text-xs text-muted-foreground">Recovery: {p.recovery} · {p.duration}</p>
                </div>
                <ul className="space-y-1.5 mb-4 text-sm">
                  {p.features.slice(0, 3).map(f => (
                    <li key={f} className="flex items-start gap-2 text-foreground/80">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to={`/procedures/${p.slug}`} className="text-primary font-semibold text-sm inline-flex items-center gap-1 mt-auto">
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            All pricing inclusive of pre-op diagnostics, surgery, medications and structured post-op follow-ups. 0% EMI available up to 24 months.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container max-w-6xl">
          <SectionHeading title="Patient Testimonials" subtitle="Real stories from patients of Dr. Piyush Kapur at The Healing Touch." />
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
      <section className="section-padding bg-surface">
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
        title={`Book Your Free LASIK Consultation with Dr. Piyush Kapur`}
        subtitle={`Our specialist will call you within 30 minutes to confirm your slot at The Healing Touch, ${localityDisplay}, New Delhi.`}
      />
    </Layout>
  );
};

export default HealingTouchCentrePage;
