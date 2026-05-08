import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Gift } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sanitizeText, throttleCheck, looksLikeSpam, nameSchema, phoneSchema } from "@/lib/formSecurity";
import { z } from "zod";

const QUOTE_EVENT = "open-quote-popup";
const DEADLINE_KEY = "quote:deadline";

export const openQuotePopup = () => {
  window.dispatchEvent(new CustomEvent(QUOTE_EVENT));
};

const ageSchema = z.coerce.number().int().min(8, "Enter a valid age").max(99, "Enter a valid age");

const quoteSchema = z.object({
  name: nameSchema,
  age: ageSchema,
  phone: phoneSchema,
  website: z.string().max(0).optional().or(z.literal("")),
});

const getDeadline = () => {
  try {
    const stored = localStorage.getItem(DEADLINE_KEY);
    if (stored) {
      const t = parseInt(stored, 10);
      if (t > Date.now()) return t;
    }
  } catch {}
  const next = Date.now() + 48 * 60 * 60 * 1000;
  try { localStorage.setItem(DEADLINE_KEY, String(next)); } catch {}
  return next;
};

const formatTime = (ms: number) => {
  if (ms < 0) ms = 0;
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return { h: String(h).padStart(2, "0"), m: String(m).padStart(2, "0"), s: String(s).padStart(2, "0") };
};

const TimeBox = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-foreground text-background font-mono font-bold text-2xl md:text-3xl rounded-lg px-3 py-2 min-w-[3rem] text-center tabular-nums shadow-md">
      {value}
    </div>
    <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 font-semibold">{label}</span>
  </div>
);

const QuotePopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [deadline, setDeadline] = useState<number>(0);
  const [now, setNow] = useState<number>(Date.now());
  const mountedAt = useRef<number>(Date.now());
  const { toast } = useToast();

  useEffect(() => {
    setDeadline(getDeadline());
    const handler = () => {
      mountedAt.current = Date.now();
      setOpen(true);
    };
    window.addEventListener(QUOTE_EVENT, handler);
    return () => window.removeEventListener(QUOTE_EVENT, handler);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remaining = Math.max(0, deadline - now);
  const t = formatTime(remaining);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (website.trim() !== "") return;
    if (Date.now() - mountedAt.current < 1500) return;

    const wait = throttleCheck("quote:lastSubmit", 30_000);
    if (wait > 0) {
      toast({ title: "Please wait a moment", description: `Try again in ${Math.ceil(wait / 1000)}s.`, variant: "destructive" });
      return;
    }

    const result = quoteSchema.safeParse({ name, age, phone, website });
    if (!result.success) {
      toast({ title: result.error.issues[0]?.message ?? "Invalid input", variant: "destructive" });
      return;
    }
    if (looksLikeSpam(name)) {
      toast({ title: "Submission blocked", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    console.info("[lead] quote", {
      source: window.location.pathname.slice(0, 200),
      age: result.data.age,
    });
    toast({
      title: "Quote request received!",
      description: `Hi ${sanitizeText(result.data.name)}, our LASIK specialist will call you within 30 minutes with your personalised quote.`,
    });
    setName(""); setAge(""); setPhone(""); setWebsite("");
    setSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-0">
        <div className="cta-gradient text-primary-foreground px-6 pt-6 pb-5 text-center">
          <div className="inline-flex items-center gap-2 bg-card/15 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5" /> Limited Offer
          </div>
          <DialogHeader>
            <DialogTitle className="text-primary-foreground font-display text-xl md:text-2xl leading-tight">
              Enroll Today — Mega Discount Ends in 48 Hours!
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/85 text-sm mt-1">
              Lock in your exclusive LASIK price before the timer runs out.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Clock className="w-4 h-4 text-primary-foreground/80" />
            <div className="flex items-center gap-2">
              <TimeBox label="Hours" value={t.h} />
              <span className="text-2xl font-bold text-primary-foreground/70">:</span>
              <TimeBox label="Min" value={t.m} />
              <span className="text-2xl font-bold text-primary-foreground/70">:</span>
              <TimeBox label="Sec" value={t.s} />
            </div>
          </div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="p-6 space-y-3 bg-card"
          noValidate
        >
          <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
            <input tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)} />
          </div>
          <Input placeholder="Full Name" value={name} maxLength={80} onChange={e => setName(e.target.value)} className="h-11" autoComplete="name" />
          <Input placeholder="Age" type="number" inputMode="numeric" min={8} max={99} value={age} onChange={e => setAge(e.target.value)} className="h-11" />
          <Input placeholder="Mobile Number" type="tel" inputMode="tel" maxLength={20} value={phone} onChange={e => setPhone(e.target.value)} className="h-11" autoComplete="tel" />
          <Button type="submit" disabled={submitting} className="w-full h-12 cta-gradient border-0 text-primary-foreground font-semibold text-base">
            {submitting ? "Submitting…" : "Claim My Discount →"}
          </Button>
          <p className="text-[11px] text-center text-muted-foreground">
            🔒 100% Free · No-obligation · We call you in 30 minutes
          </p>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};

export default QuotePopup;
