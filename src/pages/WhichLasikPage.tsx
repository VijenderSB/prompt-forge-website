import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { PROCEDURES, formatPrice, discountedPrice } from "@/data/siteData";
import { motion } from "framer-motion";
import { Check, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = ["Flapless", "Bladefree", "Under 10 sec laser", "Thin cornea safe", "Night vision quality", "Dry eye risk"];
const featureMap: Record<string, boolean[]> = {
  "contoura-vision": [false, false, false, false, true, true],
  "innovEyes": [false, false, false, false, true, true],
  "relex-smile": [true, true, false, false, true, false],
  "smile-pro": [true, true, true, false, true, false],
  "elita-silk": [false, true, false, false, true, true],
  "epi-innovEyes": [true, true, false, true, true, false],
};

const WhichLasikPage = () => {
  const [selected, setSelected] = useState<string[]>(PROCEDURES.map(p => p.slug));

  return (
    <Layout>
      <section className="section-padding">
        <div className="container">
          <SectionHeading title="Which LASIK is Best for You?" subtitle="Compare all 6 procedure types side-by-side to find your ideal match" />

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto bg-card rounded-xl border border-border overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left p-4 font-display font-semibold text-foreground">Feature</th>
                    {PROCEDURES.map(p => (
                      <th key={p.slug} className="p-4 font-display font-semibold text-foreground text-center min-w-[120px]">
                        <Link to={`/procedures/${p.slug}`} className="hover:text-primary transition-colors">{p.name}</Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">Price/Eye</td>
                    {PROCEDURES.map(p => (
                      <td key={p.slug} className="p-4 text-center">
                        <span className="line-through text-muted-foreground text-xs">{formatPrice(p.price)}</span>
                        <span className="block font-bold text-primary">{formatPrice(discountedPrice(p.price))}</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">Duration</td>
                    {PROCEDURES.map(p => (
                      <td key={p.slug} className="p-4 text-center text-muted-foreground">{p.duration}</td>
                    ))}
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">Recovery</td>
                    {PROCEDURES.map(p => (
                      <td key={p.slug} className="p-4 text-center text-muted-foreground">{p.recovery}</td>
                    ))}
                  </tr>
                  {features.map((feat, fi) => (
                    <tr key={feat} className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">{feat}</td>
                      {PROCEDURES.map(p => (
                        <td key={p.slug} className="p-4 text-center">
                          {featureMap[p.slug]?.[fi] ?
                            <Check className="w-4 h-4 text-accent mx-auto" /> :
                            <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick recommendation */}
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Quick Recommendation" subtitle="Not sure which to choose? Here's a starting point:" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Best Value", proc: "Contoura Vision", slug: "contoura-vision", reason: "Most advanced at the lowest price point" },
                { label: "Best Technology", proc: "SMILE Pro", slug: "smile-pro", reason: "7-second laser, flapless, fastest recovery" },
                { label: "Best for Thin Corneas", proc: "EPI InnovEyes", slug: "epi-innovEyes", reason: "Surface-based, no flap or incision needed" },
              ].map((rec) => (
                <Link key={rec.slug} to={`/procedures/${rec.slug}`} className="block bg-card border border-border rounded-xl p-6 text-center card-elevated group">
                  <span className="discount-badge mb-3 inline-block">{rec.label}</span>
                  <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2">{rec.proc}</h3>
                  <p className="text-sm text-muted-foreground">{rec.reason}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </Layout>
  );
};

export default WhichLasikPage;
