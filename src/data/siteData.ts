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
    id: "1", name: "Standard LASIK", slug: "standard-lasik", price: 8999, originalPrice: 15000, discountPercent: 40,
    tagline: "Most affordable — mild to moderate prescription",
    usp: "Proven microkeratome-assisted LASIK with wavefront-optimized excimer laser",
    technology: "Microkeratome + Excimer Laser",
    duration: "10–15 minutes per eye",
    recovery: "3–5 days",
    description: "Standard LASIK is the most proven and affordable vision correction procedure. Using a precision microkeratome and wavefront-optimized excimer laser, it delivers reliable results for mild to moderate prescriptions.",
    features: ["Affordable Option", "Proven Track Record", "Quick Procedure", "Good for Low Power"],
    techType: "flap", bladeFree: false, flapless: false, topoGuided: false,
    incision: "160μ flap", laserSpeed: "200 Hz", dryEyeRisk: "Moderate", thinCorneaSafe: false,
  },
  {
    id: "2", name: "HD Contoura Vision", slug: "contoura-vision", price: 25500, originalPrice: 42500, discountPercent: 40,
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
    id: "3", name: "Femto + Contoura", slug: "femto-contoura", price: 45000, originalPrice: 65000, discountPercent: 35,
    tagline: "Bladeless + topo-guided — best corneal precision",
    usp: "Best of both worlds — bladeless Femtosecond + topography-guided Contoura",
    technology: "Femtosecond Laser + Wavelight EX500 + Topolyzer Vario",
    duration: "12–18 minutes per eye",
    recovery: "1 day",
    description: "Femto + Contoura combines the precision of a bladeless Femtosecond flap creation with topography-guided Contoura treatment for ultimate accuracy and the fastest recovery.",
    features: ["Bladeless + Topo-Guided", "Ultimate Precision", "Fastest Recovery", "6D Eye Tracking"],
    techType: "flap", bladeFree: true, flapless: false, topoGuided: true,
    incision: "80μ flap", laserSpeed: "400 Hz", dryEyeRisk: "Low", thinCorneaSafe: true,
  },
  {
    id: "4", name: "WaveLight Plus InnovEyes", slug: "innovEyes", price: 49000, originalPrice: 70000, discountPercent: 30,
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
    id: "5", name: "SMILE Pro", slug: "smile-pro", price: 65000, originalPrice: 85000, discountPercent: 20,
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
  {
    id: "6", name: "SiLK", slug: "silk", price: 75000, originalPrice: 95000, discountPercent: 20,
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
  { q: "What is WaveLight Plus InnovEyes LASIK?", a: "WaveLight Plus InnovEyes by Alcon is the most advanced flap-based refractive laser platform. Its PerfectPulse Technology® tracks your eye position 1,050 times per second, ensuring every laser pulse lands with sub-micron accuracy at 400 Hz speed — delivering the fastest, most personalised corneal ablation.", category: "technology" },
  { q: "What is SMILE Pro eye surgery?", a: "SMILE Pro (Small Incision Lenticule Extraction) is a flapless lenticule-based procedure — the laser creates a disc of corneal tissue inside the eye, which is removed through a 2mm incision. No corneal flap, no blade. Produces significantly less dry eye and is ideal for active lifestyles. Cost: ₹65,000/eye.", category: "technology" },
  { q: "What is SiLK eye surgery?", a: "SiLK (Smooth Incision Lenticule Keratomileusis) is the latest evolution of flapless lenticule surgery. It uses an optimised laser pattern to create an ultra-smooth stromal bed through a sub-2mm incision — delivering more predictable outcomes, better contrast sensitivity, and superior night vision. Cost: ₹75,000/eye.", category: "technology" },
  { q: "What is the difference between LASIK and SMILE Pro / SiLK?", a: "LASIK creates a corneal flap and reshapes tissue with an excimer laser. SMILE Pro and SiLK are flapless — a lenticule of corneal tissue is extracted through a tiny incision. Flapless procedures have lower dry eye risk, better corneal biomechanical stability, and are preferred for active patients.", category: "general" },
  { q: "Which LASIK technology is best for me in 2026?", a: "Best for active lifestyle or thin corneas: SMILE Pro or SiLK. Best for corneal irregularities and astigmatism: HD Contoura Vision. Best AI-guided flap-based: WaveLight Plus InnovEyes. Best value: Standard LASIK (₹8,999/eye). Our free 90-minute diagnostic gives a data-backed recommendation.", category: "general" },
  { q: "Is LASIK safe for someone with -6 or -8 power glasses?", a: "Yes. With HD Contoura Vision and WaveLight Plus InnovEyes, we routinely treat prescriptions up to -12D. For -6D to -8D, Contoura Vision is typically recommended with documented outcomes showing over 30% of patients achieving better than 6/6 vision.", category: "eligibility" },
  { q: "How long does LASIK last — will vision deteriorate again?", a: "LASIK permanently reshapes the cornea, so the correction is lifelong. In over 95% of patients, vision remains stable for decades. Natural age-related presbyopia begins around 40–45 regardless of LASIK — this is a lens change, not related to the procedure.", category: "general" },
  { q: "How much does LASIK cost in India?", a: "LASIK costs: Standard LASIK ₹8,999/eye, HD Contoura Vision ₹25,500/eye, Femto+Contoura ₹45,000/eye, WaveLight Plus InnovEyes ₹49,000/eye, SMILE Pro ₹65,000/eye, SiLK ₹75,000/eye. All inclusive — diagnostics, surgery, drops, follow-ups. EMI from ₹1,500/month.", category: "cost" },
  { q: "Am I eligible for LASIK?", a: "Most adults aged 18+ with a stable prescription (unchanged for 12 months) are eligible. LASIK corrects myopia -0.5D to -12D, hyperopia +0.5D to +6D, and astigmatism up to 6D. Minimum corneal thickness of ~480 microns required. Our free 90-minute evaluation confirms eligibility.", category: "eligibility" },
  { q: "Is LASIK painful?", a: "No. Anaesthetic (numbing) eye drops are applied before the procedure. You feel zero pain — most patients describe a mild pressure sensation lasting only a few seconds. The laser itself produces no sensation. Most patients are surprised at how quick and comfortable it is.", category: "general" },
  { q: "What is the recovery time after LASIK?", a: "Day 1: Vision 80–90% clear, mild sensitivity. Day 2–3: Return to desk work, screen use. Day 7: Drive, light activity. Week 2: Swimming, gyming. Month 1: Vision fully stabilising. Month 3–6: Final stable vision. SMILE Pro and SiLK have the same recovery as Femto LASIK.", category: "recovery" },
  { q: "What diagnostic tests are done before LASIK?", a: "Our free 90-minute pre-op evaluation includes: Pentacam corneal tomography, wavefront Aberrometry, corneal Topography, Pachymetry, Schirmer dry eye test, and dilated retinal examination. This data determines which technology is safe and optimal for your eyes.", category: "general" },
  { q: "Do you offer EMI for LASIK surgery?", a: "Yes, EMI options are available from ₹1,500/month through major banks and financing partners. No-cost EMI available on select bank cards.", category: "cost" },
  { q: "Is LASIK eligible for armed forces?", a: "Yes, LASIK is accepted by the Indian Armed Forces, including Army, Navy, and Air Force. The procedure must have been done at least 6–12 months before the medical examination, depending on the branch.", category: "armed-forces" },
  { q: "Does insurance cover LASIK in India?", a: "Most health insurance plans in India do not cover LASIK as it's considered an elective procedure. However, we offer affordable EMI options and discounts to make it accessible.", category: "cost" },
];

export const TESTIMONIALS = [
  { name: "Keshav S.", city: "Delhi", age: 36, rating: 5, text: "More than fully satisfied with the excellent service and special discount on LASIK surgery. Thanks to the whole team for amazing support." },
  { name: "Sania G.", city: "Delhi", age: 23, rating: 5, text: "Had budget constraints and high eye power. The team made thin flap SBK LASIK possible within my budget with great support throughout." },
  { name: "Habib M.", city: "Noida", age: 29, rating: 5, text: "Just wonderful to see clear and sharp without glasses. The whole journey was so smooth with the right information and best possible discount." },
  { name: "Pooja M.", city: "Gurgaon", age: 36, rating: 5, text: "Used contact lenses for more than 8 years. The right guidance about latest technology helped me finally get rid of glasses at discounted rates." },
  { name: "Raj K.", city: "Delhi", age: 31, rating: 5, text: "Was nervous about surgery but the team explained everything clearly. Contoura Vision gave me better than 6/6 vision. Life-changing experience!" },
  { name: "Priya S.", city: "Mumbai", age: 28, rating: 5, text: "Got SMILE Pro done and the laser was over in 7 seconds! I was back at work in 2 days. The team at Centre for Lasik is incredibly professional." },
];

export const slugify = (text: string) =>
  text.toLowerCase().replace(/[&\s]+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-");

export const formatPrice = (price: number) =>
  `₹${price.toLocaleString("en-IN")}`;

export const discountedPrice = (price: number) =>
  Math.round(price * 0.7);
