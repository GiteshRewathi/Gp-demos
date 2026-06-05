"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    image: "/assets/ganesha/clay-ganesha-brown.png",
    tag: "Handcrafted Clay",
    title: "Mitti Se Bana, Prakriti Ko Wapas",
    subtitle:
      "Pure terracotta Ganesha idols — no chemicals, no pollution, only devotion and seeds of life.",
    cta: "Shop Collection",
    href: "/#products",
  },
  {
    image: "/assets/ganesha/clay-ganesha-grey.png",
    tag: "Shadu Mati",
    title: "Traditional Craft, Modern Responsibility",
    subtitle:
      "Each idol is hand-molded by artisans using ancient pottery techniques passed through generations.",
    cta: "Our Story",
    href: "/#story",
  },
  {
    image: "/assets/ganesha/banner-mountains.png",
    tag: "Eco Visarjan",
    title: "Celebrate Festivals Without Harming Rivers",
    subtitle:
      "Dissolve your idol in water at home — watch it transform into a blooming plant within weeks.",
    cta: "How It Works",
    href: "/#how-it-works",
  },
  {
    image: "/assets/ganesha/banner-spiritual.png",
    tag: "Soil & Soul",
    title: "Devotion That Gives Back to Earth",
    subtitle:
      "Join thousands of families celebrating Ganesh Chaturthi the eco-friendly way.",
    cta: "Get in Touch",
    href: "/contact",
  },
];

export function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="banner" className="relative w-full overflow-hidden bg-[var(--section-alt)]">
      <div className="relative h-[70vh] min-h-[480px] max-h-[700px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -80 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center"
                priority={current === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--section-alt)]/95 via-[var(--section-alt)]/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--section-alt)]/60 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-xl">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm text-[var(--accent)] text-xs font-semibold tracking-widest uppercase rounded-full mb-5 border border-white/20"
                >
                  {slide.tag}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/75 text-base sm:text-lg leading-relaxed mb-8"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href={slide.href}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[var(--primary)] font-semibold rounded-md hover:bg-[var(--accent)] hover:text-white transition-all duration-300 shadow-lg"
                  >
                    {slide.cta}
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
