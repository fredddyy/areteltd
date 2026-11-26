import type { Metadata } from "next";
import {
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Award,
  ClipboardCheck,
  Users,
  RefreshCw,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { coreValues, team } from "@/lib/data";
import { AboutFadeUp, AboutStaggerGrid, AboutStaggerItem } from "./animations";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our mission, values and approach to building technology solutions that help organisations modernise and grow.",
};

const valueIcons: Record<string, typeof Lightbulb> = {
  Innovation: Lightbulb,
  Integrity: ShieldCheck,
  Excellence: Award,
  Accountability: ClipboardCheck,
  Collaboration: Users,
  "Continuous Improvement": RefreshCw,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grain" aria-hidden="true">
          <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-accent/[0.03] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <AboutFadeUp>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
              About Us
            </span>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem] max-w-2xl">
              Building technology that{" "}
              <span className="text-muted-foreground">moves businesses forward</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We are a technology solutions company that partners with
              organisations to solve real operational problems through software,
              AI and digital systems.
            </p>
          </AboutFadeUp>
        </div>
      </section>

      {/* Company Overview */}
      <Section variant="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <AboutFadeUp>
            <SectionHeader
              label="Our Story"
              title="Who we are and what we do"
              align="left"
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed -mt-8">
              <p>
                We are a professional technology and software solutions provider
                that helps businesses, government institutions and organisations
                across Nigeria and beyond to solve operational challenges through
                practical digital solutions.
              </p>
              <p>
                Our team brings together expertise in software engineering, user
                experience design, artificial intelligence and cloud
                infrastructure. We work across industries including education,
                healthcare, financial services, government and enterprise —
                delivering systems that are reliable, maintainable and built to
                last.
              </p>
              <p>
                We believe that technology should serve a clear business purpose.
                Every project begins with understanding your operations, your
                constraints and your objectives — before a single line of code is
                written.
              </p>
            </div>
          </AboutFadeUp>

          {/* Mission & Vision */}
          <div className="space-y-6">
            <AboutFadeUp delay={0.1}>
              <div className="rounded-2xl border border-border/50 bg-card p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.08] text-accent">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  To deliver practical and reliable technology solutions that help
                  organisations improve their operations and achieve their
                  objectives.
                </p>
              </div>
            </AboutFadeUp>

            <AboutFadeUp delay={0.2}>
              <div className="rounded-2xl border border-border/50 bg-card p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-navy/[0.06] text-navy">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Our Vision
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  To become a trusted technology partner for organisations
                  seeking meaningful digital transformation — known for
                  engineering excellence and practical results.
                </p>
              </div>
            </AboutFadeUp>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <SectionHeader
          label="Our Values"
          title="The principles that guide our work"
          description="These values shape how we approach every project, every client relationship and every technical decision."
        />
        <AboutStaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => {
            const Icon = valueIcons[value.title] ?? Lightbulb;
            return (
              <AboutStaggerItem key={value.title}>
                <div className="rounded-2xl border border-border/50 bg-card p-7 h-full">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.08] text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[0.95rem] font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </AboutStaggerItem>
            );
          })}
        </AboutStaggerGrid>
      </Section>

      {/* Our Approach */}
      <Section variant="navy">
        <SectionHeader
          label="Our Approach"
          title="How we deliver results"
          description="We follow a structured, transparent process that keeps you involved at every stage — from discovery to long-term support."
          inverted
        />
        <AboutStaggerGrid className="grid gap-6 md:grid-cols-2" staggerDelay={0.12}>
          {[
            {
              title: "Deep Discovery",
              description:
                "We invest time upfront to understand your business, your users and the real problems to solve — not just the symptoms.",
            },
            {
              title: "Collaborative Design",
              description:
                "We work alongside your stakeholders to design solutions that fit your operations, your budget and your timeline.",
            },
            {
              title: "Iterative Delivery",
              description:
                "We build in stages with regular demos and feedback cycles, so you can steer the outcome and avoid late surprises.",
            },
            {
              title: "Long-Term Support",
              description:
                "We stay engaged after launch — maintaining, monitoring and evolving your systems as your organisation grows.",
            },
          ].map((item) => (
            <AboutStaggerItem key={item.title}>
              <div className="rounded-2xl bg-white/[0.05] border border-white/[0.08] p-7 h-full">
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
              </div>
            </AboutStaggerItem>
          ))}
        </AboutStaggerGrid>
      </Section>

      {/* Leadership */}
      <Section>
        <SectionHeader
          label="Leadership"
          title="The people behind our work"
          description="Our leadership team brings deep technical expertise and a shared commitment to delivering quality."
        />
        <AboutStaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {team.map((member) => (
            <AboutStaggerItem key={member.name}>
              <div className="rounded-2xl border border-border/50 bg-card p-7 text-center h-full">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-muted-foreground text-lg font-bold">
                  {member.initials}
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </AboutStaggerItem>
          ))}
        </AboutStaggerGrid>
      </Section>
    </>
  );
}
