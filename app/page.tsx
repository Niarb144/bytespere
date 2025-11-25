import Image from "next/image";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ITServicesOverview from "./components/ITServicesOverview";
import ManagedItServices from "./components/ManagedItServices";
import ReviewSection from "./components/ReviewSection";
import BlogSection from "./components/BlogSection";
import IndustrySlider from "./components/IndustrySlider";
import VendorsSection from "./components/VedorSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <ITServicesOverview />
      <ManagedItServices />
      <ReviewSection />
      <BlogSection />
      <IndustrySlider />
      <VendorsSection />
    </main>
  );
}
