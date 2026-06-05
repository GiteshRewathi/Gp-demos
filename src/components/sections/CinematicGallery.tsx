"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GANESHA_SCENES } from "@/data/ganeshaScenes";

export function CinematicGallery() {
  return (
    <section id="cinematic" className="section-padding bg-[var(--section-alt)] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--accent)] font-semibold">
            Cinematic Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Mitti Ki Kahani — 10 Unique Scenes
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Har image alag scene hai — sunrise, rain, crafting hands, aur final handmade idol.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {GANESHA_SCENES.map((scene, i) => (
            <motion.div
              key={scene.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10"
            >
              <Image
                src={scene.file}
                alt={scene.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-serif text-sm font-bold leading-tight">{scene.title}</h3>
                <p className="text-[10px] text-white/60 mt-1">{scene.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
