import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import MethodologySection from "./components/MethodologySection";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortofolioSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";

export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <MethodologySection />
      <AboutSection />
      <TeamSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  )
}