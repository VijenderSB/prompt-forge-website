import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND, PROCEDURES } from "@/data/siteData";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <h3 className="font-display font-bold text-lg mb-4">{BRAND.name}</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
            India's leading LASIK eye surgery platform. Advanced technology, experienced surgeons, and affordable pricing across 3,700+ cities.
          </p>
          <div className="space-y-2 text-sm">
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
              <Phone className="w-4 h-4" /> {BRAND.phoneDisplay}
            </a>
            <a href="mailto:info@laser.fyi" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
              <Mail className="w-4 h-4" /> info@laser.fyi
            </a>
            <div className="flex items-start gap-2 text-primary-foreground/80">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> New Delhi, India
            </div>
          </div>
        </div>

        {/* Procedures */}
        <div>
          <h4 className="font-display font-semibold mb-4">Procedures</h4>
          <ul className="space-y-2 text-sm">
            {PROCEDURES.map((p) => (
              <li key={p.slug}>
                <Link to={`/procedures/${p.slug}`} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "LASIK Cost in India", href: "/cost" },
              { label: "Am I a Candidate?", href: "/am-i-a-candidate" },
              { label: "Which LASIK is Best?", href: "/which-lasik-is-best" },
              { label: "Risk & Recovery", href: "/risk-recovery" },
              { label: "Why Choose Us", href: "/why-us" },
              { label: "Our Centres", href: "/centres" },
              { label: "FAQ", href: "/faq" },
              { label: "Blog", href: "/blog" },
            ].map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Cities */}
        <div>
          <h4 className="font-display font-semibold mb-4">Top Cities</h4>
          <ul className="space-y-2 text-sm">
            {["Delhi", "Noida", "Gurgaon", "Mumbai", "Pune", "Bangalore", "Hyderabad", "Chennai"].map((city) => (
              <li key={city}>
                <Link to={`/delhi-ncr/${city.toLowerCase()}`} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  LASIK in {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
        <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <p>laser.fyi — LASIK Eye Surgery Across India</p>
      </div>
    </div>
  </footer>
);

export default Footer;
