import Link from "next/link";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--section-alt)] text-[var(--section-alt-fg)]">
      <div className="max-w-7xl mx-auto section-padding !pt-12 !pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold">Soil & Soul</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Handcrafted, plantable clay Ganesha idols that dissolve in water and
              grow into beautiful plants — celebrating festivals responsibly.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/#mission" className="hover:text-white transition-colors">Mission & Vision</Link></li>
              <li><Link href="/#story" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/#products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>123 Eco Lane, Pune, Maharashtra 411001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>hello@soilandsoul.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-white/70 mb-3">
              Stay updated on new collections and festival offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-md bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50"
              />
              <button type="submit" className="px-4 py-2 bg-white text-[var(--primary)] rounded-md text-sm font-semibold hover:bg-white/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Soil & Soul. All rights reserved.</p>
          <p>Crafted with devotion for a greener tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
