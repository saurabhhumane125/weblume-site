"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 bg-[var(--background-secondary)]">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            label="Our Work"
            heading="Projects we've shipped."
            align="center"
          />
        </AnimateOnScroll>

        <div className="flex flex-col gap-8 mt-14">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.slug} delay={i * 0.15}>
              <Link href={`/project/${project.slug}`} className="block group mb-12">
                <div className={`flex flex-col gap-8 md:gap-16 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  
                  {/* Screenshot Area (Takes up 60% width on desktop) */}
                  <div className="w-full md:w-3/5">
                    <div className="relative overflow-hidden rounded-2xl bg-[var(--card-bg)] aspect-[16/9] border border-[var(--border-color)] group-hover:border-[var(--text-muted)] group-hover:shadow-2xl transition-all duration-700">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--border-color)] flex items-center justify-center">
                            <span className="text-[28px] font-bold text-[var(--text-muted)]">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                          <p className="text-[13px] text-[var(--text-muted)]">
                            Project Screenshot
                          </p>
                        </div>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[var(--text-primary)]/0 group-hover:bg-[var(--text-primary)]/5 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Content (Takes up 40% width on desktop) */}
                  <div className="w-full md:w-2/5 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[12px] md:text-[13px] px-3 py-1 rounded-full bg-white text-[var(--text-secondary)] border border-[var(--border-color)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-[28px] md:text-[36px] font-bold text-[var(--text-primary)] mb-4 leading-[1.1] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[16px] md:text-[17px] text-[var(--text-secondary)] mb-8 leading-relaxed">
                      {project.brief}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                      View Case Study
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-2 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
