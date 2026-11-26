import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
          Legal
        </span>
        <h1 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-sm prose-slate max-w-none space-y-6 text-muted-foreground leading-relaxed [&_h2]:text-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-foreground [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2">
          <p className="text-sm text-muted-foreground/60">
            Last updated: November 2026
          </p>

          <p>
            {company.name} (&quot;we&quot;, &quot;our&quot; or &quot;us&quot;)
            is committed to protecting the privacy of visitors to our website
            and individuals who contact us through our enquiry form. This policy
            explains how we collect, use and safeguard your personal data.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect personal data that you provide voluntarily when you
            submit an enquiry through our contact form:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Full name</li>
            <li>Organisation name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Service of interest</li>
            <li>Project description</li>
          </ul>
          <p>
            We may also collect non-personal data automatically through website
            analytics, including pages visited, browser type, device type and
            approximate geographic location.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Respond to your enquiry</li>
            <li>Assess your project requirements</li>
            <li>Provide quotations and proposals</li>
            <li>Improve our services and website experience</li>
          </ul>
          <p>
            We do not sell, rent or share your personal data with third parties
            for marketing purposes.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect your personal data against unauthorised access, alteration
            or destruction. All form submissions are transmitted securely over
            HTTPS.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain enquiry data for as long as necessary to fulfil the
            purposes for which it was collected, typically no longer than 24
            months unless an ongoing business relationship exists.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to request access to, correction of or deletion
            of your personal data at any time. To exercise these rights, please
            contact us at{" "}
            <a
              href={`mailto:${company.email}`}
              className="text-accent hover:underline"
            >
              {company.email}
            </a>
            .
          </p>

          <h2>Cookies and Analytics</h2>
          <p>
            Our website may use cookies and analytics tools to understand how
            visitors use the site. These tools collect anonymous usage data and
            do not identify individual visitors. You can control cookie
            preferences through your browser settings.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at{" "}
            <a
              href={`mailto:${company.email}`}
              className="text-accent hover:underline"
            >
              {company.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
