import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { CENTRES } from "@/data/siteData";
import { MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CentresPage = () => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container text-center max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">LASIK Eye Surgery Centres Across India</h1>
          <p className="text-primary-foreground/80 text-lg">26 state-of-the-art facilities. Same world-class quality at every location.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6">
          {CENTRES.map((c, i) => (
            <motion.div key={c.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link to={`/centres/${c.slug}`} className="block bg-card border border-border rounded-xl p-6 card-elevated group h-full">
                <h2 className="font-display font-bold text-foreground group-hover:text-primary transition-colors mb-1">{c.name}</h2>
                <p className="text-xs text-muted-foreground mb-3">Partner: {c.hospital}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2"><MapPin className="w-4 h-4 shrink-0 mt-0.5" />{c.address}</p>
                  <p className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" />{c.phone}</p>
                  <p className="flex items-center gap-2"><Clock className="w-4 h-4 shrink-0" />Mon–Sat, 9:00 AM – 7:00 PM</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default CentresPage;
