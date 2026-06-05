"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparison = [
  {
    aspect: "Material",
    traditional: "Plaster of Paris, cement, plastic",
    eco: "Natural clay with embedded seeds",
  },
  {
    aspect: "Paint",
    traditional: "Lead & chemical-based synthetic paints",
    eco: "Natural earth pigments, chemical-free",
  },
  {
    aspect: "Water Impact",
    traditional: "Pollutes rivers, harms aquatic life",
    eco: "Dissolves harmlessly, enriches soil",
  },
  {
    aspect: "After Visarjan",
    traditional: "Non-biodegradable waste remains",
    eco: "Transforms into a living plant",
  },
  {
    aspect: "Carbon Footprint",
    traditional: "High (factory-made, transported)",
    eco: "Low (handcrafted locally)",
  },
  {
    aspect: "Cultural Value",
    traditional: "Short-lived celebration",
    eco: "Celebration that gives back to nature",
  },
];

export function EnvironmentalImpact() {
  return (
    <section id="impact" className="section-padding bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--primary)] font-semibold">
            Why It Matters
          </span>
          <h2 className="section-title mt-3 mb-4">
            Environmental Impact
          </h2>
          <p className="section-subtitle mx-auto">
            Traditional idols vs. eco-friendly idols — understanding the difference
            that one conscious choice can make for our planet.
          </p>
        </motion.div>

        <div className="hidden lg:block">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-[var(--muted-foreground)] w-1/4">
                  Aspect
                </th>
                <th className="p-4 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-950/30 rounded-lg text-red-600 dark:text-red-400 text-sm font-semibold">
                    <X size={16} />
                    Traditional Idols
                  </div>
                </th>
                <th className="p-4 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950/30 rounded-lg text-green-700 dark:text-green-400 text-sm font-semibold">
                    <Check size={16} />
                    Soil & Soul Idols
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <motion.tr
                  key={row.aspect}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border-t border-[var(--border)]"
                >
                  <td className="p-4 font-semibold text-sm text-[var(--foreground)]">
                    {row.aspect}
                  </td>
                  <td className="p-4 text-center text-sm text-[var(--muted-foreground)]">
                    {row.traditional}
                  </td>
                  <td className="p-4 text-center text-sm text-[var(--foreground)] font-medium">
                    {row.eco}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden space-y-4">
          {comparison.map((row, i) => (
            <motion.div
              key={row.aspect}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl border border-[var(--border)] p-4 space-y-3"
            >
              <p className="font-semibold text-sm text-[var(--foreground)]">{row.aspect}</p>
              <div className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                <X size={14} className="text-red-500 mt-0.5 shrink-0" />
                <span>{row.traditional}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--foreground)] font-medium">
                <Check size={14} className="text-green-600 mt-0.5 shrink-0" />
                <span>{row.eco}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-[var(--section-alt)] text-[var(--section-alt-fg)] text-center"
        >
          <p className="font-serif text-2xl font-bold mb-2">
            Over 2 million idols are immersed in Indian rivers every year
          </p>
          <p className="text-white/70 max-w-2xl mx-auto">
            Choosing a plantable clay idol is not just a personal choice — it&apos;s
            a collective step toward cleaner rivers, healthier ecosystems, and a
            greener future for our children.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
