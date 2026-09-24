import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { IMAGES } from '@/lib/constants';
import { ShieldCheck, Heart, MessageSquare } from 'lucide-react';

const assurances = [
  {
    icon: ShieldCheck,
    title: 'Peace of Mind',
    text: 'Knowing your loved one is cared for by compassionate, dedicated professionals.',
  },
  {
    icon: Heart,
    title: 'Personal Connection',
    text: 'A caregiver who knows their preferences, routines, and personality — not just their schedule.',
  },
  {
    icon: MessageSquare,
    title: 'Open Communication',
    text: 'Regular updates and transparent conversations, so you always know how things are going.',
  },
];

export function FamilySection() {
  return (
    <section className="section-y bg-white" aria-labelledby="family-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="reveal relative">
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-charcoal-900/10">
              <img
                src={IMAGES.familyGrandma}
                alt={IMAGES.familyGrandmaAlt}
                className="aspect-[4/3] w-full object-cover"
                width={600}
                height={450}
                loading="lazy"
              />
            </div>
            {/* Accent badge */}
            <div className="absolute -top-5 -right-3 hidden rounded-2xl bg-gold-400 px-5 py-3 text-center shadow-lg sm:block lg:-right-6">
              <p className="font-display text-sm font-bold text-havilah-900">For Families</p>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal">
            <p className="eyebrow mb-3">For Families</p>
            <h2
              id="family-heading"
              className="text-3xl font-bold leading-tight text-havilah-900 sm:text-4xl"
            >
              You Don’t Have to
              <br />
              <span className="text-gradient-gold">Do This Alone</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-600">
              Choosing care for someone you love is one of the most personal decisions
              a family can make. We understand the weight of that decision — the
              questions, the hopes, and sometimes the worry. Our role is to walk
              alongside you with honesty, patience, and genuine partnership.
            </p>

            <div className="mt-8 space-y-5">
              {assurances.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-havilah-50 text-havilah-700">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-havilah-900">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-charcoal-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Button to="/for-families" variant="primary">
                Explore Family Resources
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
