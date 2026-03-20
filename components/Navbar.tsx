"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 border-b ${
          scrolled
            ? "bg-[#030407]/70 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-transparent"
        }`}
        style={{ height: "var(--nav-height)" }}
      >
        <Container className="h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 text-[22px] font-bold tracking-[-0.02em] text-white group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[var(--accent)] to-[#06b6d4] flex items-center justify-center text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] transition-all">
              W
            </div>
            Weblume
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-[var(--text-secondary)] hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2.5 rounded-full text-white font-medium text-[14px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              Contact ↗
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white hover:text-[var(--accent)] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#06080F]/90 flex flex-col items-center justify-center gap-8"
            style={{ paddingTop: "var(--nav-height)" }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.1, duration: 0.4 }}
                className="text-[32px] font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--accent)] hover:to-[#06b6d4] transition-all"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: navLinks.length * 0.1 + 0.1,
                duration: 0.4,
              }}
              className="mt-8"
            >
              <a href="#contact" onClick={() => setMobileOpen(false)} className="px-8 py-4 rounded-full text-white font-semibold text-[18px] bg-gradient-to-r from-[var(--accent)] to-[#06b6d4] shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                Start a Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
