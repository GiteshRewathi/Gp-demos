"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/#banner", label: "Gallery" },
  { href: "/#clay-magic", label: "Clay Magic" },
  { href: "/#story", label: "Our Story" },
  { href: "/#message", label: "Our Message" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-[var(--primary)] flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-[var(--primary)] leading-none block">
                Soil & Soul
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[var(--muted-foreground)]">
                Plantable Ganesha
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/contact" className="hidden sm:inline-flex btn-primary text-sm !py-2.5 !px-5">
              Get in Touch
            </Link>
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[var(--primary)]"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--background)]">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 text-sm font-medium hover:bg-[var(--secondary)] rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 text-center"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
