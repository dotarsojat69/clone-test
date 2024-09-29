import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import MethodologySection from "./components/MethodologySection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";

export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <MethodologySection />
      <AboutSection />
    </div>
  )
}