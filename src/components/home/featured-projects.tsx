"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/shared/section";
import { BlurFade, StaggerContainer, StaggerItem } from "@/components/shared/motion";
import { projects } from "@/lib/data";

const featured = projects.filter((p) => p.featured).slice(0, 4);

export function FeaturedProjects() {
  return (
    <Section className="py-28 md:py-40 lg:py-48">
      {/* Header row — Microdose style with see-all link */}
      <div className="flex items-end justify-between mb-16 md:mb-20">
        <BlurFade>
          <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Our selected projects.
          </h2>
        </BlurFade>
        <BlurFade delay={0.1}>
          <Link
            href="/work"
            className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground/30"
          >
            see all
          </Link>
        </BlurFade>
      </div>

      {/* Asymmetric grid — Microdose layout: large left + small right, then swap */}
      <StaggerContainer className="space-y-6 md:space-y-8" staggerDelay={0.15}>
        {/* Row 1: featured large + featured small */}
        {featured.length >= 2 && (
          <div className="grid gap-6 md:gap-8 md:grid-cols-5">
            <StaggerItem className="md:col-span-3">
              <ProjectCard project={featured[0]} size="large" />
            </StaggerItem>
            <StaggerItem className="md:col-span-2">
              <ProjectCard project={featured[1]} size="small" />
            </StaggerItem>
          </div>
        )}

        {/* Row 2: swap proportions */}
        {featured.length >= 4 && (
          <div className="grid gap-6 md:gap-8 md:grid-cols-5">
            <StaggerItem className="md:col-span-2">
              <ProjectCard project={featured[2]} size="small" />
            </StaggerItem>
            <StaggerItem className="md:col-span-3">
              <ProjectCard project={featured[3]} size="large" />
            </StaggerItem>
          </div>
        )}
      </StaggerContainer>

      {/* Mobile see-all link */}
      <div className="mt-10 sm:hidden">
        <Link
          href="/work"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border"
        >
          see all projects
        </Link>
      </div>
    </Section>
  );
}

function ProjectCard({
  project,
  size,
}: {
  project: (typeof projects)[0];
  size: "large" | "small";
}) {
  return (
    <Link href={`/work#${project.slug}`} className="group block h-full">
      {/* Image area */}
      <div
        className={`relative rounded-2xl overflow-hidden bg-secondary border border-border/40 transition-all duration-500 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] group-hover:border-border/60 ${
          size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes={size === "large" ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
            <span className="text-muted-foreground/20 text-sm font-medium">Preview coming soon</span>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="rounded-full bg-navy/80 backdrop-blur-sm text-white px-3 py-1 text-[0.65rem] font-semibold">
            {project.industry}
          </span>
        </div>
      </div>

      {/* Meta below image — Microdose style */}
      <div className="mt-4 px-1">
        <p className="text-[0.78rem] text-muted-foreground/60 mb-1">
          {project.client}
        </p>
        <h3 className="text-base font-semibold text-foreground leading-snug md:text-lg group-hover:text-indigo transition-colors">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
