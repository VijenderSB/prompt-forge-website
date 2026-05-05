import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Search, IndianRupee, Users, MessagesSquare, Navigation as NavIcon } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";
import ProcedureNavStrip from "@/components/ProcedureNavStrip";
import CTABanner from "@/components/CTABanner";
import { STATES, TOP_CITIES, slugify, BRAND } from "@/data/siteData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const valueProps = [
  {
    icon: MessagesSquare,
    title: "We Receive Every LASIK Enquiry",
    desc: "Thousands of patients across India reach out to us daily — asking about LASIK procedures, eligibility, technology and pricing.",
  },
  {
    icon: Search,
    title: "We Match You to the Right Treatment",
    desc: "Our specialists understand your prescription, lifestyle and budget — then recommend the LASIK technology best suited to your eyes.",
  },
  {
    icon: IndianRupee,
    title: "Lowest Price, Guaranteed",
    desc: "Because we aggregate patient volume nationally, we negotiate VIP institutional rates — up to 30% off walk-in MRP at every partner centre.",
  },
  {
    icon: NavIcon,
    title: "Nearest Centre to You",
    desc: "We route you to the closest accredited LASIK centre — saving travel time without compromising on technology or surgeon expertise.",
  },
];

const directoryFaqs = [
  {
    q: "How does this LASIK locations directory work?",
    a: "We are India's largest LASIK aggregator. Every enquiry that comes through this directory is reviewed by our medical advisors, who match you with the right procedure, the nearest accredited centre, and the lowest negotiated price.",
  },
  {
    q: "Do I pay extra for using your directory?",
    a: "No. Our service is completely free for patients. Centres pay us a referral fee for the patient volume we deliver — and in return, you get VIP pricing that is typically 20–30% below walk-in MRP.",
  },
  {
    q: "How do you find the nearest LASIK centre for me?",
    a: "Share your city or pincode during the enquiry. We map your location against 50+ partner centres across India and recommend the closest one offering the technology suited to your eyes.",
  },
  {
    q: "What if my city is not listed?",
    a: "We are expanding rapidly. Even if your city is not listed, submit an enquiry — we will arrange a virtual consultation and connect you to the nearest centre in the neighbouring metro.",
  },
];

const LocationsPage = () => (
  <Layout>
    {/* Hero with Lead Form */}
    <section className="hero-gradient section-padding">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-xs font-semibold mb-4 backdrop-blur-sm">
              India's #1 LASIK Locations Directory
            </span>
            <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">
              Find the Right LASIK Treatment at the Lowest Price — Nearest to You
            </h1>
            <p className="text-primary-foreground/85 text-lg mb-4">
              Every enquiry seeking information about LASIK & pricing comes to us. We help patients across India choose the right procedure at the lowest price, at the centre nearest to their location.
            </p>
            <ul className="space-y-2 text-primary-foreground/75 text-sm">
              <li>✓ 50+ accredited LASIK centres PAN India</li>
              <li>✓ Free 90-minute diagnostic at every centre</li>
              <li>✓ VIP volume-discount rates — up to 30% off MRP</li>
              <li>✓ All 6 FDA-approved LASIK technologies</li>
            </ul>
          </motion.div>
          <ConsultationForm variant="hero" />
        </div>
      </div>
    </section>

    {/* How directory helps */}
    <section className="section-padding">
      <div className="container max-w-5xl">
        <SectionHeading
          title="Why Patients Across India Choose Our Directory"
          subtitle="One enquiry. The right procedure. The lowest price. The nearest centre."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valueProps.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 card-elevated"
            >
              <div className="w-10 h-10 rounded-lg cta-gradient flex items-center justify-center mb-4">
                <v.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Top Cities Directory */}
    <section className="section-padding bg-surface">
      <div className="container max-w-5xl">
        <SectionHeading title="LASIK in Top Cities" subtitle="Click your city to see procedures, prices and partner centres near you" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {TOP_CITIES.map((c) => (
            <Link
              key={c.slug}
              to={`/${slugify(c.state)}/${c.slug}`}
              className="bg-card border border-border rounded-xl p-4 text-center card-elevated group"
            >
              <MapPin className="w-5 h-5 mx-auto mb-2 text-primary" />
              <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors block">
                LASIK in {c.name}
              </span>
              <span className="text-xs text-muted-foreground">{c.state}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* All States */}
    <section className="section-padding">
      <div className="container max-w-5xl">
        <SectionHeading title="Browse by State" subtitle="LASIK eye surgery directory across every Indian state" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {STATES.map((s) => (
            <Link
              key={s}
              to={`/${slugify(s)}`}
              className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              {s}
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Strip */}
    <section className="py-12 bg-surface border-y border-border">
      <div className="container max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { value: "50+", label: "Partner Centres" },
          { value: "1,00,000+", label: "Enquiries Handled" },
          { value: "30%", label: "Avg. Savings vs MRP" },
          { value: "6", label: "FDA-Approved Technologies" },
        ].map((s) => (
          <div key={s.label}>
            <div className="font-display font-black text-2xl md:text-3xl text-primary mb-1">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Procedure Nav */}
    <ProcedureNavStrip />

    {/* FAQ */}
    <section className="section-padding bg-surface">
      <div className="container max-w-4xl">
        <SectionHeading title="Locations Directory — FAQs" subtitle="How our nationwide LASIK aggregator works" />
        <Accordion type="single" collapsible className="space-y-3">
          {directoryFaqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm">
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
    </section>

    {/* Bottom CTA */}
    <section className="section-padding hero-gradient">
      <div className="container max-w-2xl text-center">
        <Users className="w-10 h-10 mx-auto text-primary-foreground mb-3" />
        <h2 className="font-display font-bold text-2xl text-primary-foreground mb-3">
          Tell Us Where You Are — We'll Do the Rest
        </h2>
        <p className="text-primary-foreground/85 mb-6">
          Submit one enquiry. Our advisors will recommend the right LASIK procedure, the lowest negotiated price, and the nearest accredited centre to your location.
        </p>
        <ConsultationForm variant="compact" />
        <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2 mt-6 text-primary-foreground/90 hover:text-primary-foreground text-sm font-semibold">
          <Phone className="w-4 h-4" /> Or call {BRAND.phoneDisplay}
        </a>
      </div>
    </section>

    <CTABanner />
  </Layout>
);

export default LocationsPage;
