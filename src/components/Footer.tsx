import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND, CENTRES } from "@/data/siteData";

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
  { label: "Our Centres", href: "/centres" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Why Choose Us", href: "/why-us" },
  { label: "FAQ", href: "/faq" },
];

const topCities = [
  { label: "LASIK in Delhi", href: "/delhi-ncr/delhi" },
  { label: "LASIK in Noida", href: "/delhi-ncr/noida" },
  { label: "LASIK in Gurgaon", href: "/delhi-ncr/gurgaon" },
  { label: "LASIK in Faridabad", href: "/delhi-ncr/faridabad" },
  { label: "LASIK in Ghaziabad", href: "/delhi-ncr/ghaziabad" },
  { label: "LASIK in Mumbai", href: "/maharashtra/mumbai" },
  { label: "LASIK in Pune", href: "/maharashtra/pune" },
  { label: "LASIK in Bangalore", href: "/karnataka/bangalore" },
  { label: "LASIK in Hyderabad", href: "/telangana/hyderabad" },
  { label: "LASIK in Chennai", href: "/tamil-nadu/chennai" },
  { label: "LASIK in Kolkata", href: "/west-bengal/kolkata" },
  { label: "LASIK in Ahmedabad", href: "/gujarat/ahmedabad" },
  { label: "LASIK in Jaipur", href: "/rajasthan/jaipur" },
  { label: "LASIK in Lucknow", href: "/uttar-pradesh/lucknow" },
  { label: "LASIK in Chandigarh", href: "/chandigarh/chandigarh" },
  { label: "LASIK in Indore", href: "/madhya-pradesh/indore" },
  { label: "LASIK in Kochi", href: "/kerala/kochi" },
  { label: "LASIK in Bhopal", href: "/madhya-pradesh/bhopal" },
  { label: "LASIK in Nagpur", href: "/maharashtra/nagpur" },
  { label: "LASIK in Coimbatore", href: "/tamil-nadu/coimbatore" },
];

const FooterColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <h4 className="font-display font-semibold text-sm mb-4 text-primary-foreground">{title}</h4>
    <ul className="space-y-2 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <Link to={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container section-padding">
      {/* Top: Brand + Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
        <div className="lg:col-span-1">
          <h3 className="font-display font-bold text-lg mb-3">{BRAND.name}</h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
            India's #1 LASIK platform — the world's largest digital aggregator for laser vision correction. VIP volume-discount rates at 50+ premium centres PAN India.
          </p>
          <div className="space-y-2 text-sm">
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground">
              <Phone className="w-4 h-4" /> {BRAND.phoneDisplay}
            </a>
            <a href="mailto:info@laser.fyi" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground">
              <Mail className="w-4 h-4" /> info@laser.fyi
            </a>
            <div className="flex items-start gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> New Delhi, India
            </div>
          </div>
        </div>

        <FooterColumn title="LASIK Candidate" links={candidateLinks} />
        <FooterColumn title="LASIK Packages" links={packageLinks} />

        <div className="space-y-8">
          <FooterColumn title="Planning for LASIK" links={planningLinks} />
          <FooterColumn title="Quick Links" links={quickLinks} />
        </div>
      </div>

      {/* Centres & Cities */}
      <div className="border-t border-primary-foreground/10 pt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Our Centres */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-primary-foreground">Our Centres</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {CENTRES.map((c) => (
                <li key={c.slug}>
                  <Link to={`/centres/${c.slug}`} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {c.name.replace("Centre for Lasik - ", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-primary-foreground">Top Cities</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-sm">
              {topCities.map((city) => (
                <li key={city.href}>
                  <Link to={city.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {city.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/centres" className="inline-block mt-4 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              View All Locations →
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40">
        <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <p>laser.fyi — India's #1 LASIK Eye Surgery Platform</p>
      </div>
    </div>
  </footer>
);

export default Footer;
