"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #111827 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <Container className="text-center relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-full px-4 py-1.5 mb-8">
            Software Development Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-[clamp(40px,7vw,72px)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)] mb-6"
        >
          We design and build
          <br />
          digital products that work.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-[18px] md:text-[20px] text-[var(--text-secondary)] max-w-[520px] mx-auto mb-10 leading-relaxed"
        >
          Weblume is a software agency that helps businesses and startups launch
          websites, apps, and digital systems — built clean, built right.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" href="#contact">
            Start a Project →
          </Button>
          <Button variant="ghost" size="lg" href="#work">
            See Our Work ↓
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
