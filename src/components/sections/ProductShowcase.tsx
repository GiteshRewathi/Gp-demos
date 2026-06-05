"use client";

import { motion } from "framer-motion";
import { Leaf, Droplets, Sun, Heart } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Leaf,
    title: "100% Natural Clay",
    desc: "Unglazed, chemical-free terracotta — rivers ko nuksan nahi.",
  },
  {
    icon: Droplets,
    title: "Water-Soluble",
    desc: "Ghar ke paani mein dissolve — koi pollution nahi.",
  },
  {
    icon: Sun,
    title: "Plantable Seeds",
    desc: "Visarjan ke baad mitti se nayi zindagi ugati hai.",
  },
  {
    icon: Heart,
    title: "Awareness Only",
    desc: "Yeh website sirf message deti hai — order ya cart nahi.",
  },
];

export function ProductShowcase() {
  return (
    <section id="message" className="section-padding bg-[var(--secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--primary)] font-semibold">
            Our Message
          </span>
          <h2 className="section-title mt-3 mb-4">Eco-Friendly Devotion</h2>
          <p className="section-subtitle mx-auto">
            Soil & Soul ek awareness campaign hai — plantable clay Ganesha ke
            fayde batane ke liye. Yahan kuch order ya buy nahi hota.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--background)] flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-[var(--primary)]" />
              </div>
              <h4 className="font-semibold text-[var(--foreground)] mb-2">{item.title}</h4>
              <p className="text-sm text-[var(--muted-foreground)]">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/contact" className="btn-primary">
            Connect With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
