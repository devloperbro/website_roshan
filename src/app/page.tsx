import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { Testimonials } from "@/components/home/testimonials";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
