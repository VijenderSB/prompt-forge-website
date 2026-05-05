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
import { CityHubPage, LocalityHubPage, StateHubPage } from "./GeoPages";
import NotFound from "./NotFound";

/**
 * Catch-all resolver for legacy laser.fyi v1 URLs.
 * Goal: every URL that previously had Google traffic must respond 200 (rendered)
 * or 301-equivalent (Navigate replace) — never 404.
 */
export const LegacyRootResolver = () => {
  const { slug = "" } = useParams();
  const location = useLocation();

  // 1. Static page redirects
  if (STATIC_REDIRECTS[slug]) {
    return <Navigate to={STATIC_REDIRECTS[slug]} replace />;
  }
  // 2. Procedure page redirects
  if (PROCEDURE_REDIRECTS[slug]) {
    return <Navigate to={PROCEDURE_REDIRECTS[slug]} replace />;
  }
  // 3. State hub
  if (KNOWN_STATES.has(slug)) {
    return <StateHubPage forcedState={slug} />;
  }
  // 4. City — render city hub under inferred state
  if (CITY_TO_STATE[slug]) {
    const state = CITY_TO_STATE[slug];
    return <Navigate to={`/${state}/${slug}`} replace />;
  }
  // 5. Locality — known parent (state, city)
  if (LOCALITY_PARENT[slug]) {
    const [state, city] = LOCALITY_PARENT[slug];
    return <Navigate to={`/${state}/${city}/${slug}`} replace />;
  }
  // 6. Was a legacy URL but unmapped — render as a generic locality page so URL stays 200.
  //    Try to infer parent city from "-cityname" suffix (e.g. "akurdi-pune" → pune).
  if (LEGACY_ROOT_SLUGS.has(slug)) {
    const inferred = inferParent(slug);
    return <LocalityHubPage forcedState={inferred.state} forcedCity={inferred.city} forcedLocality={slug} />;
  }
  // 7. Truly unknown
  console.warn("[LegacyRootResolver] Unknown slug:", slug, location.pathname);
  return <NotFound />;
};

function inferParent(slug: string): { state: string; city: string } {
  const parts = slug.split("-");
  // try suffix matches: last 1, 2, 3 tokens joined
  for (let n = 1; n <= 3 && n < parts.length; n++) {
    const candidate = parts.slice(-n).join("-");
    if (CITY_TO_STATE[candidate]) {
      return { state: CITY_TO_STATE[candidate], city: candidate };
    }
  }
  // default: Delhi NCR hub
  return { state: "delhi", city: "delhi" };
}

/**
 * Catch-all for legacy 2-segment URLs: /:a/:b
 * Could be /state/city, /city/locality, or /(unknown)/(slug).
 */
export const LegacyTwoSegResolver = () => {
  const { a = "", b = "" } = useParams();

  if (KNOWN_STATES.has(a) && CITY_TO_STATE[b] === a) {
    return <CityHubPage forcedState={a} forcedCity={b} />;
  }
  if (KNOWN_STATES.has(a)) {
    // state/city — render as city hub regardless
    return <CityHubPage forcedState={a} forcedCity={b} />;
  }
  if (CITY_TO_STATE[a]) {
    // city/locality
    const state = CITY_TO_STATE[a];
    return <LocalityHubPage forcedState={state} forcedCity={a} forcedLocality={b} />;
  }
  // Unknown 2-seg: try as state/city anyway
  return <CityHubPage forcedState={a} forcedCity={b} />;
};

/**
 * Legacy dated blog: /blog/:y/:m/:d/:slug
 * Render a stub so the URL responds 200 with relevant H1; canonical to /blog index.
 */
export const LegacyBlogPost = () => {
  const { slug = "" } = useParams();
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  useEffect(() => {
    document.title = `${title} | Centre for Lasik Blog`;
    // canonical
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
          <a href="/blog" className="btn btn-primary">Browse all articles →</a>
          <a href="/am-i-a-candidate" className="btn btn-outline">Check LASIK eligibility</a>
        </div>
      </main>
    </div>
  );
};
