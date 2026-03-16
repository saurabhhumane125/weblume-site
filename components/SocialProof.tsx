"use client";

import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const metrics = [
  { value: "5+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "2024", label: "Founded" },
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-20 bg-[var(--background-secondary)] border-y border-[var(--border-color)]">
      <Container>
        <AnimateOnScroll>
          <p className="text-center text-[14px] text-[var(--text-muted)] tracking-[0.02em] mb-10">
            Built for startups, businesses, and individuals.
          </p>
        </AnimateOnScroll>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            {metrics.map((metric, i) => (
              <AnimateOnScroll key={metric.label} delay={i * 0.1}>
                <div className="text-center flex flex-col items-center">
                  <span className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[var(--text-primary)] leading-none">
                    {metric.value}
                  </span>
                  <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-[var(--text-muted)] mt-3">
                    {metric.label}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
  );
}
