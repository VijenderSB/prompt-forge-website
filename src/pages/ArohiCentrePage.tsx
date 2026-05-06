// @ts-nocheck
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, MapPin, Phone, Star, Clock, ChevronRight, Check, ShieldCheck, Award, Quote, GraduationCap, Briefcase, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ConsultationForm from "@/components/ConsultationForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BRAND } from "@/data/siteData";
import { CENTRE_BY_SLUG, type CentreData } from "@/data/centresData";
import NotFound from "./NotFound";

const AROHI_SLUGS = new Set([
  "centre-for-lasik-arohi-eye-hospital-andheri-mumbai",
]);

export const isArohiSlug = (slug: string) => AROHI_SLUGS.has(slug);

const procedures = [
  {
    slug: "lasik",
    name: "LASIK",
    badge: "Value",
    tagline: "Trusted bladeless LASIK for routine prescriptions.",
    price: 24999,
    recovery: "1–2 days",
    duration: "~10 min/eye",
    features: [
      "Wavefront-optimised excimer ablation",
      "Femtosecond flap, fully bladeless",
      "Predictable visual outcomes",
    ],
  },
  {
    slug: "contoura-vision",
    name: "Contoura Vision",
    badge: "Popular",
    tagline: "22,000-point topography-guided ablation for sharper-than-glasses vision.",
    price: 34999,
    recovery: "1–2 days",
    duration: "~12 min/eye",
    features: [
      "Topography-guided personalised treatment",
      "Reduces higher-order aberrations & glare",
      "FDA-approved, gold standard for high astigmatism",
    ],
  },
  {
    slug: "epi-contoura",
    name: "EPI Contoura",
    badge: "Premium",
    tagline: "Flapless topography-guided surface ablation — ideal for thin corneas.",
    price: 37499,
    recovery: "5–7 days",
    duration: "~12 min/eye",
    features: [
      "No flap — preserves corneal biomechanics",
      "Topography-guided custom ablation",
      "Best for thin corneas & high-impact lifestyles",
    ],
  },
  {
    slug: "femto-contoura",
    name: "Femto Contoura",
    badge: "Premium",
    tagline: "Femto-LASIK + topography-guided ablation — premium combined platform.",
    price: 49999,
    recovery: "1–2 days",
    duration: "~12 min/eye",
    features: [
      "All-laser femtosecond flap creation",
      "Combined with 22,000-point topo-guided ablation",
      "Premium-tier visual outcomes",
    ],
  },
];

const trustBadges = [
  { icon: ShieldCheck, label: "NABH-aligned safety protocols" },
  { icon: Award, label: "10,000+ Phaco-LASIK surgeries" },
  { icon: Star, label: "American Academy of Ophthalmology member" },
  { icon: Check, label: "Free 90-min diagnostic" },
];

const surgeon = {
  name: "Dr. Shradha Goel",
  title: "Chief LASIK Surgeon & Founder, Arohi Eye Hospital",
  credentials: "MBBS (Grant Medical College, Mumbai), MS Ophthalmology (Kasturba Medical College, Manipal), Clerkship — Massachusetts Eye & Ear Infirmary, Mass General Hospital, Boston, USA",
  experience: "10,000+ surgeries",
  membership: "American Academy of Ophthalmology",
};

const testimonials = [
  { name: "Aarav Shah", age: 26, procedure: "Contoura Vision", quote: "Dr. Shradha is incredibly thorough. She walked me through every scan before recommending Contoura. 6/6 in both eyes within 24 hours — best decision I've made." },
  { name: "Priyanka Iyer", age: 30, procedure: "Femto Contoura", quote: "I had high astigmatism and was nervous. The Femto Contoura procedure at Arohi was painless, and Dr. Goel's calm reassurance during surgery was everything." },
  { name: "Rohan Mehta", age: 24, procedure: "LASIK", quote: "Affordable and transparent. The Andheri centre is spotless, the team is warm, and Dr. Shradha gave me 6/6 vision after 14 years of glasses." },
  { name: "Sanya Kapoor", age: 28, procedure: "EPI Contoura", quote: "I was rejected for standard LASIK due to thin corneas. Dr. Goel suggested EPI Contoura — slightly longer recovery but the result is incredible. Cricket without spectacles again." },
  { name: "Nikhil Desai", age: 33, procedure: "Contoura Vision", quote: "Researched LASIK across Mumbai for months. Arohi stood out for honesty — Dr. Shradha actually told me I didn't need the most expensive option. That trust sealed it." },
  { name: "Tanya Joshi", age: 27, procedure: "Femto Contoura", quote: "From first consult to follow-up, the experience was seamless. Dr. Goel personally called to check on Day 1 recovery. Premium care at every step." },
];

const faqs = (c: CentreData) => [
  { q: `Which LASIK procedures are offered at Arohi Eye Hospital, Andheri?`, a: `Arohi Eye Hospital offers Standard LASIK, Contoura Vision, EPI Contoura (flapless surface ablation) and Femto Contoura (all-laser femto + topography-guided). The right procedure is decided after a free 90-minute diagnostic.` },
  { q: `How much does LASIK cost at Arohi Eye Hospital?`, a: `Pricing through Centre for Lasik at Arohi, Andheri: LASIK ₹24,999/eye, Contoura Vision ₹34,999/eye, EPI Contoura ₹37,499/eye, Femto Contoura ₹49,999/eye. 0% EMI options available up to 24 months.` },
  { q: `Who will perform my LASIK procedure?`, a: `Every refractive surgery at Arohi Eye Hospital is personally performed by Dr. Shradha Goel, Chief LASIK Surgeon and founder, with 10,000+ surgeries and US fellowship credentials from Mass Eye & Ear, Boston.` },
  { q: `Is the pre-LASIK consultation really free?`, a: `Yes. The complete 90-minute pre-LASIK workup — Pentacam tomography, corneal topography, pachymetry, dry-eye assessment and dilated retinal evaluation — is fully complimentary with no obligation to proceed.` },
  { q: `What is the difference between Contoura Vision and Femto Contoura?`, a: `Contoura Vision is topography-guided LASIK using a femtosecond flap and excimer ablation. Femto Contoura is the premium all-laser variant combining femtosecond flap creation with the 22,000-point topo-guided ablation profile — recommended for patients seeking the highest visual outcomes.` },
  { q: `Why would I need EPI Contoura instead of standard LASIK?`, a: `EPI Contoura is a flapless surface procedure recommended when corneas are thin, when there's a history of dry eye, or for patients in high-impact professions (defence, contact sports). It preserves more corneal biomechanical strength than flap-based LASIK.` },
  { q: `What is the recovery time after surgery?`, a: `LASIK, Contoura Vision and Femto Contoura have a 1–2 day visual recovery — most patients return to work within 24–48 hours. EPI Contoura is a surface procedure, so visual recovery typically takes 5–7 days.` },
  { q: `Are post-operative follow-ups included?`, a: `Yes. Day 1, Week 1, Month 1 and Month 3 follow-ups with Dr. Shradha Goel are included, along with all post-op eye drops, protective shields and dark glasses.` },
  { q: `What other eye-care services are available at Arohi?`, a: `Beyond LASIK, Arohi Eye Hospital offers phacoemulsification cataract surgery with premium IOLs, glaucoma management, retina services, cornea care, ICL for high prescriptions, and routine comprehensive eye exams.` },
  { q: `How do I book an appointment?`, a: `Call ${BRAND.phoneDisplay} or fill the consultation form on this page. Our care team will confirm your slot at Arohi Eye Hospital, Andheri, Mumbai within 30 minutes.` },
];

const ArohiCentrePage = () => {
  const { slug = "" } = useParams();
  const centre = CENTRE_BY_SLUG[slug];

  useEffect(() => {
    if (!centre) return;
    document.title = `Arohi Eye Hospital, Andheri, Mumbai | LASIK & Contoura Vision by Dr. Shradha Goel — Centre for Lasik`;
    const desc = `Book LASIK at Arohi Eye Hospital, Andheri, Mumbai. LASIK, Contoura Vision, EPI Contoura & Femto Contoura by Dr. Shradha Goel. Free 90-min consultation.`;
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
            <span className="text-primary-foreground">Arohi Eye Hospital, Andheri</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-card/15 border border-card/20 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground mb-4">
                <Building2 className="w-3 h-3 inline mr-1" /> Partner LASIK Centre
              </span>
              <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-3">
                LASIK & Contoura Vision at Arohi Eye Hospital, Andheri, Mumbai
              </h1>
              <p className="text-primary-foreground/80 mb-6">
                LASIK, Contoura Vision, EPI Contoura and Femto Contoura — performed by <strong className="text-primary-foreground">Dr. Shradha Goel</strong>, Chief LASIK Surgeon (10,000+ surgeries, fellowship at Mass Eye & Ear, Boston).
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

      {/* At a Glance */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <SectionHeading title="Centre at a Glance" subtitle="Everything you need to know before visiting Arohi Eye Hospital, Andheri." />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 card-elevated">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Address</h3>
              <p className="text-sm text-muted-foreground">Arohi Eye Hospital, Andheri, Mumbai, Maharashtra</p>
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

      {/* Surgeon */}
      <section className="section-padding bg-surface">
        <div className="container max-w-5xl">
          <SectionHeading title="Meet Your Surgeon" subtitle="Every refractive surgery at Arohi is personally performed by Dr. Shradha Goel." />
          <div className="bg-card border border-border rounded-2xl p-6 md:p-10 card-elevated">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/10 border-4 border-primary/20 shadow-lg shrink-0 flex items-center justify-center">
                <GraduationCap className="w-16 h-16 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-foreground">{surgeon.name}</h3>
                <p className="text-primary font-semibold text-sm mb-1">{surgeon.title}</p>
                <p className="text-muted-foreground text-sm mb-5 inline-flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 mt-0.5 shrink-0" /> {surgeon.credentials}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6 max-w-md">
                  <div className="bg-surface rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Surgeries Performed</p>
                    <p className="font-display font-bold text-foreground">{surgeon.experience}</p>
                  </div>
                  <div className="bg-surface rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Membership</p>
                    <p className="font-display font-bold text-foreground text-sm">{surgeon.membership}</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="font-display font-bold text-foreground inline-flex items-center gap-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-primary" /> Education
                    </h4>
                    <p className="text-foreground/85 leading-relaxed text-[15px]">
                      Dr. Shradha is the Chief Surgeon at Arohi Eye Hospital. She completed her MBBS from Grant Medical College, Mumbai and went on to pursue Masters in Ophthalmology from Kasturba Medical College, Manipal. She went on to pursue a Clerkship at Massachusetts Eye and Ear Infirmary, Mass General Hospital, Boston, USA. She is also a member of the American Academy of Ophthalmology.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground inline-flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" /> Experience
                    </h4>
                    <p className="text-foreground/85 leading-relaxed text-[15px]">
                      Prior to founding Arohi Eye Hospital, Dr. Shradha had a rich and diverse experience working at different kinds of eye hospitals in Mumbai. She is regarded as a highly skilled Phaco-LASIK surgeon and has performed over 10,000 surgeries. She understands the patient's concern diligently and suggests treatment which fits in the patient's daily routine, making eye care a part of their lifestyle. Testimony of this fact is that most of her patients themselves inform other patients to visit the hospital.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground inline-flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-primary" /> Expertise
                    </h4>
                    <p className="text-foreground/85 leading-relaxed text-[15px]">
                      Dr. Goel is widely travelled and keeps herself updated on new technologies in eye care. She has special interests in LASIK and refractive error diseases, and cataract.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures & Pricing */}
      <section className="section-padding">
        <div className="container max-w-6xl">
          <SectionHeading title="LASIK Procedures & Transparent Pricing" subtitle="Per-eye institutional pricing through Centre for Lasik. 0% EMI up to 24 months." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                <ul className="space-y-1.5 text-sm">
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
          <SectionHeading title="Patient Testimonials" subtitle="Real stories from patients of Dr. Shradha Goel at Arohi Eye Hospital." />
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
        title="Book Your Free LASIK Consultation with Dr. Shradha Goel"
        subtitle="Our specialist will call you within 30 minutes to confirm your slot at Arohi Eye Hospital, Andheri, Mumbai."
      />
    </Layout>
  );
};

export default ArohiCentrePage;
