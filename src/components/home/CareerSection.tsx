import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { IMAGES } from '@/lib/constants';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Heart,
    title: 'Culture of Care',
    text: 'We invest in our caregivers the same way they invest in our clients — with respect, support, and genuine appreciation.',
  },
  {
    icon: Sparkles,
    title: 'Purpose-Driven Work',
    text: 'Every day is an opportunity to make a meaningful difference in someone’s life. This is work that matters.',
  },
  {
    icon: ArrowRight,
    title: 'Growth Opportunity',
    text: 'We support our team members’ professional development and provide a pathway to grow within our organization.',
  },
];

export function CareerSection() {
  return (
    <section className="section-y bg-cream-200" aria-labelledby="careers-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text side */}
          <div className="reveal">
            <p className="eyebrow mb-3">Careers</p>
            <h2
              id="careers-heading"
              className="text-3xl font-bold leading-tight text-havilah-900 sm:text-4xl"
            >
              Become Part of Something
              <br />
              <span className="text-gradient-gold">Meaningful</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-600">
              We are always looking for compassionate, dedicated people who feel called
              to care. If you believe in treating others with dignity and leading with
              heart, we would love to meet you.
            </p>

            <div className="mt-8 space-y-5">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                    <pillar.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-havilah-900">{pillar.title}</h3>
                    <p className="mt-0.5 text-sm text-charcoal-600">{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Button to="/careers" variant="primary">
                Apply Now
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Image side */}
          <div className="reveal relative order-first lg:order-last">
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-charcoal-900/10">
              <img
                src={IMAGES.caregiverPortrait}
                alt={IMAGES.caregiverPortraitAlt}
                className="aspect-[4/3] w-full object-cover"
                width={600}
                height={450}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl bg-havilah-900 px-5 py-4 shadow-xl sm:block lg:-left-6">
              <p className="font-display text-lg font-bold text-gold-400">Join Our Team</p>
              <p className="mt-0.5 text-sm text-cream-300">Care that changes lives — yours included</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
