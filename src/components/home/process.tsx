"use client";

import { Section, SectionHeader } from "@/components/shared/section";
import { BlurFade, StaggerContainer, StaggerItem } from "@/components/shared/motion";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <Section className="py-28 md:py-40 lg:py-48 gradient-mesh-subtle">
      <BlurFade>
        <SectionHeader
          label="How We Work"
          title="From idea to production, together."
          description="Every engagement follows a clear path designed to minimise risk and maximise the value of your investment."
        />
      </BlurFade>

      <StaggerContainer className="grid gap-px bg-border/40 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
        {processSteps.map((step) => (
          <StaggerItem key={step.phase}>
            <div className="bg-card p-8 md:p-10 h-full">
              <span className="text-xs font-semibold text-indigo tracking-widest mb-6 block">
                {step.phase}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
