import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Procedure, formatPrice } from "@/data/siteData";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProcedureCard = ({ procedure, index }: { procedure: Procedure; index: number }) => {
  const isPremium = procedure.slug === "innovEyes";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative"
    >
      {procedure.badge && (
        <div className={`absolute -top-3 left-6 z-10 text-xs font-bold px-3 py-1 rounded-full ${
          procedure.badge === "Most Popular" ? "bg-accent text-accent-foreground" :
          isPremium ? "bg-primary-foreground text-primary" :
          "bg-accent text-accent-foreground"
        }`}>
          {procedure.badge}
        </div>
      )}
      <Link
        to={`/procedures/${procedure.slug}`}
        className={`block rounded-xl border p-6 card-elevated group h-full ${
          isPremium
            ? "bg-primary text-primary-foreground border-primary ring-2 ring-primary/30"
            : procedure.badge
              ? "bg-card border-primary/30 ring-1 ring-primary/10"
              : "bg-card border-border"
        }`}
      >
        <h3 className={`font-display font-bold text-lg mb-1 transition-colors ${
          isPremium ? "text-primary-foreground" : "text-foreground group-hover:text-primary"
        }`}>
          {procedure.name}
        </h3>
        <div className="flex items-baseline gap-2 mb-3">
          <span className={`font-display font-black text-2xl ${isPremium ? "text-primary-foreground" : "text-primary"}`}>{formatPrice(procedure.price)}</span>
          <span className={`text-sm ${isPremium ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/ eye</span>
          <span className={`text-[10px] ml-1 ${isPremium ? "bg-primary-foreground/20 text-primary-foreground px-2 py-0.5 rounded-full font-bold" : "discount-badge"}`}>{procedure.discountPercent}% OFF</span>
        </div>
        <p className={`text-sm mb-4 leading-relaxed ${isPremium ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{procedure.tagline}</p>
        <ul className="space-y-2 mb-5">
          {procedure.features.map((f) => (
            <li key={f} className={`flex items-center gap-2 text-sm ${isPremium ? "text-primary-foreground" : "text-foreground"}`}>
              <Check className={`w-4 h-4 shrink-0 ${isPremium ? "text-accent" : "text-accent"}`} />
              {f}
            </li>
          ))}
        </ul>
        <Button variant={isPremium ? "secondary" : "outline"} className={`w-full transition-colors ${
          isPremium
            ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            : "group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
        }`}>
          Get Quote <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </Link>
    </motion.div>
  );
};

export default ProcedureCard;
