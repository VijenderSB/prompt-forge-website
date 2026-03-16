import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { BRAND } from "@/data/siteData";
import { Button } from "./ui/button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

const CTABanner = ({
  title = "30% Off This Month — Book Your Free Consultation",
  subtitle = "Get world-class LASIK surgery starting at just ₹17,850/eye after discount. Limited time offer."
}: CTABannerProps) => (
  <section className="cta-gradient section-padding">
    <div className="container text-center max-w-3xl">
      <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-4">{title}</h2>
      <p className="text-primary-foreground/80 mb-8">{subtitle}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold px-8">
          <Link to="/am-i-a-candidate">Book Free Consultation</Link>
        </Button>
        <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-primary-foreground font-medium">
          <Phone className="w-5 h-5" /> {BRAND.phoneDisplay}
        </a>
      </div>
    </div>
  </section>
);

export default CTABanner;
