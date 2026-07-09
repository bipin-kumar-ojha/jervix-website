import AboutSection from "../../components/HomeSections/AboutSection";
import ClientStrip from "../../components/HomeSections/ClientStrip";
import HomeHero from "../../components/HomeSections/HomeHero";
import IndustriesSection from "../../components/HomeSections/IndustriesSection";
import ProcessSection from "../../components/HomeSections/ProcessSection";
import ServicesSection from "../../components/HomeSections/ServicesSection";
import StatsBand from "../../components/HomeSections/StatsBand";
import TechStackSection from "../../components/HomeSections/TechStackSection";
import ValuePillarsSection from "../../components/HomeSections/ValuePillarsSection";
import "./Home.scss";

export default function Home() {
  return (
    <main className="home-redesign">
      <HomeHero />
      <ClientStrip />
      <AboutSection />
      <StatsBand />
      <ServicesSection />
      <ProcessSection />
      <ValuePillarsSection />
      <IndustriesSection />
      <TechStackSection />
    </main>
  );
}
