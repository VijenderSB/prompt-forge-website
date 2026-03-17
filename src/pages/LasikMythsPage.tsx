import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ConsultationForm from "@/components/ConsultationForm";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const myths = [
  {
    myth: "LASIK is painful",
    fact: "LASIK is completely painless. Anaesthetic eye drops numb the eye before the procedure. Most patients feel only mild pressure for a few seconds. The laser itself produces zero sensation.",
  },
  {
    myth: "LASIK results are temporary — vision will come back",
    fact: "LASIK permanently reshapes the cornea. The correction is lifelong. Over 95% of patients maintain stable vision for decades. Age-related presbyopia (after 40) is a separate lens condition, not a LASIK regression.",
  },
  {
    myth: "LASIK can make you blind",
    fact: "There is no documented case of blindness from LASIK in peer-reviewed literature. The excimer laser is computer-controlled with multiple safety systems. The complication rate is less than 1%, and serious complications are extremely rare.",
  },
  {
    myth: "You can't blink or move during LASIK",
    fact: "A gentle eyelid holder keeps your eye open — you cannot blink during the procedure. Modern lasers have 6D eye-tracking systems (like PerfectPulse Technology® at 1,050 readings/sec) that compensate for any eye movement in real-time.",
  },
  {
    myth: "LASIK is not safe for high power (–6 to –10)",
    fact: "Modern procedures like HD Contoura Vision and WaveLight InnovEyes safely treat prescriptions up to –12D. Over 30% of high-power patients achieve better-than-6/6 (super vision) with topography-guided treatment.",
  },
  {
    myth: "LASIK causes permanent dry eyes",
    fact: "Temporary dry eye is common for 2–4 weeks and managed with lubricating drops. Flapless procedures (SMILE Pro, SiLK) preserve 80% more corneal nerves and have the lowest dry eye risk. Permanent dry eye is extremely rare (<1%).",
  },
  {
    myth: "LASIK is only for young people",
    fact: "LASIK is suitable for adults aged 18–55+ with a stable prescription. There is no upper age limit as long as the cornea is healthy and thick enough. Many patients in their 40s and 50s successfully undergo LASIK.",
  },
  {
    myth: "All LASIK procedures are the same",
    fact: "There are 6 distinct LASIK technologies — from Standard LASIK (₹8,999/eye) to SiLK (₹75,000/eye). Each uses different laser platforms, flap vs flapless approaches, and tracking systems. The right procedure depends on your corneal thickness, prescription, and lifestyle.",
  },
  {
    myth: "LASIK is too expensive",
    fact: "LASIK starts at just ₹8,999/eye with EMI from ₹750/month. Over 5 years, LASIK costs less than glasses and contact lenses combined. It's a one-time investment that pays for itself within 2–3 years.",
  },
  {
    myth: "Recovery takes weeks — you'll miss a lot of work",
    fact: "Most LASIK patients return to work within 1–2 days. Vision improves within hours. SMILE Pro and SiLK have same-day functional recovery. Only EPI LASIK has a longer 5–7 day recovery period.",
  },
  {
    myth: "Glasses are safer than LASIK",
    fact: "Glasses carry risks too — broken lenses can cause eye injuries, fogging reduces visibility while driving, and contact lens infections affect thousands annually. LASIK has a 96% satisfaction rate — higher than any other elective procedure.",
  },
  {
    myth: "LASIK weakens the cornea permanently",
    fact: "While LASIK does remove some corneal tissue, modern procedures are designed to preserve maximum biomechanical strength. Flapless procedures (SMILE Pro, SiLK) maintain 80% more corneal integrity than flap-based LASIK.",
  },
];

const LasikMythsPage = () => (
  <Layout>
    <section className="section-padding">
      <div className="container max-w-4xl">
        <SectionHeading
          title="LASIK Myths vs Facts"
          subtitle="Separating fact from fiction — 12 common myths about LASIK debunked with clinical evidence"
        />

        <div className="space-y-5 mb-12">
          {myths.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              {/* Myth */}
              <div className="flex items-start gap-3 p-5 bg-destructive/5 border-b border-border">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-destructive block mb-1">Myth</span>
                  <p className="font-display font-bold text-foreground">{item.myth}</p>
                </div>
              </div>
              {/* Fact */}
              <div className="flex items-start gap-3 p-5">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">Fact</span>
                  <p className="text-muted-foreground text-sm">{item.fact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="font-display font-bold text-xl text-foreground mb-3">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-4 text-sm">Our LASIK counsellors can address any concerns during a free, no-obligation consultation.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/am-i-a-candidate" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 cta-gradient text-primary-foreground">Book Free Consultation</a>
            <a href="/faq" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 border border-border bg-card text-foreground hover:bg-muted transition-colors">Read Full FAQ</a>
          </div>
        </div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default LasikMythsPage;
