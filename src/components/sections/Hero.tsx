"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)] via-[var(--background)] to-[var(--cream-100,#fff8f0)] dark:from-[var(--secondary)] dark:via-[var(--background)] dark:to-[var(--background)]" />

      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[var(--primary)] opacity-[0.04] blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--secondary)] text-[var(--primary)] text-xs font-semibold tracking-widest uppercase rounded-full mb-6">
            Eco-Friendly Festival Celebration
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6">
            Celebrate with{" "}
            <span className="text-[var(--primary)]">Devotion</span>,{" "}
            <br className="hidden sm:block" />
            Grow with{" "}
            <span className="text-[var(--primary)]">Nature</span>
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-lg">
            Handcrafted, plantable clay Ganesha idols that naturally dissolve in
            water and grow into beautiful plants — an environmentally responsible
            way to celebrate Ganesh Chaturthi.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#products" className="btn-primary">
              Explore Collection
            </Link>
            <Link href="/#how-it-works" className="btn-outline">
              See How It Works
            </Link>
          </div>

          <div className="flex gap-8 mt-12">
            {[
              { num: "100%", label: "Biodegradable" },
              { num: "50+", label: "Artisan Crafted" },
              { num: "0", label: "Toxic Chemicals" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl font-bold text-[var(--primary)]">{stat.num}</p>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-[var(--primary)] opacity-10 animate-float" />
            <div className="absolute inset-8 rounded-full border-2 border-dashed border-[var(--primary)] opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-b from-[#C4784A] to-[#A06030] flex items-center justify-center shadow-2xl">
                  <span className="text-6xl">🙏</span>
                </div>
                <p className="font-serif text-xl text-[var(--primary)] font-semibold">
                  Soil & Soul
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Plantable Ganesha Idol
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#scroll-story"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors scroll-indicator"
      >
        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
