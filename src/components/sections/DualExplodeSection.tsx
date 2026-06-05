"use client";

import { motion } from "framer-motion";
import { ExplodedClayGanesha } from "@/components/ExplodedClayGanesha";

export function DualExplodeSection() {
  return (
    <section className="section-padding bg-[var(--section-alt)] text-[var(--section-alt-fg)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--accent)] font-semibold">
            Two Crafts, One Devotion
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Shadu Mati — Dono Rang, Ek Bhavna
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Brown aur Grey — dono pure clay, dono plantable. Hover karke dekho
            kaise har idol apni mitti ko alag tareeke se bikher ta hai.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="mb-4 text-center">
              <h3 className="font-serif text-xl font-bold text-[var(--accent)]">
                Terracotta Brown
              </h3>
              <p className="text-sm text-white/60 mt-1">Classic festival idol</p>
            </div>
            <div className="bg-white/5 rounded-3xl p-6 border border-white/10 w-full flex justify-center">
              <ExplodedClayGanesha imageSrc="/assets/ganesha/clay-ganesha-brown.png" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="mb-4 text-center">
              <h3 className="font-serif text-xl font-bold text-[var(--accent)]">
                Shadu Mati Grey
              </h3>
              <p className="text-sm text-white/60 mt-1">Intricately carved artisan piece</p>
            </div>
            <div className="bg-white/5 rounded-3xl p-6 border border-white/10 w-full flex justify-center">
              <ExplodedClayGanesha imageSrc="/assets/ganesha/clay-ganesha-grey.png" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
