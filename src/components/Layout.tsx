import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyMobileCTA from "./StickyMobileCTA";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-16 pb-20 lg:pb-0">{children}</main>
    <Footer />
    <StickyMobileCTA />
  </div>
);

export default Layout;
