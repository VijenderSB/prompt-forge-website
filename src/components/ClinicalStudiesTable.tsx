import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import type { ClinicalStudy } from "@/data/siteData";

interface ClinicalStudiesTableProps {
  studies: ClinicalStudy[];
  procedureName: string;
}

const ClinicalStudiesTable = ({ studies, procedureName }: ClinicalStudiesTableProps) => (
  <section className="section-padding bg-surface">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <FileText className="w-6 h-6 text-primary" />
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
            Clinical Studies &amp; Global Outcomes of {procedureName}
          </h2>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Peer-reviewed research and real-world data supporting the safety and efficacy of {procedureName}.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/5 border-b border-border">
                <th className="text-left px-5 py-3.5 font-display font-semibold text-foreground whitespace-nowrap">Study / Source</th>
                <th className="text-left px-5 py-3.5 font-display font-semibold text-foreground whitespace-nowrap">Type</th>
                <th className="text-left px-5 py-3.5 font-display font-semibold text-foreground whitespace-nowrap">Sample Size</th>
                <th className="text-left px-5 py-3.5 font-display font-semibold text-foreground whitespace-nowrap">Key Outcomes</th>
                <th className="text-left px-5 py-3.5 font-display font-semibold text-foreground whitespace-nowrap">Link</th>
              </tr>
            </thead>
            <tbody>
              {studies.map((s, i) => (
                <tr
                  key={i}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-5 py-4 text-foreground font-medium max-w-[260px]">{s.study}</td>
                  <td className="px-5 py-4 text-muted-foreground whitespace-nowrap">{s.type}</td>
                  <td className="px-5 py-4 text-muted-foreground whitespace-nowrap">{s.sampleSize}</td>
                  <td className="px-5 py-4 text-foreground max-w-[320px]">{s.keyOutcomes}</td>
                  <td className="px-5 py-4">
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium whitespace-nowrap transition-colors"
                    >
                      {s.linkLabel} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ClinicalStudiesTable;
