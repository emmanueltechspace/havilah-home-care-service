import { usePageMeta } from '@/lib/usePageMeta';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABaterial } from '@/components/ui/CTABaterial';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';
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

export function ServicesPage() {
  usePageMeta({
    title: 'Our Services',
    description:
      'Explore HAVILAH’s home care services: personal care, companion care, homemaker services, respite care, medication reminders, and specialized care support in San Antonio, Texas.',
  });

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Home Care Services Designed Around Your Loved One"
        subtitle="Every service we offer can be tailored to meet individual needs and preferences. We work closely with families to create a care plan that fits — and adjusts as needs evolve."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Services detailed */}
      <section className="section-y bg-cream-100">
        <Container>
          <div className="space-y-16">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              const reversed = i % 2 === 1;
              return (
                <article
                  key={service.slug}
                  className="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Text */}
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-havilah-50 text-havilah-700">
                      {Icon && <Icon className="h-7 w-7" aria-hidden="true" />}
                    </div>
                    <h2 className="mt-5 text-2xl font-bold text-havilah-900 sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-charcoal-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-charcoal-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual card */}
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <div className="rounded-3xl bg-gradient-to-br from-havilah-700 to-havilah-900 p-8 shadow-xl shadow-havilah-900/20">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-400">
                        {Icon && <Icon className="h-10 w-10" aria-hidden="true" />}
                      </div>
                      <h3 className="mt-6 font-display text-xl font-bold text-cream-50">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-cream-200">{service.short}</p>
                      <div className="mt-6">
                        <Button to="/request-care" variant="secondary" size="default">
                          Request This Service
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Note about customization */}
      <section className="section-y bg-white">
        <Container>
          <div className="reveal mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Flexible Care"
              title="Care Plans That Adapt to You"
              subtitle="Services can be combined, adjusted, and scheduled to fit your family’s unique situation. Whether you need a few hours a week or more comprehensive support, we will work with you to design the right plan."
              center
            />
            <div className="mt-8">
              <Button to="/request-care" variant="primary" size="lg">
                Request Care
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTABaterial />
    </>
  );
}
