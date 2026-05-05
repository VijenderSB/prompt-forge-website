import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Search, IndianRupee, Users, MessagesSquare, Navigation as NavIcon, Building2, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";
import ProcedureNavStrip from "@/components/ProcedureNavStrip";
import CTABanner from "@/components/CTABanner";
import { STATES, TOP_CITIES, slugify, BRAND } from "@/data/siteData";

type CityTier = {
  name: string;
  state: string;
  slug: string;
  priceFrom: number;
  priceTo: number;
  success: string;
};

const TIER_1: CityTier[] = [
  { name: "Ahmedabad", state: "Gujarat", slug: "ahmedabad", priceFrom: 22500, priceTo: 63000, success: "98–99%" },
  { name: "Bengaluru", state: "Karnataka", slug: "bangalore", priceFrom: 21000, priceTo: 74000, success: "98–99%" },
  { name: "Chennai", state: "Tamil Nadu", slug: "chennai", priceFrom: 22000, priceTo: 58000, success: "98–99%" },
  { name: "Hyderabad", state: "Telangana", slug: "hyderabad", priceFrom: 22000, priceTo: 69000, success: "98–99%" },
  { name: "Kolkata", state: "West Bengal", slug: "kolkata", priceFrom: 20500, priceTo: 66000, success: "98–99%" },
  { name: "Mumbai", state: "Maharashtra", slug: "mumbai", priceFrom: 19500, priceTo: 61000, success: "98–99%" },
  { name: "New Delhi", state: "Delhi NCR", slug: "delhi", priceFrom: 24000, priceTo: 74000, success: "98–99%" },
  { name: "Pune", state: "Maharashtra", slug: "pune", priceFrom: 25000, priceTo: 65000, success: "98–99%" },
];

const TIER_2: CityTier[] = [
  { name: "Agra", state: "Uttar Pradesh", slug: "agra", priceFrom: 17000, priceTo: 50000, success: "97–99%" },
  { name: "Allahabad", state: "Uttar Pradesh", slug: "allahabad", priceFrom: 14500, priceTo: 56000, success: "97–99%" },
  { name: "Amritsar", state: "Punjab", slug: "amritsar", priceFrom: 14500, priceTo: 52000, success: "97–99%" },
  { name: "Bhopal", state: "Madhya Pradesh", slug: "bhopal", priceFrom: 16500, priceTo: 51000, success: "97–99%" },
  { name: "Bhubaneswar", state: "Odisha", slug: "bhubaneswar", priceFrom: 15500, priceTo: 49000, success: "97–99%" },
  { name: "Chandigarh", state: "Haryana", slug: "chandigarh", priceFrom: 19000, priceTo: 55000, success: "97–99%" },
  { name: "Coimbatore", state: "Tamil Nadu", slug: "coimbatore", priceFrom: 16000, priceTo: 48000, success: "97–99%" },
  { name: "Dehradun", state: "Uttarakhand", slug: "dehradun", priceFrom: 15500, priceTo: 47000, success: "97–99%" },
  { name: "Faridabad", state: "Delhi NCR", slug: "faridabad", priceFrom: 18000, priceTo: 54000, success: "97–99%" },
  { name: "Gurgaon", state: "Haryana", slug: "gurgaon", priceFrom: 22000, priceTo: 68000, success: "97–99%" },
  { name: "Indore", state: "Madhya Pradesh", slug: "indore", priceFrom: 16000, priceTo: 50000, success: "97–99%" },
  { name: "Jaipur", state: "Rajasthan", slug: "jaipur", priceFrom: 18000, priceTo: 58000, success: "97–99%" },
  { name: "Kanpur", state: "Uttar Pradesh", slug: "kanpur", priceFrom: 14000, priceTo: 48000, success: "97–99%" },
  { name: "Kochi", state: "Kerala", slug: "kochi", priceFrom: 17500, priceTo: 52000, success: "97–99%" },
  { name: "Lucknow", state: "Uttar Pradesh", slug: "lucknow", priceFrom: 16500, priceTo: 53000, success: "97–99%" },
  { name: "Ludhiana", state: "Punjab", slug: "ludhiana", priceFrom: 15500, priceTo: 50000, success: "97–99%" },
  { name: "Nagpur", state: "Maharashtra", slug: "nagpur", priceFrom: 16000, priceTo: 49000, success: "97–99%" },
  { name: "Noida", state: "Delhi NCR", slug: "noida", priceFrom: 21000, priceTo: 65000, success: "97–99%" },
  { name: "Patna", state: "Bihar", slug: "patna", priceFrom: 14000, priceTo: 46000, success: "97–99%" },
  { name: "Surat", state: "Gujarat", slug: "surat", priceFrom: 17000, priceTo: 52000, success: "97–99%" },
  { name: "Vadodara", state: "Gujarat", slug: "vadodara", priceFrom: 16500, priceTo: 50000, success: "97–99%" },
  { name: "Visakhapatnam", state: "Andhra Pradesh", slug: "visakhapatnam", priceFrom: 15000, priceTo: 48000, success: "97–99%" },
];

const TIER_3: CityTier[] = [
  { name: "Ajmer", state: "Rajasthan", slug: "ajmer", priceFrom: 13500, priceTo: 42000, success: "96–98%" },
  { name: "Aurangabad", state: "Maharashtra", slug: "aurangabad", priceFrom: 13500, priceTo: 43000, success: "96–98%" },
  { name: "Guwahati", state: "Assam", slug: "guwahati", priceFrom: 14000, priceTo: 44000, success: "96–98%" },
  { name: "Jodhpur", state: "Rajasthan", slug: "jodhpur", priceFrom: 13500, priceTo: 42000, success: "96–98%" },
  { name: "Madurai", state: "Tamil Nadu", slug: "madurai", priceFrom: 14000, priceTo: 44000, success: "96–98%" },
  { name: "Mangalore", state: "Karnataka", slug: "mangalore", priceFrom: 14500, priceTo: 45000, success: "96–98%" },
  { name: "Mysore", state: "Karnataka", slug: "mysore", priceFrom: 14000, priceTo: 44000, success: "96–98%" },
  { name: "Raipur", state: "Chhattisgarh", slug: "raipur", priceFrom: 13500, priceTo: 43000, success: "96–98%" },
  { name: "Ranchi", state: "Jharkhand", slug: "ranchi", priceFrom: 13500, priceTo: 42000, success: "96–98%" },
  { name: "Thiruvananthapuram", state: "Kerala", slug: "thiruvananthapuram", priceFrom: 15000, priceTo: 46000, success: "96–98%" },
  { name: "Vijayawada", state: "Andhra Pradesh", slug: "vijayawada", priceFrom: 14000, priceTo: 44000, success: "96–98%" },
  { name: "Varanasi", state: "Uttar Pradesh", slug: "varanasi", priceFrom: 13500, priceTo: 43000, success: "96–98%" },
];

const fmt = (n: number) => `₹${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1).replace(/\.0$/, "")},${String(n).slice(-3)}`.replace(",000,000", ",000").replace(/^₹(\d+)\.(\d),/, "₹$1,$2") ;
const formatPrice = (n: number) => `₹${n.toLocaleString("en-IN")}`;

const CityCard = ({ c }: { c: CityTier }) => (
  <Link
    to={`/${slugify(c.state)}/${c.slug}`}
    className="group bg-card border border-border rounded-xl p-5 card-elevated flex gap-4 items-start"
  >
    <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
      <MapPin className="w-5 h-5 text-accent" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between gap-2 mb-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">{c.name}</h3>
          <span className="text-[10px] uppercase tracking-wide font-semibold bg-muted text-muted-foreground px-2 py-0.5 rounded">{c.state}</span>
        </div>
        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
        {c.name} offers world-class LASIK with advanced 7th-gen technology, expert refractive surgeons and accredited centres.
      </p>
      <div className="flex items-center gap-2 text-xs">
        <span className="font-display font-bold text-foreground">{formatPrice(c.priceFrom)} – {formatPrice(c.priceTo)}/eye</span>
        <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
        <span className="text-muted-foreground">{c.success} success</span>
      </div>
    </div>
  </Link>
);

const TierSection = ({ tier, title, desc, cities }: { tier: string; title: string; desc: string; cities: CityTier[] }) => (
  <div className="mb-14 last:mb-0">
    <div className="flex items-center gap-2 mb-2">
      <Building2 className="w-5 h-5 text-primary" />
      <h2 className="font-display font-black text-2xl text-foreground">{title}</h2>
    </div>
    <p className="text-sm text-muted-foreground mb-6 max-w-2xl">{desc}</p>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cities.map((c) => <CityCard key={c.slug} c={c} />)}
    </div>
  </div>
);
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
    {/* Tiered Cities Directory */}
    <section className="section-padding bg-surface">
      <div className="container max-w-6xl">
        <SectionHeading
          title="LASIK Centres Across India"
          subtitle="Browse by city tier — pricing, success rates and partner centres curated for your location"
        />
        <TierSection
          tier="1"
          title="Tier 1 — Metro Cities"
          desc="Established LASIK centres with high-volume programs, advanced 7th-gen lasers, and internationally trained refractive surgeons."
          cities={TIER_1}
        />
        <TierSection
          tier="2"
          title="Tier 2 — Major Cities"
          desc="Growing LASIK programs with experienced teams, modern equipment, and accessible pricing for regional patients."
          cities={TIER_2}
        />
        <TierSection
          tier="3"
          title="Tier 3 — Emerging Cities"
          desc="Rapidly expanding refractive surgery access with vetted partner centres and the lowest negotiated institutional pricing."
          cities={TIER_3}
        />
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
