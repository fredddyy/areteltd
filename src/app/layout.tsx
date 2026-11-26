import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://arete.com.ng";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arête LTD — Custom Software, AI & Digital Solutions in Nigeria",
    template: "%s | Arête LTD",
  },
  description:
    "Arête LTD builds custom software, AI-powered systems, web & mobile applications and enterprise digital solutions for businesses and institutions across Nigeria.",
  keywords: [
    "software development Nigeria",
    "custom software development Lagos",
    "AI solutions Nigeria",
    "digital transformation Nigeria",
    "enterprise software development",
    "web development Lagos",
    "mobile app development Nigeria",
    "cloud solutions Nigeria",
    "technology consulting Nigeria",
    "Arête LTD",
    "software company Nigeria",
    "IT solutions Lagos",
  ],
  authors: [{ name: "Arête LTD", url: siteUrl }],
  creator: "Arête LTD",
  publisher: "Arête LTD",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Arête LTD",
    title: "Arête LTD — Custom Software, AI & Digital Solutions in Nigeria",
    description:
      "We design, develop and deliver custom software, AI systems and enterprise digital solutions that help organisations modernise operations and grow.",
    images: [
      {
        url: "/logo-full.png",
        width: 630,
        height: 630,
        alt: "Arête LTD Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arête LTD — Custom Software, AI & Digital Solutions in Nigeria",
    description:
      "Custom software development, AI-powered solutions and enterprise digital transformation for businesses across Nigeria.",
    images: ["/logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

// JSON-LD structured data for Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arête LTD",
  url: siteUrl,
  logo: `${siteUrl}/logo-full.png`,
  description:
    "Arête LTD builds custom software, AI-powered systems, web & mobile applications and enterprise digital solutions for businesses and institutions across Nigeria.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-904-570-1943",
    email: "hello@arete.com.ng",
    contactType: "sales",
    availableLanguage: "English",
  },
  sameAs: [
    "https://linkedin.com/company/areteltd",
    "https://twitter.com/areteltd",
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 6.5244,
      longitude: 3.3792,
    },
    geoRadius: "5000",
  },
  knowsAbout: [
    "Custom Software Development",
    "Web Development",
    "Mobile Application Development",
    "Artificial Intelligence",
    "Cloud Solutions",
    "Digital Transformation",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
