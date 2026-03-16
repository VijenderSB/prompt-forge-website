import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND } from "@/data/siteData";
import { Button } from "@/components/ui/button";

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card/95 backdrop-blur-lg border-t border-border p-3 flex gap-3">
    <a
      href={`tel:${BRAND.phone}`}
      className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-accent text-accent-foreground font-semibold text-sm"
    >
      <Phone className="w-4 h-4" /> Call Now
    </a>
    <Button asChild className="flex-1 h-12 rounded-xl cta-gradient border-0 text-primary-foreground font-semibold text-sm">
      <Link to="/am-i-a-candidate">Book Free Consultation</Link>
    </Button>
  </div>
);

export default StickyMobileCTA;
