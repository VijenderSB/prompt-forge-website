import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ConsultationForm from "@/components/ConsultationForm";
import { motion } from "framer-motion";
import { Eye, CircleDot, Layers, Focus, Sun, Droplets } from "lucide-react";
import SEO from "@/components/SEO";

const parts = [
  {
    icon: Eye,
    name: "Cornea",
    description: "The transparent, dome-shaped front surface of the eye. It provides about 70% of the eye's focusing power. LASIK reshapes the cornea to correct refractive errors.",
    lasikRelevance: "LASIK works by precisely reshaping the cornea using an excimer laser. Corneal thickness (measured via Pachymetry) determines which procedure is safe for you.",
  },
  {
    icon: CircleDot,
    name: "Iris & Pupil",
    description: "The iris is the coloured part of the eye that controls the size of the pupil — the opening through which light enters. Pupil size affects night vision quality after LASIK.",
    lasikRelevance: "Large pupils (>7mm) may experience halos/glare after some procedures. Topography-guided options like Contoura Vision minimise this risk.",
  },
  {
    icon: Focus,
    name: "Crystalline Lens",
    description: "A transparent biconvex structure behind the iris that fine-tunes focus for near and far objects. It accounts for about 30% of the eye's total focusing power.",
    lasikRelevance: "LASIK corrects at the corneal level and does not affect the lens. Presbyopia (age-related lens stiffening after 40) is a separate condition not treated by LASIK.",
  },
  {
    icon: Layers,
    name: "Retina",
    description: "The light-sensitive layer at the back of the eye containing photoreceptor cells (rods and cones). It converts light into electrical signals sent to the brain via the optic nerve.",
    lasikRelevance: "A healthy retina is essential for good LASIK outcomes. Pre-op dilated retinal examination checks for tears, detachments, or lattice degeneration.",
  },
  {
    icon: Sun,
    name: "Macula & Fovea",
    description: "The macula is the central area of the retina responsible for sharp, detailed vision. The fovea (centre of the macula) provides the highest visual acuity.",
    lasikRelevance: "The goal of LASIK is to focus light precisely on the fovea. Procedures like Contoura Vision treat on the visual axis for optimal foveal focusing.",
  },
  {
    icon: Droplets,
    name: "Tear Film",
    description: "A three-layer film (lipid, aqueous, mucin) that keeps the cornea moist, smooth, and optically clear. Healthy tear film is critical for clear vision.",
    lasikRelevance: "Dry eye is the most common side effect of LASIK. Schirmer's test and tear break-up time are assessed pre-operatively. Flapless procedures (SMILE Pro, SiLK) have the lowest dry eye risk.",
  },
];

const layers = [
  { name: "Epithelium", thickness: "50μm", description: "Outermost protective layer. Regenerates in 3–5 days. EPI LASIK works on this layer only." },
  { name: "Bowman's Layer", thickness: "8–14μm", description: "Tough, acellular layer. Does not regenerate once disrupted. Surface procedures preserve it." },
  { name: "Stroma", thickness: "500μm (90%)", description: "The thickest layer — composed of collagen fibrils. LASIK reshapes this layer. Thickness determines eligibility." },
  { name: "Descemet's Membrane", thickness: "5–10μm", description: "Thin basement membrane. LASIK does not reach this layer." },
  { name: "Endothelium", thickness: "5μm", description: "Single-cell layer that pumps fluid to keep the cornea clear. Not affected by LASIK." },
];

const EyeAnatomyPage = () => (
  <Layout>
      <SEO
        title="Human Eye Anatomy — Cornea, Lens, Retina Explained"
        description="Surgeon-reviewed guide to eye anatomy, how vision works, and how LASIK reshapes the cornea. Diagrams of cornea, iris, lens, retina, optic nerve."
        path="/eye-anatomy"
      />
    <section className="section-padding">
      <div className="container max-w-5xl">
        <SectionHeading
          title="About Eye Anatomy"
          subtitle="Understanding how your eye works helps you make an informed decision about LASIK. Here's a comprehensive look at each part and its role in laser vision correction."
        />

        {/* Eye parts grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {parts.map((part, i) => (
            <motion.div
              key={part.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <part.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">{part.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{part.description}</p>
              <div className="bg-surface rounded-lg p-3">
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">LASIK Relevance</span>
                <p className="text-foreground text-sm">{part.lasikRelevance}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corneal layers */}
        <SectionHeading title="5 Layers of the Cornea" subtitle="The cornea has 5 distinct layers. Understanding them explains why different LASIK procedures work differently." />
        <div className="space-y-3 mb-16">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <div className="flex items-center gap-3 sm:w-48 shrink-0">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <div>
                  <h4 className="font-display font-bold text-foreground text-sm">{layer.name}</h4>
                  <span className="text-xs text-muted-foreground">{layer.thickness}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">{layer.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How LASIK uses anatomy */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
          <h3 className="font-display font-bold text-xl text-foreground mb-4">How LASIK Uses Your Eye's Anatomy</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Flap-Based (LASIK, Contoura, InnovEyes)</h4>
              <p className="text-muted-foreground">A thin flap is created in the epithelium and Bowman's layer. The excimer laser reshapes the stroma beneath, then the flap is repositioned. The cornea's curvature changes to focus light on the fovea.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Flapless (SMILE Pro, SiLK, EPI LASIK)</h4>
              <p className="text-muted-foreground">No flap is created. SMILE/SiLK extract a lenticule from within the stroma through a tiny incision. EPI LASIK works on the surface. All approaches preserve more corneal nerves and biomechanical strength.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          <ConsultationForm variant="section" />
        </div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default EyeAnatomyPage;
