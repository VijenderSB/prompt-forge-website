import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'fs';
import { marked } from 'marked';
const md = readFileSync('/tmp/build_arch.md','utf8');
const body = marked.parse(md);
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@page { size: A4; margin: 18mm 14mm; }
body { font-family: -apple-system, "Segoe UI", Inter, Arial, sans-serif; font-size: 10pt; line-height: 1.45; color:#1a202c; }
h1 { font-size: 22pt; color:#0b3d91; border-bottom: 3px solid #0b3d91; padding-bottom:6px;}
h2 { font-size: 15pt; color:#0b3d91; margin-top:18pt; border-bottom:1px solid #cbd5e0; padding-bottom:3px; page-break-after:avoid;}
h3 { font-size: 12pt; color:#10b981; margin-top:12pt; page-break-after:avoid;}
h4 { font-size: 10.5pt; color:#334155;}
code { background:#f1f5f9; padding:1px 4px; border-radius:3px; font-size:9pt; color:#be185d; font-family: ui-monospace, Menlo, monospace;}
pre { background:#0f172a; color:#e2e8f0; padding:10px; border-radius:6px; font-size:8.5pt; white-space:pre-wrap; word-break:break-word;}
pre code { background:transparent; color:inherit; padding:0;}
table { border-collapse: collapse; width:100%; margin:8pt 0; font-size:9pt; page-break-inside:avoid;}
th { background:#0b3d91; color:#fff; text-align:left; padding:5px 7px;}
td { border:1px solid #e2e8f0; padding:5px 7px; vertical-align:top;}
tr:nth-child(even) td { background:#f8fafc;}
ul,ol { margin: 4pt 0 4pt 18pt;} li { margin:2pt 0;}
hr { border:none; border-top:1px dashed #cbd5e0; margin:14pt 0;}
strong { color:#0b3d91;}
</style></head><body>${body}</body></html>`;
writeFileSync('/tmp/build_arch.html', html);
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'load' });
await page.pdf({ path: '/mnt/documents/Production_Architecture_React_Node.pdf', format: 'A4', printBackground: true, margin:{top:'18mm',bottom:'18mm',left:'14mm',right:'14mm'}, displayHeaderFooter:true, footerTemplate:'<div style="font-size:8pt;color:#888;width:100%;text-align:right;padding-right:14mm;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>', headerTemplate:'<div></div>' });
await browser.close();
console.log('OK');
