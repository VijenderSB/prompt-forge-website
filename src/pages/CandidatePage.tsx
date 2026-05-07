import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ConsultationForm from "@/components/ConsultationForm";
import { Button } from "@/components/ui/button";
import { Check, X, ChevronRight, ShieldCheck, Award, Eye, Stethoscope, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BRAND } from "@/data/siteData";

const criteria = [
  { id: "age", label: "Are you 18 years or older?", required: true },
  { id: "stable", label: "Has your eye prescription been stable for at least 1 year?", required: true },
  { id: "health", label: "Are your eyes free from active infections or diseases?", required: true },
  { id: "cornea", label: "Do you have adequate corneal thickness? (confirmed during screening)", required: false },
  { id: "pregnant", label: "Are you NOT currently pregnant or nursing?", required: true },
  { id: "autoimmune", label: "Are you free from uncontrolled autoimmune conditions?", required: true },
];

const eligibilityMatrix = [
  { factor: "Age", ideal: "21–40 years", acceptable: "18–20 or 41–55", disqualifying: "Below 18 or unstable Rx after 55" },
  { factor: "Refractive Stability", ideal: "Stable ≥12 months", acceptable: "Stable 6–12 months", disqualifying: "Changing >0.5D in last year" },
  { factor: "Myopia (Short-sight)", ideal: "−1.00 D to −8.00 D", acceptable: "Up to −10.00 D", disqualifying: "Above −12.00 D (consider ICL)" },
  { factor: "Hyperopia (Long-sight)", ideal: "+0.50 D to +3.00 D", acceptable: "Up to +5.00 D", disqualifying: "Above +6.00 D" },
  { factor: "Astigmatism (Cylinder)", ideal: "Up to −3.00 D", acceptable: "Up to −5.00 D", disqualifying: "Above −6.00 D" },
  { factor: "Corneal Thickness", ideal: "≥520 µm", acceptable: "480–520 µm (SMILE/PRK)", disqualifying: "<460 µm" },
  { factor: "General Health", ideal: "No autoimmune/diabetes", acceptable: "Controlled diabetes", disqualifying: "Uncontrolled autoimmune, keratoconus" },
  { factor: "Pregnancy", ideal: "Not pregnant/nursing", acceptable: "—", disqualifying: "Currently pregnant or breastfeeding" },
];

const faqs = [
  { q: "Who is a good candidate for LASIK eye surgery in India?", a: "An ideal LASIK candidate is 18 years or older, has had a stable eye prescription for at least 12 months, healthy corneas of adequate thickness (typically ≥480 µm), no active eye disease, is not pregnant or nursing, and has no uncontrolled autoimmune conditions. Approximately 90% of adults with myopia, hyperopia or astigmatism qualify after a comprehensive screening." },
  { q: "What is the minimum age for LASIK surgery?", a: "The minimum legal and clinical age for LASIK in India is 18 years, but most refractive surgeons prefer 21+ to ensure the eye prescription is fully stabilised. Vision correction performed before stability can lead to regression." },
  { q: "Can I get LASIK if I have high power (−6 or more)?", a: "Yes. Modern procedures like SMILE Pro, Contoura Vision and WaveLight Plus InnovEyes can correct myopia up to −10.00 D and astigmatism up to −5.00 D safely. For powers above −10.00 D or thin corneas, ICL (Implantable Collamer Lens) is a better option." },
  { q: "Is LASIK safe for thin corneas?", a: "Patients with thin corneas (below 500 µm) may not be ideal for traditional LASIK but are often eligible for SMILE Pro, PRK (Epi-LASIK) or ICL. A Pentacam corneal tomography scan during the free 90-minute diagnostic determines the safest procedure." },
  { q: "Can diabetics or people with autoimmune diseases get LASIK?", a: "Patients with well-controlled diabetes (HbA1c <7%) are usually candidates. Those with uncontrolled autoimmune conditions like rheumatoid arthritis, lupus or Sjögren's syndrome are generally advised against LASIK due to delayed healing." },
  { q: "Why can't pregnant or nursing women get LASIK?", a: "Hormonal changes during pregnancy and lactation cause temporary fluctuations in refractive power and corneal hydration. LASIK should be deferred until 3–6 months after delivery or after stopping breastfeeding." },
  { q: "What disqualifies someone from LASIK eye surgery?", a: "Common disqualifications include: keratoconus or corneal ectasia, active corneal infection (herpes/keratitis), severe dry-eye disease, glaucoma with optic-nerve damage, uncontrolled diabetes, pregnancy, age below 18, and prescription that has changed in the last 12 months." },
  { q: "How long is the LASIK candidacy assessment?", a: "Centre for Lasik offers a free 90-minute comprehensive diagnostic that includes Pentacam corneal tomography, pachymetry, dry-eye evaluation, dilated retinal check and refraction stability testing. Reports are shared the same day." },
  { q: "Can I get LASIK in both eyes on the same day?", a: "Yes. Bilateral LASIK is the global standard — both eyes are treated in a single 15-minute session, and most patients return to work within 24–48 hours." },
  { q: "Is LASIK permanent if I'm a candidate?", a: "LASIK results are permanent for the corrected refractive error. However, age-related presbyopia (after 40) and cataracts (after 60) may still develop and require separate treatment." },
];

const trustSignals = [
  { icon: ShieldCheck, label: "US-FDA approved laser platforms" },
  { icon: Award, label: "20+ Years surgical expertise" },
  { icon: Eye, label: "50,000+ procedures delivered" },
  { icon: Stethoscope, label: "Free 90-min diagnostic" },
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

  useEffect(() => {
    const title = "Am I a Candidate for LASIK? | Free Eligibility Check — Centre for Lasik";
    const desc = "Check LASIK eligibility in 60 seconds. Free 90-min diagnostic across India. Age, prescription, corneal thickness, dry eye & health screening by top refractive surgeons.";
    document.title = title;

    const setMeta = (sel: string, attr: string, name: string, content: string) => {
      let el = document.querySelector(sel) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta('meta[name="description"]', "name", "description", desc);
    setMeta('meta[name="keywords"]', "name", "keywords",
      "am I a candidate for LASIK, LASIK eligibility, LASIK eligibility checker India, who can get LASIK, LASIK requirements, LASIK age limit, LASIK qualifications, SMILE Pro candidate, Contoura Vision eligibility, ICL vs LASIK, free LASIK consultation India");
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", desc);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:url"]', "property", "og:url", window.location.origin + window.location.pathname);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", desc);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/am-i-a-candidate";

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": window.location.origin + "/am-i-a-candidate#webpage",
          "url": window.location.origin + "/am-i-a-candidate",
          "name": title,
          "description": desc,
          "inLanguage": "en-IN",
          "about": { "@type": "MedicalProcedure", "name": "LASIK Eye Surgery", "procedureType": "Surgical" },
          "audience": { "@type": "Patient", "healthCondition": ["Myopia", "Hyperopia", "Astigmatism"] },
          "lastReviewed": new Date().toISOString().split("T")[0],
          "reviewedBy": { "@type": "Organization", "name": BRAND.name },
        },
        {
          "@type": "MedicalBusiness",
          "@id": window.location.origin + "#organization",
          "name": BRAND.name,
          "url": BRAND.domain,
          "telephone": BRAND.phone,
          "medicalSpecialty": "Ophthalmology",
          "areaServed": { "@type": "Country", "name": "India" },
          "priceRange": "₹₹",
          "address": { "@type": "PostalAddress", "addressCountry": "IN" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "12480" },
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": window.location.origin + "/" },
            { "@type": "ListItem", "position": 2, "name": "Am I a Candidate", "item": window.location.origin + "/am-i-a-candidate" },
          ],
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })),
        },
        {
          "@type": "Service",
          "serviceType": "LASIK Candidacy Evaluation",
          "provider": { "@id": window.location.origin + "#organization" },
          "areaServed": "India",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR", "description": "Free 90-minute LASIK eligibility diagnostic" },
        },
      ],
    };
    let ld = document.getElementById("candidate-schema") as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "candidate-schema";
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify(schema);
  }, []);

  return (
    <Layout>
      {/* Hero / Direct-Answer Block (AI Overviews + GEO optimized) */}
      <section className="hero-gradient section-padding">
        <div className="container max-w-5xl">
          <nav aria-label="Breadcrumb" className="text-primary-foreground/60 text-sm mb-4">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <ChevronRight className="w-3 h-3 inline mx-1" />
            <span className="text-primary-foreground">Am I a Candidate for LASIK</span>
          </nav>
          <span className="inline-block bg-card/15 border border-card/20 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground mb-4">
            Free LASIK Eligibility Checker • India
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl text-primary-foreground mb-4 leading-tight">
            Am I a Candidate for LASIK Eye Surgery? Free 60-Second Eligibility Check
          </h1>
          <p className="text-primary-foreground/85 text-lg max-w-3xl mb-6">
            <strong>Direct answer:</strong> You are likely a candidate for LASIK if you are <strong>18 years or older</strong>, have had a <strong>stable eye prescription for at least 12 months</strong>, possess <strong>healthy corneas of adequate thickness</strong>, are <strong>not pregnant or nursing</strong>, and are free from <strong>uncontrolled autoimmune disease or active eye infections</strong>. Approximately <strong>90% of Indian adults with myopia, hyperopia or astigmatism qualify</strong> after a free 90-minute diagnostic at Centre for Lasik.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {trustSignals.map(t => (
              <div key={t.label} className="flex items-start gap-2 text-primary-foreground/90 text-xs">
                <t.icon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{t.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold">
              <a href="#eligibility-checker">Take the 60-Second Quiz</a>
            </Button>
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-primary-foreground font-medium px-4 h-11 rounded-md border border-primary-foreground/30">
              <Phone className="w-4 h-4" /> {BRAND.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Definition block — for AI Overviews + Featured Snippets */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">What Makes Someone a Good Candidate for LASIK?</h2>
          <p className="text-muted-foreground mb-4">
            <strong>LASIK candidacy</strong> is determined by a combination of <em>age</em>, <em>refractive stability</em>, <em>corneal anatomy</em>, <em>ocular health</em> and <em>systemic medical history</em>. A qualified refractive surgeon evaluates these parameters using <strong>Pentacam corneal tomography</strong>, <strong>pachymetry</strong>, <strong>aberrometry</strong> and a <strong>dilated retinal examination</strong> before recommending a procedure such as <Link to="/procedures/standard-lasik" className="text-primary underline">Standard LASIK</Link>, <Link to="/procedures/contoura-vision" className="text-primary underline">Contoura Vision</Link>, <Link to="/procedures/smile-pro" className="text-primary underline">SMILE Pro</Link>, or <Link to="/procedures/innovEyes" className="text-primary underline">WaveLight Plus InnovEyes</Link>.
          </p>
          <h3 className="font-display font-semibold text-lg text-foreground mt-6 mb-3">The 6 Core Eligibility Pillars</h3>
          <ul className="space-y-2 text-foreground">
            <li className="flex gap-2"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span><strong>Age 18+</strong> — eyes must be fully developed.</span></li>
            <li className="flex gap-2"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span><strong>Stable prescription</strong> for at least 12 months (≤0.5 D change).</span></li>
            <li className="flex gap-2"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span><strong>Healthy cornea</strong> — adequate thickness, no keratoconus.</span></li>
            <li className="flex gap-2"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span><strong>No active eye disease</strong> — infections, severe dry eye, or glaucoma.</span></li>
            <li className="flex gap-2"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span><strong>Not pregnant or nursing</strong> — hormonal shifts affect refraction.</span></li>
            <li className="flex gap-2"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span><strong>Controlled systemic health</strong> — no uncontrolled diabetes or autoimmune disease.</span></li>
          </ul>
        </div>
      </section>

      {/* Interactive Eligibility Checker */}
      <section id="eligibility-checker" className="section-padding bg-surface">
        <div className="container max-w-3xl">
          <SectionHeading title="60-Second LASIK Eligibility Checker" subtitle="Answer 6 quick questions — instant indicative result. A specialist will confirm during your free 90-minute diagnostic." />

          <div className="space-y-4 mb-8">
            {criteria.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-5 flex items-center justify-between gap-4"
              >
                <p className="text-foreground font-medium text-sm">{c.label}{c.required && <span className="text-destructive">*</span>}</p>
                <div className="flex gap-2 shrink-0" role="radiogroup" aria-label={c.label}>
                  <button aria-label={`Yes — ${c.label}`} onClick={() => toggle(c.id, true)} className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${answers[c.id] === true ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                    <Check className="w-5 h-5" />
                  </button>
                  <button aria-label={`No — ${c.label}`} onClick={() => toggle(c.id, false)} className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${answers[c.id] === false ? "bg-destructive text-destructive-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
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
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">You May Be a Good Candidate for LASIK!</h3>
                  <p className="text-muted-foreground mb-4">Based on your answers, you appear to meet the basic eligibility criteria. Book a <strong>free 90-minute diagnostic</strong> for a comprehensive Pentacam-based assessment with our specialists.</p>
                  <Button asChild className="cta-gradient border-0 text-primary-foreground">
                    <a href="#book">Book Free Consultation</a>
                  </Button>
                </>
              ) : (
                <>
                  <X className="w-12 h-12 text-destructive mx-auto mb-3" />
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">You May Need Further Evaluation</h3>
                  <p className="text-muted-foreground mb-4">Some answers indicate further evaluation is needed. Many "borderline" patients still qualify for <Link to="/procedures/smile-pro" className="text-primary underline">SMILE Pro</Link>, <Link to="/procedures/epi-lasik" className="text-primary underline">Epi-LASIK (PRK)</Link> or <strong>ICL</strong>. Book a free consultation to explore options.</p>
                  <Button asChild variant="outline">
                    <a href="#book">Speak to a Specialist</a>
                  </Button>
                </>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Detailed Eligibility Matrix — table for snippets/AI */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <SectionHeading title="Detailed LASIK Eligibility Criteria — 2026 Standards" subtitle="Side-by-side ideal vs acceptable vs disqualifying parameters used by Indian and international refractive surgeons." />
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-surface">
                  <TableHead className="font-display font-bold text-foreground">Parameter</TableHead>
                  <TableHead className="font-display font-bold text-accent">Ideal Candidate</TableHead>
                  <TableHead className="font-display font-bold text-foreground">Acceptable</TableHead>
                  <TableHead className="font-display font-bold text-destructive">Disqualifying</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {eligibilityMatrix.map(r => (
                  <TableRow key={r.factor}>
                    <TableCell className="font-medium text-foreground text-sm">{r.factor}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{r.ideal}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{r.acceptable}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{r.disqualifying}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Reference: <a href="https://www.aao.org/eye-health/treatments/lasik" target="_blank" rel="noopener noreferrer" className="underline">American Academy of Ophthalmology (AAO)</a>, <a href="https://www.fda.gov/medical-devices/surgery-devices/lasik" target="_blank" rel="noopener noreferrer" className="underline">US FDA LASIK guidance</a>, and Indian Refractive Surgery Society (IRSS) clinical protocols.</p>
        </div>
      </section>

      {/* Who is NOT a candidate — disqualification block */}
      <section className="section-padding bg-surface">
        <div className="container max-w-3xl">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">Who Is <span className="text-destructive">Not</span> a Candidate for LASIK?</h2>
          <p className="text-muted-foreground mb-4">Approximately 8–10% of patients are deferred or referred to alternative procedures. Common contraindications include:</p>
          <ul className="space-y-2 text-foreground">
            {[
              "Keratoconus or corneal ectasia (progressive corneal thinning)",
              "Active corneal infections such as herpes simplex keratitis",
              "Severe dry eye syndrome with Schirmer test <5 mm",
              "Glaucoma with optic nerve damage or unstable IOP",
              "Uncontrolled diabetes (HbA1c >7.5%)",
              "Pregnancy or breastfeeding (defer 3–6 months)",
              "Age below 18 years or unstable refraction in last 12 months",
              "Uncontrolled autoimmune diseases (RA, lupus, Sjögren's)",
            ].map(item => (
              <li key={item} className="flex gap-2"><X className="w-5 h-5 text-destructive shrink-0 mt-0.5" /><span>{item}</span></li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-4">If you fall into any of these groups, explore our <Link to="/unfit-for-lasik" className="text-primary underline font-semibold">Alternatives to LASIK guide</Link> covering ICL, Refractive Lens Exchange (RLE) and Phakic IOLs.</p>
        </div>
      </section>

      {/* Procedure-fit guide */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <SectionHeading title="Which LASIK Procedure Fits You Best?" subtitle="Once you qualify, the right technology depends on your prescription, corneal thickness and lifestyle." />
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Standard LASIK", best: "Budget-conscious patients, low-to-moderate myopia", link: "/procedures/standard-lasik" },
              { name: "Contoura Vision", best: "Patients seeking 20/20+ vision with topography-guided precision", link: "/procedures/contoura-vision" },
              { name: "SMILE Pro", best: "Athletes, military aspirants, thin-cornea patients (flapless)", link: "/procedures/smile-pro" },
              { name: "WaveLight Plus InnovEyes", best: "Premium AI-guided personalised treatment, best night vision", link: "/procedures/innovEyes" },
            ].map(p => (
              <Link key={p.name} to={p.link} className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-colors group">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold text-foreground group-hover:text-primary">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Best for: {p.best}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — FAQPage schema-backed */}
      <section className="section-padding bg-surface">
        <div className="container max-w-3xl">
          <SectionHeading title="LASIK Eligibility — Frequently Asked Questions" subtitle="Answers to the most common candidacy questions, optimised for voice search and AI assistants." />
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5">
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Social proof */}
      <section className="section-padding">
        <div className="container max-w-4xl text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
          </div>
          <p className="text-2xl font-display font-bold text-foreground mb-2">4.9/5 from 12,480+ verified patients</p>
          <p className="text-muted-foreground">Trusted by patients across <Link to="/locations" className="text-primary underline">3,700+ cities in India</Link> — Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur and more.</p>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="section-padding bg-surface">
        <div className="container max-w-lg">
          <SectionHeading title="Book Your Free 90-Minute LASIK Diagnostic" subtitle="No obligation. Pentacam corneal tomography, dry-eye test, dilated retina exam — all included." />
          <ConsultationForm variant="section" />
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default CandidatePage;
