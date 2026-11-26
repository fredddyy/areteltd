import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { company, navLinks } from "@/lib/data";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Main row */}
        <div className="flex flex-col gap-10 py-12 md:py-16 md:flex-row md:justify-between md:items-start">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Image src="/logo-icon.png" alt="Arête" width={22} height={22} className="h-[22px] w-auto" />
              <p className="text-sm font-bold tracking-tight text-foreground">
                {company.name}
              </p>
            </div>
            <p className="mt-2 text-[0.82rem] text-muted-foreground leading-relaxed">
              We bring clarity and structure to ambitious organisations.
            </p>

            {/* Contact details */}
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-[0.78rem] text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                {company.email}
              </a>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-[0.78rem] text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                {company.phone}
              </a>
              <span className="flex items-center gap-2 text-[0.78rem] text-muted-foreground/60">
                <MapPin className="h-3.5 w-3.5" />
                {company.address}
              </span>
            </div>
          </div>

          {/* Social links — text-based like Microdose */}
          <div className="flex items-center gap-4 text-[0.82rem] text-muted-foreground">
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-border">&middot;</span>
            <a
              href={company.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Bottom bar — minimal like Microdose */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border/40 py-6 text-[0.72rem] text-muted-foreground/40 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-muted-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/privacy" className="hover:text-muted-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p>&copy; 2026 {company.name}.</p>
        </div>
      </div>
    </footer>
  );
}
