"use client";

import { motion } from "framer-motion";
import { ExplodedClayGanesha } from "@/components/ExplodedClayGanesha";
import Link from "next/link";

export function ClayExplodeSection() {
  return (
    <section
      id="clay-magic"
      className="section-padding bg-[var(--bg-white)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <ExplodedClayGanesha imageSrc="/assets/ganesha/clay-natural.png" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--primary)] font-semibold">
            Interactive Experience
          </span>
          <h2 className="section-title mt-3 mb-6">
            Mitti Ki Jaan Dekho —<br />
            Hover Karo, Bikhar Jaye
          </h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
            Hamare Ganesha idol sirf ek murti nahi — yeh zinda mitti hai. Jaise
            paani se yeh murti bikhar kar paudha ban jaati hai, waise hi aap
            hover karke dekho kaise yeh clay apne hisson mein dheere-dheere
            bikhar jaati hai.
          </p>
          <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
            Cursor hatate hi — jaise Visarjan ke baad phir se zindagi aati hai —
            saari mitti wapas jud jaati hai. Yeh wahi magic hai jo Visarjan
            ke din hoti hai: mitti bikhar kar nayi zindagi deti hai.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "100% natural Shadu mati clay",
              "Hand-carved by skilled artisans",
              "Dissolves completely in water",
              "Embedded with native plant seeds",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[var(--foreground)]">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <Link href="/#gallery" className="btn-primary">
            View Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
