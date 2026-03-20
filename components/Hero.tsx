"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--background)]"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      {/* Vibrant Animated Glowing Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--accent)] rounded-full blur-[120px] opacity-30 animate-pulse pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#06b6d4] rounded-full blur-[100px] opacity-30 animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-[#ec4899] rounded-full blur-[120px] opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

      <Container className="relative z-10 w-full flex flex-col items-center text-center">
        {/* Glowing Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[#06b6d4] rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
          <span className="relative inline-block text-[13px] font-semibold tracking-widest uppercase text-white bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8">
            Next-Gen Software Agency
          </span>
        </motion.div>

        {/* Headline with Vibrant Gradient Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-[clamp(44px,8vw,88px)] font-bold leading-[1.05] tracking-[-0.03em] mb-6 text-white"
        >
          We design & build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] via-[var(--accent)] to-[#ec4899] animate-gradient-x">
            digital experiences.
          </span>
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
          className="text-[18px] md:text-[22px] text-[var(--text-secondary)] max-w-[650px] mb-12 leading-[1.6]"
        >
          Weblume helps forward-thinking startups and enterprises launch world-class websites, mobile apps, and robust digital platforms.
        </motion.p>

        {/* Futuristic CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#contact" className="relative group overflow-hidden w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold text-[16px] transition-all bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)]">
            Start a Project →
          </a>
          <a href="#work" className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold text-[16px] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all">
            View Our Work
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
