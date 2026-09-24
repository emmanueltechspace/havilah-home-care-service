import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IMAGES, TEAM_PLACEHOLDERS } from '@/lib/constants';

export function TeamSection() {
  return (
    <section className="section-y bg-cream-100" aria-labelledby="team-heading">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the People Behind the Care"
            subtitle="Compassionate care begins with people who listen, respect, and genuinely care. Our team is here to help families feel supported from the first conversation forward."
            className="reveal"
          />
          <Link
            to="/about"
            className="btn btn-outline hidden flex-shrink-0 md:inline-flex"
          >
            Meet Our Full Team
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_PLACEHOLDERS.map((member, index) => {
            const image = IMAGES[member.image as keyof typeof IMAGES] as string;
            return (
              <article
                key={`${member.role}-${index}`}
                className="reveal group overflow-hidden rounded-2xl bg-white shadow-lg shadow-charcoal-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal-900/10"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="relative overflow-hidden bg-havilah-100">
                  <img
                    src={image}
                    alt="Team photo placeholder"
                    className="aspect-[4/3] w-full object-cover grayscale-[12%] transition-transform duration-500 group-hover:scale-105"
                    width={480}
                    height={360}
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-havilah-700 shadow-sm backdrop-blur-sm">
                    Photo placeholder
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                    <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-havilah-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-gold-700">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                    {member.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 md:hidden">
          <Link to="/about" className="btn btn-outline w-full">
            Meet Our Full Team
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
