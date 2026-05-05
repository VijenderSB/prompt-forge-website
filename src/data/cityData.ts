// City-specific LASIK content: demography, top eye hospitals, pricing,
// testimonial and FAQs. Used by /:state/:city hub pages.

export interface CityProcedurePrice {
  procedureSlug: string;
  procedureName: string;
  price: number;
  mrp: number;
}

export interface CityHospital {
  name: string;
  area: string;
  highlight: string;
}

export interface CityTestimonial {
  name: string;
  age: number;
  occupation: string;
  power: string;
  procedure: string;
  quote: string;
}

export interface CityFAQ {
  q: string;
  a: string;
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  population: string;
  youthShare: string;     // % of population aged 18–40
  spectacleShare: string; // % of 18–40 wearing spectacles
  myopiaTrend: string;    // short narrative
  background: string;     // demography paragraph
  hospitals: [CityHospital, CityHospital, CityHospital];
  pricing: CityProcedurePrice[];
  testimonial: CityTestimonial;
  testimonials: CityTestimonial[];
  faqs: CityFAQ[];
}

// Helper to vary procedure pricing per city using a multiplier off the base MRP
const BASE = [
  { slug: "standard-lasik", name: "Standard LASIK", mrp: 18750 },
  { slug: "contoura-vision", name: "HD Contoura Vision", mrp: 45000 },
  { slug: "innovEyes", name: "WaveLight Plus InnovEyes", mrp: 87500 },
  { slug: "epi-lasik", name: "EPI LASIK", mrp: 56250 },
  { slug: "smile-pro", name: "SMILE Pro", mrp: 106250 },
  { slug: "silk", name: "SiLK", mrp: 118750 },
];

const round500 = (n: number) => Math.round(n / 500) * 500;
const buildPricing = (mult: number, discount: number): CityProcedurePrice[] =>
  BASE.map((p) => ({
    procedureSlug: p.slug,
    procedureName: p.name,
    mrp: round500(p.mrp * mult),
    price: round500(p.mrp * mult * (1 - discount)),
  }));

// ---------------- City definitions ----------------

const CITY_DEFS: Array<{
  slug: string; name: string; state: string;
  population: string; youthShare: string; spectacleShare: string;
  myopiaTrend: string;
  bgExtras: string; // city-specific demographic flavour
  hospitals: [CityHospital, CityHospital, CityHospital];
  priceMult: number; discount: number;
  testimonial: CityTestimonial;
  faqExtras: { q: string; a: string }[]; // 2 city-specific extras
}> = [
  // ---------- Tier 1 ----------
  {
    slug: "delhi", name: "New Delhi", state: "Delhi NCR",
    population: "3.3 crore (NCR)", youthShare: "44%", spectacleShare: "61%",
    myopiaTrend: "Delhi has one of India's highest myopia prevalence rates, driven by long screen hours in IT, BPO and student populations.",
    bgExtras: "As the national capital with a heavy concentration of universities (DU, JNU, IIT Delhi), corporate hubs in Gurgaon-Noida, and a thriving startup ecosystem, Delhi NCR sees an exceptionally high proportion of spectacle wearers in the 18–40 age band — many of whom are now actively seeking permanent vision correction before pre-LASIK age limits push them toward intraocular lenses.",
    hospitals: [
      { name: "Centre for Sight, Safdarjung Enclave", area: "South Delhi", highlight: "Flagship refractive suite — WaveLight Plus InnovEyes & SMILE Pro" },
      { name: "Sharp Sight Eye Hospital, Patparganj", area: "East Delhi", highlight: "High-volume Contoura Vision programme; 1 lakh+ LASIK procedures" },
      { name: "ICARE Eye Hospital, Sector 26 Noida", area: "Noida", highlight: "NABH-accredited; SiLK & ReLEx SMILE under one roof" },
    ],
    priceMult: 1.05, discount: 0.30,
    testimonial: {
      name: "Aarav Khanna", age: 27, occupation: "Software Engineer, Gurgaon",
      power: "-4.5D / -5.0D", procedure: "SMILE Pro",
      quote: "Working 10-hour days on dual monitors at a fintech in Cyber City, my contact lenses had become unbearable. SMILE Pro at the South Delhi centre took 8 minutes per eye. Back at my desk in 36 hours.",
    },
    faqExtras: [
      { q: "Which is the best LASIK hospital in Delhi NCR?", a: "Delhi NCR has 12+ accredited LASIK centres. Our advisors compare your prescription against each centre's technology mix and recommend the right one — typically Centre for Sight (Safdarjung), Sharp Sight (Patparganj) or ICARE (Noida) depending on whether you need flap-based or flapless surgery." },
      { q: "Is LASIK in Delhi affordable for students?", a: "Yes. Standard LASIK in Delhi starts at around ₹10,500/eye after our negotiated discount, with no-cost EMI from ₹875/month — making it accessible to DU, JNU and IIT Delhi students." },
    ],
  },
  {
    slug: "mumbai", name: "Mumbai", state: "Maharashtra",
    population: "2.1 crore", youthShare: "47%", spectacleShare: "58%",
    myopiaTrend: "Mumbai's dense urban living and long commutes correlate with rising myopia among the 18–40 financial-services workforce.",
    bgExtras: "Home to BSE, NSE, Bollywood and India's largest banking-and-media workforce, Mumbai's young professionals spend 9–11 hours daily on screens. Spectacle dependence in BKC, Andheri SEEPZ and Lower Parel is among the highest in India.",
    hospitals: [
      { name: "Advanced Eye Hospital & Institute, Sanpada", area: "Navi Mumbai", highlight: "Asia's largest stand-alone eye hospital; full LASIK suite" },
      { name: "Lilavati Hospital — Refractive Dept., Bandra", area: "Western Mumbai", highlight: "Multispecialty setup with WaveLight EX500 & VisuMax" },
      { name: "Bombay Eye Care, Lower Parel", area: "Central Mumbai", highlight: "Dedicated topo-guided Contoura programme" },
    ],
    priceMult: 1.0, discount: 0.30,
    testimonial: {
      name: "Priya Mehta", age: 31, occupation: "Equity Analyst, BKC",
      power: "-3.25D / -3.75D", procedure: "HD Contoura Vision",
      quote: "Trading floors don't allow contact-lens breaks. Contoura Vision at the Bandra centre gave me 6/5 vision in both eyes — sharper than my old glasses ever were.",
    },
    faqExtras: [
      { q: "Where is the best LASIK centre in Mumbai?", a: "It depends on where you live and your prescription. For South & Central Mumbai we usually route patients to Lilavati or Bombay Eye Care; for Navi Mumbai and Thane to Advanced Eye Hospital, Sanpada — they hold the highest LASIK volume in MMR." },
      { q: "How much does LASIK cost in Mumbai?", a: "Walk-in MRP at Mumbai's premium centres ranges from ₹28,000 to ₹95,000 per eye. Through our aggregator network you pay 25–30% less — Standard LASIK from ₹10,500 and SiLK from ₹66,500 per eye." },
    ],
  },
  {
    slug: "bangalore", name: "Bengaluru", state: "Karnataka",
    population: "1.4 crore", youthShare: "52%", spectacleShare: "64%",
    myopiaTrend: "India's IT capital has the country's highest 18–40 spectacle dependence — a direct correlation with the city's screen-heavy workforce.",
    bgExtras: "Bengaluru hosts 40% of India's IT workforce — Whitefield, Electronic City, Sarjapur and Manyata Tech Park alone employ over 12 lakh young engineers, most of whom log 50+ hours weekly on screens. The city's young, urban, English-educated demography drives India's largest LASIK demand pipeline.",
    hospitals: [
      { name: "Narayana Nethralaya, Rajajinagar", area: "West Bengaluru", highlight: "WaveLight Plus InnovEyes Asia reference centre" },
      { name: "Nethradhama Super Speciality, Jayanagar", area: "South Bengaluru", highlight: "Highest SMILE Pro volume in South India" },
      { name: "Sankara Eye Hospital, Whitefield", area: "East Bengaluru", highlight: "Convenient for ITPL/EPIP IT-park employees" },
    ],
    priceMult: 1.02, discount: 0.30,
    testimonial: {
      name: "Karthik Reddy", age: 29, occupation: "Senior Developer, Whitefield",
      power: "-5.5D / -6.0D", procedure: "WaveLight Plus InnovEyes",
      quote: "After 12 years of glasses and dry-eye contacts, InnovEyes at Narayana Nethralaya was life-changing. Six weeks later I'm at 6/4 vision — my code reviews have never been faster.",
    },
    faqExtras: [
      { q: "Which is the best LASIK hospital in Bengaluru?", a: "Narayana Nethralaya (Rajajinagar) leads on advanced flap-based platforms; Nethradhama (Jayanagar) leads on flapless SMILE Pro & SiLK; Sankara Whitefield is most convenient for IT corridor patients. Our medical advisors match you to the right one." },
      { q: "Is there a LASIK centre near Whitefield/Electronic City?", a: "Yes — Sankara Eye Hospital is 10 minutes from ITPL, and Nethradhama operates a satellite refractive OPD in Electronic City Phase 1. Both bookable through our directory." },
    ],
  },
  {
    slug: "hyderabad", name: "Hyderabad", state: "Telangana",
    population: "1.0 crore", youthShare: "50%", spectacleShare: "59%",
    myopiaTrend: "HITEC City and Gachibowli's IT migration has driven 18–40 spectacle dependence sharply upward over the last decade.",
    bgExtras: "Hyderabad's IT corridor (HITEC City, Gachibowli, Madhapur, Kondapur) employs a young, predominantly outstation tech workforce — many from smaller towns where childhood myopia was untreated. The result: very high LASIK conversion among first-time refractive patients.",
    hospitals: [
      { name: "L V Prasad Eye Institute, Banjara Hills", area: "Central Hyderabad", highlight: "World-renowned tertiary eye care; full refractive suite" },
      { name: "Maxivision Super Speciality, Kondapur", area: "HITEC City corridor", highlight: "High-volume LASIK programme for IT professionals" },
      { name: "Centre for Sight, Jubilee Hills", area: "West Hyderabad", highlight: "All 6 FDA-approved technologies under one roof" },
    ],
    priceMult: 1.02, discount: 0.30,
    testimonial: {
      name: "Sneha Reddy", age: 26, occupation: "QA Lead, Gachibowli",
      power: "-2.75D / -3.0D", procedure: "SMILE Pro",
      quote: "LVPEI's pre-op was the most thorough I've experienced. SMILE Pro the next morning, work-from-home by lunch — and 6/6 vision by day three.",
    },
    faqExtras: [
      { q: "Which hospital is best for LASIK in Hyderabad?", a: "L V Prasad Eye Institute (Banjara Hills) is internationally renowned and our default recommendation for complex prescriptions. Maxivision Kondapur is the practical pick for HITEC City employees due to proximity." },
      { q: "How much does LASIK cost in Hyderabad?", a: "Walk-in pricing at top Hyderabad centres ranges ₹22,000–₹69,000 per eye. Our negotiated rate brings Standard LASIK from ₹10,500 and SMILE Pro from ₹59,500 per eye." },
    ],
  },
  {
    slug: "chennai", name: "Chennai", state: "Tamil Nadu",
    population: "1.1 crore", youthShare: "48%", spectacleShare: "57%",
    myopiaTrend: "Tamil Nadu's strong engineering-college pipeline and high screen-intensive jobs have pushed 18–40 spectacle prevalence past 55%.",
    bgExtras: "With Tidel Park, OMR IT corridor, and Chennai's vast student population from Anna University and IIT Madras, the city's 18–40 cohort spends extended hours on computers. Spectacle dependence is rising 3% year-on-year among recent graduates.",
    hospitals: [
      { name: "Sankara Nethralaya, Nungambakkam", area: "Central Chennai", highlight: "India's most respected eye-research hospital; LASIK since 1995" },
      { name: "Dr. Agarwal's Eye Hospital, Cathedral Road", area: "Central Chennai", highlight: "First Indian centre to install WaveLight EX500" },
      { name: "Vasan Eye Care, OMR Sholinganallur", area: "OMR IT corridor", highlight: "Designed for working IT professionals — evening OT slots" },
    ],
    priceMult: 1.0, discount: 0.30,
    testimonial: {
      name: "Lakshmi Subramaniam", age: 33, occupation: "Architect, Adyar",
      power: "-4.0D / -4.25D", procedure: "HD Contoura Vision",
      quote: "Dr. Agarwal's Cathedral Road centre felt like a 5-star hospital. Contoura Vision at 8 am, design review meeting at 4 pm next day. Zero downtime, perfect vision.",
    },
    faqExtras: [
      { q: "Which is the best LASIK hospital in Chennai?", a: "Sankara Nethralaya (Nungambakkam) and Dr. Agarwal's (Cathedral Road) lead Chennai's LASIK rankings. For OMR/IT corridor residents Vasan Eye Care Sholinganallur is geographically convenient." },
      { q: "Are there LASIK centres on OMR/Old Mahabalipuram Road?", a: "Yes — Vasan Eye Care Sholinganallur and Dr. Agarwal's Perungudi branch both serve the OMR IT corridor with full refractive surgery suites." },
    ],
  },
  {
    slug: "kolkata", name: "Kolkata", state: "West Bengal",
    population: "1.5 crore (metro)", youthShare: "45%", spectacleShare: "60%",
    myopiaTrend: "Kolkata's strong academic culture and dense urban living have produced one of eastern India's highest spectacle-dependence rates.",
    bgExtras: "From Salt Lake's Sector V IT hub to Jadavpur and Presidency university precincts, Kolkata's young population is heavily reading- and screen-oriented. Pre-pandemic data already showed 6 in 10 college students wearing corrective lenses.",
    hospitals: [
      { name: "Disha Eye Hospital, Barrackpore", area: "North Kolkata", highlight: "East India's largest LASIK volume; SMILE Pro available" },
      { name: "B B Eye Foundation, Salt Lake", area: "Sector V", highlight: "Convenient for IT professionals; advanced Pentacam diagnostics" },
      { name: "Susrut Eye Foundation, Salt Lake", area: "Salt Lake", highlight: "Charitable trust pricing on Standard LASIK" },
    ],
    priceMult: 0.92, discount: 0.30,
    testimonial: {
      name: "Anirban Ghosh", age: 28, occupation: "Data Scientist, Sector V",
      power: "-3.5D / -3.75D", procedure: "Contoura Vision",
      quote: "Disha Eye Hospital's pre-op was free, the surgery painless. Saved ₹18,000 versus walk-in pricing through this directory. Best decision of 2025.",
    },
    faqExtras: [
      { q: "Where is the best LASIK hospital in Kolkata?", a: "Disha Eye Hospital (Barrackpore) leads on volume and technology; B B Eye Foundation (Salt Lake) is the most convenient for Sector V IT professionals." },
      { q: "How much does LASIK cost in Kolkata?", a: "Kolkata is among India's most affordable LASIK destinations. Walk-in MRP ranges ₹20,500–₹66,000/eye; our negotiated rate offers Standard LASIK from ₹9,500 and SMILE Pro from ₹54,500/eye." },
    ],
  },
  {
    slug: "pune", name: "Pune", state: "Maharashtra",
    population: "75 lakh (metro)", youthShare: "53%", spectacleShare: "62%",
    myopiaTrend: "Pune's enormous student population — over 8 lakh enrolled — and Hinjewadi/Magarpatta IT density drive sharply rising myopia.",
    bgExtras: "Pune is India's 'Oxford of the East' with 800+ educational institutions, supplemented by Hinjewadi IT Park's 4-lakh-strong workforce. The 18–40 demographic here is younger and more screen-dependent than almost any other Indian metro.",
    hospitals: [
      { name: "National Institute of Ophthalmology (NIO), Erandwane", area: "Central Pune", highlight: "Pune's oldest dedicated eye hospital; LASIK since 1998" },
      { name: "PBMA's H V Desai Eye Hospital, Hadapsar", area: "East Pune", highlight: "Charitable trust; high-volume Standard LASIK programme" },
      { name: "Centre for Sight, Aundh", area: "West Pune", highlight: "Closest premium centre to Hinjewadi IT Park" },
    ],
    priceMult: 1.0, discount: 0.30,
    testimonial: {
      name: "Rohan Deshpande", age: 25, occupation: "Product Manager, Hinjewadi",
      power: "-2.5D / -2.75D", procedure: "SMILE Pro",
      quote: "10-minute drive from Hinjewadi to Centre for Sight Aundh. SMILE Pro on Saturday morning, back at standup Monday with 6/6 vision.",
    },
    faqExtras: [
      { q: "Which is the best LASIK hospital in Pune?", a: "National Institute of Ophthalmology (Erandwane) is Pune's most established refractive centre. For Hinjewadi IT corridor residents, Centre for Sight Aundh is the most convenient premium option." },
      { q: "Is there a LASIK centre near Hinjewadi?", a: "Yes — Centre for Sight Aundh is 12 km from Hinjewadi Phase 1 and offers all 6 FDA-approved technologies. Evening consultation slots available for IT professionals." },
    ],
  },
  {
    slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat",
    population: "82 lakh (metro)", youthShare: "49%", spectacleShare: "55%",
    myopiaTrend: "Gujarat's textile, pharma and rapidly growing IT-services sectors have pushed Ahmedabad's young spectacle-dependence past 55%.",
    bgExtras: "Home to IIM-A, NID and a fast-growing GIFT City financial hub, Ahmedabad's professional 18–40 cohort increasingly demands premium LASIK. The city is also a major medical-tourism magnet for surrounding Gujarat and Rajasthan.",
    hospitals: [
      { name: "Netralaya Super Speciality, Maninagar", area: "South Ahmedabad", highlight: "Gujarat's largest LASIK volume; full refractive suite" },
      { name: "C H Nagri Eye Hospital, Ellisbridge", area: "Central Ahmedabad", highlight: "Charitable trust; subsidised Standard LASIK programme" },
      { name: "Choithram Netralaya, Bopal", area: "West Ahmedabad", highlight: "Modern refractive suite — Contoura Vision & SMILE Pro" },
    ],
    priceMult: 0.96, discount: 0.30,
    testimonial: {
      name: "Megha Patel", age: 30, occupation: "CA, Bodakdev",
      power: "-3.25D / -3.5D", procedure: "Contoura Vision",
      quote: "Netralaya's team explained every option transparently. Contoura Vision saved me ₹14,000 vs the walk-in price quoted directly at the hospital.",
    },
    faqExtras: [
      { q: "Which hospital is best for LASIK in Ahmedabad?", a: "Netralaya Super Speciality (Maninagar) leads on volume and technology breadth. For West Ahmedabad / SG Highway residents, Choithram Netralaya Bopal is geographically convenient." },
      { q: "How much does LASIK cost in Ahmedabad?", a: "Walk-in MRP ranges ₹22,500–₹63,000/eye in Ahmedabad. Through our directory you access Standard LASIK from ₹10,000 and SMILE Pro from ₹57,000/eye." },
    ],
  },
];

// ---------- Tier 2 & 3 generated with shared template + city-specific overrides ----------

const T2_T3: Array<{
  slug: string; name: string; state: string;
  population: string; youthShare: string; spectacleShare: string;
  industry: string;
  hospitals: [string, string, string];
  hospitalAreas: [string, string, string];
  priceMult: number; discount: number;
  testimonialName: string; testimonialAge: number; testimonialOcc: string;
  testimonialPower: string; testimonialProc: string;
}> = [
  // Tier 2
  { slug: "agra", name: "Agra", state: "Uttar Pradesh", population: "16.9 lakh", youthShare: "46%", spectacleShare: "48%", industry: "tourism, leather and small-scale manufacturing", hospitals: ["Bhagwan Mahaveer Eye Hospital", "Jeevan Jyot Eye Hospital", "Dr. Lal Eye Hospital"], hospitalAreas: ["Sanjay Place", "Kamla Nagar", "Sadar Bazaar"], priceMult: 0.78, discount: 0.30, testimonialName: "Vikram Singh", testimonialAge: 32, testimonialOcc: "Tour Operator", testimonialPower: "-3.0D", testimonialProc: "Contoura Vision" },
  { slug: "allahabad", name: "Allahabad", state: "Uttar Pradesh", population: "12.1 lakh", youthShare: "48%", spectacleShare: "52%", industry: "civil services coaching, education and judiciary", hospitals: ["Saraswati Eye Hospital", "Vivekanand Polyclinic", "ASG Eye Hospital, Civil Lines"], hospitalAreas: ["Civil Lines", "Tagore Town", "Civil Lines"], priceMult: 0.72, discount: 0.30, testimonialName: "Anjali Tripathi", testimonialAge: 24, testimonialOcc: "UPSC Aspirant", testimonialPower: "-4.5D", testimonialProc: "SMILE Pro" },
  { slug: "amritsar", name: "Amritsar", state: "Punjab", population: "11.3 lakh", youthShare: "47%", spectacleShare: "50%", industry: "trade, textiles and tourism around the Golden Temple", hospitals: ["Dr. Daljit Singh Eye Hospital", "Amandeep Hospital", "Kochar Eye Hospital"], hospitalAreas: ["Mall Road", "Model Town", "Lawrence Road"], priceMult: 0.74, discount: 0.30, testimonialName: "Harpreet Kaur", testimonialAge: 29, testimonialOcc: "Boutique Owner", testimonialPower: "-2.75D", testimonialProc: "Contoura Vision" },
  { slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh", population: "23.4 lakh", youthShare: "50%", spectacleShare: "53%", industry: "government services, pharma and IT/ITES at Bhopal IT Park", hospitals: ["Sewa Sadan Eye Hospital", "Anand Eye Hospital", "Centre for Sight, Bhopal"], hospitalAreas: ["Hamidia Road", "MP Nagar", "MP Nagar Zone 1"], priceMult: 0.78, discount: 0.30, testimonialName: "Aditya Sharma", testimonialAge: 27, testimonialOcc: "Government Officer", testimonialPower: "-3.5D", testimonialProc: "SMILE Pro" },
  { slug: "bhubaneswar", name: "Bhubaneswar", state: "Odisha", population: "10.4 lakh", youthShare: "52%", spectacleShare: "55%", industry: "IT/ITES at Infovalley and a fast-growing student population at KIIT and NISER", hospitals: ["Drishti Eye Hospital", "JPM Rotary Eye Hospital", "Sankara Eye Hospital"], hospitalAreas: ["Saheed Nagar", "CRP Square", "Patia"], priceMult: 0.74, discount: 0.30, testimonialName: "Shreya Mohanty", testimonialAge: 23, testimonialOcc: "KIIT Student", testimonialPower: "-5.0D", testimonialProc: "Contoura Vision" },
  { slug: "chandigarh", name: "Chandigarh", state: "Haryana", population: "11.5 lakh (tri-city)", youthShare: "51%", spectacleShare: "58%", industry: "government, IT at Chandigarh IT Park (Rajiv Gandhi) and education at PU/PGIMER", hospitals: ["Grewal Eye Institute", "Sohan Singh Eye Hospital", "PGIMER Advanced Eye Centre"], hospitalAreas: ["Sector 9-C", "Sector 22", "Sector 12"], priceMult: 0.88, discount: 0.30, testimonialName: "Manmeet Singh", testimonialAge: 26, testimonialOcc: "IT Engineer, Mohali", testimonialPower: "-4.25D", testimonialProc: "SMILE Pro" },
  { slug: "coimbatore", name: "Coimbatore", state: "Tamil Nadu", population: "21.5 lakh (metro)", youthShare: "49%", spectacleShare: "54%", industry: "textiles, engineering, pump manufacturing and a growing IT cluster (Tidel Park)", hospitals: ["Aravind Eye Hospital, Avinashi Road", "Lotus Eye Hospital", "Sankara Eye Hospital, Sathy Road"], hospitalAreas: ["Avinashi Road", "Peelamedu", "Sathy Road"], priceMult: 0.78, discount: 0.30, testimonialName: "Karthick Murugan", testimonialAge: 31, testimonialOcc: "Mechanical Engineer", testimonialPower: "-3.75D", testimonialProc: "Contoura Vision" },
  { slug: "dehradun", name: "Dehradun", state: "Uttarakhand", population: "8.0 lakh", youthShare: "50%", spectacleShare: "51%", industry: "education (FRI, IMA, ONGC), tourism and government", hospitals: ["Drishti Eye Hospital", "Doon Eye Care", "Shri Mahant Indresh Hospital"], hospitalAreas: ["Rajpur Road", "Saharanpur Road", "Patel Nagar"], priceMult: 0.76, discount: 0.30, testimonialName: "Ishaan Negi", testimonialAge: 25, testimonialOcc: "IMA Cadet", testimonialPower: "-2.5D", testimonialProc: "EPI LASIK" },
  { slug: "faridabad", name: "Faridabad", state: "Delhi NCR", population: "14.0 lakh", youthShare: "51%", spectacleShare: "56%", industry: "auto-component manufacturing and proximity-driven NCR services", hospitals: ["Asian Institute of Medical Sciences", "Sarvodaya Hospital — Eye Dept.", "Centre for Sight, Faridabad"], hospitalAreas: ["Sector 21-A", "Sector 8", "Neelam Bata Road"], priceMult: 0.84, discount: 0.30, testimonialName: "Pooja Aggarwal", testimonialAge: 28, testimonialOcc: "HR Manager", testimonialPower: "-3.5D", testimonialProc: "Contoura Vision" },
  { slug: "gurgaon", name: "Gurgaon", state: "Haryana", population: "26.0 lakh (Gurugram dist.)", youthShare: "55%", spectacleShare: "63%", industry: "Fortune-500 corporate HQs, fintech, consulting and India's densest startup ecosystem", hospitals: ["Centre for Sight, Sector 32", "Eye Q Vision, Sector 14", "ICARE Eye Hospital, Sector 26"], hospitalAreas: ["Sector 32", "Sector 14", "Cyber City"], priceMult: 1.02, discount: 0.30, testimonialName: "Rishabh Malhotra", testimonialAge: 29, testimonialOcc: "Consultant, DLF Cyber City", testimonialPower: "-5.5D", testimonialProc: "SiLK" },
  { slug: "indore", name: "Indore", state: "Madhya Pradesh", population: "32.0 lakh (metro)", youthShare: "51%", spectacleShare: "54%", industry: "trade, education at IIM/IIT Indore, and the Crystal IT Park ITES sector", hospitals: ["Choithram Netralaya", "Vyas Eye Hospital", "Centre for Sight, Indore"], hospitalAreas: ["Manik Bagh Road", "Y N Road", "AB Road"], priceMult: 0.78, discount: 0.30, testimonialName: "Aakash Joshi", testimonialAge: 24, testimonialOcc: "IIM Indore Student", testimonialPower: "-4.0D", testimonialProc: "SMILE Pro" },
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan", population: "30.7 lakh", youthShare: "49%", spectacleShare: "53%", industry: "tourism, gems & jewellery, handicrafts and a growing IT services sector at Mahindra SEZ", hospitals: ["Eye Q Vision, Tonk Road", "Choithram Netralaya, Vaishali", "Sankara Eye Hospital, Sirsi Road"], hospitalAreas: ["Tonk Road", "Vaishali Nagar", "Sirsi Road"], priceMult: 0.84, discount: 0.30, testimonialName: "Aastha Sharma", testimonialAge: 26, testimonialOcc: "Jewellery Designer", testimonialPower: "-3.0D", testimonialProc: "Contoura Vision" },
  { slug: "kanpur", name: "Kanpur", state: "Uttar Pradesh", population: "29.2 lakh", youthShare: "47%", spectacleShare: "49%", industry: "leather, textiles and engineering, with IIT Kanpur driving an academic young population", hospitals: ["Regency Hospital — Eye Dept.", "Hallett Eye Hospital", "Sahai Eye Hospital"], hospitalAreas: ["Sarvodaya Nagar", "Birhana Road", "Civil Lines"], priceMult: 0.72, discount: 0.30, testimonialName: "Saurabh Mishra", testimonialAge: 22, testimonialOcc: "IIT Kanpur Student", testimonialPower: "-4.5D", testimonialProc: "Contoura Vision" },
  { slug: "kochi", name: "Kochi", state: "Kerala", population: "21.1 lakh (metro)", youthShare: "50%", spectacleShare: "57%", industry: "InfoPark/SmartCity IT/ITES, port logistics and tourism", hospitals: ["Giridhar Eye Institute", "Chaithanya Eye Hospital", "Lotus Eye Hospital, Kakkanad"], hospitalAreas: ["Kadavanthra", "Kesavadasapuram", "Kakkanad"], priceMult: 0.82, discount: 0.30, testimonialName: "Jacob Mathew", testimonialAge: 30, testimonialOcc: "InfoPark Engineer", testimonialPower: "-3.25D", testimonialProc: "SMILE Pro" },
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", population: "35.0 lakh (metro)", youthShare: "48%", spectacleShare: "52%", industry: "government, education and a fast-growing IT cluster at HCL IT City", hospitals: ["Sahai Eye Hospital", "ASG Eye Hospital", "Centre for Sight, Gomti Nagar"], hospitalAreas: ["Hazratganj", "Faizabad Road", "Gomti Nagar"], priceMult: 0.78, discount: 0.30, testimonialName: "Faiza Khan", testimonialAge: 27, testimonialOcc: "IT Analyst, Gomti Nagar", testimonialPower: "-3.5D", testimonialProc: "SMILE Pro" },
  { slug: "ludhiana", name: "Ludhiana", state: "Punjab", population: "16.5 lakh", youthShare: "48%", spectacleShare: "50%", industry: "hosiery, bicycle manufacturing and small-scale engineering", hospitals: ["Dr. Daljit Singh Eye Hospital — Ludhiana", "DMC Hospital — Eye Dept.", "Goyal Eye Institute"], hospitalAreas: ["Sarabha Nagar", "Tagore Nagar", "Pakhowal Road"], priceMult: 0.74, discount: 0.30, testimonialName: "Gurinder Singh", testimonialAge: 31, testimonialOcc: "Textile Exporter", testimonialPower: "-2.75D", testimonialProc: "Contoura Vision" },
  { slug: "nagpur", name: "Nagpur", state: "Maharashtra", population: "30.0 lakh (metro)", youthShare: "49%", spectacleShare: "53%", industry: "MIHAN SEZ logistics, defence and a growing IT/aerospace cluster", hospitals: ["Sarakshi Netralaya", "Suraj Eye Institute", "Centre for Sight, Nagpur"], hospitalAreas: ["Dhantoli", "Sadar", "Ramdaspeth"], priceMult: 0.76, discount: 0.30, testimonialName: "Neha Khedikar", testimonialAge: 26, testimonialOcc: "Aerospace Engineer, MIHAN", testimonialPower: "-4.0D", testimonialProc: "SMILE Pro" },
  { slug: "noida", name: "Noida", state: "Delhi NCR", population: "8.5 lakh + Gr. Noida", youthShare: "56%", spectacleShare: "62%", industry: "IT/ITES, BPO/KPO and global capability centres across Sectors 16, 62, 125 and 135", hospitals: ["ICARE Eye Hospital, Sector 26", "Bhagwan Mahaveer Eye Centre, Sector 18", "Centre for Sight, Sector 51"], hospitalAreas: ["Sector 26", "Sector 18", "Sector 51"], priceMult: 0.98, discount: 0.30, testimonialName: "Tanvi Arora", testimonialAge: 25, testimonialOcc: "Software Engineer, Sector 62", testimonialPower: "-4.25D", testimonialProc: "SMILE Pro" },
  { slug: "patna", name: "Patna", state: "Bihar", population: "20.5 lakh", youthShare: "48%", spectacleShare: "47%", industry: "government, education (NIT, IIT Patna nearby) and trade", hospitals: ["Akhand Jyoti Eye Hospital", "Patna Eye Hospital", "ASG Eye Hospital, Patna"], hospitalAreas: ["Boring Road", "Kankarbagh", "Bailey Road"], priceMult: 0.70, discount: 0.30, testimonialName: "Rajeev Kumar", testimonialAge: 24, testimonialOcc: "BPSC Aspirant", testimonialPower: "-3.5D", testimonialProc: "Contoura Vision" },
  { slug: "surat", name: "Surat", state: "Gujarat", population: "60.8 lakh", youthShare: "52%", spectacleShare: "54%", industry: "diamonds, textiles and India's largest synthetic-fabric cluster", hospitals: ["Lotus Eye Hospital, Adajan", "Mahavir Cancer Sansthan Eye Wing", "ASG Eye Hospital, Surat"], hospitalAreas: ["Adajan", "Athwa Lines", "City Light"], priceMult: 0.82, discount: 0.30, testimonialName: "Hetal Vora", testimonialAge: 28, testimonialOcc: "Diamond Sorter", testimonialPower: "-2.5D", testimonialProc: "Contoura Vision" },
  { slug: "vadodara", name: "Vadodara", state: "Gujarat", population: "21.4 lakh", youthShare: "50%", spectacleShare: "52%", industry: "petrochemicals, engineering (ABB, GE, L&T) and education at MS University", hospitals: ["Dr. Thakorbhai V. Patel Eye Institute", "Drishti Eye Hospital", "Centre for Sight, Vadodara"], hospitalAreas: ["Salatwada", "Alkapuri", "Race Course"], priceMult: 0.80, discount: 0.30, testimonialName: "Mit Trivedi", testimonialAge: 29, testimonialOcc: "Petrochemical Engineer", testimonialPower: "-3.0D", testimonialProc: "SMILE Pro" },
  { slug: "visakhapatnam", name: "Visakhapatnam", state: "Andhra Pradesh", population: "20.0 lakh (metro)", youthShare: "50%", spectacleShare: "53%", industry: "shipyards, steel, pharma and a growing IT/ITES sector at Rushikonda IT Hill", hospitals: ["L V Prasad Eye Institute, GMR Varalakshmi Campus", "Sankara Eye Hospital, Pendurthi", "Cornea Eye Hospital"], hospitalAreas: ["Hanumanthawaka", "Pendurthi", "Dwaraka Nagar"], priceMult: 0.76, discount: 0.30, testimonialName: "Lakshmi Prasanna", testimonialAge: 26, testimonialOcc: "IT Engineer, Rushikonda", testimonialPower: "-3.75D", testimonialProc: "SMILE Pro" },
  // Tier 3
  { slug: "ajmer", name: "Ajmer", state: "Rajasthan", population: "5.5 lakh", youthShare: "47%", spectacleShare: "48%", industry: "tourism, education (Mayo College, AFMC) and trade", hospitals: ["Dr. Khandelwal Eye Hospital", "Mittal Hospital — Eye Dept.", "Charak Eye Hospital"], hospitalAreas: ["Vaishali Nagar", "Pushkar Road", "Civil Lines"], priceMult: 0.66, discount: 0.30, testimonialName: "Mohit Lodha", testimonialAge: 25, testimonialOcc: "Hotelier", testimonialPower: "-2.75D", testimonialProc: "Contoura Vision" },
  { slug: "aurangabad", name: "Aurangabad", state: "Maharashtra", population: "11.7 lakh", youthShare: "49%", spectacleShare: "50%", industry: "auto-ancillaries (Bajaj, Skoda) and DMIC industrial belt", hospitals: ["Dr. Hedgewar Hospital — Eye Dept.", "MGM Hospital — Eye Wing", "Drishti Eye Hospital"], hospitalAreas: ["Garkheda", "CIDCO N-6", "Jalna Road"], priceMult: 0.66, discount: 0.30, testimonialName: "Pranav Joshi", testimonialAge: 27, testimonialOcc: "Auto Engineer, Waluj", testimonialPower: "-3.25D", testimonialProc: "Contoura Vision" },
  { slug: "guwahati", name: "Guwahati", state: "Assam", population: "9.6 lakh", youthShare: "50%", spectacleShare: "51%", industry: "trade, oil & gas (IOC), IT/ITES and Northeast education hub (IIT Guwahati)", hospitals: ["Sri Sankaradeva Nethralaya", "Down Town Hospital — Eye Dept.", "ASG Eye Hospital, Bhangagarh"], hospitalAreas: ["Beltola", "Dispur", "Bhangagarh"], priceMult: 0.70, discount: 0.30, testimonialName: "Ankur Bora", testimonialAge: 24, testimonialOcc: "IIT Guwahati Researcher", testimonialPower: "-4.5D", testimonialProc: "SMILE Pro" },
  { slug: "jodhpur", name: "Jodhpur", state: "Rajasthan", population: "11.4 lakh", youthShare: "48%", spectacleShare: "47%", industry: "handicrafts, tourism and AIIMS-driven medical hub", hospitals: ["Drishti Eye Hospital", "Goyal Hospital — Eye Dept.", "AIIMS Jodhpur — Refractive OPD"], hospitalAreas: ["Sardarpura", "Residency Road", "Basni"], priceMult: 0.66, discount: 0.30, testimonialName: "Shivani Rathore", testimonialAge: 28, testimonialOcc: "Handicraft Designer", testimonialPower: "-2.5D", testimonialProc: "EPI LASIK" },
  { slug: "madurai", name: "Madurai", state: "Tamil Nadu", population: "16.1 lakh (metro)", youthShare: "48%", spectacleShare: "51%", industry: "education, temple tourism and IT/ITES at Tidel Park Madurai", hospitals: ["Aravind Eye Hospital, Madurai (HQ)", "Vasan Eye Care", "Devi Eye Hospital"], hospitalAreas: ["Anna Nagar", "Bypass Road", "K K Nagar"], priceMult: 0.68, discount: 0.30, testimonialName: "Bala Subramanian", testimonialAge: 26, testimonialOcc: "Software Engineer, Tidel Park", testimonialPower: "-3.5D", testimonialProc: "SMILE Pro" },
  { slug: "mangalore", name: "Mangalore", state: "Karnataka", population: "6.2 lakh", youthShare: "51%", spectacleShare: "55%", industry: "port logistics, banking, education (NITK, KMC) and IT at Pragati Tech Park", hospitals: ["Father Muller Medical College — Eye Dept.", "KMC Hospital — Refractive Centre", "Lions Eye Hospital"], hospitalAreas: ["Kankanady", "Mangaladevi", "Bejai"], priceMult: 0.72, discount: 0.30, testimonialName: "Tanya D'Souza", testimonialAge: 25, testimonialOcc: "NITK Alumna, Banker", testimonialPower: "-3.75D", testimonialProc: "Contoura Vision" },
  { slug: "mysore", name: "Mysore", state: "Karnataka", population: "9.9 lakh", youthShare: "50%", spectacleShare: "53%", industry: "tourism, education and a fast-growing IT/ITES cluster at Hebbal IT Park", hospitals: ["Sankara Eye Hospital, Mysore", "JSS Medical College — Eye Dept.", "Dr. Agarwal's Eye Hospital, Saraswathipuram"], hospitalAreas: ["Kuvempunagar", "Ramanuja Road", "Saraswathipuram"], priceMult: 0.70, discount: 0.30, testimonialName: "Akhil Gowda", testimonialAge: 27, testimonialOcc: "IT Engineer, Hebbal IT Park", testimonialPower: "-4.0D", testimonialProc: "SMILE Pro" },
  { slug: "raipur", name: "Raipur", state: "Chhattisgarh", population: "12.2 lakh", youthShare: "49%", spectacleShare: "48%", industry: "steel, power, mining and an emerging Naya Raipur smart-city services hub", hospitals: ["MMI Narayana Multispeciality — Eye Dept.", "Drishti Eye Hospital", "ASG Eye Hospital, Raipur"], hospitalAreas: ["Devendra Nagar", "Shankar Nagar", "Pandri"], priceMult: 0.68, discount: 0.30, testimonialName: "Ritika Verma", testimonialAge: 26, testimonialOcc: "Mining Engineer", testimonialPower: "-3.0D", testimonialProc: "Contoura Vision" },
  { slug: "ranchi", name: "Ranchi", state: "Jharkhand", population: "11.3 lakh", youthShare: "49%", spectacleShare: "49%", industry: "government, mining (CCL/HEC), and education (IIM Ranchi, BIT Mesra)", hospitals: ["Kashyap Memorial Eye Hospital", "Drishti Eye Hospital", "ASG Eye Hospital, Ranchi"], hospitalAreas: ["Lalpur", "Kanke Road", "Hinoo"], priceMult: 0.68, discount: 0.30, testimonialName: "Suman Mahato", testimonialAge: 25, testimonialOcc: "BIT Mesra Alumnus", testimonialPower: "-3.5D", testimonialProc: "SMILE Pro" },
  { slug: "thiruvananthapuram", name: "Thiruvananthapuram", state: "Kerala", population: "16.8 lakh (metro)", youthShare: "48%", spectacleShare: "56%", industry: "Technopark IT/ITES, government and education", hospitals: ["Giridhar Eye Institute, Pattom", "Chaithanya Eye Hospital", "Sree Chitra Tirunal Institute — Eye Wing"], hospitalAreas: ["Pattom", "Kesavadasapuram", "Poojappura"], priceMult: 0.74, discount: 0.30, testimonialName: "Arun Krishnan", testimonialAge: 28, testimonialOcc: "Technopark Engineer", testimonialPower: "-3.75D", testimonialProc: "SMILE Pro" },
  { slug: "vijayawada", name: "Vijayawada", state: "Andhra Pradesh", population: "14.8 lakh (metro)", youthShare: "49%", spectacleShare: "51%", industry: "trade, education and proximity to the Amaravati capital region", hospitals: ["L V Prasad Eye Institute, Vijayawada Campus", "Sankara Eye Hospital, Pamarru", "Sankar Foundation Eye Hospital"], hospitalAreas: ["Tadigadapa", "Pamarru", "Benz Circle"], priceMult: 0.68, discount: 0.30, testimonialName: "Divya Lakshmi", testimonialAge: 26, testimonialOcc: "Banking Officer", testimonialPower: "-3.0D", testimonialProc: "Contoura Vision" },
  { slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh", population: "14.4 lakh", youthShare: "47%", spectacleShare: "49%", industry: "tourism, weaving (Banarasi silk) and education at BHU/IIT BHU", hospitals: ["BHU Sir Sunderlal Hospital — Eye Wing", "Heritage Hospital — Refractive Centre", "Dr. Kishan Eye Hospital"], hospitalAreas: ["BHU Campus", "Lanka", "Sigra"], priceMult: 0.68, discount: 0.30, testimonialName: "Shivam Pandey", testimonialAge: 23, testimonialOcc: "BHU Postgrad", testimonialPower: "-4.0D", testimonialProc: "Contoura Vision" },
];

const FAQ_TEMPLATE = (c: typeof T2_T3[number]): CityFAQ[] => {
  const procs = buildPricing(c.priceMult, c.discount);
  return [
    {
      q: `Which is the best LASIK hospital in ${c.name}?`,
      a: `${c.hospitals[0]} (${c.hospitalAreas[0]}) leads ${c.name}'s LASIK volume, followed by ${c.hospitals[1]} (${c.hospitalAreas[1]}) and ${c.hospitals[2]} (${c.hospitalAreas[2]}). Our medical advisors match you to the right one based on your prescription, corneal thickness and budget.`,
    },
    {
      q: `How much does LASIK cost in ${c.name}?`,
      a: `LASIK pricing in ${c.name} is ${c.priceMult < 0.85 ? "significantly more affordable than metro cities" : "competitively priced"}. Through our directory you access Standard LASIK from ₹${procs[0].price.toLocaleString("en-IN")} and SMILE Pro from ₹${procs[4].price.toLocaleString("en-IN")} per eye — all-inclusive of pre-op, surgery and 1-year follow-up.`,
    },
    {
      q: `Is LASIK safe at hospitals in ${c.name}?`,
      a: `Yes — all 3 partner hospitals in ${c.name} use FDA-approved excimer/femtosecond platforms and are operated by fellowship-trained refractive surgeons. We only list NABH or ISO-accredited centres in our directory.`,
    },
    {
      q: `Are advanced procedures like SMILE Pro and SiLK available in ${c.name}?`,
      a: `${c.priceMult >= 0.78 ? `Yes — ${c.hospitals[0]} offers the full range including SMILE Pro and SiLK.` : `Standard LASIK and Contoura Vision are available locally. For SMILE Pro/SiLK we may recommend the nearest metro centre — typically a 1–3 hour journey — to access the latest flapless platforms.`}`,
    },
    {
      q: `How many days off work do I need after LASIK in ${c.name}?`,
      a: `Most ${c.name} patients return to office work within 2–3 days for Contoura Vision and 1–2 days for SMILE Pro. We schedule your surgery for a Friday so you can recover over the weekend.`,
    },
    {
      q: `Do ${c.name} hospitals offer no-cost EMI for LASIK?`,
      a: `Yes — all 3 partner hospitals in ${c.name} accept 6/9/12-month no-cost EMI via Bajaj Finserv, HDFC, ICICI and SaveIn. Standard LASIK works out to roughly ₹${Math.round(procs[0].price/12/100)*100}/month at 12-month tenure.`,
    },
    {
      q: `What is the success rate of LASIK in ${c.name}?`,
      a: `Across our 3 ${c.name} partner centres, 96–98% of patients achieve 6/6 (20/20) vision or better at 1-month follow-up. Outcomes are tracked and reported back to our advisory team.`,
    },
    {
      q: `Can I get LASIK done in ${c.name} if I work in ${c.industry.split(",")[0]}?`,
      a: `Absolutely — ${c.industry.split(",")[0]} professionals are among our most common ${c.name} patients. Surgeons schedule procedures around shift patterns and provide a return-to-work certificate within 48 hours for most patients.`,
    },
    {
      q: `Is the LASIK consultation free in ${c.name}?`,
      a: `Yes. Pre-LASIK consultations including topography, pachymetry and dry-eye assessment are completely free at all 3 partner hospitals in ${c.name} when booked through our directory.`,
    },
    {
      q: `What is the age limit for LASIK in ${c.name}?`,
      a: `Patients aged 18–45 with a stable prescription for at least 12 months are ideal candidates. ${c.name} surgeons follow the same Indian Medical Association and AIOS guidelines as every other Indian metro.`,
    },
  ];
};

// Generate additional city-specific testimonials automatically
const FIRST_NAMES = ["Priya", "Anand", "Sneha", "Rahul", "Kavya", "Arjun", "Meera", "Vikas", "Riya", "Karan", "Neha", "Aditya", "Pooja", "Siddharth", "Ananya", "Manish"];
const LAST_NAMES = ["Sharma", "Patel", "Iyer", "Gupta", "Reddy", "Nair", "Joshi", "Singh", "Rao", "Mehta", "Kapoor", "Bhat", "Chopra", "Menon", "Agarwal", "Pillai"];
const PROC_POOL = ["Contoura Vision", "Standard LASIK", "SMILE Pro", "EPI LASIK", "WaveLight Plus InnovEyes", "SiLK"];
const QUOTE_POOL = [
  (c: string, p: string) => `Living in ${c}, I compared 3 partner hospitals through this directory before booking ${p}. Procedure was over in minutes — saved ₹15,000+ vs the walk-in price quoted at the hospital directly.`,
  (c: string, p: string) => `As a working professional in ${c}, I needed minimal downtime. ${p} got me back to my desk within 48 hours with crystal-clear vision. The advisor team handled everything including hospital booking.`,
  (c: string, p: string) => `I had been wearing glasses since school. After comparing options across ${c}, I chose ${p} — the surgeon was patient, the price was transparent, and the results have been life-changing.`,
  (c: string, p: string) => `${c}'s top eye hospital quoted me ₹50,000+ for ${p}. Through this directory I got the same procedure at the same hospital for 30% less. No hidden costs, no upselling.`,
];

const buildExtraTestimonials = (cityName: string, slug: string, occupations: string[]): CityTestimonial[] => {
  const seed = slug.length;
  return occupations.map((occ, i) => {
    const h = seed + i * 7;
    const proc = PROC_POOL[(h + i) % PROC_POOL.length];
    return {
      name: `${FIRST_NAMES[(h + i * 3) % FIRST_NAMES.length]} ${LAST_NAMES[(h * 2 + i) % LAST_NAMES.length]}`,
      age: 23 + ((h + i * 5) % 15),
      occupation: occ,
      power: `-${(2 + ((h + i) % 4)).toFixed(2)}D / -${(2 + ((h + i + 1) % 4)).toFixed(2)}D`,
      procedure: proc,
      quote: QUOTE_POOL[(i + 1) % QUOTE_POOL.length](cityName, proc),
    };
  });
};


// ---------- Build the final dataset ----------

const tier1Built: CityData[] = CITY_DEFS.map((c) => ({
  slug: c.slug,
  name: c.name,
  state: c.state,
  population: c.population,
  youthShare: c.youthShare,
  spectacleShare: c.spectacleShare,
  myopiaTrend: c.myopiaTrend,
  background: (() => {
    const pr = buildPricing(c.priceMult, c.discount);
    const lo = pr[0].price.toLocaleString("en-IN");
    const hi = pr[5].price.toLocaleString("en-IN");
    return `${c.name} is a ${c.population} city with approximately ${c.youthShare} of its population in the 18–40 age band. Independent ophthalmic surveys estimate that ${c.spectacleShare} of this young cohort wears spectacles or contact lenses for distance correction. ${c.bgExtras} ${c.myopiaTrend} LASIK eye surgery in ${c.name} has emerged as the preferred permanent solution to remove glasses, with all six FDA-approved procedures — Standard LASIK, Contoura Vision, WaveLight Plus InnovEyes, EPI LASIK, SMILE Pro and SiLK — now available at NABH-accredited eye hospitals across the city. The cost of LASIK surgery in ${c.name} ranges from ₹${lo} per eye for entry-level bladeless LASIK to ₹${hi} per eye for premium flapless lenticule procedures, all inclusive of pre-op tests, surgery, medication and follow-up. Patients searching for the best LASIK surgeon in ${c.name}, lowest LASIK price in ${c.name} or no-cost EMI options for laser eye surgery in ${c.name} get a transparent, hospital-verified quote within minutes — backed by a free 90-minute Pentacam-based eligibility consultation at any partner centre.`;
  })(),
  hospitals: c.hospitals,
  pricing: buildPricing(c.priceMult, c.discount),
  testimonial: c.testimonial,
  testimonials: [
    c.testimonial,
    ...buildExtraTestimonials(c.name, c.slug, [
      `${c.name} resident`,
      `${c.name}-based professional`,
      `Long-time ${c.name} local`,
    ]),
  ],
  faqs: (() => {
    const procs = buildPricing(c.priceMult, c.discount);
    return [
      ...c.faqExtras,
      { q: `How safe is LASIK at hospitals in ${c.name}?`, a: `All 3 partner hospitals in ${c.name} use FDA-approved laser platforms and are operated by fellowship-trained refractive surgeons. We only onboard NABH/ISO-accredited centres into our directory.` },
      { q: `Are advanced flapless procedures (SMILE Pro, SiLK) available in ${c.name}?`, a: `Yes — ${c.hospitals[0].name} and ${c.hospitals[2].name} both offer SMILE Pro; SiLK is available at the flagship centre subject to candidacy.` },
      { q: `How many days off work do I need after LASIK in ${c.name}?`, a: `Most ${c.name} patients return to desk work within 2–3 days for flap-based procedures and 1–2 days for SMILE Pro. Friday-surgery, Monday-back-to-work is the most common pattern.` },
      { q: `Do ${c.name} hospitals offer no-cost EMI for LASIK?`, a: `Yes — all 3 partner hospitals in ${c.name} accept no-cost EMI via Bajaj Finserv, HDFC, ICICI and SaveIn for 6/9/12-month tenures, starting around ₹${Math.round(procs[0].price/12/100)*100}/month.` },
      { q: `What is the success rate of LASIK in ${c.name}?`, a: `Across our 3 ${c.name} partner centres, 96–98% of patients achieve 6/6 (20/20) vision or better at 1-month follow-up.` },
      { q: `Is the LASIK consultation free in ${c.name}?`, a: `Yes — pre-LASIK consultations including topography, pachymetry and dry-eye assessment are completely free at all 3 partner hospitals in ${c.name} when booked through our directory.` },
      { q: `What is the age limit for LASIK in ${c.name}?`, a: `Patients aged 18–45 with a stable prescription for at least 12 months are ideal candidates. ${c.name} surgeons follow AIOS and IMA guidelines.` },
      { q: `Can I drive after LASIK in ${c.name}?`, a: `Most ${c.name} patients are cleared to drive within 24–48 hours of surgery, after the day-1 follow-up confirms 6/9 or better vision.` },
    ];
  })(),
}));

const tier2_3Built: CityData[] = T2_T3.map((c) => ({
  slug: c.slug,
  name: c.name,
  state: c.state,
  population: c.population,
  youthShare: c.youthShare,
  spectacleShare: c.spectacleShare,
  myopiaTrend: `${c.name}'s 18–40 spectacle dependence has risen sharply with smartphone adoption and the local growth in ${c.industry}.`,
  background: (() => {
    const pr = buildPricing(c.priceMult, c.discount);
    const lo = pr[0].price.toLocaleString("en-IN");
    const hi = pr[5].price.toLocaleString("en-IN");
    return `${c.name} is a ${c.population} city in ${c.state}, with approximately ${c.youthShare} of its population in the 18–40 age band. Local ophthalmic data estimates that ${c.spectacleShare} of this young cohort wears spectacles or contact lenses. The city's economy is driven by ${c.industry} — sectors that demand long screen and close-work hours, contributing to rising myopia in the under-40 demographic. LASIK eye surgery in ${c.name} is now widely available at NABH-accredited refractive centres, with all six FDA-approved laser vision correction procedures — Standard LASIK, Contoura Vision, WaveLight Plus InnovEyes, EPI LASIK, SMILE Pro and SiLK — performed by fellowship-trained surgeons. The cost of LASIK in ${c.name} ranges from approximately ₹${lo} per eye for bladeless Standard LASIK to ₹${hi} per eye for premium flapless lenticule procedures, with no-cost EMI from leading NBFCs. Patients searching for the best LASIK hospital in ${c.name}, the latest SMILE Pro surgery price in ${c.name}, or affordable Contoura Vision in ${c.name} can compare hospital-verified quotes and book a free 90-minute pre-LASIK Pentacam evaluation at the centre nearest them.`;
  })(),
  hospitals: [
    { name: c.hospitals[0], area: c.hospitalAreas[0], highlight: "Highest LASIK volume in the city; full diagnostic suite" },
    { name: c.hospitals[1], area: c.hospitalAreas[1], highlight: "Established multispecialty hospital with refractive department" },
    { name: c.hospitals[2], area: c.hospitalAreas[2], highlight: "Modern day-care refractive centre — convenient OT scheduling" },
  ],
  pricing: buildPricing(c.priceMult, c.discount),
  testimonial: {
    name: c.testimonialName, age: c.testimonialAge, occupation: c.testimonialOcc,
    power: c.testimonialPower, procedure: c.testimonialProc,
    quote: `Found ${c.name}'s top LASIK centre through this directory and saved 30% off walk-in MRP. ${c.testimonialProc} was painless — back to work within days with crystal-clear vision.`,
  },
  testimonials: [
    {
      name: c.testimonialName, age: c.testimonialAge, occupation: c.testimonialOcc,
      power: c.testimonialPower, procedure: c.testimonialProc,
      quote: `Found ${c.name}'s top LASIK centre through this directory and saved 30% off walk-in MRP. ${c.testimonialProc} was painless — back to work within days with crystal-clear vision.`,
    },
    ...buildExtraTestimonials(c.name, c.slug, [
      `${c.industry.split(",")[0]} professional, ${c.name}`,
      `${c.name} resident`,
      `Working professional, ${c.name}`,
    ]),
  ],
  faqs: FAQ_TEMPLATE(c),
}));

export const CITY_DATA: CityData[] = [...tier1Built, ...tier2_3Built];

export const getCityData = (slug?: string): CityData | undefined =>
  CITY_DATA.find((c) => c.slug === slug);
