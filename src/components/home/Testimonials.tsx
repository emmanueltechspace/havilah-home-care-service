import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="section-y bg-havilah-50" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Stories From the Families We Serve"
          subtitle="The most meaningful measure of our work is the trust families place in us. Here, approved testimonials from our clients and their families will be featured."
          center
          className="reveal"
        />

        <div className="mx-auto mt-12 max-w-4xl reveal">
          <div className="relative rounded-3xl bg-white p-8 shadow-xl shadow-charcoal-900/5 md:p-12">
            <Quote className="h-12 w-12 text-gold-300" aria-hidden="true" />
            <div className="mt-6 space-y-6">
              {/* Placeholder testimonials */}
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-dashed border-havilah-200 bg-cream-50 p-6 text-center"
                >
                  <p className="text-base italic text-charcoal-400">
                    Approved testimonial will appear here.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-charcoal-300">
                    — Client name and details pending approval
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-charcoal-500">
            We are collecting stories from the families we serve. Check back soon for
            authentic testimonials.
          </p>
        </div>
      </Container>
    </section>
  );
}
