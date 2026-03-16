import { motion } from "framer-motion";
import { Users, Award, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Users, value: "10L+", label: "Happy Patients" },
  { icon: Award, value: "97%", label: "Satisfaction Rate" },
  { icon: Clock, value: "10 min", label: "Procedure Time" },
  { icon: Shield, value: "25+", label: "Years Experience" },
];

const StatsBar = () => (
  <section className="bg-card border-y border-border">
    <div className="container py-10 md:py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <p className="font-display font-black text-3xl md:text-4xl text-foreground">{value}</p>
            <p className="text-sm text-muted-foreground mt-1">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
