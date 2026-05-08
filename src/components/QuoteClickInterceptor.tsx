import { useEffect } from "react";
import { openQuotePopup } from "./QuotePopup";

const TRIGGER_KEYWORDS = [
  "quote",
  "book free",
  "book consultation",
  "free consultation",
  "consultation",
  "enroll",
  "claim",
  "get started",
  "am i a candidate",
  "check eligibility",
  "get free",
];

const isTriggerText = (text: string) => {
  const t = text.trim().toLowerCase();
  if (!t || t.length > 80) return false;
  return TRIGGER_KEYWORDS.some(k => t.includes(k));
};

/**
 * Globally intercept clicks on CTA buttons / links and open the quote popup.
 * Skips: tel/mailto/external links, form submit inputs, elements inside the popup,
 * the WhatsApp button, navigation menus, and elements with [data-no-quote-popup].
 */
const QuoteClickInterceptor = () => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const el = target.closest<HTMLElement>(
        'a, button, [role="button"]'
      );
      if (!el) return;

      // Explicit opt-out
      if (el.closest("[data-no-quote-popup]")) return;
      // Skip elements inside the popup itself
      if (el.closest('[role="dialog"]')) return;
      // Skip nav/menus/footer nav links — only intercept conversion CTAs
      if (el.closest("nav")) return;
      // Skip the WhatsApp button
      if (el.getAttribute("aria-label")?.toLowerCase().includes("whatsapp")) return;

      // Skip tel:/mailto: links — those should still work natively
      if (el.tagName === "A") {
        const href = (el as HTMLAnchorElement).getAttribute("href") || "";
        if (href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) return;
      }

      // Skip form submit buttons inside forms (let them submit)
      if (el.tagName === "BUTTON") {
        const type = (el as HTMLButtonElement).type;
        if (type === "submit" && el.closest("form")) return;
      }

      const text = el.innerText || el.textContent || "";
      const aria = el.getAttribute("aria-label") || "";
      if (!isTriggerText(text) && !isTriggerText(aria)) return;

      e.preventDefault();
      e.stopPropagation();
      openQuotePopup();
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
};

export default QuoteClickInterceptor;
