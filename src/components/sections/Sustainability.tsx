"use client";

import { motion } from "framer-motion";
import { Recycle, Users, TreePine, Award } from "lucide-react";

const commitments = [
  {
    icon: Recycle,
    title: "Zero Waste Production",
    description:
      "Our workshop produces zero industrial waste. Clay scraps are recycled, and water used in production is filtered and reused.",
  },
  {
    icon: Users,
    title: "Artisan Empowerment",
    description:
      "We work directly with 50+ artisan families, paying fair wages and preserving traditional pottery crafts of rural Maharashtra.",
  },
  {
    icon: TreePine,
    title: "Native Seed Conservation",
    description:
      "We partner with local botanical gardens to embed endangered native plant seeds, contributing to biodiversity conservation.",
  },
  {
    icon: Award,
    title: "Certified Eco-Friendly",
    description:
      "Our idols are tested and certified free from heavy metals, synthetic dyes, and POP by independent environmental labs.",
  },
];

export function Sustainability() {
  return (
    <section id="sustainability" className="section-padding bg-[var(--section-alt)] text-[var(--section-alt-fg)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--accent)] font-semibold">
            Our Pledge
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Sustainability Commitment
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Sustainability isn&apos;t a marketing word for us — it&apos;s woven into
            every step of our process, from sourcing raw materials to delivering
            the final idol to your doorstep.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-[var(--section-alt)]" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
