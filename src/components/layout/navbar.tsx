"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { company, navLinks } from "@/lib/data";

const blurFadeEase = [0.43, 0.98, 0.87, 1] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [open, setOpen] = useState(false);

  const checkBackground = useCallback(() => {
    setScrolled(window.scrollY > 20);

    // Check if any dark section overlaps the top of the viewport
    const darkSections = document.querySelectorAll('[data-theme="dark"]');
    let isDark = false;
    darkSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // Dark section covers the navbar area (top 60px)
      if (rect.top < 60 && rect.bottom > 0) {
        isDark = true;
      }
    });
    setOnDark(isDark);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkBackground, { passive: true });
    checkBackground();
    return () => window.removeEventListener("scroll", checkBackground);
  }, [checkBackground]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.05, ease: blurFadeEase }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group relative z-10">
          <Image
            src="/logo-icon.png"
            alt="Arête"
            width={28}
            height={28}
            className={cn(
              "h-7 w-auto transition-all duration-300",
              onDark && "brightness-0 invert"
            )}
          />
          <span
            className={cn(
              "text-[0.9rem] font-bold tracking-tight transition-colors duration-300",
              onDark ? "text-white" : "text-foreground"
            )}
          >
            {company.name}
          </span>
        </Link>

        {/* Desktop nav — floating pill */}
        <div
          className={cn(
            "hidden md:flex items-center gap-0.5 rounded-full border px-1.5 py-1 transition-all duration-500",
            scrolled
              ? "bg-white/80 backdrop-blur-xl border-border/50 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              : onDark
                ? "bg-white/[0.06] backdrop-blur-md border-white/[0.08]"
                : "bg-white/40 backdrop-blur-md border-border/30"
          )}
        >
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-[0.82rem] font-medium transition-colors rounded-full",
                  isActive
                    ? onDark ? "text-white" : "text-foreground"
                    : onDark
                      ? "text-white/60 hover:text-white"
                      : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                <sup
                  className={cn(
                    "ml-0.5 text-[0.55rem] font-normal",
                    onDark ? "text-white/30" : "text-muted-foreground/40"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </sup>
              </Link>
            );
          })}

          <Button
            render={<Link href="/contact" />}
            className="bg-indigo hover:bg-indigo/90 text-white rounded-full px-5 h-8 text-[0.8rem] font-semibold shadow-none ml-1"
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-9 w-9", onDark && "text-white hover:bg-white/10")}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2.5 p-6 border-b border-border">
                <Image src="/logo-icon.png" alt="Arête" width={24} height={24} className="h-6 w-auto" />
                <span className="text-sm font-bold tracking-tight">
                  {company.name}
                </span>
              </div>

              <nav className="flex flex-col gap-1 p-4 flex-1">
                <AnimatePresence>
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 rounded-xl text-[0.925rem] font-medium transition-colors",
                            isActive
                              ? "bg-secondary text-foreground"
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                          )}
                        >
                          {link.label}
                          <span className="text-[0.65rem] text-muted-foreground/40">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </nav>

              <div className="p-6 border-t border-border">
                <Button
                  render={<Link href="/contact" onClick={() => setOpen(false)} />}
                  className="w-full bg-indigo hover:bg-indigo/90 text-white gap-2 rounded-full h-11 font-semibold shadow-none"
                >
                  Book a Call
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
