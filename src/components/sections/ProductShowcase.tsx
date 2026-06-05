"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Droplets, Sun, Package } from "lucide-react";

const products = [
  {
    name: "Classic Ganesha",
    size: "8 inches",
    seeds: "Tulsi & Marigold",
    price: "₹499",
    image: "/assets/ganesha/clay-ganesha-brown.png",
  },
  {
    name: "Shadu Mati Grey",
    size: "7 inches",
    seeds: "Basil & Sunflower",
    price: "₹599",
    image: "/assets/ganesha/clay-ganesha-grey.png",
  },
  {
    name: "Family Set",
    size: "3 idols (6\")",
    seeds: "Mixed native seeds",
    price: "₹1,199",
    image: "/assets/ganesha/clay-ganesha-brown.png",
  },
];

const features = [
  {
    icon: Leaf,
    title: "100% Natural Clay",
    desc: "Unglazed, chemical-free terracotta clay sourced from local riverbeds.",
  },
  {
    icon: Droplets,
    title: "Water-Soluble",
    desc: "Dissolves completely within 24-48 hours in still or flowing water.",
  },
  {
    icon: Sun,
    title: "Embedded Seeds",
    desc: "Native flowering and herb seeds sprout within 2-3 weeks after immersion.",
  },
  {
    icon: Package,
    title: "Eco Packaging",
    desc: "Delivered in recycled paper boxes with jute carry bags — zero plastic.",
  },
];

export function ProductShowcase() {
  return (
    <section id="products" className="section-padding bg-[var(--secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--primary)] font-semibold">
            Our Collection
          </span>
          <h2 className="section-title mt-3 mb-4">
            Product Showcase
          </h2>
          <p className="section-subtitle mx-auto">
            Each idol is a work of art — lovingly handcrafted by skilled artisans
            using traditional pottery techniques passed down through generations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card overflow-hidden group"
            >
              <div className="relative h-56 bg-[var(--muted)] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 text-[var(--primary)] text-xs font-bold rounded-full">
                  {product.price}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[var(--foreground)] mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between text-sm text-[var(--muted-foreground)]">
                  <span>Size: {product.size}</span>
                  <span>{product.seeds}</span>
                </div>
                <button className="btn-primary w-full mt-4 text-sm">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-2xl font-bold text-center text-[var(--primary)] mb-10">
            Key Features
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--secondary)] flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h4 className="font-semibold text-[var(--foreground)] mb-2">{feature.title}</h4>
                <p className="text-sm text-[var(--muted-foreground)]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
