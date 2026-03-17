import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { BRAND } from "@/data/siteData";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "LASIK Candidate", href: "/am-i-a-candidate", hasDropdown: true, dropdownKey: "candidate" },
  { label: "LASIK & Packages", href: "/cost", hasDropdown: true, dropdownKey: "packages" },
  { label: "Planning for LASIK", href: "/risk-recovery", hasDropdown: true, dropdownKey: "planning" },
  { label: "Why Us", href: "/why-us" },
  { label: "FAQ", href: "/faq" },
];

const dropdowns: Record<string, { label: string; href: string }[]> = {
  candidate: [
    { label: "Am I a Candidate?", href: "/am-i-a-candidate" },
    { label: "Which LASIK is Best?", href: "/which-lasik-is-best" },
  ],
  packages: [
    { label: "Standard LASIK — ₹8,999/eye", href: "/procedures/standard-lasik" },
    { label: "HD Contoura Vision — ₹25,500/eye", href: "/procedures/contoura-vision" },
    { label: "Femto + Contoura — ₹45,000/eye", href: "/procedures/femto-contoura" },
    { label: "WaveLight InnovEyes — ₹49,000/eye", href: "/procedures/innovEyes" },
    { label: "SMILE Pro — ₹65,000/eye", href: "/procedures/smile-pro" },
    { label: "SiLK — ₹75,000/eye", href: "/procedures/silk" },
    { label: "Compare All Procedures", href: "/which-lasik-is-best" },
    { label: "LASIK Cost in India", href: "/cost" },
  ],
  planning: [
    { label: "Risk & Recovery", href: "/risk-recovery" },
    { label: "International Guidelines", href: "/international-guidelines" },
    { label: "LASIK Technologies in Market", href: "/lasik-technology" },
    { label: "Blog", href: "/blog" },
    { label: "Our Centres", href: "/centres" },
  ],
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg cta-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-display font-black text-sm">CL</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-foreground text-sm">{BRAND.name}</span>
            <span className="text-muted-foreground text-xs block leading-none">laser.fyi</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1
                  ${location.pathname === link.href ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </Link>
              {link.hasDropdown && link.dropdownKey && dropdowns[link.dropdownKey] && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card rounded-lg border border-border shadow-xl p-2 min-w-[280px]">
                    {dropdowns[link.dropdownKey].map((pl) => (
                      <Link key={pl.href} to={pl.href} className="block px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        {pl.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href={`tel:${BRAND.phone}`} className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" />
            {BRAND.phoneDisplay}
          </a>
          <Button asChild className="hidden sm:inline-flex cta-gradient border-0 text-primary-foreground hover:opacity-90 h-9">
            <Link to="/am-i-a-candidate">Book Free Consultation</Link>
          </Button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border max-h-[70vh] overflow-y-auto">
          <div className="container py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() => {
                    if (link.hasDropdown && link.dropdownKey) {
                      setMobileDropdown(mobileDropdown === link.dropdownKey ? null : link.dropdownKey);
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-muted flex items-center justify-between"
                >
                  {!link.hasDropdown ? (
                    <Link to={link.href} onClick={() => setMobileOpen(false)} className="w-full">{link.label}</Link>
                  ) : (
                    <>{link.label}<ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === link.dropdownKey ? "rotate-180" : ""}`} /></>
                  )}
                </button>
                {link.hasDropdown && link.dropdownKey && mobileDropdown === link.dropdownKey && dropdowns[link.dropdownKey] && (
                  <div className="ml-4 space-y-1 mb-2">
                    {dropdowns[link.dropdownKey].map((pl) => (
                      <Link key={pl.href} to={pl.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
                        {pl.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-border">
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 px-3 py-2 text-sm text-primary font-medium">
                <Phone className="w-4 h-4" /> {BRAND.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
