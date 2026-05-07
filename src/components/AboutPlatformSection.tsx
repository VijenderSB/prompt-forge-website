import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Globe, BadgePercent, ShieldCheck, Stethoscope, Plane, CreditCard } from "lucide-react";

const usps = [
  { icon: Globe, title: "India's #1 LASIK Platform", desc: "50+ premium centres PAN India. World's largest digital aggregator for laser vision correction." },
  { icon: BadgePercent, title: "Up to 30% Volume Discount", desc: "Institutional pricing through our aggregator model. Same surgeon, same technology — you simply pay less." },
  { icon: ShieldCheck, title: "US-FDA Approved Technologies", desc: "All 6 platforms vetted. 20+ years experienced surgeons. Zero compromise on quality." },
  { icon: Stethoscope, title: "Free ₹4,000+ Evaluation", desc: "90-minute pre-op check-up including Pentacam, topography, aberrometry & retinal exam." },
  { icon: Plane, title: "Travel & Stay Assistance", desc: "Outstation patients get hotel & travel support. We handle logistics so you focus on vision." },
  { icon: CreditCard, title: "EMI & Cashless Mediclaim", desc: "EMI from ₹1,500/month. Cashless insurance processing at partner centres." },
];

export const AboutPlatformSection = () => (
  <>
    <section className="section-padding bg-surface">
      <div className="container max-w-4xl">
        <SectionHeading title="About Centre for Lasik" />
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-5">
          <p>
            <strong className="text-foreground">Centre for Lasik</strong> assists people seeking laser vision correction surgery with the right information, hassle-free appointment booking, free LASIK check-ups, and complete end-to-end support — including travel &amp; stay coordination, flexible EMI options, and cashless mediclaim — guiding them to the best laser eye centre nearest to their location.
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

    <section className="section-padding">
      <div className="container">
        <SectionHeading title="Why Patients Choose Centre for Lasik" subtitle="India's most trusted LASIK aggregator" />
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
  </>
);

export default AboutPlatformSection;
