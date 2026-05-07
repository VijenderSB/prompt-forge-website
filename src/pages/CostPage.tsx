import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import AboutPlatformSection from "@/components/AboutPlatformSection";
import { PROCEDURES, formatPrice } from "@/data/siteData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const CostPage = () => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container text-center max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">LASIK Eye Surgery Cost in India 2026</h1>
          <p className="text-primary-foreground/80 text-lg">Transparent pricing. No hidden charges. EMI from ₹1,500/month.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container">
        {/* Main price table */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left p-4 font-display font-semibold text-foreground">Procedure</th>
                    <th className="p-4 font-display font-semibold text-foreground text-center">Original Price</th>
                    <th className="p-4 font-display font-semibold text-foreground text-center">Discounted Price</th>
                    <th className="p-4 font-display font-semibold text-foreground text-center">Both Eyes</th>
                    <th className="p-4 font-display font-semibold text-foreground text-center">Type</th>
                    <th className="p-4 font-display font-semibold text-foreground text-center">Recovery</th>
                  </tr>
                </thead>
                <tbody>
                  {PROCEDURES.map((p) => (
                    <tr key={p.id} className="border-t border-border hover:bg-muted/50 transition-colors">
                      <td className="p-4">
                        <Link to={`/procedures/${p.slug}`} className="font-medium text-primary hover:underline">{p.name}</Link>
                        {p.badge && <span className="ml-2 text-[10px] bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full font-bold">{p.badge}</span>}
                        <p className="text-xs text-muted-foreground mt-0.5">{p.tagline}</p>
                      </td>
                      <td className="p-4 text-center text-muted-foreground line-through">{formatPrice(p.originalPrice)}</td>
                      <td className="p-4 text-center font-bold text-primary">{formatPrice(p.price)}/eye</td>
                      <td className="p-4 text-center font-bold text-foreground">{formatPrice(p.price * 2)}</td>
                      <td className="p-4 text-center">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${p.flapless ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>
                          {p.flapless ? "Flapless" : "Flap-based"}
                        </span>
                      </td>
                      <td className="p-4 text-center text-muted-foreground">{p.recovery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* EMI Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <SectionHeading title="EMI Options Available" subtitle="Make LASIK affordable with easy monthly instalments" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { months: 6, label: "6 Month EMI" },
              { months: 12, label: "12 Month EMI" },
              { months: 24, label: "24 Month EMI" },
            ].map((emi) => (
              <div key={emi.months} className="bg-card border border-border rounded-xl p-6 text-center card-elevated">
                <h3 className="font-display font-bold text-foreground mb-2">{emi.label}</h3>
                <p className="text-2xl font-display font-bold text-primary">
                  {formatPrice(Math.round(25500 * 2 / emi.months))}/mo
                </p>
                <p className="text-xs text-muted-foreground mt-1">Starting from (HD Contoura Vision, both eyes)</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cost vs glasses */}
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="LASIK vs Glasses & Contact Lenses" subtitle="Long-term cost comparison over 10 years" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Glasses", cost: "₹1,50,000+", desc: "New frames + lenses every 1–2 years, cleaning supplies, repairs" },
              { label: "Contact Lenses", cost: "₹2,40,000+", desc: "Monthly lenses, solutions, annual check-ups, replacements" },
              { label: "LASIK (One-time)", cost: "₹17,998", desc: "Standard LASIK both eyes. Freedom for life.", highlight: true },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl p-6 text-center ${item.highlight ? "cta-gradient text-primary-foreground" : "bg-card border border-border"}`}>
                <h3 className={`font-display font-bold mb-2 ${item.highlight ? "" : "text-foreground"}`}>{item.label}</h3>
                <p className={`text-2xl font-display font-bold mb-2 ${item.highlight ? "" : "text-foreground"}`}>{item.cost}</p>
                <p className={`text-sm ${item.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <CTABanner withForm />
  </Layout>
);

export default CostPage;
