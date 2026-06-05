"use client";

import { motion } from "framer-motion";
import { Eye, Target, Heart } from "lucide-react";

const cards = [
  {
    icon: Target,
    number: "01",
    title: "Our Mission",
    description:
      "To transform festival celebrations by offering handcrafted clay Ganesha idols that honor tradition while protecting our rivers, soil, and ecosystems from harmful pollution.",
    bg: "bg-maroon-50 dark:bg-maroon-950/50",
  },
  {
    icon: Eye,
    number: "02",
    title: "Our Vision",
    description:
      "A world where every festival leaves behind life, not waste — where devotion and environmental stewardship walk hand in hand, inspiring generations to celebrate responsibly.",
    bg: "bg-cream-200 dark:bg-maroon-900/30",
  },
  {
    icon: Heart,
    number: "03",
    title: "Our Promise",
    description:
      "Every Soil & Soul idol is made with natural clay, embedded with native seeds, and crafted by skilled artisans — ensuring your celebration blooms into something beautiful.",
    bg: "bg-maroon-100 dark:bg-maroon-900/20",
  },
];

export function MissionVision() {
  return (
    <section id="mission" className="section-padding bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--primary)] font-semibold">
            Who We Are
          </span>
          <h2 className="section-title mt-3 mb-4">
            Mission & Vision
          </h2>
          <p className="section-subtitle mx-auto">
            Soil & Soul was born from a simple belief — that the way we celebrate
            should reflect the values we hold dear: reverence, responsibility, and renewal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`card p-8 relative overflow-hidden ${card.bg}`}
            >
              <span className="absolute top-4 right-6 font-serif text-6xl font-bold text-[var(--primary)] opacity-[0.07]">
                {card.number}
              </span>
              <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[var(--foreground)] mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
