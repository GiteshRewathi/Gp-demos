"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function Story() {
  return (
    <section id="story" className="section-padding bg-[var(--secondary)]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-[var(--muted)]">
            <Image
              src="/assets/ganesha/clay-ganesha-grey.png"
              alt="Handcrafted clay Ganesha"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif text-2xl font-bold">From Clay → To Life</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-[var(--accent)] opacity-20 -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-widest uppercase text-[var(--primary)] font-semibold">
            Our Journey
          </span>
          <h2 className="section-title mt-3 mb-6">
            The Story Behind Soil & Soul
          </h2>
          <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
            <p>
              It started on the banks of the Mula-Mutha river in Pune, where our
              founders witnessed the heartbreaking sight of plaster idols and
              chemical paints choking the waters after Ganesh Visarjan.
            </p>
            <p>
              Driven by devotion and a deep love for nature, they partnered with
              local artisans in Maharashtra&apos;s pottery villages to create
              something extraordinary — Ganesha idols made from pure, unglazed
              clay mixed with native Tulsi and Marigold seeds.
            </p>
            <p>
              Each idol is hand-molded, sun-dried, and painted with natural
              earth pigments. When immersed in water, the clay gently dissolves,
              and within weeks, a living plant emerges — a symbol of renewal,
              hope, and the eternal cycle of life.
            </p>
          </div>
          <Link href="/contact" className="btn-primary mt-8">
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
