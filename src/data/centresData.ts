// Dedicated eye-centre pages — one per legacy /centre-for-lasik-* URL.
// Source of truth for the CentrePage hub. Each entry retains its original
// laser.fyi slug so we can serve the URL 200 with rich content.

export interface CentreData {
  slug: string;            // legacy URL slug (path = /<slug>)
  hospital: string;        // brand display name
  locality?: string;       // sub-area within city
  city: string;            // city slug
  cityName: string;        // city display name
  state: string;           // state slug
  stateName: string;       // state display name
  address: string;         // marketing-grade address line
}

const titleCase = (s: string) =>
  s.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const make = (
  slug: string,
  hospital: string,
  city: string,
  cityName: string,
  state: string,
  stateName: string,
  locality?: string,
): CentreData => ({
  slug,
  hospital,
  locality,
  city,
  cityName,
  state,
  stateName,
  address: [locality && titleCase(locality), cityName, stateName].filter(Boolean).join(", "),
});

export const CENTRES: CentreData[] = [
  make("centre-for-lasik-arohi-eye-hospital-andheri-mumbai", "Arohi Eye Hospital", "mumbai", "Mumbai", "maharashtra", "Maharashtra", "andheri"),
  make("centre-for-lasik-asg-eye-hospital-aurangabad", "ASG Eye Hospital", "aurangabad", "Aurangabad", "maharashtra", "Maharashtra"),
  make("centre-for-lasik-asg-eye-hospital-b-t-road-kolkata", "ASG Eye Hospital", "kolkata", "Kolkata", "west-bengal", "West Bengal", "b-t-road"),
  make("centre-for-lasik-asg-eye-hospital-danapur-bihar", "ASG Eye Hospital", "danapur", "Danapur", "bihar", "Bihar"),
  make("centre-for-lasik-asg-eye-hospital-darbhanga", "ASG Eye Hospital", "darbhanga", "Darbhanga", "bihar", "Bihar"),
  make("centre-for-lasik-asg-eye-hospital-dehradun", "ASG Eye Hospital", "dehradun", "Dehradun", "uttarakhand", "Uttarakhand"),
  make("centre-for-lasik-asg-eye-hospital-dhanbad", "ASG Eye Hospital", "dhanbad", "Dhanbad", "jharkhand", "Jharkhand"),
  make("centre-for-lasik-asg-eye-hospital-dombivli-mumbai", "ASG Eye Hospital", "mumbai", "Mumbai", "maharashtra", "Maharashtra", "dombivli"),
  make("centre-for-lasik-asg-eye-hospital-down-town-guwahati", "ASG Eye Hospital", "guwahati", "Guwahati", "assam", "Assam", "down-town"),
  make("centre-for-lasik-asg-eye-hospital-goa", "ASG Eye Hospital", "goa", "Goa", "goa", "Goa"),
  make("centre-for-lasik-asg-eye-hospital-indore", "ASG Eye Hospital", "indore", "Indore", "madhya-pradesh", "Madhya Pradesh"),
  make("centre-for-lasik-asg-eye-hospital-kalyan-mumbai", "ASG Eye Hospital", "mumbai", "Mumbai", "maharashtra", "Maharashtra", "kalyan"),
  make("centre-for-lasik-asg-eye-hospital-kohefiza-bhopal", "ASG Eye Hospital", "bhopal", "Bhopal", "madhya-pradesh", "Madhya Pradesh", "kohefiza"),
  make("centre-for-lasik-asg-eye-hospital-lake-town-sreebhumi-kolkata", "ASG Eye Hospital", "kolkata", "Kolkata", "west-bengal", "West Bengal", "lake-town-sreebhumi"),
  make("centre-for-lasik-asg-eye-hospital-muzaffarpur-bihar", "ASG Eye Hospital", "muzaffarpur", "Muzaffarpur", "bihar", "Bihar"),
  make("centre-for-lasik-asg-eye-hospital-nashik", "ASG Eye Hospital", "nashik", "Nashik", "maharashtra", "Maharashtra"),
  make("centre-for-lasik-asg-eye-hospital-paltan-bazaar-guwahati", "ASG Eye Hospital", "guwahati", "Guwahati", "assam", "Assam", "paltan-bazaar"),
  make("centre-for-lasik-asg-eye-hospital-patna", "ASG Eye Hospital", "patna", "Patna", "bihar", "Bihar"),
  make("centre-for-lasik-asg-eye-hospital-pimpri-pune", "ASG Eye Hospital", "pune", "Pune", "maharashtra", "Maharashtra", "pimpri"),
  make("centre-for-lasik-asg-eye-hospital-ranchi", "ASG Eye Hospital", "ranchi", "Ranchi", "jharkhand", "Jharkhand"),
  make("centre-for-lasik-asg-eye-hospital-shivaji-nagar-bhopal", "ASG Eye Hospital", "bhopal", "Bhopal", "madhya-pradesh", "Madhya Pradesh", "shivaji-nagar"),
  make("centre-for-lasik-asg-eye-hospital-shivaji-nagar-pune", "ASG Eye Hospital", "pune", "Pune", "maharashtra", "Maharashtra", "shivaji-nagar"),
  make("centre-for-lasik-asg-eye-hospital-surat", "ASG Eye Hospital", "surat", "Surat", "gujarat", "Gujarat"),
  make("centre-for-lasik-asg-eye-hospital-tollygunge-kolkata", "ASG Eye Hospital", "kolkata", "Kolkata", "west-bengal", "West Bengal", "tollygunge"),
  make("centre-for-lasik-asg-eye-hospital-vashi-navi-mumbai", "ASG Eye Hospital", "navi-mumbai", "Navi Mumbai", "maharashtra", "Maharashtra", "vashi"),
  // Newly added ASG centres
  make("centre-for-lasik-asg-eye-hospital-noida", "ASG Eye Hospital", "noida", "Noida", "uttar-pradesh", "Uttar Pradesh"),
  make("centre-for-lasik-asg-eye-hospital-kanpur", "ASG Eye Hospital", "kanpur", "Kanpur", "uttar-pradesh", "Uttar Pradesh"),
  make("centre-for-lasik-asg-eye-hospital-mahmoorganj-varanasi", "ASG Eye Hospital", "varanasi", "Varanasi", "uttar-pradesh", "Uttar Pradesh", "mahmoorganj"),
  make("centre-for-lasik-asg-eye-hospital-lahartara-varanasi", "ASG Eye Hospital", "varanasi", "Varanasi", "uttar-pradesh", "Uttar Pradesh", "lahartara"),
  make("centre-for-lasik-asg-eye-hospital-prayagraj", "ASG Eye Hospital", "prayagraj", "Prayagraj", "uttar-pradesh", "Uttar Pradesh"),
  make("centre-for-lasik-asg-eye-hospital-ujjain", "ASG Eye Hospital", "ujjain", "Ujjain", "madhya-pradesh", "Madhya Pradesh"),
  make("centre-for-lasik-asg-eye-hospital-sehore", "ASG Eye Hospital", "sehore", "Sehore", "madhya-pradesh", "Madhya Pradesh"),
  make("centre-for-lasik-asg-eye-hospital-jabalpur", "ASG Eye Hospital", "jabalpur", "Jabalpur", "madhya-pradesh", "Madhya Pradesh"),
  make("centre-for-lasik-asg-eye-hospital-gwalior", "ASG Eye Hospital", "gwalior", "Gwalior", "madhya-pradesh", "Madhya Pradesh"),
  make("centre-for-lasik-asg-eye-hospital-udaipur", "ASG Eye Hospital", "udaipur", "Udaipur", "rajasthan", "Rajasthan"),
  make("centre-for-lasik-asg-eye-hospital-bikaner", "ASG Eye Hospital", "bikaner", "Bikaner", "rajasthan", "Rajasthan"),
  make("centre-for-lasik-asg-eye-hospital-nagaur", "ASG Eye Hospital", "nagaur", "Nagaur", "rajasthan", "Rajasthan"),
  make("centre-for-lasik-asg-eye-hospital-shyam-nagar-jodhpur", "ASG Eye Hospital", "jodhpur", "Jodhpur", "rajasthan", "Rajasthan", "shyam-nagar"),
  make("centre-for-lasik-asg-eye-hospital-paota-jodhpur", "ASG Eye Hospital", "jodhpur", "Jodhpur", "rajasthan", "Rajasthan", "paota"),
  make("centre-for-lasik-asg-eye-hospital-bhagwan-das-jaipur", "ASG Eye Hospital", "jaipur", "Jaipur", "rajasthan", "Rajasthan", "bhagwan-das"),
  make("centre-for-lasik-asg-eye-hospital-new-sanganer-road-jaipur", "ASG Eye Hospital", "jaipur", "Jaipur", "rajasthan", "Rajasthan", "new-sanganer-road"),
  make("centre-for-lasik-asg-eye-hospital-srinagar", "ASG Eye Hospital", "srinagar", "Srinagar", "jammu-and-kashmir", "Jammu and Kashmir"),
  make("centre-for-lasik-asg-eye-hospital-siliguri", "ASG Eye Hospital", "siliguri", "Siliguri", "west-bengal", "West Bengal"),
  make("centre-for-lasik-asg-eye-hospital-raipur", "ASG Eye Hospital", "raipur", "Raipur", "chhattisgarh", "Chhattisgarh"),
  make("centre-for-lasik-asg-eye-hospital-mysore", "ASG Eye Hospital", "mysore", "Mysore", "karnataka", "Karnataka"),
  make("centre-for-lasik-asg-eye-hospital-ludhiana", "ASG Eye Hospital", "ludhiana", "Ludhiana", "punjab", "Punjab"),
  make("centre-for-lasik-asg-eye-hospital-jamshedpur", "ASG Eye Hospital", "jamshedpur", "Jamshedpur", "jharkhand", "Jharkhand"),
  make("centre-for-lasik-asg-eye-hospital-hajipur", "ASG Eye Hospital", "hajipur", "Hajipur", "bihar", "Bihar"),
  make("centre-for-lasik-asg-eye-hospital-cuttack", "ASG Eye Hospital", "cuttack", "Cuttack", "odisha", "Odisha"),
  make("centre-for-lasik-asg-eye-hospital-bhubaneshwar", "ASG Eye Hospital", "bhubaneshwar", "Bhubaneshwar", "odisha", "Odisha"),
  make("centre-for-lasik-laser-vision-correction-and-advance-cataract-surgery", "Centre for Lasik — Laser Vision Correction & Advanced Cataract Surgery", "hyderabad", "Hyderabad", "telangana", "Telangana"),
  make("centre-for-lasik-laser-vision-correction-and-advance-cataract-surgery-hyderabad", "Centre for Lasik — Laser Vision Correction & Advanced Cataract Surgery", "hyderabad", "Hyderabad", "telangana", "Telangana"),
  make("centre-for-lasik-poona-eye-care-karve-road-pune", "Poona Eye Care", "pune", "Pune", "maharashtra", "Maharashtra", "karve-road"),
  make("centre-for-lasik-saijyothi-eye-hospital-hyderabad", "SaiJyothi Eye Hospital", "hyderabad", "Hyderabad", "telangana", "Telangana"),
  make("centre-for-lasik-saijyothi-eye-hospital-kompally-hyderabad", "SaiJyothi Eye Hospital", "hyderabad", "Hyderabad", "telangana", "Telangana", "kompally"),
  make("centre-for-lasik-saijyothi-eye-hospital-uppal-hyderabad", "SaiJyothi Eye Hospital", "hyderabad", "Hyderabad", "telangana", "Telangana", "uppal"),
  make("centre-for-lasik-the-healing-touch-super-speciality-eye-care-janakpuri-new-delhi", "The Healing Touch Super Speciality Eye Care", "delhi", "Delhi", "delhi", "Delhi", "janakpuri"),
  make("centre-for-lasik-the-healing-touch-super-speciality-eye-care-vikaspuri-new-delhi", "The Healing Touch Super Speciality Eye Care", "delhi", "Delhi", "delhi", "Delhi", "vikaspuri"),
  make("centre-for-lasik-vision-lasik-centre-hyderabad-telangana", "Vision LASIK Centre", "hyderabad", "Hyderabad", "telangana", "Telangana"),
  make("centre-forlasik-asg-eye-hospital-mall-road-amritsar", "ASG Eye Hospital", "amritsar", "Amritsar", "punjab", "Punjab", "mall-road"),
];

export const CENTRE_BY_SLUG: Record<string, CentreData> =
  Object.fromEntries(CENTRES.map(c => [c.slug, c]));

export const isCentreSlug = (slug: string): boolean =>
  Object.prototype.hasOwnProperty.call(CENTRE_BY_SLUG, slug);
