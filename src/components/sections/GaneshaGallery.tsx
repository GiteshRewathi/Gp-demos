"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const gallery = [
  {
    src: "/assets/ganesha/clay-ganesha-brown.png",
    title: "Classic Brown Clay",
    desc: "Traditional seated Ganesha with natural earth pigments",
    tag: "Bestseller",
  },
  {
    src: "/assets/ganesha/clay-ganesha-grey.png",
    title: "Shadu Mati Grey",
    desc: "Intricately carved grey clay with ornate turban details",
    tag: "Artisan",
  },
  {
    src: "/assets/ganesha/banner-mountains.png",
    title: "Eco Visarjan Vision",
    desc: "Celebrate festivals while protecting our sacred rivers",
    tag: "Mission",
  },
  {
    src: "/assets/ganesha/banner-spiritual.png",
    title: "Divine Craftsmanship",
    desc: "Where devotion meets environmental responsibility",
    tag: "Heritage",
  },
];

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
            Our Craft
          </span>
          <h2 className="section-title mt-3 mb-4">Mitti Ke Ganesha — Gallery</h2>
          <p className="section-subtitle mx-auto">
            Har idol alag hai, har idol ek kahani hai. Dekho hamare haath se bani
            in eco-friendly murtiyon ki khubsurti.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card overflow-hidden group cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <div className="relative aspect-square overflow-hidden bg-[var(--muted)]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/20 transition-colors duration-300" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-[var(--primary)] text-white text-[10px] font-bold tracking-wider uppercase rounded-full">
                  {item.tag}
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-[var(--foreground)] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-2xl w-full aspect-square rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[lightbox].src}
              alt={gallery[lightbox].title}
              fill
              className="object-contain bg-black"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}
