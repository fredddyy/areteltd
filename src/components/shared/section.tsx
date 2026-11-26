import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "navy";
}

export function Section({ children, className, id, variant = "default" }: SectionProps) {
  return (
    <section
      id={id}
      data-theme={variant === "navy" ? "dark" : undefined}
      className={cn(
        "py-20 md:py-28 lg:py-32",
        variant === "muted" && "bg-secondary",
        variant === "navy" && "bg-navy text-primary-foreground",
        className
      )}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  inverted = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-18 lg:mb-20 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {label && (
        <span
          className={cn(
            "mb-4 inline-block text-sm font-semibold uppercase tracking-widest",
            inverted ? "text-teal" : "text-accent"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-bold sm:text-4xl lg:text-[2.75rem] leading-[1.15]",
          inverted ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            inverted ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
