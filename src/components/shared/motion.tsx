"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* Microdose-inspired blur-fade reveal: opacity 0 + y offset + blur → clean */
const blurFadeEase = [0.43, 0.98, 0.87, 1] as const;

export function BlurFade({
  children,
  delay = 0,
  className,
  y = 30,
  blur = 6,
  duration = 0.8,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  blur?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: blurFadeEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Legacy aliases — still used by existing pages */
export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <BlurFade delay={delay} className={className} y={24} blur={6}>
      {children}
    </BlurFade>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <BlurFade delay={delay} className={className} y={0} blur={4}>
      {children}
    </BlurFade>
  );
}

export function ScaleIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: blurFadeEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.7, ease: blurFadeEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
