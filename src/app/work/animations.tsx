"use client";

import type { ReactNode } from "react";
import { FadeUp } from "@/components/shared/motion";

export function WorkFadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <FadeUp delay={delay} className={className}>
      {children}
    </FadeUp>
  );
}
