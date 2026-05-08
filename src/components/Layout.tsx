import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyMobileCTA from "./StickyMobileCTA";
import StickyDesktopCTA from "./StickyDesktopCTA";
import WhatsAppButton from "./WhatsAppButton";
import QuotePopup from "./QuotePopup";
import QuoteClickInterceptor from "./QuoteClickInterceptor";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-16 pb-20 lg:pb-0">
      {children}
    </main>
    <Footer />
    <StickyMobileCTA />
    <StickyDesktopCTA />
    <WhatsAppButton />
    <QuotePopup />
    <QuoteClickInterceptor />
  </div>
);

export default Layout;

