import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const StickyDesktopCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      to="/am-i-a-candidate"
      aria-label="Book Free Consultation"
      className={`hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 items-center gap-2 cta-gradient text-primary-foreground font-semibold text-sm pl-4 pr-5 py-3 rounded-l-xl shadow-lg border border-r-0 border-primary/30 transition-all duration-300 hover:pr-6 hover:shadow-xl ${
        show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
      style={{ writingMode: "vertical-rl" }}
    >
      <Calendar className="w-4 h-4 -rotate-90" />
      <span className="rotate-180" style={{ writingMode: "vertical-rl" }}>
        Book Free Consultation
      </span>
    </Link>
  );
};

export default StickyDesktopCTA;
