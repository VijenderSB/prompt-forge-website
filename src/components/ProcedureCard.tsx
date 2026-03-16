import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Procedure, formatPrice } from "@/data/siteData";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProcedureCard = ({ procedure, index }: { procedure: Procedure; index: number }) => (
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
        procedure.badge === "Premium" ? "bg-primary text-primary-foreground" :
        "bg-accent text-accent-foreground"
      }`}>
        {procedure.badge}
      </div>
    )}
    <Link
      to={`/procedures/${procedure.slug}`}
      className={`block bg-card rounded-xl border p-6 card-elevated group h-full ${
        procedure.badge ? "border-primary/30 ring-1 ring-primary/10" : "border-border"
      }`}
    >
      <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-1">
        {procedure.name}
      </h3>
      <div className="flex items-baseline gap-2 mb-3">
        <span className="font-display font-black text-2xl text-primary">{formatPrice(procedure.price)}</span>
        <span className="text-muted-foreground text-sm">/ eye</span>
        <span className="discount-badge text-[10px] ml-1">{procedure.discountPercent}% OFF</span>
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{procedure.tagline}</p>
      <ul className="space-y-2 mb-5">
        {procedure.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-foreground">
            <Check className="w-4 h-4 text-accent shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
        Get Quote <ArrowRight className="w-4 h-4 ml-1" />
      </Button>
    </Link>
  </motion.div>
);

export default ProcedureCard;
