export const BRAND = {
  name: "Centre for Lasik",
  domain: "https://laser.fyi",
  phone: "+91-9667770450",
  phoneDisplay: "+91-96677 70450",
  discount: "30%",
  tagline: "See the World Without Glasses",
};

export interface Procedure {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  tagline: string;
  usp: string;
  technology: string;
  duration: string;
  recovery: string;
  description: string;
  features: string[];
  badge?: string;
  techType: "flap" | "lenticule";
  bladeFree: boolean;
  flapless: boolean;
  topoGuided: boolean;
  incision: string;
  laserSpeed: string;
  dryEyeRisk: string;
  thinCorneaSafe: boolean;
}

export const PROCEDURES: Procedure[] = [
  {
    id: "0", name: "Standard LASIK", slug: "standard-lasik", price: 11249, originalPrice: 18750, discountPercent: 40,
    tagline: "Affordable bladeless laser vision correction — proven & trusted",
    usp: "Budget-friendly LASIK with proven excimer laser technology for clear vision",
    technology: "Excimer Laser Platform",
    duration: "10–15 minutes per eye",
    recovery: "2–3 days",
    description: "Standard LASIK is the most affordable entry point to laser vision correction. Using a proven excimer laser platform, it corrects myopia, hyperopia, and astigmatism with a quick, painless procedure. Ideal for patients seeking freedom from glasses at the most accessible price point.",
    features: ["Most Affordable", "Proven Technology", "Quick Procedure", "EMI from ₹750/mo"],
    badge: "Value",
    techType: "flap", bladeFree: false, flapless: false, topoGuided: false,
    incision: "100μ flap", laserSpeed: "250 Hz", dryEyeRisk: "Moderate", thinCorneaSafe: false,
  },
  {
    id: "1", name: "WaveLight Plus InnovEyes", slug: "innovEyes", price: 61250, originalPrice: 87500, discountPercent: 30,
    tagline: "AI-guided 400 Hz — 1,050 eye-tracking points per second",
    usp: "PerfectPulse Technology® tracks eye 1,050 times/sec for sub-micron precision",
    technology: "WaveLight Refractive Suite with InnovEyes + PerfectPulse Technology®",
    duration: "10–15 minutes per eye",
    recovery: "1 day",
    description: "WaveLight Plus InnovEyes by Alcon is the most advanced flap-based refractive laser system. Its proprietary PerfectPulse Technology® tracks eye position 1,050 times per second, ensuring every laser pulse lands with sub-micron accuracy at 400 Hz speed.",
    features: ["PerfectPulse Technology®", "400 Hz High-Speed", "6D Eye Tracking", "Personalised Ablation"],
    badge: "Premium",
    techType: "flap", bladeFree: true, flapless: false, topoGuided: true,
    incision: "80μ flap", laserSpeed: "400 Hz", dryEyeRisk: "Low", thinCorneaSafe: true,
  },
  {
    id: "2", name: "HD Contoura Vision", slug: "contoura-vision", price: 31875, originalPrice: 53125, discountPercent: 40,
    tagline: "Topography-guided — 22,000 unique corneal data points",
    usp: "22,000-point corneal mapping for personalized treatment",
    technology: "Wavelight EX500 Excimer Laser + Topolyzer Vario",
    duration: "10–15 minutes per eye",
    recovery: "1–2 days",
    description: "Contoura Vision uses advanced topographic mapping to create a personalized treatment plan based on 22,000 unique elevation points on your cornea. This allows for corrections beyond just your spectacle prescription, addressing microscopic irregularities for potentially sharper-than-6/6 vision.",
    features: ["6/4 Super Sharp Vision", "No Halos, No Glare", "Topography-Guided", "Visual Axis Treatment"],
    badge: "Most Popular",
    techType: "flap", bladeFree: false, flapless: false, topoGuided: true,
    incision: "100μ flap", laserSpeed: "400 Hz", dryEyeRisk: "Low", thinCorneaSafe: true,
  },
  {
    id: "3", name: "EPI LASIK", slug: "epi-lasik", price: 22500, originalPrice: 37500, discountPercent: 40,
    tagline: "Non-detectable laser vision correction — no flap, no cut",
    usp: "Surface ablation technique — cornea remains untouched structurally, ideal for thin corneas",
    technology: "Advanced Excimer Laser with Epi-separator",
    duration: "15–20 minutes per eye",
    recovery: "5–7 days",
    description: "EPI LASIK is a non-detectable, flapless surface ablation procedure. Unlike traditional LASIK, it does not cut into the corneal stroma — making it structurally the safest option. The epithelial sheet is gently separated and repositioned after laser reshaping. Ideal for thin corneas, contact sports athletes, and armed forces candidates.",
    features: ["No Flap Created", "Structurally Safest", "Thin Cornea Friendly", "Armed Forces Approved"],
    techType: "flap", bladeFree: true, flapless: true, topoGuided: false,
    incision: "No incision", laserSpeed: "400 Hz", dryEyeRisk: "Moderate", thinCorneaSafe: true,
  },
  {
    id: "4", name: "SiLK", slug: "silk", price: 93750, originalPrice: 118750, discountPercent: 20,
    tagline: "Premium lenticule — ultra-smooth stromal bed, best night vision",
    usp: "Next-gen lenticule tech with sub-2mm incision and ultra-smooth stromal bed",
    technology: "Johnson & Johnson elita Platform with SiLK Technology",
    duration: "8–12 minutes per eye",
    recovery: "1 day",
    description: "SiLK (Smooth Incision Lenticule Keratomileusis) is the latest evolution in flapless lenticule surgery, featuring a sub-2mm incision and an ultra-smooth stromal bed. Clinical evidence indicates superior night vision and more predictable outcomes.",
    features: ["Ultra-Smooth Stromal Bed", "Sub-2mm Incision", "Least Biomechanical Impact", "Best Night Vision"],
    badge: "Latest Tech",
    techType: "lenticule", bladeFree: true, flapless: true, topoGuided: false,
    incision: "<2mm incision", laserSpeed: "500 Hz", dryEyeRisk: "Lowest", thinCorneaSafe: true,
  },
  {
    id: "5", name: "SMILE Pro", slug: "smile-pro", price: 81250, originalPrice: 106250, discountPercent: 20,
    tagline: "Flapless lenticule — 2mm incision, minimal dry eye",
    usp: "No flap, no blade — 2mm micro-incision only, fastest recovery",
    technology: "Carl Zeiss VisuMax 800",
    duration: "7 seconds laser time per eye",
    recovery: "1 day",
    description: "SMILE Pro is a flapless lenticule-based surgery. Instead of creating a corneal flap, the femtosecond laser cuts a disc of corneal tissue which is removed through a tiny 2mm incision. Preserves more corneal strength with significantly less dry eye.",
    features: ["Flapless — No Flap", "2mm Micro-Incision", "Minimal Dry Eye", "Thin Cornea Friendly"],
    techType: "lenticule", bladeFree: true, flapless: true, topoGuided: false,
    incision: "2mm incision", laserSpeed: "500 Hz", dryEyeRisk: "Lowest", thinCorneaSafe: true,
  },
];

export const STATES = [
  "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi NCR", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export const TOP_CITIES = [
  { name: "Delhi", state: "Delhi NCR", slug: "delhi" },
  { name: "Noida", state: "Delhi NCR", slug: "noida" },
  { name: "Gurgaon", state: "Haryana", slug: "gurgaon" },
  { name: "Mumbai", state: "Maharashtra", slug: "mumbai" },
  { name: "Pune", state: "Maharashtra", slug: "pune" },
  { name: "Bangalore", state: "Karnataka", slug: "bangalore" },
  { name: "Hyderabad", state: "Telangana", slug: "hyderabad" },
  { name: "Chennai", state: "Tamil Nadu", slug: "chennai" },
  { name: "Kolkata", state: "West Bengal", slug: "kolkata" },
  { name: "Jaipur", state: "Rajasthan", slug: "jaipur" },
];

export const CENTRES = [
  { name: "Centre for Lasik - Lajpat Nagar", slug: "lajpat-nagar", city: "Delhi", state: "Delhi NCR", hospital: "Centre for Sight", address: "E-33, Lajpat Nagar Part 2, New Delhi 110024", phone: "+91-9667770450", lat: 28.5700, lng: 77.2400 },
  { name: "Centre for Lasik - Rajouri Garden", slug: "rajouri-garden", city: "Delhi", state: "Delhi NCR", hospital: "Centre for Sight", address: "A-29, Rajouri Garden, New Delhi 110027", phone: "+91-9667770450", lat: 28.6492, lng: 77.1225 },
  { name: "Centre for Lasik - Dwarka", slug: "dwarka", city: "Delhi", state: "Delhi NCR", hospital: "Centre for Sight", address: "Sector 6, Dwarka, New Delhi 110075", phone: "+91-9667770450", lat: 28.5823, lng: 77.0500 },
  { name: "Centre for Lasik - Noida", slug: "noida", city: "Noida", state: "Delhi NCR", hospital: "Centre for Sight", address: "H-33, Sector 18, Noida 201301", phone: "+91-9667770450", lat: 28.5706, lng: 77.3219 },
  { name: "Centre for Lasik - Gurgaon", slug: "gurgaon", city: "Gurgaon", state: "Haryana", hospital: "Centre for Sight", address: "SCO 834, Sector 22, Gurgaon 122002", phone: "+91-9667770450", lat: 28.4595, lng: 77.0266 },
];

export const FAQS = [
  // Technology (10)
  { q: "What is WaveLight Plus InnovEyes LASIK?", a: "WaveLight Plus InnovEyes by Alcon is the most advanced flap-based refractive laser platform. Its PerfectPulse Technology® tracks your eye position 1,050 times per second, ensuring every laser pulse lands with sub-micron accuracy at 400 Hz speed — delivering the fastest, most personalised corneal ablation.", category: "technology" },
  { q: "What is SMILE Pro eye surgery?", a: "SMILE Pro (Small Incision Lenticule Extraction) is a flapless lenticule-based procedure — the laser creates a disc of corneal tissue inside the eye, which is removed through a 2mm incision. No corneal flap, no blade. Produces significantly less dry eye and is ideal for active lifestyles. Cost: ₹65,000/eye.", category: "technology" },
  { q: "What is SiLK eye surgery?", a: "SiLK (Smooth Incision Lenticule Keratomileusis) is the latest evolution of flapless lenticule surgery. It uses an optimised laser pattern to create an ultra-smooth stromal bed through a sub-2mm incision — delivering more predictable outcomes, better contrast sensitivity, and superior night vision. Cost: ₹75,000/eye.", category: "technology" },
  { q: "What is EPI LASIK?", a: "EPI LASIK is a non-detectable surface ablation procedure where the epithelial layer is gently separated instead of cutting a flap. The corneal structure remains intact, making it the safest option for thin corneas, contact sports athletes, and armed forces candidates.", category: "technology" },
  { q: "What is HD Contoura Vision?", a: "HD Contoura Vision uses 22,000-point topographic mapping to create a fully personalized ablation profile. It treats on the visual axis rather than the pupillary axis, which clinical data shows can deliver better-than-6/6 vision in over 30% of patients.", category: "technology" },
  { q: "What is the difference between EPI LASIK and standard LASIK?", a: "Standard LASIK creates a corneal flap using a blade or femtosecond laser. EPI LASIK is a surface ablation technique — no flap is created. The epithelium is gently separated, the cornea is reshaped, and the epithelium heals naturally. EPI LASIK is structurally safer and preferred for thin corneas and armed forces.", category: "technology" },
  { q: "What is Femtosecond laser technology in LASIK?", a: "A femtosecond laser creates ultra-precise corneal flaps using rapid light pulses instead of a mechanical blade. This bladeless approach offers more predictable flap thickness, better outcomes, and faster healing. Used in WaveLight InnovEyes and Contoura Vision procedures.", category: "technology" },
  { q: "What is topography-guided LASIK?", a: "Topography-guided LASIK maps 22,000+ elevation points on the corneal surface to create a custom ablation profile unique to your eye. It treats micro-irregularities invisible to standard measurements, resulting in sharper vision and reduced glare/halos — especially beneficial for patients with irregular astigmatism.", category: "technology" },
  { q: "What is wavefront-optimised LASIK?", a: "Wavefront-optimised LASIK uses data from wavefront aberrometry to maintain the natural shape (asphericity) of the cornea during correction. This reduces the risk of spherical aberration, preserves contrast sensitivity, and minimises post-operative halos and glare — especially at night.", category: "technology" },
  { q: "How does eye-tracking technology work during LASIK?", a: "Modern excimer lasers use multi-dimensional eye tracking (up to 6D with 1,050 Hz frequency) to follow your eye's position in real-time. If your eye moves during the procedure, the laser pauses or adjusts instantly — ensuring every pulse is placed with sub-micron accuracy for optimal outcomes.", category: "technology" },

  // General (12)
  { q: "What is the difference between LASIK and SMILE Pro / SiLK?", a: "LASIK creates a corneal flap and reshapes tissue with an excimer laser. SMILE Pro and SiLK are flapless — a lenticule of corneal tissue is extracted through a tiny incision. Flapless procedures have lower dry eye risk, better corneal biomechanical stability, and are preferred for active patients.", category: "general" },
  { q: "Which LASIK technology is best for me in 2026?", a: "Best for active lifestyle or thin corneas: SMILE Pro or SiLK. Best for corneal irregularities and astigmatism: HD Contoura Vision. Best AI-guided flap-based: WaveLight Plus InnovEyes. Best for armed forces: EPI LASIK. Our free 90-minute diagnostic gives a data-backed recommendation.", category: "general" },
  { q: "How long does LASIK last — will vision deteriorate again?", a: "LASIK permanently reshapes the cornea, so the correction is lifelong. In over 95% of patients, vision remains stable for decades. Natural age-related presbyopia begins around 40–45 regardless of LASIK — this is a lens change, not related to the procedure.", category: "general" },
  { q: "Is LASIK painful?", a: "No. Anaesthetic (numbing) eye drops are applied before the procedure. You feel zero pain — most patients describe a mild pressure sensation lasting only a few seconds. The laser itself produces no sensation. Most patients are surprised at how quick and comfortable it is.", category: "general" },
  { q: "What diagnostic tests are done before LASIK?", a: "Our free 90-minute pre-op evaluation includes: Pentacam corneal tomography, wavefront Aberrometry, corneal Topography, Pachymetry, Schirmer dry eye test, and dilated retinal examination. This data determines which technology is safe and optimal for your eyes.", category: "general" },
  { q: "Can both eyes be treated on the same day?", a: "Yes. Both eyes are treated in the same session, one after the other. The entire procedure typically takes 15–20 minutes for both eyes. This is standard practice worldwide and reduces the total recovery period.", category: "general" },
  { q: "How do I choose between different LASIK procedures?", a: "Your choice depends on your prescription, corneal thickness, lifestyle, and budget. Our free 90-minute diagnostic tests all parameters and provides a data-backed recommendation. You'll know exactly which procedures are safe and optimal for your eyes.", category: "general" },
  { q: "Will I need glasses after LASIK?", a: "Over 99% of patients achieve 6/6 (20/20) vision or better after LASIK. Reading glasses may be needed after age 40–45 due to presbyopia — a natural ageing process unrelated to LASIK. Enhancement procedures are rarely needed (<2% of cases).", category: "general" },
  { q: "Can LASIK correct both near and far vision?", a: "LASIK primarily corrects distance vision (myopia, hyperopia, astigmatism). Presbyopia (near vision loss after 40) can be addressed with monovision LASIK, where one eye is corrected for distance and the other for near. This is discussed during your consultation.", category: "general" },
  { q: "How long does the LASIK procedure take?", a: "The actual laser treatment takes 10–90 seconds per eye depending on the technology. SMILE Pro takes just 7–9 seconds. Including preparation, the entire visit lasts about 30–45 minutes for both eyes.", category: "general" },
  { q: "Is LASIK FDA-approved?", a: "Yes. All six technologies offered through Centre for Lasik — Standard LASIK, WaveLight InnovEyes, HD Contoura Vision, EPI LASIK, SMILE Pro, and SiLK — are approved by the US FDA. They are also approved by Indian regulatory authorities for safe clinical use.", category: "general" },
  { q: "What happens if I blink or move during LASIK?", a: "Modern LASIK systems use suction rings to gently hold the eye in place, and advanced eye trackers (up to 1,050 Hz) follow eye movement in real-time. If excessive movement is detected, the laser pauses instantly. Blinking is physically prevented during the procedure. It's completely safe.", category: "general" },

  // Eligibility (8)
  { q: "Is LASIK safe for someone with -6 or -8 power glasses?", a: "Yes. With HD Contoura Vision and WaveLight Plus InnovEyes, we routinely treat prescriptions up to -12D. For -6D to -8D, Contoura Vision is typically recommended with documented outcomes showing over 30% of patients achieving better than 6/6 vision.", category: "eligibility" },
  { q: "Am I eligible for LASIK?", a: "Most adults aged 18+ with a stable prescription (unchanged for 12 months) are eligible. LASIK corrects myopia -0.5D to -12D, hyperopia +0.5D to +6D, and astigmatism up to 6D. Minimum corneal thickness of ~480 microns required. Our free 90-minute evaluation confirms eligibility.", category: "eligibility" },
  { q: "Can I get LASIK if I have dry eyes?", a: "Mild dry eye can often be managed before surgery. SMILE Pro and SiLK are preferred for patients with borderline dry eye as they preserve more corneal nerves. Severe dry eye may be a contraindication — our pre-op Schirmer test will determine your eligibility.", category: "eligibility" },
  { q: "Is LASIK safe for high cylindrical power (astigmatism)?", a: "Yes. HD Contoura Vision and WaveLight Plus InnovEyes are specifically designed for high astigmatism correction up to 6D. Topography-guided treatment maps 22,000 points to correct even irregular astigmatism with high precision.", category: "eligibility" },
  { q: "Can I get LASIK if I wear contact lenses?", a: "Yes, but you must discontinue soft contacts 7–14 days before your evaluation, and rigid/hard lenses 3–4 weeks before. This allows your cornea to return to its natural shape for accurate measurements.", category: "eligibility" },
  { q: "Is there an age limit for LASIK?", a: "LASIK is recommended for patients aged 18 and above with a stable prescription. There is no strict upper age limit, but patients over 40 may develop presbyopia requiring reading glasses. Patients over 55 may benefit more from lens-based procedures like ICL or cataract surgery.", category: "eligibility" },
  { q: "Can pregnant or nursing women get LASIK?", a: "LASIK is not recommended during pregnancy or breastfeeding as hormonal changes can temporarily alter your prescription. We advise waiting 3–6 months after delivery/nursing has stopped before undergoing the evaluation.", category: "eligibility" },
  { q: "Is LASIK suitable for people with diabetes?", a: "Patients with well-controlled diabetes (stable HbA1c < 7%) may be eligible for LASIK. Uncontrolled diabetes can affect wound healing and increase infection risk. A thorough pre-op evaluation including blood sugar assessment determines eligibility.", category: "eligibility" },

  // Cost & EMI (8)
  { q: "How much does LASIK cost in India?", a: "LASIK costs: EPI LASIK ₹18,000/eye, HD Contoura Vision ₹25,500/eye, WaveLight Plus InnovEyes ₹49,000/eye, SMILE Pro ₹65,000/eye, SiLK ₹75,000/eye. All inclusive — diagnostics, surgery, drops, follow-ups. EMI from ₹1,500/month.", category: "cost" },
  { q: "Do you offer EMI for LASIK surgery?", a: "Yes, EMI options are available from ₹1,500/month through major banks and financing partners. No-cost EMI available on select bank cards.", category: "cost" },
  { q: "Does insurance cover LASIK in India?", a: "Most health insurance plans in India do not cover LASIK as it's considered an elective procedure. However, we offer affordable EMI options and discounts to make it accessible.", category: "cost" },
  { q: "Why is LASIK at Centre for Lasik cheaper than walk-in rates?", a: "We are India's largest digital aggregator for laser vision correction. Our high patient volume across 50+ centres unlocks institutional pricing — the same surgeon, same technology, same quality — at up to 30% less than the walk-in MRP. Think of it as a VIP volume discount.", category: "cost" },
  { q: "What is included in the LASIK package price?", a: "Our all-inclusive packages cover: free 90-minute pre-operative diagnostic evaluation, surgeon consultation, the procedure itself, all prescribed eye drops and medications, protective eyewear, and all post-operative follow-up visits for one year.", category: "cost" },
  { q: "Are there any hidden charges?", a: "Absolutely none. The price quoted is the final price you pay — it includes diagnostics, surgery, medications, and follow-ups. There are no hidden fees, registration charges, or surprise costs. Transparency is our policy.", category: "cost" },
  { q: "Is there a refund if I'm found unfit for LASIK?", a: "Yes. If our pre-operative evaluation determines you are not a suitable candidate for LASIK, there is no charge. The 90-minute diagnostic evaluation is completely free, and there is no obligation to proceed.", category: "cost" },
  { q: "How does Centre for Lasik offer such low rates?", a: "Our aggregator model works like a VIP buying club for LASIK. By channelling thousands of patients annually across 50+ premium centres PAN India, we negotiate institutional pricing that individual clinics simply cannot offer. Same world-class surgeons, same FDA-approved technology — just better rates.", category: "cost" },

  // Recovery (6)
  { q: "What is the recovery time after LASIK?", a: "Day 1: Vision 80–90% clear, mild sensitivity. Day 2–3: Return to desk work, screen use. Day 7: Drive, light activity. Week 2: Swimming, gyming. Month 1: Vision fully stabilising. Month 3–6: Final stable vision. SMILE Pro and SiLK have the same recovery as Femto LASIK.", category: "recovery" },
  { q: "What precautions should I take after LASIK?", a: "Avoid rubbing your eyes for 4 weeks. Wear protective glasses while sleeping for 1 week. Use prescribed eye drops as directed. Avoid swimming and dusty environments for 2 weeks. Limit screen time for 2–3 days. No eye makeup for 1 week.", category: "recovery" },
  { q: "When can I return to work after LASIK?", a: "Most patients return to desk/office work within 24–48 hours. For outdoor or physically demanding jobs, 4–7 days rest is recommended. Drivers should wait until vision stabilises (usually day 3–5). Your surgeon will provide specific guidance.", category: "recovery" },
  { q: "Are there any side effects after LASIK?", a: "Temporary side effects are common and resolve within 1–3 months: mild dry eyes (managed with drops), light sensitivity, and halos/glare at night. Serious complications are extremely rare (<0.1%). Advanced technologies like Contoura Vision and SiLK have significantly reduced side-effect rates.", category: "recovery" },
  { q: "How many follow-up visits are required after LASIK?", a: "Typically 3–4 follow-up visits: Day 1, Week 1, Month 1, and Month 3. Additional visits at Month 6 and Year 1 may be scheduled. All follow-up visits are included in your package at no extra cost.", category: "recovery" },
  { q: "Can LASIK be repeated if needed?", a: "Yes, enhancement (re-treatment) is possible if there is residual refractive error after the initial procedure. This occurs in less than 2% of cases. Sufficient corneal thickness must be available. Enhancement is typically done after 3–6 months when vision has fully stabilised.", category: "recovery" },

  // Armed Forces (6)
  { q: "Is LASIK eligible for armed forces?", a: "Yes, LASIK is accepted by the Indian Armed Forces, including Army, Navy, and Air Force. EPI LASIK is especially preferred as it leaves no detectable flap. The procedure must have been done at least 6–12 months before the medical examination.", category: "armed-forces" },
  { q: "Which LASIK is best for NDA/CDS/SSB medical?", a: "EPI LASIK is the gold standard for armed forces candidates as it is a surface ablation procedure — no corneal flap is created, so there is nothing to detect during the medical examination. It fully meets the vision standards required by NDA, CDS, and SSB medicals.", category: "armed-forces" },
  { q: "Can LASIK be detected during armed forces medical examination?", a: "EPI LASIK cannot be detected as it does not create a corneal flap. Standard LASIK and Femto LASIK create a flap that can be detected under slit-lamp examination. For armed forces aspirants, we exclusively recommend EPI LASIK.", category: "armed-forces" },
  { q: "How far before the medical exam should I get LASIK?", a: "We recommend getting EPI LASIK at least 6–12 months before your medical examination. This allows complete healing, stable vision, and ensures no detectable signs during the exam.", category: "armed-forces" },
  { q: "What vision standard is required for Indian Armed Forces?", a: "The Indian Armed Forces requires uncorrected vision of 6/6 in the better eye and 6/9 in the worse eye for most entries. Corrected vision must be 6/6 in both eyes. EPI LASIK can achieve this standard with high reliability.", category: "armed-forces" },
  { q: "Is LASIK accepted for commercial pilot license?", a: "Yes, DGCA (Directorate General of Civil Aviation) permits LASIK for commercial pilots, provided the procedure was performed at least 6 months prior and vision meets the required standards. A post-LASIK ophthalmological assessment is mandatory.", category: "armed-forces" },
];

export const TESTIMONIALS = [
  { name: "Keshav S.", city: "Delhi", age: 36, rating: 5, text: "More than fully satisfied with the excellent service and special discount on LASIK surgery. Thanks to the whole team for amazing support." },
  { name: "Sania G.", city: "Delhi", age: 23, rating: 5, text: "Had budget constraints and high eye power. The team made thin flap SBK LASIK possible within my budget with great support throughout." },
  { name: "Habib M.", city: "Noida", age: 29, rating: 5, text: "Just wonderful to see clear and sharp without glasses. The whole journey was so smooth with the right information and best possible discount." },
  { name: "Pooja M.", city: "Gurgaon", age: 36, rating: 5, text: "Used contact lenses for more than 8 years. The right guidance about latest technology helped me finally get rid of glasses at discounted rates." },
  { name: "Raj K.", city: "Delhi", age: 31, rating: 5, text: "Was nervous about surgery but the team explained everything clearly. Contoura Vision gave me better than 6/6 vision. Life-changing experience!" },
  { name: "Priya S.", city: "Mumbai", age: 28, rating: 5, text: "Got SMILE Pro done and the laser was over in 7 seconds! I was back at work in 2 days. The team at Centre for Lasik is incredibly professional." },
];

export interface ProcedureTestimonial {
  name: string;
  city: string;
  age: number;
  rating: number;
  text: string;
  procedure: string;
}

export const PROCEDURE_TESTIMONIALS: ProcedureTestimonial[] = [
  // Standard LASIK
  { name: "Amit R.", city: "Delhi", age: 24, rating: 5, text: "Got Standard LASIK at ₹8,999/eye — best value for money! I had -3.5 power and now I can see perfectly without glasses. The entire process took 15 minutes.", procedure: "standard-lasik" },
  { name: "Neha T.", city: "Noida", age: 27, rating: 5, text: "I was on a tight budget and Standard LASIK was perfect. Clear vision from day 2 and EMI option made it super affordable. Highly recommend!", procedure: "standard-lasik" },
  { name: "Rohit V.", city: "Gurgaon", age: 30, rating: 5, text: "Wearing glasses for 12 years was frustrating. Standard LASIK gave me freedom at an unbeatable price. The team was very supportive.", procedure: "standard-lasik" },

  // WaveLight Plus InnovEyes
  { name: "Ankita M.", city: "Delhi", age: 32, rating: 5, text: "The PerfectPulse Technology tracking 1,050 times/sec gave me so much confidence. My vision is sharper than 6/6 now. Worth every rupee of the ₹49,000.", procedure: "innovEyes" },
  { name: "Vikram S.", city: "Mumbai", age: 35, rating: 5, text: "Had high astigmatism and was told WaveLight InnovEyes is the best option. The 400 Hz laser was incredibly fast. No halos, no glare — perfect night vision.", procedure: "innovEyes" },
  { name: "Deepa K.", city: "Bangalore", age: 29, rating: 5, text: "The AI-guided 6D eye tracking made me feel completely safe. My -7 power was corrected flawlessly. I can see individual leaves on trees now!", procedure: "innovEyes" },

  // HD Contoura Vision
  { name: "Meera J.", city: "Delhi", age: 26, rating: 5, text: "22,000-point mapping showed irregularities my regular prescription missed. After Contoura Vision, I achieved 6/4 super vision! Everything looks HD now.", procedure: "contoura-vision" },
  { name: "Arjun P.", city: "Hyderabad", age: 33, rating: 5, text: "Had -5 with -2 cylinder. Contoura Vision at ₹25,500/eye was the best decision. Zero glare at night and vision sharper than contacts ever gave me.", procedure: "contoura-vision" },
  { name: "Kavita R.", city: "Chennai", age: 28, rating: 5, text: "The topography-guided precision is incredible. My doctor showed me the 22,000-point map — every micro-irregularity was corrected. Best investment in myself.", procedure: "contoura-vision" },

  // EPI LASIK
  { name: "Capt. Ravi M.", city: "Delhi", age: 25, rating: 5, text: "Needed EPI LASIK for my armed forces medical. No flap means no detection — passed the medical with flying colors! Vision is crystal clear.", procedure: "epi-lasik" },
  { name: "Sneha D.", city: "Pune", age: 30, rating: 5, text: "Had thin corneas so regular LASIK wasn't possible. EPI LASIK was perfect — no cutting, structurally safe. Recovery took a week but totally worth it.", procedure: "epi-lasik" },
  { name: "Aakash G.", city: "Jaipur", age: 22, rating: 5, text: "As a boxer, I needed a flapless procedure. EPI LASIK at ₹18,000/eye was affordable and safe for contact sports. My cornea is untouched structurally.", procedure: "epi-lasik" },

  // SiLK
  { name: "Nisha A.", city: "Delhi", age: 31, rating: 5, text: "SiLK's ultra-smooth stromal bed technology gave me the best night vision I've ever had. Zero starbursts while driving at night. Premium experience!", procedure: "silk" },
  { name: "Dr. Sameer K.", city: "Mumbai", age: 38, rating: 5, text: "As a surgeon, I researched extensively. SiLK by J&J has the most predictable outcomes and sub-2mm incision. My vision is flawless at ₹75,000/eye.", procedure: "silk" },
  { name: "Tanya B.", city: "Gurgaon", age: 27, rating: 5, text: "Chose SiLK for the latest lenticule technology. The procedure was painless and I was back to work next day. Night vision is noticeably better than SMILE.", procedure: "silk" },

  // SMILE Pro
  { name: "Rahul T.", city: "Delhi", age: 29, rating: 5, text: "7 seconds laser time — I blinked and it was done! SMILE Pro's 2mm incision healed so fast. Back to gym in a week. Incredible technology.", procedure: "smile-pro" },
  { name: "Ishita N.", city: "Noida", age: 25, rating: 5, text: "Had dry eye concerns and SMILE Pro was recommended as it preserves more corneal nerves. Zero dry eye issues post-surgery. Best ₹65,000 I ever spent.", procedure: "smile-pro" },
  { name: "Manish C.", city: "Kolkata", age: 34, rating: 5, text: "The flapless approach of SMILE Pro gave me peace of mind. No flap displacement risk, minimal dry eye. Carl Zeiss VisuMax 800 is cutting-edge.", procedure: "smile-pro" },
];

export interface ProcedureFAQ {
  q: string;
  a: string;
  procedure: string;
}

export const PROCEDURE_FAQS: ProcedureFAQ[] = [
  // Standard LASIK
  { q: "What is Standard LASIK?", a: "Standard LASIK uses a proven excimer laser platform to reshape the cornea and correct refractive errors like myopia, hyperopia, and astigmatism. It's the most affordable laser vision correction available.", procedure: "standard-lasik" },
  { q: "How much does Standard LASIK cost?", a: "Standard LASIK costs ₹8,999 per eye (MRP ₹15,000 — 40% OFF). Both eyes: ₹17,998. EMI available from ₹750/month. Price includes diagnostics, surgery, drops, and follow-ups.", procedure: "standard-lasik" },
  { q: "Who is a good candidate for Standard LASIK?", a: "Adults aged 18+ with stable prescription, myopia up to -6D, hyperopia up to +3D, and astigmatism up to 3D. Best for patients seeking affordable vision correction with proven technology.", procedure: "standard-lasik" },
  { q: "What laser technology is used in Standard LASIK?", a: "Standard LASIK uses a proven excimer laser platform operating at 250 Hz. A corneal flap is created using a microkeratome, and the underlying tissue is reshaped for correction.", procedure: "standard-lasik" },
  { q: "What is the recovery time for Standard LASIK?", a: "Most patients achieve functional vision within 24-48 hours. Full recovery takes 2-3 days. You can return to desk work in 2 days and driving in 3-4 days.", procedure: "standard-lasik" },
  { q: "Is Standard LASIK painful?", a: "No. Numbing eye drops are applied before the procedure. You may feel mild pressure for a few seconds. The entire procedure takes 10-15 minutes per eye.", procedure: "standard-lasik" },
  { q: "What are the risks of Standard LASIK?", a: "Standard LASIK has a moderate dry eye risk and requires adequate corneal thickness. Temporary halos and glare may occur for 2-4 weeks. Over 98% of patients achieve 6/6 vision.", procedure: "standard-lasik" },
  { q: "Can I get EMI for Standard LASIK?", a: "Yes! EMI starts from just ₹750/month for both eyes. No-cost EMI available on select bank credit cards. We also accept all major insurance and corporate plans.", procedure: "standard-lasik" },
  { q: "How is Standard LASIK different from Contoura Vision?", a: "Standard LASIK corrects based on your spectacle prescription only. Contoura Vision uses 22,000-point topographic mapping for personalized treatment that can achieve better-than-6/6 vision.", procedure: "standard-lasik" },
  { q: "Is the 40% discount on Standard LASIK genuine?", a: "Yes, the discounted price of ₹8,999/eye (from ₹15,000) is a special offer available at Centre for Lasik. The price is all-inclusive with no hidden charges.", procedure: "standard-lasik" },

  // WaveLight Plus InnovEyes
  { q: "What is WaveLight Plus InnovEyes technology?", a: "WaveLight Plus InnovEyes by Alcon is the most advanced flap-based refractive laser system. It combines the WaveLight EX500 excimer laser with InnovEyes software and PerfectPulse Technology® that tracks your eye 1,050 times per second.", procedure: "innovEyes" },
  { q: "How much does WaveLight InnovEyes cost?", a: "WaveLight Plus InnovEyes costs ₹49,000 per eye (MRP ₹70,000 — 30% OFF). Both eyes: ₹98,000. EMI available from ₹4,083/month. Price is all-inclusive.", procedure: "innovEyes" },
  { q: "What is PerfectPulse Technology®?", a: "PerfectPulse Technology® is Alcon's proprietary 6D eye-tracking system that monitors eye position 1,050 times per second. It ensures every laser pulse lands with sub-micron accuracy, even if your eye moves during the procedure.", procedure: "innovEyes" },
  { q: "Why is InnovEyes better than regular LASIK?", a: "InnovEyes operates at 400 Hz (vs 250 Hz standard), has 6D eye tracking (1,050 readings/sec), offers personalized ablation profiles, and creates thinner 80μ flaps — preserving more corneal tissue.", procedure: "innovEyes" },
  { q: "What prescription range can InnovEyes treat?", a: "InnovEyes can treat myopia up to -12D, hyperopia up to +6D, and astigmatism up to 6D. Its topography-guided mode handles complex corneal irregularities and high astigmatism.", procedure: "innovEyes" },
  { q: "Is InnovEyes safe for thin corneas?", a: "Yes. InnovEyes creates an ultra-thin 80μ flap (vs 100μ standard), preserving significantly more corneal tissue. This makes it suitable for borderline thin corneas where standard LASIK may not be recommended.", procedure: "innovEyes" },
  { q: "What is the recovery time for InnovEyes?", a: "Most patients achieve clear vision within 4-6 hours. Full functional recovery in 1 day. The 400 Hz speed means less corneal tissue exposure time, leading to faster healing.", procedure: "innovEyes" },
  { q: "Does InnovEyes cause dry eye?", a: "InnovEyes has a low dry eye risk due to its thinner flap profile and faster ablation speed. Most patients experience minimal dryness that resolves within 2-4 weeks with prescribed drops.", procedure: "innovEyes" },
  { q: "Is InnovEyes US-FDA approved?", a: "Yes. The WaveLight Refractive Suite including the EX500 excimer laser and FS200 femtosecond laser are US-FDA approved. InnovEyes is the latest software upgrade on this proven platform.", procedure: "innovEyes" },
  { q: "Can I get the 30% discount on InnovEyes?", a: "Yes! The special price of ₹49,000/eye (from ₹70,000) is available at Centre for Lasik. EMI from ₹4,083/month. Book a free consultation to lock in this offer.", procedure: "innovEyes" },

  // HD Contoura Vision
  { q: "What is HD Contoura Vision?", a: "HD Contoura Vision is a topography-guided LASIK procedure that maps 22,000 unique elevation points on your cornea using the Topolyzer Vario diagnostic system. It creates a fully personalized ablation profile for potentially sharper-than-6/6 vision.", procedure: "contoura-vision" },
  { q: "How much does Contoura Vision cost?", a: "HD Contoura Vision costs ₹25,500 per eye (MRP ₹42,500 — 40% OFF). Both eyes: ₹51,000. EMI available from ₹2,125/month. All-inclusive pricing.", procedure: "contoura-vision" },
  { q: "What makes Contoura Vision different from standard LASIK?", a: "Standard LASIK corrects your glasses prescription. Contoura Vision goes beyond — mapping 22,000 corneal points to correct micro-irregularities invisible to standard diagnostics. It treats on the visual axis, not the pupillary axis.", procedure: "contoura-vision" },
  { q: "Can Contoura Vision give better than 6/6 vision?", a: "Yes. Clinical studies show over 30% of Contoura Vision patients achieve 6/4 (super vision) or better. The topography-guided approach corrects imperfections beyond what glasses can address.", procedure: "contoura-vision" },
  { q: "Is Contoura Vision safe for high power?", a: "Yes. Contoura Vision treats myopia up to -12D and astigmatism up to 6D. It's especially effective for high cylindrical power and irregular astigmatism due to its 22,000-point mapping precision.", procedure: "contoura-vision" },
  { q: "Does Contoura Vision cause halos or glare?", a: "Contoura Vision significantly reduces the risk of halos and glare compared to standard LASIK. By treating corneal micro-irregularities, it improves contrast sensitivity and night vision quality.", procedure: "contoura-vision" },
  { q: "What laser is used for Contoura Vision?", a: "Contoura Vision uses the WaveLight EX500 excimer laser (400 Hz speed) combined with the Topolyzer Vario diagnostic system for topographic mapping. Both are manufactured by Alcon.", procedure: "contoura-vision" },
  { q: "What is the recovery time for Contoura Vision?", a: "Visual recovery begins within hours. Most patients achieve 6/6 or better vision within 1-2 days. Full stabilization occurs over 1-3 months. Return to desk work in 1-2 days.", procedure: "contoura-vision" },
  { q: "Is Contoura Vision US-FDA approved?", a: "Yes. The WaveLight EX500 and Topolyzer Vario are US-FDA approved. Contoura Vision is the most widely performed topography-guided LASIK procedure globally.", procedure: "contoura-vision" },
  { q: "Is the 40% discount on Contoura Vision genuine?", a: "Yes. ₹25,500/eye (MRP ₹42,500) is a verified special offer at Centre for Lasik. No hidden charges — includes pre-op diagnostics, surgery, post-op drops, and follow-up visits.", procedure: "contoura-vision" },

  // EPI LASIK
  { q: "What is EPI LASIK?", a: "EPI LASIK is a non-detectable, flapless surface ablation procedure. Unlike traditional LASIK, no corneal flap is cut. The epithelial layer is gently separated using an epi-separator, the cornea is reshaped with an excimer laser, and the epithelium heals naturally.", procedure: "epi-lasik" },
  { q: "How much does EPI LASIK cost?", a: "EPI LASIK costs ₹18,000 per eye (MRP ₹30,000 — 40% OFF). Both eyes: ₹36,000. EMI available from ₹1,500/month. All-inclusive pricing with no hidden charges.", procedure: "epi-lasik" },
  { q: "Why is EPI LASIK called 'non-detectable'?", a: "EPI LASIK doesn't create a corneal flap or leave any structural scar in the stroma. Post-surgery, the cornea looks completely natural — making it undetectable in medical examinations, which is why armed forces prefer it.", procedure: "epi-lasik" },
  { q: "Is EPI LASIK approved for armed forces?", a: "Yes. EPI LASIK is the preferred LASIK variant for Indian Armed Forces (Army, Navy, Air Force) candidates because it leaves no detectable flap. Surgery should be done 6-12 months before the medical examination.", procedure: "epi-lasik" },
  { q: "Is EPI LASIK safe for thin corneas?", a: "Yes. EPI LASIK is the safest option for thin corneas because no corneal tissue is removed for flap creation. The full stromal thickness is preserved for laser correction.", procedure: "epi-lasik" },
  { q: "What is the recovery time for EPI LASIK?", a: "EPI LASIK has a longer recovery: Days 1-3 mild discomfort, Days 3-5 vision gradually improving, Day 5-7 bandage contact lens removed, Week 2-3 functional vision, Month 1-3 full stabilization.", procedure: "epi-lasik" },
  { q: "Why is EPI LASIK recovery longer than regular LASIK?", a: "In EPI LASIK, the surface epithelium needs to regenerate naturally (5-7 days). Regular LASIK repositions the flap immediately. The trade-off is that EPI LASIK is structurally safer with zero flap-related complications.", procedure: "epi-lasik" },
  { q: "Is EPI LASIK good for contact sports athletes?", a: "Absolutely. EPI LASIK is the gold standard for athletes in boxing, martial arts, wrestling, cricket, and other contact sports. No flap means zero risk of flap displacement from physical impact.", procedure: "epi-lasik" },
  { q: "What laser technology is used in EPI LASIK?", a: "EPI LASIK uses an advanced excimer laser (400 Hz) with an epi-separator device. The epi-separator gently lifts the epithelial sheet without cutting into the corneal stroma.", procedure: "epi-lasik" },
  { q: "Can I get the 40% discount on EPI LASIK?", a: "Yes! ₹18,000/eye (from ₹30,000) is available at Centre for Lasik. EMI from ₹1,500/month. Book your free consultation to confirm eligibility and lock the discounted price.", procedure: "epi-lasik" },

  // SiLK
  { q: "What is SiLK eye surgery?", a: "SiLK (Smooth Incision Lenticule Keratomileusis) is the latest evolution of flapless lenticule surgery by Johnson & Johnson Vision. It uses the elita™ platform to create an ultra-smooth stromal bed through a sub-2mm incision.", procedure: "silk" },
  { q: "How much does SiLK surgery cost?", a: "SiLK costs ₹75,000 per eye (MRP ₹95,000 — 20% OFF). Both eyes: ₹1,50,000. EMI available from ₹6,250/month. All-inclusive pricing.", procedure: "silk" },
  { q: "How is SiLK different from SMILE Pro?", a: "SiLK uses J&J's elita™ platform with an optimized laser pattern for an ultra-smooth stromal bed, while SMILE Pro uses Carl Zeiss VisuMax 800. Clinical data suggests SiLK delivers better contrast sensitivity and superior night vision.", procedure: "silk" },
  { q: "What is the elita™ platform?", a: "The elita™ platform by Johnson & Johnson Vision is a next-generation femtosecond laser designed specifically for lenticule extraction. It creates smoother lenticule surfaces than previous-generation systems.", procedure: "silk" },
  { q: "Does SiLK cause dry eye?", a: "SiLK has the lowest dry eye risk among all LASIK procedures. The sub-2mm incision preserves maximum corneal nerves, and the flapless approach eliminates flap-related nerve damage.", procedure: "silk" },
  { q: "What is the recovery time for SiLK?", a: "Most patients achieve functional vision within 4-6 hours. Full recovery in 1 day. Return to work next day. The ultra-smooth stromal bed promotes faster and more predictable healing.", procedure: "silk" },
  { q: "Is SiLK better than LASIK for night vision?", a: "Yes. SiLK's ultra-smooth stromal bed reduces higher-order aberrations that cause starbursts and halos at night. Clinical evidence shows SiLK delivers superior night vision compared to both flap-based LASIK and earlier lenticule procedures.", procedure: "silk" },
  { q: "Who should choose SiLK over other procedures?", a: "SiLK is ideal for patients who want the latest flapless technology, best night vision outcomes, lowest dry eye risk, and can invest in premium treatment. It's the most advanced lenticule procedure available in 2026.", procedure: "silk" },
  { q: "Is SiLK US-FDA approved?", a: "The J&J elita™ platform has received regulatory approvals and is being adopted at leading centres globally. It represents the newest advancement in lenticule extraction technology.", procedure: "silk" },
  { q: "Is the 20% discount on SiLK available now?", a: "Yes! ₹75,000/eye (from ₹95,000) at Centre for Lasik. EMI from ₹6,250/month. This offer includes comprehensive diagnostics, surgery, medications, and all follow-up visits.", procedure: "silk" },

  // SMILE Pro
  { q: "What is SMILE Pro surgery?", a: "SMILE Pro (Small Incision Lenticule Extraction) is a flapless laser eye surgery using the Carl Zeiss VisuMax 800 femtosecond laser. Instead of creating a flap, a lenticule is extracted through a tiny 2mm incision.", procedure: "smile-pro" },
  { q: "How much does SMILE Pro cost?", a: "SMILE Pro costs ₹65,000 per eye (MRP ₹85,000 — 20% OFF). Both eyes: ₹1,30,000. EMI available from ₹5,417/month. All-inclusive pricing.", procedure: "smile-pro" },
  { q: "How fast is the SMILE Pro laser?", a: "The SMILE Pro laser completes corneal treatment in just 7 seconds per eye — making it the fastest lenticule extraction procedure. Total procedure time is 8-12 minutes including preparation.", procedure: "smile-pro" },
  { q: "What is the VisuMax 800?", a: "VisuMax 800 by Carl Zeiss is the latest femtosecond laser platform for SMILE procedures. It operates at 500 Hz with enhanced precision and speed compared to the previous VisuMax 500.", procedure: "smile-pro" },
  { q: "Does SMILE Pro cause dry eye?", a: "SMILE Pro has significantly lower dry eye risk than flap-based LASIK. The 2mm incision preserves 80% more corneal nerves compared to a flap procedure. Most patients experience minimal or no dry eye symptoms.", procedure: "smile-pro" },
  { q: "What is the recovery time for SMILE Pro?", a: "Vision improves within hours. Most patients return to work the next day. Full stabilization in 1-4 weeks. The small incision and nerve preservation enable rapid healing.", procedure: "smile-pro" },
  { q: "Is SMILE Pro better than LASIK?", a: "SMILE Pro is flapless (no flap displacement risk), has lower dry eye incidence, and preserves more corneal biomechanical strength. However, it cannot treat hyperopia and has a narrower treatment range for astigmatism compared to Contoura Vision.", procedure: "smile-pro" },
  { q: "Can SMILE Pro treat astigmatism?", a: "Yes, SMILE Pro can treat astigmatism up to 5D. For higher or irregular astigmatism, topography-guided procedures like Contoura Vision or WaveLight InnovEyes may be more suitable.", procedure: "smile-pro" },
  { q: "Is SMILE Pro safe for active lifestyles?", a: "Absolutely. No flap means zero risk of flap displacement during physical activities. SMILE Pro is ideal for athletes, gym enthusiasts, swimmers, and anyone with an active lifestyle.", procedure: "smile-pro" },
  { q: "Can I get the 20% discount on SMILE Pro?", a: "Yes! ₹65,000/eye (from ₹85,000) is available at Centre for Lasik. EMI from ₹5,417/month. Book a free consultation to confirm eligibility.", procedure: "smile-pro" },
];

export const PROCEDURE_TECH_DETAILS: Record<string, { overview: string; howItWorks: string[]; idealFor: string[]; techSpecs: { label: string; value: string }[] }> = {
  "standard-lasik": {
    overview: "Standard LASIK uses a well-established excimer laser platform to reshape the cornea and correct refractive errors. A thin corneal flap is created using a microkeratome, the underlying tissue is precisely reshaped, and the flap is repositioned. It's the most affordable and widely performed laser vision correction worldwide.",
    howItWorks: [
      "Numbing eye drops are applied — zero pain throughout",
      "A thin corneal flap (~100μ) is created using a precision microkeratome",
      "The excimer laser (250 Hz) reshapes the corneal tissue based on your prescription",
      "The flap is gently repositioned — it bonds naturally within minutes",
      "Both eyes completed in 10-15 minutes total",
    ],
    idealFor: [
      "Budget-conscious patients seeking freedom from glasses",
      "Myopia up to -6D, hyperopia up to +3D, astigmatism up to 3D",
      "Patients with adequate corneal thickness (>500μ)",
      "First-time LASIK candidates with standard prescriptions",
    ],
    techSpecs: [
      { label: "Laser Type", value: "Excimer Laser" },
      { label: "Speed", value: "250 Hz" },
      { label: "Flap Method", value: "Microkeratome (100μ)" },
      { label: "Treatment Time", value: "10-15 min/eye" },
      { label: "Recovery", value: "2-3 days" },
      { label: "FDA Approved", value: "Yes" },
    ],
  },
  "innovEyes": {
    overview: "WaveLight Plus InnovEyes by Alcon represents the pinnacle of flap-based refractive surgery. The system combines the WaveLight EX500 excimer laser (fastest at 400 Hz) with the FS200 femtosecond laser and InnovEyes intelligent software. Its PerfectPulse Technology® monitors eye position 1,050 times per second across 6 dimensions, ensuring every pulse lands with sub-micron accuracy.",
    howItWorks: [
      "The FS200 femtosecond laser creates an ultra-thin 80μ flap — preserving maximum corneal tissue",
      "InnovEyes software generates a personalized ablation map using topographic and wavefront data",
      "PerfectPulse Technology® engages 6D eye tracking at 1,050 readings/second",
      "The EX500 excimer laser delivers treatment at 400 Hz — completing a -6D correction in under 6 seconds",
      "The flap is repositioned for rapid visual recovery within hours",
    ],
    idealFor: [
      "Patients seeking the most advanced flap-based LASIK available",
      "High prescriptions: myopia up to -12D, hyperopia up to +6D, astigmatism up to 6D",
      "Complex cases with high astigmatism or corneal irregularities",
      "Borderline thin corneas (80μ thin flap preserves tissue)",
      "Patients wanting fastest possible procedure and recovery",
    ],
    techSpecs: [
      { label: "Laser Platform", value: "WaveLight EX500 + FS200" },
      { label: "Speed", value: "400 Hz (fastest excimer)" },
      { label: "Eye Tracking", value: "6D, 1,050 readings/sec" },
      { label: "Flap Thickness", value: "80μ (ultra-thin)" },
      { label: "Software", value: "InnovEyes + PerfectPulse®" },
      { label: "FDA Approved", value: "Yes" },
    ],
  },
  "contoura-vision": {
    overview: "HD Contoura Vision is a topography-guided LASIK procedure that goes far beyond standard prescription correction. Using the Topolyzer Vario diagnostic system, it captures 22,000 unique elevation data points on your cornea — creating a treatment plan as unique as your fingerprint. By treating on the visual axis rather than the pupillary axis, it can deliver vision sharper than what glasses or contacts ever provided.",
    howItWorks: [
      "The Topolyzer Vario captures 22,000 elevation points across your entire cornea",
      "Software generates a unique ablation profile addressing micro-irregularities beyond your prescription",
      "A femtosecond laser creates a precise corneal flap",
      "The WaveLight EX500 excimer laser (400 Hz) delivers the personalized treatment on the visual axis",
      "Post-treatment, over 30% of patients achieve 6/4 super vision",
    ],
    idealFor: [
      "Patients wanting the sharpest possible vision (potential 6/4 super vision)",
      "High astigmatism and irregular astigmatism cases",
      "Patients concerned about night-time halos and glare",
      "Those with corneal micro-irregularities not addressed by standard LASIK",
      "Best value premium LASIK at ₹25,500/eye",
    ],
    techSpecs: [
      { label: "Diagnostic", value: "Topolyzer Vario (22,000 points)" },
      { label: "Laser", value: "WaveLight EX500 (400 Hz)" },
      { label: "Treatment Axis", value: "Visual Axis" },
      { label: "Mapping Points", value: "22,000 corneal elevation" },
      { label: "Recovery", value: "1-2 days" },
      { label: "FDA Approved", value: "Yes" },
    ],
  },
  "epi-lasik": {
    overview: "EPI LASIK is a surface ablation technique designed for patients who need structurally the safest laser vision correction. Unlike traditional LASIK, no corneal flap is cut into the stroma. Instead, the thin epithelial layer is gently separated using an epi-separator device and repositioned after laser reshaping. The cornea remains structurally intact, making this procedure undetectable in post-operative examinations.",
    howItWorks: [
      "An epi-separator gently lifts the epithelial sheet (surface layer only) without cutting the stroma",
      "The excimer laser (400 Hz) precisely reshapes the exposed corneal surface",
      "The epithelial sheet is repositioned over the treated area",
      "A bandage contact lens is placed for 5-7 days while the epithelium regenerates",
      "Complete structural integrity of the cornea is maintained throughout",
    ],
    idealFor: [
      "Indian Armed Forces candidates (Army, Navy, Air Force) — undetectable",
      "Contact sports athletes (boxing, martial arts, wrestling)",
      "Patients with thin corneas (preserves full stromal thickness)",
      "Patients who want zero flap-related risk",
      "Budget-friendly flapless option at ₹18,000/eye",
    ],
    techSpecs: [
      { label: "Technique", value: "Surface Ablation (Flapless)" },
      { label: "Laser", value: "Excimer Laser (400 Hz)" },
      { label: "Incision", value: "No incision / No flap" },
      { label: "Detection", value: "Non-detectable post-op" },
      { label: "Recovery", value: "5-7 days" },
      { label: "Armed Forces", value: "Approved / Preferred" },
    ],
  },
  "silk": {
    overview: "SiLK (Smooth Incision Lenticule Keratomileusis) represents the newest generation of flapless lenticule extraction surgery. Developed by Johnson & Johnson Vision on their elita™ platform, SiLK uses an optimized femtosecond laser pattern to create an ultra-smooth stromal bed — a key advancement that improves visual quality, reduces higher-order aberrations, and delivers clinically superior night vision compared to earlier lenticule procedures.",
    howItWorks: [
      "The J&J elita™ femtosecond laser creates a thin lenticule (disc) of corneal tissue inside the cornea",
      "An optimized laser pattern ensures the stromal bed has ultra-smooth surface quality",
      "The lenticule is extracted through a sub-2mm incision — no flap, minimal nerve disruption",
      "The cornea naturally reshapes as the void left by the lenticule changes its curvature",
      "Recovery begins immediately — most patients see clearly within hours",
    ],
    idealFor: [
      "Patients wanting the latest and most advanced lenticule technology",
      "Those prioritizing best night vision and contrast sensitivity",
      "Active lifestyles — flapless with sub-2mm incision",
      "Patients with dry eye concerns (lowest dry eye risk)",
      "Patients willing to invest in premium outcomes",
    ],
    techSpecs: [
      { label: "Platform", value: "J&J elita™" },
      { label: "Technique", value: "Lenticule Extraction (Flapless)" },
      { label: "Incision Size", value: "Sub-2mm" },
      { label: "Laser Speed", value: "500 Hz" },
      { label: "Stromal Bed", value: "Ultra-smooth (optimized pattern)" },
      { label: "Dry Eye Risk", value: "Lowest" },
    ],
  },
  "smile-pro": {
    overview: "SMILE Pro (Small Incision Lenticule Extraction) is a third-generation flapless refractive surgery performed on the Carl Zeiss VisuMax 800 platform. The femtosecond laser creates a thin lenticule of corneal tissue which is extracted through a tiny 2mm keyhole incision. With a laser time of just 7 seconds per eye, SMILE Pro is the fastest lenticule extraction procedure available, offering minimal dry eye and excellent biomechanical stability.",
    howItWorks: [
      "The VisuMax 800 femtosecond laser creates a precise lenticule inside the cornea in just 7 seconds",
      "A 2mm micro-incision is created — 80% smaller than a LASIK flap cut",
      "The surgeon extracts the lenticule through the micro-incision",
      "The cornea naturally changes shape to correct the refractive error",
      "No flap, no excimer laser, minimal nerve disruption — rapid recovery",
    ],
    idealFor: [
      "Patients wanting a flapless, minimally invasive procedure",
      "Active individuals, athletes, and sports enthusiasts",
      "Those concerned about dry eye after surgery",
      "Myopia up to -10D and astigmatism up to 5D",
      "Patients seeking fastest procedure time (7 seconds laser)",
    ],
    techSpecs: [
      { label: "Platform", value: "Carl Zeiss VisuMax 800" },
      { label: "Laser Time", value: "7 seconds/eye" },
      { label: "Incision Size", value: "2mm micro-incision" },
      { label: "Technique", value: "Lenticule Extraction (Flapless)" },
      { label: "Laser Speed", value: "500 Hz" },
      { label: "Dry Eye Risk", value: "Lowest" },
    ],
  },
};

// Page-specific FAQs for Planning pages
export const PAGE_FAQS: Record<string, { q: string; a: string }[]> = {
  "risk-recovery": [
    { q: "Is LASIK surgery safe?", a: "Yes. LASIK is one of the safest elective procedures with a 99.5% success rate. Serious complications are extremely rare (<0.1%). Modern technologies like Contoura Vision and SMILE Pro have further reduced risks." },
    { q: "What are the most common side effects after LASIK?", a: "Temporary dry eyes (20-40% of patients, resolves in 1-3 months), mild halos/glare at night (resolves in 3-6 months), and light sensitivity for a few days. These are managed effectively with prescribed medications." },
    { q: "How long does LASIK recovery take?", a: "Most patients see clearly within 24 hours. Return to work in 1-2 days for flap-based procedures, 5-7 days for EPI LASIK. Full visual stabilization takes 1-3 months." },
    { q: "Can LASIK cause blindness?", a: "No documented case of LASIK causing blindness exists in peer-reviewed literature. The laser operates on the corneal surface only and cannot reach deeper structures of the eye." },
    { q: "What happens if I move my eye during LASIK?", a: "Modern LASIK systems like WaveLight InnovEyes track your eye 1,050 times/second. If significant movement is detected, the laser automatically pauses. It's virtually impossible to cause a problem by moving." },
    { q: "Is dry eye permanent after LASIK?", a: "No. Post-LASIK dry eye is temporary in the vast majority of cases, resolving within 1-3 months. SMILE Pro and SiLK have the lowest dry eye risk due to their flapless, small-incision approach." },
    { q: "When can I drive after LASIK?", a: "Most patients can drive within 3-4 days. Your surgeon will confirm at your Day 1 follow-up. Night driving may take 1-2 weeks as halos settle." },
    { q: "Can I use screens after LASIK?", a: "You should rest your eyes for the first 24 hours. After that, screen use is fine with frequent breaks (20-20-20 rule). Most patients return to desk work in 1-2 days." },
    { q: "What if LASIK doesn't fully correct my vision?", a: "5-10% of patients may need an enhancement procedure for residual prescription. This is a minor touch-up performed 3-6 months after the original surgery, usually at no additional cost." },
    { q: "How much does LASIK cost and does risk vary by price?", a: "LASIK ranges from ₹8,999/eye (Standard) to ₹75,000/eye (SiLK). More advanced technologies generally have lower side-effect profiles, but all procedures at Centre for Lasik meet strict safety standards." },
  ],
  "blog": [
    { q: "How do I know which LASIK procedure is right for me?", a: "Our free 90-minute diagnostic evaluates your corneal thickness, prescription, eye health, and lifestyle to recommend the best technology. Book a consultation to get a personalized recommendation." },
    { q: "What is the latest LASIK technology in 2026?", a: "SiLK by J&J (ultra-smooth lenticule extraction) and WaveLight Plus InnovEyes (AI-guided 400 Hz with PerfectPulse®) are the latest advancements. Both offer superior outcomes compared to older LASIK platforms." },
    { q: "Can LASIK correct astigmatism?", a: "Yes. HD Contoura Vision and WaveLight InnovEyes are specifically designed for high astigmatism correction up to 6D using topography-guided treatment that maps 22,000 corneal points." },
    { q: "Is LASIK permanent?", a: "Yes. LASIK permanently reshapes the cornea. Over 95% of patients maintain stable vision for decades. Age-related reading difficulty (presbyopia) after 40 is unrelated to LASIK." },
    { q: "What is the minimum age for LASIK?", a: "18 years with a stable prescription (unchanged for 12 months). There's no upper age limit, though candidates over 40 may need additional evaluation for presbyopia." },
    { q: "How much does LASIK cost in India?", a: "Standard LASIK: ₹8,999/eye, EPI LASIK: ₹18,000/eye, Contoura Vision: ₹25,500/eye, InnovEyes: ₹49,000/eye, SMILE Pro: ₹65,000/eye, SiLK: ₹75,000/eye. EMI available from ₹750/month." },
    { q: "Can I get LASIK if I have dry eyes?", a: "Mild dry eye can often be treated before surgery. SMILE Pro and SiLK are recommended for dry eye patients as they preserve more corneal nerves. Severe dry eye may be a contraindication." },
    { q: "What diagnostic tests are done before LASIK?", a: "Our free 90-minute pre-op includes: Pentacam corneal tomography, wavefront aberrometry, corneal topography, pachymetry, Schirmer dry eye test, and dilated retinal examination." },
    { q: "Is LASIK covered by insurance?", a: "Most Indian health insurance plans don't cover LASIK (elective procedure). However, we offer EMI from ₹750/month and corporate tie-ups for affordable access." },
    { q: "How do I book a free LASIK consultation?", a: "Call +91-96677 70450, fill the consultation form on any page, or visit any of our centres across India. The 90-minute diagnostic is completely free with no obligation." },
  ],
  "centres": [
    { q: "How many LASIK centres does Centre for Lasik have?", a: "We operate through multiple state-of-the-art centres across Delhi NCR including Lajpat Nagar, Rajouri Garden, Dwarka, Noida, and Gurgaon — with more locations coming soon." },
    { q: "Are all centres equipped with the same technology?", a: "Yes. Every Centre for Lasik location offers the full range of procedures from Standard LASIK (₹8,999/eye) to SiLK (₹75,000/eye) with the same advanced diagnostic and surgical equipment." },
    { q: "Do I need an appointment for a LASIK consultation?", a: "Walk-ins are welcome, but appointments are recommended to ensure a dedicated 90-minute diagnostic slot. Call +91-96677 70450 or fill the form to book." },
    { q: "What should I bring to my first consultation?", a: "Bring your current glasses/prescription, any previous eye reports, and a valid ID. If you wear contact lenses, remove soft lenses 3 days before and hard lenses 7 days before the visit." },
    { q: "Is the consultation really free?", a: "Yes. The comprehensive 90-minute pre-LASIK diagnostic is completely free at all our centres. This includes Pentacam, topography, pachymetry, and retinal examination — no obligation to proceed." },
    { q: "Can I get LASIK done on the same day as consultation?", a: "Surgery is typically scheduled 1-3 days after the diagnostic to allow for any pre-operative preparation. Same-day surgery may be possible in select cases after complete evaluation." },
    { q: "What are the operating hours?", a: "All centres are open Monday to Saturday, 9:00 AM to 7:00 PM. Sunday consultations available by appointment at select locations." },
    { q: "Is parking available at your centres?", a: "Yes, all our centres have dedicated parking facilities. After surgery, we recommend having someone drive you home, so plan accordingly." },
    { q: "Do you offer pick-up/drop services?", a: "Selected centres offer complimentary pick-up and drop for surgery day. Please ask our team when booking your procedure for availability in your area." },
    { q: "How do I choose the best centre for me?", a: "All centres offer identical quality. Choose based on proximity and convenience. Our team can help you pick the nearest centre — call +91-96677 70450." },
  ],
  "international-guidelines": [
    { q: "What international standards does Centre for Lasik follow?", a: "We follow guidelines from the US FDA, WHO, AAO (American Academy of Ophthalmology), ESCRS (European Society), AIOS (All India), and NICE (UK). All our laser platforms are FDA-approved and our protocols match AAO Preferred Practice Patterns." },
    { q: "Is LASIK FDA-approved?", a: "Yes. The US FDA approved LASIK in 1999. All excimer and femtosecond laser platforms used at Centre for Lasik — WaveLight EX500, VisuMax 800, and J&J elita™ — hold valid FDA approvals with extensive clinical trial data." },
    { q: "What does the WHO say about LASIK?", a: "WHO recognizes refractive error as the leading cause of correctable visual impairment. Their Vision 2020 initiative includes refractive surgery as a key intervention when performed by qualified ophthalmologists in accredited facilities." },
    { q: "What are AAO guidelines for LASIK candidacy?", a: "AAO requires minimum age 18, stable prescription for 12 months, no keratoconus, minimum residual stromal bed of 250μm, and comprehensive pre-op including topography, pachymetry, wavefront analysis, and dry eye assessment." },
    { q: "Are SMILE and SiLK internationally approved?", a: "Yes. SMILE (VisuMax 800) is approved by FDA, CE (Europe), and has NICE guidance confirming safety. SiLK (J&J elita™) has CE approval and is in FDA clinical trials with excellent outcomes data." },
    { q: "What safety certifications do your centres have?", a: "All centres meet NABH accreditation standards as recommended by AIOS, with ISO-certified clean rooms, laminar airflow surgical suites, and continuous outcome tracking benchmarked against ESCRS survey data." },
    { q: "How does LASIK safety compare globally?", a: "Global data shows 99.5% patient satisfaction (FDA PROWL Study), <0.1% serious complications, and over 40 million procedures performed worldwide. These statistics are consistent across US, Europe, UK, and India." },
    { q: "What is the ESCRS recommendation on flap vs flapless?", a: "ESCRS validates both approaches: femtosecond laser flaps (preferred over microkeratome) for Femto-LASIK, and lenticule extraction (SMILE/SiLK) as equivalent to LASIK for myopia correction with potential biomechanical advantages." },
    { q: "Does NICE recommend LASIK on the NHS?", a: "NICE confirms LASIK is safe and efficacious (IPG164) with normal consent arrangements. However, it's classified as elective and generally not available on the NHS. SMILE also has favorable NICE guidance (IPG616)." },
    { q: "How much does internationally-standardized LASIK cost in India?", a: "At Centre for Lasik, FDA-approved procedures range from ₹8,999/eye (Standard LASIK) to ₹75,000/eye (SiLK). All procedures use the same internationally-approved platforms and protocols regardless of price tier. EMI available from ₹750/month." },
  ],
  "lasik-technology": [
    { q: "How many generations of LASIK technology exist?", a: "Five generations: PRK/Surface Ablation (1990s), Microkeratome LASIK (2000s), Femto-LASIK with topography guidance (2010s), SMILE lenticule extraction (2016+), and Advanced Lenticule Extraction like SiLK (2024+)." },
    { q: "What is the difference between flap-based and flapless LASIK?", a: "Flap-based (Standard LASIK, Contoura, InnovEyes) creates a corneal flap to access the stroma. Flapless (SMILE Pro, SiLK) extracts a lenticule through a 2mm incision — preserving more corneal nerves and biomechanical strength." },
    { q: "Which laser platform is the fastest?", a: "For excimer lasers, WaveLight EX500 operates at 500 Hz. For femtosecond/lenticule, VisuMax 800 (SMILE Pro) achieves 7-second laser time and J&J elita™ (SiLK) runs at 500 Hz with optimized patterns." },
    { q: "What is topography-guided LASIK?", a: "Topography-guided (Contoura Vision, InnovEyes) maps 22,000+ points on your cornea to create a personalized ablation profile. This corrects not just prescription but also corneal irregularities, delivering sharper vision than standard treatments." },
    { q: "Is newer technology always better?", a: "Not necessarily — the best technology depends on your specific eyes. Thin corneas may need flapless SMILE/SiLK. High astigmatism benefits from topography-guided Contoura. Standard LASIK is excellent for straightforward prescriptions. Our free diagnostic determines the best fit." },
    { q: "What is lenticule extraction?", a: "Lenticule extraction (SMILE Pro, SiLK) uses a femtosecond laser to create a thin disc (lenticule) inside the cornea, which is removed through a micro-incision. This changes corneal curvature without creating a flap — reducing dry eye and preserving corneal strength." },
    { q: "Can all technologies treat astigmatism?", a: "Yes, but with varying precision. Topography-guided treatments (Contoura Vision, InnovEyes) offer the most precise astigmatism correction up to 6D. SMILE Pro handles up to 5D. Standard LASIK corrects up to 3D of astigmatism." },
    { q: "What does eye tracking do during LASIK?", a: "Eye tracking monitors your eye position during laser delivery. WaveLight's ActiveTrack tracks at 1,050 Hz (1,050 times/second) and automatically pauses the laser if you move, ensuring the treatment is always centered perfectly." },
    { q: "Which technology has the lowest dry eye risk?", a: "SiLK and SMILE Pro have the lowest dry eye risk because their flapless, small-incision approach preserves more corneal nerves. Standard LASIK and Femto-LASIK have moderate dry eye risk that typically resolves in 1-3 months." },
    { q: "How do I choose the right LASIK technology for me?", a: "Book our free 90-minute diagnostic. We evaluate corneal thickness, topography, prescription, dry eye status, and lifestyle to recommend the best-fit technology. Call +91-96677 70450 or fill the form on this page." },
  ],
};

export interface ClinicalStudy {
  study: string;
  type: string;
  sampleSize: string;
  keyOutcomes: string;
  link: string;
  linkLabel: string;
}

export const PROCEDURE_CLINICAL_STUDIES: Record<string, ClinicalStudy[]> = {
  innovEyes: [
    { study: "FDA PMA Approval (WaveLight EX500 + InnovEyes Sightmap)", type: "Multi-center prospective trial", sampleSize: "168 patients (336 eyes)", keyOutcomes: "100% ≥20/40 UCDVA, 92% within ±0.5D MRSE, 98.4% within ±1.0D", link: "https://www.accessdata.fda.gov/cdrh_docs/pdf2/P020050S043B.pdf", linkLabel: "FDA Report" },
    { study: "InnovEyes vs. Topography-guided LASIK (2024)", type: "Prospective comparative study", sampleSize: "60 eyes", keyOutcomes: "UDVA better in InnovEyes group, 48% ≥20/12.5 vision", link: "https://pubmed.ncbi.nlm.nih.gov/39656251/", linkLabel: "PubMed" },
    { study: "Real-World Outcomes (India)", type: "Retrospective case series", sampleSize: "400 eyes", keyOutcomes: "100% ≥20/20, 89% ≥20/16, 51% ≥20/12, 8% ≥20/10", link: "https://pubmed.ncbi.nlm.nih.gov/37595291/", linkLabel: "PubMed" },
    { study: "Multi-site Clinical Practice Data", type: "Real-world observational data", sampleSize: "Multi-site", keyOutcomes: "8% ≥20/10, 50%+ ≥20/12.5, touch-up rates reduced to 0.8%", link: "https://www.lasikindelhi.com/wavelight-plus-innoveyes-by-alcon/", linkLabel: "Centre for Lasik" },
    { study: "Ray-tracing LASIK Real-World (Journal of Cataract & Refractive Surgery, 2023)", type: "Real-world clinical study", sampleSize: "300+ eyes", keyOutcomes: "100% ≥20/20, 90% ≥20/16, 50% ≥20/12.5, 8% ≥20/10, 96% MRSE within ±0.5D", link: "https://journals.lww.com/jcrs/fulltext/2023/11000/ray_tracing_guided_myopic_lasik__real_world.10.aspx", linkLabel: "LWW Journal" },
    { study: "Ray-Tracing for High Myopia & Astigmatism – Luo et al., 2025", type: "Prospective clinical study", sampleSize: "200+ eyes", keyOutcomes: "Excellent safety, predictability, and effectiveness in high myopia with astigmatism", link: "https://www.sciencedirect.com/science/article/pii/S1572100025002479", linkLabel: "ScienceDirect" },
    { study: "ZZ InnovEyes Optimization Strategy – 2024", type: "Prospective comparative study", sampleSize: "100 eyes", keyOutcomes: "Ray-tracing InnovEyes provided superior MRSE outcomes vs. automated planning", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11216322/", linkLabel: "PMC" },
    { study: "Long-Term Follow-Up of Ray-Tracing Custom LASIK – 2024", type: "Retrospective case series", sampleSize: "Multi-year cohort", keyOutcomes: "Sustained safety, accuracy, and stable results in long-term outcomes", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10896098/", linkLabel: "PMC" },
    { study: "Higher-Order Aberrations & Eye Movements – 2024", type: "Clinical analysis of HOAs", sampleSize: "250 eyes", keyOutcomes: "Demonstrated precision in coma/HOA control despite eye movements", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11588571/", linkLabel: "PMC" },
    { study: "Accuracy & Personalization via EyeVatar Digital Twin", type: "Clinical overview / modeling", sampleSize: "N/A", keyOutcomes: "EyeVatar 3D ray-tracing model improved personalization and accuracy of ablation profiles", link: "https://www.lasikindelhi.com/wavelight-plus-innoveyes-by-alcon-in-india/", linkLabel: "Centre for Lasik" },
  ],
};

export const slugify = (text: string) =>
  text.toLowerCase().replace(/[&\s]+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-");

export const formatPrice = (price: number) =>
  `₹${price.toLocaleString("en-IN")}`;

export const discountedPrice = (price: number) =>
  Math.round(price * 0.7);
