import { usePageMeta } from '@/lib/usePageMeta';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { Welcome } from '@/components/home/Welcome';
import { Services } from '@/components/home/Services';
import { WhyHavilah } from '@/components/home/WhyHavilah';
import { CareJourney } from '@/components/home/CareJourney';
import { FamilySection } from '@/components/home/FamilySection';
import { CareerSection } from '@/components/home/CareerSection';
import { TeamSection } from '@/components/home/TeamSection';
import { Testimonials } from '@/components/home/Testimonials';
import { ResourcesSection } from '@/components/home/ResourcesSection';
import { CTABaterial } from '@/components/ui/CTABaterial';

export function HomePage() {
  usePageMeta({
    title: 'HAVILAH Cottage Home Care Services LLC — Care With Dignity',
    description:
      'Personalized, compassionate home care in San Antonio, Texas. Care With Dignity. Comfort With Love. Contact HAVILAH Cottage Home Care Services today.',
  });

  return (
    <>
      <Hero />
      <TrustStrip />
      <Welcome />
      <Services />
      <WhyHavilah />
      <CareJourney />
      <FamilySection />
      <CareerSection />
      <TeamSection />
      <Testimonials />
      <ResourcesSection />
      <CTABaterial />
    </>
  );
}
