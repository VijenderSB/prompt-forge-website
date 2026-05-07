import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  consultationSchema,
  sanitizeText,
  looksLikeSpam,
  throttleCheck,
} from "@/lib/formSecurity";

interface ConsultationFormProps {
  variant?: "hero" | "section" | "compact";
  className?: string;
  centre?: string;
  centreId?: string;
}

const ConsultationForm = ({ variant = "hero", className = "", centre, centreId }: ConsultationFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const mountedAt = useRef<number>(Date.now());
  const { toast } = useToast();

  // Random captcha per mount
  const [captchaPair] = useState(() => ({
    a: Math.floor(Math.random() * 9) + 2,
    b: Math.floor(Math.random() * 8) + 1,
  }));

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    // 1. Honeypot — silent reject
    if (website.trim() !== "") {
      console.warn("[security] honeypot tripped");
      return;
    }

    // 2. Time-trap — humans take >2s to fill a form
    const elapsed = Date.now() - mountedAt.current;
    if (elapsed < 2000) {
      console.warn("[security] form submitted too quickly", elapsed);
      return;
    }

    // 3. Captcha
    if (parseInt(captcha, 10) !== captchaPair.a + captchaPair.b) {
      toast({ title: "Security check failed. Please try again.", variant: "destructive" });
      return;
    }

    // 4. Per-session throttle
    const wait = throttleCheck("consultation:lastSubmit", 30_000);
    if (wait > 0) {
      toast({
        title: "Please wait a moment",
        description: `You can submit again in ${Math.ceil(wait / 1000)} seconds.`,
        variant: "destructive",
      });
      return;
    }

    // 5. Schema validation
    const result = consultationSchema.safeParse({ name, phone, email, website });
    if (!result.success) {
      toast({
        title: result.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }

    // 6. Spam heuristic
    if (looksLikeSpam(`${name} ${email}`)) {
      console.warn("[security] spam pattern detected");
      toast({ title: "Submission blocked", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const payload = {
      name: sanitizeText(result.data.name),
      phone: sanitizeText(result.data.phone),
      email: result.data.email ? sanitizeText(result.data.email) : "",
      centre: centre ? sanitizeText(centre) : "General enquiry",
      centreId: centreId ? sanitizeText(centreId) : null,
      source: typeof window !== "undefined" ? window.location.pathname.slice(0, 200) : "",
      submittedAt: new Date().toISOString(),
    };
    // Lead payload — no PII echoed in logs
    console.info("[lead] submitted", { centre: payload.centre, source: payload.source });
    toast({
      title: "Thank you!",
      description: centre
        ? `Our team at ${centre} will call you within 30 minutes.`
        : "Our LASIK specialist will call you within 30 minutes.",
    });
    setName(""); setPhone(""); setEmail(""); setCaptcha(""); setWebsite("");
    setSubmitting(false);
  };

  // Hidden honeypot field — invisible to humans, attractive to bots
  const Honeypot = (
    <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
      <label>
        Website (leave blank)
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
      </label>
    </div>
  );

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`} noValidate>
        {Honeypot}
        <Input placeholder="Your Name" value={name} maxLength={80} onChange={e => setName(e.target.value)} className="bg-card border-border" autoComplete="name" />
        <Input placeholder="Phone Number" type="tel" inputMode="tel" maxLength={20} value={phone} onChange={e => setPhone(e.target.value)} className="bg-card border-border" autoComplete="tel" />
        <Button type="submit" disabled={submitting} className="cta-gradient border-0 text-primary-foreground whitespace-nowrap px-6">
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
      {centre && (
        <div className="mb-4 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs text-foreground">
          Booking for: <span className="font-semibold text-primary">{sanitizeText(centre)}</span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        {Honeypot}
        <Input placeholder="Your Name" value={name} maxLength={80} onChange={e => setName(e.target.value)} className="bg-background border-border h-11" autoComplete="name" />
        <Input placeholder="Phone Number" type="tel" inputMode="tel" maxLength={20} value={phone} onChange={e => setPhone(e.target.value)} className="bg-background border-border h-11" autoComplete="tel" />
        <Input placeholder="Email (optional)" type="email" maxLength={254} value={email} onChange={e => setEmail(e.target.value)} className="bg-background border-border h-11" autoComplete="email" />
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground whitespace-nowrap">Security: {captchaPair.a} + {captchaPair.b} =</span>
          <Input placeholder="?" value={captcha} maxLength={3} inputMode="numeric" onChange={e => setCaptcha(e.target.value.replace(/\D/g, ""))} className="bg-background border-border h-11 w-20" />
        </div>
        <Button type="submit" disabled={submitting} className="w-full cta-gradient border-0 text-primary-foreground h-12 font-semibold text-base">
          {submitting ? "Submitting…" : "Get Free Consultation →"}
        </Button>
      </form>
    </motion.div>
  );
};

export default ConsultationForm;
