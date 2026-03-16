import { Link } from "react-router-dom";
import { Phone, Check } from "lucide-react";
import { BRAND } from "@/data/siteData";
import { Button } from "./ui/button";
import ConsultationForm from "./ConsultationForm";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  withForm?: boolean;
}

const CTABanner = ({
  title = "Ready to Ditch Your Glasses?",
  subtitle = "Fill in your details and our LASIK specialist will call you within 30 minutes to answer all your questions and help you choose the right procedure.",
  withForm = false,
}: CTABannerProps) => {
  if (withForm) {
    return (
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">Get Started Today</span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">{title}</h2>
              <p className="text-muted-foreground mb-6">{subtitle}</p>
              <ul className="space-y-3">
                {["100% Free consultation", "No-obligation evaluation", "EMI options available"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <ConsultationForm variant="section" />
          </div>
        </div>
      </section>
    );
  }

  return (
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
};

export default CTABanner;
