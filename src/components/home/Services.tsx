import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkArrow } from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';
import {
  HeartHandshake,
  Users,
  Home,
  Clock,
  Pill,
  ShieldCheck,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartHandshake,
  Users,
  Home,
  Clock,
  Pill,
  ShieldCheck,
};

export function Services() {
  return (
    <section className="section-y bg-white" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Compassionate Care, Thoughtfully Designed"
          subtitle="We offer a range of home care services that can be tailored to meet the unique needs and preferences of each individual — because no two people, and no two care journeys, are the same."
          center
          className="reveal"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.slug}
                className="reveal card card-hover group flex flex-col p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-havilah-50 text-havilah-700 transition-colors group-hover:bg-havilah-700 group-hover:text-cream-50">
                  {Icon && <Icon className="h-7 w-7" aria-hidden="true" />}
                </div>
                <h3 className="mt-5 text-xl font-bold text-havilah-900">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-600">
                  {service.short}
                </p>
                <div className="mt-5">
                  <LinkArrow to="/services">Learn More</LinkArrow>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
