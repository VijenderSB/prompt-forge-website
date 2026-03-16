import { PROCEDURES, formatPrice } from "@/data/siteData";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";

const ComparisonTable = () => (
  <section className="section-padding">
    <div className="container">
      <SectionHeading
        title="All LASIK Technologies at a Glance"
        subtitle="Compare every technology side-by-side to find the best fit for your eyes and budget."
      />
      <div className="max-w-full mx-auto bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left p-4 font-display font-semibold text-foreground sticky left-0 bg-secondary z-10 min-w-[140px]">Feature</th>
                {PROCEDURES.map(p => (
                  <th key={p.slug} className="p-4 font-display font-semibold text-foreground text-center min-w-[130px]">
                    <Link to={`/procedures/${p.slug}`} className="hover:text-primary transition-colors">
                      {p.badge && (
                        <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-full mb-1 inline-block ${
                          p.badge === "Most Popular" ? "bg-accent text-accent-foreground" : 
                          p.badge === "Premium" ? "bg-primary text-primary-foreground" :
                          "bg-accent text-accent-foreground"
                        }`}>
                          {p.badge === "Most Popular" ? "⭐ Recommended" : p.badge === "Premium" ? "⭐ Premium" : p.badge}
                        </span>
                      )}
                      <span className="block text-xs leading-tight">{p.name}</span>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="p-4 font-medium text-foreground sticky left-0 bg-card z-10">Discounted Price / Eye</td>
                {PROCEDURES.map(p => (
                  <td key={p.slug} className="p-4 text-center font-bold text-primary">{formatPrice(p.price)}</td>
                ))}
              </tr>
              <tr className="border-t border-border bg-muted/30">
                <td className="p-4 font-medium text-foreground sticky left-0 bg-muted/30 z-10">Original Price / Eye</td>
                {PROCEDURES.map(p => (
                  <td key={p.slug} className="p-4 text-center text-muted-foreground line-through">{formatPrice(p.originalPrice)}</td>
                ))}
              </tr>
              <tr className="border-t border-border">
                <td className="p-4 font-medium text-foreground sticky left-0 bg-card z-10">Technology Type</td>
                {PROCEDURES.map(p => (
                  <td key={p.slug} className={`p-4 text-center ${p.techType === "lenticule" ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                    {p.techType === "flap" ? "Flap-based" : "Lenticule"}
                  </td>
                ))}
              </tr>
              {[
                { label: "100% Blade Free", key: "bladeFree" as const },
                { label: "Flapless Surgery", key: "flapless" as const },
                { label: "Topography-Guided", key: "topoGuided" as const },
              ].map(({ label, key }) => (
                <tr key={label} className="border-t border-border">
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card z-10">{label}</td>
                  {PROCEDURES.map(p => (
                    <td key={p.slug} className="p-4 text-center">
                      {p[key] ? <Check className="w-4 h-4 text-accent mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-border">
                <td className="p-4 font-medium text-foreground sticky left-0 bg-card z-10">Incision / Flap</td>
                {PROCEDURES.map(p => (
                  <td key={p.slug} className="p-4 text-center text-muted-foreground text-xs">{p.incision}</td>
                ))}
              </tr>
              <tr className="border-t border-border bg-muted/30">
                <td className="p-4 font-medium text-foreground sticky left-0 bg-muted/30 z-10">Laser Speed</td>
                {PROCEDURES.map(p => (
                  <td key={p.slug} className="p-4 text-center text-muted-foreground">{p.laserSpeed}</td>
                ))}
              </tr>
              <tr className="border-t border-border">
                <td className="p-4 font-medium text-foreground sticky left-0 bg-card z-10">Recovery Time</td>
                {PROCEDURES.map(p => (
                  <td key={p.slug} className="p-4 text-center text-muted-foreground">{p.recovery}</td>
                ))}
              </tr>
              <tr className="border-t border-border bg-muted/30">
                <td className="p-4 font-medium text-foreground sticky left-0 bg-muted/30 z-10">Dry Eye Risk</td>
                {PROCEDURES.map(p => (
                  <td key={p.slug} className={`p-4 text-center ${p.dryEyeRisk === "Lowest" ? "font-bold text-accent" : "text-muted-foreground"}`}>
                    {p.dryEyeRisk}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-border">
                <td className="p-4 font-medium text-foreground sticky left-0 bg-card z-10">Thin Cornea Suitable</td>
                {PROCEDURES.map(p => (
                  <td key={p.slug} className="p-4 text-center">
                    {p.thinCorneaSafe ? <Check className="w-4 h-4 text-accent mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default ComparisonTable;
