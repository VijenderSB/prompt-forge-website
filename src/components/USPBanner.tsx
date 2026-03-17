import { Link } from "react-router-dom";
import { Globe, BadgePercent, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface USPBannerProps {
  /** "compact" = slim strip for all pages; "full" = detailed block for homepage/key pages */
  variant?: "compact" | "full";
}

const USPBanner = ({ variant = "compact" }: USPBannerProps) => {
  if (variant === "full") {
    return (
      <section className="section-padding bg-surface border-y border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">India's #1 LASIK Platform</span>
            <h2 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
              The Smartest Way to Get Laser Vision Correction
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Think of us as your <strong className="text-foreground">VIP pass to premium LASIK surgery</strong>. Centre for Lasik is the world's largest digital aggregator for laser eye surgery — connecting you with top surgeons and FDA-approved technology at <strong className="text-foreground">exclusive volume-discounted rates</strong> across 50+ centres nationwide.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {[
              {
                icon: Globe,
                title: "World's Largest Platform",
                desc: "India's only digital aggregator for laser vision correction — 50+ premium centres, 6 FDA-approved technologies, PAN India.",
              },
              {
                icon: BadgePercent,
                title: "VIP Volume-Discount Rates",
                desc: "Our patient volume unlocks institutional pricing at top centres. Same surgeon, same technology — up to 30% less than walk-in MRP.",
              },
              {
                icon: ShieldCheck,
                title: "Zero Compromise on Quality",
                desc: "Every centre is vetted. Every surgeon has 20+ years experience. Every platform is US-FDA approved. You just pay less.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 text-center card-elevated"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/why-us"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Learn how our aggregator model saves you up to 30% <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Compact strip
  return (
    <div className="bg-primary/5 border-y border-primary/10">
      <div className="container py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm">
        <span className="font-bold text-primary uppercase tracking-wide">India's #1 LASIK Platform</span>
        <span className="hidden sm:inline text-border">|</span>
        <span className="text-muted-foreground flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-primary" />
          50+ centres PAN India
        </span>
        <span className="hidden sm:inline text-border">|</span>
        <span className="text-muted-foreground flex items-center gap-1.5">
          <BadgePercent className="w-3.5 h-3.5 text-primary" />
          VIP volume-discount rates — up to 30% off
        </span>
        <Link to="/why-us" className="text-primary font-semibold hover:underline flex items-center gap-1">
          Why us <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

export default USPBanner;
