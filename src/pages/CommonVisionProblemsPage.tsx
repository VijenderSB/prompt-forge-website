import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ConsultationForm from "@/components/ConsultationForm";
import { motion } from "framer-motion";
import { Minus, Plus, CircleDot, Clock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const conditions = [
  {
    icon: Minus,
    name: "Myopia (Short-Sightedness)",
    power: "–0.5D to –12D",
    description: "The eyeball is too long or the cornea too curved, causing distant objects to appear blurry while near vision stays clear. The most common refractive error globally.",
    prevalence: "Affects ~30% of the Indian population. Rising rapidly due to increased screen time.",
    lasikFix: "LASIK flattens the central cornea to shift the focal point back onto the retina. All 6 procedures at Centre for Lasik correct myopia.",
    bestProcedures: ["Standard LASIK", "HD Contoura Vision", "WaveLight InnovEyes", "SMILE Pro", "SiLK"],
  },
  {
    icon: Plus,
    name: "Hyperopia (Far-Sightedness)",
    power: "+0.5D to +6D",
    description: "The eyeball is too short or the cornea too flat, causing near objects to appear blurry. Patients often experience eye strain and headaches during close work.",
    prevalence: "Affects ~10% of the population. More common with age.",
    lasikFix: "LASIK steepens the central cornea to increase its focusing power, bringing the focal point forward onto the retina.",
    bestProcedures: ["Standard LASIK", "HD Contoura Vision", "WaveLight InnovEyes"],
  },
  {
    icon: CircleDot,
    name: "Astigmatism (Cylindrical Power)",
    power: "Up to 6D",
    description: "The cornea is shaped more like a rugby ball than a football, causing blurred or distorted vision at all distances. Often occurs alongside myopia or hyperopia.",
    prevalence: "Present in ~40% of people with refractive errors. Often undiagnosed.",
    lasikFix: "LASIK reshapes the cornea into a more spherical shape. Topography-guided procedures (Contoura Vision, InnovEyes) are especially effective for high/irregular astigmatism.",
    bestProcedures: ["HD Contoura Vision", "WaveLight InnovEyes", "SMILE Pro"],
  },
  {
    icon: Clock,
    name: "Presbyopia (Age-Related Near Vision Loss)",
    power: "Begins after age 40",
    description: "The crystalline lens inside the eye loses flexibility with age, making it difficult to focus on near objects. This is why reading glasses become necessary after 40.",
    prevalence: "Universal — affects everyone by age 45–50.",
    lasikFix: "Standard LASIK does not treat presbyopia (it's a lens issue, not corneal). Monovision LASIK is an option where one eye is corrected for distance and the other for near.",
    bestProcedures: ["Monovision LASIK (specialised)"],
  },
  {
    icon: AlertTriangle,
    name: "Keratoconus",
    power: "Progressive corneal thinning",
    description: "A condition where the cornea progressively thins and bulges into a cone shape, causing significant visual distortion. It is a contraindication for standard LASIK.",
    prevalence: "Affects ~1 in 2,000 people. More common in South Asia.",
    lasikFix: "LASIK is NOT suitable for keratoconus — it can worsen the condition. Corneal cross-linking (C3R) is the recommended stabilisation treatment. Our pre-op Pentacam scan screens for early keratoconus.",
    bestProcedures: ["Not eligible — C3R recommended"],
  },
];

const CommonVisionProblemsPage = () => (
  <Layout>
    <section className="section-padding">
      <div className="container max-w-5xl">
        <SectionHeading
          title="Common Vision Problems"
          subtitle="Learn about the most common refractive errors, how they affect your vision, and which LASIK procedure is best suited to correct each condition."
        />

        <div className="space-y-6 mb-16">
          {conditions.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">{c.name}</h3>
                    <span className="text-xs font-medium text-primary">{c.power}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{c.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-surface rounded-lg p-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Prevalence</span>
                    <p className="text-foreground text-sm">{c.prevalence}</p>
                  </div>
                  <div className="bg-surface rounded-lg p-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">How LASIK Fixes It</span>
                    <p className="text-foreground text-sm">{c.lasikFix}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-muted-foreground">Best Procedures:</span>
                  {c.bestProcedures.map((p) => (
                    <span key={p} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">{p}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <ConsultationForm variant="section" />
        </div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default CommonVisionProblemsPage;
