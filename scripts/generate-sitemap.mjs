// Run with: node scripts/generate-sitemap.mjs
// Regenerates public/sitemap.xml covering all static + procedure + top geo pages.
import fs from "node:fs";
import path from "node:path";

const ORIGIN = "https://laser.fyi";
const today = new Date().toISOString().split("T")[0];

const staticRoutes = [
  ["/", 1.0],
  ["/cost", 0.9],
  ["/faq", 0.9],
  ["/why-us", 0.9],
  ["/am-i-a-candidate", 0.9],
  ["/eye-anatomy", 0.7],
  ["/common-vision-problems", 0.7],
  ["/what-is-lasik", 0.9],
  ["/lasik-myths-vs-facts", 0.7],
  ["/unfit-for-lasik", 0.7],
  ["/risk-recovery", 0.8],
  ["/which-lasik-is-best", 0.9],
  ["/lasik-technology", 0.9],
  ["/international-guidelines", 0.6],
  ["/locations", 0.8],
  ["/blog", 0.7],
  ["/terms", 0.3],
  ["/privacy", 0.3],
  ["/disclaimer", 0.3],
];

const procedureSlugs = [
  "standard-lasik",
  "contoura-vision",
  "smile-pro",
  "innovEyes",
  "epi-lasik",
  "femto-contoura",
  "silk",
];

const topCities = [
  ["delhi", "new-delhi"], ["maharashtra", "mumbai"], ["maharashtra", "pune"],
  ["karnataka", "bangalore"], ["telangana", "hyderabad"], ["tamil-nadu", "chennai"],
  ["west-bengal", "kolkata"], ["gujarat", "ahmedabad"], ["gujarat", "surat"],
  ["rajasthan", "jaipur"], ["uttar-pradesh", "lucknow"], ["uttar-pradesh", "noida"],
  ["haryana", "gurgaon"], ["punjab", "chandigarh"], ["kerala", "kochi"],
  ["madhya-pradesh", "indore"], ["madhya-pradesh", "bhopal"], ["odisha", "bhubaneswar"],
  ["bihar", "patna"], ["assam", "guwahati"],
];

const urls = [];

staticRoutes.forEach(([loc, priority]) => {
  urls.push({ loc: ORIGIN + loc, priority, changefreq: "weekly" });
});

procedureSlugs.forEach(slug => {
  urls.push({ loc: `${ORIGIN}/procedures/${slug}`, priority: 0.9, changefreq: "weekly" });
});

topCities.forEach(([state, city]) => {
  urls.push({ loc: `${ORIGIN}/${state}/${city}`, priority: 0.7, changefreq: "monthly" });
  procedureSlugs.slice(0, 4).forEach(slug => {
    urls.push({ loc: `${ORIGIN}/${state}/${city}/main/${slug}`, priority: 0.6, changefreq: "monthly" });
  });
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(process.cwd(), "public/sitemap.xml"), xml);
console.log(`✅ Generated sitemap with ${urls.length} URLs`);
