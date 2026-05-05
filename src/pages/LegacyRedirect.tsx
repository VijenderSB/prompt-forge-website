// @ts-nocheck
import { useEffect } from "react";
import { Navigate, useParams, useLocation } from "react-router-dom";
import {
  STATIC_REDIRECTS,
  PROCEDURE_REDIRECTS,
  KNOWN_STATES,
  CITY_TO_STATE,
  LOCALITY_PARENT,
  LEGACY_ROOT_SLUGS,
} from "@/data/legacyMaps";
import NotFound from "./NotFound";

/**
 * Catch-all resolver for legacy laser.fyi v1 root URLs (/:slug).
 * Goal: every URL that previously had Google traffic must respond 200 (redirect)
 * — never 404. Issues client-side 301-equivalent redirects to canonical new URL.
 */
export const LegacyRootResolver = () => {
  const { slug = "" } = useParams();
  const location = useLocation();

  if (STATIC_REDIRECTS[slug]) return <Navigate to={STATIC_REDIRECTS[slug]} replace />;
  if (PROCEDURE_REDIRECTS[slug]) return <Navigate to={PROCEDURE_REDIRECTS[slug]} replace />;
  if (KNOWN_STATES.has(slug)) {
    // Real state hub — let through to /:state route
    return <Navigate to={`/${slug}/`} replace />;
  }
  if (CITY_TO_STATE[slug]) {
    return <Navigate to={`/${CITY_TO_STATE[slug]}/${slug}`} replace />;
  }
  if (LOCALITY_PARENT[slug]) {
    const [state, city] = LOCALITY_PARENT[slug];
    return <Navigate to={`/${state}/${city}/${slug}`} replace />;
  }
  if (LEGACY_ROOT_SLUGS.has(slug)) {
    // Known legacy URL but unmapped — try to infer parent city from "-cityname" suffix
    const inferred = inferParent(slug);
    return <Navigate to={`/${inferred.state}/${inferred.city}/${slug}`} replace />;
  }
  console.warn("[LegacyRootResolver] Unknown slug:", slug, location.pathname);
  return <NotFound />;
};

function inferParent(slug: string): { state: string; city: string } {
  const parts = slug.split("-");
  for (let n = 1; n <= 3 && n < parts.length; n++) {
    const candidate = parts.slice(-n).join("-");
    if (CITY_TO_STATE[candidate]) {
      return { state: CITY_TO_STATE[candidate], city: candidate };
    }
  }
  return { state: "delhi", city: "delhi" };
}

/**
 * Legacy dated blog: /blog/:y/:m/:d/:slug — render stub so URL responds 200.
 */
export const LegacyBlogPost = () => {
  const { slug = "" } = useParams();
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  useEffect(() => {
    document.title = `${title} | Centre for Lasik Blog`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.origin + window.location.pathname;
  }, [title]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-3xl py-16">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-primary">Home</a> ›{" "}
          <a href="/blog" className="hover:text-primary">Blog</a>
        </nav>
        <h1 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
          {title}
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-6">
          This article is part of the Centre for Lasik knowledge base on LASIK eye
          surgery in India — covering candidacy, procedure options, recovery, costs,
          and post-operative care across 3,700+ Indian cities.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Browse our complete LASIK resource library for expert guides on Contoura
          Vision, SMILE Pro, WaveLight InnovEyes, SiLK, and other FDA-approved
          procedures available at our partner centres.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <a href="/blog" className="text-primary font-semibold hover:underline">Browse all articles →</a>
          <span className="text-muted-foreground">·</span>
          <a href="/am-i-a-candidate" className="text-primary font-semibold hover:underline">Check LASIK eligibility →</a>
        </div>
      </main>
    </div>
  );
};
