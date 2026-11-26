"use client";

import type { ReactNode } from "react";
import { FadeUp } from "@/components/shared/motion";

export function ServicesFadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return <FadeUp delay={delay}>{children}</FadeUp>;
}
