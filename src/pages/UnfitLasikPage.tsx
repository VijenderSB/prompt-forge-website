import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ConsultationForm from "@/components/ConsultationForm";
import { motion } from "framer-motion";
import { AlertTriangle, ShieldOff, Clock, Eye, Heart, Baby, Droplets, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const contraindications = [
  {
    icon: ShieldOff,
    title: "Keratoconus or Corneal Ectasia",
    severity: "Absolute",
    description: "Keratoconus causes progressive corneal thinning and bulging. LASIK would weaken the cornea further and is strictly contraindicated.",
    alternative: "Corneal Cross-Linking (C3R) stabilises the condition. After stabilisation, ICL (Implantable Collamer Lens) may be an option for vision correction.",
  },
  {
    icon: Eye,
    title: "Thin Corneas (< 480μm)",
    severity: "Relative",
    description: "Standard LASIK requires adequate corneal thickness for safe flap creation and ablation. Very thin corneas may not leave enough residual stromal bed.",
    alternative: "EPI LASIK (no flap — preserves full stroma), SMILE Pro, SiLK (flapless lenticule), or ICL for very thin corneas with high power.",
  },
  {
    icon: Activity,
    title: "Unstable Prescription",
    severity: "Temporary",
    description: "Your prescription must be stable (unchanged) for at least 12 months before LASIK. An unstable prescription means the eye is still changing shape.",
    alternative: "Wait until your prescription stabilises. Use glasses or contacts in the interim. Re-evaluate annually. Most prescriptions stabilise by age 21–24.",
  },
  {
    icon: Heart,
    title: "Uncontrolled Autoimmune Conditions",
    severity: "Relative",
    description: "Conditions like lupus, rheumatoid arthritis, Sjögren's syndrome, or uncontrolled diabetes can impair healing and increase infection risk.",
    alternative: "Once the condition is well-controlled with medication, LASIK may become an option. A clearance letter from your physician is required. PRK/EPI LASIK may be safer.",
  },
  {
    icon: Baby,
    title: "Pregnancy or Nursing",
    severity: "Temporary",
    description: "Hormonal changes during pregnancy and nursing can temporarily alter corneal shape and prescription. Results may be unpredictable.",
    alternative: "Wait 3–6 months after stopping nursing for hormones to stabilise. Your prescription will be re-checked before proceeding.",
  },
  {
    icon: Droplets,
    title: "Severe Dry Eye Disease",
    severity: "Relative",
    description: "Severe, chronic dry eye can worsen after LASIK due to corneal nerve disruption. Mild dry eye can usually be managed.",
    alternative: "Pre-treat dry eye aggressively (punctal plugs, cyclosporine drops). Consider SMILE Pro or SiLK which have the lowest dry eye risk. ICL is another option.",
  },
  {
    icon: Clock,
    title: "Under 18 Years of Age",
    severity: "Absolute",
    description: "Eyes are still developing before age 18 and the prescription is likely unstable. LASIK is not performed on minors.",
    alternative: "Glasses or contact lenses until age 18+. After 18, wait for prescription stability (12 months unchanged) before evaluation.",
  },
  {
    icon: AlertTriangle,
    title: "Active Eye Infections or Injuries",
    severity: "Temporary",
    description: "Active conjunctivitis, keratitis, herpes simplex keratitis, or recent eye trauma must be fully resolved before LASIK.",
    alternative: "Complete treatment and recovery first. Re-evaluate after 3–6 months of being infection-free.",
  },
];

const UnfitLasikPage = () => (
  <Layout>
    <section className="section-padding">
      <div className="container max-w-5xl">
        <SectionHeading
          title="If I Am Unfit for LASIK"
          subtitle="Not everyone is a candidate for LASIK — but there are almost always alternatives. Here's what disqualifies you and what your options are."
        />

        <div className="space-y-5 mb-12">
          {contraindications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-foreground">{c.title}</h3>
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      c.severity === "Absolute" ? "bg-destructive/10 text-destructive" :
                      c.severity === "Temporary" ? "bg-primary/10 text-primary" :
                      "bg-orange-100 text-orange-700"
                    }`}>{c.severity}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{c.description}</p>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">Your Alternative</span>
                    <p className="text-foreground text-sm">{c.alternative}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Severity legend */}
        <div className="bg-surface rounded-xl p-6 mb-8">
          <h4 className="font-display font-bold text-foreground mb-4">Understanding Severity Levels</h4>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <span className="bg-destructive/10 text-destructive text-xs font-bold px-2 py-0.5 rounded-md shrink-0">Absolute</span>
              <p className="text-muted-foreground">LASIK is not possible. Alternative procedures are recommended.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded-md shrink-0">Relative</span>
              <p className="text-muted-foreground">LASIK may still be possible with a different technique or after treatment.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-md shrink-0">Temporary</span>
              <p className="text-muted-foreground">You may become eligible after the condition resolves.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <ConsultationForm variant="section" />
        </div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default UnfitLasikPage;
