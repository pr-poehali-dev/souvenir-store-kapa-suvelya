import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import PopularProductsSection from '@/components/home/PopularProductsSection';
import MaterialsSection from '@/components/home/MaterialsSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <PopularProductsSection />
      <MaterialsSection />
    </div>
  );
}
