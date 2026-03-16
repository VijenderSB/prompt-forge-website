import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ProcedureCard from "@/components/ProcedureCard";
import { PROCEDURES, TOP_CITIES, slugify, discountedPrice } from "@/data/siteData";
import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleLocalities = ["Sector 18", "Sector 62", "Sector 15", "Sector 44", "Arun Vihar", "DLF Mall"];

const StateHubPage = () => {
  const { state } = useParams();
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
              <span className="text-primary-foreground">{cityName}</span>
            </nav>
            <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">LASIK Eye Surgery in {cityName}</h1>
            <p className="text-primary-foreground/80">Best LASIK in {cityName}: Contoura Vision ₹25,500 | ReLEx SMILE ₹40,000 | InnovEyes ₹49,000. 30% off.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading title={`All LASIK Procedures in ${cityName}`} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PROCEDURES.map((p, i) => <ProcedureCard key={p.id} procedure={p} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container">
          <SectionHeading title={`Areas & Localities in ${cityName} We Cover`} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {sampleLocalities.map((loc) => (
              <Link key={loc} to={`/${state}/${city}/${slugify(loc)}`} className="bg-card border border-border rounded-lg px-3 py-2.5 text-sm text-center font-medium text-foreground hover:border-primary hover:text-primary transition-colors">
                {loc}
              </Link>
            ))}
          </div>
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
