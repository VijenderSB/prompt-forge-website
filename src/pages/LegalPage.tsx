// @ts-nocheck
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { BRAND } from "@/data/siteData";

const EMAIL_QUERY = "query@laser.fyi";
const EMAIL_INFO = "info@transess.com";
const LAST_UPDATED = "May 2026";

type LegalKind = "terms" | "privacy" | "disclaimer";

const META: Record<LegalKind, { title: string; heading: string; subtitle: string }> = {
  terms: {
    title: "Terms & Conditions | Centre for Lasik",
    heading: "Terms & Conditions",
    subtitle: "Please read these terms carefully before using Centre for Lasik services.",
  },
  privacy: {
    title: "Privacy Policy | Centre for Lasik",
    heading: "Privacy Policy",
    subtitle: "How we collect, use, and protect your personal and health information.",
  },
  disclaimer: {
    title: "Disclaimer | Centre for Lasik",
    heading: "Disclaimer",
    subtitle: "Important information regarding the content and services on laser.fyi.",
  },
};

const EmailLinks = () => (
  <p className="text-foreground">
    For any queries, write to{" "}
    <a className="text-primary font-semibold hover:underline" href={`mailto:${EMAIL_QUERY}`}>{EMAIL_QUERY}</a>{" "}
    or{" "}
    <a className="text-primary font-semibold hover:underline" href={`mailto:${EMAIL_INFO}`}>{EMAIL_INFO}</a>.
  </p>
);

const TermsBody = () => (
  <>
    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using laser.fyi (the "Platform"), operated by Centre for Lasik, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the Platform.</p>

    <h2>2. Nature of Service</h2>
    <p>Centre for Lasik is a digital aggregator that connects users with empanelled eye-care centres and refractive surgeons across India for LASIK and related procedures. We are not a healthcare provider and do not perform any clinical procedures ourselves.</p>

    <h2>3. Bookings & Pricing</h2>
    <p>All consultation bookings, diagnostic appointments and procedure quotes are facilitated through partner centres. Final eligibility, pricing and treatment plans are determined by the treating surgeon at the partner centre after a complete clinical evaluation. Indicative prices on the Platform may change without notice.</p>

    <h2>4. User Responsibilities</h2>
    <ul>
      <li>Provide accurate personal and medical information when requesting consultations.</li>
      <li>Disclose all existing eye conditions, systemic illnesses and medications to the treating centre.</li>
      <li>Use the Platform lawfully and not for any fraudulent or harmful purpose.</li>
    </ul>

    <h2>5. Intellectual Property</h2>
    <p>All content on the Platform — including text, graphics, logos, comparison matrices and clinical summaries — is owned by Centre for Lasik or its licensors and is protected by Indian and international copyright laws. You may not reproduce, redistribute or commercially exploit any content without prior written permission.</p>

    <h2>6. Limitation of Liability</h2>
    <p>Centre for Lasik shall not be liable for any direct, indirect, incidental or consequential outcomes arising from clinical decisions, surgical results, or services rendered by partner centres. Your contractual relationship for medical treatment is solely with the partner centre.</p>

    <h2>7. Governing Law</h2>
    <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts at New Delhi.</p>

    <h2>8. Changes to These Terms</h2>
    <p>We may update these Terms from time to time. Continued use of the Platform after changes are posted constitutes acceptance of the revised Terms.</p>

    <h2>9. Contact</h2>
    <EmailLinks />
  </>
);

const PrivacyBody = () => (
  <>
    <h2>1. Information We Collect</h2>
    <ul>
      <li><strong>Contact details:</strong> name, phone number, email and city, submitted via consultation forms.</li>
      <li><strong>Health-related inputs:</strong> spectacle power, age and basic eligibility responses you choose to share.</li>
      <li><strong>Usage data:</strong> pages visited, device type, browser, IP address and referrer, collected via cookies and analytics.</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <ul>
      <li>To connect you with the most appropriate partner centre and surgeon.</li>
      <li>To send appointment confirmations, reminders and post-consultation follow-ups.</li>
      <li>To improve our content, comparison tools and user experience.</li>
      <li>To comply with applicable legal and regulatory requirements.</li>
    </ul>

    <h2>3. Sharing of Information</h2>
    <p>We share your contact and basic clinical inputs only with the partner centre you are referred to. We do not sell your personal information to third parties. Aggregated, anonymised data may be used for research and platform improvement.</p>

    <h2>4. Data Security</h2>
    <p>We implement reasonable technical and organisational safeguards — including HTTPS encryption and access controls — to protect your data. However, no internet transmission is fully secure, and we cannot guarantee absolute security.</p>

    <h2>5. Cookies</h2>
    <p>We use first-party and third-party cookies for analytics, conversion tracking and personalisation. You can disable cookies in your browser, but some Platform features may not function correctly.</p>

    <h2>6. Your Rights</h2>
    <p>You may request access, correction or deletion of your personal data by emailing us. We will respond within a reasonable timeframe in accordance with applicable Indian data-protection laws (including the Digital Personal Data Protection Act, 2023).</p>

    <h2>7. Retention</h2>
    <p>We retain enquiry data for as long as necessary to provide our services and to comply with legal obligations, after which it is securely deleted or anonymised.</p>

    <h2>8. Contact</h2>
    <EmailLinks />
  </>
);

const DisclaimerBody = () => (
  <>
    <h2>1. Informational Purpose Only</h2>
    <p>All content on laser.fyi — including pricing, technology comparisons, candidacy guidance, recovery timelines and FAQs — is provided for general educational and informational purposes only. It is <strong>not</strong> a substitute for professional medical advice, diagnosis or treatment.</p>

    <h2>2. No Doctor–Patient Relationship</h2>
    <p>Use of this Platform does not create a doctor–patient relationship between you and Centre for Lasik. Any clinical relationship is exclusively between you and the treating surgeon at the partner centre.</p>

    <h2>3. Medical Decisions</h2>
    <p>Always seek the advice of a qualified ophthalmologist or refractive surgeon for any questions regarding your eyes, vision or surgical eligibility. Do not disregard professional medical advice or delay seeking it because of something you have read on this Platform.</p>

    <h2>4. Pricing & Availability</h2>
    <p>Indicative prices listed are institutional rates negotiated with partner centres and may vary based on prescription complexity, technology selected, partner centre policies and ongoing offers. Centre for Lasik does not guarantee specific pricing or surgical outcomes.</p>

    <h2>5. Third-Party Links & Centres</h2>
    <p>Links to partner centres, hospitals, clinical studies or external resources are provided for convenience. Centre for Lasik does not endorse and is not responsible for the content, services or outcomes of any third-party site or facility.</p>

    <h2>6. No Warranty</h2>
    <p>The Platform is provided on an "as is" and "as available" basis without warranties of any kind, express or implied. Centre for Lasik disclaims all liability arising from reliance on Platform content.</p>

    <h2>7. Contact</h2>
    <EmailLinks />
  </>
);

const LegalPage = ({ kind }: { kind: LegalKind }) => {
  const meta = META[kind];

  useEffect(() => {
    document.title = meta.title;
    let m = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
    m.content = meta.subtitle;
  }, [kind]);

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container max-w-4xl">
          <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-3">{meta.heading}</h1>
          <p className="text-primary-foreground/80 max-w-2xl">{meta.subtitle}</p>
          <p className="text-primary-foreground/60 text-sm mt-3">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          <article className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-foreground prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
            {kind === "terms" && <TermsBody />}
            {kind === "privacy" && <PrivacyBody />}
            {kind === "disclaimer" && <DisclaimerBody />}
          </article>
        </div>
      </section>
    </Layout>
  );
};

export const TermsPage = () => <LegalPage kind="terms" />;
export const PrivacyPage = () => <LegalPage kind="privacy" />;
export const DisclaimerPage = () => <LegalPage kind="disclaimer" />;

export default LegalPage;
