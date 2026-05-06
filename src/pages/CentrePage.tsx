// @ts-nocheck
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, MapPin, Phone, Star, Clock, ChevronRight, Check, ShieldCheck, Award } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ProcedureCard from "@/components/ProcedureCard";
import ConsultationForm from "@/components/ConsultationForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PROCEDURES, BRAND } from "@/data/siteData";
import { CENTRE_BY_SLUG, type CentreData } from "@/data/centresData";
import NotFound from "./NotFound";

const trustBadges = [
  { icon: ShieldCheck, label: "NABH-aligned safety protocols" },
  { icon: Award, label: "US-FDA approved technology" },
  { icon: Star, label: "4.9/5 patient satisfaction" },
  { icon: Check, label: "Free 90-min diagnostic" },
];



const faqs = (c: CentreData) => [
  { q: `What LASIK procedures are available at ${c.hospital}, ${c.cityName}?`, a: `This centre offers Standard LASIK and HD Contoura Vision — two of the most clinically validated, FDA-approved laser vision-correction procedures, with consistent institutional pricing across India.` },
  { q: `What is the cost of LASIK at ${c.hospital} in ${c.address}?`, a: `Standard LASIK and HD Contoura Vision are both available at this centre under our institutional pricing programme. Speak to our care team for a personalised quote based on your prescription and chosen procedure.` },
  { q: `Is the consultation at ${c.hospital} really free?`, a: `Yes. The full 90-minute pre-LASIK diagnostic — Pentacam, topography, pachymetry and retinal evaluation — is completely free with no obligation to proceed.` },
  { q: `How do I book an appointment at ${c.hospital}?`, a: `Call ${BRAND.phoneDisplay} or fill the consultation form on this page. Our care team will confirm your slot at the ${c.locality ? `${c.locality.replace(/-/g, " ")}, ` : ""}${c.cityName} centre within 30 minutes.` },
  { q: `What are the operating hours?`, a: `Monday to Saturday, 9:00 AM to 7:00 PM. Sunday consultations available by appointment for select procedures.` },
];

const CentrePage = () => {
  const { slug = "" } = useParams();
  const centre = CENTRE_BY_SLUG[slug];

  useEffect(() => {
    if (!centre) return;
    const title = `${centre.hospital}, ${centre.address} | LASIK Centre — Centre for Lasik`;
    const desc = `Book LASIK eye surgery at ${centre.hospital} in ${centre.address}. Contoura Vision, SMILE Pro and more FDA-approved procedures. Free 90-min consultation. Call ${BRAND.phoneDisplay}.`;
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
            <Link to={`/${c.state}/${c.city}`} className="hover:text-primary-foreground">{c.cityName}</Link>
            <ChevronRight className="w-3 h-3 inline mx-1" />
            <span className="text-primary-foreground">{c.hospital}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-card/15 border border-card/20 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground mb-4">
                <Building2 className="w-3 h-3 inline mr-1" /> Partner LASIK Centre
              </span>
              <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-3">
                LASIK Eye Surgery at {c.hospital}, {localityDisplay ? `${localityDisplay}, ` : ""}{c.cityName}
              </h1>
              <p className="text-primary-foreground/80 mb-6">
                Contoura Vision, SMILE Pro, WaveLight Plus InnovEyes and SiLK — all FDA-approved procedures available at this centre. Free 90-minute consultation, no obligation.
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
          <SectionHeading title="Centre at a Glance" subtitle={`Everything you need to know before visiting ${c.hospital}, ${c.cityName}.`} />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 card-elevated">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Address</h3>
              <p className="text-sm text-muted-foreground">{c.address}</p>
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

      {/* Procedures */}
      <section className="section-padding bg-surface">
        <div className="container max-w-6xl">
          <SectionHeading title={`LASIK Procedures Available at ${c.hospital}`} subtitle="World-class FDA-approved technology — across all 50+ partner centres in India." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROCEDURES.map((p) => (
              <Link key={p.id} to={`/procedures/${p.slug}`} className="bg-card border border-border rounded-xl p-5 card-elevated hover:border-primary transition-colors">
                <h3 className="font-display font-bold text-foreground mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{p.tagline}</p>
                <span className="text-primary font-semibold text-sm inline-flex items-center gap-1">Learn more <ChevronRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose this centre */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <SectionHeading title={`Why Choose ${c.hospital} via Centre for Lasik`} />
          <ul className="space-y-4">
            {[
              `Institutional pricing across Centre for Lasik's volume-aggregator network.`,
              `Same surgeon, same FDA-approved technology, same operating suite.`,
              `Pre-LASIK Pentacam, topography, pachymetry, retinal scan included free.`,
              `0% EMI options up to 24 months across all procedures.`,
              `Post-op care plan with follow-ups at Day 1, Week 1, Month 1, Month 3.`,
            ].map(line => (
              <li key={line} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground">{line}</span>
              </li>
            ))}
          </ul>
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
        title={`Book Your Free LASIK Consultation at ${c.hospital}`}
        subtitle={`Our specialist will call you within 30 minutes to confirm your slot at ${c.address}.`}
      />
    </Layout>
  );
};

export default CentrePage;
