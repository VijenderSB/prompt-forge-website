import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ProcedureCard from "@/components/ProcedureCard";
import { PROCEDURES, CENTRES } from "@/data/siteData";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CentreDetailPage = () => {
  const { slug } = useParams();
  const centre = CENTRES.find(c => c.slug === slug) || CENTRES[0];

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">{centre.name}</h1>
            <p className="text-primary-foreground/80">Partner Hospital: {centre.hospital}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Info */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-display font-bold text-foreground mb-4">Centre Information</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2"><MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" />{centre.address}</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0 text-primary" /><a href={`tel:${centre.phone}`} className="hover:text-primary">{centre.phone}</a></p>
                <p className="flex items-center gap-2"><Clock className="w-4 h-4 shrink-0 text-primary" />Mon–Sat, 9:00 AM – 7:00 PM</p>
                <p className="flex items-center gap-2"><Navigation className="w-4 h-4 shrink-0 text-primary" />{centre.city}, {centre.state}</p>
              </div>
              <Button asChild className="w-full mt-6 cta-gradient border-0 text-primary-foreground">
                <a href={`tel:${centre.phone}`}>Call to Book Appointment</a>
              </Button>
            </div>

            {/* Map placeholder */}
            <div className="bg-muted rounded-xl flex items-center justify-center min-h-[300px] border border-border">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm">Google Maps integration</p>
                <p className="text-xs">Lat: {centre.lat}, Lng: {centre.lng}</p>
              </div>
            </div>
          </div>

          <SectionHeading title="Procedures Available at This Centre" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCEDURES.map((p, i) => <ProcedureCard key={p.id} procedure={p} index={i} />)}
          </div>
        </div>
      </section>
      <CTABanner />
    </Layout>
  );
};

export default CentreDetailPage;
