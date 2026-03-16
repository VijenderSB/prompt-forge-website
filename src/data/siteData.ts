export const BRAND = {
  name: "Centre for Lasik",
  domain: "https://laser.fyi",
  phone: "+91-9667770450",
  phoneDisplay: "+91-96677 70450",
  discount: "30%",
  tagline: "India's Leading LASIK Eye Surgery Centre",
};

export interface Procedure {
  id: string;
  name: string;
  slug: string;
  price: number;
  tagline: string;
  usp: string;
  technology: string;
  duration: string;
  recovery: string;
  description: string;
}

export const PROCEDURES: Procedure[] = [
  {
    id: "1", name: "Contoura Vision", slug: "contoura-vision", price: 25500,
    tagline: "Topography-guided precision LASIK",
    usp: "22,000-point corneal mapping for personalized treatment",
    technology: "Wavelight EX500 Excimer Laser + Topolyzer Vario",
    duration: "10–15 minutes per eye",
    recovery: "24–48 hours",
    description: "Contoura Vision uses advanced topographic mapping to create a personalized treatment plan based on 22,000 unique elevation points on your cornea. This allows for corrections beyond just your spectacle prescription, addressing microscopic irregularities for potentially sharper-than-20/20 vision."
  },
  {
    id: "2", name: "WaveLight Plus InnovEyes", slug: "innovEyes", price: 49000,
    tagline: "Ray tracing technology for the sharpest vision",
    usp: "Real-time ray tracing for unmatched visual clarity",
    technology: "WaveLight Refractive Suite with InnovEyes Ray Tracing",
    duration: "12–18 minutes per eye",
    recovery: "24–48 hours",
    description: "InnovEyes combines the proven WaveLight excimer platform with revolutionary ray tracing technology, providing the most detailed and accurate correction available. Ideal for patients who demand the absolute best visual outcome."
  },
  {
    id: "3", name: "ReLEx SMILE", slug: "relex-smile", price: 40000,
    tagline: "Flapless, bladefree, keyhole LASIK",
    usp: "No flap = faster healing & minimal dry eye risk",
    technology: "Carl Zeiss VisuMax Femtosecond Laser",
    duration: "5–8 minutes per eye",
    recovery: "1–3 days",
    description: "ReLEx SMILE is a minimally invasive, flapless procedure that corrects vision through a tiny 2mm keyhole incision. With no corneal flap, patients experience significantly less dry eye and faster recovery compared to traditional LASIK."
  },
  {
    id: "4", name: "SMILE Pro", slug: "smile-pro", price: 35000,
    tagline: "Next-gen VisuMax 800 keyhole surgery",
    usp: "7-second laser treatment with robotic precision",
    technology: "Carl Zeiss VisuMax 800",
    duration: "7 seconds laser time per eye",
    recovery: "1–2 days",
    description: "SMILE Pro takes the proven SMILE procedure to the next level with the VisuMax 800 platform. The laser treatment completes in just 7 seconds per eye, with robotic centration for unmatched accuracy. The fastest keyhole vision correction available."
  },
  {
    id: "5", name: "elita SiLK", slug: "elita-silk", price: 32000,
    tagline: "Smoothpulse technology for ultra-precision",
    usp: "J&J's latest SiLK technology for smoother corneal surface",
    technology: "Johnson & Johnson elita Platform with SiLK Technology",
    duration: "8–12 minutes per eye",
    recovery: "1–2 days",
    description: "elita SiLK leverages Johnson & Johnson's proprietary Smoothpulse technology to create an incredibly smooth corneal surface after treatment. This results in fewer higher-order aberrations and clearer night vision compared to older laser systems."
  },
  {
    id: "6", name: "EPI InnovEyes", slug: "epi-innovEyes", price: 28000,
    tagline: "Flapless surface LASIK with InnovEyes tech",
    usp: "No flap, no incision — ideal for thin corneas",
    technology: "WaveLight EX500 with Surface Ablation Protocol",
    duration: "15–20 minutes per eye",
    recovery: "3–5 days",
    description: "EPI InnovEyes is a surface-based procedure that combines the precision of InnovEyes ray tracing with a no-flap, no-incision approach. Perfect for patients with thinner corneas who aren't candidates for SMILE or traditional LASIK."
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
  { q: "Is LASIK surgery safe?", a: "Yes, LASIK is one of the safest and most commonly performed elective surgeries worldwide. Over 40 million procedures have been done globally with a 99%+ satisfaction rate. At Centre for Lasik, all surgeries are performed by experienced ophthalmologists using FDA-approved technology.", category: "general" },
  { q: "How much does LASIK cost in India?", a: "LASIK surgery at Centre for Lasik ranges from ₹25,500/eye (Contoura Vision) to ₹49,000/eye (WaveLight Plus InnovEyes). We currently offer 30% off on all procedures. EMI options available starting ₹2,500/month.", category: "cost" },
  { q: "Am I eligible for LASIK?", a: "You may be a good candidate if you're 18+ years old, have had a stable eye prescription for at least 1 year, have no active eye diseases, and have adequate corneal thickness. Book a free consultation for a comprehensive eligibility assessment.", category: "eligibility" },
  { q: "How long does LASIK surgery take?", a: "The actual laser treatment takes only 7–20 seconds per eye depending on the procedure. The entire process including preparation takes about 15–30 minutes. You can go home the same day.", category: "general" },
  { q: "What is the recovery time after LASIK?", a: "Most patients notice improved vision within hours. Full recovery varies: SMILE Pro (1–2 days), Contoura Vision (24–48 hours), ReLEx SMILE (1–3 days), and EPI InnovEyes (3–5 days). Most patients return to work within 2–3 days.", category: "recovery" },
  { q: "Can I use my phone after LASIK?", a: "You should avoid screen time for the first 24 hours after surgery. After that, you can gradually increase usage. Most patients resume normal screen use within 2–3 days with lubricating eye drops.", category: "recovery" },
  { q: "Is LASIK eligible for armed forces?", a: "Yes, LASIK is accepted by the Indian Armed Forces, including Army, Navy, and Air Force. The procedure must have been done at least 6–12 months before the medical examination, depending on the branch.", category: "armed-forces" },
  { q: "Does insurance cover LASIK in India?", a: "Most health insurance plans in India do not cover LASIK as it's considered an elective procedure. However, Centre for Lasik offers affordable EMI options and a 30% discount to make it accessible.", category: "cost" },
];

export const TESTIMONIALS = [
  { name: "Priya Sharma", city: "Delhi", rating: 5, text: "Got Contoura Vision done at the Lajpat Nagar centre. The entire process was smooth and painless. I can see perfectly now — no more glasses! The 30% discount made it very affordable." },
  { name: "Rahul Verma", city: "Noida", rating: 5, text: "Had SMILE Pro surgery and the laser was done in just 7 seconds! I was back at work in 2 days. The team at Centre for Lasik is incredibly professional and caring." },
  { name: "Ananya Reddy", city: "Hyderabad", rating: 5, text: "I was nervous about LASIK but the doctors made me feel completely at ease. Chose ReLEx SMILE for the flapless approach. Best decision I ever made — wish I'd done it sooner!" },
];

export const slugify = (text: string) =>
  text.toLowerCase().replace(/[&\s]+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-");

export const formatPrice = (price: number) =>
  `₹${price.toLocaleString("en-IN")}`;

export const discountedPrice = (price: number) =>
  Math.round(price * 0.7);
