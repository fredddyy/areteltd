"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { BlurFade } from "@/components/shared/motion";

export function CTA() {
  return (
    <Section className="py-28 md:py-40 lg:py-52">
      <div className="relative text-center">
        {/* Subtle gradient backdrop */}
        <div className="absolute inset-0 gradient-mesh-subtle -z-10" aria-hidden="true" />

        <BlurFade>
          {/* Massive Microdose-scale heading */}
          <h2 className="text-4xl font-bold tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05]">
            Got a project in mind?
          </h2>
        </BlurFade>

        <BlurFade delay={0.1}>
          <p className="mt-6 mx-auto max-w-md text-muted-foreground leading-relaxed">
            Let&apos;s talk about your project, and how we can bring your vision to life.
          </p>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="mt-10">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="bg-indigo hover:bg-indigo/90 text-white gap-2.5 rounded-full px-10 h-14 text-[0.95rem] font-semibold shadow-none"
            >
              Book a free call
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="mt-5 text-xs text-muted-foreground/50">
            25 min intro call to get to know each other. No pressure, just a conversation.
          </p>
        </BlurFade>
      </div>
    </Section>
  );
}
