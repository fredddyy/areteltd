import { Hero } from "@/components/home/hero";
import { CompanyIntro } from "@/components/home/company-intro";
import { CoreServices } from "@/components/home/core-services";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Process } from "@/components/home/process";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <CoreServices />
      <WhyChooseUs />
      <FeaturedProjects />
      <Process />
      <CTA />
    </>
  );
}
