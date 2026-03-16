import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Procedure, formatPrice, discountedPrice } from "@/data/siteData";
import { motion } from "framer-motion";

const ProcedureCard = ({ procedure, index }: { procedure: Procedure; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
  >
    <Link
      to={`/procedures/${procedure.slug}`}
      className="block bg-card rounded-xl border border-border p-6 card-elevated group"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">{procedure.name}</h3>
        <span className="discount-badge">30% OFF</span>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{procedure.tagline}</p>
      <div className="flex items-end justify-between">
        <div>
          <span className="text-muted-foreground text-sm line-through">{formatPrice(procedure.price)}/eye</span>
          <span className="block font-display font-bold text-lg text-primary">
            {formatPrice(discountedPrice(procedure.price))}/eye
          </span>
        </div>
        <span className="text-primary group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-5 h-5" />
        </span>
      </div>
    </Link>
  </motion.div>
);

export default ProcedureCard;
