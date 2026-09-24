import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CARE_JOURNEY_STEPS } from '@/lib/constants';

export function CareJourney() {
  return (
    <section className="section-y bg-cream-100" aria-labelledby="journey-heading">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Your Care Journey, Step by Step"
          subtitle="From first conversation to ongoing support, we guide you through a simple, reassuring process designed to reduce stress and build confidence."
          center
          className="reveal"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {CARE_JOURNEY_STEPS.map((step, i) => (
            <div
              key={step.number}
              className="reveal relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line */}
              {i < CARE_JOURNEY_STEPS.length - 1 && (
                <div
                  className="absolute left-[3.25rem] top-8 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-gold-300 to-gold-200 lg:block"
                  aria-hidden="true"
                />
              )}

              <div className="relative flex flex-col items-start">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-havilah-800 font-display text-2xl font-bold text-gold-400 shadow-lg shadow-havilah-900/20">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-bold text-havilah-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
