import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { BRAND, TESTIMONIALS } from "@/data/siteData";
import { motion } from "framer-motion";
import { Eye, Award, MapPin, Shield, Star, Users, Clock, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "1,200+", label: "Happy Patients" },
  { icon: MapPin, value: "26", label: "Centres Nationwide" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Zap, value: "99%+", label: "Success Rate" },
];

const reasons = [
  { icon: Eye, title: "Latest FDA-Approved Technology", desc: "We use only the most advanced, FDA-approved laser platforms including Carl Zeiss VisuMax 800, WaveLight EX500, and Johnson & Johnson's elita system." },
  { icon: Award, title: "Expert Ophthalmologists", desc: "Every surgery is performed by a board-certified ophthalmologist with extensive LASIK experience and thousands of successful procedures." },
  { icon: Shield, title: "Comprehensive Pre-Screening", desc: "We conduct over 20 diagnostic tests before approving any patient for surgery, ensuring the safest possible outcome." },
  { icon: MapPin, title: "26 Convenient Locations", desc: "With centres across India's major cities, world-class LASIK is never far away. Same quality standards at every location." },
];

const WhyUsPage = () => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container text-center max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">Why Choose {BRAND.name}?</h1>
          <p className="text-primary-foreground/80 text-lg">India's most trusted LASIK surgery platform with the latest technology, expert surgeons, and affordable pricing.</p>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding bg-surface">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center">
              <div className="w-14 h-14 rounded-xl cta-gradient flex items-center justify-center mx-auto mb-3">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="font-display font-black text-3xl text-foreground">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Reasons */}
    <section className="section-padding">
      <div className="container max-w-4xl">
        <SectionHeading title="What Sets Us Apart" />
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-surface">
      <div className="container max-w-4xl">
        <SectionHeading title="What Our Patients Say" />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 card-elevated">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4">"{t.text}"</p>
              <p className="text-sm font-medium text-foreground">{t.name}, {t.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default WhyUsPage;
