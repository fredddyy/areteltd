"use client";

import type { ReactNode } from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/motion";

export function AboutFadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return <FadeUp delay={delay}>{children}</FadeUp>;
}

export function AboutStaggerGrid({
  children,
  className,
  staggerDelay,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <StaggerContainer className={className} staggerDelay={staggerDelay}>
      {children}
    </StaggerContainer>
  );
}

export function AboutStaggerItem({ children }: { children: ReactNode }) {
  return <StaggerItem>{children}</StaggerItem>;
}
