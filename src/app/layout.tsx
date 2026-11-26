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

export const metadata: Metadata = {
  title: {
    default: "Arête LTD — Technology Solutions Built Around Real Business Challenges",
    template: "%s | Arête LTD",
  },
  description:
    "We design, develop and deliver digital solutions that help organisations modernise operations, improve efficiency and unlock new opportunities through technology.",
  keywords: [
    "software development",
    "digital transformation",
    "technology solutions",
    "enterprise software",
    "web development",
    "mobile applications",
    "AI solutions",
    "Nigeria",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Arête LTD",
    title: "Arête LTD — Building Technology That Moves Businesses Forward",
    description:
      "We design, develop and deliver digital solutions that help organisations modernise operations, improve efficiency and unlock new opportunities through technology.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arête LTD — Building Technology That Moves Businesses Forward",
    description:
      "Professional technology and software solutions provider helping organisations solve operational problems through technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
