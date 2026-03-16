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
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            label="Testimonials"
            heading="What our clients say."
            align="center"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {testimonials.map((testimonial, i) => (
            <AnimateOnScroll key={i} delay={i * 0.15}>
              <div className="relative p-8 md:p-10 rounded-2xl border border-[var(--border-color)] bg-[var(--background-secondary)]">
                {/* Large decorative quote mark */}
                <Quote
                  size={48}
                  className="text-[var(--border-color)] mb-6"
                  strokeWidth={1}
                />

                <blockquote className="text-[18px] md:text-[20px] text-[var(--text-primary)] leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center">
                    <span className="text-[14px] font-semibold text-[var(--text-muted)]">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-[var(--text-primary)]">
                      {testimonial.name}
                    </p>
                    <p className="text-[13px] text-[var(--text-muted)]">
                      {testimonial.context}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
