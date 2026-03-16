"use client";

import {
  Globe,
  Monitor,
  Smartphone,
  Rocket,
  Settings,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Clean, responsive websites designed to represent your brand and convert visitors into customers. Built with modern frameworks and optimized for performance.",
  },
  {
    icon: Monitor,
    title: "Web Applications",
    desc: "Interactive, data-driven web applications built with React and modern tooling. From dashboards to platforms — functional and well-architected.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Native Android applications built with reliable architecture. From concept to deployment on the Play Store — we handle the full cycle.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    desc: "Got a startup idea? We help you build a minimum viable product fast — focused, functional, and ready to test with real users.",
  },
  {
    icon: Settings,
    title: "Custom Software",
    desc: "Unique problems need unique solutions. We build tailored systems, integrations, and tools designed around your specific workflow.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            label="What We Do"
            heading="Software solutions, built with precision."
            align="center"
          />
        </AnimateOnScroll>

        <div className="flex flex-col mt-16 border-t border-[var(--border-color)]">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 0.1}>
              <div className="group flex flex-col md:flex-row md:items-center py-8 md:py-10 border-b border-[var(--border-color)] hover:bg-[var(--background-secondary)] -mx-4 px-4 md:mx-0 md:px-6 transition-colors duration-300 cursor-pointer">
                <div className="flex items-center gap-6 md:w-[40%] mb-4 md:mb-0">
                  <service.icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300"
                  />
                  <h3 className="text-[20px] md:text-[22px] font-semibold text-[var(--text-primary)]">
                    {service.title}
                  </h3>
                </div>
                <div className="md:w-[60%] flex items-center justify-between gap-6">
                  <p className="text-[15px] md:text-[16px] text-[var(--text-secondary)] leading-relaxed max-w-[500px]">
                    {service.desc}
                  </p>
                  <ArrowRight
                    size={20}
                    className="text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-300 hidden md:block flex-shrink-0"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
