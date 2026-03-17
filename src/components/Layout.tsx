import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyMobileCTA from "./StickyMobileCTA";
import USPBanner from "./USPBanner";

interface LayoutProps {
  children: ReactNode;
  /** Hide the compact USP strip (e.g. on Why Us page which has its own) */
  hideUSPStrip?: boolean;
}

const Layout = ({ children, hideUSPStrip = false }: LayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-16 pb-20 lg:pb-0">
      {!hideUSPStrip && <USPBanner variant="compact" />}
      {children}
    </main>
    <Footer />
    <StickyMobileCTA />
  </div>
);

export default Layout;
