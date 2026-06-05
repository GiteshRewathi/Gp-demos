"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ContactCTA() {
  return (
    <section id="contact" className="section-padding bg-[var(--secondary)]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs tracking-widest uppercase text-[var(--primary)] font-semibold">
            Get In Touch
          </span>
          <h2 className="section-title mt-3 mb-4">
            Ready to Celebrate Responsibly?
          </h2>
          <p className="section-subtitle mx-auto mb-8">
            Whether you&apos;re ordering for your family, organizing a community
            celebration, or looking to partner with us — we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <a href="tel:+919876543210" className="btn-outline">
              Call +91 98765 43210
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
