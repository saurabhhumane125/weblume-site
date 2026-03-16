"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "Clean Code",
    desc: "We write maintainable, well-structured code.",
  },
  {
    title: "Thoughtful Design",
    desc: "Every pixel has a purpose.",
  },
  {
    title: "Honest Process",
    desc: "No jargon. No surprises. Clear communication.",
  },
  {
    title: "Reliable Delivery",
    desc: "We ship on time and stand behind our work.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[var(--background-dark-alt)] text-white"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <AnimateOnScroll direction="left">
            <div className="relative aspect-square max-w-[480px] mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 flex items-center justify-center">
                <span className="text-[48px] md:text-[64px] font-bold text-white/10 tracking-[-0.04em]">
                  Weblume
                </span>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-white/5" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border border-white/5" />
            </div>
          </AnimateOnScroll>

          {/* Right — Content */}
          <div>
            <AnimateOnScroll>
              <SectionHeader
                label="About Us"
                heading="Small team. Sharp work."
                light={true}
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <p className="text-[17px] text-[#9CA3AF] leading-relaxed mb-4 mt-6">
                Weblume is a software development agency focused on building
                clean, functional digital products. We work with startups, small
                businesses, and individuals who need reliable technology —
                without the overhead of large agencies.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="text-[17px] text-[#9CA3AF] leading-relaxed mb-10">
                We believe great software doesn&apos;t need to be complicated.
                Every project we take on is built with care — clean code,
                thoughtful design, and honest communication from start to
                finish.
              </p>
            </AnimateOnScroll>

            {/* Pillars */}
            <div className="space-y-4">
              {pillars.map((pillar, i) => (
                <AnimateOnScroll key={pillar.title} delay={0.3 + i * 0.1}>
                  <div className="flex items-start gap-3 group">
                    <ArrowRight
                      size={16}
                      className="text-[var(--accent)] mt-1.5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200"
                    />
                    <div className="flex flex-col">
                      <span className="text-[15px] md:text-[16px] font-semibold text-white tracking-tight mb-1">
                        {pillar.title}
                      </span>
                      <span className="text-[14px] md:text-[15px] text-[#9CA3AF] leading-relaxed">
                        {pillar.desc}
                      </span>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
