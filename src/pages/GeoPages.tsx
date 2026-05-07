import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ProcedureCard from "@/components/ProcedureCard";
import ConsultationForm from "@/components/ConsultationForm";
import { PROCEDURES, TOP_CITIES, slugify, discountedPrice } from "@/data/siteData";
import { getCityData } from "@/data/cityData";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, Building2, Users, Eye, Quote, Star, Globe, BadgePercent, ShieldCheck, Stethoscope, Plane, CreditCard, IndianRupee, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sampleLocalities = ["Sector 18", "Sector 62", "Sector 15", "Sector 44", "Arun Vihar", "DLF Mall"];

/* ─── Generic testimonials shown on every geo page ─── */
const GEO_TESTIMONIALS = [
  {
    name: "Ananya Sharma", age: 28, occupation: "Software Engineer", power: "-4.25",
    procedure: "Contoura Vision",
    quote: "I was nervous about LASIK, but the team explained every step. The procedure took barely 10 minutes and the next morning I could read my phone without glasses. Genuinely life-changing.",
  },
  {
    name: "Rohit Verma", age: 34, occupation: "Marketing Manager", power: "-6.50",
    procedure: "SMILE Pro",
    quote: "After 18 years of glasses, freedom in 24 hours felt unreal. The free 90-minute evaluation was thorough — they confirmed I was a perfect fit for SMILE Pro. Zero pain, zero regrets.",
  },
  {
    name: "Priya Nair", age: 31, occupation: "School Teacher", power: "-3.75",
    procedure: "WaveLight Plus InnovEyes",
    quote: "Pricing was completely transparent and the EMI option made it stress-free. Vision is sharper than I ever had with spectacles. I recommend it to every colleague who asks.",
  },
];

const GeoTestimonialsSection = ({ location }: { location: string }) => (
  <section className="section-padding">
    <div className="container">
      <SectionHeading title={`Patient Stories from ${location}`} subtitle={`Real experiences from local LASIK patients`} />
      <div className="grid md:grid-cols-3 gap-6">
        {GEO_TESTIMONIALS.map((t, idx) => (
          <div key={idx} className="bg-card border border-border rounded-xl p-6 card-elevated">
            <Quote className="w-7 h-7 text-primary/40 mb-3" />
            <p className="text-foreground leading-relaxed text-sm mb-5 italic">"{t.quote}"</p>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <div className="font-display font-bold text-foreground text-sm">{t.name}, {t.age}</div>
                <div className="text-xs text-muted-foreground">{t.occupation} • Power {t.power} • {t.procedure}</div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Generic ~220-word SEO content block, customized by location name ─── */
const GeoContentSection = ({ location, scope = "city" }: { location: string; scope?: "state" | "city" | "locality" | "procedure"; }) => (
  <section className="section-padding bg-surface">
    <div className="container max-w-4xl">
      <SectionHeading title={`About Centre for Lasik — ${location}`} />
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-5">
        <p>
          <strong className="text-foreground">Centre for Lasik</strong> assists people seeking laser vision correction surgery with the right information, hassle-free appointment booking, free LASIK check-ups, and complete end-to-end support — including travel &amp; stay coordination, flexible EMI options, and cashless mediclaim — guiding them to the best laser eye centre nearest to their location{scope !== "procedure" ? ` in ${location}` : ""}.
        </p>
        <p>
          As India's largest digital aggregator for refractive surgery, we have helped over <strong className="text-foreground">10,00,000 patients achieve glasses-free vision since 2004</strong>. Our network spans 50+ premium eye centres across India, offering all six US-FDA approved LASIK technologies — from affordable Standard LASIK to advanced flapless procedures like SMILE Pro and SiLK. Every procedure is performed by refractive surgeons with 20+ years of experience. Our specialists help you pick the right technology based on your corneal thickness, refractive power, lifestyle and budget — not on what is most profitable.
        </p>
        <p>
          We believe transparency builds trust. That is why we offer institutional volume-discount pricing with up to <strong className="text-foreground">30% off walk-in MRP</strong>, and no hidden charges. Every patient receives a complimentary 90-minute pre-surgery evaluation worth ₹4,000+, including Pentacam tomography, corneal topography, wavefront aberrometry, pachymetry, Schirmer dry eye test, and dilated retinal examination.
        </p>
        <p>
          Our care extends beyond the surgery room. Outstation patients receive travel and hotel assistance. Flexible EMI starts from ₹1,500 per month. Cashless mediclaim is processed through our partner centres. Whether you need guidance on candidacy, technology selection, recovery timelines, or insurance coverage — our LASIK specialists are available on call to support you at every step.
        </p>
      </div>
    </div>
  </section>
);

/* ─── USP section shown on every geo page ─── */
const GeoUSPSection = ({ location }: { location: string }) => {
  const usps = [
    { icon: Globe, title: "India's #1 LASIK Platform", desc: "50+ premium centres PAN India. World's largest digital aggregator for laser vision correction." },
    { icon: BadgePercent, title: "Up to 30% Volume Discount", desc: "Institutional pricing through our aggregator model. Same surgeon, same technology — you simply pay less." },
    { icon: ShieldCheck, title: "US-FDA Approved Technologies", desc: "All 6 platforms vetted. 20+ years experienced surgeons. Zero compromise on quality." },
    { icon: Stethoscope, title: "Free ₹4,000+ Evaluation", desc: "90-minute pre-op check-up including Pentacam, topography, aberrometry & retinal exam." },
    { icon: Plane, title: "Travel & Stay Assistance", desc: "Outstation patients get hotel & travel support. We handle logistics so you focus on vision." },
    { icon: CreditCard, title: "EMI & Cashless Mediclaim", desc: "EMI from ₹1,500/month. Cashless insurance processing at partner centres." },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading title={`Why Patients in ${location} Choose Centre for Lasik`} subtitle="India's most trusted LASIK aggregator" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {usps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 card-elevated"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


/**
 * Build the hero H1. If the geo slug already contains a procedure phrase
 * (e.g. "Contoura Vision Laser Eye Surgery In Motihari"), prefix with
 * "Lasik & " instead of the redundant "LASIK Eye Surgery in".
 */
const buildGeoHeading = (name: string, suffix?: string): string => {
  // Case A: slug already contains "Laser Eye Surgery In <Location>"
  // → "Lasik & <name>"  (e.g. "Lasik & Contoura Vision Laser Eye Surgery In Motihari")
  if (/laser eye surgery in/i.test(name)) {
    return `Lasik & ${name}`;
  }
  // Case B: slug contains "Laser Eye Surgery" but missing the "in" connector
  // (e.g. "Epi Innoveyes Laser Eye Surgery Seoni Malwa")
  // → "<Procedure> Laser Eye Surgery in <Location>"
  const m = name.match(/^(.*?)\s*laser eye surgery\s+(.+)$/i);
  if (m) {
    const procedure = m[1].trim();
    const location = m[2].trim();
    return `${procedure} Laser Eye Surgery in ${location}`;
  }
  const full = suffix ? `${name}, ${suffix}` : name;
  return `LASIK Eye Surgery in ${full}`;
};

const StateHubPage = () => {
  const params = useParams();
  const state = params.state || params.slug;
  const stateName = state?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "State";
  const cities = TOP_CITIES.filter(c => slugify(c.state) === state).length > 0
    ? TOP_CITIES.filter(c => slugify(c.state) === state)
    : [{ name: "City 1", state: stateName, slug: "city-1" }, { name: "City 2", state: stateName, slug: "city-2" }];

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-primary-foreground/60 text-sm mb-4">
              <Link to="/" className="hover:text-primary-foreground">Home</Link>
              <ChevronRight className="w-3 h-3 inline mx-1" />
              <span className="text-primary-foreground">{stateName}</span>
            </nav>
            <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">{buildGeoHeading(stateName)}</h1>
            <p className="text-primary-foreground/80">Best LASIK centres in {stateName}. Contoura Vision from ₹25,500/eye. 30% off. Book free consultation.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading title={`Procedures Available in ${stateName}`} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PROCEDURES.map((p, i) => <ProcedureCard key={p.id} procedure={p} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container">
          <SectionHeading title={`Cities We Serve in ${stateName}`} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {cities.map((city, i) => (
              <Link key={city.slug} to={`/${state}/${city.slug}`} className="bg-card border border-border rounded-xl p-4 text-center card-elevated group">
                <MapPin className="w-5 h-5 mx-auto mb-2 text-primary" />
                <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{city.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GeoContentSection location={stateName} scope="state" />
      <GeoUSPSection location={stateName} />
      <GeoTestimonialsSection location={stateName} />

      <section className="section-padding">
        <div className="container max-w-2xl">
          <SectionHeading title={`Book Free Consultation in ${stateName}`} subtitle="Our LASIK specialist will call you within 30 minutes" />
          <ConsultationForm variant="section" />
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

const CityHubPage = () => {
  const { state, city } = useParams();
  const data = getCityData(city);
  const cityName = data?.name || city?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "City";
  const stateName = data?.state || state?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "State";

  // Fallback for unmapped cities — minimal generic content
  if (!data) {
    return (
      <Layout>
        <section className="hero-gradient section-padding">
          <div className="container text-center max-w-3xl">
            <nav className="text-primary-foreground/60 text-sm mb-4">
              <Link to="/" className="hover:text-primary-foreground">Home</Link>
              <ChevronRight className="w-3 h-3 inline mx-1" />
              <Link to={`/${state}`} className="hover:text-primary-foreground">{stateName}</Link>
              <ChevronRight className="w-3 h-3 inline mx-1" />
              <span className="text-primary-foreground">{cityName}</span>
            </nav>
            <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">{buildGeoHeading(cityName)}</h1>
            <p className="text-primary-foreground/80">All 6 FDA-approved LASIK procedures available. Book a free consultation.</p>
          </div>
        </section>
        <section className="section-padding">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROCEDURES.map((p, i) => <ProcedureCard key={p.id} procedure={p} index={i} />)}
            </div>
          </div>
        </section>
        <GeoContentSection location={cityName} scope="city" />
        <GeoUSPSection location={cityName} />
        <GeoTestimonialsSection location={cityName} />
        <section className="section-padding bg-surface">
          <div className="container max-w-2xl">
            <SectionHeading title={`Book Free Consultation in ${cityName}`} subtitle="Our LASIK specialist will call you within 30 minutes" />
            <ConsultationForm variant="section" />
          </div>
        </section>
        <CTABanner />
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <nav className="text-primary-foreground/60 text-sm mb-4">
                <Link to="/" className="hover:text-primary-foreground">Home</Link>
                <ChevronRight className="w-3 h-3 inline mx-1" />
                <Link to={`/${state}`} className="hover:text-primary-foreground">{stateName}</Link>
                <ChevronRight className="w-3 h-3 inline mx-1" />
                <span className="text-primary-foreground">{cityName}</span>
              </nav>
              <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-3">
                {buildGeoHeading(cityName)}
              </h1>
              <p className="text-primary-foreground/85 mb-4">
                {data.population} • {data.youthShare} aged 18–40 • {data.spectacleShare} of young adults wear glasses
              </p>
              <p className="text-primary-foreground/75 text-sm">
                Standard LASIK from ₹{data.pricing[0].price.toLocaleString("en-IN")}/eye • SMILE Pro from ₹{data.pricing[4].price.toLocaleString("en-IN")}/eye • 30% off MRP at top {cityName} hospitals.
              </p>
            </motion.div>
            <ConsultationForm variant="hero" />
          </div>
        </div>
      </section>

      {/* All Procedures (moved just below banner) */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading title={`All LASIK Procedures Available in ${cityName}`} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCEDURES.map((p, i) => <ProcedureCard key={p.id} procedure={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Demography & background (moved below procedures) */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionHeading title={`About ${cityName} & Vision Health`} subtitle="Why LASIK demand is rising fast in this city" />
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <Users className="w-6 h-6 mx-auto text-primary mb-2" />
              <div className="font-display font-black text-2xl text-foreground">{data.population}</div>
              <div className="text-xs text-muted-foreground mt-1">Population</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <Users className="w-6 h-6 mx-auto text-accent mb-2" />
              <div className="font-display font-black text-2xl text-foreground">{data.youthShare}</div>
              <div className="text-xs text-muted-foreground mt-1">Aged 18–40</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <Eye className="w-6 h-6 mx-auto text-primary mb-2" />
              <div className="font-display font-black text-2xl text-foreground">{data.spectacleShare}</div>
              <div className="text-xs text-muted-foreground mt-1">18–40 wearing spectacles</div>
            </div>
          </div>
          {(() => {
            // Split the background paragraph into readable chunks for better scannability
            const sentences = data.background.split(/(?<=\.)\s+/).filter(Boolean);
            const third = Math.ceil(sentences.length / 3);
            const para1 = sentences.slice(0, third).join(" ");
            const para2 = sentences.slice(third, third * 2).join(" ");
            const para3 = sentences.slice(third * 2).join(" ");
            const lo = data.pricing[0].price.toLocaleString("en-IN");
            const hi = data.pricing[5].price.toLocaleString("en-IN");
            const procedures = ["Standard LASIK", "Contoura Vision", "WaveLight Plus InnovEyes", "EPI LASIK", "SMILE Pro", "SiLK"];
            return (
              <div className="max-w-3xl mx-auto space-y-6">
                <article className="bg-card border border-border rounded-2xl p-6 md:p-8 card-elevated">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Local LASIK Overview</span>
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4 leading-snug">
                    LASIK Eye Surgery in {cityName} — {data.state}
                  </h3>
                  <div className="space-y-4 text-muted-foreground text-[15px] leading-relaxed">
                    {para1 && <p>{para1}</p>}
                    {para2 && <p>{para2}</p>}
                    {para3 && <p>{para3}</p>}
                  </div>

                  {/* Price callout */}
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IndianRupee className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold">Cost in {cityName}</div>
                        <div className="font-display font-black text-foreground">₹{lo} – ₹{hi} <span className="text-xs font-medium text-muted-foreground">/eye</span></div>
                      </div>
                    </div>
                    <div className="bg-accent/5 border border-accent/15 rounded-xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold">Free Evaluation</div>
                        <div className="font-display font-black text-foreground">90-min Pentacam <span className="text-xs font-medium text-muted-foreground">worth ₹4,000</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Procedure pills */}
                  <div className="mt-6">
                    <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold mb-3">All 6 FDA-Approved Procedures Available</div>
                    <div className="flex flex-wrap gap-2">
                      {procedures.map((p) => (
                        <span key={p} className="inline-flex items-center gap-1.5 text-xs font-medium bg-muted text-foreground px-3 py-1.5 rounded-full border border-border">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Top 3 Hospitals */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionHeading title={`Top 3 Eye Hospitals in ${cityName}`} subtitle="Accredited partner centres in our network" />
          <div className="grid md:grid-cols-3 gap-5">
            {data.hospitals.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 card-elevated"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-xs uppercase tracking-wide font-semibold text-muted-foreground">#{i + 1}</span>
                </div>
                <h3 className="font-display font-bold text-foreground mb-1 leading-snug">{h.name}</h3>
                <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {h.area}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* City-specific Pricing */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading title={`LASIK Cost in ${cityName}`} subtitle="All-inclusive per-eye pricing — 30% off walk-in MRP" />
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-surface text-foreground">
                <tr>
                  <th className="text-left px-4 py-3 font-display font-semibold">Procedure</th>
                  <th className="text-right px-4 py-3 font-display font-semibold">MRP (per eye)</th>
                  <th className="text-right px-4 py-3 font-display font-semibold">Our Price (per eye)</th>
                  <th className="text-right px-4 py-3 font-display font-semibold hidden sm:table-cell">You Save (per eye)</th>
                </tr>
              </thead>
              <tbody>
                {data.pricing.map((p) => (
                  <tr key={p.procedureSlug} className="border-t border-border">
                    <td className="px-4 py-3 font-medium text-foreground">{p.procedureName}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground line-through">₹{p.mrp.toLocaleString("en-IN")}</td>
                    <td className="px-4 py-3 text-right font-display font-bold text-primary">₹{p.price.toLocaleString("en-IN")}</td>
                    <td className="px-4 py-3 text-right text-accent font-semibold hidden sm:table-cell">₹{(p.mrp - p.price).toLocaleString("en-IN")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <GeoContentSection location={cityName} scope="city" />
      <GeoUSPSection location={cityName} />

      {/* City Testimonials */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading title={`Patient Stories from ${cityName}`} subtitle={`Real outcomes from local ${cityName} LASIK patients`} />
          <div className="grid md:grid-cols-2 gap-6">
            {data.testimonials.map((t, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8 card-elevated">
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <p className="text-foreground leading-relaxed text-base mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <div className="font-display font-bold text-foreground">{t.name}, {t.age}</div>
                    <div className="text-xs text-muted-foreground">{t.occupation} • Power {t.power} • {t.procedure}</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City FAQs */}
      <section className="section-padding bg-surface">
        <div className="container max-w-3xl">
          <SectionHeading title={`LASIK in ${cityName} — FAQs`} subtitle="City-specific questions answered" />
          <Accordion type="single" collapsible className="space-y-3">
            {data.faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-4 text-sm">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

const LocalityHubPage = ({ paramsOverride }: { paramsOverride?: { state: string; city: string; locality: string } } = {}) => {
  const params = useParams();
  const state = paramsOverride?.state ?? params.state;
  const city = paramsOverride?.city ?? params.city;
  const locality = paramsOverride?.locality ?? params.locality;
  const localityName = locality?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "Locality";
  const cityName = city ? city.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") : "";
  const stateName = state ? state.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") : "";

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-primary-foreground/60 text-sm mb-4">
              <Link to="/" className="hover:text-primary-foreground">Home</Link>
              <ChevronRight className="w-3 h-3 inline mx-1" />
              {stateName && (
                <>
                  <Link to={`/${state}`} className="hover:text-primary-foreground">{stateName}</Link>
                  <ChevronRight className="w-3 h-3 inline mx-1" />
                </>
              )}
              {cityName && cityName !== stateName && (
                <>
                  <Link to={`/${state}/${city}`} className="hover:text-primary-foreground">{cityName}</Link>
                  <ChevronRight className="w-3 h-3 inline mx-1" />
                </>
              )}
              <span className="text-primary-foreground">{localityName}</span>
            </nav>
            <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">{buildGeoHeading(localityName, cityName || undefined)}</h1>
            <p className="text-primary-foreground/80">All 6 procedure types from ₹25,500/eye. 30% off this month. Book your free consultation today.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading title={`Procedures Available in ${localityName}`} subtitle="Click any procedure for detailed pricing and information" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PROCEDURES.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={state && city ? `/${state}/${city}/${locality}/${p.slug}` : `/${locality}/${p.slug}`} className="block bg-card rounded-xl border border-border p-6 card-elevated group">
                  <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{p.tagline}</p>
                  <span className="font-display font-bold text-primary">{`₹${p.price.toLocaleString("en-IN")}`}/eye</span>
                  <span className="discount-badge ml-2">30% OFF</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <GeoContentSection location={localityName} scope="locality" />
      <GeoUSPSection location={localityName} />
      <GeoTestimonialsSection location={localityName} />
      <section className="section-padding bg-surface">
        <div className="container max-w-2xl">
          <SectionHeading title={`Book Free Consultation in ${localityName}`} subtitle="Our LASIK specialist will call you within 30 minutes" />
          <ConsultationForm variant="section" />
        </div>
      </section>
      <CTABanner />
    </Layout>
  );
};

const ProcedureCityPage = () => {
  const { state, city, locality, procedure: procSlug } = useParams();
  const procedure = PROCEDURES.find(p => p.slug === procSlug) || PROCEDURES[0];
  const localityName = locality?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "Locality";
  const cityName = city?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "City";
  const stateName = state?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "State";

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-primary-foreground/60 text-sm mb-4">
              <Link to="/" className="hover:text-primary-foreground">Home</Link>
              <ChevronRight className="w-3 h-3 inline mx-1" />
              <Link to={`/${state}`} className="hover:text-primary-foreground">{stateName}</Link>
              <ChevronRight className="w-3 h-3 inline mx-1" />
              <Link to={`/${state}/${city}`} className="hover:text-primary-foreground">{cityName}</Link>
              <ChevronRight className="w-3 h-3 inline mx-1" />
              <Link to={`/${state}/${city}/${locality}`} className="hover:text-primary-foreground">{localityName}</Link>
              <ChevronRight className="w-3 h-3 inline mx-1" />
              <span className="text-primary-foreground">{procedure.name}</span>
            </nav>
            <span className="discount-badge mb-3 inline-block">30% OFF</span>
            <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">{procedure.name} Eye Surgery in {localityName}, {cityName}</h1>
            <p className="text-primary-foreground/80 mb-4">{procedure.tagline}</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="text-primary-foreground line-through text-sm">{`₹${procedure.price.toLocaleString("en-IN")}`}/eye</span>
              <span className="font-display font-black text-2xl text-primary-foreground">{`₹${discountedPrice(procedure.price).toLocaleString("en-IN")}`}/eye</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-foreground mb-4">About {procedure.name}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{procedure.description}</p>

          <h2 className="font-display font-bold text-2xl text-foreground mb-4">Cost of {procedure.name} in {cityName}</h2>
          <div className="bg-card border border-border rounded-xl p-6 text-center mb-8">
            <p className="text-muted-foreground line-through">{`₹${procedure.price.toLocaleString("en-IN")}`}/eye</p>
            <p className="font-display font-black text-3xl text-primary my-2">{`₹${discountedPrice(procedure.price).toLocaleString("en-IN")}`}/eye</p>
            <p className="text-sm text-muted-foreground">Both eyes: ₹{(discountedPrice(procedure.price) * 2).toLocaleString("en-IN")}</p>
            <Button asChild className="mt-4 cta-gradient border-0 text-primary-foreground">
              <Link to="/am-i-a-candidate">Book Free Consultation</Link>
            </Button>
          </div>

          <h2 className="font-display font-bold text-2xl text-foreground mb-4">Other LASIK Options in {localityName}</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {PROCEDURES.filter(p => p.slug !== procedure.slug).map(p => (
              <Link key={p.slug} to={`/${state}/${city}/${locality}/${p.slug}`} className="bg-card border border-border rounded-xl p-4 card-elevated group">
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary text-sm">{p.name}</h3>
                <span className="text-xs text-muted-foreground">From ₹{discountedPrice(p.price).toLocaleString("en-IN")}/eye</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <GeoContentSection location={`${procedure.name}, ${localityName}`} scope="procedure" />
      <GeoUSPSection location={localityName} />
      <GeoTestimonialsSection location={localityName} />
      <section className="section-padding bg-surface">
        <div className="container max-w-2xl">
          <SectionHeading title={`Book Free ${procedure.name} Consultation`} subtitle="Our LASIK specialist will call you within 30 minutes" />
          <ConsultationForm variant="section" />
        </div>
      </section>
      <CTABanner />
    </Layout>
  );
};

export { StateHubPage, CityHubPage, LocalityHubPage, ProcedureCityPage };
