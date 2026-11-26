import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";
import { WorkFadeUp } from "./animations";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our portfolio of software products, enterprise platforms and AI-powered systems — each built to solve real business challenges.",
};

export default function WorkPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grain" aria-hidden="true">
          <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-accent/[0.03] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <WorkFadeUp>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
              Our Work
            </span>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem] max-w-3xl">
              Projects that demonstrate{" "}
              <span className="text-muted-foreground">real capability</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A selection of products and platforms we have designed, built and
              delivered — each solving a genuine operational challenge.
            </p>
          </WorkFadeUp>
        </div>
      </section>

      {/* Project Case Studies */}
      {projects.map((project, i) => (
        <Section
          key={project.slug}
          id={project.slug}
          variant={i % 2 === 0 ? "muted" : "default"}
        >
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
            {/* Left — project visual */}
            <WorkFadeUp className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="aspect-[4/3] rounded-2xl bg-secondary border border-border/50 overflow-hidden relative">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                      <span className="text-muted-foreground/20 text-sm font-medium">Preview coming soon</span>
                    </div>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary border border-border/40 px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </WorkFadeUp>

            {/* Right — project details */}
            <div className="lg:col-span-3">
              <WorkFadeUp delay={0.1}>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <Badge
                    variant="secondary"
                    className="text-[0.65rem] font-semibold uppercase tracking-wider rounded-md"
                  >
                    {project.category}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-[0.65rem] font-medium rounded-md border-border/50"
                  >
                    {project.industry}
                  </Badge>
                  <span className="text-xs text-muted-foreground/50">
                    &middot; {project.client}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
                  {project.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.overview}
                </p>
              </WorkFadeUp>

              <WorkFadeUp delay={0.15}>
                <div className="mb-8">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">
                    The Challenge
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </WorkFadeUp>

              <WorkFadeUp delay={0.2}>
                <div className="mb-8">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">
                    Our Solution
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </WorkFadeUp>

              <Separator className="my-8" />

              <div className="grid gap-8 sm:grid-cols-2">
                <WorkFadeUp delay={0.25}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
                    Key Capabilities
                  </h3>
                  <ul className="space-y-2.5">
                    {project.capabilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </WorkFadeUp>

                <WorkFadeUp delay={0.3}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
                    Outcomes
                  </h3>
                  <ul className="space-y-2.5">
                    {project.outcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </WorkFadeUp>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Bottom CTA */}
      <Section>
        <WorkFadeUp>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-light px-8 py-16 text-center sm:px-12 md:py-20">
            <div
              className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-teal/10 blur-3xl"
              aria-hidden="true"
            />
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-5">
              Ready to build something similar?
            </h2>
            <p className="mx-auto max-w-lg text-base text-white/60 leading-relaxed mb-9">
              Whether it&apos;s an enterprise platform, an AI-powered tool or a
              custom application — let&apos;s talk about what you need.
            </p>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="bg-teal hover:bg-teal/90 text-white gap-2.5 rounded-xl px-8 h-12 text-[0.9rem] font-semibold shadow-none"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </WorkFadeUp>
      </Section>
    </>
  );
}
