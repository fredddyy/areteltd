"use client";

import { Section } from "@/components/shared/section";
import { BlurFade } from "@/components/shared/motion";
import { valueProps } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <Section className="py-28 md:py-40 lg:py-48">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Left — section context */}
        <div className="lg:col-span-5">
          <BlurFade>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 mb-5 block">
              Why work with us
            </span>
            <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem]">
              Built on trust,{" "}
              <span className="text-muted-foreground">delivered with precision.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We don&apos;t just write code — we engineer solutions grounded in a
              deep understanding of your business reality.
            </p>
          </BlurFade>
        </div>

        {/* Right — value props as clean list */}
        <div className="lg:col-span-7">
          <div className="divide-y divide-border/60">
            {valueProps.map((prop, i) => (
              <BlurFade key={prop.title} delay={i * 0.08}>
                <div className="py-7 md:py-8 grid gap-3 sm:grid-cols-12 items-start">
                  <span className="text-xs text-muted-foreground/40 font-medium sm:col-span-1 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[0.95rem] font-semibold text-foreground sm:col-span-4">
                    {prop.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-7">
                    {prop.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
