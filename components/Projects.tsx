"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 bg-[var(--background)] overflow-hidden relative">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[var(--accent)] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Header left-aligned taking 4 columns */}
          <div className="lg:col-span-4 flex flex-col pt-4 pr-0 lg:pr-8">
            <AnimateOnScroll>
              <div className="inline-block text-[12px] font-bold tracking-widest uppercase text-[var(--accent)] mb-4">Portfolio</div>
              <h2 className="text-[clamp(32px,5vw,48px)] font-bold text-white leading-[1.1] mb-6">
                Projects we've shipped.
              </h2>
              <p className="mt-4 md:mt-2 text-[15px] md:text-[17px] text-[var(--text-secondary)] font-medium max-w-sm leading-relaxed">
                A selection of digital products we have designed and engineered for our clients. Built clean, built right.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Cards taking 8 columns */}
          <div className="lg:col-span-8 flex flex-col gap-12 lg:gap-16 mt-8 lg:mt-0">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.slug} delay={i * 0.15}>
                <Link href={`/project/${project.slug}`} className="block group">
                  <div className={`flex flex-col gap-8 md:gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    
                    {/* Screenshot Area */}
                    <div className="w-full md:w-3/5">
                      <div className="relative overflow-hidden rounded-2xl bg-[#030407] border border-white/5 backdrop-blur-sm aspect-[16/9] shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:border-[var(--accent)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-700 hover:-translate-y-1">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--accent)]/10 transition-colors">
                              <span className="text-[28px] font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                                {project.title.charAt(0)}
                              </span>
                            </div>
                            <p className="text-[13px] font-medium text-[var(--text-muted)] group-hover:text-white transition-colors">
                              Project Preview
                            </p>
                          </div>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-transparent group-hover:bg-[var(--accent)]/5 transition-all duration-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-2/5 flex flex-col justify-center">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[12px] md:text-[13px] font-semibold px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-[26px] md:text-[32px] font-bold text-white mb-5 leading-[1.1] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[15px] md:text-[17px] text-[var(--text-secondary)] mb-8 leading-[1.6] font-medium">
                        {project.brief}
                      </p>
                      
                      <div className="inline-flex items-center gap-3 text-[14px] font-bold tracking-tight text-white group-hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                        VIEW CASE STUDY
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-2 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
