"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

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

const circlePositions = [
  "top-[2%] left-1/2 -translate-x-1/2",
  "top-1/2 right-[1%] -translate-y-1/2",
  "bottom-[2%] left-1/2 -translate-x-1/2",
  "top-1/2 left-[1%] -translate-y-1/2",
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
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

        {/* Circle layout — desktop & tablet */}
        <div className="relative mx-auto hidden md:block w-full max-w-[820px] aspect-square min-h-[620px] lg:min-h-[720px]">
          {/* Big outer ring */}
          <div className="absolute inset-[8%] rounded-full border-2 border-dashed border-[var(--primary)]/25" />
          <div className="absolute inset-[14%] rounded-full border border-[var(--primary)]/10 bg-[var(--secondary)]/40" />

          {/* Direction arrows on ring */}
          <svg
            className="absolute inset-[8%] w-[84%] h-[84%] pointer-events-none text-[var(--primary)]/30"
            viewBox="0 0 100 100"
            aria-hidden
          >
            <path
              d="M 50 8 A 42 42 0 0 1 92 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              strokeDasharray="2 2"
            />
            <path
              d="M 92 50 A 42 42 0 0 1 50 92"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              strokeDasharray="2 2"
            />
            <path
              d="M 50 92 A 42 42 0 0 1 8 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              strokeDasharray="2 2"
            />
            <path
              d="M 8 50 A 42 42 0 0 1 50 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              strokeDasharray="2 2"
            />
          </svg>

          {/* Center hub */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex flex-col items-center justify-center gap-1 shadow-inner">
              <Leaf className="w-8 h-8 lg:w-10 lg:h-10 text-[var(--primary)]" />
              <span className="text-[10px] lg:text-xs font-semibold tracking-widest uppercase text-[var(--primary)]">
                Cycle
              </span>
            </div>
          </div>

          {/* Cards around circle */}
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`absolute w-[min(240px,30vw)] z-10 ${circlePositions[i]}`}
            >
              <div className="card p-5 lg:p-6 shadow-md hover:shadow-lg transition-shadow">
                <span className="inline-block w-11 h-11 rounded-full bg-[var(--primary)] text-white font-bold flex items-center justify-center text-sm mb-3">
                  {item.step}
                </span>
                <h3 className="font-serif text-base lg:text-lg font-bold text-[var(--foreground)] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs lg:text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile — stacked circle feel */}
        <div className="md:hidden space-y-6 max-w-md mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-full w-0.5 h-6 bg-[var(--border)]" />
              )}
              <div className="card p-5 flex gap-4">
                <span className="shrink-0 w-11 h-11 rounded-full bg-[var(--primary)] text-white font-bold flex items-center justify-center text-sm">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-serif text-base font-bold text-[var(--foreground)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
