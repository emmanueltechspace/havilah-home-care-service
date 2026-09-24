import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkArrow } from '@/components/ui/Button';
import { IMAGES } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';

const points = [
  'A philosophy rooted in seeing the whole person — not just the need',
  'Care plans shaped around individual preferences, routines, and life stories',
  'Caregivers who are chosen for character as much as for skill',
];

export function Welcome() {
  return (
    <section className="section-y bg-cream-100" aria-labelledby="welcome-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-charcoal-900/10">
              <img
                src={IMAGES.caregiverTea}
                alt={IMAGES.caregiverTeaAlt}
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
                width={600}
                height={500}
                loading="lazy"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-havilah-900 p-5 text-cream-100 shadow-xl sm:block lg:-right-6">
              <p className="font-display text-lg font-bold leading-tight">
                “You are safe here.”
              </p>
              <p className="mt-1 text-sm text-cream-300">That is our promise.</p>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal order-1 lg:order-2">
            <SectionHeading
              eyebrow="Welcome to HAVILAH"
              title={
                <>
                  Care That Sees the Person,
                  <br />
                  <span className="text-gradient-gold">Not Just the Need.</span>
                </>
              }
              subtitle="At HAVILAH Cottage Home Care Services, we believe home care is deeply personal. It is not simply about tasks completed — it is about relationships built, dignity preserved, and peace of mind earned. Every interaction is an opportunity to show someone they matter."
            />

            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="text-charcoal-700">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <LinkArrow to="/about">Learn more about our philosophy</LinkArrow>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
