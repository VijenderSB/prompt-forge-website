import { Helmet } from "react-helmet-async";
import { BRAND } from "@/data/siteData";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  schema?: Record<string, any> | Record<string, any>[];
  keywords?: string;
  noindex?: boolean;
}

const ORIGIN = "https://laser.fyi";

const SEO = ({ title, description, path, image, type = "website", schema, keywords, noindex }: SEOProps) => {
  const url = `${ORIGIN}${path}`;
  const ogImage = image || `${ORIGIN}/og-default.jpg`;
  const fullTitle = title.includes(BRAND.name) ? title : `${title} | ${BRAND.name}`;
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  // Always include BreadcrumbList
  const segments = path.split("/").filter(Boolean);
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN + "/" },
      ...segments.map((s, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: s.split("-").map(w => w[0]?.toUpperCase() + w.slice(1)).join(" "),
        item: ORIGIN + "/" + segments.slice(0, i + 1).join("/"),
      })),
    ],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex ? <meta name="robots" content="noindex,follow" /> : <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={BRAND.name} />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
      <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
    </Helmet>
  );
};

export default SEO;

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const medicalProcedureSchema = (p: {
  name: string;
  description: string;
  price: number;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: p.name,
  procedureType: "Surgical",
  bodyLocation: "Cornea",
  description: p.description,
  url: p.url,
  preparation: "Free 90-minute Pentacam corneal tomography diagnostic",
  followup: "1-day, 1-week, 1-month post-operative reviews",
  howPerformed: "Outpatient laser refractive surgery, 10–15 minutes per eye",
  offers: {
    "@type": "Offer",
    price: p.price,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "MedicalBusiness", name: BRAND.name },
  },
});
