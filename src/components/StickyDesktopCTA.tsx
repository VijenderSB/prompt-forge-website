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
      className={`hidden lg:inline-flex fixed right-4 top-1/2 z-50 items-center gap-2 cta-gradient text-primary-foreground font-semibold text-sm px-4 py-3 rounded-xl shadow-lg border border-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24 pointer-events-none"
      }`}
      style={{ transform: show ? "translateY(-50%)" : "translateY(-50%) translateX(6rem)" }}
    >
      <Calendar className="w-4 h-4" />
      Book Free Consultation
    </Link>
  );
};

export default StickyDesktopCTA;
