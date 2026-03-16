import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import StatsBar from "@/components/StatsBar";
import { BRAND, TESTIMONIALS } from "@/data/siteData";
import { motion } from "framer-motion";
import { Eye, Award, MapPin, Shield, Star, Stethoscope, Heart, Zap } from "lucide-react";

const reasons = [
  { icon: Zap, title: "WaveLight Plus InnovEyes", desc: "AI-guided laser with PerfectPulse Technology® — 400 Hz speed, 1,050 eye-tracking points per second for sub-micron precision." },
  { icon: Eye, title: "SMILE Pro & SiLK", desc: "Flapless lenticule surgery — no corneal flap, 2mm incision, minimal dry eye. Ideal for active lifestyles and contact sports." },
  { icon: Shield, title: "US-FDA Approved", desc: "All platforms are US-FDA approved. Over 10,00,000 procedures performed since 2004 with 97% satisfaction rate." },
  { icon: Award, title: "Expert Surgeons", desc: "Refractive surgeons with 20+ years of experience across all flap-based and lenticule-based technologies." },
  { icon: Stethoscope, title: "Free 90-Min Evaluation", desc: "Pentacam, Topography, Aberrometry, Pachymetry — full diagnostic before any commitment, at no cost." },
  { icon: Heart, title: "Painless & Quick", desc: "Just 10 minutes per eye with zero pain. Both eyes same day. Walk in with glasses, walk out without." },
];

const WhyUsPage = () => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container text-center max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">Why Choose {BRAND.name}?</h1>
          <p className="text-primary-foreground/80 text-lg">India's most trusted LASIK surgery platform with the latest technology, expert surgeons, and transparent pricing.</p>
        </motion.div>
      </div>
    </section>

    <StatsBar />

    <section className="section-padding">
      <div className="container max-w-5xl">
        <SectionHeading title="What Sets Us Apart" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 card-elevated">
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

    <section className="section-padding bg-surface">
      <div className="container max-w-5xl">
        <SectionHeading title="What Our Patients Say" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 card-elevated">
              <div className="text-3xl text-primary/30 font-serif mb-2">"</div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full cta-gradient flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city} • Age {t.age}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner withForm />
  </Layout>
);

export default WhyUsPage;
