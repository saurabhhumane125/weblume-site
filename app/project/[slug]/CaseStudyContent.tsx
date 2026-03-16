"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface Project {
  title: string;
  slug: string;
  stack: string[];
  description: string;
  brief: string;
  image: string;
  client: string;
  timeline: string;
  year: string;
  platform: string;
  tech: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  keyDecisions: string[];
  result: string;
}

interface CaseStudyContentProps {
  project: Project;
  nextProject: Project;
}

export default function CaseStudyContent({
  project,
  nextProject,
}: CaseStudyContentProps) {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
        <Container>
          <AnimateOnScroll>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-[14px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to all projects
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--accent)] mb-4">
              Case Study
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <h1 className="text-[clamp(36px,6vw,64px)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)] mb-4">
              {project.title}
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <p className="text-[18px] md:text-[20px] text-[var(--text-secondary)] max-w-[680px] mb-10">
              {project.brief}
            </p>
          </AnimateOnScroll>

          {/* Meta info */}
          <AnimateOnScroll delay={0.4}>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[14px]">
              <div>
                <span className="text-[var(--text-muted)]">Client: </span>
                <span className="text-[var(--text-primary)] font-medium">
                  {project.client}
                </span>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">Timeline: </span>
                <span className="text-[var(--text-primary)] font-medium">
                  {project.timeline}
                </span>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">Year: </span>
                <span className="text-[var(--text-primary)] font-medium">
                  {project.year}
                </span>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">Platform: </span>
                <span className="text-[var(--text-primary)] font-medium">
                  {project.platform}
                </span>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">Tech: </span>
                <span className="text-[var(--text-primary)] font-medium">
                  {project.tech}
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Hero Screenshot */}
      <section className="pb-16 md:pb-24 bg-white">
        <Container>
          <AnimateOnScroll>
            <div className="relative overflow-hidden rounded-2xl bg-[var(--card-bg)] aspect-[16/9] border border-[var(--border-color)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-[var(--border-color)] flex items-center justify-center">
                    <span className="text-[36px] font-bold text-[var(--text-muted)]">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <p className="text-[14px] text-[var(--text-muted)]">
                    Full-width hero screenshot in device mockup
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* The Challenge */}
      <section className="py-16 md:py-24 bg-white border-t border-[var(--border-color)]">
        <Container>
          <div className="max-w-[680px]">
            <AnimateOnScroll>
              <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-4">
                The Challenge
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div className="space-y-4">
                {project.challenge.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[17px] text-[var(--text-secondary)] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* The Solution */}
      <section className="py-16 md:py-24 bg-[var(--background-secondary)] border-t border-[var(--border-color)]">
        <Container>
          <div className="max-w-[680px]">
            <AnimateOnScroll>
              <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-4">
                The Solution
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div className="space-y-4 mb-10">
                {project.solution.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[17px] text-[var(--text-secondary)] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Key Features */}
            <AnimateOnScroll delay={0.2}>
              <h3 className="text-[18px] font-semibold text-[var(--text-primary)] mb-4">
                Key Features:
              </h3>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] text-[var(--text-secondary)]"
                  >
                    <span className="text-[var(--accent)] mt-0.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            {/* Key Architecture Decisions */}
            <AnimateOnScroll delay={0.3}>
              <h3 className="text-[18px] font-semibold text-[var(--text-primary)] mb-4 mt-10">
                Key architecture decisions:
              </h3>
              <ul className="space-y-3">
                {project.keyDecisions.map((decision, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] text-[var(--text-secondary)]"
                  >
                    <span className="text-[var(--accent)] mt-0.5">•</span>
                    {decision}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-16 md:py-24 bg-white border-t border-[var(--border-color)]">
        <Container>
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="rounded-2xl bg-[var(--card-bg)] aspect-[9/16] md:aspect-[3/4] border border-[var(--border-color)] flex items-center justify-center"
                >
                  <div className="text-center px-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[var(--border-color)] flex items-center justify-center">
                      <span className="text-[16px] font-bold text-[var(--text-muted)]">
                        {n}
                      </span>
                    </div>
                    <p className="text-[13px] text-[var(--text-muted)]">
                      App Screenshot {n}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* The Result */}
      <section className="py-16 md:py-24 bg-[var(--background-secondary)] border-t border-[var(--border-color)]">
        <Container>
          <div className="max-w-[680px]">
            <AnimateOnScroll>
              <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-4">
                The Result
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed">
                {project.result}
              </p>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Next Project */}
      <section className="py-16 md:py-24 bg-white border-t border-[var(--border-color)]">
        <Container>
          <AnimateOnScroll>
            <Link
              href={`/project/${nextProject.slug}`}
              className="group flex items-center justify-between"
            >
              <div>
                <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-2">
                  Next Project
                </p>
                <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {nextProject.title}
                </h2>
              </div>
              <ArrowRight
                size={32}
                className="text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-2 transition-all duration-300"
              />
            </Link>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Contact CTA */}
      <Contact />

      <Footer />
    </>
  );
}
