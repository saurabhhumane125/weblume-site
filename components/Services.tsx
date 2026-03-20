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
    <section id="services" className="py-24 md:py-32 bg-[var(--background-secondary)] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-secondary)] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Header left-aligned taking 4 columns */}
          <div className="lg:col-span-4 flex flex-col pt-4 pr-0 lg:pr-8">
            <AnimateOnScroll>
              <div className="inline-block text-[12px] font-bold tracking-widest uppercase text-[var(--accent-secondary)] mb-4">Capabilities</div>
              <h2 className="text-[clamp(36px,6vw,56px)] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-[1.05] tracking-tight mb-6 drop-shadow-sm">
                Solutions built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent)]">precision.</span>
              </h2>
              <p className="mt-4 md:mt-2 text-[15px] md:text-[17px] text-[var(--text-secondary)] font-medium max-w-sm leading-relaxed">
                We engineer digital solutions that are as beautiful under the hood as they are on the screen, using bleeding-edge stacks.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Cards taking 8 columns */}
          <div className="lg:col-span-8 flex flex-col gap-4 md:gap-6 mt-8 lg:mt-0">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 0.1}>
                <div className="group flex flex-col md:flex-row md:items-center p-8 md:p-10 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(6,182,212,0.15)]">
                  
                  <div className="flex items-center gap-6 md:w-[45%] mb-6 md:mb-0">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#030407] border border-white/5 group-hover:border-[var(--accent-secondary)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-500">
                      <service.icon
                        size={24}
                        strokeWidth={1.5}
                        className="text-white group-hover:text-[var(--accent-secondary)] transition-colors duration-500"
                      />
                    </div>
                    <h3 className="text-[20px] md:text-[22px] font-bold tracking-tight text-white group-hover:text-[var(--accent-secondary)] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="md:w-[55%] flex items-center justify-between gap-6 md:pl-8">
                    <p className="text-[15px] md:text-[16px] text-[var(--text-secondary)] font-medium leading-[1.6]">
                      {service.desc}
                    </p>
                    <ArrowRight
                      size={24}
                      className="text-[#333] group-hover:text-[var(--accent-secondary)] group-hover:translate-x-1 transition-all duration-300 hidden md:block flex-shrink-0"
                    />
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
