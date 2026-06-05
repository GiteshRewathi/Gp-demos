"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Choose Your Idol",
    description:
      "Select from our range of handcrafted clay Ganesha idols, each embedded with native seeds and painted with natural pigments.",
  },
  {
    step: "02",
    title: "Celebrate with Devotion",
    description:
      "Install the idol in your home with full traditional rituals. The idol can be kept for 1, 3, 5, 7, or 11 days as per your family tradition.",
  },
  {
    step: "03",
    title: "Immerse in Water",
    description:
      "On Visarjan day, place the idol in a bucket of water at home, or immerse it in a natural water body. The clay begins to dissolve gently.",
  },
  {
    step: "04",
    title: "Watch Life Emerge",
    description:
      "Pour the dissolved clay mixture into a planter or garden soil. Within 2-3 weeks, seeds sprout into beautiful flowering plants.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--primary)] font-semibold">
            Simple Steps
          </span>
          <h2 className="section-title mt-3 mb-4">
            How the Plantable Ganesha Works
          </h2>
          <p className="section-subtitle mx-auto">
            From devotion to growth — a simple, beautiful journey that honors both
            tradition and the environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-[var(--border)]" />
              )}
              <div className="card p-6 h-full relative z-10">
                <span className="inline-block w-12 h-12 rounded-full bg-[var(--primary)] text-white font-bold flex items-center justify-center text-sm mb-4">
                  {item.step}
                </span>
                <h3 className="font-serif text-lg font-bold text-[var(--foreground)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
