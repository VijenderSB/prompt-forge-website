import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ConsultationForm from "@/components/ConsultationForm";
import { motion } from "framer-motion";
import { Zap, Shield, Clock, TrendingUp, Eye, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const benefits = [
  { icon: Eye, title: "Freedom from Glasses", description: "Over 95% of LASIK patients achieve 6/6 vision or better, eliminating the need for glasses or contact lenses." },
  { icon: Zap, title: "Quick & Painless", description: "The laser treatment takes only 7–60 seconds per eye. Total procedure time is under 15 minutes. Zero pain with numbing drops." },
  { icon: Clock, title: "Rapid Recovery", description: "Most patients return to work within 1–2 days. Vision improves within hours of the procedure." },
  { icon: TrendingUp, title: "Permanent Results", description: "LASIK permanently reshapes the cornea. The correction is lifelong — over 95% of patients maintain stable vision for decades." },
  { icon: Shield, title: "Proven Safety Record", description: "Over 40 million LASIK procedures performed worldwide since 1999. US-FDA approved with a 96% patient satisfaction rate." },
  { icon: CheckCircle, title: "Cost-Effective Long Term", description: "Eliminates recurring costs of glasses, lenses, and solutions. LASIK pays for itself within 2–3 years." },
];

const steps = [
  { step: 1, title: "Free Consultation & Diagnostics", description: "A comprehensive 90-minute evaluation including Pentacam corneal scan, wavefront aberrometry, Schirmer dry eye test, and dilated retinal exam. Your surgeon reviews all data to recommend the best procedure.", duration: "90 minutes" },
  { step: 2, title: "Pre-Op Preparation", description: "Stop contact lenses 3–7 days before surgery. On surgery day, numbing drops are applied. The entire preparation takes about 10 minutes.", duration: "10 minutes" },
  { step: 3, title: "The LASIK Procedure", description: "For flap-based: a thin flap is created, the excimer laser reshapes the stroma, and the flap is repositioned. For flapless (SMILE/SiLK): a lenticule is extracted through a tiny incision. The laser itself takes 7–60 seconds.", duration: "7–60 sec laser" },
  { step: 4, title: "Immediate Post-Op", description: "Rest for 30 minutes in the recovery area. Your surgeon checks the eye. You go home with protective eye shields and medicated drops. Vision begins improving within hours.", duration: "30 minutes" },
  { step: 5, title: "Recovery & Follow-Up", description: "Day 1 check-up, then 1 week, 1 month, 3 months, and 6 months. Most patients achieve full vision stability by month 3. Free follow-ups included in all packages.", duration: "3–6 months" },
];

const WhatIsLasikPage = () => (
  <Layout>
      <SEO
        title="What is LASIK Eye Surgery? Procedure, Safety & Results"
        description="LASIK is FDA-approved laser vision correction with 99.5% success rate. 15-minute procedure, 24-hour recovery. Complete patient guide for India 2026."
        path="/what-is-lasik"
      />
    <section className="section-padding">
      <div className="container max-w-5xl">
        <SectionHeading
          title="What Is LASIK & Why Get It?"
          subtitle="LASIK (Laser-Assisted In Situ Keratomileusis) is the world's most popular vision correction surgery. Here's everything you need to know."
        />

        {/* What is LASIK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-8 mb-12"
        >
          <h3 className="font-display font-bold text-xl text-foreground mb-4">What Happens During LASIK?</h3>
          <p className="text-muted-foreground mb-4">
            LASIK uses a precise excimer laser to permanently reshape the cornea — the clear front surface of your eye — so that light focuses correctly on the retina. This eliminates the need for glasses or contact lenses to see clearly.
          </p>
          <p className="text-muted-foreground">
            The procedure corrects <strong className="text-foreground">myopia</strong> (short-sightedness), <strong className="text-foreground">hyperopia</strong> (far-sightedness), and <strong className="text-foreground">astigmatism</strong> (cylindrical power). Modern LASIK technologies can treat prescriptions from –0.5D to –12D and astigmatism up to 6D.
          </p>
        </motion.div>

        {/* Benefits */}
        <SectionHeading title="Why Get LASIK?" subtitle="6 reasons why over 40 million people worldwide have chosen LASIK" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-2">{b.title}</h4>
              <p className="text-muted-foreground text-sm">{b.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Step by step */}
        <SectionHeading title="The LASIK Journey — Step by Step" subtitle="From your first consultation to perfect vision in 5 simple steps" />
        <div className="space-y-4 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center gap-4 sm:w-12 shrink-0">
                <span className="w-10 h-10 rounded-full cta-gradient text-primary-foreground font-bold text-sm flex items-center justify-center">{s.step}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-display font-bold text-foreground">{s.title}</h4>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">{s.duration}</span>
                </div>
                <p className="text-muted-foreground text-sm">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global stats */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
          <h3 className="font-display font-bold text-xl text-foreground mb-4 text-center">LASIK by the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "40M+", label: "Procedures Worldwide" },
              { value: "96%", label: "Patient Satisfaction" },
              { value: "25+ Years", label: "Proven Track Record" },
              { value: "< 1%", label: "Complication Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-2xl text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <ConsultationForm variant="section" />
        </div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default WhatIsLasikPage;
