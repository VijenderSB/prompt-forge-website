import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface ConsultationFormProps {
  variant?: "hero" | "section" | "compact";
  className?: string;
}

const ConsultationForm = ({ variant = "hero", className = "" }: ConsultationFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const { toast } = useToast();

  const num1 = 10;
  const num2 = 7;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast({ title: "Please fill in your name and phone number", variant: "destructive" });
      return;
    }
    if (parseInt(captcha) !== num1 + num2) {
      toast({ title: "Security check failed. Please try again.", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you!", description: "Our LASIK specialist will call you within 30 minutes." });
    setName(""); setPhone(""); setEmail(""); setCaptcha("");
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <Input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="bg-card border-border" />
        <Input placeholder="Phone Number" type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="bg-card border-border" />
        <Button type="submit" className="cta-gradient border-0 text-primary-foreground whitespace-nowrap px-6">
          Get Free Consultation →
        </Button>
      </form>
    );
  }

  const isHero = variant === "hero";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`${isHero ? "bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-8" : "bg-card rounded-2xl border border-border p-6 md:p-8"} ${className}`}
    >
      <h3 className="font-display font-bold text-lg text-foreground mb-1">
        {isHero ? "Book Free Consultation" : "Get Your Free LASIK Evaluation"}
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        {isHero ? "Get a callback within 30 minutes" : "Our specialist will call you within 30 minutes"}
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="bg-background border-border h-11" />
        <Input placeholder="Phone Number" type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="bg-background border-border h-11" />
        <Input placeholder="Email (optional)" type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-background border-border h-11" />
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground whitespace-nowrap">Security: {num1} + {num2} =</span>
          <Input placeholder="?" value={captcha} onChange={e => setCaptcha(e.target.value)} className="bg-background border-border h-11 w-20" />
        </div>
        <Button type="submit" className="w-full cta-gradient border-0 text-primary-foreground h-12 font-semibold text-base">
          Get Free Consultation →
        </Button>
      </form>
    </motion.div>
  );
};

export default ConsultationForm;
