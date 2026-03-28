import HeroSection from '@/components/sections/HeroSection';
import HomeAboutSection from '@/components/sections/HomeAboutSection';
import HomeWhyChooseSection from '@/components/sections/HomeWhyChooseSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ClientMarquee from '@/components/ui/ClientMarquee';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeAboutSection />
      <HomeWhyChooseSection />
      <ClientMarquee />
      <StatsSection />
      <TestimonialsSection />
    </>
  );
}
