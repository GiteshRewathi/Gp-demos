"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { GANESHA_SCENES } from "@/data/ganeshaScenes";

export function GaneshaGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-[var(--secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--primary)] font-semibold">
            Visual Story
          </span>
          <h2 className="section-title mt-3 mb-4">Mitti Ke Ganesha</h2>
          <p className="section-subtitle mx-auto">
            Clean, high-quality visuals — sirf advertisement aur awareness ke liye.
            Koi order nahi, koi cart nahi — bas eco-friendly devotion ka message.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {GANESHA_SCENES.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card overflow-hidden group cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--muted)]">
                <Image
                  src={item.file}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/15 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-base font-bold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-3xl w-full aspect-[4/5] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GANESHA_SCENES[lightbox].file}
              alt={GANESHA_SCENES[lightbox].title}
              fill
              className="object-contain bg-black"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}
