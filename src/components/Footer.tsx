import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { BRAND } from "@/data/siteData";

const candidateLinks = [
  { label: "Am I a Candidate?", href: "/am-i-a-candidate" },
  { label: "About Eye Anatomy", href: "/eye-anatomy" },
  { label: "Common Vision Problems", href: "/common-vision-problems" },
  { label: "What Is LASIK & Why", href: "/what-is-lasik" },
  { label: "LASIK Myths vs Facts", href: "/lasik-myths-vs-facts" },
  { label: "If I Am Unfit for LASIK", href: "/unfit-for-lasik" },
  { label: "Which LASIK is Best?", href: "/which-lasik-is-best" },
];

const packageLinks = [
  { label: "Standard LASIK — ₹8,999/eye", href: "/procedures/standard-lasik" },
  { label: "HD Contoura Vision — ₹25,500/eye", href: "/procedures/contoura-vision" },
  { label: "Femto + Contoura — ₹45,000/eye", href: "/procedures/femto-contoura" },
  { label: "WaveLight InnovEyes — ₹49,000/eye", href: "/procedures/innovEyes" },
  { label: "SMILE Pro — ₹65,000/eye", href: "/procedures/smile-pro" },
  { label: "SiLK — ₹75,000/eye", href: "/procedures/silk" },
  { label: "Compare All Procedures", href: "/which-lasik-is-best" },
  { label: "LASIK Cost in India", href: "/cost" },
];

const planningLinks = [
  { label: "Risk & Recovery", href: "/risk-recovery" },
  { label: "International Guidelines", href: "/international-guidelines" },
  { label: "LASIK Technologies", href: "/lasik-technology" },
  { label: "Blog", href: "/blog" },
  { label: "Locations", href: "/locations" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Why Choose Us", href: "/why-us" },
  { label: "FAQ", href: "/faq" },
];

const topCities = [
  { label: "Delhi", href: "/delhi-ncr/delhi" },
  { label: "Noida", href: "/delhi-ncr/noida" },
  { label: "Gurgaon", href: "/delhi-ncr/gurgaon" },
  { label: "Faridabad", href: "/delhi-ncr/faridabad" },
  { label: "Ghaziabad", href: "/delhi-ncr/ghaziabad" },
  { label: "Mumbai", href: "/maharashtra/mumbai" },
  { label: "Pune", href: "/maharashtra/pune" },
  { label: "Bangalore", href: "/karnataka/bangalore" },
  { label: "Hyderabad", href: "/telangana/hyderabad" },
  { label: "Chennai", href: "/tamil-nadu/chennai" },
  { label: "Kolkata", href: "/west-bengal/kolkata" },
  { label: "Ahmedabad", href: "/gujarat/ahmedabad" },
  { label: "Jaipur", href: "/rajasthan/jaipur" },
  { label: "Lucknow", href: "/uttar-pradesh/lucknow" },
  { label: "Chandigarh", href: "/chandigarh/chandigarh" },
  { label: "Indore", href: "/madhya-pradesh/indore" },
  { label: "Kochi", href: "/kerala/kochi" },
  { label: "Bhopal", href: "/madhya-pradesh/bhopal" },
  { label: "Nagpur", href: "/maharashtra/nagpur" },
  { label: "Coimbatore", href: "/tamil-nadu/coimbatore" },
];

const FooterColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <h4 className="font-display font-semibold text-sm mb-5 text-primary-foreground tracking-wide uppercase text-xs">{title}</h4>
    <ul className="space-y-3 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            to={link.href}
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center group"
          >
            <span className="border-b border-transparent group-hover:border-primary-foreground/40">{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="bg-navy text-primary-foreground relative overflow-hidden">
    {/* Decorative gradient accent */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

    {/* USP strip */}
    <div className="relative bg-primary-foreground/5 border-b border-primary-foreground/10 backdrop-blur-sm">
      <div className="container py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-center">
        <span className="font-bold text-accent uppercase tracking-wider">India's #1 LASIK Platform</span>
        <span className="hidden sm:inline text-primary-foreground/20">•</span>
        <span className="text-primary-foreground/70">50+ centres PAN India · VIP rates up to 30% off</span>
        <Link to="/why-us" className="text-accent font-semibold hover:underline inline-flex items-center gap-1">
          Why us <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>

    <div className="container relative py-16 md:py-20">
      {/* Top: Brand + Link columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
        {/* Brand block */}
        <div className="col-span-2 md:col-span-3 lg:col-span-4 lg:pr-8">
          <Link to="/" className="inline-block">
            <h3 className="font-display font-bold text-xl mb-3">{BRAND.name}</h3>
          </Link>
          <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6 max-w-sm">
            India's #1 LASIK platform — the world's largest digital aggregator for laser vision correction. VIP volume-discount rates at 50+ premium centres PAN India.
          </p>
          <div className="space-y-2.5 text-sm">
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <span className="w-8 h-8 rounded-full bg-primary-foreground/5 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </span>
              {BRAND.phoneDisplay}
            </a>
            <a href="mailto:query@laser.fyi" className="flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <span className="w-8 h-8 rounded-full bg-primary-foreground/5 flex items-center justify-center">
                <Mail className="w-3.5 h-3.5" />
              </span>
              query@laser.fyi
            </a>
            <div className="flex items-center gap-2.5 text-primary-foreground/70">
              <span className="w-8 h-8 rounded-full bg-primary-foreground/5 flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5" />
              </span>
              New Delhi, India
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <FooterColumn title="LASIK Candidate" links={candidateLinks} />
        </div>
        <div className="lg:col-span-3">
          <FooterColumn title="LASIK Packages" links={packageLinks} />
        </div>
        <div className="lg:col-span-2 space-y-10">
          <FooterColumn title="Planning" links={planningLinks} />
          <FooterColumn title="Quick Links" links={quickLinks} />
        </div>
      </div>

      {/* Top Cities */}
      <div className="border-t border-primary-foreground/10 pt-10 mb-10">
        <div className="flex items-center justify-between mb-5">
          <h4 className="font-display font-semibold text-xs uppercase tracking-wide text-primary-foreground">LASIK in Top Cities</h4>
          <Link to="/locations" className="text-xs font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <ul className="flex flex-wrap gap-2">
          {topCities.map((city) => (
            <li key={city.href}>
              <Link
                to={city.href}
                className="inline-block px-3 py-1.5 text-xs rounded-full bg-primary-foreground/5 hover:bg-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground border border-primary-foreground/5 hover:border-primary-foreground/20 transition-all"
              >
                {city.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li><Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms &amp; Conditions</Link></li>
          <li><Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
          <li><Link to="/disclaimer" className="hover:text-primary-foreground transition-colors">Disclaimer</Link></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
