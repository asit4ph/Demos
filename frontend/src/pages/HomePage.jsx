import HeroSection from "../components/home/HeroSection";
import TrendingCarousel from "../components/home/TrendingCarousel";
import CategoriesSection from "../components/home/CategoriesSection";
import TopProfessionals from "../components/home/TopProfessionals";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrendingCarousel />
      <CategoriesSection />
      <TopProfessionals />
      <HowItWorks />
      <Testimonials />
    </main>
  );
}