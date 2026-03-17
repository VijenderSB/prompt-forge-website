import { Link } from "react-router-dom";
import { PROCEDURES, formatPrice } from "@/data/siteData";
import { ArrowRight } from "lucide-react";

const ProcedureNavStrip = () => (
  <section className="section-padding bg-surface">
    <div className="container max-w-4xl">
      <h2 className="font-display font-bold text-xl text-foreground mb-2 text-center">Explore Key LASIK Procedures</h2>
      <p className="text-sm text-muted-foreground text-center mb-6">Choose the right technology for your eyes and budget</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {PROCEDURES.map((p) => (
          <Link
            key={p.slug}
            to={`/procedures/${p.slug}`}
            className="bg-card border border-border rounded-xl p-4 card-elevated group text-center"
          >
            <p className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">{p.name}</p>
            <p className="text-primary font-bold text-sm mt-1">{formatPrice(p.price)}<span className="text-muted-foreground font-normal text-xs">/eye</span></p>
            {p.badge && (
              <span className="inline-block text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mt-1.5">{p.badge}</span>
            )}
            <span className="flex items-center justify-center gap-1 text-xs text-muted-foreground group-hover:text-primary mt-2 transition-colors">
              Learn more <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ProcedureNavStrip;
