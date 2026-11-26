"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ease = [0.43, 0.98, 0.87, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Microdose-inspired gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 grain" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-32 md:py-40 w-full">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="mt-10 text-lg font-medium text-muted-foreground/70 md:text-xl"
        >
          Your Technology &amp; Development Partner.
        </motion.p>

        {/* Massive headline — Microdose scale */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="mt-4 text-[2.75rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[5.25rem] max-w-5xl"
        >
          We build digital solutions{" "}
          <br className="hidden md:block" />
          for startups and{" "}
          <br className="hidden md:block" />
          enterprises.
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-8 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground md:text-base"
        >
          We shape your ideas, drive your launch, and partner with you for the
          long haul. Bringing clarity and structure to ambitious organisations.
        </motion.p>

        {/* CTAs — clean like Microdose */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.75, ease }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="bg-indigo hover:bg-indigo/90 text-white gap-2.5 rounded-full px-8 h-12 text-[0.9rem] font-semibold shadow-none"
          >
            Book a Free Call
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Link
            href="/work"
            className="text-[0.9rem] font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground/30"
          >
            See our work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
