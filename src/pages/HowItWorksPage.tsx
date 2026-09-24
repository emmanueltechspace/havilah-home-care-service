import { usePageMeta } from '@/lib/usePageMeta';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABaterial } from '@/components/ui/CTABaterial';
import { Button } from '@/components/ui/Button';
import { CARE_JOURNEY_STEPS, IMAGES } from '@/lib/constants';
import { Phone, MessageSquare, ClipboardCheck, HeartHandshake, RefreshCw } from 'lucide-react';

const stepIcons = [Phone, MessageSquare, ClipboardCheck, HeartHandshake];

export function HowItWorksPage() {
  usePageMeta({
    title: 'How It Works',
    description:
      'Learn how HAVILAH’s care process works — from initial consultation to ongoing support. A simple, reassuring step-by-step journey for families seeking home care in San Antonio.',
  });

  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="A Simple, Reassuring Path to Care"
        subtitle="We understand that starting home care can feel overwhelming. That is why we have designed a clear, supportive process that guides you every step of the way — with no pressure and no surprises."
        breadcrumbs={[{ label: 'How It Works' }]}
      />

      {/* Detailed steps */}
      <section className="section-y bg-cream-100">
        <Container>
          <div className="space-y-12">
            {CARE_JOURNEY_STEPS.map((step, i) => {
              const Icon = stepIcons[i];
              const reversed = i % 2 === 1;
              return (
                <div
                  key={step.number}
                  className="reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Step number + icon */}
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-5">
                      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-havilah-800 font-display text-3xl font-bold text-gold-400 shadow-lg shadow-havilah-900/20">
                        {step.number}
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-100 text-gold-700">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                    </div>
                    <h2 className="mt-6 text-2xl font-bold text-havilah-900">{step.title}</h2>
                    <p className="mt-4 text-charcoal-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Visual */}
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <div className="rounded-3xl border border-havilah-100 bg-white p-8 shadow-lg shadow-charcoal-900/5">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold uppercase tracking-wider text-gold-600">
                          Step {step.number} of 4
                        </span>
                      </div>
                      <p className="mt-4 font-display text-lg font-bold text-havilah-900">
                        {step.title}
                      </p>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-havilah-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-500"
                          style={{ width: `${((i + 1) / 4) * 100}%` }}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Ongoing support emphasis */}
      <section className="section-y bg-white">
        <Container>
          <div className="reveal grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-charcoal-900/10">
                <img
                  src={IMAGES.caregiverAssist}
                  alt={IMAGES.caregiverAssistAlt}
                  className="aspect-[4/3] w-full object-cover"
                  width={600}
                  height={450}
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-havilah-50 text-havilah-700">
                <RefreshCw className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-havilah-900 sm:text-3xl">
                Care Is a Relationship, Not a Transaction
              </h2>
              <p className="mt-4 text-charcoal-600 leading-relaxed">
                Our fourth step — Ongoing Support — is really the beginning of a lasting
                partnership. We do not simply start services and disappear. We stay engaged
                with regular check-ins, open communication, and care plan adjustments as
                your loved one’s needs change over time.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Regular care plan reviews and updates',
                  'Open communication with family members',
                  'Caregiver consistency and relationship-building',
                  'Responsive adjustments as needs evolve',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                    <span className="text-sm text-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button to="/request-care" variant="primary">Get Started Today</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABaterial />
    </>
  );
}
