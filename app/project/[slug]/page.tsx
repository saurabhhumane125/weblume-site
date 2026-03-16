import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import CaseStudyContent from "./CaseStudyContent";

// Generate static paths for both projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate dynamic metadata for each case study
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return { title: "Project Not Found — Weblume" };
  }

  return {
    title: `${project.title} — Weblume Case Study`,
    description: project.brief,
    openGraph: {
      title: `${project.title} — Weblume Case Study`,
      description: project.brief,
      images: [project.image],
    },
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find next project
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return <CaseStudyContent project={project} nextProject={nextProject} />;
}
