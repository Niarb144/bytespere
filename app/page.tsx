import Image from "next/image";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ITServicesOverview from "./components/ITServicesOverview";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <ITServicesOverview />
    </main>
  );
}
