import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ConsultationForm from "@/components/ConsultationForm";
import { Button } from "@/components/ui/button";
import { Check, X, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const criteria = [
  { id: "age", label: "Are you 18 years or older?", required: true },
  { id: "stable", label: "Has your eye prescription been stable for at least 1 year?", required: true },
  { id: "health", label: "Are your eyes free from active infections or diseases?", required: true },
  { id: "cornea", label: "Do you have adequate corneal thickness? (confirmed during screening)", required: false },
  { id: "pregnant", label: "Are you NOT currently pregnant or nursing?", required: true },
  { id: "autoimmune", label: "Are you free from uncontrolled autoimmune conditions?", required: true },
];

const CandidatePage = () => {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [showResult, setShowResult] = useState(false);

  const allAnswered = criteria.filter(c => c.required).every(c => answers[c.id] !== undefined);
  const allYes = criteria.filter(c => c.required).every(c => answers[c.id] === true);

  const toggle = (id: string, value: boolean) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
    setShowResult(false);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container max-w-3xl">
          <SectionHeading title="Am I a Candidate for LASIK?" subtitle="Answer these quick questions to check your basic eligibility for LASIK eye surgery" />

          <div className="space-y-4 mb-8">
            {criteria.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 flex items-center justify-between gap-4"
              >
                <p className="text-foreground font-medium text-sm">{c.label}{c.required && <span className="text-destructive">*</span>}</p>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => toggle(c.id, true)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${answers[c.id] === true ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                  >
                    <Check className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => toggle(c.id, false)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${answers[c.id] === false ? "bg-destructive text-destructive-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button onClick={() => setShowResult(true)} disabled={!allAnswered} size="lg" className="cta-gradient border-0 text-primary-foreground px-8">
              Check My Eligibility <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {showResult && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`mt-8 rounded-xl p-8 text-center ${allYes ? "bg-accent/10 border border-accent" : "bg-destructive/10 border border-destructive"}`}>
              {allYes ? (
                <>
                  <Check className="w-12 h-12 text-accent mx-auto mb-3" />
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">You May Be a Good Candidate!</h3>
                  <p className="text-muted-foreground mb-4">Based on your answers, you appear to meet the basic eligibility criteria. Book a free consultation for a comprehensive assessment with our specialists.</p>
                  <Button asChild className="cta-gradient border-0 text-primary-foreground">
                    <Link to="/am-i-a-candidate">Book Free Consultation</Link>
                  </Button>
                </>
              ) : (
                <>
                  <X className="w-12 h-12 text-destructive mx-auto mb-3" />
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">You May Need Further Evaluation</h3>
                  <p className="text-muted-foreground mb-4">Some of your answers suggest you may not be an ideal candidate at this time. We recommend booking a consultation for a thorough evaluation — there may still be options for you.</p>
                  <Button asChild variant="outline">
                    <Link to="/am-i-a-candidate">Speak to a Specialist</Link>
                  </Button>
                </>
              )}
            </motion.div>
          )}
        </div>
      </section>
      <CTABanner />
    </Layout>
  );
};

export default CandidatePage;
