"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[var(--background)]"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

      {/* Vibrant Animated Glowing Orbs */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[400px] h-[400px] bg-[var(--accent)] rounded-full blur-[150px] opacity-30 animate-pulse pointer-events-none" />
      <div className="absolute top-[20%] right-[15%] w-[350px] h-[350px] bg-[#06b6d4] rounded-full blur-[120px] opacity-30 animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-[10%] right-[30%] w-[350px] h-[350px] bg-[#ec4899] rounded-full blur-[150px] opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

      <Container className="relative z-10 w-full flex flex-col items-center text-center mt-[-40px]">
        {/* Glowing Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[#06b6d4] rounded-full blur-md opacity-40 group-hover:opacity-70 group-hover:blur-lg transition-all duration-500" />
          <span className="relative inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.15em] uppercase text-white bg-black/50 border border-white/10 backdrop-blur-xl rounded-full px-6 py-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            Next-Gen Software Agency
          </span>
        </motion.div>

        {/* Headline with Vibrant Gradient Text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-[clamp(48px,8vw,100px)] font-extrabold leading-[1.05] tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-sm"
        >
          We design & build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] via-[var(--accent)] to-[#ec4899] animate-gradient-x drop-shadow-lg">
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
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#contact" className="relative group overflow-hidden w-full sm:w-auto px-10 py-4 rounded-full text-white font-bold tracking-wide text-[16px] transition-all duration-300 bg-gradient-to-r from-[var(--accent)] via-[#7c3aed] to-[#06b6d4] bg-[length:200%_auto] hover:bg-[center_right_1rem] shadow-[0_0_40px_-5px_rgba(139,92,246,0.5)] hover:shadow-[0_0_60px_0px_rgba(139,92,246,0.7)] hover:-translate-y-1">
            Start a Project <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
          </a>
          <a href="#work" className="w-full sm:w-auto px-10 py-4 rounded-full text-white font-bold tracking-wide text-[16px] bg-[#0A0D14]/80 border border-white/10 backdrop-blur-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
            Explore Portfolio
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
