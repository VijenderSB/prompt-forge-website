import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ProcedureCard from "@/components/ProcedureCard";
import ConsultationForm from "@/components/ConsultationForm";
import { PROCEDURES, TOP_CITIES, slugify, discountedPrice } from "@/data/siteData";
import { getCityData } from "@/data/cityData";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, Building2, Users, Eye, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sampleLocalities = ["Sector 18", "Sector 62", "Sector 15", "Sector 44", "Arun Vihar", "DLF Mall"];

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
            <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">LASIK Eye Surgery in {stateName}</h1>
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
            <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">LASIK Eye Surgery in {cityName}</h1>
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
                LASIK Eye Surgery in {cityName}
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
          <div className="bg-card border border-border rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-sm">{data.background}</p>
          </div>
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

const LocalityHubPage = () => {
  const { state, city, locality } = useParams();
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
              <span className="text-primary-foreground">{localityName}</span>
            </nav>
            <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">LASIK Eye Surgery in {localityName}, {cityName}</h1>
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
                <Link to={`/${state}/${city}/${locality}/${p.slug}`} className="block bg-card rounded-xl border border-border p-6 card-elevated group">
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
      <CTABanner />
    </Layout>
  );
};

export { StateHubPage, CityHubPage, LocalityHubPage, ProcedureCityPage };
