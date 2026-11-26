"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { BlurFade } from "@/components/shared/motion";
import { services } from "@/lib/data";

const ease = [0.43, 0.98, 0.87, 1] as const;

export function CoreServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function onScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableHeight = containerRef.current.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
      const index = Math.min(
        services.length - 1,
        Math.floor(progress * services.length)
      );
      setActiveIndex(index);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = services[activeIndex];

  return (
    <div
      ref={containerRef}
      style={{ height: `${services.length * 60 + 40}vh` }}
      className="relative"
    >
      {/* Sticky full-screen viewport */}
      <div data-theme="dark" className="sticky top-0 h-screen bg-navy text-white overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 h-full">
          {/* Two-column layout filling the viewport */}
          <div className="grid lg:grid-cols-2 lg:gap-12 h-full pt-20 md:pt-24 pb-12 md:pb-16">
            {/* Left column — heading at top, service at bottom */}
            <div className="flex flex-col h-full">
              {/* Heading area */}
              <div className="pt-8 md:pt-12">
                <BlurFade>
                  <span className="inline-flex items-center rounded-full bg-white/[0.08] border border-white/[0.08] px-4 py-1.5 text-[0.75rem] font-semibold text-white/70 tracking-wide mb-6 md:mb-8">
                    Services
                  </span>
                </BlurFade>
                <BlurFade delay={0.1}>
                  <h2 className="text-4xl font-bold text-white leading-[1.08] sm:text-5xl lg:text-[3.5rem] tracking-[-0.02em]">
                    Capabilities that
                    <br className="hidden sm:block" />
                    {" "}scale with
                    <br className="hidden sm:block" />
                    {" "}your vision.
                  </h2>
                </BlurFade>
              </div>

              {/* Service content — below heading with moderate gap */}
              <div className="mt-16 md:mt-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.slug}
                    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <div className="w-8 h-px bg-white/20 mb-6" />

                    <span className="text-sm text-white/30 font-medium italic block mb-3">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-xl font-semibold text-white md:text-2xl mb-3">
                      {active.title}
                    </h3>

                    <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-md">
                      {active.shortDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                      {active.deliverables.slice(0, 6).map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 text-[0.82rem] text-white/80 font-medium"
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 text-white/40" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right column — video filling full height */}
            <div className="hidden lg:block h-full pt-8 md:pt-12">
              <BlurFade delay={0.2} className="h-full">
                <div className="h-full rounded-2xl bg-white/[0.04] border border-white/[0.06] overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src="/capabilities.mp4" type="video/mp4" />
                  </video>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
