// @ts-nocheck
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, MapPin, Phone, Star, Clock, ChevronRight, Check, ShieldCheck, Award, UserRound } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ProcedureCard from "@/components/ProcedureCard";
import ConsultationForm from "@/components/ConsultationForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PROCEDURES, BRAND } from "@/data/siteData";
import { CENTRE_BY_SLUG, type CentreData } from "@/data/centresData";
import NotFound from "./NotFound";
import drTewariPhoto from "@/assets/dr-vk-tewari.png";

const centreNarrative = (c: CentreData) => {
  const loc = c.locality ? c.locality.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ") : null;
  const where = loc ? `${loc}, ${c.cityName}` : c.cityName;
  const isAsg = /asg/i.test(c.hospital);
  const isDiva = /diva-eye-institute/i.test(c.slug);
  const isKhanna = /khanna-eye-centre/i.test(c.slug);
  const isIsha = /isha-netralaya/i.test(c.slug);
  if (isIsha) {
    return [
      `Isha Netralaya, ${where} is part of one of the Mumbai Metropolitan Region's most respected ophthalmology networks, with multiple super-specialty centres across Mumbai, Thane, Kalyan, Ambernath and Pimpri-Chinchwad. The group is recognised for its premium refractive programme — particularly Femto Contoura Vision and the next-generation WaveLight Plus InnovEyes flapless platform.`,
      `For patients seeking spectacle freedom, the ${where} centre delivers a fully personalised laser vision-correction experience. Every case is screened on the Pentacam, corneal topographer and InnovEyes ray-tracing diagnostic suite, then matched to the most appropriate procedure — Femto Contoura Vision, WaveLight Plus InnovEyes Flapless, or full WaveLight Plus InnovEyes — all performed inside ISO-class modular operating theatres on US-FDA approved excimer and femtosecond platforms.`,
      `Beyond LASIK, Isha Netralaya functions as a complete eye-care destination — premium cataract surgery with monofocal, toric, multifocal and EDOF IOLs; medical and surgical retina; glaucoma, cornea and ICL care; paediatric ophthalmology and comprehensive diagnostics. Operating hours are typically 10:00 AM – 7:00 PM, Monday to Saturday.`,
      `Booking through Centre for Lasik unlocks transparent institutional pricing, 0% EMI options, free 90-minute diagnostic and a structured post-operative follow-up plan — same surgeon, same OT, same technology, with a single accountable care team coordinating every step.`,
    ];
  }
  if (isDiva) {
    return [
      `Diva Eye Institute, ${where} is an NABH-accredited eye-care hospital with over eight years of clinical excellence in advanced ophthalmology. Led by Dr. Dipan Desai and Dr. Kaushik Solanki, the institute has built a strong reputation in Ahmedabad for robotic cataract surgery, modern refractive procedures and a fully integrated, multidisciplinary eye-care model.`,
      `The Ambawadi flagship — located near Parimal Garden, Ellis Bridge — and the second branch on Sindhu Bhavan Marg, Bodakdev together deliver the entire spectrum of vision correction. Patients seeking spectacle freedom can choose from Standard LASIK, Topo Guided LASIK, Femto LASIK, Femto Contoura Vision, ReLEx SMILE, PRK and Trans PRK — all performed on US-FDA approved excimer and femtosecond platforms inside ISO-class modular operating theatres.`,
      `Beyond LASIK, Diva Eye Institute functions as a complete eye-care destination — robotic and premium cataract surgery (monofocal, toric, multifocal and EDOF IOLs), medical and surgical retina, glaucoma management, paediatric ophthalmology and comprehensive diagnostics. Operating hours are typically 10:00 AM – 7:00 PM, Monday to Saturday.`,
      `Booking through Centre for Lasik unlocks transparent institutional pricing, 0% EMI options, free 90-minute diagnostic and a structured post-operative follow-up plan — same surgeon, same OT, same technology, with a single accountable care team coordinating every step.`,
    ];
  }
  if (isKhanna) {
    return [
      `Khanna Eye Centre, Model Town, New Delhi is one of North Delhi's most trusted ophthalmology destinations, with a long-standing reputation for laser vision correction, advanced cataract surgery and comprehensive eye care. Led by Dr. Sanjay Khanna, the centre is recognised for surgical precision, patient-first protocols and consistently strong refractive outcomes.`,
      `For patients seeking spectacle freedom, Khanna Eye Centre offers the complete spectrum of laser vision correction — Standard LASIK, Topo Guided LASIK, Femto LASIK, Femto HD LASIK, PRK and Epi-LASIK — all performed on US-FDA approved excimer and femtosecond platforms. Every case is preceded by a full pre-operative workup including Pentacam tomography, corneal topography, pachymetry, dry-eye assessment and dilated retinal evaluation, conducted inside ISO-class modular operating theatres.`,
      `Beyond LASIK, Khanna Eye Centre functions as a complete eye-care destination — phacoemulsification cataract surgery with premium monofocal, toric and trifocal IOLs; medical and surgical retina; glaucoma diagnostics and management; cornea, ICL and keratoconus care; paediatric ophthalmology and comprehensive diagnostics.`,
      `Booking through Centre for Lasik unlocks transparent institutional pricing, 0% EMI options, free 90-minute diagnostic and a structured post-operative follow-up plan — same surgeon, same OT, same technology, with a single accountable care team coordinating every step.`,
    ];
  }
  const brandLine = isAsg
    ? `${c.hospital}, ${where} is part of one of India's largest super-specialty eye-care networks, with a national footprint of NABH-aligned hospitals and a clinical reputation built over decades of high-volume refractive and vitreo-retinal surgery.`
    : `${c.hospital}, ${where} is among the most trusted ophthalmology destinations in ${c.cityName}, recognised for surgical precision, modern diagnostics and patient-first protocols.`;
  return [
    brandLine,
    `For patients seeking spectacle freedom, the ${where} centre delivers the best-in-class laser vision correction experience — Standard LASIK and HD Contoura Vision performed on US-FDA approved excimer and femtosecond platforms, supported by a full pre-operative workup including Pentacam tomography, corneal topography, pachymetry, dry-eye assessment and dilated retinal evaluation. Every case is screened by a fellowship-trained refractive surgeon, and procedures are conducted inside ISO-class modular operating theatres with strict sterile protocols.`,
    `Beyond LASIK, ${c.hospital}, ${c.cityName} functions as a complete eye-care destination. The centre offers the entire spectrum of ophthalmic services under one roof — phacoemulsification cataract surgery with premium monofocal, toric and trifocal IOLs; medical and surgical retina including intravitreal injections, vitrectomy and diabetic retinopathy management; glaucoma diagnostics and surgery; cornea and keratoconus care including C3R and ICL; oculoplasty, squint and paediatric ophthalmology; neuro-ophthalmology and routine comprehensive eye exams.`,
    `Booking through Centre for Lasik unlocks transparent institutional pricing, 0% EMI options, free 90-minute diagnostic and a structured post-operative follow-up plan — same surgeon, same OT, same technology, with a single accountable care team coordinating every step.`,
  ];
};

const trustBadges = [
  { icon: ShieldCheck, label: "NABH-aligned safety protocols" },
  { icon: Award, label: "US-FDA approved technology" },
  { icon: Star, label: "4.9/5 patient satisfaction" },
  { icon: Check, label: "Free 90-min diagnostic" },
];



const faqs = (c: CentreData) => [
  { q: `What LASIK procedures are available at ${c.hospital}, ${c.cityName}?`, a: `This centre offers Standard LASIK and HD Contoura Vision — two of the most clinically validated, FDA-approved laser vision-correction procedures, with consistent institutional pricing across India.` },
  { q: `What is the cost of LASIK at ${c.hospital} in ${c.address}?`, a: `Standard LASIK and HD Contoura Vision are both available at this centre under our institutional pricing programme. Speak to our care team for a personalised quote based on your prescription and chosen procedure.` },
  { q: `Is the consultation at ${c.hospital} really free?`, a: `Yes. The full 90-minute pre-LASIK diagnostic — Pentacam, topography, pachymetry and retinal evaluation — is completely free with no obligation to proceed.` },
  { q: `How do I book an appointment at ${c.hospital}?`, a: `Call ${BRAND.phoneDisplay} or fill the consultation form on this page. Our care team will confirm your slot at the ${c.locality ? `${c.locality.replace(/-/g, " ")}, ` : ""}${c.cityName} centre within 30 minutes.` },
  { q: `What are the operating hours?`, a: `Monday to Saturday, 9:00 AM to 7:00 PM. Sunday consultations available by appointment for select procedures.` },
];

const CentrePage = () => {
  const { slug = "" } = useParams();
  const centre = CENTRE_BY_SLUG[slug];

  useEffect(() => {
    if (!centre) return;
    const title = `${centre.hospital}, ${centre.address} | LASIK Centre — Centre for Lasik`;
    const desc = `Book Standard LASIK or HD Contoura Vision at ${centre.hospital} in ${centre.address}. FDA-approved laser vision correction. Free 90-min consultation. Call ${BRAND.phoneDisplay}.`;
    document.title = title;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = desc;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = window.location.origin + window.location.pathname;
  }, [centre]);

  if (!centre) return <NotFound />;

  const c = centre;
  const localityDisplay = c.locality ? c.locality.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ") : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient section-padding">
        <div className="container max-w-6xl">
          <nav className="text-primary-foreground/60 text-sm mb-4">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <ChevronRight className="w-3 h-3 inline mx-1" />
            <Link to="/centres" className="hover:text-primary-foreground">Centres</Link>
            <ChevronRight className="w-3 h-3 inline mx-1" />
            <Link to={`/${c.state}/${c.city}`} className="hover:text-primary-foreground">{c.cityName}</Link>
            <ChevronRight className="w-3 h-3 inline mx-1" />
            <span className="text-primary-foreground">{c.hospital}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-card/15 border border-card/20 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground mb-4">
                <Building2 className="w-3 h-3 inline mr-1" /> Partner LASIK Centre
              </span>
              <h1 className="font-display font-black text-3xl md:text-4xl text-primary-foreground mb-3">
                LASIK Eye Surgery at {c.hospital}, {localityDisplay ? `${localityDisplay}, ` : ""}{c.cityName}
              </h1>
              <p className="text-primary-foreground/80 mb-6">
                Standard LASIK and HD Contoura Vision — FDA-approved laser vision correction available at this centre. Free 90-minute consultation, no obligation.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6 max-w-md">
                {trustBadges.map(b => (
                  <div key={b.label} className="flex items-start gap-2 text-primary-foreground/90 text-xs">
                    <b.icon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold">
                  <a href="#book">Book Free Consultation</a>
                </Button>
                <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-primary-foreground font-medium px-4 h-11 rounded-md border border-primary-foreground/30">
                  <Phone className="w-4 h-4" /> {BRAND.phoneDisplay}
                </a>
              </div>
            </motion.div>
            <div id="book"><ConsultationForm variant="hero" centre={`${c.hospital}, ${localityDisplay ? `${localityDisplay}, ` : ""}${c.cityName}`} centreId={c.slug} /></div>
          </div>
        </div>
      </section>

      {/* Centre at a glance */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <SectionHeading title="Centre at a Glance" subtitle={`Everything you need to know before visiting ${c.hospital}, ${c.cityName}.`} />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 card-elevated">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Address</h3>
              <p className="text-sm text-muted-foreground">{c.address}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 card-elevated">
              <Phone className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Booking Helpline</h3>
              <p className="text-sm text-muted-foreground">{BRAND.phoneDisplay}<br/>Mon–Sat, 9 AM – 7 PM</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 card-elevated">
              <Clock className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground mb-1">Diagnostic Slot</h3>
              <p className="text-sm text-muted-foreground">90-min comprehensive workup<br/>Free, no obligation</p>
            </div>
          </div>
        </div>
      </section>

      {/* About this centre — narrative */}
      <section className="section-padding bg-surface">
        <div className="container max-w-4xl">
          <SectionHeading
            title={`About ${c.hospital}, ${c.cityName}`}
            subtitle="A complete eye-care destination — from laser vision correction to retina, cataract and beyond."
          />
          <div className="space-y-5">
            {centreNarrative(c).map((para, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed text-[15px]">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Chief Surgeon profile — Tewari Eye Centre only */}
      {/tewari-eye-centre/i.test(c.slug) && (
        <section className="section-padding">
          <div className="container max-w-4xl">
            <SectionHeading
              title="Chief Eye Surgeon"
              subtitle={`Meet the lead refractive surgeon at ${c.hospital}, ${localityDisplay ? `${localityDisplay}, ` : ""}${c.cityName}.`}
            />
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 card-elevated">
              <div className="grid md:grid-cols-[180px_1fr] gap-6 items-start">
                <div className="w-40 h-40 md:w-[180px] md:h-[180px] rounded-2xl overflow-hidden bg-primary/5 mx-auto md:mx-0 border border-border">
                  <img src={drTewariPhoto} alt="Dr. V. K. Tewari, Chief Eye Surgeon at Tewari Eye Centre" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-1">Dr. V. K. Tewari</h3>
                  <p className="text-primary font-semibold text-sm mb-4">Chief Eye Surgeon · Tewari Eye Centre</p>
                  <p className="text-foreground/85 leading-relaxed text-[15px] mb-5">
                    Dr. V. K. Tewari is the Chief Eye Surgeon at Tewari Eye Centre and leads the refractive and cataract surgical programme across both the Sector 55, Noida and Vaishali, Ghaziabad units. With decades of high-volume surgical experience, Dr. Tewari is widely regarded as one of the most trusted refractive and cataract surgeons in the Delhi NCR region.
                  </p>
                  <h4 className="font-display font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Areas of Expertise</h4>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {[
                      "Laser Eye Surgery (LASIK & Contoura Vision)",
                      "Lasik Cataract Surgery",
                      "Toric Intraocular Lenses (Toric IOLs)",
                      "Multifocal & EDOF Lens Implants",
                      "Implantable Collamer Lenses (ICL)",
                      "Premium Refractive Cataract Surgery",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Chief Surgeon profile — Diva Eye Institute only */}
      {/diva-eye-institute/i.test(c.slug) && (
        <section className="section-padding">
          <div className="container max-w-4xl">
            <SectionHeading
              title="Chief Eye Surgeon"
              subtitle={`Meet the lead refractive surgeon at ${c.hospital}, ${localityDisplay ? `${localityDisplay}, ` : ""}${c.cityName}.`}
            />
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 card-elevated">
              <div className="grid md:grid-cols-[180px_1fr] gap-6 items-start">
                <div className="w-40 h-40 md:w-[180px] md:h-[180px] rounded-2xl overflow-hidden bg-primary/5 mx-auto md:mx-0 border border-border flex items-center justify-center">
                  <UserRound className="w-20 h-20 text-primary/40" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-1">Dr. Dipan Desai</h3>
                  <p className="text-primary font-semibold text-sm mb-4">Chief Eye Surgeon · Founder, Diva Eye Institute</p>
                  <p className="text-foreground/85 leading-relaxed text-[15px] mb-5">
                    Dr. Dipan Desai established Diva Eye Institute as a centre of excellence providing state-of-the-art, comprehensive eye care under one roof. Modern eye care demands not only excellent diagnostic and surgical skills but also highly sophisticated technology and a multidisciplinary approach — a philosophy that defines every patient journey at Diva.
                  </p>
                  <div className="border-t border-border pt-5 mb-5">
                    <h3 className="font-display font-bold text-xl text-foreground mb-1">Dr. Vivan Desai</h3>
                    <p className="text-primary font-semibold text-sm mb-3">Cataract & Refractive Surgery Expert</p>
                    <p className="text-foreground/85 leading-relaxed text-[15px]">
                      Dr. Vivan Desai leads the cataract and refractive surgery programme at Diva Eye Institute, with deep expertise in modern laser vision correction, premium IOL cataract surgery and advanced anterior-segment care.
                    </p>
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Areas of Expertise</h4>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {[
                      "Standard, Femto & Topo Guided LASIK",
                      "Femto Contoura Vision",
                      "ReLEx SMILE",
                      "PRK & Trans PRK",
                      "Robotic & Premium Cataract Surgery",
                      "Toric, Multifocal & EDOF IOLs",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Centre-specific pricing — Diva Eye Institute */}
      {/diva-eye-institute/i.test(c.slug) && (
        <section className="section-padding bg-surface">
          <div className="container max-w-5xl">
            <SectionHeading
              title={`LASIK & Refractive Pricing at ${c.hospital}`}
              subtitle="Transparent institutional pricing — per eye, inclusive of pre-op diagnostics and standard post-op follow-ups."
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-card card-elevated">
              <table className="w-full text-left">
                <thead className="bg-primary/5 border-b border-border">
                  <tr>
                    <th className="px-5 py-4 font-display font-semibold text-foreground text-sm">Procedure</th>
                    <th className="px-5 py-4 font-display font-semibold text-foreground text-sm hidden sm:table-cell">Best For</th>
                    <th className="px-5 py-4 font-display font-semibold text-foreground text-sm text-right">Price (per eye)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Standard LASIK", best: "Mild to moderate refractive errors", price: "₹17,999" },
                    { name: "Topo Guided LASIK", best: "Topography-guided HD vision correction", price: "₹24,999" },
                    { name: "Femto LASIK", best: "Bladeless flap creation", price: "₹37,499" },
                    { name: "Femto Contoura Vision", best: "Bladeless + topography-guided HD", price: "₹42,499" },
                    { name: "ReLEx SMILE", best: "Flapless, minimally invasive", price: "₹64,999" },
                    { name: "PRK", best: "Surface ablation candidates", price: "₹17,999" },
                    { name: "Trans PRK", best: "Touch-free surface ablation", price: "₹42,499" },
                  ].map((row, i) => (
                    <tr key={row.name} className={i !== 0 ? "border-t border-border" : ""}>
                      <td className="px-5 py-4 font-semibold text-foreground">{row.name}</td>
                      <td className="px-5 py-4 text-sm text-muted-foreground hidden sm:table-cell">{row.best}</td>
                      <td className="px-5 py-4 text-right font-display font-bold text-primary">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Prices are per eye and exclusive of GST. 0% EMI options available up to 24 months. Final eligibility and quote confirmed after free pre-LASIK diagnostic.
            </p>
            <div className="flex justify-center mt-6">
              <Button asChild size="lg" className="font-semibold px-8">
                <a href="#book">Book Free Pre-LASIK Diagnostic</a>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Chief Surgeon profile — Khanna Eye Centre only */}
      {/khanna-eye-centre/i.test(c.slug) && (
        <section className="section-padding">
          <div className="container max-w-4xl">
            <SectionHeading
              title="Chief Eye Surgeon"
              subtitle={`Meet the lead refractive surgeon at ${c.hospital}, ${localityDisplay ? `${localityDisplay}, ` : ""}${c.cityName}.`}
            />
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 card-elevated">
              <div className="grid md:grid-cols-[180px_1fr] gap-6 items-start">
                <div className="w-40 h-40 md:w-[180px] md:h-[180px] rounded-2xl overflow-hidden bg-primary/5 mx-auto md:mx-0 border border-border flex items-center justify-center">
                  <UserRound className="w-20 h-20 text-primary/40" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-1">Dr. Sanjay Khanna</h3>
                  <p className="text-primary font-semibold text-sm mb-4">Chief Eye Surgeon for LASIK · Khanna Eye Centre</p>
                  <p className="text-foreground/85 leading-relaxed text-[15px] mb-5">
                    Dr. Sanjay Khanna leads the refractive and cataract surgical programme at Khanna Eye Centre, Model Town, New Delhi. With deep expertise across the full spectrum of laser vision correction — from Standard LASIK to Femto HD LASIK and Epi-LASIK — Dr. Khanna is widely regarded as one of North Delhi's most trusted refractive surgeons.
                  </p>
                  <h4 className="font-display font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Areas of Expertise</h4>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {[
                      "Standard & Topo Guided LASIK",
                      "Femto LASIK & Femto HD LASIK",
                      "PRK & Epi-LASIK",
                      "Premium Cataract Surgery",
                      "Toric, Multifocal & EDOF IOLs",
                      "Comprehensive Anterior-Segment Care",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Centre-specific pricing — Khanna Eye Centre */}
      {/khanna-eye-centre/i.test(c.slug) && (
        <section className="section-padding bg-surface">
          <div className="container max-w-5xl">
            <SectionHeading
              title={`LASIK & Refractive Pricing at ${c.hospital}`}
              subtitle="Transparent institutional pricing — per eye, inclusive of pre-op diagnostics and standard post-op follow-ups."
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-card card-elevated">
              <table className="w-full text-left">
                <thead className="bg-primary/5 border-b border-border">
                  <tr>
                    <th className="px-5 py-4 font-display font-semibold text-foreground text-sm">Procedure</th>
                    <th className="px-5 py-4 font-display font-semibold text-foreground text-sm hidden sm:table-cell">Best For</th>
                    <th className="px-5 py-4 font-display font-semibold text-foreground text-sm text-right">Price (per eye)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Standard LASIK", best: "Mild to moderate refractive errors", price: "₹14,999" },
                    { name: "Topo Guided LASIK", best: "Topography-guided HD vision correction", price: "₹19,999" },
                    { name: "Femto LASIK", best: "Bladeless flap creation", price: "₹34,999" },
                    { name: "Femto HD LASIK", best: "Bladeless + HD wavefront-optimised", price: "₹39,999" },
                    { name: "PRK", best: "Surface ablation candidates", price: "₹17,999" },
                    { name: "Epi-LASIK", best: "Thin corneas / surface ablation", price: "₹25,499" },
                  ].map((row, i) => (
                    <tr key={row.name} className={i !== 0 ? "border-t border-border" : ""}>
                      <td className="px-5 py-4 font-semibold text-foreground">{row.name}</td>
                      <td className="px-5 py-4 text-sm text-muted-foreground hidden sm:table-cell">{row.best}</td>
                      <td className="px-5 py-4 text-right font-display font-bold text-primary">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Prices are per eye and exclusive of GST. 0% EMI options available up to 24 months. Final eligibility and quote confirmed after free pre-LASIK diagnostic.
            </p>
            <div className="flex justify-center mt-6">
              <Button asChild size="lg" className="font-semibold px-8">
                <a href="#book">Book Free Pre-LASIK Diagnostic</a>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Centre-specific pricing — Isha Netralaya */}
      {/isha-netralaya/i.test(c.slug) && (
        <section className="section-padding bg-surface">
          <div className="container max-w-5xl">
            <SectionHeading
              title={`LASIK & Refractive Pricing at ${c.hospital}`}
              subtitle="Transparent institutional pricing — per eye, inclusive of pre-op diagnostics and standard post-op follow-ups."
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-card card-elevated">
              <table className="w-full text-left">
                <thead className="bg-primary/5 border-b border-border">
                  <tr>
                    <th className="px-5 py-4 font-display font-semibold text-foreground text-sm">Procedure</th>
                    <th className="px-5 py-4 font-display font-semibold text-foreground text-sm hidden sm:table-cell">Best For</th>
                    <th className="px-5 py-4 font-display font-semibold text-foreground text-sm text-right">Price (per eye)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Contoura Vision Femto", best: "Bladeless + topography-guided HD vision", price: "₹45,000" },
                    { name: "WaveLight Plus InnovEyes Flapless", best: "Flapless ray-tracing personalised LASIK", price: "₹59,999" },
                    { name: "WaveLight Plus InnovEyes", best: "Premium ray-tracing personalised LASIK", price: "₹74,999" },
                  ].map((row, i) => (
                    <tr key={row.name} className={i !== 0 ? "border-t border-border" : ""}>
                      <td className="px-5 py-4 font-semibold text-foreground">{row.name}</td>
                      <td className="px-5 py-4 text-sm text-muted-foreground hidden sm:table-cell">{row.best}</td>
                      <td className="px-5 py-4 text-right font-display font-bold text-primary">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Prices are per eye and exclusive of GST. 0% EMI options available up to 24 months. Final eligibility and quote confirmed after free pre-LASIK diagnostic.
            </p>
            <div className="flex justify-center mt-6">
              <Button asChild size="lg" className="font-semibold px-8">
                <a href="#book">Book Free Pre-LASIK Diagnostic</a>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Procedures */}
      <section className="section-padding">
        <div className="container max-w-6xl">
          <SectionHeading title={`LASIK Procedures Available at ${c.hospital}`} subtitle="World-class FDA-approved technology — across all 50+ partner centres in India." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROCEDURES.filter(p => p.slug === "standard-lasik" || p.slug === "contoura-vision").map((p) => (
              <Link key={p.id} to={`/procedures/${p.slug}`} className="bg-card border border-border rounded-xl p-5 card-elevated hover:border-primary transition-colors">
                <h3 className="font-display font-bold text-foreground mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{p.tagline}</p>
                <span className="text-primary font-semibold text-sm inline-flex items-center gap-1">Learn more <ChevronRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Centre-specific pricing — Tewari Eye Centre */}
      {/tewari-eye-centre/i.test(c.slug) && (
        <section className="section-padding bg-surface">
          <div className="container max-w-5xl">
            <SectionHeading
              title={`LASIK & ICL Pricing at ${c.hospital}`}
              subtitle="Transparent institutional pricing — per eye, inclusive of pre-op diagnostics and standard post-op follow-ups."
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-card card-elevated">
              <table className="w-full text-left">
                <thead className="bg-primary/5 border-b border-border">
                  <tr>
                    <th className="px-5 py-4 font-display font-semibold text-foreground text-sm">Procedure</th>
                    <th className="px-5 py-4 font-display font-semibold text-foreground text-sm hidden sm:table-cell">Best For</th>
                    <th className="px-5 py-4 font-display font-semibold text-foreground text-sm text-right">Price (per eye)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Standard LASIK", best: "Mild to moderate refractive errors", price: "₹14,999" },
                    { name: "Contoura Vision", best: "Topography-guided HD vision correction", price: "₹24,999" },
                    { name: "Epi Contoura", best: "Thin corneas / surface ablation candidates", price: "₹29,000" },
                    { name: "ICL (Implantable Collamer Lens)", best: "High prescriptions / non-LASIK candidates", price: "₹79,999" },
                  ].map((row, i) => (
                    <tr key={row.name} className={i !== 0 ? "border-t border-border" : ""}>
                      <td className="px-5 py-4 font-semibold text-foreground">{row.name}</td>
                      <td className="px-5 py-4 text-sm text-muted-foreground hidden sm:table-cell">{row.best}</td>
                      <td className="px-5 py-4 text-right font-display font-bold text-primary">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Prices are per eye and exclusive of GST. 0% EMI options available up to 24 months. Final eligibility and quote confirmed after free pre-LASIK diagnostic.
            </p>
            <div className="flex justify-center mt-6">
              <Button asChild size="lg" className="font-semibold px-8">
                <a href="#book">Book Free Pre-LASIK Diagnostic</a>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Why choose this centre */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <SectionHeading title={`Why Choose ${c.hospital} via Centre for Lasik`} />
          <ul className="space-y-4">
            {[
              `Institutional pricing across Centre for Lasik's volume-aggregator network.`,
              `Same surgeon, same FDA-approved technology, same operating suite.`,
              `Pre-LASIK Pentacam, topography, pachymetry, retinal scan included free.`,
              `0% EMI options up to 24 months across all procedures.`,
              `Post-op care plan with follow-ups at Day 1, Week 1, Month 1, Month 3.`,
            ].map(line => (
              <li key={line} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-surface">
        <div className="container max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs(c).map((f, i) => (
              <AccordionItem key={i} value={`q${i}`} className="bg-card border border-border rounded-xl px-5">
                <AccordionTrigger className="text-left font-display font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner
        title={`Book Your Free LASIK Consultation at ${c.hospital}`}
        subtitle={`Our specialist will call you within 30 minutes to confirm your slot at ${c.address}.`}
      />
    </Layout>
  );
};

export default CentrePage;
