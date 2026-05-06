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
import { StateHubPage, CityHubPage, LocalityHubPage } from "./GeoPages";
import CentrePage from "./CentrePage";
import HealingTouchCentrePage, { isHealingTouchSlug } from "./HealingTouchCentrePage";
import PoonaEyeCareCentrePage, { isPoonaEyeCareSlug } from "./PoonaEyeCareCentrePage";
import ArohiCentrePage, { isArohiSlug } from "./ArohiCentrePage";
import { isCentreSlug } from "@/data/centresData";
import { LEGACY_BLOG_BY_SLUG } from "@/data/legacyBlogPosts";

/**
 * Catch-all resolver for legacy laser.fyi v1 root URLs (/:slug).
 * Goal: every URL that previously had Google traffic must respond 200 (redirect)
 * — never 404. Issues client-side 301-equivalent redirects to canonical new URL.
 */
export const LegacyRootResolver = () => {
  const { slug = "" } = useParams();
  const location = useLocation();

  if (isHealingTouchSlug(slug)) return <HealingTouchCentrePage />;
  if (isPoonaEyeCareSlug(slug)) return <PoonaEyeCareCentrePage />;
  if (isArohiSlug(slug)) return <ArohiCentrePage />;
  if (isCentreSlug(slug)) return <CentrePage />;
  if (STATIC_REDIRECTS[slug]) return <Navigate to={STATIC_REDIRECTS[slug]} replace />;
  if (PROCEDURE_REDIRECTS[slug]) return <Navigate to={PROCEDURE_REDIRECTS[slug]} replace />;
  if (KNOWN_STATES.has(slug)) {
    // Render the state hub directly (this resolver replaces /:state route)
    return <StateHubPage />;
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
 * Resolver for legacy 2-segment URLs (/:a/:b).
 * - /:state/:city  → render CityHubPage
 * - /:city/:locality (flat legacy pattern) → 301 to /:state/:city/:locality
 * - fallback: render CityHubPage (state hub) so we never 404 a known legacy URL
 */
export const LegacyTwoSegmentResolver = () => {
  const { state = "", city = "" } = useParams();

  // Canonical /:state/:city
  if (KNOWN_STATES.has(state)) {
    // Union-territory short form: /delhi/<locality> → render LocalityHubPage in place
    if (city && city !== state && LOCALITY_PARENT[city]) {
      return <LocalityHubPage paramsOverride={{ state, city: state, locality: city }} />;
    }
    return <CityHubPage />;
  }

  // Flat legacy /:city/:locality → redirect to canonical hierarchy
  if (CITY_TO_STATE[state]) {
    const realState = CITY_TO_STATE[state];
    // If state and city slugs match (delhi, chandigarh, goa), keep flat /<state>/<locality>
    if (realState === state) {
      return <LocalityHubPage paramsOverride={{ state: realState, city: state, locality: city }} />;
    }
    return <Navigate to={`/${realState}/${state}/${city}`} replace />;
  }

  // Unknown first segment — try inferring (e.g., "north-delhi" → delhi)
  const inferred = inferParent(state);
  if (inferred.state === inferred.city) {
    return <Navigate to={`/${inferred.state}/${city}`} replace />;
  }
  return <Navigate to={`/${inferred.state}/${inferred.city}/${city}`} replace />;
};

/**
 * Legacy 3-segment resolver: /:state/:city/:locality
 * Collapses /:s/:s/:loc → /:s/:loc for union-territory cities (delhi/delhi/x → /delhi/x).
 */
export const LegacyThreeSegmentResolver = () => {
  const { state = "", city = "", locality = "" } = useParams();
  const a = state, b = city, c = locality;

  if (KNOWN_STATES.has(a)) {
    if (a === b) return <Navigate to={`/${a}/${c}`} replace />;
    return <LocalityHubPage />;
  }
  if (CITY_TO_STATE[a]) {
    const realState = CITY_TO_STATE[a];
    if (realState === a) return <Navigate to={`/${realState}/${c}`} replace />;
    return <Navigate to={`/${realState}/${b}/${c}`} replace />;
  }
  if (CITY_TO_STATE[b]) {
    const realState = CITY_TO_STATE[b];
    if (realState === b) return <Navigate to={`/${realState}/${c}`} replace />;
    return <Navigate to={`/${realState}/${b}/${c}`} replace />;
  }
  const inferred = inferParent(c);
  if (inferred.state === inferred.city) {
    return <Navigate to={`/${inferred.state}/${c}`} replace />;
  }
  return <Navigate to={`/${inferred.state}/${inferred.city}/${c}`} replace />;
};

/**
 * Legacy dated blog: /blog/:y/:m/:d/:slug — render stub so URL responds 200.
 */
export const LegacyBlogPost = () => {
  const { slug = "", y = "", m = "", d = "" } = useParams();
  const meta = LEGACY_BLOG_BY_SLUG[slug];
  const title = meta?.title || slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const date = meta?.date || `${y}-${m}-${d}`;
  const category = meta?.category || "LASIK Insights";

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
