import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Section } from "@/components/shared/section";
import { company, services } from "@/lib/data";
import { ContactForm } from "./contact-form";
import { ContactFadeUp } from "./animations";

export const metadata: Metadata = {
  title: "Contact Us — Discuss Your Project",
  description:
    "Get in touch with Arête LTD to discuss your software project, request a quotation or book a free consultation. Based in Lagos, serving organisations across Nigeria.",
  openGraph: {
    title: "Contact Arête LTD — Book a Free Call",
    description:
      "Tell us about your project and we'll get back to you within one business day. Software development, AI solutions, enterprise platforms.",
  },
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    description: "Send us a detailed enquiry",
  },
  {
    icon: Phone,
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phone.replace(/\s/g, "")}`,
    description: "Call during business hours",
  },
  {
    icon: MapPin,
    label: "Office",
    value: company.address,
    href: undefined,
    description: "Our primary location",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Send a message",
    href: company.whatsapp,
    description: "Quick enquiries via WhatsApp",
  },
];

const serviceOptions = services.map((s) => s.title);

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grain" aria-hidden="true">
          <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-accent/[0.03] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <ContactFadeUp>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
              Contact Us
            </span>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem] max-w-2xl">
              Let&apos;s talk about{" "}
              <span className="text-muted-foreground">your project</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Whether you have a clear brief or just an idea, we&apos;re ready to
              listen. Tell us what you need and we&apos;ll get back to you
              promptly.
            </p>
          </ContactFadeUp>
        </div>
      </section>

      {/* Contact Section */}
      <Section variant="muted">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <ContactFadeUp>
              <h2 className="text-xl font-bold text-foreground mb-6">
                Get in touch
              </h2>
              <div className="space-y-5">
                {contactMethods.map((method) => {
                  const content = (
                    <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5 transition-colors hover:border-accent/20">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/[0.08] text-accent shrink-0">
                        <method.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/50 mb-1">
                          {method.label}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {method.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  );

                  if (method.href) {
                    return (
                      <a
                        key={method.label}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={method.label}>{content}</div>;
                })}
              </div>

              {/* Social */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/50 mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href={company.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span className="text-muted-foreground/30">&middot;</span>
                  <a
                    href={company.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </ContactFadeUp>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactFadeUp delay={0.1}>
              <div className="rounded-2xl border border-border/50 bg-card p-7 sm:p-9">
                <h2 className="text-xl font-bold text-foreground mb-1.5">
                  Send an Enquiry
                </h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Fill out the form below and we&apos;ll respond within one
                  business day.
                </p>
                <ContactForm serviceOptions={serviceOptions} />
              </div>
            </ContactFadeUp>
          </div>
        </div>
      </Section>
    </>
  );
}
