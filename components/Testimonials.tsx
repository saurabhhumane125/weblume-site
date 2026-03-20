"use client";

import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const testimonials = [
  {
    quote:
      "Weblume delivered exactly what we needed — a clean, functional app that works. Communication was clear throughout the project and the final product exceeded our expectations.",
    name: "Client",
    context: "Online Voting App Project",
  },
  {
    quote:
      "Professional, reliable, and easy to work with. The website they built looks modern and performs great. Would definitely work with them again.",
    name: "Client",
    context: "Home Decor Website Project",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[var(--background-secondary)] overflow-hidden relative">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#ec4899] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Header Section taking up 4 columns */}
          <div className="lg:col-span-4 flex flex-col justify-start pt-4 lg:pt-8 pr-0 lg:pr-8">
            <AnimateOnScroll>
              <div className="inline-block text-[12px] font-bold tracking-widest uppercase text-[#ec4899] mb-4">Client Stories</div>
              <h2 className="text-[clamp(32px,5vw,48px)] font-bold text-white leading-[1.1] mb-6">
                The impact of our work.
              </h2>
              <p className="mt-4 md:mt-2 text-[15px] md:text-[16px] text-[var(--text-secondary)] font-medium max-w-sm leading-relaxed">
                We design software that doesn't just look stunning, but delivers measurable results. Here is what our partners say about the experience.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Testimonial Cards taking up 8 columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, i) => (
              <AnimateOnScroll key={i} delay={i * 0.15}>
                <div className="relative flex flex-col justify-between p-10 md:p-12 rounded-2xl bg-[#030407] border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] group transition-all duration-500 hover:border-[#ec4899]/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] hover:-translate-y-1">
                  <div>
                    <Quote
                      size={32}
                      className="text-[#ec4899]/50 mb-8"
                      strokeWidth={1.5}
                    />

                    <blockquote className="text-[17px] md:text-[19px] text-white leading-[1.7] mb-12 font-medium tracking-tight">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-[14px] font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-white tracking-tight">
                        {testimonial.name}
                      </p>
                      <p className="text-[13px] text-[var(--text-secondary)] font-medium mt-0.5">
                        {testimonial.context}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
