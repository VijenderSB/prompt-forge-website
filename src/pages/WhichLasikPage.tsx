import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ComparisonTable from "@/components/ComparisonTable";
import { PROCEDURES, formatPrice } from "@/data/siteData";
import { motion } from "framer-motion";
import { Check, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WhichLasikPage = () => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container text-center max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-4">Which LASIK is Best for You?</h1>
          <p className="text-primary-foreground/80 text-lg">Compare all procedures side-by-side to find your ideal match</p>
        </motion.div>
      </div>
    </section>

    <ComparisonTable />

    {/* Quick recommendation */}
    <section className="section-padding bg-surface">
      <div className="container max-w-4xl">
        <SectionHeading title="Quick Recommendation" subtitle="Not sure which to choose? Here's a starting point:" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Best Value", proc: "Standard LASIK", slug: "standard-lasik", price: "₹8,999/eye", reason: "Most affordable for mild prescriptions" },
            { label: "Most Popular", proc: "HD Contoura Vision", slug: "contoura-vision", price: "₹25,500/eye", reason: "22,000-point mapping, better than 6/6 vision" },
            { label: "Best Technology", proc: "WaveLight InnovEyes", slug: "innovEyes", price: "₹49,000/eye", reason: "AI-guided, 1,050 eye-tracking points/sec" },
            { label: "Best for Active Life", proc: "SMILE Pro", slug: "smile-pro", price: "₹65,000/eye", reason: "Flapless, 2mm incision, minimal dry eye" },
          ].map((rec) => (
            <Link key={rec.slug} to={`/procedures/${rec.slug}`} className="block bg-card border border-border rounded-xl p-6 text-center card-elevated group">
              <span className="discount-badge mb-3 inline-block">{rec.label}</span>
              <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors mb-1">{rec.proc}</h3>
              <p className="font-display font-bold text-primary text-lg mb-2">{rec.price}</p>
              <p className="text-sm text-muted-foreground">{rec.reason}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <CTABanner withForm />
  </Layout>
);

export default WhichLasikPage;
