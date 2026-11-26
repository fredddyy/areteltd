"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/shared/section";
import { BlurFade } from "@/components/shared/motion";

const ease = [0.43, 0.98, 0.87, 1] as const;

/* Microdose-inspired text color fill — text starts muted, fills dark on scroll */
function TextFillParagraph({ children, delay = 0 }: { children: string; delay?: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.p
      ref={ref}
      initial={{ color: "oklch(0.78 0.01 260)" }}
      animate={inView ? { color: "oklch(0.16 0.035 260)" } : {}}
      transition={{ duration: 1.2, delay, ease }}
      className="text-xl leading-relaxed md:text-2xl lg:text-[1.75rem] lg:leading-[1.5] font-heading font-medium"
    >
      {children}
    </motion.p>
  );
}

export function CompanyIntro() {
  return (
    <Section className="py-28 md:py-40 lg:py-52">
      <div className="relative">
        {/* Subtle gradient in background */}
        <div className="absolute inset-0 gradient-mesh-subtle -z-10" aria-hidden="true" />

        <div className="max-w-4xl mx-auto lg:ml-[16%]">
          <BlurFade>
            <TextFillParagraph>
              We blend technology, design and function. Project after project, our
              expertise shapes tomorrow&apos;s digital landscape, for organisations who
              care as deeply as we do.
            </TextFillParagraph>
          </BlurFade>

          <BlurFade delay={0.15}>
            <TextFillParagraph delay={0.3}>
              Every solution we build is shaped by curiosity, discipline and pride.
              Working with businesses across Nigeria and beyond, we deliver systems
              that earn trust through reliability.
            </TextFillParagraph>
          </BlurFade>

          <BlurFade delay={0.3}>
            <TextFillParagraph delay={0.5}>
              We only take on projects where we can deliver a true measure of
              excellence. Never compromising, never settling for half-measures.
            </TextFillParagraph>
          </BlurFade>

          <BlurFade delay={0.45}>
            <p className="mt-6 text-xl font-heading font-semibold text-foreground md:text-2xl lg:text-[1.75rem]">
              Every detail matters.
            </p>
          </BlurFade>
        </div>
      </div>
    </Section>
  );
}
