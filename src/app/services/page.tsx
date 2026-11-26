import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";
import { ServicesFadeUp } from "./animations";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of technology services — from custom software development and AI automation to cloud solutions and enterprise digital transformation.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grain" aria-hidden="true">
          <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-accent/[0.03] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <ServicesFadeUp>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
              Our Services
            </span>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem] max-w-3xl">
              Technology capabilities{" "}
              <span className="text-muted-foreground">
                that drive real results
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We deliver end-to-end solutions across six core disciplines — each
              grounded in practical business outcomes and modern engineering
              practices.
            </p>
          </ServicesFadeUp>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, i) => (
        <Section
          key={service.slug}
          id={service.slug}
          variant={i % 2 === 0 ? "muted" : "default"}
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <ServicesFadeUp>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/[0.08] text-accent">
                  <service.icon className="h-5 w-5" />
                </div>
                <Badge
                  variant="secondary"
                  className="text-[0.65rem] font-semibold uppercase tracking-wider rounded-md"
                >
                  Service {String(i + 1).padStart(2, "0")}
                </Badge>
              </div>

              <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
                {service.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.overview}
              </p>

              <div className="mb-8">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
                  Problems We Address
                </h3>
                <ul className="space-y-2.5">
                  {service.problems.map((problem) => (
                    <li
                      key={problem}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/50 shrink-0" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                render={<Link href="/contact" />}
                className="bg-navy hover:bg-navy-light text-white gap-2 rounded-xl px-6 h-11 text-sm font-semibold shadow-none"
              >
                Discuss This Service
                <ArrowRight className="h-4 w-4" />
              </Button>
            </ServicesFadeUp>

            <div className="space-y-6">
              <ServicesFadeUp delay={0.1}>
                <div className="rounded-2xl border border-border/50 bg-card p-7">
                  <h3 className="text-sm font-semibold text-foreground mb-4">
                    What We Deliver
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ServicesFadeUp>

              <ServicesFadeUp delay={0.2}>
                <div className="rounded-2xl border border-border/50 bg-card p-7">
                  <h3 className="text-sm font-semibold text-foreground mb-4">
                    Our Capabilities
                  </h3>
                  <ul className="space-y-3">
                    {service.capabilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ServicesFadeUp>
            </div>
          </div>
        </Section>
      ))}

      {/* Bottom CTA */}
      <Section>
        <ServicesFadeUp>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-light px-8 py-16 text-center sm:px-12 md:py-20">
            <div
              className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-teal/10 blur-3xl"
              aria-hidden="true"
            />
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-5">
              Not sure which service fits?
            </h2>
            <p className="mx-auto max-w-lg text-base text-white/60 leading-relaxed mb-9">
              Tell us about your challenge and we&apos;ll recommend the right
              approach. No commitment required.
            </p>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="bg-teal hover:bg-teal/90 text-white gap-2.5 rounded-xl px-8 h-12 text-[0.9rem] font-semibold shadow-none"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </ServicesFadeUp>
      </Section>
    </>
  );
}
