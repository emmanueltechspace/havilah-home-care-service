import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WHY_HAVILAH } from '@/lib/constants';
import { Heart, Crown, Home, ShieldCheck, UserCheck } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Crown,
  Home,
  ShieldCheck,
  UserCheck,
};

export function WhyHavilah() {
  return (
    <section className="section-y relative overflow-hidden bg-havilah-900" aria-labelledby="why-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-havilah-800 via-havilah-900 to-havilah-950" aria-hidden="true" />
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-havilah-500/15 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why HAVILAH"
          title={
            <>
              Five Values That Shape
              <br />
              <span className="text-gradient-gold">Every Moment of Care</span>
            </>
          }
          subtitle="We hold ourselves to a standard that goes beyond tasks and schedules. These values are the heartbeat of everything we do."
          center
          light
          className="reveal"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_HAVILAH.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className={`reveal rounded-2xl border border-havilah-700/50 bg-havilah-800/40 p-7 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/50 hover:bg-havilah-800/60 ${
                  i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-400">
                  {Icon && <Icon className="h-7 w-7" aria-hidden="true" />}
                </div>
                <h3 className="mt-5 text-xl font-bold text-cream-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-200">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
