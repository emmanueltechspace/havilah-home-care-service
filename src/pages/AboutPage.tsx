import { usePageMeta } from '@/lib/usePageMeta';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABaterial } from '@/components/ui/CTABaterial';
import { Button } from '@/components/ui/Button';
import { IMAGES, SITE } from '@/lib/constants';
import { Heart, Crown, ShieldCheck, Home, UserCheck } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Compassion', text: 'We lead with empathy, treating every person as we would want our own family treated.' },
  { icon: Crown, title: 'Dignity', text: 'We honor each individual’s life story, preferences, and sense of self in all we do.' },
  { icon: Home, title: 'Comfort', text: 'We believe the best care happens at home, surrounded by the people and things that matter most.' },
  { icon: ShieldCheck, title: 'Trust', text: 'We earn trust through consistency, transparency, and genuine partnership with families.' },
  { icon: UserCheck, title: 'Personalization', text: 'We craft care around the individual — their routines, their needs, their personality.' },
];

export function AboutPage() {
  usePageMeta({
    title: 'About Us',
    description:
      'Learn about HAVILAH Cottage Home Care Services — our philosophy, our values, and our commitment to dignified, compassionate home care in San Antonio, Texas.',
  });

  return (
    <>
      <PageHeader
        eyebrow="About HAVILAH"
        title="Care Rooted in Dignity, Delivered With Heart"
        subtitle="HAVILAH Cottage Home Care Services was founded on a simple belief: that every person deserves to be seen, valued, and cared for with genuine compassion — in the comfort of the place they call home."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Philosophy */}
      <section className="section-y bg-cream-100">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <SectionHeading
                eyebrow="Our Philosophy"
                title="More Than Care — A Relationship"
                subtitle="We see home care as a deeply human endeavor. It is not just about helping with daily tasks; it is about building trust, preserving independence, and enriching the lives of the people we serve. We believe that when care is personal, everyone thrives — the individual receiving care, their family, and the caregiver."
              />
              <p className="mt-6 text-charcoal-600">
                The name HAVILAH evokes a place of abundance and blessing. That is what
 we strive to bring into every home we serve — a sense of abundance in care,
 in compassion, and in peace of mind.
              </p>
              <div className="mt-8">
                <Button to="/services" variant="primary">Explore Our Services</Button>
              </div>
            </div>
            <div className="reveal relative">
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-charcoal-900/10">
                <img
                  src={IMAGES.holdingHands}
                  alt={IMAGES.holdingHandsAlt}
                  className="aspect-[4/3] w-full object-cover"
                  width={600}
                  height={450}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-y bg-white" aria-labelledby="values-heading">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="The Principles That Guide Us"
            subtitle="These five values are not just words on a page — they are the standard we hold ourselves to in every interaction, every decision, and every moment of care."
            center
            className="reveal"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`reveal card p-7 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-havilah-50 text-havilah-700">
                  <value.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-havilah-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service area */}
      <section className="section-y bg-cream-200">
        <Container>
          <div className="reveal mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Our Community"
              title="Proudly Serving San Antonio"
              subtitle={`HAVILAH Cottage Home Care Services is locally owned and operated in ${SITE.addressLine1}. We are honored to serve families across ${SITE.serviceArea}, and we are committed to being a trusted local resource for home care.`}
              center
            />
          </div>
        </Container>
      </section>

      <CTABaterial />
    </>
  );
}
