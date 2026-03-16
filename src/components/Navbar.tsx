import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { BRAND } from "@/data/siteData";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Procedures", href: "/procedures/contoura-vision", hasDropdown: true },
  { label: "Cost", href: "/cost" },
  { label: "Am I a Candidate?", href: "/am-i-a-candidate" },
  { label: "FAQ", href: "/faq" },
  { label: "Why Us", href: "/why-us" },
  { label: "Centres", href: "/centres" },
  { label: "Blog", href: "/blog" },
];

const procedureLinks = [
  { label: "Contoura Vision — ₹25,500/eye", href: "/procedures/contoura-vision" },
  { label: "WaveLight InnovEyes — ₹49,000/eye", href: "/procedures/innovEyes" },
  { label: "ReLEx SMILE — ₹40,000/eye", href: "/procedures/relex-smile" },
  { label: "SMILE Pro — ₹35,000/eye", href: "/procedures/smile-pro" },
  { label: "elita SiLK — ₹32,000/eye", href: "/procedures/elita-silk" },
  { label: "EPI InnovEyes — ₹28,000/eye", href: "/procedures/epi-innovEyes" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [procedureOpen, setProcedureOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg cta-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-display font-black text-sm">CL</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-foreground text-sm">{BRAND.name}</span>
            <span className="text-muted-foreground text-xs block leading-none">laser.fyi</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1
                  ${location.pathname.startsWith(link.href) ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </Link>
              {link.hasDropdown && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card rounded-lg border border-border shadow-lg p-2 min-w-[280px]">
                    {procedureLinks.map((pl) => (
                      <Link key={pl.href} to={pl.href} className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        {pl.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Phone */}
        <div className="flex items-center gap-3">
          <a href={`tel:${BRAND.phone}`} className="hidden md:flex items-center gap-1.5 text-sm font-medium text-primary">
            <Phone className="w-4 h-4" />
            {BRAND.phoneDisplay}
          </a>
          <Button asChild className="hidden sm:inline-flex cta-gradient border-0 text-primary-foreground hover:opacity-90">
            <Link to="/am-i-a-candidate">Book Free Consultation</Link>
          </Button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => { if (!link.hasDropdown) setMobileOpen(false); else setProcedureOpen(!procedureOpen); }}
                  className="block px-3 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
                {link.hasDropdown && procedureOpen && (
                  <div className="ml-4 space-y-1">
                    {procedureLinks.map((pl) => (
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
