"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Eco Lane, Koregaon Park", "Pune, Maharashtra 411001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 87654 32109"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@soilandsoul.in", "orders@soilandsoul.in"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-[var(--secondary)] via-[var(--background)] to-[var(--cream-100,#fff8f0)]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-widest uppercase text-[var(--primary)] font-semibold">
              Contact Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] mt-3 mb-4">
              We&apos;d Love to Hear From You
            </h1>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
              Have questions about our plantable idols, bulk orders for housing
              societies, or partnership opportunities? Reach out and our team will
              respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info) => (
              <div key={info.title} className="card p-6 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--secondary)] flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">
                    {info.title}
                  </h3>
                  {info.details.map((d) => (
                    <p key={d} className="text-sm text-[var(--muted-foreground)]">
                      {d}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="card p-6 bg-[var(--section-alt)] text-[var(--section-alt-fg)]">
              <h3 className="font-serif text-lg font-bold mb-2">Bulk Orders</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Planning a community Ganesh Chaturthi celebration? We offer special
                pricing for housing societies, schools, and corporate events.
                Minimum order: 25 idols.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[var(--foreground)] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--muted-foreground)]">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-serif text-2xl font-bold text-[var(--primary)] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-[var(--muted-foreground)] mb-6">
                    Fill out the form below and we&apos;ll respond promptly.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-shadow"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-shadow"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-shadow"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                        Inquiry Type
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-shadow">
                        <option>Individual Order</option>
                        <option>Bulk / Society Order</option>
                        <option>Partnership</option>
                        <option>Media / Press</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-shadow resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="card overflow-hidden h-80 bg-[var(--muted)] flex items-center justify-center">
            <div className="text-center text-[var(--muted-foreground)]">
              <MapPin className="w-10 h-10 mx-auto mb-3 text-[var(--primary)]" />
              <p className="font-semibold">Map Location</p>
              <p className="text-sm mt-1">123 Eco Lane, Koregaon Park, Pune</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
